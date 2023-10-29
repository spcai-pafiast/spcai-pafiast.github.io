# Quick Start Guide

```
docker pull hdfgroup/hermes
docker run -it hdfgroup/hermes
hermes@6bcfd7679b0a:~$ stage_in
Usage: mpirun -n [nprocs] ./stage_in [url] [offset] [size] [dpe]
```
CAUTION: The image from DockerHub may throw **Illegal Instruction** for Spack-installed binaries. 
See [#483](https://github.com/HDFGroup/hermes/issues/483).

# Dockerfiles

There are [four Dockerfiles](https://github.com/HDFGroup/hermes/tree/master/docker) at the top level of the Hermes repository. 
Three Docker images built from these Dockerfiles are available on [Docker Hub](https://hub.docker.com/r/hdfgroup/hermes):
- [`hdfgroup/hermes:latest`](https://hub.docker.com/repository/docker/hdfgroup/hermes) - Hermes pre-built & ready to go
- [`hdfgroup/hermes-dev:latest`](https://hub.docker.com/repository/docker/hdfgroup/hermes-dev) - For Hermes developers; it clones Hermes repo.
- [`hdfgroup/hermes-deps:latest`](https://hub.docker.com/repository/docker/hdfgroup/hermes-deps) - For testers; this is used by the two images above.

Running one of these docker containers usually involves mounting volumes or directories of the host system in the docker container via the `-v` option of the `docker run` command, for example:
```
docker run --rm -it -v <host mount point1>:<container mount point1> \
                    -v <host mount point2>:<container mount point2> \
                    ... \
           --entrypoint bash <container image ID>
```

**Developers:** Do a `git pull` and update the Git remotes if you want to keep your changes!

# For Emacs Users
![Emacs](https://img.shields.io/badge/Emacs-%237F5AB6.svg?&style=for-the-badge&logo=gnu-emacs&logoColor=white)

Editing files in a running container in Emacs (running on a host) is rather convenient with [Tramp](https://www.emacswiki.org/emacs/TrampAndDocker) and [`docker-tramp.el`](https://github.com/emacs-pe/docker-tramp.el). For example:

```
C-x C-f /docker:user@container:/path/to/file

where
  user           is the user that you want to use inside the container (optional)
  container      is the id or name of the container
```
Multiple hops are supported as well.


