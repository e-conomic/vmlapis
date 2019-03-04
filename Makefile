# build-py:
# 	python3 -m pip install grpcio_tools
# 	python3 -m grpc_tools.protoc -I . --python_out=. --grpc_python_out=. ssn/mlservice/v1/mlservice.proto
# 	python3 -m grpc_tools.protoc -I . --python_out=. --grpc_python_out=. ssn/ocrservice/v1/ocrservice.proto
# 	python3 -m grpc_tools.protoc -I . --python_out=. --grpc_python_out=. ssn/pdfservice/v1/pdfservice.proto
# 	python3 -m grpc_tools.protoc -I . -I ./googleapis --python_out=. --grpc_python_out=. ssn/scanner/v1/scanner.proto
# 	touch ./ssn/__init__.py
# 	touch ./ssn/scanner/__init__.py
# 	touch ./ssn/scanner/v1/__init__.py
# 	touch ./ssn/pdfservice/__init__.py
# 	touch ./ssn/pdfservice/v1/__init__.py
# 	touch ./ssn/ocrservice/__init__.py
# 	touch ./ssn/ocrservice/v1/__init__.py
# 	touch ./ssn/mlservice/__init__.py
# 	touch ./ssn/mlservice/v1/__init__.py
# 
# build-go:
# 	protoc -I . ssn/ocrservice/v1/*.proto               --go_out=plugins=grpc,paths=source_relative:out/go
# 	protoc -I . ssn/pdfservice/v1/*.proto               --go_out=plugins=grpc,paths=source_relative:out/go
# 	protoc -I . ssn/mlservice/v1/*.proto                --go_out=plugins=grpc,paths=source_relative:out/go
# 	protoc -I . -I ./googleapis ssn/scanner/v1/*.proto  --go_out=plugins=grpc,paths=source_relative:out/go   
# 
# build-go-gw:
# 	protoc -I . -I googleapis --grpc-gateway_out=logtostderr=true,paths=source_relative:out/go ssn/ocrservice/v1/*.proto  
# 	protoc -I . -I googleapis --grpc-gateway_out=logtostderr=true,paths=source_relative:out/go ssn/pdfservice/v1/*.proto  
# 	protoc -I . -I googleapis --grpc-gateway_out=logtostderr=true,paths=source_relative:out/go ssn/mlservice/v1/*.proto  
# 	protoc -I . -I googleapis --grpc-gateway_out=logtostderr=true,paths=source_relative:out/go ssn/scanner/v1/*.proto  
# 
# build-go-mock:
	# mockgen -source gen/go/ssn/ocrservice/v1/ocrservice.pb.go -destination gen/go/ssn/ocrservice/v1/mock/mock_ocrservice.go -package mock_ocrservice
	# mockgen -source gen/go/ssn/pdfservice/v1/pdfservice.pb.go -destination gen/go/ssn/pdfservice/v1/mock/mock_pdfservice.go -package mock_pdfservice
	# mockgen -source gen/go/ssn/mlservice/v1/mlservice.pb.go -destination gen/go/ssn/mlservice/v1/mock/mock_mlservice.go -package mock_mlservice
	# # Fix for local ref in mocks, due to golang/mock 1.2 and go modules. Should be fixed by golang/mock 1.3
	# sed -i '' 's/"."/"github.com\/e-conomic\/vmlapis-go\/ssn\/ocrservice\/v1"/g' out/go/ssn/ocrservice/v1/mock/mock_ocrservice.go
	# sed -i '' 's/"."/"github.com\/e-conomic\/vmlapis-go\/ssn\/pdfservice\/v1"/g' out/go/ssn/pdfservice/v1/mock/mock_pdfservice.go
	# sed -i '' 's/"."/"github.com\/e-conomic\/vmlapis-go\/ssn\/mlservice\/v1"/g' out/go/ssn/mlservice/v1/mock/mock_mlservice.go

build-all:
	@echo "Generate all the things"
	@cd proto && prototool generate

.PHONY: build-al
