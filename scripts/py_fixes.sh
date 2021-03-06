#!/bin/bash
shopt -s globstar

# replace for asgt modules
sed -i 's/from asgt/from vml_proto.asgt/' gen/python/asgt/**/*.py
# replace for ssn modules
sed -i 's/from ssn/from vml_proto.ssn/' gen/python/ssn/**/*.py
# replace for gen_bq_schema modules
sed -i 's/from gen_bq_schema/from vml_proto.gen_bq_schema/' gen/python/**/*.py
