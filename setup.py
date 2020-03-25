import setuptools
import os

tag = os.environ.get('TAG_NAME', 'v0.0.0')
assert tag
version = tag.strip('v')

setuptools.setup(
    name="vml_proto",
    version=version,
    description="A package containing vml protobuf definitions for python",
    url="https://github.com/economic/vmlapis",
    packages=setuptools.find_packages(),
    classifiers=[
        "Programming Language :: Python :: 3",
    ],
    include_package_data=True,
    zip_safe=False,
)
