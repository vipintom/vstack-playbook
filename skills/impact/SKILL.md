---
name: impact
description: Use when a proposed change needs its blast radius known — callers, contracts, data, runtime effects — before work starts; not for deciding the change (design) or for verifying it after (verify).
tier: design
rigor: standard
status: stable
pairs-with: [design, migration, coverage]
---

# impact

Map what a change touches before touching it: callers, consumers, stored data,
public contracts and the people who would notice. Unknown impact is the most
expensive kind.

## When to use

- A signature, schema, event or config key changes.
- A shared module is edited by several teams.
- The change can affect data already stored.
- A rollout needs a safe order.
- A review asks "what else does this break?".

Near misses:

- The shape of the change is undecided → `design`.
- The change is already made and must be proven → `verify`.
- The question is how code works → `code-tour`.

## Modes

| Mode | Reach |
|---|---|
| Local | imports and call sites in this repository |
| Cross-repo | consumers, published packages, other services |
| Data | stored rows, events, caches, backups |

## Steps

1. **State the change in one line**, including what is removed. Artifact:
   `change`.
2. **Find direct callers** with symbol search, not memory. Count them. Artifact:
   caller list with `path:line`.
3. **Find indirect consumers:** serialized shapes, database columns, event
   payloads, config files, docs, dashboards. Artifact: consumer list.
4. **Classify each by consequence:** breaks at build, breaks at runtime,
   silently changes meaning, unaffected. Artifact: impact table.
5. **Name the irreversible parts:** data written in the old shape, external
   consumers you do not control. Artifact: `irreversible` list.
6. **Recommend a sequence** and, when data or external callers are involved,
   route to `migration`. Artifact: rollout order.
7. **Record it** with the change, or the change does not start. Artifact:
   impact record.

## Output

| Consumer | Kind | Consequence | Action |
|---|---|---|---|
| `api/handlers.ts:41` | caller | build break | update in same PR |
| `orders.status` column | data | silent meaning change | backfill + dual read |
| partner webhook | external | runtime break | version the payload |

## Failure

- **A consumer cannot be found.** Say the search was incomplete and name what
  would settle it (log sampling, schema registry, asking the owner).
- **The change is safe but the data is not.** Data wins: open `migration`.
- **Impact is unbounded** (a widely imported type). Split the change so each
  step is bounded, or version instead of editing.

## Rationalizations

| Excuse | Reality |
|---|---|
| "Only one caller, I checked." | Checked how? Grep, count, and record the command. |
| "Types will catch it." | Types do not catch serialized payloads or stored rows. |
| "We will fix consumers in a follow-up." | That is a broken main branch with extra steps. |
| "Impact is obvious." | Obvious is what the table replaces. |

## Tracking

- **OpenChamber present:** impact table on the delivery note, so the panel
  shows what the change reaches.
- **OpenCode or files:** `docs/deliveries/<id>.md` under "Impact".
- Ladder: `resources/tracking.md`.
