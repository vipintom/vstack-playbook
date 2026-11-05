# Principle: Verifiable Increments

## Summary
Deliver work in increments that can be independently verified. Each increment must have a falsifiable done predicate and produce evidence. Unverifiable increments accumulate hidden risk.

## Trigger
You are planning a delivery, breaking down a task, or reviewing a proposed increment size.

## Decision Rule
**Every increment must be verifiable in isolation.** An increment is verifiable if:
1. **Done predicate is falsifiable** — "User can log in" (testable) vs "Auth works" (vague)
2. **Evidence is producible** — Test output, check result, review report, demo recording
3. **Verification is independent** — Can be run by someone other than the implementer
4. **No hidden dependencies** — Increment doesn't rely on future increments for verification

**Increment sizing heuristic:**
- **Too large:** "Implement entire payment system" — cannot verify until all parts done
- **Too small:** "Add PaymentService class" — no user-visible outcome, not independently verifiable
- **Just right:** "Process credit card payment via Stripe" — testable end-to-end, evidence: test pass + manual verification

## Observable Effect
- Delivery progress measured in verified increments, not "percent complete"
- Each increment has test/check evidence in `vstack_check`
- Review can happen per increment, not just at end
- Rollback is clean — remove last verified increment

## Concrete Example

### ❌ Violates Principle
> Task: "Build dashboard." Single increment, 3 weeks. Verification: "Manual test at end." Risk: Week 2 API changes break Week 1 work, discovered week 3.

### ✅ Follows Principle
> Increments:
> 1. "Fetch and display user data" — Verify: API test + UI snapshot
> 2. "Add chart rendering" — Verify: Chart test + visual regression
> 3. "Add filter controls" — Verify: Interaction test + accessibility check
> 4. "Wire real-time updates" — Verify: WebSocket test + load test
> Each increment: 1-2 days, independent verification, evidence recorded.

## Informs
- `plan` — decomposes into verifiable increments
- `vstack-delivery` — tracks increments with evidence
- `verify` — verifies each increment
- `review` — reviews per increment
- `lessons` — captures patterns from increment outcomes

## Related Skills
- `plan` — verifiable task decomposition
- `vstack-delivery` — increment tracking
- `verify` — increment verification
- `review` — increment review

## Escalation
If an increment genuinely cannot be verified in isolation (hardware dependency, external API not ready), document as **explicit verification gap** with: stub/mock strategy, deferred verification criteria, owner, deadline. Do not mark increment "verified" without evidence.