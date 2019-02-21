build-py:
	python3 -m pip install grpcio_tools
	python3 -m grpc_tools.protoc -I . --python_out=. --grpc_python_out=. ssn/mlservice/v1/mlservice.proto
	python3 -m grpc_tools.protoc -I . --python_out=. --grpc_python_out=. ssn/ocrservice/v1/ocrservice.proto
	python3 -m grpc_tools.protoc -I . --python_out=. --grpc_python_out=. ssn/pdfservice/v1/pdfservice.proto
	python3 -m grpc_tools.protoc -I . -I ./googleapis --python_out=. --grpc_python_out=. ssn/scanner/v1/scanner.proto
	touch ./ssn/__init__.py
	touch ./ssn/scanner/__init__.py
	touch ./ssn/scanner/v1/__init__.py
	touch ./ssn/pdfservice/__init__.py
	touch ./ssn/pdfservice/v1/__init__.py
	touch ./ssn/ocrservice/__init__.py
	touch ./ssn/ocrservice/v1/__init__.py
	touch ./ssn/mlservice/__init__.py
	touch ./ssn/mlservice/v1/__init__.py

build-go:
	protoc -I . ssn/ocrservice/v1/*.proto  --go_out=plugins=grpc,paths=source_relative:.
	protoc -I . ssn/pdfservice/v1/*.proto  --go_out=plugins=grpc,paths=source_relative:.
	protoc -I . ssn/mlservice/v1/*.proto  --go_out=plugins=grpc,paths=source_relative:.
	protoc -I . -I ./googleapis --go_out=plugins=grpc,paths=source_relative:. ssn/scanner/v1/*.proto  
	protoc -I . -I googleapis --grpc-gateway_out=logtostderr=true,paths=source_relative:. ssn/scanner/v1/*.proto  

build-go-mock:
	mockgen -source ssn/ocrservice/v1/ocrservice.pb.go -destination ssn/ocrservice/v1/mock/mock_ocrservice.go -package mock_ocrservice
	mockgen -source ssn/pdfservice/v1/pdfservice.pb.go -destination ssn/pdfservice/v1/mock/mock_pdfservice.go -package mock_pdfservice
	mockgen -source ssn/mlservice/v1/mlservice.pb.go -destination ssn/mlservice/v1/mock/mock_mlservice.go -package mock_mlservice -self_package github.com/e-conomic/vmlapis/ssn/mlservice/v1/mock
	# Fix for local ref in mocks, due to golang/mock 1.2 and go modules. Should be fixed by golang/mock 1.3
	sed -i '' 's/"."/"github.com\/e-conomic\/vmlapis\/ssn\/ocrservice\/v1"/g' ssn/ocrservice/v1/mock/mock_ocrservice.go
	sed -i '' 's/"."/"github.com\/e-conomic\/vmlapis\/ssn\/pdfservice\/v1"/g' ssn/pdfservice/v1/mock/mock_pdfservice.go
	sed -i '' 's/"."/"github.com\/e-conomic\/vmlapis\/ssn\/mlservice\/v1"/g' ssn/mlservice/v1/mock/mock_mlservice.go

.PHONY: build-py build-go
