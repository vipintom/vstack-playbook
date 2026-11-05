SHELL := /bin/bash
COMPOSE := docker compose -f compose.yaml

.PHONY: help build test verify install clean

help:
	@echo "make build   - build the test image"
	@echo "make test    - run the pack test suite in the container"
	@echo "make verify  - run validation, docs drift and the full suite"
	@echo "make shell   - open a shell in the container"

build:
	$(COMPOSE) build pack

test:
	$(COMPOSE) run --rm pack node --test

verify:
	$(COMPOSE) run --rm pack node tools/validate.js
	$(COMPOSE) run --rm pack node --test

shell:
	$(COMPOSE) run --rm pack bash

clean:
	$(COMPOSE) down --remove-orphans
