#!/bin/bash

protoc -I./deps/googleapis -I./deps/tensorflow -I./deps/protoc-gen-openapiv2 -I./proto \
  --openapiv2_out gen/openapiv2/ \
  --openapiv2_opt logtostderr=true \
  --openapiv2_opt allow_merge=true \
  --openapiv2_opt merge_file_name=ssn/v1.json \
  --go_out=gen/go/ \
  --go-grpc_out=gen/go/ \
  --go_opt=paths=source_relative \
  --go-grpc_opt=paths=source_relative \
  proto/ssn/annotator/v1/annotator.proto \
  proto/ssn/dataservice/v1/*.proto

protoc -I./deps/googleapis -I./deps/tensorflow -I./deps/protoc-gen-openapiv2 -I./proto \
  --go_out=gen/go/ \
  --go-grpc_out=gen/go/ \
  --go_opt=paths=source_relative \
  --go-grpc_opt=paths=source_relative \
  proto/ssn/annotator/v1/annotator.proto

protoc -I./deps/googleapis -I./deps/tensorflow  -I./deps/protoc-gen-openapiv2 -I./proto \
  --go_out=gen/go/ \
  --go-grpc_out=gen/go/ \
  --go_opt=paths=source_relative \
  --go-grpc_opt=paths=source_relative \
  proto/ssn/access/v1/*.proto

protoc -I./deps/googleapis -I./deps/tensorflow  -I./deps/protoc-gen-openapiv2 -I./proto \
  --go_out=gen/go/ \
  --go-grpc_out=gen/go/ \
  --go_opt=paths=source_relative \
  --go-grpc_opt=paths=source_relative \
  proto/ssn/dataservice/v1/*.proto

protoc -I./deps/googleapis -I./deps/tensorflow  -I./deps/protoc-gen-openapiv2 -I./proto \
  --go_out=gen/go/ \
  --go-grpc_out=gen/go/ \
  --go_opt=paths=source_relative \
  --go-grpc_opt=paths=source_relative \
  proto/ssn/mlservice/v2/*.proto

protoc -I./deps/googleapis -I./deps/tensorflow  -I./deps/protoc-gen-openapiv2 -I./proto \
  --go_out=gen/go/ \
  --go-grpc_out=gen/go/ \
  --go_opt=paths=source_relative \
  --go-grpc_opt=paths=source_relative \
  proto/ssn/ocrservice/v1/*.proto

protoc -I./deps/googleapis -I./deps/tensorflow  -I./deps/protoc-gen-openapiv2 -I./proto \
  --go_out=gen/go/ \
  --go-grpc_out=gen/go/ \
  --go_opt=paths=source_relative \
  --go-grpc_opt=paths=source_relative \
  proto/ssn/pdfservice/v1/*.proto

protoc -I./deps/googleapis -I./deps/tensorflow  -I./deps/protoc-gen-openapiv2 -I./proto \
  --go_out=gen/go/ \
  --go-grpc_out=gen/go/ \
  --go_opt=paths=source_relative \
  --go-grpc_opt=paths=source_relative \
  proto/ssn/type/*.proto

protoc -I./deps/googleapis -I./deps/tensorflow  -I./deps/protoc-gen-openapiv2 -I./proto \
  --go_out=gen/go/ \
  --go-grpc_out=gen/go/ \
  --go_opt=paths=source_relative \
  --go-grpc_opt=paths=source_relative \
  proto/gen_bq_schema/*.proto
