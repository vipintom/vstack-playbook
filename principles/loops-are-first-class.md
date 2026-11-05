# Principle: Loops Are First-Class Practices

## Summary
Planning, implementation, verification, debugging, and review are often iterative. vstack defines reusable feedback loops with bounded retries, clear outcomes, and escalation when progress stalls.

## Trigger
You encounter a situation where a single pass is insufficient — tests fail, review finds issues, requirements shift, or understanding deepens.

## Decision Rule
**Use the defined loop skill for the activity, don't improvise.** Each loop has:
- **Bounded retries** — max iterations before escalation (default: 3)
- **Clear outcome** — what "done" looks like for that iteration
- **Escalation trigger** — when to invoke `unstick` or `resume`
- **Evidence requirement** — what must be recorded each iteration

The canonical loops:
| Activity | Loop Skill | Max Iterations | Escalation |
|----------|------------|----------------|------------|
| Planning | `plan` | 3 | `unstick` |
| Implementation | `tdd` + `verify` | 3 per task | `debug` → `unstick` |
| Verification | `verify` | 3 | `unstick` |
| Debugging | `debug` | 3 | `unstick` → `resume` |
| Review | `review` | 2 | `red-team` |

## Observable Effect
- Iteration is visible and recorded, not hidden
- Stuck loops trigger explicit escalation, not silent continuation
- Context resets prevent compounding errors

## Concrete Example

### ❌ Violates Principle
> Re-running tests repeatedly without recording what changed, trying random fixes, no limit on attempts.

### ✅ Follows Principle
> Test fails → `verify` iteration 1: run `debug`, record hypothesis, apply fix, re-run. Iteration 2: same. Iteration 3: invoke `unstick` — change approach (refactor vs patch), record decision. If still failing: `resume` with fresh context.

## Informs
- `plan`, `verify`, `debug`, `unstick`, `resume`, `review`
- All workflows (each phase uses loops, not one-shot actions)
- Role behaviors (Builder iterates, Reviewer checks loop evidence)

## Related Skills
- `unstick` — changes approach when loop stalls
- `resume` — fresh context at boundaries
- `decisions` — records loop iterations and decisions

## Escalation
If a loop exceeds max iterations without progress, **must** escalate per the loop's escalation trigger. Document the stall in `decisions` and invoke the next-level skill.