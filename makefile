.DEFAULT_GOAL:=all

.PHONY: all
all:
	@cd ./src/ionic-ng/ && "$(MAKE)" $@

.PHONY: init
init:
	@cd ./src/ionic-ng/ && "$(MAKE)" $@

.PHONY: install
install:
	@cd ./src/ionic-ng/ && "$(MAKE)" $@

.PHONY: check
check:
	@cd ./src/ionic-ng/ && "$(MAKE)" $@

.PHONY: start
start:
	@cd ./src/ionic-ng/ && "$(MAKE)" $@
