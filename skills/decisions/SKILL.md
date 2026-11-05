---
name: decisions
description: Use when a choice will matter later and must be recorded with its alternatives, evidence and consequences so it is not relitigated; not for reconstructing an old decision (rationale) or for applying a rule (principles).
---

# decisions

A decision record is short and durable: the choice, the alternatives, the
evidence, the consequences, the date and the owner. It exists to stop the same
argument from happening twice.

## When to use

- A choice constrains future work (schema, boundary, dependency, process).
- Two options were close and the loser will be proposed again.
- A delivery's design or rollout order needs a stable reference.
- A principle was overridden.
- A decision is about to be made in a meeting with no written trace.

Near misses:

- The decision already happened and needs explaining → `rationale`.
- The question is which rule applies → `principles`.
- The choice is local and reversible within the task → just do it.

## Steps

1. **State the decision in the active voice**: "Use expand/contract for the
   orders migration." Artifact: `decision`.
2. **List the alternatives considered**, including "do nothing". Artifact:
   alternatives.
3. **Attach the evidence** that decided it: measurement, constraint, incident,
   requirement. Artifact: evidence links.
4. **State the consequences**: what becomes easier, what becomes harder, what
   must now always be true. Artifact: consequences.
5. **Name the owner and the date**; a decision with no owner is a suggestion.
   Artifact: owner, date.
6. **Record it** next to the work: `decisions/<date>-<slug>.md` or the delivery
   record, with choice, alternatives, reason, consequence and owner. Artifact:
   record.
7. **Mark superseded decisions** rather than editing them. Artifact: status
   change.

## Output

```markdown
# 2026-11-05 — expand/contract for orders
Decision: add `status_v2`, dual-write, backfill, then cut reads.
Alternatives: flag day (rejected: 40 min downtime); new table (rejected: dual joins).
Evidence: 2.1M rows, peak 40 writes/s, rollback requirement.
Consequences: two writes until cutover; no downtime; one extra migration step.
Owner: Vipin. Supersedes: none.
```

## Failure

- **The decision is not made yet.** Write the option table only; do not record
  a choice that has not happened.
- **The evidence is missing.** Record the decision as provisional and name what
  would confirm it.
- **The decision changes.** Supersede with a new record; never edit history to
  look consistent.
