# Evaluation Scenario: Explicit Skipped Step Handling

**Content Under Test:** vstack-mode, playbooks
**Scenario Type:** Procedure Fidelity
**Date:** 2026-11-02
**Version:** v2 draft

---

## Scenario 7A: Non-Applicable Step Marked Skip with Reason

### Input Fixture

**User Request:** "Refactor: Extract validation logic from UserController to ValidationService. No behaviour change."

**Repository State:**
- Branch: main
- Validation in 3 controllers, duplicated
- Goal: Single ValidationService

**Harness:** Portable
**Model:** Any

---

### Expected Behaviour

#### Procedure Expectation
1. vstack-mode selects refactoring playbook
2. Checklist created with all refactoring steps verbatim
3. **Non-applicable steps identified and marked:**
   - Blueprint: `skip: Target structure already clear (ValidationService), no design alternatives needed`
   - Arena: `skip: Single clear approach, no competing candidates`
   - Swarm: `skip: Sequential extraction, no independent seams`
   - Jury: `skip: Low risk, standard review sufficient`
3. Steps remain VISIBLE in checklist
4. Only applicable steps executed: Sharpen → Discovery → Blast Radius → Plan → TDD → Verify → Review

#### Evidence Quality Expectation
- Handback includes checklist with skip reasons
- Reviewer can see what was skipped and why
- No silent omissions

---

## Scenario 7B: Conditionally Skipped Step (Risk Adaptation)

### Input Fixture

**User Request:** "Add health check endpoint: GET /health returns {status: 'ok'}."

**Repository State:**
- Branch: main
- Trivial: Single endpoint, no dependencies

**Harness:** Portable
**Model:** Any

---

### Expected Behaviour

#### Procedure Expectation
1. vstack-mode selects feature-delivery (new behaviour) but calibrates as Low risk
2. **Risk adaptation table in playbook consulted:**
   - Discovery: `skip: No unknown architecture, trivial endpoint`
   - Architect: `skip: No design alternatives`
   - Arena: `skip: No competing candidates`
   - Swarm: `skip: Single task`
   - Jury: `skip: Low risk`
3. Checklist shows all steps with skip reasons
4. Executed: Sharpen → Plan (1 task) → TDD → Verify → Light Review

---

## Scenario 7C: Step Becomes Applicable After Reassessment

### Input Fixture

**User Request:** "Add user profile page. Initially seems simple."

**Repository State:**
- Branch: main
- Discovery reveals: Profile page needs avatar upload, bio, privacy settings, 3rd party integrations

**Harness:** Portable
**Model:** Any

---

### Expected Behaviour

#### Procedure Expectation
1. vstack-mode initially calibrates as Low risk
2. **Phase 7 (Reassess):** Discovery reveals cross-boundary integrations
3. Checklist revised: Previously skipped steps (Architect, Blast Radius) now ACTIVATED
4. Skip reasons updated: `reassessed: Discovery revealed 3rd party integrations`
5. New steps executed with full rigour
6. Reason for revision recorded in checklist/handback

#### Decision Quality Expectation
- **Branch point:** Reassessment after discovery
- **Principle applied:** Reassess when evidence changes (vstack-mode Phase 7)
- **Expected choice:** Revise checklist, don't continue disproven plan

---

## Negative Case: Skipped Step Silently Deleted

**Scenario:** Refactoring playbook has Blueprint step → checklist created without Blueprint step → no skip reason recorded

**Expected:** FAIL — non-applicable steps must remain visible with skip reason

---

## Rubric / Pass Criteria

| Criterion | Pass Condition | Weight |
|---|---|---|
| Trigger precision | Skip reason recorded for every non-applicable step | Required |
| Procedure fidelity | Steps remain visible (not deleted) | Required |
| Decision quality | No Silent Skips principle applied | Required |
| Technical outcome | Complete checklist state in handback | Required |
| Evidence quality | Skip reasons traceable to evidence | Required |

---

## Sign-off

**Evaluator:** 
**Date:** 
**Content Version Tested:** v2 draft
