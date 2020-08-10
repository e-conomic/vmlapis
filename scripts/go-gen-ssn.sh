#!/bin/bash

protoc -I./deps/googleapis -I./deps/tensorflow -I./proto \
		--go_out=gen/go/ \
		--go-grpc_out=gen/go/ \
		--go_opt=paths=source_relative \
		--go-grpc_opt=paths=source_relative \
		proto/ssn/annotator/v1/annotator.proto

	protoc -I./deps/googleapis -I./deps/tensorflow -I./proto \
		--go_out=gen/go/ \
		--go-grpc_out=gen/go/ \
		--go_opt=paths=source_relative \
		--go-grpc_opt=paths=source_relative \
		proto/ssn/access/v1/*.proto

	protoc -I./deps/googleapis -I./deps/tensorflow -I./proto \
		--go_out=gen/go/ \
		--go-grpc_out=gen/go/ \
		--go_opt=paths=source_relative \
		--go-grpc_opt=paths=source_relative \
		proto/ssn/dataservice/v1/*.proto

	protoc -I./deps/googleapis -I./deps/tensorflow -I./proto \
		--go_out=gen/go/ \
		--go-grpc_out=gen/go/ \
		--go_opt=paths=source_relative \
		--go-grpc_opt=paths=source_relative \
		proto/ssn/dataservice/v1alpha1/*.proto

	protoc -I./deps/googleapis -I./deps/tensorflow -I./proto \
		--go_out=gen/go/ \
		--go-grpc_out=gen/go/ \
		--go_opt=paths=source_relative \
		--go-grpc_opt=paths=source_relative \
		proto/ssn/mlservice/v2/*.proto

	protoc -I./deps/googleapis -I./deps/tensorflow -I./proto \
		--go_out=gen/go/ \
		--go-grpc_out=gen/go/ \
		--go_opt=paths=source_relative \
		--go-grpc_opt=paths=source_relative \
		proto/ssn/ocrservice/v1/*.proto

	protoc -I./deps/googleapis -I./deps/tensorflow -I./proto \
		--go_out=gen/go/ \
		--go-grpc_out=gen/go/ \
		--go_opt=paths=source_relative \
		--go-grpc_opt=paths=source_relative \
		proto/ssn/pdfservice/v1/*.proto

	protoc -I./deps/googleapis -I./deps/tensorflow -I./proto \
		--go_out=gen/go/ \
		--go-grpc_out=gen/go/ \
		--go_opt=paths=source_relative \
		--go-grpc_opt=paths=source_relative \
		proto/ssn/type/*.proto

	protoc -I./deps/googleapis -I./deps/tensorflow -I./proto \
		--go_out=gen/go/ \
		--go-grpc_out=gen/go/ \
		--go_opt=paths=source_relative \
		--go-grpc_opt=paths=source_relative \
		proto/gen_bq_schema/*.proto
