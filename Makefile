build-py:
	python3 -m pip install grpcio_tools>=1.15.0
	python3 -m grpc_tools.protoc -I . --python_out=. --grpc_python_out=. ssn/mlservice/mlservice.proto
	python3 -m grpc_tools.protoc -I . --python_out=. --grpc_python_out=. ssn/imageservice/imageservice.proto
	python3 -m grpc_tools.protoc -I . --python_out=. --grpc_python_out=. ssn/ssn.proto
	touch ./ssn/__init__.py
	touch ./ssn/imageservice/__init__.py
	touch ./ssn/mlservice/__init__.py

build-go:
	protoc -I . ssn/*.proto  --go_out=plugins=grpc,paths=source_relative:.
	protoc -I . ssn/imageservice/*.proto  --go_out=plugins=grpc,paths=source_relative:.
	protoc -I . ssn/mlservice/*.proto  --go_out=plugins=grpc,paths=source_relative:.

.PHONY: build-py build-go
