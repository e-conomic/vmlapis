#/bin/bash

# protoc -I imgsvc/ -I ssn/imgsvc.proto  --go_out=plugins=grpc:imgsvc/
protoc --proto_path=. ssn/*.proto  --go_out=plugins=grpc,paths=source_relative:.
protoc --proto_path=. imageservice/*.proto  --go_out=plugins=grpc,paths=source_relative:.
protoc --proto_path=. showmethemoney/*.proto  --go_out=plugins=grpc,paths=source_relative:.
