# Principle: Route Before Loading

## Summary
Before loading context, invoking skills, or starting work, explicitly route the request to the correct workflow, skill, or procedure. Routing prevents misapplied effort and ensures the right method is used for the task shape.

## Trigger
A new request, task, or problem arrives. The instinct is to immediately start working or load context.

## Decision Rule
**Route first, execute second.** Explicit routing steps:
1. **Classify** — What kind of task? (bug, feature, investigation, refactor, docs, infra, perf, prototype, etc.)
2. **Assess risk/scope** — Low/medium/high/critical; small/medium/large
3. **Select workflow** — Match to workflow trigger conditions (use `figure-it-out`)
4. **Confirm** — Verify non-triggers don't apply (avoid misrouting)
5. **Only then** — Load context, invoke skills, begin execution

**Routing is not optional.** Even for "obvious" tasks, explicit routing catches misclassification early.

## Observable Effect
- Every task has a documented workflow selection rationale
- Misrouted tasks caught before significant investment
- Workflow trigger/non-trigger conditions are decision points, not suggestions

## Concrete Example

### ❌ Violates Principle
> "Performance is slow" → immediately starts `performance` skill without checking if it's actually a bug, config issue, or architecture problem.

### ✅ Follows Principle
> 1. Classify: "Performance investigation" (not bug fix, not feature)
> 2. Assess: Medium risk, unknown scope
> 3. Select: `performance-investigation` workflow (trigger: "performance regression or optimization need")
> 4. Check non-triggers: Not a "known bug with clear fix" (would be `bug-fixing`), not "new feature" (would be `feature-delivery`)
> 5. Execute: `performance-investigation` workflow → `code-tour` → `performance` → `forensics`

## Informs
- `figure-it-out` — primary routing skill
- `sharpen` — clarifies task before routing
- All workflows — explicit Trigger & Non-Trigger sections
- `shipinciples` — principle reference for routing decisions

## Related Skills
- `figure-it-out` — workflow/skill routing
- `sharpen` — task clarification
- `shipinciples` — principle lookup

## Escalation
If classification is genuinely ambiguous between two workflows, run `sharpen` to clarify. If still ambiguous, default to the **more comprehensive** workflow (higher risk adaptation) and document the uncertainty.