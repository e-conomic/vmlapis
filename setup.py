import setuptools
import os

tag = os.environ.get('TRAVIS_TAG', 'v0.0.0')
assert tag
version = tag.strip('v')

setuptools.setup(
    name="ssn_proto",
    version=version,
    description="A package containing ssn protobuf definitions for python",
    url="https://github.com/economic/vmlapis",
    packages=setuptools.find_packages(where='gen/python/'),
    package_dir={'ssn': 'gen/python/ssn', 'lyft': 'gen/python/lyft'},
    classifiers=[
        "Programming Language :: Python :: 3",
    ],
    include_package_data=True,
    zip_safe=False,
)
