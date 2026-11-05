---
name: verify-setup
description: Use when a project has no reliable way to prove a change works and the verification instructions must be created and made runnable; not for running existing verification (verify) or for keeping it current (verify-maintain).
tier: build
rigor: standard
status: stable
harness: [knowledge]
pairs-with: [verify, plan, coverage]
---

# verify-setup

Write down how this project proves a change, then make each step a command a
stranger can run. The result is a project-specific verification skill or
document, not advice.

## When to use

- A new repository has no test command, or it is tribal knowledge.
- Verification steps exist in a wiki but fail when followed.
- An agent keeps guessing how to check its work.
- A delivery needs declared gates and no gate list exists.
- The project's checks depend on services, fixtures or credentials.

Near misses:

- The gate list exists and must be run → `verify`.
- The checks exist but drifted from the code → `verify-maintain`.
- The question is what to test → `coverage`.

## Modes

| Mode | Output |
|---|---|
| Minimal | install, test, type check, lint — four commands |
| Project | plus integration, e2e, migration and smoke commands |
| Hermetic | plus container or fixture setup, usable offline |

## Steps

1. **Inventory what must be proven**: build, behaviour, contract, deployment.
   Artifact: claim list.
2. **Discover the real commands** by running them in a clean checkout; record
   failures and prerequisites. Artifact: command log.
3. **Make each command hermetic** (fixtures, env vars, container) or mark the
   prerequisite. Artifact: runbook.
4. **Write the verification skill or doc** using `templates/verification-skill.md.hbs`.
   Artifact: the file.
5. **Prove it from scratch**: fresh clone or container, follow only the doc.
   Artifact: clean-run log.
6. **Declare the gates** the project's deliveries must run. Artifact: gate
   list in the project config.

## Output

A verification document whose every step is a fenced command with expected
output, plus the declared gate list. A newcomer can run it without asking.

## Failure

- **A step needs credentials or production data.** Mark it optional, with a
  local substitute; never put a secret in the doc.
- **The command depends on global machine state.** Containerise it or list the
  state as a prerequisite.
- **The clean run fails.** The doc is not done; fix it before handing over.

## Rationalizations

| Excuse | Reality |
|---|---|
| "Everyone knows `make test`." | Newcomers, agents and CI do not. Write it down. |
| "The wiki is close enough." | Close enough breaks silently; run it and fix it. |
| "Setup is one-time work." | Every new machine pays it again. |
| "A failing example is fine in docs." | Then the doc teaches failure. |

## Tracking

- **OpenChamber present:** project knowledge entry pointing at the verification
  doc; the gate list on the delivery template.
- **OpenCode or files:** the verification doc inside the target repository, linked from its
  README.
- Ladder: `resources/tracking.md`.
