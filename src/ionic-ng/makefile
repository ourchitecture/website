.DEFAULT_GOAL:=all

.PHONY: all
all: init install check

.PHONY: init
init:
	@export CI=1 \
	&& yarn install

.PHONY: install
install:
	@export CI=1 \
	&& yarn build \
  && cp ./www/index.html ./www/404.html

.PHONY: check
check:
	@export CI=1 \
  && yarn test \
    --code-coverage \
    --configuration=ci

.PHONY: start
start:
	@yarn start
