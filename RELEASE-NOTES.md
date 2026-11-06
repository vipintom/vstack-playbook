# vstack 0.2.2 release notes

**Released:** 2026-11-06
**Tag:** `v0.2.2`

## 0.2.2

Per-repo structure gates (`scripts/check-structure.sh` owned by each repo,
called from CI and the thin `docker/test.sh` wrapper), pinned toolchain
(Node 20, pnpm 9) with composite setup actions and path filters, recorder
gates + artifact digests on schema 2 (v1 refused), panel gate-coverage block
and digest display. Verified with `docker/test.sh all` and 4/4 Docker smokes.

## Scope

A portable agentic-development method in plain Markdown: 54 skills, 13
playbooks and 12 principles. The pack works with no plugin, runtime, service,
CLI or state format.

This release replaces the four-repository 0.1.0 platform. The umbrella `vstack`
and `vstack-runtime` are gone. The recorder and panel are separate optional
components.

## Counts

```bash
find skills -name SKILL.md | wc -l                                  # 54
find playbooks -maxdepth 1 -name '*.md' | wc -l                     # 13
find principles -maxdepth 1 -name '*.md' ! -name index.md | wc -l   # 12
node ../docker/check-links.mjs .                                    # 0 broken
```

## Compatibility

- Pack: 0.2.2, standalone.
- Recorder: `@vipintom/vstack-opencode` 0.2.2, state schema 2.
- Panel: `@vipintom/vstack-openchamber` 0.2.2, state schema 2, OpenChamber >= 1.24.0.
- A skill completes with files and commands alone; every `vstack_*` call is
  optional and paired with a file artifact.

## Install

```bash
git clone https://github.com/vipintom/vstack-playbook.git
```

Point the harness at `skills/`, or copy each skill directory into its skills
directory. Keep `playbooks/` and `principles/` from the clone.

## Upgrade from 0.1.0

1. Remove the 0.1.0 skill directories, including every `vstack-*` name.
2. Copy the 0.2.2 `skills/*` directories into the harness skills directory.
3. Read `playbooks/` and `principles/` from the clone.
4. Delete roles, rubrics, templates, schemas, manifests, evaluation suites and
   install profiles. They are not part of 0.2.2.
5. Do not migrate 0.1.0 contract or projection state. The pack has no state.

The rename map is below. A name not listed is either new in 0.2.2 or removed
with no direct successor.

## Rename map: 0.1.0 to 0.2.0

| 0.1.0 | 0.2.0 |
|---|---|
| `vstack-architect` | `design` |
| `vstack-arena` | `red-team` |
| `vstack-best-of-n` | `red-team` |
| `vstack-blast-radius` | `impact` |
| `vstack-blueprint` | `blueprint` |
| `vstack-catchup` | `resume` |
| `vstack-context-reset` | `resume` |
| `vstack-create-verification` | `verify-setup` |
| `vstack-debug` | `debug` |
| `vstack-design-audit` | `audit` |
| `vstack-explain` | `report` |
| `vstack-figure-it-out` | `figure-it-out` |
| `vstack-handoff` | `handoff` |
| `vstack-help` | `help` |
| `vstack-how` | `code-tour` |
| `vstack-incremental-build` | `plan` |
| `vstack-interrogate` | `red-team` |
| `vstack-jury` | `red-team` |
| `vstack-ledger` | `decisions` |
| `vstack-lessons` | `lessons` |
| `vstack-maintain-verification` | `verify-maintain` |
| `vstack-mode` | `route` |
| `vstack-performance` | `performance` |
| `vstack-plan-loop` | `plan` |
| `vstack-plan-review` | `plan` |
| `vstack-pr` | `ship` |
| `vstack-principles` | `principles` |
| `vstack-prototype` | `prototype` |
| `vstack-ready` | `ready` |
| `vstack-recall` | `resume` |
| `vstack-recovery` | `recovery` |
| `vstack-refactor` | `refactor` |
| `vstack-review-loop` | `review` |
| `vstack-review-rubrics` | `rubrics` |
| `vstack-runtime-forensics` | `forensics` |
| `vstack-safe-pause` | `handoff` |
| `vstack-session-pickup` | `resume` |
| `vstack-sharpen` | `sharpen` |
| `vstack-ship` | `ship` |
| `vstack-skill-authoring` | `skill-authoring` |
| `vstack-skill-evaluation` | `skill-eval` |
| `vstack-swarm` | `red-team` |
| `vstack-tdd` | `tdd` |
| `vstack-trace-forensics` | `forensics` |
| `vstack-unslop` | `unslop` |
| `vstack-unstick` | `unstick` |
| `vstack-verification-audit` | `coverage` |
| `vstack-verify-loop` | `verify` |
| `vstack-visual-parity` | `visual-parity` |
| `vstack-watch-pr` | `watch-pr` |
| `vstack-why` | `rationale` |
| `vstack-worktree` | `worktree` |
| `docker-compose` | `docker` |
| `gitignore` | `gitignore` |
| `makefile` | `makefile` |
| `vstack-migration` | `migration` |

## New skills with no 0.1.0 predecessor

`api-design`, `browser-testing`, `ci`, `evidence`, `fastapi`,
`frontend-design`, `mcp-server`, `shape`, `technical-writing`, `typescript`.

## Removed

- Roles, rubrics, templates, resource manifests and install profiles.
- Workflow files; situations are now playbooks.
- Trigger and evaluation suites.
- The website and its generated capability data.
- Every 0.1.0 readiness claim. 0.2.0 readiness is the output of the commands
  above and `docker/test.sh all` in the workspace.

## Verification

The Docker harness lives in the workspace that holds all three vstack
repositories and is not published with this pack. From that workspace root:

```bash
./docker/test.sh all
./docker/skills-smoke.sh
./docker/skills-only-smoke.sh
./docker/playbooks-smoke.sh
```

A standalone clone needs no build. The count commands in this document
reproduce every number here from the clone alone.

`skills-only-smoke.sh` runs all four release playbooks — build-feature,
fix-bug, deliver, migrate — in real OpenCode sessions with no plugin installed.
Each writes plan, evidence and handoff files and creates no `.vstack/`.
