---
name: gitignore
description: Comprehensive .gitignore patterns for modern projects. Covers language-specific ignores, build artifacts, IDE files, secrets, OS files, and project-type templates. Use when creating new repositories, updating existing .gitignore, debugging ignored files, or standardizing ignore patterns across projects. Invoke for gitignore, git-ignore, ignore-patterns, git-clean, repository-hygiene.
license: MIT
metadata:
  author: https://github.com/jeffallan
  version: "1.0.0"
  domain: devops
  category: utils
  triggers: gitignore, git-ignore, ignore-patterns, git-clean, repository-hygiene, gitignore-templates
  role: engineer
  scope: implementation
  output-format: code
  related-skills: docker, makefile, devops-engineer, fastapi-backend, angular-dashboard
---

# .gitignore Patterns & Best Practices

Complete reference for creating and maintaining effective `.gitignore` files across project types.

## Purpose / Outcome

Provides a universal base template plus language-specific, framework-specific, and project-type patterns for `.gitignore`. Includes debugging commands, best practices checklist, and anti-patterns to avoid. Enables consistent repository hygiene across all project types.

---

## When to Use (Positive Triggers)

- Creating a new repository (add .gitignore before first commit)
- Updating existing .gitignore for new tools/languages
- Debugging why files are/aren't ignored
- Standardizing ignore patterns across team/projects
- Adding project-type specific patterns (mobile, data science, docs)

---

## When Not to Use (Negative Triggers)

- Projects using alternative VCS (not git)
- When .gitignore is managed by framework CLI (e.g., `git ignore` commands)
- Trivial single-file projects with no build artifacts

---

## Required Context / Inputs

- Project languages/frameworks (Node, Python, Go, Rust, Java, etc.)
- Build tools (webpack, vite, cargo, maven, gradle, etc.)
- IDE/editor used by team (VS Code, IntelliJ, Vim, etc.)
- Secret management approach (dotenvx, vault, etc.)
- Project type (web app, mobile, data science, library, docs)

---

## Preconditions

- Git repository initialized (`git init`)
- Basic understanding of gitignore syntax (glob patterns)
- Team agreement on patterns to include

---

## Procedure

### Step 1: Start with Universal Base

- Copy [Universal Base Template](#universal-base-template) to `.gitignore`
- Commit immediately before any other files

### Step 2: Add Language-Specific Patterns

- Select relevant section from [Language-Specific Patterns](#language-specific-patterns)
- Include dependency directories, build outputs, cache directories
- **Commit lock files** (package-lock.json, Cargo.lock, poetry.lock, etc.)

### Step 3: Add Project-Type Template

- Choose matching [Project-Type Template](#project-type-templates)
- Customize for project-specific paths
- Document any non-obvious patterns with comments

### Step 4: Configure Global Gitignore (Per User)

- Set up `~/.gitignore_global` for OS/IDE files
- Run `git config --global core.excludesfile ~/.gitignore_global`

### Step 5: Verify and Audit

- Run `git status --ignored` to verify
- Use `git check-ignore -v <file>` to debug specific files
- Audit quarterly: check for committed files that should be ignored

---

## Expected Outputs

- `.gitignore` at repository root with organized sections
- All build artifacts, dependencies, IDE files ignored
- Lock files committed (not ignored)
- Secrets/credentials patterns present
- Team global gitignore configured
- No sensitive files in git history

---

## Verification

**Evidence recording:** VERIFIED / NOT_VERIFIED / INCONCLUSIVE / BLOCKED / NOT RUN / UNAVAILABLE

- `git status --ignored` shows only expected ignored files
- `git check-ignore -v <file>` confirms pattern matching
- No `.env`, `*.key`, `*.pem`, `node_modules/`, `target/`, `dist/` in git log
- Lock files present in repository
- `git ls-files --ignored --exclude-standard --others` empty or expected

---

## Failure Handling

| Failure Mode | Response |
|--------------|----------|
| File accidentally committed | `git rm --cached <file>`, add pattern, commit |
| Pattern too broad (ignores needed file) | Use negation `!path/to/keep` or make pattern specific |
| Different patterns per developer | Enforce global gitignore, remove local overrides |
| Secrets in history | Use `git filter-repo` or BFG to rewrite history |

---

## Stop Conditions

- `.gitignore` committed at repo root before first code commit
- `git status --ignored` shows only expected ignored files
- All build artifacts, dependencies, IDE files ignored
- Lock files committed (not ignored)
- Secrets/credentials patterns present and tested
- No sensitive files in git history (`git log --all --full-history -- <pattern>`)
- Team global gitignore configured and documented

---

## Guardrails (Never Violate)

- **Never** commit `.gitignore` after first commit without audit
- **Never** ignore lock files (package-lock.json, Cargo.lock, poetry.lock)
- **Never** use broad `**/*` patterns
- **Never** commit secrets then add to .gitignore (history remains)
- **Never** ignore test files or config needed for CI

---

## Examples

### New React + Node Project

```gitignore
# Universal Base (from template)
# Node.js specific
node_modules/
dist/
build/
.env.local
*.tsbuildinfo

# Lock files - COMMIT THESE
# package-lock.json
```

### Python Data Science Project

```gitignore
# Universal Base
# Python specific
__pycache__/
*.py[cod]
venv/
.env
.ipynb_checkpoints/
data/
*.pkl
*.model

# Lock files - COMMIT THESE
# poetry.lock / requirements.txt
```

---

## Dependencies / References

- GitHub gitignore templates: https://github.com/github/gitignore
- gitignore.io: https://www.toptal.com/developers/gitignore
- Git docs: https://git-scm.com/docs/gitignore
- [docker] — for docker/.dockerignore patterns
- [makefile] — for Makefile patterns

---

## Core Principles

| Principle | Practice |
|-----------|----------|
| **Commit early** | Add `.gitignore` before first commit |
| **Be specific** | Prefer explicit patterns over broad wildcards |
| **Group by category** | Organize with comments: dependencies, build, IDE, OS, secrets |
| **Use templates** | Start from GitHub's official templates |
| **Document exceptions** | Explain why specific patterns are needed |
| **Review regularly** | Audit ignored files quarterly |

---

## Universal Base Template

```gitignore
# ============================================
# UNIVERSAL BASE - Apply to ALL repositories
# ============================================

# --- OS & Filesystem ---
.DS_Store
Thumbs.txt
ehthumbs.db
Desktop.ini
*.swp
*.swo
*~
.fuse_hidden*
.directory
.Trash-*
.nfs*

# --- Editors & IDEs ---
.vscode/
.idea/
*.sublime-project
*.sublime-workspace
.vim/
*.vimrc
.project
.classpath
.c9/
*.launch
.settings/
*.sln.docstates

# --- Secrets & Credentials ---
.env
.env.*
.env.local
.env.*.local
.env.keys          # dotenvx private key
*.pem
*.key
*.p12
*.pfx
*.cer
*.crt
secrets/
*.secret
*.secrets
id_rsa
id_ed25519
*.ppk

# --- Logs & Debug ---
*.log
logs/
npm-debug.log*
yarn-debug.log*
yarn-error.log*
pnpm-debug.log*
*.tsbuildinfo

# --- Coverage & Reports ---
coverage/
.nyc_output/
*.lcov
*.prof
*.gcov
htmlcov/
.coverage
.coverage.*
.tox/
.pytest_cache/
.mypy_cache/
.hypothesis/

# --- Build Artifacts ---
dist/
build/
out/
target/
bin/
obj/
*.o
*.so
*.dll
*.exe
*.class
*.jar
*.war
*.ear
*.pyc
__pycache__/
*.pyo
*.pyd

# --- Package Managers ---
node_modules/
vendor/
jspm_packages/
.bower_components/
packages/
*.egg-info/
*.dist-info/
.eggs/
pip-wheel-metadata/

# --- Docker ---
.dockerignore
docker.override.yml
docker.*.local.yml

# --- CI/CD ---
.circleci/
.github/workflows/*.local.yml
.gitlab-ci.local.yml
.travis.local.yml

# --- Temporary Files ---
*.tmp
*.temp
.tmp/
temp/
tmp/
*.bak
*.backup
*~

# ============================================
# LANGUAGE-SPECIFIC PATTERNS
# ============================================

# --- Go ---
vendor/
*.exe
*.test
*.prof
coverage.out
go.work

# --- Node.js / TypeScript / JavaScript ---
# Dependencies (already in universal)
# Build outputs
.next/
.nuxt/
dist/
build/
*.tsbuildinfo
# Package locks (commit these!)
# package-lock.json
# yarn.lock
# pnpm-lock.yaml
# Testing
.nyc_output/
coverage/
# Turbo
.turbo/
# Cache
.cache/
.eslintcache
.stylelintcache
# Storybook
storybook-static/

# --- Python ---
__pycache__/
*.py[cod]
*$py.class
*.so
.Python
venv/
env/
ENV/
.venv/
pip-log.txt
pip-delete-this-directory.txt
.tox/
.nox/
.coverage
.coverage.*
.pytest_cache/
.mypy_cache/
.dmypy.json
dmypy.json
.pyre/
.pytype/
cython_debug/
*.egg-info/
*.egg
dist/
build/
*.whl
.eggs/
*.manifest
*.spec
*.pyd
pydoc.py
# Jupyter
.ipynb_checkpoints/
# PyInstaller
*.manifest
*.spec
# Unit test / coverage
htmlcov/
.tox/
.nox/
.coverage
.coverage.*
.cache
.pytest_cache/
.hypothesis/
# Mypy
.mypy_cache/
.dmypy.json
dmypy.json
# Pyre
.pyre/
# Pyright
.pyright_cache/

# --- Rust ---
target/
Cargo.lock
**/*.rs.bk

# --- Java / Kotlin / Gradle / Maven ---
*.class
*.jar
*.war
*.ear
*.nar
hs_err_pid*
.gradle/
build/
out/
.mvn/
.mvnw
!/.mvn/wrapper/maven-wrapper.jar
!/.mvn/wrapper/maven-wrapper.properties
.gradle.kotlin/
kotlin-compiler-cache/

# --- C / C++ ---
*.o
*.ko
*.obj
*.elf
*.dll
*.dylib
*.a
*.lib
*.so
*.dylib
*.ncb
*.sdf
*.suo
*.pdb
*.idb
*.sbr
*.ilk
*.aps
*.ncb
*.opensdf
*.sdf
*.ipch
*.tlog
*.lastbuildstate
CMakeFiles/
CMakeCache.txt
cmake_install.cmake
Makefile
*.orig
*.patch
*.rej

# --- C# / .NET ---
[Bb]in/
[Oo]bj/
[Ll]og/
[Ll]ogs/
*.user
*.userosscache
*.sln.docstates
*.suo
*.tlog
*.tlog.*
*.userprefs
*.cache
*.local
*.vspx
*.vspscc
*.vssscc
*.builds
*.pidb
*.svclog
*.scc
.vscode/
.vs/
*.ncb
*.opensdf
*.sdf
*.ipch
*.tlog
*.vspscc
*.vssscc
*.scc
*.builds
*.pidb
*.svclog
*.scc
TestResults/
*.coverage
*.coveragexml
*.codecoverage
*.testsettings
*.runsettings
*.vsmdi
*.vsp
*.vspscc
*.vssscc
*.scc
*.db
*.db-journal
*.sqlite
*.sqlite-journal
*.sqlite3
*.sqlite3-journal
App_Data/
*.mdf
*.ldf
*.sdf
*.bak
*.backup
*.local
*.local.*
*.vspscc
*.vssscc
*.scc
*.builds
*.pidb
*.svclog
*.scc
TestResults/
*.coverage
*.coveragexml
*.codecoverage
*.testsettings
*.runsettings
*.vsmdi
*.vsp
*.vspscc
*.vssscc
*.scc
*.db
*.db-journal
*.sqlite
*.sqlite-journal
*.sqlite3
*.sqlite3-journal
App_Data/
*.mdf
*.ldf
*.sdf
*.bak
*.backup
*.local
*.local.*
*.vspscc
*.vssscc
*.scc
*.builds
*.pidb
*.svclog
*.scc
TestResults/
*.coverage
*.coveragexml
*.codecoverage
*.testsettings
*.runsettings
*.vsmdi
*.vsp

# --- Ruby ---
*.gem
*.rbc
/.config
/coverage/
/InstalledFiles
/pkg/
/spec/reports/
/spec/examples.txt
/test/tmp/
/test/version_tmp/
/test/test.log
/tmp/
*.gem
.rvmrc
.ruby-version
.ruby-gemset
/.bundle/
/vendor/bundle/
/lib/bundler/man/

# --- PHP ---
vendor/
composer.phar
.phpunit.result.cache
.php-cs-fixer.cache
.phpstan.cache
.psalm.cache
.phpinsights/

# --- Swift ---
.build/
Packages/
Package.resolved
*.xcodeproj/
*.xcworkspace/
xcuserdata/
DerivedData/
*.hmap
*.ipa
*.dSYM.zip
*.dSYM
*.swiftmodule

# --- Terraform ---
*.tfstate
*.tfstate.*
*.tfvars
*.tfvars.json
*.auto.tfvars
*.auto.tfvars.json
.terraform/
.terraform.lock.hcl
*.tfplan
*.tfplan.json
.terragrunt-cache/

# --- Kubernetes / Helm ---
*.kubeconfig
kubeconfig
*.kubeconfig.yaml
helm-charts/
charts/
*.tgz

# --- Database ---
*.sql
*.sqlite
*.sqlite3
*.db
*.dump
*.backup
migrations/
*.bak

# --- Documentation ---
*.html
!README.html
doc/
docs/_build/
site/
*.pdf
!README.pdf

# ============================================
# PROJECT-TYPE TEMPLATES
# ============================================

# --- Full-Stack Web App (React/Vue + Node/Go/Python) ---
# Start with Universal Base + Language Specific + Framework Specific

# React/Vite
node_modules/
dist/
.env.local
.env.development.local
.env.test.local
.env.production.local
npm-debug.log*
yarn-debug.log*
yarn-error.log*
pnpm-debug.log*
*.local

# Vue/Nuxt
.nuxt/
dist/
.env
.env.*
!.env.example

# Svelte/SvelteKit
.build/
.svelte-kit/
node_modules/
package-lock.json
yarn.lock
pnpm-lock.yaml

# Next.js
.next/
out/
build/
node_modules/

# --- Python Web (FastAPI/Django/Flask) ---
__pycache__/
*.py[cod]
*$py.class
venv/
.env
.env.local
*.log
.pytest_cache/
.coverage
htmlcov/
.tox/
.mypy_cache/
*.egg-info/
dist/
build/
db.sqlite3
media/
staticfiles/
# Django
*.pyc
*.pyo
*.pyd
local_settings.py
# FastAPI
*.so

# --- Go Microservice ---
vendor/
*.exe
*.test
*.prof
coverage.out
.env
.env.local
bin/
cmd/*/main
!cmd/*/main.go

# --- Rust Service ---
target/
Cargo.lock
.env
.env.local

# --- Mobile (React Native / Flutter / iOS / Android) ---
# React Native
node_modules/
.expo/
.expo-shared/
dist/
web-build/
*.jks
*.p8
*.p12
*.key
*.mobileprovision
*.orig.*
*.apk
*.aab
# Flutter
.dart_tool/
.packages
.pub-cache/
build/
*.dart_tool/
.flutter-plugins
.flutter-plugins-dependencies
# iOS
*.xcworkspace/
xcuserdata/
*.xcodeproj/
project.xcworkspace/
xcshareddata/
*.pbxuser
*.perspectivev3
*.mode1v3
*.mode2v3
*.moved-aside
DerivedData/
*.hmap
*.ipa
*.dSYM.zip
*.dSYM
*.swiftmodule
*.plist
# Android
*.apk
*.aab
*.ap_
*.dex
*.class
*.jks
*.keystore
local.properties
.gradle/
build/
captures/
.externalNativeBuild/
.idea/
*.iml
*.ipr
*.iws
*.id

# --- Data Science / ML ---
*.pkl
*.pickle
*.joblib
*.model
*.h5
*.hdf5
*.onnx
*.pt
*.pth
*.bin
*.safetensors
data/
datasets/
*.csv
*.parquet
*.feather
*.arrow
*.h5
*.hdf5
wandb/
mlruns/
.lightning/
checkpoints/
*.ckpt
.ipynb_checkpoints/
__pycache__/
*.pyc
.env
.env.local

# --- Documentation Site (Docusaurus, VitePress, MkDocs) ---
node_modules/
dist/
build/
.env
.env.local
*.log
.DS_Store
.vitepress/dist/
.docusaurus/
site/
.mkdocs/
site/

# ============================================
# DEBUGGING IGNORED FILES
# ============================================

# Check if file is ignored
# git check-ignore -v <file>

# Show all ignored files
# git status --ignored

# Show all ignored files with patterns
# git ls-files --ignored --exclude-standard --others

# Un-ignore a file (force add)
# git add -f <file>

# Stop tracking a file (keep local)
# git rm --cached <file>

# ============================================
# BEST PRACTICES CHECKLIST
# ============================================

# [ ] .gitignore committed at repo root
# [ ] Language/framework specific patterns included
# [ ] Secrets/credentials patterns present
# [ ] OS/IDE patterns present
# [ ] Build artifacts ignored
# [ ] Dependency directories ignored
# [ ] Lock files COMMITTED (package-lock.json, Cargo.lock, etc.)
# [ ] .env.example committed, .env ignored
# [ ] No sensitive patterns in committed .gitignore
# [ ] Team-specific patterns documented
# [ ] CI ignores local-only configs
# [ ] Regular audit (quarterly)

# ============================================
# ANTI-PATTERNS
# ============================================

# ❌ Ignoring lock files (package-lock.json, Cargo.lock, poetry.lock)
# ❌ Using **/* broadly (catches too much)
# ❌ Ignoring .gitignore itself
# ❌ Committing secrets then adding to .gitignore (history remains)
# ❌ Different .gitignore per developer (use global gitignore instead)
# ❌ Ignoring test files or config files needed for CI
# ❌ Not updating .gitignore when adding new tools
# ❌ Ignoring files that should be versioned (config templates, scripts)

# ============================================
# GLOBAL GITIGNORE (Per User)
# ============================================

# Set up once per machine:
# git config --global core.excludesfile ~/.gitignore_global

# ~/.gitignore_global content:
# .DS_Store
# Thumbs.db
# *.swp
# *.swo
# *~
# .vscode/
# .idea/
# *.log
# .env.local
# .env.*.local

# ============================================
# REFERENCES
# ============================================

# GitHub official templates: https://github.com/github/gitignore
# gitignore.io: https://www.toptal.com/developers/gitignore
# Git docs: https://git-scm.com/docs/gitignore