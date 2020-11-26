#!/bin/bash

protoc -I./deps/googleapis -I./deps/validate -I./deps/tensorflow -I./proto \
		--go_out=gen/go/ \
		--go-grpc_out=gen/go/ \
  		--validate_out=lang=go:gen/go \
		--go_opt=paths=source_relative \
		--go-grpc_opt=paths=source_relative \
		proto/asgt/data/v1/*.proto

protoc -I./deps/googleapis -I./deps/tensorflow -I./proto \
		--go_out=gen/go/ \
		--go-grpc_out=gen/go/ \
		--go_opt=paths=source_relative \
		--go-grpc_opt=paths=source_relative \
		proto/asgt/jester/v1/*.proto

protoc -I./deps/googleapis -I./deps/tensorflow -I./proto \
		--go_out=gen/go/ \
		--go-grpc_out=gen/go/ \
		--go_opt=paths=source_relative \
		--go-grpc_opt=paths=source_relative \
		proto/asgt/modelregistry/v1/*.proto

protoc -I./deps/googleapis -I./deps/tensorflow -I./proto \
		--go_out=gen/go/ \
		--go-grpc_out=gen/go/ \
		--go_opt=paths=source_relative \
		--go-grpc_opt=paths=source_relative \
		proto/asgt/type/*.proto
