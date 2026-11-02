# Principle: Flexible Workflows, Not Mandatory Ceremony

## Summary
Workflows guide common engineering outcomes without forcing every task through the same sequence. A small bug fix should not require the same process as a large architectural change. The applicable level of investigation, planning, parallelism, review, and verification reflects task size and risk.

## Trigger
You are selecting or executing a workflow for a task, and the default workflow feels like overkill or underkill for the task's size/risk.

## Decision Rule
**Match workflow intensity to task risk and scope.** Use the risk adaptation table in each workflow:
- **Low risk / small scope:** Skip discovery/blueprint; simple task list; quick review (1 lens)
- **Medium risk:** Standard discovery; conditional blueprint; full plan; full review (3-4 lenses)
- **High risk:** Deep discovery; required blueprint; full plan with dependencies; full review + jury
- **Critical:** Deep + expert; required blueprint + ADR; milestones; jury mandatory

Never run a "core-must" workflow for a trivial task just because it exists.

## Observable Effect
- Different tasks of different sizes follow visibly different paths
- No "checkbox theater" — skipped phases have documented rationale
- Time invested correlates with risk reduction achieved

## Concrete Example

### ❌ Violates Principle
> Running the full `feature-delivery` workflow (8 phases, review loop, jury) for a one-line typo fix.

### ✅ Follows Principle
> Typo fix → `bug-fixing` workflow (low risk adaptation): Light discovery → direct fix → quick verify → ship. Total time: 15 minutes.

## Informs
- All workflows (each has a Risk Adaptation table)
- `vstack-figure-it-out` — decides which workflow to use
- `vstack-sharpen` — clarifies scope/risk before workflow selection

## Related Skills
- `vstack-sharpen` — assesses scope and risk
- `vstack-figure-it-out` — routes to appropriate workflow
- `vstack-plan-loop` — scales plan complexity to task

## Escalation
If unsure about risk level, default to **one level higher** and document the assessment. Use `vstack-blast-radius` to quantify impact when uncertain.