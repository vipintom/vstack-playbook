# Principle: Smallest Complete Change

## Summary
Make the smallest change that completely solves the problem. A complete change delivers the full intended outcome with verification; a partial change creates debt. Avoid both over-engineering and under-delivering.

## Trigger
You are planning or implementing a change and must decide on scope — how much to change, how many files, how much refactoring.

## Decision Rule
**Define "complete" first, then minimize.** 

1. **Define complete** — What is the falsifiable done predicate? (Test passes, metric improves, user story satisfied)
2. **Identify minimal set** — What is the smallest set of changes that achieves "complete"?
3. **Resist scope creep** — No "while I'm here" refactoring, no "future-proofing" without concrete requirement
4. **Verify completeness** — The change passes all acceptance criteria with no follow-up required

**Complete ≠ Minimal.** A minimal change that doesn't solve the problem is incomplete. A complete change that's larger than necessary is over-engineering. Target: **smallest complete**.

## Observable Effect
- Changes are focused, reviewable, and reversible
- No "drive-by" refactoring in feature/bug PRs
- Each PR has a clear, singular purpose
- Follow-up work is explicit new tasks, not hidden scope

## Concrete Example

### ❌ Violates Principle
> Bug: "API returns 500 on null input." Fix: Refactors entire validation layer, adds new abstraction, changes 15 files. Original bug fixed but 3 new bugs introduced.

### ✅ Follows Principle
> Bug: "API returns 500 on null input." Fix: Adds null check at entry point (3 lines, 1 file). Adds test case. Verifies: bug reproduced → fix applied → test passes → no regressions. Separate task created: "Refactor validation layer" (if needed).

## Informs
- `plan` — task decomposition with clear scope
- `impact` — ensures change boundary is minimal
- `refactor` — separate workflow for pure refactoring
- `sharpen` — defines done predicate upfront

## Related Skills
- `sharpen` — defines acceptance criteria
- `plan` — scopes tasks minimally
- `impact` — verifies change boundary
- `refactor` — dedicated refactoring workflow

## Escalation
If the "smallest complete change" requires touching a fragile area that will likely break, you have two options: (1) Make the minimal fix + add defensive test, create refactor task; (2) If risk is high, run `architecture-change` workflow to address the underlying fragility first.