# all:
# 	@rm -rf gen
# 	@echo "Generate all the things"
# 	cd proto && prototool \
# 	    --protoc-bin-path=/usr/bin/protoc \
# 	    --protoc-wkt-path=/usr/include \
# 	    all
# 	protoc -I./deps/googleapis -I./proto -I./deps/protoc-gen-openapiv2 -I./deps/validation \
# 		--include_imports --include_source_info \
# 		--descriptor_set_out=gen/descriptor.bin \
# 		proto/ssn/annotator/v1/annotator.proto \
# 		proto/ssn/access/v1/access.proto \
# 		proto/ssn/dataservice/v1/dataservice.proto \
# 		proto/asgt/jester/v1/jester.proto \
# 		proto/asgt/data/v1/data_service.proto \
# 		proto/asgt/v2/dataset_service.proto \
# 		proto/asgt/v2/suggester_service.proto

# 	mkdir ./gen/go
# 	mkdir ./gen/openapiv2
# 	./scripts/go-gen-ssn.sh
# 	./scripts/go-gen-asgt.sh
# 	./scripts/gomock.sh
# 	./scripts/js_fixes.sh
# 	./scripts/py_fixes.sh

# docker:
# 	@rm -rf gen
# 	docker build --progress plain -t vmlapis .
# 	DOCKERID=$$(docker create vmlapis) ;\
# 	docker cp $$DOCKERID:/app/gen ./ ;\
# 	docker rm $$DOCKERID

# bigquery:
# 	cp -r ./gen/bq/ ../ssn-terraform/bq

# .PHONY: all
# .PHONY: docker
# .DEFAULT_GOAL := docker

all: 
	@rm -rf gen
	@echo "Generate all the things"

#	buf breaking proto --against gen/descriptor.bin
#	buf format -w

	buf generate proto --template buf.gen.all.yaml
	buf generate proto --template buf.gen.grpc.yaml \
		--exclude-path proto/asgt/type \
		--exclude-path proto/asgt/v2/type \
		--exclude-path proto/ssn/type \
		--exclude-path proto/gen_bq_schema

	buf generate proto --template buf.gen.validate.go.yaml --path proto/asgt/v2

	sed "s/{_FILE_NAME}/asgt\/v1.json/g" buf.gen.openapiv2.yaml > buf.gen.openapiv2.asgt.v1.yaml
	buf generate proto --template buf.gen.openapiv2.asgt.v1.yaml --path proto/asgt/data/v1 --path proto/asgt/jester/v1
	sed "s/{_FILE_NAME}/asgt\/v2.json/g" buf.gen.openapiv2.yaml > buf.gen.openapiv2.asgt.v2.yaml
	buf generate proto --template buf.gen.openapiv2.asgt.v2.yaml --path proto/asgt/v2 --exclude-path proto/asgt/v2/type
	rm buf.gen.openapiv2.asgt.v1.yaml buf.gen.openapiv2.asgt.v2.yaml

	sed "s/{_FILE_NAME}/ssn\/v1.json/g" buf.gen.openapiv2.yaml > buf.gen.openapiv2.ssn.v1.yaml
	buf generate proto --template buf.gen.openapiv2.ssn.v1.yaml --path proto/ssn/annotator --path proto/ssn/dataservice
	rm buf.gen.openapiv2.ssn.v1.yaml

	buf build proto -o gen/descriptor.bin \
		--path proto/ssn/annotator/v1/annotator.proto \
		--path proto/ssn/access/v1/access.proto \
		--path proto/ssn/dataservice/v1/dataservice.proto \
		--path proto/asgt/jester/v1/jester.proto \
		--path proto/asgt/data/v1/data_service.proto \
		--path proto/asgt/v2/dataset_service.proto \
		--path proto/asgt/v2/suggester_service.proto

	./scripts/gomock.sh
