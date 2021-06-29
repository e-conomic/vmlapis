all:
	@rm -rf gen
	@echo "Generate all the things"
	cd proto && prototool \
	    --protoc-bin-path=/usr/bin/protoc \
	    --protoc-wkt-path=/usr/include \
	    all
	protoc -I./deps/googleapis -I./proto -I./deps/protoc-gen-openapiv2 \
		--include_imports --include_source_info \
		--descriptor_set_out=gen/descriptor.bin \
		proto/ssn/annotator/v1/annotator.proto \
		proto/ssn/access/v1/access.proto \
		proto/ssn/dataservice/v1/dataservice.proto \
		proto/asgt/jester/v1/jester.proto \
		proto/asgt/data/v1/data_service.proto

	mkdir ./gen/go
	mkdir ./gen/openapiv2
	./scripts/go-gen-ssn.sh
	./scripts/go-gen-asgt.sh
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
