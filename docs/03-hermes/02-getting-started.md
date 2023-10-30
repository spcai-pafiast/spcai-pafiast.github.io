# Building Hermes

There are several ways to obtain a working Hermes installation. Information on
dependencies can be found in the [README](https://github.com/HDFGroup/hermes/blob/master/README.md).

1. [Docker Image](https://hub.docker.com/r/hdfgroup/hermes)
  * We also maintain Dockerfiles for [Hermes
    development](https://github.com/HDFGroup/hermesblob/master/dev.Dockerfile) and [Hermes
    dependencies](https://github.com/HDFGroup/hermesblob/master/deps.Dockerfile)
2. CMake
  * Instructions can be found in the [README](https://github.com/HDFGroup/hermes/blob/master/README.md)
3. Spack
  * Instructions can be found in the [README](https://github.com/HDFGroup/hermes/blob/master/README.md)

If you get stuck, the root of the repository contains a `ci` folder where we
keep the scripts we use to build and test Hermes in a Github Actions workflow.
The workflow file itself is [here](https://github.com/HDFGroup/hermes//blob/master/.github/workflows/main.yml).

# Deploying Resources

Hermes is an *application extension*. Storage resources are deployed under
Hermes control by

1. Configuring Hermes for your system *and* application
   - [Details](../04-Hermes-Configuration/3.-Hermes-Configuration.md)
2. Making your application "Hermes-aware"

An application can be made aware of Hermes in at least three different ways:

- Through [Hermes *adapters*](../07-Adapters/01-Adapters.md), `LD_PRELOAD`-able shared libraries
  which intercept common I/O middleware calls such as UNIX STDIO, POSIX, and
  MPI-IO (NOTE: when Hermes is compiled with DHERMES_USE_ADDRESS_SANITIZER=ON,
  which is ON by default, you must also ensure that libasan is preloaded first,
  before anything else)

[//]: # (- Through an [HDF5 virtual file driver &#40;VFD&#41;]&#40;./HDF5-Hermes-VFD&#41;)
- By directly targeting the Hermes native API

These options represent different use cases and trade-offs, for example, with
respect to expected performance gains and required code change.

## Adapters

When using the `STDIO` adapter (intercepting `fopen`, `fwrite`, etc.) and the
`POSIX` adapter (intercepting `open`, `write`, etc.), there are multiple ways to
deploy Hermes with an existing application.

> **NOTE:** The `MPI-IO` adapter is still experimental, and only supports MPICH
> at this time.

### A note about Address Sanitization (libasan)

If you compile hermes with DHERMES_USE_ADDRESS_SANITIZER=ON,
you must LD_PRELOAD the libasan
used to build Hermes, in addition to the interceptor. To locate libasan,
run the following command:
```bash
gcc -print-file-name=libasan.so
```

Note that libasan will detect memory leaks and errors in the program
linking to hermes as well. To avoid detecting memory leaks in the
client program, do the following:
```bash
# Create or modify a file for storing libasan exclusions:
nano ${HERMES_ROOT}/test/data/asan.supp

# Set the libasan environment variable to point to the file
LSAN_OPTIONS=suppressions=${HERMES_ROOT}/test/data/asan.supp
```

Check the example in the section below (Hermes services running in same process
as the application) to see how to use hermes + asan together.

### Deploying an Application with Hermes

The Hermes daemon is responsible for tracking various metadata, and it is
required to be launched before your application. There should only be
one Hermes daemon per node. This can be accomplished using SSH or MPI.
The following example uses MPICH to deploy hermes on a cluster of two nodes.
We then use MPICH to finalize the daemon and flush all remaining content
back to the PFS.

```bash
# We must start one and only one Hermes daemon on each node.
# This job is started in the background so the terminal doesn't block forever
# HERMES_CONF is the configuration of the server.
mpirun -n 2 -ppn 1 \
  -genv PATH=${PATH} \
  -genv LD_LIBRARY_PATH=${LD_LIBRARY_PATH} \
  -genv HERMES_CONF=/path/to/hermes.yaml \
  ${HERMES_INSTALL_DIR}/bin/hermes_daemon &

# Now we can start our application
# HERMES_CONF is the same as the one when spawning the daemon
# HERMES_CLIENT_CONF contains any parameters relevant to the specific program
mpirun -n 4 -ppn 2 \
  -genv PATH=${PATH} \
  -genv LD_LIBRARY_PATH=${LD_LIBRARY_PATH} \
  -genv LD_PRELOAD=${HERMES_INSTALL_DIR}/lib/libhermes_posix.so \
  -genv HERMES_CLIENT_CONF=/path/to/hermes_client.yaml \
  -genv HERMES_CONF=/path/to/hermes_server.yaml \
  ./my_app

# Now we can finalize
# This will automatically flush all dirty data remaining back to the PFS
HERMES_CONF=/path/to/hermes.yaml \
${HERMES_INSTALL_DIR}/bin/finalize_hermes
```

# Hermes Tutorial

Here we will walk through an entire example of using Hermes with
[IOR](https://github.com/hpc/ior). IOR supports several I/O APIs (`-a` option),
including POSIX, MPI-IO, and HDF5. Hermes has adapters for POSIX, MPI-IO, and HDF5.
For serial (single process) HDF5, the Hermes VFD can be enabled via environment variable
as described [here](https://github.com/HDFGroup/hermes/tree/master/adapter/vfd#method-3-dynamically-loaded-by-environment-variable). Parallel HDF5 can use the MPI-IO adapter.
For this tutorial, we'll focus on POSIX. We assume you already have working
Hermes and IOR installations. See the [README](https://github.com/HDFGroup/hermes/blob/master/README.md) for
Hermes installation details.

## Workload

We will simulate a checkpoint/restart workload in which a group of processes
each write a checkpoint file, and then another group of processes on different
nodes reads the checkpoint files. In the default case, the checkpoint files will
be written to and then read from the parallel file system. When running with
Hermes, the data will be buffered in fast, local media resulting in a nice
speedup with no code changes required.

## Target system

### Clients

I'm running on a cluster with 8 client nodes, each with the following
characteristics:

```
Intel(R) Xeon(R) Silver 4114 CPU @ 2.20GHz
40 cores (Hyperthreading enabled)
46 GiB DRAM
40 Gbps ethernet with RoCE capability
```

### Storage Tiers

| Name | Description                                        | Measured Write Bandwidth |
|------|----------------------------------------------------|--------------------------|
| PFS  | OrangeFS running on 8 server nodes, backed by HDDs | 536 MiB/s                |
| NVMe | Node-local NVMe attached SSDs.                     | 1918 MiB/s               |
| RAM  | Node-local DRAM.                                   | 79,061 MiB/s             |

## Hermes configuration

Here we describe the Hermes configuration format. Hermes has two configurations:
one for the daemon and one for the client program. We will briefly discuss
each here.
See [Configuration](../04-Hermes-Configuration/3.-Hermes-Configuration.md) for more details.

### Daemon (server) configuration

For a documented example of how to create a Hermes configuration, please
check the [default configuration](https://github.com/HDFGroup/hermes/blob/master/config/hermes_server_default.yaml).
Note, the default config is designed for single-node cases. We use YAML to
define the Hermes configuration format.

#### Defining the buffering locations
First, we should define the kind of storage devices that are targeted for
intermediate buffering.
```yaml
devices:
  ram:
    mount_point: ""
    capacity: 50MB
    block_size: 4KB
    slab_sizes: [ 4KB, 16KB, 64KB, 1MB ]
    bandwidth: 6000MBps
    latency: 15us
    is_shared_device: false
    borg_capacity_thresh: [0.0, 1.0]
  nvme:
    mount_point: "/mnt/nvme/hermes_nvme"
    capacity: 100MB
    block_size: 4KB
    slab_sizes: [ 4KB, 16KB, 64KB, 1MB ]
    bandwidth: 1GBps
    latency: 600us
    is_shared_device: false
    borg_capacity_thresh: [ 0.0, 1.0 ]
  pfs:
    mount_point: "${HOME}/hermes_pfs"
    capacity: 100MB
    block_size: 64KB # The stripe size of PFS
    slab_sizes: [ 4KB, 16KB, 64KB, 1MB ]
    bandwidth: 100MBps # Per-device bandwidth
    latency: 200ms
    is_shared_device: true
    borg_capacity_thresh: [ 0.0, 1.0 ]
```

Here we have a YAML dictionary called devices. A semantic name is then provided
for each device targeted for buffering. To tell Hermes a device is considered
RAM, we use mount_point being the empty string. For other devices, this is
can be a path to a directory located on a filesystem.

#### 


## Running

### IOR Baseline

```bash
mpirun -n 48 -ppn 12 \
  ior -w -r -o /PFS/USER/ior.out -t 1m -b 128m -F -e -Y -C -O summaryFormat=CSV
```

Here we launch 48 IOR processes across 4 nodes. The IOR options are explained in
the following table.

| Flag | Description |
|------|-------------|
|-w    | Perform write |
|-r    | Perform read |
|-o    | Output/Input file |
|-t    | Size per write |
|-b    | Total I/O size per rank |
|-F    | Create one file for each process |
|-e    | Call `fsync` on file close. |
|-Y    | Call `fsync` after each write. |
|-C    | Shuffle ranks so that they read from different nodes than they wrote to |
|-O summaryFormat  | Show the output in a compact, CSV format |

Some of these options require justification.

* `-Y`: We do direct (non-buffered) I/O in order to simulate a situation with
  high RAM pressure. If the application is using most of the RAM, then the OS
  page cache will have less RAM available for buffering.
* `-C`: This option simulates a situation where different nodes read the
  checkpoint than the ones that wrote it, resulting in a situation where the
  checkpoint cannot be read from the page cache, and forcing the app to go to
  the PFS.

 Here are the results:

 ```
access,bw(MiB/s),IOPS,Latency,block(KiB),xfer(KiB),open(s),wr/rd(s),close(s),total(s),numTasks,iter
write,30.3120,30.3795,1.5543,131072.0000,1024.0000,15.0489,202.2413,35.0600,202.6921,48,0
read,2012.0224,2026.8185,0.0158,131072.0000,1024.0000,0.4558,3.0314,1.0307,3.0536,48,0
 ```

Our write bandwidth is 30 MiB/s and our read bandwidth is 2012 MiB/s.

### IOR with Hermes

To enable Hermes with an IOR checkpoint/restart workload, we must start a
daemon, `LD_PRELOAD` a Hermes adapter and set some environment variables.

> **NOTE**: As a temporary workaround to [issue #258](https://github.com/HDFGroup/hermes/issues/258) we must
> comment out the line `backend->close(fd, params->backend_options);` in
> `ior.c:TestIoSys` before compiling IOR. This change is implemented in the `chogan/hermes` branch of the IOR fork [here](https://github.com/ChristopherHogan/ior/tree/chogan/hermes).

We spawn a daemon on each node, then run our app with the appropriate
environment variables, similar to the process described
[above](01-Getting-Started.md#hermes-services-running-in-separate-process-as-a-daemon).

```bash
HERMES_CONF_PATH=/absolute/path/to/hermes.yaml

# Start one daemon on each node
mpirun -n 4 -ppn 1 \
  -genv HERMES_CONF ${HERMES_CONF_PATH} \
  ${HERMES_INSTALL_DIR}/bin/hermes_daemon &

# Give the daemons a chance to initialize
sleep 3

# Start "checkpoint" app
mpirun -n 48 -ppn 12 \
  -genv LD_PRELOAD ${HERMES_INSTALL_DIR}/lib/libhermes_posix.so \
  -genv HERMES_CONF ${HERMES_CONF_PATH} \
  -genv HERMES_CLIENT 1 \
  -genv ADAPTER_MODE SCRATCH \
  -genv HERMES_STOP_DAEMON 0 \
  ior -w -k -o ${CHECKPOINT_FILE} -t 1m -b 128m -F -e -Y -O summaryFormat=CSV

# Start the "restart" app
mpirun -n 48 -ppn 8 \
  -genv LD_PRELOAD ${HERMES_INSTALL_DIR}/lib/libhermes_posix.so \
  -genv HERMES_CONF ${HERMES_CONF_PATH} \
  -genv HERMES_CLIENT 1 \
  -genv ADAPTER_MODE SCRATCH \
  ior -r -o ${CHECKPOINT_FILE} -t 1m -b 128m -F -e -O summaryFormat=CSV
```

Results:

```
access,bw(MiB/s),IOPS,Latency,block(KiB),xfer(KiB),open(s),wr/rd(s),close(s),total(s),numTasks,iter
write,1748.0946,1928.3122,0.0122,131072,1024,1.9385,3.1862,0.8167,3.5147
read,2580.2756,2861.2635,0.0074,131072,1024,0.1923,2.1473,1.7458,2.3811
```

We get a nice boost in write bandwidth, and a modest speedup in read bandwidth,
all with no code changes.

[[../images/IOR_Checkpoint_Restart.png|Checkpoint-Restart results]]

We haven't done any performance optimization yet, so I expect to bridge the gap
significantly between the 2.5 GiB read speed of Hermes and the baseline speed of
reading from RAM (tmpfs on /dev/shm) with IOR of 60 GiB.
