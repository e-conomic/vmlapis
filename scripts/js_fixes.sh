export OUT_DIR=gen/js

protoc -I./deps/googleapis deps/googleapis/google/type/* deps/googleapis/google/api/* --js_out=import_style=commonjs:$OUT_DIR
