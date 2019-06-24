all:
	@rm -rf gen
	@echo "Generate all the things"
	cd proto && prototool all
	./scripts/gomock.sh
	./scripts/py_fixes.sh

docker:
	@rm -rf gen
	docker build -t vmlapis .
	DOCKERID=$$(docker create vmlapis) ;\
	docker cp $$DOCKERID:/app/gen ./ ;\
	docker rm $$DOCKERID

.PHONY: all
.PHONY: docker
.DEFAULT_GOAL := docker
