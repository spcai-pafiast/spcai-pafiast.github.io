
Hostfiles contain a set of machines.

# 4.1. Host Text Files

Hostfiles can be stored as text files on a filesystem.
They have the following syntax:
```
ares-comp-01
ares-comp-[02-04]
ares-comp-[05-09,11,12-14]-40g
```

# 4.2. Hostfile Import

```python
from jarvis_util.util.hostfile import Hostfile
```

# 4.3. Hostfile Constructor

The hostfile has the following constructor:
```python
class Hostfile:
    """
    Parse a hostfile or store a set of hosts passed in manually.
    """

    def __init__(self, hostfile=None, all_hosts=None, all_hosts_ip=None,
                 text=None, find_ips=True):
        """
        Constructor. Parse hostfile or store existing host list.

        :param hostfile: The path to the hostfile
        :param all_hosts: a list of strings representing all hostnames
        :param all_hosts_ip: a list of strings representing all host IPs
        :param text: Text of a hostfile
        :param find_ips: Whether to construct host_ip and all_host_ip fields
        """
```

# 4.4. Hostfile for the current machine

To get the localhost file:
```python
hostfile = Hostfile()
```

# 4.5. Hostfile from a filesystem

To load a hostfile from the filesystem:
```python
hostfile = Hostfile(hostfile=f'{HERE}/test_hostfile.txt')
```

# 4.6. Host names and IPs

To get the host names and IP addresses, the Hostfile stores the ```hosts```
and ```hosts_ip``` variables. They are lists of strings.

```python
hostfile = Hostfile()
print(hostfile.hosts)
print(hostfile.hosts_ip)
```

Output:
```
['localhost']
['127.0.0.1']
```
