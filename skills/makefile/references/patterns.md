# Makefile structure and targets

Imported patterns, kept for reference. Load only the section you need.

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
COMPOSE_FILE := docker.yml
COMPOSE_PROD_FILE := docker.prod.yml
ENV_FILE := .env
ENV_KEYS_FILE := .env.keys

# Auto-detect tools
DOCKER_COMPOSE := $(shell command -v docker 2>/dev/null && docker compose version --short 2>/dev/null || echo "docker")
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
	@docker compose -f $(COMPOSE_FILE) -f docker.test.yml up --build --abort-on-container-exit

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