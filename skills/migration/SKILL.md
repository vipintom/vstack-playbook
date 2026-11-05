---
name: migration
description: Use when stored data, a public contract or a running system must move from one shape to another without a flag day; not for a fresh implementation (design) or a same-shape refactor (refactor).
tier: design
rigor: rigid
status: stable
pairs-with: [impact, design, verify]
---

# migration

Move the system in steps that are each safe to stop at. The old shape stays
readable until the new one is proven; the old path is deleted last, by a
separate change.

## When to use

- A schema, index or table changes shape while rows exist.
- A public API, event or config key changes for consumers you do not control.
- A dependency major version changes behaviour.
- A subsystem moves between services or processes.
- Data must be backfilled or re-derived.

Near misses:

- Nothing is stored yet → `design` and ship once.
- Behaviour is preserved and nothing external sees it → `refactor`.
- The change is a one-way cutover with no data → `change-infrastructure`
  playbook.

## Modes

| Mode | Plan |
|---|---|
| Expand/contract | add new, dual-write or dual-read, backfill, cut over, remove old |
| Versioned contract | new version alongside, deprecate, retire by date |
| Offline | stop writes, migrate, restart — only with a measured window |

`rigor: rigid` — no step deletes the old path before the new one is proven in
production. The order is the safety.

## Steps

1. **Map what is stored and who reads it** with `impact`. Artifact: consumer
   and data inventory.
2. **Write the end state** and the compatibility window. Artifact: target
   schema or contract.
3. **Add the new shape** without removing the old: column, field, version.
   Artifact: expand change.
4. **Backfill in batches**, idempotent, resumable, with a progress counter.
   Artifact: backfill job and counts.
5. **Dual-read or dual-write**, compare results, fix divergences. Artifact:
   comparison report.
6. **Cut over reads**, keep writes compatible for one release. Artifact:
   cutover change.
7. **Remove the old path** in a separate change, after the window closes.
   Artifact: contract change and deletion.
8. **Prove rollback** before step 4 runs in production: restore and start on
   the old shape. Artifact: rollback log.

## Output

A step table with, per step: change, reversible by, proof, and the condition
that allows the next step. Plus the rollback command per step.

## Failure

- **A consumer cannot be migrated.** Keep both shapes and set a retirement
  date; never break a caller you do not control on the same day.
- **Backfill is not idempotent.** Stop; rerunning must be safe or the migration
  cannot resume.
- **Rollback was not tested.** The migration is not ready, regardless of how
  good the forward path looks.
- **The window is a flag day.** Reduce scope until a staged path exists, or
  get an explicit recorded acceptance of downtime.

## Rationalizations

| Excuse | Reality |
|---|---|
| "We can do it in one deploy." | One deploy has one failure mode and no way back. |
| "Backfill is a one-off script." | One-off scripts run twice; make it idempotent. |
| "Nobody reads the old field." | Prove it with query logs, not with confidence. |
| "Rollback is obvious." | Then run it once in staging and keep the output. |
| "Dual-write is complex." | The complexity is the price of not having a flag day. |

## Tracking

- **OpenChamber present:** step table on the delivery note; the panel shows the
  current step and what unblocks the next.
- **OpenCode or files:** `docs/deliveries/<id>.md` under "Migration", plus logs
  in `.vstack/deliveries/<id>/migration/`.
- Ladder: `resources/tracking.md`.

## Verification

```bash
docker compose run --rm pack node tools/validate.js
```
