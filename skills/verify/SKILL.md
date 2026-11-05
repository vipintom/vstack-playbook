---
name: verify
description: Use when work claims to be complete and an independent run must prove it before merge, handoff or release; not for writing the failing test first (tdd) or recording one claim (evidence).
---

# verify

Run the gates against the tree that will be delivered, from a context that did
not write it. Report every gate, including the ones that did not run.

## When to use

- About to merge, hand off or release, and someone will rely on "it works".
- A fix landed and the claim is that the defect is gone.
- A delivery close is requested and the record needs results for every required check.
- A previous run is stale: the tree changed after it.
- The work is a docs or config change, and the cheap gates still apply.

Near misses:

- One claim needs an artifact → `evidence` records it.
- The fix has no failing test yet → `tdd` writes it.
- The question is whether the design is sound → `review` reads it; `verify`
  runs commands, it does not judge design.

## Steps

1. **Read the declared gates.** From the delivery record or the project's gate
   config. If none are declared, use the minimum set in
   `references/gates.md` and record that you chose it. Artifact: gate list.
2. **Freeze the tree.** Commit or stash; record `git rev-parse HEAD` and
   `git status --porcelain` (empty). Artifact: `commit` + clean status.
3. **Run each gate.** Run the command itself — never infer it from a sibling
   check. Capture exit code and output per gate. Artifact: one log and digest
   per gate.
4. **Read the diff, not the summary.** Before interpreting results, read what
   changed (`git diff <base>...HEAD`). A gate can pass while the change is
   wrong. Artifact: diff reviewed, files named.
5. **Classify every gate.** `passed`, `failed`, `not_run` or `blocked`. A gate
   that was skipped is `not_run` and is reported as such — never omitted.
6. **Refuse completion on a missing required gate.** Say which gate, what it
   would prove, and what is needed to run it. Override only with a recorded
   reason and the owner's name. Artifact: refusal or override in the record.
7. **Record the result.** With the recorder installed, call `vstack_evidence`
   once per gate. Without it, append gate, exit, digest and artifact path to
   the delivery record. Artifact: gate table below.

## Output

| Gate | Required | Result | Evidence |
|---|---|---|---|
| `unit` | yes | passed | `logs/unit.log` `sha256:41aa…` |
| `types` | yes | passed | `logs/tsc.log` `sha256:9c02…` |
| `e2e` | no | not_run | not declared for this delivery |
| `perf` | yes | blocked | no benchmark host available |

Verdict line: `complete`, `incomplete` or `blocked`, plus the gates that
decide it. A verdict with no `not_run` disclosure is a false report.

## Failure

- **A gate is flaky.** Re-run it twice; record all three results. It counts as
  passed only at zero failures in the stated number of runs; otherwise it is
  `failed` with the rate.
- **The environment cannot run a gate.** `blocked`, naming the missing piece.
  Never infer a pass from a neighbouring gate.
- **The gate passes but the diff is wrong.** The diff wins. Record the
  contradiction and stop; a green gate over a bad change is the most expensive
  outcome in this skill.
- **The tree cannot be frozen** (uncommitted work from someone else). Stop and
  report; verifying a moving tree is theatre.
