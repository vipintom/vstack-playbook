# Principle: Challenge Assumptions

## Summary
Explicitly identify and test assumptions before committing to a plan or implementation. Unchallenged assumptions are the primary source of wasted effort, architectural mismatch, and surprise failures.

## Trigger
You are forming a plan, designing a solution, or about to implement based on "how it works" or "what the user wants" without verification.

## Decision Rule
**Surface assumptions, then falsify them.** For every significant decision:
1. **List assumptions** — What am I assuming about: current behavior, user needs, constraints, dependencies, performance, security?
2. **Prioritize** — Which assumptions, if wrong, would invalidate the plan? (High impact, high uncertainty)
3. **Test** — For each critical assumption: run a check, read code, ask user, spike, measure
4. **Record** — Document assumption, test method, result in `decisions` or `vstack-memory`
5. **Re-plan if falsified** — If assumption fails, update plan before proceeding

**Assumption categories to always check:**
- "The code works like X" → Verify with `code-tour` / tests
- "The user needs Y" → Confirm with `sharpen` / user
- "Library Z supports W" → Check docs / test
- "Performance is fine" → Measure with `performance`
- "No security impact" → Run `audit` security lens

## Observable Effect
- Plans reference tested assumptions, not wishes
- Surprises during implementation are reduced
- Pivots happen early (cheap) not late (expensive)
- `decisions` contains assumption-test records

## Concrete Example

### ❌ Violates Principle
> Plan: "Add caching to speed up API." Assumes: "Database is the bottleneck." Implements Redis cache. Result: No improvement — bottleneck was serialization in application layer.

### ✅ Follows Principle
> 1. Assumption: "DB is bottleneck."
> 2. Test: `performance` profile → reveals 80% time in JSON serialization.
> 3. Re-plan: "Optimize serialization" (change library, add streaming). Result: 5x speedup.

## Informs
- `sharpen` — clarifies assumptions about requirements
- `code-tour` / `rationale` — tests behavioral assumptions
- `performance` — tests performance assumptions
- `impact` — tests impact assumptions
- `figure-it-out` — tests workflow suitability assumptions
- `decisions` — records assumption tests

## Related Skills
- `sharpen` — requirement assumption testing
- `code-tour` — behavioral assumption testing
- `performance` — performance assumption testing
- `impact` — impact assumption testing
- `decisions` — assumption record

## Escalation
If a critical assumption cannot be tested (e.g., future user behavior), document as **explicit risk** with mitigation. Do not proceed assuming it's true.