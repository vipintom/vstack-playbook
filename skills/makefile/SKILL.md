---
name: makefile
description: Use when developer or CI commands need one discoverable entry point — setup, test, build, verify — instead of tribal knowledge; not for container definitions (docker) or pipeline orchestration (ci).
---

# makefile

One command surface for the repository. Targets are short, documented, and do
one thing; `make` with no arguments explains them.

## When to use

- Commands live in README prose or in someone's shell history.
- CI and local runs differ because they call different commands.
- Setup has more than two steps.
- Environment-specific commands need one name.
- Verification needs a stable entry point for agents and humans.

Near misses:

- The wrapper is a container build → `docker`.
- The pipeline itself → `ci`.
- The project has one command already; leave it.

## Steps

1. **List the tasks a newcomer needs** in the order they need them. Artifact:
   target list.
2. **Write `help` as the default goal** with a one-line description per target.
   Artifact: `help` target.
3. **Implement each target as a thin command**, no logic in Make where a script
   belongs. Artifact: targets.
4. **Mark side-effect-free targets `.PHONY`.** Artifact: `.PHONY` line.
5. **Share variables** (image name, env file) at the top; never hardcode twice.
   Artifact: variable block.
6. **Prove from clean**: run `make help`, `make setup`, `make test` in a fresh
   container or checkout. Artifact: run log.
7. **Point the README and CI at the same targets.** Artifact: links.

## Output

A Makefile whose default target lists every command, with setup, test and
verify runnable from clean. Structure and examples: `references/patterns.md`.

## Failure

- **A target depends on the developer's shell.** Move the logic into a script
  and call it; Make is an entry point, not a shell.
- **Targets run in the wrong order.** Declare dependencies; do not encode order
  in prose.
- **`make` fails only in CI.** Compare the shell and environment; record both.
