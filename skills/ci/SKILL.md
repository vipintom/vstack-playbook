---
name: ci
description: Use when a pipeline decides what gets verified, cached, gated or released, and the workflow must be fast, reproducible and honest; not for local test commands (verify-setup) or container images (docker).
tier: stack
rigor: standard
status: stable
harness: [gate, panel]
pairs-with: [docker, verify, makefile]
---

# ci

A pipeline is a claim about what was checked. Make each job reproducible from
the commit, cache only what is safe, and never let a skipped job look green.

## When to use

- Adding a workflow, job or matrix.
- A pipeline is slow, flaky or cached incorrectly.
- A required check must block merges.
- Secrets, permissions or environments are involved.
- A release step belongs in CI.

Near misses:

- Local verification commands → `verify-setup`.
- Image build → `docker`.
- Release decision → `ready`.

## Modes

| Mode | Scope |
|---|---|
| Job | one workflow with lint, test, types |
| Pipeline | jobs, dependencies, caching, artefacts |
| Release | tag, provenance, publish, environment gates |

## Steps

1. **List the gates the pipeline must run** and which block merge. Artifact:
   gate list.
2. **Pin the environment**: image or runner version, tool versions from the
   lockfile. Artifact: version pins.
3. **Order jobs by cost**: fail fast, expensive jobs only after cheap ones.
   Artifact: job graph.
4. **Cache immutably**: key on lockfile hash; never cache build output across
   branches. Artifact: cache keys.
5. **Expose failures**: upload logs and traces on failure, not on success only.
   Artifact: artefact config.
6. **Prove the pipeline** on a throwaway branch including a deliberate failure.
   Artifact: run links.
7. **Document the gates** so local runs match CI. Artifact: verification doc.

## Output

A workflow where every job is reproducible from the commit, caches cannot
poison each other, and required checks are explicit. A failing job is visible
with its log.

## Failure

- **A job needs production secrets.** Do not put them in pull-request
  workflows; gate on environment and record the policy.
- **The pipeline is flaky.** Record the flake rate by job; fix or quarantine
  with a date.
- **Caching hides a failure.** Delete the cache key and rerun before trusting
  the pass.

## Rationalizations

| Excuse | Reality |
|---|---|
| "CI is slower than local." | Then fix the job, not the gate. |
| "We can skip tests on docs changes." | Docs break links and commands; run the cheap gates. |
| "The cache is fine." | Prove it with a cold run before trusting warm ones. |
| "Required checks slow the team." | Broken main slows it more. |

## Tracking

- **OpenChamber present:** run links on the delivery note.
- **OpenCode or files:** `.github/workflows/` in the repo; evidence lines per
  gate.
- Ladder: `resources/tracking.md`.

## Verification

```bash
gh workflow view ci.yml && gh run list --limit 3
```
