import setuptools

__version__ = '19.0.0'

setuptools.setup(
    name="ssn_proto",
    version=__version__,
    description="A package containing ssn protobuf definitions for python",
    url="https://github.com/economic/vmlapis",
    packages=setuptools.find_packages(where='gen/python/'),
    package_dir={'ssn': 'gen/python/ssn'},
    classifiers=[
        "Programming Language :: Python :: 3",
    ],
)
