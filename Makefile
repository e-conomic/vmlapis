build-all:
	@rm -rf gen
	@echo "Generate all the things"
	cd proto && prototool all
	sh scripts/gomock.sh
	sh scripts/py_fixes.sh

.PHONY: build-all
