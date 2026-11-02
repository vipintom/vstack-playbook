# Principle: Small, Purposeful Agent Team

## Summary
The default team remains small: **Lead**, **Builder**, **Reviewer**. Specialization comes primarily from skills and task context rather than an ever-growing collection of permanent agents. Security, performance, accessibility, UI, documentation, and test strategy are delivered through skills and review lenses.

## Trigger
You are considering adding a new specialized agent role (e.g., "SecurityAgent", "PerformanceAgent", "UXAgent") or creating a permanent agent for a cross-cutting concern.

## Decision Rule
**Default to skills and review lenses over new agent roles.** Before creating a new agent:
1. Can a **skill** encode the specialized procedure? (e.g., `vstack-performance`, `vstack-design-audit`)
2. Can a **review lens** in `vstack-review-rubrics` capture the concern?
3. Can the **Builder** execute the skill with the appropriate context?
4. Only if the concern requires *persistent, distinct decision authority* across tasks — consider a role

The three roles have fixed responsibilities:
- **Lead** — owns outcome, coordinates, decides, validates completion
- **Builder** — executes tasks, produces evidence, runs loops
- **Reviewer** — independent challenge, identifies risks/defects

## Observable Effect
- No agent proliferation — team stays at 3 roles
- Cross-cutting concerns handled via skill invocation + review lenses
- New capabilities added as skills, not agents

## Concrete Example

### ❌ Violates Principle
> Creating "SecurityAgent" that reviews all PRs for security issues.

### ✅ Follows Principle
> Security review is a **lens** in `vstack-review-rubrics`. Reviewer invokes `vstack-review-loop` with security lens. For deep security work, Builder executes `vstack-performance` or `vstack-design-audit` with security focus. Lead decides if jury (`vstack-jury`) needed.

## Informs
- Role definitions (`agents/roles/lead.md`, `builder.md`, `reviewer.md`)
- `vstack-review-rubrics` — lenses for security, performance, accessibility, etc.
- `vstack-jury` — escalation for multi-perspective review
- All workflows (role assignments at each phase)

## Related Skills
- `vstack-review-rubrics` — defines review lenses
- `vstack-review-loop` — executes review with lenses
- `vstack-jury` — multi-reviewer escalation

## Escalation
If a concern genuinely requires a distinct agent with ongoing authority (not just a review lens), propose an ADR. The bar is high: must demonstrate that skills + lenses + jury cannot achieve the same outcome.