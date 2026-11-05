# Principle: Model Domain Explicitly

## Summary
Make domain concepts, invariants, and boundaries explicit in code and documentation. Implicit domain knowledge in variable names, scattered conditionals, or tribal memory causes bugs and makes changes risky.

## Trigger
You are designing a new feature, refactoring existing code, or reviewing code where domain logic is embedded in procedural code without clear boundaries.

## Decision Rule
**Extract domain concepts into explicit models.** For each domain concept:
1. **Name it** — Create a type, class, or module with the domain name (e.g., `Order`, `Subscription`, `RateLimit`)
2. **Encapsulate invariants** — Business rules live *inside* the model, not scattered in callers
3. **Define boundaries** — Clear public API; internal representation hidden
4. **Document** — Invariants, state transitions, and constraints in code comments or `vstack-memory`

**Red flags for implicit domain:**
- `if (user.plan === 'pro' && user.usage > 100)` scattered in 5 files
- Magic strings/numbers representing domain states
- "Utility" functions that actually encode business rules
- Comments explaining "why" next to procedural code

## Observable Effect
- Domain logic is locatable, testable, and changeable in one place
- New team members learn domain from code structure
- Changes to business rules touch one model, not N call sites
- `design` reviews find domain leakage

## Concrete Example

### ❌ Violates Principle
> Subscription logic: `if (u.subscription === 'premium' && u.tokens > 1000) allowAccess()` in middleware, controller, and background job. Changing "premium" to "pro" requires 3+ file edits.

### ✅ Follows Principle
> `class Subscription { canAccess(feature: string): boolean { ... } }` — all logic encapsulated. Callers: `subscription.canAccess('api')`. Change: modify `Subscription` class only.

## Informs
- `design` — domain modeling in design
- `blueprint` — compares designs by domain clarity
- `refactor` — extracts implicit domain
- `audit` — maintainability lens checks domain modeling

## Related Skills
- `design` — domain-driven design
- `refactor` — extract domain model
- `audit` — review for domain leakage
- `blueprint` — design comparison

## Escalation
If domain is genuinely unclear (early product, exploring), document as **explicit uncertainty** in `vstack-memory`. Use `shipototype` to explore. Do not cement implicit assumptions.