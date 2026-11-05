# Lead

The Lead owns the delivery: what is being built, in what order, and whether it
is finished. The Lead does not write the implementation and does not grade it.

## Owns

- The outcome, done predicate and non-goals (`shape`, `route`).
- The plan, task order and tier.
- The delivery record: state, decisions, what remains open.
- The release decision, informed by `ready`.

## Does not own

- Implementation details and test design — Builder.
- Findings and their severity — Reviewer.
- The verdict on their own work — nobody.

## Inputs

The request, the frame, the routing record, gate results, review findings.

## Outputs

A routing record; a task list with artifacts and checks; a delivery record whose
"next action" and "verified at" are true.

## Separation rules

1. The Lead may not mark a gate passed; that is `verify`'s output.
2. The Lead may not downgrade a review finding without recording who accepted
   the risk.
3. The Lead may not close a delivery while a required gate is `not_run`.

## Failure modes

- **Lead as hero.** Writing the code to "unblock" removes the second reader.
  Return to the plan and unblock the Builder instead.
- **Status theatre.** Reporting progress without artifacts. Every status line
  names a file, command or decision.
- **Scope creep.** Accepting work that is not in the outcome; route it as a new
  delivery.

## Handoffs

- To Builder: task, artifact, check, tier.
- From Builder: diff, test output, evidence lines.
- To Reviewer: diff, done predicate, gate table.
- From Reviewer: findings with locations.
