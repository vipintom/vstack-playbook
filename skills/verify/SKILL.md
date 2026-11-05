---
name: verify
description: Use when work claims to be complete and an independent run must prove it before merge, handoff or release; not for writing the failing test first (tdd) or recording one claim (evidence).
tier: build
rigor: rigid
status: stable
harness: [gate, evidence, ledger]
pairs-with: [evidence, ready, coverage]
---

# verify

Run the gates against the tree that will be delivered, from a context that did
not write it. Report every gate, including the ones that did not run.

## When to use

- About to merge, hand off or release, and someone will rely on "it works".
- A fix landed and the claim is that the defect is gone.
- A delivery close is requested and the ledger wants gate results.
- A previous run is stale: the tree changed after it.
- The work is a docs or config change, and the cheap gates still apply.

Near misses:

- One claim needs an artifact → `evidence` records it.
- The fix has no failing test yet → `tdd` writes it.
- The question is whether the design is sound → `review` reads it; `verify`
  runs commands, it does not judge design.

## Modes

| Mode | Gates | Independent run |
|---|---|---|
| Targeted | the gates affected by the change | no, but the tree is frozen first |
| Full | every gate the delivery declares | no |
| Independent | full | yes — a context that did not write the change |

`rigor: rigid` — steps 1 and 2 cannot be skipped. Without a frozen tree and a
declared gate list, a green run proves nothing about the delivery.

## Steps

1. **Read the declared gates.** From the delivery record or the project's gate
   config. If none are declared, use the minimum set in
   `references/gates.md` and record that you chose it. Artifact: gate list.
2. **Freeze the tree.** Commit or stash; record `git rev-parse HEAD` and
   `git status --porcelain` (empty). Artifact: `commit` + clean status.
3. **Run each gate.** With the adapter: `vstack_gate run <name>`. Otherwise the
   command itself. Capture exit code and output per gate. Artifact: one log
   and digest per gate.
4. **Read the diff, not the summary.** Before interpreting results, read what
   changed (`git diff <base>...HEAD`). A gate can pass while the change is
   wrong. Artifact: diff reviewed, files named.
5. **Classify every gate.** `passed`, `failed`, `not_run` or `blocked`. A gate
   that was skipped is `not_run` and is reported as such — never omitted.
6. **Refuse completion on a missing required gate.** Say which gate, what it
   would prove, and what is needed to run it. Override only with a recorded
   reason and the owner's name. Artifact: refusal or override in the record.
7. **Record the result.** Append to the delivery record and the evidence file:
   gate, exit, digest, artifact path. Artifact: gate table below.

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

## Rationalizations

| Excuse | Reality |
|---|---|
| "The suite was green before my change." | Then run it after. The change is the only thing that matters. |
| "CI will run it." | CI proves the pushed tree, later. Until it reports, the result is `not_run`. |
| "Only docs changed." | Docs break links, commands and counts. Cheap gates exist for exactly this. |
| "It passed when I ran it manually." | Manual runs are unrepeatable and undocumented. Gates are commands with digits. |
| "The failing test is unrelated." | Then name the failure and the evidence it is pre-existing. Unnamed means caused. |
| "Re-running until green is fine." | That records luck, not a fix. Rerun to measure flake, then fix it. |

## Tracking

- **OpenChamber present:** `focus_status` "testing", then "reviewing"; the gate
  table lands on the delivery note so the panel can show it.
- **vstack adapter present:** `vstack_gate run` per gate, `vstack_evidence` for
  the logged result and `vstack_status` for the outstanding list; completion is
  refused by the ledger, not by prose.
- **Neither:** `docs/deliveries/<id>.md` gate table plus
  `.vstack/deliveries/<id>/logs/*`. Ladder: `resources/tracking.md`.


## Verification

```bash
git rev-parse HEAD && git status --porcelain
```
