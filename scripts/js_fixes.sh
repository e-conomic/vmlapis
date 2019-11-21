export OUT_DIR=gen/js

protoc -I./deps/googleapis -I./deps/bq deps/googleapis/google/type/* deps/googleapis/google/api/* deps/bq/gen_bq_schema/* --js_out=import_style=commonjs:$OUT_DIR
