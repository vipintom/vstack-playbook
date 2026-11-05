---
name: design
description: Use when a change needs its boundaries, interfaces and data flow decided before implementation, and the decision must survive review; not for ordering known work (plan) or for auditing a design that already exists (audit).
tier: design
rigor: rigid
status: stable
pairs-with: [blueprint, impact, red-team]
---

# design

Decide the shape before writing it. A design is a set of boundaries, contracts
and trade-offs with a named alternative for each choice you reject.

## When to use

- New module, service, schema or public interface.
- A change crosses a boundary that other code depends on.
- Two plausible shapes exist and the wrong one is expensive to undo.
- The work is Deep tier, or irreversible, or touches data.
- A previous implementation failed because the seams were wrong.

Near misses:

- The work is local and reversible → `plan` then `tdd`.
- The design exists and needs scrutiny → `audit`.
- The problem is not framed → `shape` first.

## Modes

| Mode | Depth |
|---|---|
| Sketch | boundaries, one interface, one trade-off |
| Standard | components, interfaces, data flow, failure modes |
| Deep | Standard plus a red-team pass and a migration window |

`rigor: rigid` — steps 2 and 3 cannot be skipped. A design with no rejected
alternative is a preference.

## Steps

1. **Restate the forces.** Outcome, constraints, non-goals, and the quality
   attributes that matter (latency, safety, cost, change frequency). Artifact:
   forces list.
2. **Draw the boundaries.** What owns state, what is pure, what crosses a
   process or network edge. Name what stays out. Artifact: component map.
3. **Write the contracts.** Types, signatures, error shapes, invariants — in
   the language of the system, not prose. Artifact: interface sketch (see
   `blueprint` for the expansion).
4. **Follow the data.** One happy path and two failure paths end to end,
   naming where state changes and what happens on retry. Artifact: data flow.
5. **Name the rejected alternative and its cost.** At least one, with the
   reason it lost. Artifact: trade-off table.
6. **Price the change.** Which callers move, what breaks, what can ship in
   stages. Artifact: impact summary, from `impact` when the blast radius is
   non-obvious.
7. **Record it** in the delivery's design section and hand to `blueprint`.
   Artifact: design record.

## Output

```markdown
Boundaries: `auth` owns sessions; `api` is stateless; `jobs` may read, never write.
Contract: `createSession(userId) -> {token, expiresAt}`; errors: InvalidUser, RateLimited.
Data: token issued → stored hash → refresh reads hash → revoke deletes row.
Rejected: JWT-only (no revocation without a denylist) — cost: one table + 2 queries.
Stages: table, issue path, refresh path, revoke. Callers: 3, all in `api`.
```

## Failure

- **A boundary cannot be decided.** The unknown is empirical: run a
  `prototype` or `spike`, then return with data.
- **Two designs are equally good.** Pick the one that is cheaper to reverse
  and record why; do not average them.
- **The design breaks a caller you cannot migrate.** That is a compatibility
  problem, not a design one: open `migration` and sequence the change.
- **The team wants to skip the record.** Write four lines. A design that lives
  only in a meeting will be re-decided by whoever is next.

## Rationalizations

| Excuse | Reality |
|---|---|
| "The code will reveal the design." | It reveals one design, after the cost is paid. |
| "We are agile, design is up front." | A ten-minute boundary sketch is not waterfall; rewriting a contract is. |
| "Interfaces can change later." | Only at the cost of every caller; that cost is the design. |
| "One option is obviously right." | Then naming the loser takes one line and proves it. |

## Tracking

- **OpenChamber present:** design section on the delivery note; a project note
  when the design outlives the delivery.
- **OpenCode or files:** `docs/deliveries/<id>.md` under "Design".
- Ladder: `resources/tracking.md`.

## Verification

```bash
docker compose run --rm pack node tools/validate.js
```
