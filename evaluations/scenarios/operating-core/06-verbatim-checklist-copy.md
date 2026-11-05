# Evaluation Scenario: Verbatim Checklist Copy

**Content Under Test:** route
**Scenario Type:** Procedure Fidelity
**Date:** 2026-11-02
**Version:** v2 draft

---

## Scenario 6A: Playbook Steps Copied Verbatim to Checklist

### Input Fixture

**User Request:** "Fix the login bug: users get 500 error when password contains special characters."

**Repository State:**
- Branch: main
- Bug: Login endpoint throws 500 on special chars in password
- Expected: Proper validation/error handling

**Harness:** Portable (no native todo)
**Model:** Any

---

### Expected Behaviour

#### Procedure Expectation
1. route selects bug-fixing playbook
2. **Phase 6:** Creates checklist by copying bug-fixing playbook steps VERBATIM:
   - Step 1: Sharpen (reproduce steps, expected vs actual, acceptance criteria)
   - Step 2: Discovery (find root cause location, understand behaviour)
   - Step 3: Blast Radius (identify affected callers, similar patterns)
   - Step 4: Plan Loop (2-3 tasks with clear boundaries)
   - Step 5: TDD (regression test first)
   - Step 6: Debugging (if fix fails)
   - Step 7: Verify Loop (regression + related)
   - Step 8: Review Loop (Correctness lens)
3. No steps paraphrased, summarized, or omitted
4. Task-specific items added BELOW playbook steps

#### Checklist State Management
- Each step updated: DONE / SKIP: reason / BLOCKED / IN_PROGRESS
- Non-applicable steps stay visible with `skip: <reason>`
- No silent deletion or summarization

---

## Scenario 6B: Non-Applicable Step Marked with Skip Reason

### Input Fixture

**User Request:** "Fix typo in error message: 'User not found' should be 'User not found.' (add period)"

**Repository State:**
- Branch: main
- Trivial: Single string change in error message
- Bug-fixing playbook selected (defect)

**Harness:** Portable
**Model:** Any

---

### Expected Behaviour

#### Procedure Expectation
1. route selects bug-fixing playbook
2. Checklist created with all bug-fixing steps verbatim
3. **Non-applicable steps marked with skip reason:**
   - Blast Radius: `skip: Single string change, no callers affected`
   - Plan Loop: `skip: Single task, no decomposition needed`
   - TDD: `skip: Typo fix, regression test not proportionate`
   - Review Loop: `skip: Trivial change, light review sufficient`
4. Steps remain VISIBLE in checklist (not deleted)
5. Only applicable steps executed: Sharpen → Verify (lint) → Light Review

#### Decision Quality Expectation
- **Branch point:** Step applicability
- **Principle applied:** No Silent Skips (PRD Principle 15)
- **Expected choice:** Skip with reason, not delete

---

## Scenario 6C: Host Has Native Todo — Checklist Uses Native Mechanism

### Input Fixture

**User Request:** "Add user profile endpoint with GET/PUT."

**Repository State:**
- Branch: main
- New feature

**Harness:** OpenCode (native todo tool)
**Model:** Any

---

### Expected Behaviour

#### Procedure Expectation
1. route selects feature-delivery playbook
2. **Phase 6:** Copies playbook steps verbatim to OpenCode native todo list
3. Each step becomes a todo item with exact playbook wording
4. Todo state tracked natively (pending/in_progress/completed)
5. Skip reasons recorded in todo notes

---

## Scenario 6D: Host Lacks Todo — Session-Maintained Checklist

### Input Fixture

**User Request:** "Add user profile endpoint with GET/PUT."

**Repository State:**
- Branch: main
- New feature

**Harness:** Portable (no native todo)
**Model:** Any

---

### Expected Behaviour

#### Procedure Expectation
1. route selects feature-delivery playbook
2. **Phase 6:** Creates checklist in session context (or PROGRESS.md)
3. Checklist maintains: step text, state, skip reason
4. Lead manually updates checklist state
5. Fallback documented in handback

---

## Negative Case: Playbook Steps Paraphrased or Omitted

**Scenario:** Bug-fixing playbook has 8 steps → checklist has 5 summarized steps → Blast Radius and Review steps missing

**Expected:** FAIL — all playbook steps must be copied verbatim, non-applicable marked skip

---

## Rubric / Pass Criteria

| Criterion | Pass Condition | Weight |
|---|---|---|
| Trigger precision | Checklist created for every playbook execution | Required |
| Procedure fidelity | All playbook steps copied verbatim | Required |
| Decision quality | Skip reasons for non-applicable steps | Required |
| Technical outcome | Complete checklist state throughout execution | Required |
| Evidence quality | Checklist state visible in handback | Required |

---

## Sign-off

**Evaluator:** 
**Date:** 
**Content Version Tested:** v2 draft
