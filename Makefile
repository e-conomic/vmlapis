build-py:
	python3 -m pip install grpcio_tools>=1.15.0
	python3 -m grpc_tools.protoc -I . --python_out=. --grpc_python_out=. ssn/mlservice/mlservice.proto
	python3 -m grpc_tools.protoc -I . --python_out=. --grpc_python_out=. ssn/ocrservice/ocrservice.proto
	python3 -m grpc_tools.protoc -I . --python_out=. --grpc_python_out=. ssn/pdfservice/pdfservice.proto
	python3 -m grpc_tools.protoc -I . --python_out=. --grpc_python_out=. ssn/ssn.proto
	touch ./ssn/__init__.py
	touch ./ssn/pdfservice/__init__.py
	touch ./ssn/ocrservice/__init__.py
	touch ./ssn/mlservice/__init__.py

build-go:
	protoc -I . ssn/*.proto  --go_out=plugins=grpc,paths=source_relative:.
	protoc -I . ssn/ocrservice/*.proto  --go_out=plugins=grpc,paths=source_relative:.
	protoc -I . ssn/pdfservice/*.proto  --go_out=plugins=grpc,paths=source_relative:.
	protoc -I . ssn/mlservice/*.proto  --go_out=plugins=grpc,paths=source_relative:.

.PHONY: build-py build-go
