export OUT_DIR=gen/js

protoc -I./deps/googleapis deps/googleapis/google/type/* deps/googleapis/google/api/* -I./deps/protoc-gen-openapiv2 deps/protoc-gen-openapiv2/options/* -I./deps/validation deps/validation/validate/* --js_out=import_style=commonjs:$OUT_DIR
