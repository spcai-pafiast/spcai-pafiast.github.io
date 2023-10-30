# Programming

In this section, we will discuss the general steps of building a program
on top of the Hermes native API. We will focus on the core data structures
provided by Hermes -- Buckets and Blobs.

## Basic API Example

```cpp
#include <hermes.h>
#include <bucket.h>

int main() {
  HERMES->Create(hermes::HermesType::kClient);
  Bucket bkt = hermes->GetBucket("hello");
  size_t blob_size = KILOBYTES(4);
  Context ctx;

  for (size_t i = 0; i < num_blobs; ++i) {
    hermes::Blob blob(blob_size);
    std::string name = std::to_string(i);
    char nonce = i % 256;
    memset(blob.data(), nonce, blob_size);
    bkt.Put(name, blob, blob_id, ctx);
  }

  for (size_t i = 0; i < num_blobs; ++i) {
    std::string name = std::to_string(i);
    char nonce = i % 256;
    hermes::Blob blob;
    bkt.GetBlobId(name, blob_id);
    bkt.Get(blob_id, blob, ctx);
  }
}
```

- HERMES is a singleton macro provided in hermes.h.
- GetBucket will either create a bucket or get the bucket if it exists.
  This operation is concurrency-safe. I.e., it is guaranteed only one
  thread or process calling this function will create the bucket if it
  DNE.
- Context is optional. It contains the ability to override
  defaults defined in the server and client configuration files. For
  example, you can set a custom DPE to use for a blob Put.
- `hermes::Blob analagous to and std::vector<char>`. It's not quite the
  same thing, but we won't go into detail here.
- bkt.Put will put a blob into the bucket. Put destroys all content
  if the blob previously existed. At this time, blobs are considered
  immutable.
- bkt.Get will get the contents of an entire blob.

## Basic Deployment

Here we will describe the basic flow of deploying a Hermes program.

### Create a server configuration

Technically, this is optional. Hermes has a
[default server
configuration](https://github.com/HDFGroup/hermes/blob/master/config/hermes_server_default.yaml).
The main important thing here is defining the storage devices on your machines.
The example file has more details.

The Hermes server configuration is also described in Section 3.

### Launch the Hermes Daemon

To launch the daemon on a single node, do the following:

```bash
HERMES_CONF=/path/to/your/hermes_server.yaml \
hermes_daemon
```

If you need the daemon on multiple nodes, we support MPI

```bash
mpirun -n 4 -ppn 1 --hostfile=hostfile.txt \
-genv HERMES_CONF /path/to/your/hermes_server.yaml \
hermes_daemon
```

Make sure to only spawn one daemon per node.

### Launch your application

```bash
HERMES_CONF=/path/to/your/hermes_server.yaml \
HERMES_CLEINT_CONF=/path/to/your/hermes_client.yaml \
./myprogram
```
