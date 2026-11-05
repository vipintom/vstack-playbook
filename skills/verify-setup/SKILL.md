---
name: verify-setup
description: Use when a project has no reliable way to prove a change works and the verification instructions must be created and made runnable; not for running existing verification (verify) or for keeping it current (verify-maintain).
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

## Steps

1. **Interview the project** before writing anything: where it runs
   (surface), how it starts (run), how to exercise it (drive), what proves the
   result (observe), and what must be faked or isolated (isolate). Artifact:
   verification brief, one line per answer.
2. **Inventory what must be proven**: build, behaviour, contract, deployment.
   Then discover the real commands by running them in a clean checkout; record
   failures and prerequisites. Artifact: claim list and command log.
3. **Make each command hermetic** (fixtures, env vars, container) or mark the
   prerequisite. Artifact: runbook.
4. **Write the verification skill or doc**: the command, its prerequisites,
   the expected output and the failure it catches. Artifact: the file.
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
