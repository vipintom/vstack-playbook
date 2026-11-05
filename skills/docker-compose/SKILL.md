---
name: docker-compose
description: Docker and Docker Compose for containerizing applications, local development, and production deployments. Use when writing Dockerfiles, composing multi-service applications, optimizing builds, managing secrets, configuring health checks, or debugging container issues. Invoke for dockerfile, compose, container, multi-stage, build-optimization, dev-containers, or production-deployment.
license: MIT
metadata:
  author: https://github.com/jeffallan
  version: "1.0.0"
  domain: devops
  category: utils
  triggers: Docker, Docker Compose, container, dockerfile, multi-stage, build, devcontainer, healthcheck, secrets, networking, volumes, dotenvx
  role: engineer
  scope: implementation
  output-format: code
  related-skills: devops-engineer, kubernetes-specialist, terraform-engineer, fastapi-backend, angular-dashboard
---

# Docker & Docker Compose

Comprehensive guide for containerizing applications with Docker and orchestrating multi-service environments with Docker Compose.

## Purpose / Outcome

Provides production-ready patterns for Dockerfile authoring, Docker Compose orchestration, secret management (dotenvx), health checks, and CI integration. Enables reproducible, secure, observable container deployments.

---

## When to Use (Positive Triggers)

- Writing or refactoring Dockerfiles for any language/service
- Creating multi-service Docker Compose environments (dev/staging/prod)
- Implementing encrypted secrets with dotenvx
- Adding health checks to container services
- Setting up CI/CD with Docker (GitHub Actions, GitLab CI)
- Debugging container permission, networking, or build issues
- Migrating from Docker Compose v1 to v2

---

## When Not to Use (Negative Triggers)

- Kubernetes-native deployments (use kubernetes-specialist skill)
- Simple single-container apps without orchestration needs
- When podman/buildah specific features required
- Infrastructure provisioning (use terraform-engineer skill)

---

## Required Context / Inputs

- Target language/runtime (Node.js, Python, Go, etc.)
- Service dependencies (databases, caches, message queues)
- Target environments (dev, staging, production)
- Secret management preference (dotenvx, Docker secrets, external vault)
- CI/CD platform (GitHub Actions, GitLab CI, etc.)

---

## Preconditions

- Docker Engine 24+ and Docker Compose v2 installed
- Basic understanding of container concepts
- Access to container registry for production images

---

## Procedure

### Step 1: Choose Base Image & Strategy

- Select pinned base image (e.g., `node:20.12.0-alpine`, `python:3.12.3-slim`)
- Use multi-stage build: deps → builder → runner
- Plan for non-root user in final stage

### Step 2: Author Dockerfile

- Copy dependency manifests first (cache layer)
- Install production deps only in deps stage
- Build/test/lint in builder stage
- Copy only artifacts to runner stage
- Add HEALTHCHECK instruction
- Set USER, EXPOSE, ENTRYPOINT/CMD

### Step 3: Create Docker Compose Structure

- Base `compose.yaml` with shared config
- Dev override (`compose.override.yaml`) with hot reload
- Production override (`compose.prod.yaml`) with replicas, resources
- CI/test override (`compose.test.yaml`) for isolated runs

### Step 4: Configure Secrets

- Use `.env.example` template (committed)
- Encrypt `.env` with dotenvx for git-safe secrets
- Use Makefile or script to decrypt at runtime
- Never put secrets in Dockerfile or compose files

### Step 5: Add Health Checks

- Every service must have healthcheck
- Use CMD form (no shell) where possible
- Set appropriate interval/timeout/start_period
- Verify with `docker compose ps`

### Step 6: Validate & Test

- Run `docker compose config` to validate
- Test locally: `docker compose up --build`
- Run CI pipeline with test override
- Scan images with Trivy/Docker Scout

### Step 7: Deploy

- Use production override for deploy
- Document rollback procedure
- Monitor health checks post-deploy

---

## Expected Outputs

- Valid `Dockerfile` with multi-stage build and healthcheck
- `compose.yaml` + environment overrides
- `.env.example` template and encrypted `.env` (with dotenvx)
- `.dockerignore` excluding build artifacts and secrets
- CI workflow with build, test, scan, push steps
- Rollback procedure documented

---

## Verification

**Evidence recording:** VERIFIED / NOT_VERIFIED / INCONCLUSIVE / BLOCKED / NOT RUN / UNAVAILABLE

- `docker compose config` validates without errors
- `docker compose up --build` starts all services healthy
- Health checks pass for all services
- `docker compose -f compose.yaml -f compose.prod.yaml config` validates
- Image scan shows no HIGH/CRITICAL vulnerabilities
- Secrets not present in image layers (`docker history`)

---

## Failure Handling

| Failure Mode | Response |
|--------------|----------|
| `docker compose config` fails | Fix YAML syntax, check variable references |
| Health check failing | Increase `start_period`, verify endpoint, check logs |
| Build cache invalidation | Reorder Dockerfile: system deps → manifests → source |
| Secrets in image | Use multi-stage, move secrets to runtime |
| Permission denied | Fix UID/GID in Dockerfile, use `--chown` in COPY |

---

## Stop Conditions

- All services healthy and passing health checks
- `docker compose config` validates without errors
- Image scan shows no HIGH/CRITICAL vulnerabilities
- Secrets not present in image layers
- Rollback procedure documented and tested

---

## Guardrails (Never Violate)

- **Never** use `latest` tag in production
- **Never** put secrets in Dockerfile (ARG, ENV, COPY)
- **Never** commit plaintext `.env` or `.env.keys`
- **Never** skip health checks on any service
- **Never** use `network_mode: host` (breaks service discovery)

---

## Examples

### Minimal Node.js Service

See [Node.js / TypeScript](#nodejs--typescript) example in Dockerfile Patterns.

### Production Deploy with dotenvx

```bash
# One-time setup
npm install -g @dotenvx/dotenvx
dotenvx keypair
# Edit .env, then:
dotenvx encrypt

# Deploy
make up  # Uses Makefile to decrypt .env at runtime
```

---

## Dependencies / References

- [devops-engineer] — CI/CD, Kubernetes, infrastructure patterns
- [docker-deployment] — Caddy, deployment safety
- dotenvx docs: https://dotenvx.com/
- Docker Compose spec: https://docs.docker.com/compose/compose-file/
- Trivy scanner: https://aquasecurity.github.io/trivy/

---

## Core Principles

| Principle | Practice |
|-----------|----------|
| **Reproducibility** | Pin base images, lock dependencies, deterministic builds |
| **Security** | Non-root users, minimal images, no secrets in layers, scan regularly |
| **Separation of concerns** | Multi-stage builds, compose overrides per environment |
| **Observability** | Health checks, structured logging, resource limits |
| **Developer experience** | Fast rebuilds, hot reload in dev, production parity |

---

## Dockerfile Patterns

### Multi-Stage Build (Universal Template)

```dockerfile
# ============================================
# STAGE 1: Base / Dependencies
# ============================================
FROM <base-image>:<pinned-tag> AS deps
WORKDIR /app

# Install system deps only if needed
RUN apt-get update && apt-get install -y --no-install-recommends \
    <packages> \
 && rm -rf /var/lib/apt/lists/*

# Copy only dependency manifests first (cache layer)
COPY <manifest-files> ./
RUN <install-command> --only=production

# ============================================
# STAGE 2: Builder (compile, test, lint)
# ============================================
FROM deps AS builder
COPY . .
RUN <build-command>
RUN <test-command>        # Fail fast in CI
RUN <lint-command>

# ============================================
# STAGE 3: Production Runtime
# ============================================
FROM <base-image>:<pinned-tag> AS runner
WORKDIR /app

# Create non-root user
RUN groupadd -g 1001 appgroup && \
    useradd -u 1001 -g appgroup -m -s /bin/bash appuser

# Copy only production artifacts
COPY --from=builder --chown=appuser:appgroup /app/<output-dir> ./
COPY --from=deps --chown=appuser:appgroup /app/node_modules ./node_modules  # or site-packages

# Runtime config
ENV NODE_ENV=production \
    PYTHONUNBUFFERED=1 \
    PORT=8080

USER appuser
EXPOSE 8080

HEALTHCHECK --interval=30s --timeout=5s --start-period=10s --retries=3 \
  CMD <health-check-command> || exit 1

ENTRYPOINT ["<entrypoint>"]
CMD ["<default-args>"]
```

### Language-Specific Examples

#### Node.js / TypeScript

```dockerfile
# ---- deps ----
FROM node:20.12.0-alpine AS deps
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production && npm cache clean --force

# ---- builder ----
FROM deps AS builder
COPY . .
RUN npm run build
RUN npm run test:ci

# ---- runner ----
FROM node:20.12.0-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production
RUN addgroup -g 1001 -S nodejs && adduser -S nodejs -u 1001
COPY --from=builder --chown=nodejs:nodejs /app/dist ./dist
COPY --from=deps --chown=nodejs:nodejs /app/node_modules ./node_modules
USER nodejs
EXPOSE 3000
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s \
  CMD wget -qO- http://localhost:3000/health || exit 1
CMD ["node", "dist/main.js"]
```

#### Python / FastAPI

```dockerfile
# ---- deps ----
FROM python:3.12.3-slim AS deps
WORKDIR /app
RUN pip install --no-cache-dir poetry==1.8.2
COPY pyproject.toml poetry.lock ./
RUN poetry export -f requirements.txt --output requirements.txt --without-hashes
RUN pip wheel --no-cache-dir --wheel-dir /wheels -r requirements.txt

# ---- builder ----
FROM deps AS builder
COPY . .
RUN pytest --tb=short

# ---- runner ----
FROM python:3.12.3-slim AS runner
WORKDIR /app
RUN useradd -m -u 1001 appuser
COPY --from=deps /wheels /wheels
RUN pip install --no-cache-dir /wheels/*
COPY --chown=appuser:appuser . .
USER appuser
EXPOSE 8000
HEALTHCHECK --interval=30s --timeout=3s \
  CMD python -c "import urllib.request; urllib.request.urlopen('http://localhost:8000/health')"
CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000"]
```

#### Go

```dockerfile
# ---- builder ----
FROM golang:1.22.3-alpine AS builder
WORKDIR /app
RUN apk add --no-cache git make
COPY go.mod go.sum ./
RUN go mod download
COPY . .
RUN CGO_ENABLED=0 GOOS=linux go build -ldflags="-s -w" -o /app/bin/server ./cmd/server

# ---- runner ----
FROM alpine:3.20 AS runner
WORKDIR /app
RUN apk add --no-cache ca-certificates tzdata && \
    addgroup -g 1001 -S appgroup && \
    adduser -u 1001 -G appgroup -S -D appuser
COPY --from=builder --chown=appuser:appgroup /app/bin/server .
USER appuser
EXPOSE 8080
HEALTHCHECK --interval=30s --timeout=3s CMD ./server health || exit 1
CMD ["./server"]
```

### .dockerignore (Required)

```
# Dependencies
node_modules
vendor
venv
.env
*.egg-info
dist
build
target

# Git & CI
.git
.gitignore
.github
.gitlab-ci.yml

# IDE & OS
.vscode
.idea
*.swp
.DS_Store

# Logs & Coverage
*.log
coverage
.nyc_output
*.prof

# Docker
Dockerfile*
docker-compose*
.dockerignore

# Docs
*.md
docs
```

---

## Docker Compose Patterns

### Project Structure

```
project/
├── Dockerfile
├── .dockerignore
├── compose.yaml              # Base config (shared)
├── compose.override.yaml     # Dev overrides (gitignored)
├── compose.prod.yaml         # Production overrides
├── compose.test.yaml         # CI/test overrides
└── .env.example              # Template for required vars
```

### Base Compose (compose.yaml)

```yaml
services:
  app:
    build:
      context: .
      target: runner
    image: myapp:${TAG:-latest}
    ports:
      - "8080:8080"
    environment:
      - DATABASE_URL=postgres://${DB_USER}:${DB_PASSWORD}@db:5432/${DB_NAME}
      - REDIS_URL=redis://redis:6379
      - LOG_LEVEL=${LOG_LEVEL:-info}
    depends_on:
      db:
        condition: service_healthy
      redis:
        condition: service_healthy
    healthcheck:
      test: ["CMD", "wget", "-qO-", "http://localhost:8080/health"]
      interval: 30s
      timeout: 5s
      retries: 3
      start_period: 10s
    deploy:
      resources:
        limits:
          cpus: '1'
          memory: 512M
        reservations:
          cpus: '0.25'
          memory: 128M
    logging:
      driver: "json-file"
      options:
        max-size: "10m"
        max-file: "3"
    networks:
      - app-network

  db:
    image: postgres:16.3-alpine
    environment:
      POSTGRES_USER: ${DB_USER}
      POSTGRES_PASSWORD: ${DB_PASSWORD}
      POSTGRES_DB: ${DB_NAME}
    volumes:
      - pgdata:/var/lib/postgresql/data
    healthcheck:
      test: ["CMD-SHELL", "pg_isready -U ${DB_USER} -d ${DB_NAME}"]
      interval: 5s
      timeout: 5s
      retries: 5
    networks:
      - app-network

  redis:
    image: redis:7.2-alpine
    command: redis-server --appendonly yes --maxmemory 128mb --maxmemory-policy allkeys-lru
    volumes:
      - redisdata:/data
    healthcheck:
      test: ["CMD", "redis-cli", "ping"]
      interval: 5s
      timeout: 3s
      retries: 5
    networks:
      - app-network

volumes:
  pgdata:
  redisdata:

networks:
  app-network:
    driver: bridge
```

### Development Override (compose.override.yaml)

```yaml
services:
  app:
    build:
      target: builder    # Use dev stage with tools
    volumes:
      - .:/app
      - /app/node_modules      # Anonymous volume preserves container deps
    environment:
      - LOG_LEVEL=debug
      - NODE_ENV=development
    command: npm run dev     # Hot reload command
    ports:
      - "9229:9229"          # Debug port
    develop:
      watch:
        - action: sync
          path: .
          target: /app
          ignore:
            - node_modules/
            - .git/
```

### Production Override (compose.prod.yaml)

```yaml
services:
  app:
    build:
      target: runner
    image: ghcr.io/org/myapp:${TAG}
    deploy:
      replicas: 3
      update_config:
        parallelism: 1
        delay: 10s
        order: start-first
      rollback_config:
        parallelism: 0
        order: stop-first
      restart_policy:
        condition: on-failure
        delay: 5s
        max_attempts: 3
    logging:
      driver: "json-file"
      options:
        max-size: "50m"
        max-file: "5"
    networks:
      - app-network
      - proxy-network

  db:
    deploy:
      resources:
        limits:
          memory: 1G
    volumes:
      - pgdata:/var/lib/postgresql/data
    networks:
      - app-network

networks:
  app-network:
    driver: bridge
  proxy-network:
    external: true
    name: proxy-network
```

### Usage Commands

```bash
# Development
docker compose up --build

# Development with specific profile
docker compose --profile dev up

# Production deploy
docker compose -f compose.yaml -f compose.prod.yaml up -d --build

# CI/Test
docker compose -f compose.yaml -f compose.test.yaml up --build --abort-on-container-exit

# Validate config
docker compose config

# View merged config
docker compose -f compose.yaml -f compose.prod.yaml config
```

---

## Environment & Secrets Management

### .env.example (Committed)

```env
# Application
TAG=latest
LOG_LEVEL=info

# Database (use secrets in prod)
DB_USER=appuser
DB_PASSWORD=changeme
DB_NAME=myapp

# External services
REDIS_URL=redis://redis:6379
```

### Loading Secrets (Production)

```yaml
# compose.prod.yaml
services:
  app:
    secrets:
      - db_password
      - api_key
    environment:
      - DB_PASSWORD_FILE=/run/secrets/db_password

secrets:
  db_password:
    external: true   # Created via `docker secret create` or orchestration
  api_key:
    file: ./secrets/api_key.txt  # Local file (dev only)
```

---

## dotenvx: Encrypted .env at Rest

For projects not using Docker Swarm or external secret managers, [dotenvx](https://dotenvx.com/) provides **encrypted .env files** that decrypt at runtime. Secrets stay encrypted in git; only the decryption key (`.env.keys`) stays local.

### Why dotenvx?

| Problem | dotenvx Solution |
|---------|------------------|
| `.env` in git = leaked secrets | `.env` encrypted, safe to commit |
| Multiple env files per environment | Single `.env` with encrypted values |
| Sharing secrets with team | Commit encrypted `.env`, share `.env.keys` via secure channel |
| CI/CD needs secrets | Decrypt at runtime in pipeline |

### Setup

```bash
# Install
npm install -g @dotenvx/dotenvx

# Generate keypair (creates .env.keys with private key)
dotenvx keypair

# Edit .env with plaintext values
# Encrypt all values
dotenvx encrypt

# Result: .env contains ENCRYPTED values, .env.keys has private key (gitignored)
```

### Project Structure

```
project/
├── .env.example          # Template (committed)
├── .env                  # Encrypted secrets (committed!)
├── .env.keys             # Private decryption key (GITIGNORED!)
├── .gitignore
└── Makefile / scripts    # Automation
```

### .gitignore (Required)

```gitignore
# dotenvx private key - NEVER commit
.env.keys

# Optional: local unencrypted overrides
.env.local
.env.*.local
```

### Runtime Decryption

**Option 1: Makefile (Recommended)**

```makefile
# Makefile
DOTENVX ?= $(shell command -v dotenvx 2>/dev/null || echo "$$HOME/.npm-global/bin/dotenvx")

define DECRYPT_ENV
	@test -f .env.keys || (echo "ERROR: .env.keys not found" && exit 1)
	@test -x $(DOTENVX) || (echo "ERROR: dotenvx not found. Install: npm install -g @dotenvx/dotenvx" && exit 1)
	$(eval TMP_ENV := $(shell mktemp --suffix=.env))
	@echo "Decrypting .env..."
	@$(DOTENVX) decrypt --file=.env --stdout > $(TMP_ENV)
endef

define COMPOSE
	$(DECRYPT_ENV)
	@docker compose --env-file $(TMP_ENV) $(1)
	@rm -f $(TMP_ENV)
endef

up:
	$(call COMPOSE,up -d)

down:
	$(call COMPOSE,down)

logs:
	$(call COMPOSE,logs -f $(filter-out $@,$(MAKECMDGOALS)))

encrypt:
	@$(DOTENVX) encrypt

decrypt:
	@$(DOTENVX) decrypt --file=.env --stdout

rotate:
	@$(DOTENVX) rotate
	@$(DOTENVX) encrypt
```

**Usage:**

```bash
make up           # Auto-decrypts .env, starts stack
make down         # Stops stack
make logs bifrost # Follow specific service logs
make encrypt      # Re-encrypt after editing .env
make decrypt      # View decrypted values (stdout only)
make rotate       # Rotate keys + re-encrypt
```

**Option 2: Shell Wrapper Script**

```bash
#!/usr/bin/env bash
# scripts/up.sh
set -euo pipefail

if [[ ! -f .env.keys ]]; then
  echo "ERROR: .env.keys not found" >&2
  exit 1
fi

TMP_ENV=$(mktemp --suffix=.env)
trap 'rm -f "$TMP_ENV"' EXIT

dotenvx decrypt --file=.env --stdout > "$TMP_ENV"
docker compose --env-file "$TMP_ENV" "$@"
```

```bash
./scripts/up.sh up -d
./scripts/up.sh logs -f app
```

**Option 3: CI/CD (GitHub Actions)**

```yaml
# .github/workflows/deploy.yml
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - name: Install dotenvx
        run: npm install -g @dotenvx/dotenvx
      - name: Decrypt .env
        env:
          DOTENV_PRIVATE_KEY: ${{ secrets.DOTENV_PRIVATE_KEY }}
        run: |
          echo "$DOTENV_PRIVATE_KEY" > .env.keys
          dotenvx decrypt --file=.env --stdout > .env.decrypted
      - name: Deploy
        run: docker compose --env-file .env.decrypted up -d
```

### .env File Format (Encrypted)

```env
# .env (encrypted - safe to commit)
BIFROST_ENCRYPTION_KEY=dotenvx:encrypted:value...
BIFROST_DB_PASSWORD=dotenvx:encrypted:value...
NIM_API_KEY=dotenvx:encrypted:value...
BESZEL_TOKEN=dotenvx:encrypted:value...
```

### .env.example (Template)

```env
# .env.example (committed - no secrets)
# Copy to .env and fill values, then run: dotenvx encrypt

BIFROST_ENCRYPTION_KEY=REPLACE_ME_64_HEX_CHARS
BIFROST_DB_PASSWORD=REPLACE_ME_POSTGRES_PASSWORD
NIM_API_KEY=REPLACE_ME_NVIDIA_NIM_KEY
BESZEL_TOKEN=REPLACE_ME_FROM_BESZEL_HUB
BESZEL_KEY=REPLACE_ME_SSH_PUBLIC_KEY
```

### Key Rotation

```bash
# Rotate encryption keys (recommended quarterly)
make rotate
# Or manually:
dotenvx rotate
dotenvx encrypt
```

### Security Notes

| Rule | Reason |
|------|--------|
| Never commit `.env.keys` | Contains private decryption key |
| Store `.env.keys` in password manager / 1Password / Bitwarden | Team sharing |
| Rotate keys quarterly | Limit blast radius of key compromise |
| Use separate keys per environment | Dev/staging/prod isolation |
| CI gets key via secret manager (GitHub Secrets, Vault) | Never hardcode in pipeline |

---

**Never** put secrets in:
- Dockerfile (build args, ENV, COPY)
- compose.yaml (environment values)
- .env files committed to git (unless encrypted with dotenvx)

---

## Health Checks

### Required for Every Service

```yaml
healthcheck:
  test: ["CMD", "<command>", "<args>"]   # Preferred: no shell
  interval: 30s
  timeout: 5s
  retries: 3
  start_period: 10s    # Grace period for slow starters
```

### Common Health Check Commands

| Service | Command |
|---------|---------|
| HTTP API | `["CMD", "wget", "-qO-", "http://localhost:8080/health"]` |
| PostgreSQL | `["CMD-SHELL", "pg_isready -U ${USER} -d ${DB}"]` |
| Redis | `["CMD", "redis-cli", "ping"]` |
| MySQL | `["CMD", "mysqladmin", "ping", "-h", "localhost"]` |
| MongoDB | `["CMD", "mongosh", "--eval", "db.adminCommand('ping')"]` |
| RabbitMQ | `["CMD", "rabbitmq-diagnostics", "check_running"]` |

### In Dockerfile (Container-Level)

```dockerfile
HEALTHCHECK --interval=30s --timeout=5s --start-period=10s --retries=3 \
  CMD wget -qO- http://localhost:8080/health || exit 1
```

---

## Networking

### Service Discovery

Services communicate by **service name** on the shared network:

```yaml
# In app code:
DATABASE_URL=postgres://user:pass@db:5432/app
REDIS_URL=redis://redis:6379
```

### Network Isolation

```yaml
networks:
  frontend:      # Web, proxy
  backend:       # API, workers
  database:      # DB, cache (no internet)
  monitoring:    # Prometheus, Grafana
```

### External Access

```yaml
services:
  app:
    networks:
      - app-network
      - proxy-network    # For Caddy/Traefik

networks:
  proxy-network:
    external: true
```

---

## Volumes & Persistence

### Named Volumes (Preferred)

```yaml
volumes:
  pgdata:
    driver: local
    driver_opts:
      type: none
      o: bind
      device: /opt/data/postgres
```

### Bind Mounts (Dev Only)

```yaml
volumes:
  - ./src:/app/src:ro           # Read-only source
  - ./data:/var/lib/data        # Persistent data
```

### Volume Permissions Fix

```dockerfile
# In Dockerfile runner stage
RUN mkdir -p /app/data && chown -R appuser:appgroup /app/data
VOLUME ["/app/data"]
```

---

## Build Optimization

### Layer Caching Order

```dockerfile
# 1. System deps (rarely change)
RUN apt-get update && apt-get install -y ...

# 2. Dependency manifests
COPY package*.json ./
RUN npm ci --only=production

# 3. Source code (changes frequently)
COPY . .
RUN npm run build
```

### BuildKit Features

```bash
# Enable BuildKit
export DOCKER_BUILDKIT=1

# Parallel builds
docker build --target runner --build-arg BUILDKIT_INLINE_CACHE=1 .

# Cache from registry
docker build --cache-from=ghcr.io/org/myapp:cache .
```

### Multi-Arch Builds

```bash
docker buildx create --use
docker buildx build \
  --platform linux/amd64,linux/arm64 \
  --tag ghcr.io/org/myapp:${TAG} \
  --push .
```

---

## Common Patterns

### Running Migrations

```yaml
# compose.prod.yaml
services:
  migrate:
    build:
      context: .
      target: runner
    command: ["alembic", "upgrade", "head"]
    environment:
      - DATABASE_URL=postgres://${DB_USER}:${DB_PASSWORD}@db:5432/${DB_NAME}
    depends_on:
      db:
        condition: service_healthy
    deploy:
      restart_policy:
        condition: on-failure
```

### Worker Services

```yaml
services:
  worker:
    build:
      context: .
      target: runner
    command: ["celery", "-A", "app.celery", "worker", "--loglevel=info"]
    deploy:
      replicas: 2
    depends_on:
      redis:
        condition: service_healthy
    profiles: ["worker"]
```

### Init Containers (Database Setup)

```yaml
services:
  db-init:
    image: postgres:16-alpine
    command: >
      sh -c "psql -h db -U ${DB_USER} -d ${DB_NAME} -f /init.sql"
    volumes:
      - ./init.sql:/init.sql:ro
    depends_on:
      db:
        condition: service_healthy
```

---

## Debugging & Troubleshooting

### Inspect Running Container

```bash
# Shell access
docker compose exec app sh

# View logs
docker compose logs -f app

# Resource usage
docker compose top app
docker stats

# Inspect config
docker compose config --services
```

### Common Issues

| Symptom | Cause | Fix |
|---------|-------|-----|
| `permission denied` | File ownership mismatch | Add `--chown` in COPY, fix UID/GID |
| `port already in use` | Host port conflict | Change host port or stop conflicting service |
| `health check failing` | App not ready / wrong endpoint | Increase `start_period`, verify endpoint |
| `out of memory` | No limits / leak | Set `deploy.resources.limits.memory` |
| `slow builds` | Cache invalidation | Reorder Dockerfile, use BuildKit |
| `secrets in image` | COPY . . or ARG/ENV secrets | Use multi-stage, runtime secrets |

---

## Quick Reference

### Dockerfile Checklist

- [ ] Pinned base image tag (not `latest`)
- [ ] Multi-stage build (deps → builder → runner)
- [ ] Non-root user with explicit UID/GID
- [ ] `.dockerignore` excludes unnecessary files
- [ ] `HEALTHCHECK` instruction present
- [ ] No secrets in any layer
- [ ] Minimal base image (`alpine`, `slim`, `distroless`)
- [ ] `EXPOSE` documents port
- [ ] `ENTRYPOINT` + `CMD` separation

### Compose Checklist

- [ ] Base `compose.yaml` + environment overrides
- [ ] Health checks on all services
- [ ] `depends_on` with `condition: service_healthy`
- [ ] Resource limits (`deploy.resources`)
- [ ] Named volumes for persistence
- [ ] Secrets via `secrets:` (not `environment:`)
- [ ] Networks isolate tiers
- [ ] Logging driver configured
- [ ] `docker compose config` validates

### Security Checklist

- [ ] Images scanned (Trivy, Docker Scout, Snyk)
- [ ] Base images updated regularly
- [ ] No `latest` tags in production
- [ ] Non-root user in all containers
- [ ] Read-only root filesystem where possible
- [ ] Capabilities dropped (`cap_drop: [ALL]`)
- [ ] Secrets never in image or compose files
- [ ] `.env` encrypted with dotenvx (or use Docker secrets / external secret manager)
- [ ] `.env.keys` never committed (gitignored)
- [ ] Key rotation schedule defined (quarterly recommended)

---

## Anti-Patterns

| Anti-Pattern | Problem | Fix |
|--------------|---------|-----|
| `FROM node:latest` | Unreproducible builds | Pin exact version |
| `COPY . .` before deps | Cache bust on any change | Copy manifests first |
| `RUN apt-get update && apt-get install -y ...` in final stage | Bloated image | Install in builder only |
| Secrets in `ENV` or `ARG` | Leaked in image history | Use runtime secrets / dotenvx |
| Plaintext `.env` committed to git | Leaked secrets | Encrypt with dotenvx or use secret manager |
| Single `docker-compose.yml` for all envs | Config drift | Use override files |
| No health checks | Orchestrator can't detect failures | Add to every service |
| `network_mode: host` | Breaks isolation, no service discovery | Use bridge networks |
| Volumes for source in prod | Inconsistent, permission issues | Use image artifacts |

---

## CI Integration

### GitHub Actions Example

```yaml
name: CI
on:
  push:
    branches: [main]
  pull_request:

jobs:
  docker:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - name: Set up Docker Buildx
        uses: docker/setup-buildx-action@v3
      - name: Build image
        uses: docker/build-push-action@v5
        with:
          context: .
          target: runner
          load: true
          tags: myapp:${{ github.sha }}
          cache-from: type=gha
          cache-to: type=gha,mode=max
      - name: Run tests in container
        run: docker run --rm myapp:${{ github.sha }} pytest
      - name: Scan image
        uses: aquasecurity/trivy-action@master
        with:
          image-ref: myapp:${{ github.sha }}
          severity: HIGH,CRITICAL
      - name: Push on main
        if: github.ref == 'refs/heads/main'
        uses: docker/build-push-action@v5
        with:
          push: true
          tags: ghcr.io/org/myapp:${{ github.sha }}
```

---

## Migration Checklist (Docker Compose v1 → v2)

- [ ] Replace `docker-compose` with `docker compose`
- [ ] Update `version:` field (optional in v2, remove for schema validation)
- [ ] Use `depends_on` with `condition: service_healthy`
- [ ] Migrate `links:` to networks
- [ ] Use `deploy:` for resource limits (Swarm) or remove for Compose-only
- [ ] Test `docker compose config` validates

---

*Maintained as part of the DevOps skill ecosystem. See [devops-engineer] for CI/CD, Kubernetes, and infrastructure patterns.*