# Evaluation Scenario: Trivial vs Non-Trivial Request Routing

**Content Under Test:** route
**Scenario Type:** Positive Trigger / Negative Trigger
**Date:** 2026-11-02
**Version:** v2 draft

---

## Scenario 1A: Trivial Request (Negative Trigger for route)

### Input Fixture

**User Request:** "Fix typo in README.md line 42: 'teh' should be 'the'"

**Repository State:**
- Branch: main
- File: README.md exists with typo on line 42
- No other changes needed

**Harness:** Portable (no plugin)
**Model:** Any

---

### Expected Behaviour

#### Trigger Expectation
- **Should activate route:** NO
- **Should route to playbook:** NONE
- **Should load skills:** NONE

#### Procedure Expectation
1. Agent recognises request as trivial edit (typo, formatting, config tweak)
2. Agent does NOT invoke route
3. Agent does NOT read principle index
4. Agent does NOT create task checklist
5. Agent makes direct edit: fixes typo in README.md
6. Agent verifies: runs lint/check if available

#### Decision Quality Expectation
- **Branch point:** Request classification
- **Principle applied:** Route Before Loading (select minimum appropriate workflow)
- **Expected choice:** No playbook, direct edit

#### Output Expectation
- Fixed README.md
- Verification: lint passes (or manual confirmation)

#### Evidence Quality Expectation
- Evidence: git diff showing single-word change
- No checklist created
- No decision trail needed

#### Failure Handling Expectation
- N/A (trivial request)

---

### Rubric / Pass Criteria

| Criterion | Pass Condition | Weight |
|---|---|---|
| Trigger precision | route NOT activated for trivial request | Required |
| Procedure fidelity | Direct edit without playbook ceremony | Required |
| Decision quality | Route Before Loading principle applied | Required |
| Technical outcome | Typo fixed, no collateral changes | Required |
| Evidence quality | git diff shows single change | Required |
| Efficiency | No unnecessary skills/checks loaded | Required |

---

## Scenario 1B: Non-Trivial Engineering Task (Positive Trigger for route)

### Input Fixture

**User Request:** "Add user authentication with JWT tokens. Need login/register endpoints, token issuance, protected middleware, and tests."

**Repository State:**
- Branch: main
- Existing: Express.js API with routes/, middleware/, models/
- No auth currently

**Harness:** Portable (no plugin)
**Model:** Any

---

### Expected Behaviour

#### Trigger Expectation
- **Should activate route:** YES
- **Should route to playbook:** feature-delivery
- **Should load skills:** sharpen, code-tour, rationale, design, tdd, verify, review (as triggers fire)

#### Procedure Expectation
1. route invoked
2. Phase 1: sharpen clarifies: problem=need auth, criteria=login/register endpoints, JWT, protected routes, tests
3. Phase 2: Reads principle index (compact)
3. Phase 3: Classifies as "New or changed behaviour" → feature-delivery playbook
4. Phase 4: Selects feature-delivery (not architecture-change)
5. Phase 5: Calibrates rigour: Medium risk → full discovery, architect if needed, TDD, verify, review
6. Phase 6: Creates checklist: copies feature-delivery steps verbatim
7. Phase 7: Executes: Discovery → Architect → Plan → TDD per task → Verify per task → Review
8. Phase 8: Verify/Review per playbook
9. Phase 9: Hands back with outcome, decisions, evidence, next action

#### Decision Quality Expectation
- **Branch point:** Playbook selection
- **Principle applied:** Route Before Loading, Flexible Workflows
- **Expected choice:** feature-delivery (not architecture-change)

#### Output Expectation
- Complete auth implementation with tests
- Evidence: test results, review findings
- Decision: JWT library choice documented

#### Evidence Quality Expectation
- Checklist with all playbook steps
- Verification evidence per task
- Review findings dispositioned

---

### Rubric / Pass Criteria

| Criterion | Pass Condition | Weight |
|---|---|---|
| Trigger precision | route activated for non-trivial request | Required |
| Procedure fidelity | All 9 phases executed in order | Required |
| Decision quality | Correct playbook selected, rigour calibrated | Required |
| Technical outcome | Auth feature implemented and verified | Required |
| Evidence quality | Checklist, verification, review evidence present | Required |
| Efficiency | Only relevant skills loaded (not full catalogue) | Required |

---

## Negative Case: Trivial Request Incorrectly Routes to Playbook

**Scenario:** "Fix typo in README" → route activates → selects bug-fixing playbook → creates checklist

**Expected:** FAIL — route must not activate for trivial requests

---

## Sign-off

**Evaluator:** 
**Date:** 
**Content Version Tested:** v2 draft
