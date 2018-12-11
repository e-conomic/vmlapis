build-py:
	python3 -m pip install grpcio_tools
	python3 -m grpc_tools.protoc -I . --python_out=. --grpc_python_out=. ssn/mlservice/v1alpha1/mlservice.proto
	python3 -m grpc_tools.protoc -I . --python_out=. --grpc_python_out=. ssn/ocrservice/v1alpha1/ocrservice.proto
	python3 -m grpc_tools.protoc -I . --python_out=. --grpc_python_out=. ssn/pdfservice/v1alpha1/pdfservice.proto
	python3 -m grpc_tools.protoc -I . -I ./googleapis --python_out=. --grpc_python_out=. ssn/scanner/v1alpha1/scanner.proto
	touch ./ssn/__init__.py
	touch ./ssn/scanner/__init__.py
	touch ./ssn/scanner/v1alpha1/__init__.py
	touch ./ssn/pdfservice/__init__.py
	touch ./ssn/pdfservice/v1alpha1/__init__.py
	touch ./ssn/ocrservice/__init__.py
	touch ./ssn/ocrservice/v1alpha1/__init__.py
	touch ./ssn/mlservice/__init__.py
	touch ./ssn/mlservice/v1alpha1/__init__.py

build-go:
	protoc -I . -I ./googleapis ssn/scanner/v1alpha1/*.proto  --go_out=plugins=grpc,paths=source_relative:.
	protoc -I . ssn/ocrservice/v1alpha1/*.proto  --go_out=plugins=grpc,paths=source_relative:.
	protoc -I . ssn/pdfservice/v1alpha1/*.proto  --go_out=plugins=grpc,paths=source_relative:.
	protoc -I . ssn/mlservice/v1alpha1/*.proto  --go_out=plugins=grpc,paths=source_relative:.

	# protoc -I . -I ${GOPATH}/src/github.com/grpc-ecosystem/grpc-gateway/third_party/googleapis  --grpc-gateway_out=logtostderr=true,grpc_api_configuration=ssn/http-api.yaml:. ssn/*.proto

.PHONY: build-py build-go
