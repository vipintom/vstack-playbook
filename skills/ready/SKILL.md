---
name: ready
description: Use when work is claimed complete and someone must decide whether it is safe to merge or release, weighing gates, findings and open risks; not for producing the evidence (verify) or performing the review (review).
tier: review
rigor: rigid
status: stable
harness: [gate, ledger, panel]
pairs-with: [verify, review, ship]
---

# ready

A readiness decision, not a summary. It names what is proven, what is not, and
what risk the owner accepts by proceeding.

## When to use

- A delivery close is requested.
- A merge or release needs a go/no-go with reasons.
- Gates are green but findings are open.
- A previous "ready" was based on stale evidence.
- An override is being considered for a missing gate.

Near misses:

- The gates have not run → `verify`.
- The review has not happened → `review`.
- The decision is to publish → `ship`.

## Modes

| Mode | Output |
|---|---|
| Merge | gate table + open findings + verdict |
| Release | plus rollback plan and observability |
| Waiver | explicit risk acceptance with a name |

`rigor: rigid` — no verdict without a gate table. "Looks ready" is not a
verdict.

## Steps

1. **Collect the gate table** from `verify`, including `not_run` and `blocked`.
   Artifact: gate table.
2. **Collect open findings** from `review` and classify: blocking, accepted,
   deferred. Artifact: findings list.
3. **Check the claim set**: every published claim has an evidence line.
   Artifact: claim-to-evidence map.
4. **Apply the rule:** any required gate not passed, or any blocking finding
   open, means not ready. Artifact: rule outcome.
5. **If waiving**, record the gate, the risk, the accepting person and the date.
   Artifact: waiver.
6. **State the verdict** with the three facts a reader needs: what is proven,
   what is not, what happens on failure. Artifact: readiness record.

## Output

```
Verdict: not ready.
Proven: unit, types, acceptance (3/3 gates).
Not proven: e2e — no staging host today.
Open finding: session survives logout (high) — fix in this branch.
On failure: none, nothing ships.
```

## Failure

- **Evidence is stale** (tree changed since the run). Rerun; a stale pass is a
  `not_run`.
- **A gate is waived without a name.** Not a waiver; not ready.
- **The decision is political.** State the technical facts and let the owner
  decide; record who decided.

## Rationalizations

| Excuse | Reality |
|---|---|
| "The gates were green yesterday." | The tree changed; yesterday's pass is history. |
| "The finding is minor, ship it." | Minor findings are recorded and accepted, not erased. |
| "A waiver slows the release." | An unrecorded waiver is the release failing later, unexplained. |
| "Ready is a feeling." | It is a table with three facts. |

## Tracking

- **OpenChamber present:** the verdict on the delivery note; the panel shows it
  next to the gate table.
- **OpenCode or files:** `docs/deliveries/<id>.md` under "Readiness".
- Ladder: `resources/tracking.md`.
- **vstack adapter present:** `vstack_gate` supplies the table the verdict
  reads; otherwise the gate logs are attached directly.

## Verification

```bash
docker compose run --rm pack node tools/validate.js
```
