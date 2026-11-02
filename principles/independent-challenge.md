# Principle: Independent Challenge

## Summary
Important work should be open to review by an agent operating with sufficiently independent context. Review identifies risks and defects, not merely confirms the implementer's conclusions.

## Trigger
Work reaches a review gate (end of implementation, before merge, architecture decision, security-sensitive change).

## Decision Rule
**Reviewer must have independent context.** Independence means:
- **Fresh context** — Reviewer did not participate in implementation
- **No shared scratchpad** — Reviewer does not read implementer's working notes/assumptions
- **Adversarial stance** — Reviewer's goal is to find problems, not approve
- **Defined lenses** — Review uses `vstack-review-rubrics` lenses (correctness, security, performance, maintainability, accessibility)

**Reviewer ≠ Validator:** Validator checks "does it meet criteria?" Reviewer asks "what could go wrong?"

## Observable Effect
- Review finds issues the implementer missed
- Review report lists findings by severity, not just "LGTM"
- Critical/high findings block completion until resolved
- Reviewer identity and context independence recorded

## Concrete Example

### ❌ Violates Principle
> Builder implements feature, then reviews own PR: "Looks good to me."

### ✅ Follows Principle
> Builder completes implementation. Lead dispatches Reviewer (fresh session, no access to Builder's context). Reviewer runs `vstack-review-loop` with lenses: correctness, security, performance. Finds: "Race condition in cache invalidation (high)" — Builder must fix. Reviewer confirms fix in fresh verification.

## Informs
- `reviewer.md` role — mission is independent challenge
- `vstack-review-loop` — executes independent review
- `vstack-review-rubrics` — defines adversarial lenses
- `vstack-jury` — escalation for contested reviews
- All workflows — Review phase assigns independent Reviewer

## Related Skills
- `vstack-review-loop` — review procedure with lenses
- `vstack-review-rubrics` — adversarial review lenses
- `vstack-jury` — multi-reviewer escalation
- `vstack-handoff` — fresh-context handoff protocol

## Escalation
If Reviewer and Builder cannot agree on a finding, escalate to `vstack-jury` (3+ independent reviewers). If jury cannot resolve, Lead makes final call with recorded rationale.