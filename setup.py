import setuptools
import os

tag = os.environ.get('TAG_NAME', 'v0.0.0')
assert tag
version = tag.strip('v')

setuptools.setup(
    name="vml_proto-test",
    version=version,
    description="A package containing vml protobuf definitions for python",
    url="https://github.com/economic/vmlapis",
    packages=[f'vml_proto.{p}' for p in setuptools.find_namespace_packages(
        where='gen/python')],
    package_dir={'vml_proto': 'gen/python'},
    classifiers=[
        "Programming Language :: Python :: 3",
    ],
    include_package_data=True,
    zip_safe=False,
)
