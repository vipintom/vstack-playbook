---
name: makefile
description: Modern Makefile patterns for task automation, CI/CD integration, and developer experience. Use when creating or refactoring Makefiles, defining reusable targets, managing environment-specific commands, or integrating with Docker, Docker Compose, and secret management tools. Invoke for makefile, make, automation, targets, phony, variables, ci-integration.
license: MIT
metadata:
  author: https://github.com/jeffallan
  version: "1.0.0"
  domain: devops
  category: utils
  triggers: makefile, make, automation, targets, phony, variables, ci-integration, task-runner
  role: engineer
  scope: implementation
  output-format: code
  related-skills: docker-compose, docker-deployment, devops-engineer, fastapi-backend, angular-dashboard
---

# Modern Makefile Patterns

Comprehensive guide for writing maintainable, portable Makefiles that serve as the primary task runner for projects.

## Purpose / Outcome

Provides a complete Makefile template with self-documenting targets, dotenvx secret integration, environment-specific commands (dev/prod/test/ci), linting, security scanning, database operations, versioning, and debugging. Enables consistent task automation across local, CI, and production environments.

---

## When to Use (Positive Triggers)

- Creating a new Makefile for a Docker/Compose project
- Refactoring existing Makefile for maintainability
- Adding dotenvx encrypted secret support to task runner
- Defining CI/CD pipeline steps as Make targets
- Need environment-specific targets (dev, prod, test, ci)
- Adding database operations (migrate, backup, restore)
- Implementing version bumping and release tagging

---

## When Not to Use (Negative Triggers)

- Projects using Taskfile, Just, or other task runners
- Simple projects with only 1-2 commands (package.json scripts suffice)
- When Bazel/Buck/Make alternatives are mandated
- Non-Docker projects without compose integration

---

## Required Context / Inputs

- Docker Compose file structure (compose.yaml + overrides)
- Secret management approach (dotenvx recommended)
- Target environments (dev, staging, production)
- Database type (PostgreSQL, MySQL, etc.) for db targets
- CI/CD platform for integration

---

## Preconditions

- GNU Make 4.0+ installed
- Docker Engine + Docker Compose v2 available
- dotenvx installed for secret management (optional but recommended)
- Project has VERSION file or uses git tags for versioning

---

## Procedure

### Step 1: Configure Project Variables

- Set tool versions (DOCKER_COMPOSE_VERSION, DOTENVX_VERSION)
- Define paths (COMPOSE_FILE, COMPOSE_PROD_FILE, ENV_FILE, ENV_KEYS_FILE)
- Auto-detect docker compose and dotenvx commands
- Set .DEFAULT_GOAL to help

### Step 2: Define Core Lifecycle Targets

- help: self-documenting via awk on ## comments
- up/down/restart: compose lifecycle with dotenvx decryption
- logs/ps/health: observability targets

### Step 3: Implement Secret Management (dotenvx)

- DECRYPT_ENV macro: decrypts .env to temp file
- COMPOSE_CMD macro: runs compose with decrypted env
- encrypt/decrypt/keypair/rotate targets for secret ops

### Step 4: Add Environment-Specific Targets

- dev: hot reload development
- prod: production deploy with replicas
- test: isolated test environment
- ci: full pipeline (lint → test → build → scan)

### Step 5: Implement Quality Gates

- lint: shellcheck, hadolint, yamllint
- scan: trivy image scan, compose config validation
- db-*: migration, seed, backup, restore, shell

### Step 6: Add Release & Debugging

- version/bump-*/release: semantic versioning with git tags
- debug-*: shell, logs, config inspection

---

## Expected Outputs

- Complete Makefile with all target categories
- Self-documenting via `make help`
- dotenvx integration for secret decryption
- Environment-specific workflows (dev/prod/test/ci)
- Quality gates (lint, scan) as first-class targets
- Database operations with timestamped backups
- Semantic versioning with git tag release

---

## Verification

**Evidence recording:** VERIFIED / NOT_VERIFIED / INCONCLUSIVE / BLOCKED / NOT RUN / UNAVAILABLE

- `make help` lists all targets with descriptions
- `make up` starts services with decrypted secrets
- `make dev` enables hot reload
- `make prod` deploys with replicas and resource limits
- `make ci` runs lint → test → build → scan in order
- `make encrypt` / `make decrypt` / `make rotate` work
- `make db-backup` creates timestamped SQL dump
- `make bump-patch` increments VERSION file

---

## Failure Handling

| Failure Mode | Response |
|--------------|----------|
| dotenvx not installed | Target prints install instruction, exits 1 |
| .env.keys missing | DECRYPT_ENV fails with clear error |
| Compose file missing | Docker compose fails, check COMPOSE_FILE |
| Shell command not found | lint targets check for tool, exit with hint |
| VERSION file missing | version target defaults to 0.0.0 |

---

## Stop Conditions

- All core targets (up, down, dev, prod, test, ci) execute successfully
- `make help` lists all targets with descriptions
- `make encrypt`/`make decrypt`/`make rotate` work for secret ops
- `make db-backup` creates valid timestamped dump
- `make bump-patch` increments VERSION correctly
- Quality gates (lint, scan) pass without errors

---

## Guardrails (Never Violate)

- **Never** hardcode paths — use variables
- **Never** skip .PHONY for non-file targets
- **Never** put complex shell in recipes — extract to scripts
- **Never** omit help target — undiscoverable Makefiles are useless
- **Never** leak global variables — use target-specific when needed

---

## Examples

### Basic Project Makefile

See [Makefile Structure Template](#makefile-structure-template) for complete template.

### CI Integration

```yaml
# .github/workflows/ci.yml
jobs:
  ci:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - run: make ci
```

### dotenvx Setup

```bash
npm install -g @dotenvx/dotenvx
make keypair
# Edit .env with secrets
make encrypt
make up  # Auto-decrypts at runtime
```

---

## Dependencies / References

- [docker-compose] — Docker/Compose patterns this Makefile orchestrates
- [docker-deployment] — Caddy, deployment safety
- GNU Make manual: https://www.gnu.org/software/make/manual/
- dotenvx: https://dotenvx.com/

---

## Core Principles

| Principle | Practice |
|-----------|----------|
| **Self-documenting** | Every target has a comment; `make help` shows all targets |
| **Idempotent targets** | Running twice = same result |
| **Explicit dependencies** | File targets declare prerequisites; phony targets don't |
| **Environment agnostic** | Works locally, in CI, in containers |
| **Composable** | Targets call other targets; single responsibility |

---

## Makefile Structure Template

```makefile
# ============================================
# Project Makefile
# ============================================
# Usage: make [target]
# Run 'make help' to see all available targets

# --- Configuration ----------------------------------------------------

# Tool versions (pin for reproducibility)
DOCKER_COMPOSE_VERSION := v2.29.0
DOTENVX_VERSION := 1.35.0

# Paths
COMPOSE_FILE := docker-compose.yml
COMPOSE_PROD_FILE := docker-compose.prod.yml
ENV_FILE := .env
ENV_KEYS_FILE := .env.keys

# Auto-detect tools
DOCKER_COMPOSE := $(shell command -v docker 2>/dev/null && docker compose version --short 2>/dev/null || echo "docker-compose")
DOTENVX := $(shell command -v dotenvx 2>/dev/null || echo "$(HOME)/.npm-global/bin/dotenvx")

# Default target
.DEFAULT_GOAL := help

# Phony targets (never create files)
.PHONY: help up down restart logs ps pull build health clean encrypt decrypt keypair rotate

# --- Help -------------------------------------------------------------

help: ## Show this help
	@awk 'BEGIN {FS = ":.*##"; printf "\nUsage: make \033[36m<target>\033[0m\n\n"} /^[a-zA-Z_-]+:.*##/ {printf "  \033[36m%-20s\033[0m %s\n", $$1, $$2}' $(MAKEFILE_LIST)

# --- Core Lifecycle ---------------------------------------------------

up: ## Start all services (detached)
	$(call compose_up,-d)

down: ## Stop and remove all services
	$(call compose_down)

restart: ## Restart all services or specific service
	$(call compose_restart,$(filter-out $@,$(MAKECMDGOALS)))

# Allow passing service names to restart/logs/build
%:
	@:

# --- Observability ----------------------------------------------------

logs: ## Follow logs (all or specific service: make logs app)
	$(call compose_logs,$(filter-out $@,$(MAKECMDGOALS)))

ps: ## Show service status
	$(call compose_ps)

health: ## Show service health table
	$(call compose_ps --format "table {{.Name}}\t{{.Status}}\t{{.Ports}}")

# --- Image Management -------------------------------------------------

pull: ## Pull latest images
	$(call compose_pull)

build: ## Build or rebuild services
	$(call compose_build,$(filter-out $@,$(MAKECMDGOALS)))

# --- Secret Management (dotenvx) --------------------------------------

# Decrypt .env to temporary file
define DECRYPT_ENV
	@test -f $(ENV_KEYS_FILE) || (echo "ERROR: $(ENV_KEYS_FILE) not found" && exit 1)
	@test -x $(DOTENVX) || (echo "ERROR: dotenvx not found. Install: npm install -g @dotenvx/dotenvx" && exit 1)
	$(eval TMP_ENV := $(shell mktemp --suffix=.env))
	@echo "Decrypting $(ENV_FILE)..."
	@$(DOTENVX) decrypt --file=$(ENV_FILE) --stdout > $(TMP_ENV)
endef

# Run docker compose with decrypted env
define COMPOSE_CMD
	$(DECRYPT_ENV)
	@docker compose --env-file $(TMP_ENV) -f $(COMPOSE_FILE) $(1)
	@rm -f $(TMP_ENV)
endef

# Production compose with decrypted env
define COMPOSE_PROD_CMD
	$(DECRYPT_ENV)
	@docker compose --env-file $(TMP_ENV) -f $(COMPOSE_FILE) -f $(COMPOSE_PROD_FILE) $(1)
	@rm -f $(TMP_ENV)
endef

# Convenience macros
compose_up = $(call COMPOSE_CMD,up $(1))
compose_down = $(call COMPOSE_CMD,down $(1))
compose_restart = $(call COMPOSE_CMD,restart $(1))
compose_logs = $(call COMPOSE_CMD,logs -f $(1))
compose_ps = $(call COMPOSE_CMD,ps $(1))
compose_pull = $(call COMPOSE_CMD,pull $(1))
compose_build = $(call COMPOSE_CMD,build $(1))

# Secret operations
encrypt: ## Encrypt .env after editing (requires dotenvx)
	@test -x $(DOTENVX) || (echo "Install dotenvx first: npm install -g @dotenvx/dotenvx" && exit 1)
	@$(DOTENVX) encrypt

decrypt: ## View decrypted .env values (stdout only)
	@test -x $(DOTENVX) || (echo "Install dotenvx first" && exit 1)
	@$(DOTENVX) decrypt --file=$(ENV_FILE) --stdout

keypair: ## Generate new keypair (creates .env.keys)
	@test -x $(DOTENVX) || (echo "Install dotenvx first" && exit 1)
	@$(DOTENVX) keypair

rotate: ## Rotate encryption keys and re-encrypt
	@test -x $(DOTENVX) || (echo "Install dotenvx first" && exit 1)
	@$(DOTENVX) rotate
	@$(DOTENVX) encrypt

# --- Maintenance ------------------------------------------------------

clean: ## Clean up temp files, stopped containers, unused volumes
	@docker compose down --remove-orphans -v 2>/dev/null || true
	@docker system prune -f --volumes 2>/dev/null || true

# ============================================
# Advanced Patterns
# ============================================

# --- Environment-Specific Targets -------------------------------------

.PHONY: dev prod test ci

dev: ## Start development stack with hot reload
	$(call compose_up)

prod: ## Deploy production stack
	$(call COMPOSE_PROD_CMD,up -d --build)

test: ## Run tests in isolated environment
	@docker compose -f $(COMPOSE_FILE) -f docker-compose.test.yml up --build --abort-on-container-exit

ci: ## CI pipeline: lint, test, build, scan
	$(MAKE) lint
	$(MAKE) test
	$(MAKE) build
	$(MAKE) scan

# --- Linting & Quality ------------------------------------------------

.PHONY: lint lint-shell lint-docker lint-yaml

lint: lint-shell lint-docker lint-yaml ## Run all linters

lint-shell: ## Lint shell scripts (shellcheck)
	@command -v shellcheck >/dev/null 2>&1 || (echo "Install shellcheck" && exit 1)
	@shellcheck scripts/*.sh Makefile

lint-docker: ## Lint Dockerfiles (hadolint)
	@command -v hadolint >/dev/null 2>&1 || (echo "Install hadolint" && exit 1)
	@hadolint Dockerfile*

lint-yaml: ## Lint YAML files (yamllint)
	@command -v yamllint >/dev/null 2>&1 || (echo "Install yamllint" && exit 1)
	@yamllint . -c .yamllint.yml 2>/dev/null || yamllint .

# --- Security Scanning ------------------------------------------------

.PHONY: scan scan-image scan-compose

scan: scan-image scan-compose ## Run all security scans

scan-image: ## Scan built images (trivy)
	@command -v trivy >/dev/null 2>&1 || (echo "Install trivy" && exit 1)
	@trivy image --severity HIGH,CRITICAL $(shell docker compose -f $(COMPOSE_FILE) config --images)

scan-compose: ## Scan compose config (docker compose config --quiet)
	@docker compose -f $(COMPOSE_FILE) config --quiet

# --- Database Operations ----------------------------------------------

.PHONY: db-migrate db-seed db-backup db-restore db-shell

db-migrate: ## Run database migrations
	$(call COMPOSE_CMD,exec app alembic upgrade head)

db-seed: ## Seed database with initial data
	$(call COMPOSE_CMD,exec app python -m scripts.seed)

db-backup: ## Backup database to timestamped file
	@mkdir -p backups
	$(call COMPOSE_CMD,exec -T db pg_dump -U $$POSTGRES_USER $$POSTGRES_DB) > backups/db_$(shell date +%F_%H%M%S).sql

db-restore: ## Restore database from file (usage: make db-restore FILE=backups/xxx.sql)
	@test -n "$(FILE)" || (echo "Usage: make db-restore FILE=backups/xxx.sql" && exit 1)
	$(call COMPOSE_CMD,exec -T db psql -U $$POSTGRES_USER $$POSTGRES_DB) < $(FILE)

db-shell: ## Open database shell
	$(call COMPOSE_CMD,exec db psql -U $$POSTGRES_USER $$POSTGRES_DB)

# --- Release & Versioning ---------------------------------------------

.PHONY: version bump-patch bump-minor bump-major release

VERSION_FILE := VERSION

version: ## Show current version
	@cat $(VERSION_FILE) 2>/dev/null || echo "0.0.0"

bump-patch: ## Bump patch version
	@echo $$(cat $(VERSION_FILE) | awk -F. '{print $$1"."$$2"."$$3+1}') > $(VERSION_FILE)
	@cat $(VERSION_FILE)

bump-minor: ## Bump minor version
	@echo $$(cat $(VERSION_FILE) | awk -F. '{print $$1"."$$2+1".0"}') > $(VERSION_FILE)
	@cat $(VERSION_FILE)

bump-major: ## Bump major version
	@echo $$(cat $(VERSION_FILE) | awk -F. '{print $$1+1".0.0"}') > $(VERSION_FILE)
	@cat $(VERSION_FILE)

release: ## Create git tag and push
	@git tag -a v$$(cat $(VERSION_FILE)) -m "Release v$$(cat $(VERSION_FILE))"
	@git push origin v$$(cat $(VERSION_FILE))

# --- Debugging --------------------------------------------------------

.PHONY: debug-shell debug-logs debug-inspect

debug-shell: ## Open shell in app container
	$(call COMPOSE_CMD,exec app sh)

debug-logs: ## Show recent logs with timestamps
	$(call COMPOSE_CMD,logs --timestamps --tail=100)

debug-inspect: ## Inspect compose config
	$(call COMPOSE_CMD,config)

# ============================================
# Anti-Patterns to Avoid
# ============================================
# ❌ Recursive make (use includes instead)
# ❌ Hardcoded paths (use variables)
# ❌ Implicit rules (explicit is clearer)
# ❌ Missing .PHONY (causes file collision bugs)
# ❌ Complex shell in recipes (extract to scripts)
# ❌ No help target (undiscoverable)
# ❌ Global variables leaking (use target-specific)
# ============================================