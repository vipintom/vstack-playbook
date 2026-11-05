# Evaluation Scenario: Correct Primary Playbook Selection

**Content Under Test:** route
**Scenario Type:** Procedure Fidelity / Trigger Precision
**Date:** 2026-11-02
**Version:** v2 draft

---

## Scenario 3A: Bug Fix Routes to bug-fixing Playbook

### Input Fixture

**User Request:** "Fix the null pointer in UserService.getUser() when user not found. Return 404 instead of crashing."

**Repository State:**
- Branch: main
- Bug: UserService.getUser() throws when user not found
- Expected: Return null/404 gracefully

**Harness:** Portable
**Model:** Any

---

### Expected Behaviour

#### Trigger Expectation
- **Should activate route:** YES
- **Should route to playbook:** bug-fixing
- **Should NOT route to:** feature-delivery, refactoring, investigation

#### Procedure Expectation
1. route classifies as "Defect or regression"
2. Selects bug-fixing playbook (narrowest suitable)
3. Checklist includes: Sharpen → Discovery (focused) → Blast Radius → Plan (2-3 tasks) → TDD (regression test) → Verify → Light Review

#### Decision Quality Expectation
- **Branch point:** Playbook selection
- **Principle applied:** Route Before Loading, Flexible Workflows
- **Expected choice:** bug-fixing (not feature-delivery — it's a defect, not new behaviour)

---

## Scenario 3B: Feature Routes to feature-delivery Playbook

### Input Fixture

**User Request:** "Add user profile page with avatar upload, bio editing, and privacy settings."

**Repository State:**
- Branch: main
- Existing: User auth, basic profile
- New: Avatar upload, bio, privacy settings

**Harness:** Portable
**Model:** Any

---

### Expected Behaviour

#### Trigger Expectation
- **Should activate route:** YES
- **Should route to playbook:** feature-delivery
- **Should NOT route to:** bug-fixing, refactoring, investigation

#### Procedure Expectation
1. route classifies as "New or changed behaviour"
2. Selects feature-delivery playbook
3. Checklist includes: Sharpen → Discovery → Blueprint → Blast Radius → Plan → TDD → Verify → Review

#### Decision Quality Expectation
- **Branch point:** Playbook selection
- **Principle applied:** Route Before Loading
- **Expected choice:** feature-delivery (not bug-fixing — not a defect)

---

## Scenario 3C: Refactoring Routes to refactoring Playbook

### Input Fixture

**User Request:** "Extract the validation logic from UserController into a shared ValidationService. Behaviour must not change."

**Repository State:**
- Branch: main
- Validation logic duplicated in 3 controllers
- Goal: Single source of truth, no behaviour change

**Harness:** Portable
**Model:** Any

---

### Expected Behaviour

#### Trigger Expectation
- **Should activate route:** YES
- **Should route to playbook:** refactoring
- **Should NOT route to:** feature-delivery, bug-fixing

#### Procedure Expectation
1. route classifies as "Behaviour-preserving structural change"
2. Selects refactoring playbook
3. Checklist includes: Sharpen (behaviour criteria) → Discovery → Blast Radius (required) → Blueprint → Plan → TDD (add tests first) → Verify → Review (Architecture + Correctness + Maintainability)

#### Decision Quality Expectation
- **Branch point:** Playbook selection
- **Principle applied:** Route Before Loading, Understand Before Changing
- **Expected choice:** refactoring (not feature-delivery — no new behaviour)

---

## Scenario 3D: Architecture Change Routes to architecture-change Playbook

### Input Fixture

**User Request:** "Migrate from REST to GraphQL for the entire API. New schema, resolvers, migration strategy needed."

**Repository State:**
- Branch: main
- Current: REST API with 50+ endpoints
- Goal: GraphQL with single endpoint

**Harness:** Portable
**Model:** Any

---

### Expected Behaviour

#### Trigger Expectation
- **Should activate route:** YES
- **Should route to playbook:** architecture-change
- **Should NOT route to:** feature-delivery, refactoring

#### Procedure Expectation
1. route classifies as "Cross-cutting structural change"
2. Selects architecture-change playbook (not feature-delivery — it's architecture)
3. Checklist includes: Sharpen → Deep Discovery (how/why/blast-radius) → Architect + Arena → Blueprint → Phased Plan → TDD (contract tests) → Verify per phase → Jury Review

#### Decision Quality Expectation
- **Branch point:** Playbook selection
- **Principle applied:** Route Before Loading, Challenge Assumptions
- **Expected choice:** architecture-change (not feature-delivery — cross-cutting)

---

## Negative Case: Bug Fix Incorrectly Routes to feature-delivery

**Scenario:** "Fix null pointer in UserService" → route selects feature-delivery → creates feature checklist with architect/arena

**Expected:** FAIL — defect must route to bug-fixing, not feature-delivery

---

## Rubric / Pass Criteria

| Criterion | Pass Condition | Weight |
|---|---|---|
| Trigger precision | Correct playbook for each request shape | Required |
| Procedure fidelity | Playbook steps match request class | Required |
| Decision quality | Route Before Loading, Flexible Workflows applied | Required |
| Technical outcome | Appropriate rigour for each class | Required |

---

## Sign-off

**Evaluator:** 
**Date:** 
**Content Version Tested:** v2 draft
