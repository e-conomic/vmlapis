## Set up pip

### Insert the following snippet into your [.pypirc](https://packaging.python.org/en/latest/specifications/pypirc/) (~/.pypirc)

```pypi
[distutils]
index-servers =
vml-apis-python

[vml-apis-python]
repository: https://europe-west4-python.pkg.dev/dev-vml-cm/vml-apis-python/

```

### Insert the following snippet into your [pip.conf](https://pip.pypa.io/en/stable/cli/pip_config/)

```
[global]
extra-index-url = https://europe-west4-python.pkg.dev/dev-vml-cm/vml-apis-python/simple/
```

or run this command

```bash
python -m pip config set global.extra-index-url https://europe-west4-python.pkg.dev/dev-vml-cm/vml-apis-python/simple/
```

## Import grpcio and vml-proto package

```
pip install grpcio vml-proto protobuf
```
