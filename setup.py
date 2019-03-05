import setuptools
import os
import datetime


date = datetime.datetime.now().strf('%Y%m%d')

setuptools.setup(
    name="ssn_proto",
    version='{}-{}'.format(date, os.environ.get('TRAVIS_BUILD_NUMBER', 0)),
    description="A package containing ssn protobuf definitions for python",
    url="https://github.com/economic/vmlapis",
    packages=setuptools.find_packages(where='gen/python/'),
    package_dir={'ssn': 'gen/python/ssn'},
    classifiers=[
        "Programming Language :: Python :: 3",
    ],
)
