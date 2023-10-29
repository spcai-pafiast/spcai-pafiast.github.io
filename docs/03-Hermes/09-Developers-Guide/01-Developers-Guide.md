# Debugging Hermes

Hermes can be complicated to debug due to its distributed and asynchronous
nature. Faults can happen in the client program, or in the Hermes daemon.
The first step when encountering problems is to compile in Debug mode.

```cmake
cmake .. -DCMAKE_BUILD_TYPE=Debug
```

The Debug mode will increase the number of logging statements the program
uses to give you a stronger hint as to where the problem occurs. These
statements are typically compiled out for performance reasons.

Secondly, make sure to use an IDE which supports visual debugging. Debugging
using a terminal with gdb can be very cumbersome, especially when multi-process
cases come along.

# Preparing For Release

- [ ] Create a GitHub Project for the _next_ release
- [ ] Update the `HERMES_VERSION_*` variables in `CMakeLists.txt`
- [ ] Update `PROJECT_NUMBER` in `Doxyfile.in`.
- [ ] To make release note generation as automated as possible, make sure
  relevant pull requests that are part of the release have proper labels and and
  titles, as that information will show up directly in the generated release
  notes in the next step.
- [ ] Draft a release on Github. Click `auto-generate release notes` and edit
  the result as necessary. Fill in the new tag, and select "Create new tag x.x.x
  on publish" so that Github will automatically tag the release when it is
  published.
- [ ] The docker containers will be automatically built and pushed to docker hub
  whenever a new tag is added. Check the CI actions to make sure there were no
  errors.
- [ ] Copy/move ideas to the project for the next release
- [ ] Close and archive the project for the _current_ release
- [ ] Merge the latest release branch (if one exists) of the wiki into the wiki
- `master` branch.
- [ ] Make an announcement in the Hermes topic of the HDF forum.
- [ ] Send Lori a note for the next HDF5 newsletter.

## Preparing Pull Request (PR)

  Please run these two steps and remove all warnings.
```
make dox
make lint
```

## PR Check Failure

GitHub Actions for PR check may fail because it uses a Spack cache.
The cache does not have to change often (unless you've added dependencies),
so this should be done only in this case. To refresh the github cache,
modify the file "ci/install_deps.sh" in some way. For
example, by adding a comment. If you check the [github workflow which produces
the cache](https://github.com/HDFGroup/hermes/blob/master/.github/workflows/main.yml), it uses a hash
of install_deps.sh to locate a cache.

# Introduction to our Continuous Integration (CI)

We are primarily using Python for managing for running unit tests. Under
[our root CMakeList](https://github.com/HDFGroup/hermes/blob/master/CMakeLists.txt), we implement a
CMake function called pytest, which wraps around the Python testing
framework called py_hermes_ci, which is located under ci/py_hermes_ci.

Fundamentally, py_hermes_ci relies on our library jarvis-util,
(located under ci/jarvis-util), which provides utilities to execute
binaries in Python.

## API Test

 Update `test/CMakeLists.txt` with your new .cc test code name.
For example, if you add `trait_order.cc`, add `trait_order` as follows:
```
set(API_TESTS dpe_optimization_test dpe_random_test
    dpe_roundrobin_test end_to_end_test vbucket_test trait_order)
```  

# Adding a New Adapter

1. Create a new directory under the `adapter` directory.

# Customizing Data Placement Engine

Data Placement Engine (DPE) is the heart of Hermes performance.
Developers may want to replace the default engine using different optimization algorithms.

## Codes for Testing DPE

You can quickly check how DPE is tested.

* [test/dpe_optimization_test.cc](https://github.com/HDFGroup/hermes/blob/master/test/dpe_optimization_test.cc)
