# Principle: Loops Are First-Class Practices

## Summary
Planning, implementation, verification, debugging, and review are often iterative. vstack defines reusable feedback loops with bounded retries, clear outcomes, and escalation when progress stalls.

## Trigger
You encounter a situation where a single pass is insufficient — tests fail, review finds issues, requirements shift, or understanding deepens.

## Decision Rule
**Use the defined loop skill for the activity, don't improvise.** Each loop has:
- **Bounded retries** — max iterations before escalation (default: 3)
- **Clear outcome** — what "done" looks like for that iteration
- **Escalation trigger** — when to invoke `vstack-unstick` or `vstack-context-reset`
- **Evidence requirement** — what must be recorded each iteration

The canonical loops:
| Activity | Loop Skill | Max Iterations | Escalation |
|----------|------------|----------------|------------|
| Planning | `vstack-plan-loop` | 3 | `vstack-unstick` |
| Implementation | `vstack-tdd` + `vstack-verify-loop` | 3 per task | `vstack-debug` → `vstack-unstick` |
| Verification | `vstack-verify-loop` | 3 | `vstack-unstick` |
| Debugging | `vstack-debug` | 3 | `vstack-unstick` → `vstack-context-reset` |
| Review | `vstack-review-loop` | 2 | `vstack-jury` |

## Observable Effect
- Iteration is visible and recorded, not hidden
- Stuck loops trigger explicit escalation, not silent continuation
- Context resets prevent compounding errors

## Concrete Example

### ❌ Violates Principle
> Re-running tests repeatedly without recording what changed, trying random fixes, no limit on attempts.

### ✅ Follows Principle
> Test fails → `vstack-verify-loop` iteration 1: run `vstack-debug`, record hypothesis, apply fix, re-run. Iteration 2: same. Iteration 3: invoke `vstack-unstick` — change approach (refactor vs patch), record decision. If still failing: `vstack-context-reset` with fresh context.

## Informs
- `vstack-plan-loop`, `vstack-verify-loop`, `vstack-debug`, `vstack-unstick`, `vstack-context-reset`, `vstack-review-loop`
- All workflows (each phase uses loops, not one-shot actions)
- Role behaviors (Builder iterates, Reviewer checks loop evidence)

## Related Skills
- `vstack-unstick` — changes approach when loop stalls
- `vstack-context-reset` — fresh context at boundaries
- `vstack-ledger` — records loop iterations and decisions

## Escalation
If a loop exceeds max iterations without progress, **must** escalate per the loop's escalation trigger. Document the stall in `vstack-ledger` and invoke the next-level skill.