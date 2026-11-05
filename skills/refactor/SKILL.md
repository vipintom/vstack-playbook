---
name: refactor
description: Preserve behaviour while improving structure and maintaining evidence of equivalence
lifecycle: draft
---

# refactor

## Purpose / Outcome

Performs behaviour-preserving structural improvements by establishing baseline, planning incremental transformations, executing with verification at each step, and documenting changes.

---

## When to Use (Positive Triggers)

- When unslop identifies structural issues
- When improving code without changing behaviour
- When preparing code for new features

---

## When Not to Use (Negative Triggers)

- When behaviour must change (that's implementation, not refactor)
- When no verification exists to prove equivalence
- For premature abstraction

---

## Required Context / Inputs

- Target code identified
- Current behaviour verified (baseline)
- Verification suite available

---

## Preconditions

- Baseline verification passes
- Refactoring goal clearly stated

---

## Procedure

### Step 1: Establish Behaviour Baseline

- Run full verification suite
- Record current outputs/behaviour
- Identify behaviour that must be preserved

### Step 2: Plan Refactoring Steps

- Decompose into small, safe transformations
- Each step: one structural change, same verification
- Order: extract → rename → reorganize → generalize

### Step 3: Execute Incrementally

- For each step: change → verify → commit
- If verification fails: revert, diagnose, retry
- Never weaken verification to pass

### Step 4: Verify Equivalence

- Run full verification suite after each commit
- Run broader regression tests
- Compare outputs with baseline where applicable

### Step 5: Document Changes

- What was restructured and why
- Evidence of behavioural equivalence
- Any edge cases discovered

---

## Expected Outputs

- Refactored code with preserved behaviour
- Verification evidence for each step
- Documentation of structural improvements

---

## Verification

**Evidence recording:** VERIFIED / NOT_VERIFIED / INCONCLUSIVE / BLOCKED / NOT RUN / UNAVAILABLE


- All original verifications pass
- No behavioural changes
- Code structure improved (measurable: complexity, duplication, coupling)

---

## Failure Handling

| Failure Mode | Response |
|---|---|
| Verification fails repeatedly | Revert, diagnose, unstick |
| Behavioural difference found | Revert, analyze, decide |

---

## Stop Conditions
- Work complete or goal achieved
- Blocked by external dependency or missing criteria
- Inconclusive - evidence gaps or ambiguous state
- Safe pause - interrupted with clean checkpoint


- Refactoring goal achieved
- All verifications pass
- Time-boxed (default: 1-2 hours per session)

---

## Escalation

- Verification fails repeatedly → revert, diagnose, unstick
- Behavioural difference found → revert, analyze, decide

---

## Fallback

- Without full verification: manual equivalence testing with documented evidence

---

## Skill / Role / Tool Routing

- **Skills invoked:** verify (verification discipline), plan (step size), unslop (identifies need)
- **Roles:** Builder (refactors), Reviewer (verifies)
- **Tools:** Verification suite, git
- **References:** None

---

## Examples

### Example: Extract Service Layer

**Goal:** Move business logic from controller to service
**Baseline:** All tests pass
**Steps:** 1) Extract service class (verify), 2) Update controller (verify), 3) Remove old code (verify)
**Evidence:** Each commit passes full suite
**Result:** Cleaner separation, same behaviour

---

## Dependencies / References

- **Principles:** Procedures Over Vague Instructions, Evidence Before Assertions, Prove It Works
- **Skills:** verify, plan, unslop
- **References:** None

