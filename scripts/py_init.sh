#!/bin/bash

find gen/python/ssn -type d -exec touch {}/__init__.py \;
