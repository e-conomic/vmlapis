#!/bin/bash

find gen/python/ssn -type d -exec touch {}/__init__.py \;
find gen/python/lyft -type d -exec touch {}/__init__.py \;

sed -i '' 's|from google.cloud.vision.v1|from google.cloud.vision_v1|g' ./gen/python/ssn/ocrservice/v1/ocrservice_pb2.py
