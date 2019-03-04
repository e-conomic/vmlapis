#!/bin/bash

find gen/python -type d -exec touch {}/__init__.py \;
