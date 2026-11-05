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
- **Defined lenses** — Review uses `rubrics` lenses (correctness, security, performance, maintainability, accessibility)

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
> Builder completes implementation. Lead dispatches Reviewer (fresh session, no access to Builder's context). Reviewer runs `review` with lenses: correctness, security, performance. Finds: "Race condition in cache invalidation (high)" — Builder must fix. Reviewer confirms fix in fresh verification.

## Informs
- `reviewer.md` role — mission is independent challenge
- `review` — executes independent review
- `rubrics` — defines adversarial lenses
- `red-team` — escalation for contested reviews
- All workflows — Review phase assigns independent Reviewer

## Related Skills
- `review` — review procedure with lenses
- `rubrics` — adversarial review lenses
- `red-team` — multi-reviewer escalation
- `handoff` — fresh-context handoff protocol

## Escalation
If Reviewer and Builder cannot agree on a finding, escalate to `red-team` (3+ independent reviewers). If jury cannot resolve, Lead makes final call with recorded rationale.