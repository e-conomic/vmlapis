import setuptools

__version__ = '0.0.2'

setuptools.setup(
    name="ssn_proto",
    version=__version__,
    description="A package containing ssn protobuf definitions for python",
    url="https://github.com/economic/ssn",
    packages=setuptools.find_packages(),
    classifiers=[
        "Programming Language :: Python :: 3",
    ],
)