# Principle: Procedures Over Vague Instructions

## Summary
Skills describe actionable procedures, not encouragements to "be careful" or "be thorough." Important procedures make clear: when they apply, what they require, what steps to follow, what outcome is expected, and when to stop or escalate.

## Trigger
You are authoring or reviewing a skill that uses subjective language ("be thorough," "carefully consider," "ensure quality") without concrete, verifiable steps.

## Decision Rule
**Replace subjective guidance with observable actions.** Every skill must specify:
1. **When it applies** — explicit trigger conditions
2. **What it requires** — inputs, context, permissions, tools
3. **What steps to follow** — numbered, imperative, each producing evidence
4. **What outcome is expected** — falsifiable done predicate
5. **When to stop or escalate** — bounded retries, clear escalation criteria

## Observable Effect
- A reader can execute the skill without interpretation
- Each step produces something verifiable (file, test output, decision record)
- "Stop conditions" prevent infinite iteration
- Review can check procedure fidelity, not just outcome

## Concrete Example

### ❌ Violates Principle
> "Carefully review the code for bugs and security issues. Be thorough."

### ✅ Follows Principle
> "Run `rubrics` with lenses: security, correctness, performance. For each finding: record file:line, severity, suggested fix. **Stop when:** all critical/high findings resolved or escalated. **Escalate if:** >5 critical findings or review exceeds 2 hours."

## Informs
- All 55 skills (each must have Procedure, Expected Outputs, Verification, Stop Conditions)
- Workflow skill sequences (each step must be actionable)
- Role responsibilities (Builder executes, Reviewer verifies procedure fidelity)

## Related Skills
- `skill-authoring` — enforces this principle for new skills
- `rubrics` — provides concrete review lenses
- `verify` — bounded verification with stop conditions

## Escalation
If a domain genuinely requires judgment that cannot be proceduralized (e.g., "evaluate UX quality"), document the judgment criteria explicitly and require independent review per `independent-challenge` principle.