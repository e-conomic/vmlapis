#!/bin/bash

# go install google.golang.org/grpc/cmd/protoc-gen-go-grpc
# export GO111MODULE=on
# export PATH="$PATH:/Users/michalderdak/go/bin/"

protoc -I./deps/googleapis -I./deps/tensorflow -I./proto \
    --go_out=gen/go/ \
    --go-grpc_out=gen/go/ \
    proto/*/*/*/*.proto \
    proto/*/type/*.proto \
    proto/gen_bq_schema/*.proto
