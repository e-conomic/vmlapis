#!/bin/bash

find gen/python/gen_bq_schema -type d -exec touch {}/__init__.py \;
find gen/python/ssn -type d -exec touch {}/__init__.py \;
find gen/python/asgt -type d -exec touch {}/__init__.py \;
