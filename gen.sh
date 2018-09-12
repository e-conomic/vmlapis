#/bin/bash

# protoc -I imgsvc/ -I ssn/imgsvc.proto  --go_out=plugins=grpc:imgsvc/
protoc -I ssn/ -I imageservice/ ssn/*.proto  --go_out=plugins=grpc:ssn/
protoc -I imageservice/ imageservice/*.proto  --go_out=plugins=grpc:imageservice/
protoc -I showmethemoney/ showmethemoney/*.proto  --go_out=plugins=grpc:showmethemoney/
