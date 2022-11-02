.DEFAULT_GOAL:=all

.PHONY: all
all: install check

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
