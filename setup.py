import setuptools

__version__ = '4.1.0'

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
