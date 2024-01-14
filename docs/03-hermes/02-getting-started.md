# 1. Building Hermes

There are several ways to obtain a working Hermes installation. Information on
dependencies can be found in the [README](https://github.com/HDFGroup/hermes/blob/master/README.md).

- [Docker Image](https://hub.docker.com/r/hdfgroup/hermes)
  - We also maintain Dockerfiles for [Hermes
    development](https://github.com/HDFGroup/hermesblob/master/dev.Dockerfile) and [Hermes
    dependencies](https://github.com/HDFGroup/hermes/blob/master/docker/deps.Dockerfile)
- CMake
  - Instructions can be found in the [README](https://github.com/HDFGroup/hermes/blob/master/README.md)
- Spack
  - Instructions can be found in the [README](https://github.com/HDFGroup/hermes/blob/master/README.md)

If you get stuck, the root of the repository contains a `ci` folder where we
keep the scripts we use to build and test Hermes in a Github Actions workflow.
The workflow file itself is [here](https://github.com/HDFGroup/hermes/blob/master/.github/workflows/main.yml).

## 2. Configuring + Deploying Hermes

The Hermes daemon is responsible for tracking various metadata, and it is
required to be launched before your application. There should only be
one Hermes daemon per node. We recommend
[Jarvis](https://github.com/grc-iit/jarvis-cd.git) for deploying Hermes.
Jarvis is a framework that configures and deploys complex applications and
services. Jarvis will automatically set various environment variables
that Hermes expects in order for applications to be deployed. We have
also integrated several applications into Jarvis that can be seamlessly
deployed with Hermes.

### 2.1. Install Jarvis

To install jarvis, do the following:
```bash
export JARVIS_PATH=${PWD}/jarvis-cd
git clone https://github.com/grc-iit/jarvis-cd.git ${JARVIS_PATH}
cd ${JARVIS_PATH}
pip install -e . -r requirements.txt
```

### 2.2. Initialize Jarvis

After installing, Jarvis MUST be configured for your specific system. The first
step is to define places for storing Jarvis configuration data. Note that large data
objects are **never** intended to be stored in these directories.

There are three places where configuration data is stored:
* CONFIG_DIR: A directory where jarvis metadata for pkgs and pipelines are stored. This
directory can be anywhere that the current user can access.
* PRIVATE_DIR: A directory which is common across all machines, but stores data locally to the
machine. Some jarvis pkgs require certain data to be stored per-machine. /tmp
would be an example.
* SHARED_DIR: A directory which is common across all machines, where each machine has the same
view of data in the directory. In a supercomputing site, this would typically be
in your home directory.

```bash
jarvis init ${CONFIG_DIR} ${PRIVATE_DIR} ${SHARED_DIR}
```

### 2.3. Build a Resource Graph

A resource graph contains the storage and networking configuration
of the machines you intend to deploy Hermes on.

#### 2.3.1. Bootstrapping from an existing machine

We have several resource graphs for different machines, located under
``${JARVIS_PATH}/builtin/resource_graph``. There are resource graphs
for different machines spanning IIT, PNNL, and Argonne. To view the
set of preconfigured machines, run:

```bash
ls ${JARVIS_PATH}/builtin/resource_graph
```

If one of your machines is there, then do:
```bash
jarvis bootstrap from [MY_MACHINE]
```

For example, ares is one of the machines:
```bash
jarvis bootstrap from ares
```

#### 2.3.2. Building a new resource graph

If a resource graph for your machine is not available, you will have to
define one manually.

The resource graph **must** be created at exactly the following path:
```bash
${JARVIS_PATH}/config/resource_graph.yaml
```

For storage devices, the required parameters are as follows:
```yaml
fs:
- avail: 500G        # Available capacity of the device (Suffix: K,G,T,P)
  dev_type: ssd      # Type of storage hardware (hdd, ssd, nvme, pmem)
  mount: /mnt/ssd/${USER}  # Where to place data on the device
  shared: false            # Is this shared across nodes (e.g., a PFS?)
```

For networks, the parameters are as follows:
```yaml
net:
- domain: lo             # Domain of network. Can be null.
  fabric: 127.0.0.1/32  
  provider: tcp;ofi_rxm
  shared: false          # Is this network shared across nodes. E.g., localhost is not
  speed: 40G
```
This information can be discovered using tools such as ``fi_info`` provided
by libfabric.

### 2.4. Building an Environment

We will now load all necessary environment variables and build a
Jarvis environment named hermes_env:
```bash
spack load hermes
jarvis env build hermes_env
```

hermes_env will store all important environment variables, including PATH,
LD_LIBRARY_PATH, etc. in a YAML file.

### 2.5. Set the active Hostfile

The hostfile contains the set of nodes that the pipeline will run over.
This is structured the same way as a traditional MPI hostfile.

An example hostfile:
```txt
ares-comp-20
ares-comp-[21-25]
```

To set the active hostfile, run:
```bash
jarvis hostfile set /path/to/hostfile
```

Note that every time you change the hostfile, you will need to update the
pipeline. Jarvis does not automatically detect changes to this file.
```bash
jarvis pipeline update
```

#### 2.6. Create an empty pipeline:
```bash
jarvis pipeline create hermes
```
hermes is the name of the pipeline. It doesn't need to be hermes,
it can be any name.

#### 2.7. Copy the environment cache:
```bash
jarvis pipeline env copy hermes_env
```
This will use the hermes_env environment that was previously created in

#### 2.8. Add Hermes runtime

```bash
jarvis pipeline append hermes_run
jarvis pkg configure hermes_run \
sleep=5 \
include=${HOME}/ior_data
```

Jarvis will automatically produce a Hermes client and server configuration that
contains all storage devices and fastest available network defined in the
resource graph. These configurations will be located in:

```
$(jarvis path +shared)/hermes_run/hermes_server.yaml
$(jarvis path +shared)/hermes_run/hermes_client.yaml
```

## 2.9. Starting + Stopping Hermes

To start Hermes:
```bash
jarvis pipeline start
```

## 2.10. Stopping and Killing Hermes

To gracefully stop Hermes and flush data back to the PFS:
```bash
jarvis pipeline stop
```

To kill a Hermes deployment that isn't stopping gracefully:
```bash
jarvis pipeline kill
```

## 2.11. Cleanup

To erase data produced by the pipeline:
```bash
jarvis pipeline clean
```

To destroy the pipeline:
```bash
jarvis pipeline destroy
```

## 3. Configuring + Deploying Hermes with an Application

As previously stated, Jarvis can be used to deploy and application
with Hermes. This will automatically set environment variables
(e.g., LD_PRELOAD) that will be necessary for the application to
run.

### 3.1. Build an Environment

We will now load all necessary environment variables and build a
Jarvis environment named hermes_env:
```bash
spack load hermes
spack load ior
jarvis env build hermes_ior_env
```

hermes_ior_env will store all important environment variables, including PATH,
LD_LIBRARY_PATH, etc. in a YAML file.

### 3.2. Create an empty pipeline:
```bash
jarvis pipeline create hermes_ior
```

### 3.3. Copy the environment cache:
```bash
jarvis pipeline env copy hermes_ior_env
```

### 3.4. Set the active hostfile
```bash
jarvis hostfile set /path/to/hostfile
```

### 3.5. Add Hermes runtime

```bash
jarvis pipeline append hermes_run
jarvis pkg configure hermes_run \
sleep=5 \
include=${HOME}/ior_data
```

This will ensure that if a Hermes interceptor is used, it will intercept
all paths in ``${HOME}/ior_data``.

### 3.6. Add Hermes MPI-IO interceptor

```bash
jarvis pipeline append hermes_api
jarvis pkg configure hermes_api +mpi
```

This will automatically locate the interceptor library by
traversing various environment variables. This will ensure
that MPI-IO is intercepted by Hermes.

### 3.7. Add IOR

```bash
jarvis pipeline append ior
jarvis pkg configure ior \
xfer=1m \
block=1g \
nprocs=64 \
ppn=16 \
+write +read \
out=${HOME}/ior_data/ior.bin \
api=mpiio
```

This IOR will perform 1GB of I/O per-process (block) in units of 1m (xfer) and
produce a single output file ``${HOME}/ior_data/ior.bin``(out) using MPI-IO
(api). The total amount of I/O performed will be 64GB spread across 4 nodes.

### 3.8. Run the Pipeline

To run the pipeline:
```bash
jarvis pipeline run
```

This will launch Hermes, execute IOR, and then stop Hermes. It is equivalent
to:
```bash
jarvis pipeline start
jarvis pipeline stop
```

### 3.9. Cleanup

The following will delete intermediate data generated by Hermes + IOR:
```bash
jarvis pipeline clean
```
