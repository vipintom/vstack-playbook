# Ignore patterns by language and tool

Imported patterns, kept for reference. Load only the section you need.

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