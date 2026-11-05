---
name: verify-maintain
description: Use when a project's verification commands may have drifted from the code, or a change alters how the project is checked; not for creating verification from scratch (verify-setup) or for running a delivery's gates (verify).
tier: build
rigor: standard
status: stable
harness: [knowledge]
pairs-with: [verify-setup, verify, coverage]
---

# verify-maintain

Keep the proof aligned with the code. A verification doc that no longer runs is
worse than none: it manufactures confidence.

## When to use

- The build system, scripts or test runner changed.
- New services, fixtures or environment variables were added.
- A verification step failed for a reason unrelated to the change.
- A delivery's gates no longer match the project.
- After any release, as a cheap check.

Near misses:

- No verification exists → `verify-setup`.
- The task is to run the gates → `verify`.
- The question is what to test → `coverage`.

## Modes

| Mode | Trigger |
|---|---|
| Quick | run each documented command, fix what broke |
| Structural | update commands and gates after a tooling change |
| Audit | compare claims to what is actually executed |

## Steps

1. **Run every documented command** from a clean checkout. Artifact: results
   table.
2. **Compare with what CI runs.** Divergence is a finding, in either direction.
   Artifact: drift list.
3. **Update commands, prerequisites and expected output.** Artifact: diff to the
   verification doc.
4. **Re-run from clean** to prove the edit. Artifact: clean-run log.
5. **Update declared gates** if the project's delivery contract changed.
   Artifact: gate list diff.
6. **Record the maintenance** in the repo history; verification docs have no
   changelog of their own. Artifact: commit.

## Output

A diff-limited change to the verification doc and gate list, with a clean-run
log proving the result.

## Failure

- **A command is broken upstream.** Mark it, link the cause, and provide a
  temporary substitute; do not delete the check silently.
- **CI and docs disagree about intent.** Ask which is authoritative; the answer
  belongs in the doc.
- **The doc has grown into a second test suite.** Move repeated logic into a
  script and call it from the doc.

## Rationalizations

| Excuse | Reality |
|---|---|
| "It worked last month." | The code changed since; that is the drift. |
| "CI covers it." | CI covers CI's path, not the documented one. |
| "Nobody reads the doc." | Agents do, and they act on it. |
| "Updating docs is a separate task." | A stale command is a defect in this change's proof. |

## Tracking

- **OpenChamber present:** project knowledge points at the doc; drift findings
  become todos.
- **OpenCode or files:** the doc and gate list in the repo; commit is the
  record.
- Ladder: `resources/tracking.md`.
