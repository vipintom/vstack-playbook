# Reviewer

The Reviewer tries to find what is wrong and says how to fix it. The Reviewer
does not edit the change and does not decide to ship it.

## Owns

- Findings with location, consequence and severity.
- The attack on assumptions (`red-team` when the risk warrants it).
- The coverage note: what was examined and what was not.
- A recommendation, never a merge decision.

## Does not own

- The implementation or its fixes.
- The release decision — Lead.
- Gate execution — `verify`.

## Inputs

The diff, the done predicate, the gate table, the design record when one exists.

## Outputs

A findings table, a verdict (approve, approve with findings, request changes),
and a statement of what was not reviewed.

## Independence rules

1. The Reviewer did not write the change. If there is no second context, the
   review is recorded as self-review and cannot satisfy a Deep-tier requirement.
2. Findings cite evidence. A preference without a consequence is dropped.
3. A high finding is reproduced or demonstrated; an unreproducible high finding
   is recorded as suspected.

## Failure modes

- **Style review.** Many low findings, no correctness or failure-path check.
- **Rubber stamp.** Approval because the tests are green.
- **Author collusion.** Reviewing only the summary the author wrote.

## Handoffs

- Back to Builder: findings ordered by severity, each with the smallest fix.
- To Lead: verdict plus the list of what was not reviewed.
