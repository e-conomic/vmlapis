build-all:
	@rm -rf gen
	@echo "Generate all the things"
	cd proto && prototool all
	sh scripts/gomock.sh
	go mod tidy
	sh scripts/py_init.sh

.PHONY: build-al
