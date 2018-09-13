# flake8: noqa
from invoke import task


@task
def build_py(ctx):
    ctx.run('python3 -m grpc_tools.protoc -I . --python_out=py --grpc_python_out=py ovlservice/ovlservice.proto')
    ctx.run('python3 -m grpc_tools.protoc -I . --python_out=py --grpc_python_out=py imageservice/imageservice.proto')
    ctx.run('python3 -m grpc_tools.protoc -I ./imageservice -I ./ovlservice -I . --python_out=py --grpc_python_out=py ssn/ssn.proto')
    ctx.run('touch ./py/imageservice/__init__.py')
    ctx.run('touch ./py/ovlservice/__init__.py')
    ctx.run('touch ./py/ssn/__init__.py')
    ctx.run('python3 setup.py bdist_wheel')


@task
def build_go(ctx):
    ctx.run('protoc --proto_path=. ssn/*.proto  --go_out=plugins=grpc,paths=source_relative:.')
    ctx.run('protoc --proto_path=. imageservice/*.proto  --go_out=plugins=grpc,paths=source_relative:.')
    ctx.run('protoc --proto_path=. ovlservice/*.proto  --go_out=plugins=grpc,paths=source_relative:.')
