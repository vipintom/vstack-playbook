---
name: unslop
description: Remove unnecessary complexity, duplication and low-quality generated changes
lifecycle: draft
---

# unslop

## Purpose / Outcome

Cleans up code quality by identifying slop patterns (generated boilerplate, duplication, over-abstraction, dead code, inconsistency), prioritizing by impact, cleaning incrementally with verification.

---

## When to Use (Positive Triggers)

- After implementation to clean up
- When code review finds generated/boilerplate issues
- When refactor reveals unnecessary complexity
- As part of definition of done

---

## When Not to Use (Negative Triggers)

- As substitute for good initial implementation
- For premature optimization
- When cleanup would change behaviour without verification

---

## Required Context / Inputs

- Implemented code
- Verification baseline

---

## Preconditions

- Code passes verification
- Cleanup goals identified

---

## Procedure

### Step 1: Identify Slop Patterns

- Generated boilerplate not adapted to context
- Duplicated logic (DRY violations)
- Over-engineered abstractions (YAGNI)
- Dead code (unused imports, functions, parameters)
- Inconsistent naming/conventions
- Excessive nesting/conditionals

### Step 2: Prioritize by Impact

- High: duplicated logic, dead code, inconsistency
- Medium: over-abstraction, boilerplate
- Low: style nits (handled by linter)

### Step 3: Clean Up Incrementally

- One pattern at a time
- Verify after each cleanup
- Commit separately from feature work

### Step 4: Verify No Regression

- Run full verification suite
- Check for behavioural changes
- Ensure linting passes

---

## Expected Outputs

- Cleaner code with same behaviour
- Verification evidence
- Separate cleanup commits

---

## Verification

**Evidence recording:** VERIFIED / NOT_VERIFIED / INCONCLUSIVE / BLOCKED / NOT RUN / UNAVAILABLE


- All verifications pass
- No behavioural changes
- Measurable improvement (lines, complexity, duplication)

---

## Failure Handling

| Failure Mode | Response |
|---|---|
| Cleanup breaks verification | Revert, diagnose |
| Uncertain behavioural impact | refactor with full verification |
| No time for cleanup | Document slop as tech debt in decisions |

---

## Stop Conditions
- Work complete or goal achieved
- Blocked by external dependency or missing criteria
- Inconclusive - evidence gaps or ambiguous state
- Safe pause - interrupted with clean checkpoint


- High-impact slop removed
- Time-boxed (default: 30 min per session)

---

## Escalation

- Cleanup breaks verification → revert, diagnose
- Uncertain behavioural impact → refactor with full verification

---

## Fallback

- Without time: document slop as tech debt in decisions

---

## Skill / Role / Tool Routing

- **Skills invoked:** verify (verification), refactor (structural cleanup), plan (prevents slop)
- **Roles:** Builder (cleans), Reviewer (verifies)
- **Tools:** Verification suite, linter
- **References:** None

---

## Examples

### Example: Post-Feature Cleanup

**Code:** New auth feature with generated boilerplate
**Slop:** Unused imports, duplicated validation logic, inconsistent naming
**Cleanup:** Remove imports (verify), extract validation (verify), standardize names (verify)
**Result:** Cleaner, verified, separate commits

---

## Dependencies / References

- **Principles:** Evidence Before Assertions, Prove It Works, Smallest Complete Change
- **Skills:** verify, refactor, plan
- **References:** None

