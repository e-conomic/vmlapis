# flake8: noqa
from invoke import task


@task
def build_py(ctx):
    ctx.run('python3 -m grpc_tools.protoc -I . --python_out=. --grpc_python_out=. ovlservice/ovlservice.proto')
    ctx.run('python3 -m grpc_tools.protoc -I . --python_out=. --grpc_python_out=. imageservice/imageservice.proto')
    ctx.run('python3 -m grpc_tools.protoc -I ./imageservice -I ./ovlservice -I . --python_out=. --grpc_python_out=. ssn/ssn.proto')
    ctx.run('touch ./ssn/__init__.py')
    ctx.run('python3 setup.py bdist_wheel')


@task
def build_go(ctx):
    ctx.run('protoc --proto_path=. ssn/*.proto  --go_out=plugins=grpc,paths=source_relative:.')
    ctx.run('protoc --proto_path=. ssn/imageservice/*.proto  --go_out=plugins=grpc,paths=source_relative:.')
    ctx.run('protoc --proto_path=. ssn/mlservice/*.proto  --go_out=plugins=grpc,paths=source_relative:.')
