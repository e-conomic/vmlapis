all:
	@rm -rf gen
	@echo "Generate all the things"
	cd proto && prototool \
	    --protoc-bin-path=/usr/bin/protoc \
	    --protoc-wkt-path=/usr/include \
	    all
	protoc -I./deps/googleapis -I./proto \
		--include_imports --include_source_info \
		--descriptor_set_out=gen/descriptor.bin \
		proto/ssn/annotator/v1/annotator.proto \
		proto/ssn/access/v1/access.proto \
		proto/ssn/dataservice/v1alpha1/dataservice.proto \
		proto/ssn/dataservice/v1/dataservice.proto 
	
	go install google.golang.org/grpc/cmd/protoc-gen-go-grpc
	# export GO111MODULE=on
	# export PATH="$PATH:/Users/michalderdak/go/bin/"

	mkdir ./gen/go
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
		proto/ssn/types/*.proto

	protoc -I./deps/googleapis -I./deps/tensorflow -I./proto \
		--go_out=gen/go/ \
		--go-grpc_out=gen/go/ \
		--go_opt=paths=source_relative \
		--go-grpc_opt=paths=source_relative \
		proto/gen_bq_schema/*.proto

	./scripts/gomock.sh
	./scripts/js_fixes.sh
	./scripts/py_fixes.sh

docker:
	@rm -rf gen
	docker build -t vmlapis .
	DOCKERID=$$(docker create vmlapis) ;\
	docker cp $$DOCKERID:/app/gen ./ ;\
	docker rm $$DOCKERID

bigquery:
	cp -r ./gen/bq/ ../ssn-terraform/bq

.PHONY: all
.PHONY: docker
.DEFAULT_GOAL := docker
