# flake8: noqa
from invoke import task


@task
def build_py(ctx):
    ctx.run('python3 -m grpc_tools.protoc -I . --python_out=. --grpc_python_out=. ssn/mlservice/mlservice.proto')
    ctx.run('python3 -m grpc_tools.protoc -I . --python_out=. --grpc_python_out=. ssn/imageservice/imageservice.proto')
    ctx.run('python3 -m grpc_tools.protoc -I . --python_out=. --grpc_python_out=. ssn/ssn.proto')
    ctx.run('touch ./ssn/__init__.py')
    ctx.run('touch ./ssn/imageservice/__init__.py')
    ctx.run('touch ./ssn/mlservice/__init__.py')


@task
def build_go(ctx):
    ctx.run('protoc -I . ssn/*.proto  --go_out=plugins=grpc,paths=source_relative:.')
    ctx.run('protoc -I . ssn/imageservice/*.proto  --go_out=plugins=grpc,paths=source_relative:.')
    ctx.run('protoc -I . ssn/mlservice/*.proto  --go_out=plugins=grpc,paths=source_relative:.')
