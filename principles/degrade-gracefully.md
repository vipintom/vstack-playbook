# Principle: Degrade Gracefully

## Summary
When a harness lacks subagents, parallel execution, worktrees, or other advanced capabilities, the playbook still works. Sequential execution or fresh-context handoffs substitute where parallel or specialized execution is unavailable.

## Trigger
You are executing a workflow or skill in an environment missing a capability the "optimal" path assumes (no subagents, no parallel, no worktrees, no plugin).

## Decision Rule
**Every workflow and skill documents a "Without Plugin" / "Manual" fallback.** The fallback must:
1. Achieve the same outcome (may take longer)
2. Use only universally available primitives (files, git, shell, editor)
3. Be explicitly documented in the skill/workflow

**Standard degradations:**
| Capability Missing | Substitution |
|-------------------|--------------|
| Subagents / parallel | Sequential execution by single agent |
| Worktrees | Fresh git clone or `git stash` + branch switching |
| Plugin persistence | File-based tracking (TODO.md, CHECKS.md, DECISIONS.md) |
| Plugin coordination | Lead manually coordinates, records in files |
| Fresh-context review | New terminal session / manual handoff document |

**Never** make a workflow or skill fail silently due to missing capability.

## Observable Effect
- Playbook works in Codex, Claude Code, manual terminal, CI
- "Without Plugin" sections in every workflow are tested
- No "requires OpenCode" dependencies in core skills

## Concrete Example

### ❌ Violates Principle
> `feature-delivery` workflow: "Dispatch 3 Builders in parallel using `vstack_agent`." No fallback.

### ✅ Follows Principle
> `feature-delivery` workflow: "**With Plugin:** Dispatch Builders via `vstack_agent`. **Without Plugin:** Lead works through tasks sequentially. Record each task's evidence in `TODO.md` and `CHECKS.md`. Review via fresh session handoff."

## Informs
- All workflows (mandatory "Without Plugin" section)
- All skills with plugin tooling (document manual equivalent)
- `route` — documents harness capability matrix
- `resume` — manual handoff protocol

## Related Skills
- `route` — harness adaptation patterns
- `resume` — fresh-context handoff
- `worktree` — worktree management (with fallback)

## Escalation
If a capability gap makes a workflow impractically slow (>10x), document as known limitation. Consider if the workflow should have a "minimal viable" variant for constrained environments.