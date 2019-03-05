#!/bin/bash

find gen/python/ssn -type d -exec touch {}/__init__.py \;
find gen/python/lyft -type d -exec touch {}/__init__.py \;
