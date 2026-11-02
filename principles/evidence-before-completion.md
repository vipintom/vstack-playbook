# Principle: Evidence Before Completion

## Summary
A claim that work is complete, tested, or reviewed must be supported by appropriate evidence. An agent's assertion alone is not equivalent to an executed check or an independent review.

## Trigger
You or another agent states "done," "tested," "verified," "reviewed," or "complete" without presenting evidence.

## Decision Rule
**Require evidence matching the claim's strength.** Minimum evidence per claim:

| Claim | Minimum Evidence |
|-------|-----------------|
| "Implementation complete" | Diff + test output showing all acceptance criteria pass |
| "Tests pass" | Actual test command output (not "I ran tests") |
| "Verified" | `vstack-verify-loop` output with check results |
| "Reviewed" | `vstack-review-loop` report with findings + resolutions |
| "No regressions" | Before/after test comparison or `vstack-check` history |

**No self-certification:** The agent who did the work cannot be the sole source of evidence for completion. Independent verification required (Reviewer, fresh context, or automated check).

## Observable Effect
- Every completion claim has traceable evidence
- `vstack_check` records are the source of truth for verification
- Review reports are distinct from implementation reports

## Concrete Example

### ❌ Violates Principle
> Builder: "Feature is complete and tested." Lead: "Great, marking done."

### ✅ Follows Principle
> Builder: "Feature implemented. Evidence: diff at `git diff HEAD`, test output: `pnpm test` (103/103 pass), verification: `vstack_check list --delivery <id>` shows all checks passed." Reviewer: "Reviewed via `vstack-review-loop` — 2 medium findings resolved, report at `.vstack/reviews/<id>.md`." Lead: "Validated evidence, marking complete."

## Informs
- `vstack-verify-loop` — produces verification evidence
- `vstack-review-loop` — produces review evidence
- `vstack_check` tool — records and retrieves check evidence
- `vstack-lessons` — captures patterns from evidence
- Lead role — validates evidence before completion

## Related Skills
- `vstack-verify-loop` — bounded verification with evidence
- `vstack-review-loop` — independent review with evidence
- `vstack-check` — persistence and retrieval of check records
- `vstack-lessons` — extracts patterns from completed work

## Escalation
If evidence cannot be produced (e.g., manual testing without automation), document the gap explicitly in the completion record and flag for follow-up automation. Never accept "trust me" as evidence.