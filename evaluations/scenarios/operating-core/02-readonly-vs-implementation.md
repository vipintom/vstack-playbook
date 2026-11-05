# Evaluation Scenario: Read-Only Investigation vs Implementation

**Content Under Test:** route
**Scenario Type:** Positive Trigger / Negative Trigger
**Date:** 2026-11-02
**Version:** v2 draft

---

## Scenario 2A: Read-Only Investigation (Positive Trigger for investigation playbook)

### Input Fixture

**User Request:** "How does the payment processing work? Trace the flow from API call to Stripe integration."

**Repository State:**
- Branch: main
- Existing: Express.js API with payment routes, Stripe integration in services/
- No changes needed

**Harness:** Portable (no plugin)
**Model:** Any

---

### Expected Behaviour

#### Trigger Expectation
- **Should activate route:** YES
- **Should route to playbook:** investigation
- **Should load skills:** code-tour, rationale, report, resume

#### Procedure Expectation
1. route invoked
2. Phase 1: Sharpen clarifies: read-only question about behaviour
3. Phase 2: Reads principle index
3. Phase 3: Classifies as "Read-only question about behaviour or design" → investigation playbook
4. Phase 4: Selects investigation playbook
5. Phase 5: Calibrates rigour: Low risk → light discovery, no architect/arena
6. Phase 6: Creates checklist: copies investigation steps verbatim
7. Phase 7: Executes: code-tour (trace flow), rationale (rationale), report (communicate findings)
8. Phase 8: Verify: findings grounded in source, no implementation
9. Phase 9: Hands back: cited answer, no code changes

#### Decision Quality Expectation
- **Branch point:** Request classification
- **Principle applied:** Route Before Loading, Understand Before Changing
- **Expected choice:** investigation playbook (not feature-delivery or bug-fixing)

#### Output Expectation
- Source-grounded explanation of payment flow
- Evidence pointers: file:line references
- No code changes made

#### Evidence Quality Expectation
- code-tour output: execution trace, data flow, ownership map
- rationale output: design rationale with git history
- All claims grounded in actual code

---

### Rubric / Pass Criteria

| Criterion | Pass Condition | Weight |
|---|---|---|
| Trigger precision | investigation playbook selected (not implementation) | Required |
| Procedure fidelity | Investigation steps executed, no implementation | Required |
| Decision quality | Understand Before Changing principle applied | Required |
| Technical outcome | Cited, source-grounded answer produced | Required |
| Evidence quality | Claims grounded in actual code (file:line) | Required |
| Efficiency | No implementation skills loaded (tdd, verify-loop not needed) | Required |

---

## Scenario 2B: Implementation Request (Positive Trigger for feature-delivery)

### Input Fixture

**User Request:** "Add a new payment method: Apple Pay. Need new endpoint, Stripe integration, and tests."

**Repository State:**
- Branch: main
- Existing: Payment processing with Stripe
- No Apple Pay currently

**Harness:** Portable (no plugin)
**Model:** Any

---

### Expected Behaviour

#### Trigger Expectation
- **Should activate route:** YES
- **Should route to playbook:** feature-delivery
- **Should load skills:** code-tour, rationale, design, tdd, verify, review

#### Procedure Expectation
1. route invoked
2. Phase 1: Sharpen clarifies: new behaviour, acceptance criteria
3. Phase 3: Classifies as "New or changed behaviour" → feature-delivery
4. Phase 6: Creates checklist with implementation steps
5. Phase 7: Executes: Discovery → Architect → Plan → TDD → Verify → Review
6. Phase 8: Verify: tests pass, integration verified
7. Phase 9: Hands back: implementation with evidence

#### Decision Quality Expectation
- **Branch point:** Request classification
- **Principle applied:** Route Before Loading
- **Expected choice:** feature-delivery (not investigation)

---

### Rubric / Pass Criteria

| Criterion | Pass Condition | Weight |
|---|---|---|
| Trigger precision | feature-delivery playbook selected | Required |
| Procedure fidelity | Implementation steps executed with TDD/verify | Required |
| Decision quality | Correct classification (implementation vs read-only) | Required |
| Technical outcome | Apple Pay feature implemented and verified | Required |

---

## Negative Case: Read-Only Question Routes to Implementation Playbook

**Scenario:** "How does payment work?" → route selects feature-delivery → creates implementation checklist

**Expected:** FAIL — read-only must route to investigation, not implementation

---

## Sign-off

**Evaluator:** 
**Date:** 
**Content Version Tested:** v2 draft
