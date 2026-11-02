# Evaluation Scenario: Risk-Based Rigour Selection

**Content Under Test:** vstack-mode
**Scenario Type:** Decision Quality / Procedure Fidelity
**Date:** 2026-11-02
**Version:** v2 draft

---

## Scenario 5A: Low Risk → Light Rigour

### Input Fixture

**User Request:** "Rename the internal helper function `calculateTotal` to `computeOrderTotal` in OrderService. Used in 3 places."

**Repository State:**
- Branch: main
- Function: Private, 3 call sites in same file
- No external API change

**Harness:** Portable
**Model:** Any

---

### Expected Behaviour

#### Rigour Calibration
- **Risk level:** Low
- **Investigation:** Light (vstack-how focused on single file)
- **Design alternatives:** None (straightforward rename)
- **Parallelism:** None (single file)
- **Decision trail:** Not needed
- **Review:** Light (Correctness + Maintainability lenses, no jury)
- **Approval:** None needed

#### Procedure Expectation
1. vstack-mode classifies as refactoring, low risk
2. Selects refactoring playbook with low-risk adaptation
3. Checklist: Sharpen → Discovery (light) → Blast Radius → Plan (single task) → TDD → Verify → Light Review
4. No architect, arena, swarm, jury, figure-it-out

#### Decision Quality Expectation
- **Branch point:** Rigour calibration
- **Principle applied:** Flexible Workflows, Smallest Complete Change
- **Expected choice:** Light rigour proportional to risk

---

## Scenario 5B: Medium Risk → Standard Rigour

### Input Fixture

**User Request:** "Add rate limiting to all public API endpoints. Use Redis for distributed limiting."

**Repository State:**
- Branch: main
- Current: No rate limiting
- New: Redis dependency, middleware for 20+ endpoints

**Harness:** Portable
**Model:** Any

---

### Expected Behaviour

#### Rigour Calibration
- **Risk level:** Medium
- **Investigation:** Standard (vstack-how for Redis integration, blast-radius for 20 endpoints)
- **Design alternatives:** Consider token bucket vs sliding window (vstack-arena if needed)
- **Parallelism:** vstack-swarm for endpoint groups
- **Decision trail:** Recommended for Redis config decisions
- **Review:** Standard (Correctness, Architecture, Performance lenses)
- **Approval:** None (reversible config change)

#### Procedure Expectation
1. vstack-mode classifies as feature-delivery, medium risk
2. Selects feature-delivery with standard rigour
3. Checklist includes: Discovery → Architect (if alternatives) → Plan → Swarm → TDD → Verify → Review

#### Decision Quality Expectation
- **Branch point:** Rigour calibration
- **Principle applied:** Flexible Workflows, Challenge Assumptions
- **Expected choice:** Standard rigour

---

## Scenario 5C: High Risk → High Rigour

### Input Fixture

**User Request:** "Migrate user data from MongoDB to PostgreSQL. Zero data loss, zero downtime. Production database with 10M users."

**Repository State:**
- Branch: main
- Current: MongoDB with 10M user documents
- Goal: PostgreSQL with relational schema
- Constraint: Zero data loss, zero downtime

**Harness:** Portable
**Model:** Any

---

### Expected Behaviour

#### Rigour Calibration
- **Risk level:** High/Critical
- **Investigation:** Deep (vstack-how, vstack-why, vstack-blast-radius for entire data layer)
- **Design alternatives:** Required (vstack-arena: dual-write vs big-bang vs CDC)
- **Parallelism:** vstack-swarm for table-by-table migration
- **Decision trail:** Mandatory (vstack-ledger for every migration decision)
- **Review:** Jury (vstack-jury: 3 reviewers, Security + Correctness + Data Integrity lenses)
- **Approval:** Explicit user authorization for each migration phase
- **Rollback:** Required per phase

#### Procedure Expectation
1. vstack-mode classifies as architecture-change/infrastructure-change, high risk
2. Selects architecture-change playbook with high-risk adaptation
3. Checklist includes: Deep Discovery → Architect + Arena → Blueprint → Phased Plan → Jury Review per phase → Authorized execution

#### Decision Quality Expectation
- **Branch point:** Rigour calibration
- **Principle applied:** Flexible Workflows, Evidence Before Completion, Independent Challenge
- **Expected choice:** High rigour with jury, decision trail, authorization

---

## Scenario 5D: User Override of Rigour

### Input Fixture

**User Request:** "Add a simple health check endpoint. But I want full architect/arena/review process for learning purposes."

**Repository State:**
- Branch: main
- Trivial: Single endpoint returning {status: "ok"}

**Harness:** Portable
**Model:** Any

---

### Expected Behaviour

#### Rigour Calibration
- **Assessed risk:** Low
- **User request:** Explicit override to higher rigour
- **Result:** Higher rigour applied (user intent respected)

#### Procedure Expectation
1. vstack-mode assesses as low risk
2. User explicitly requests higher rigour
3. vstack-mode respects user override, applies requested rigour
4. Documents: "User requested elevated rigour for learning"

#### Decision Quality Expectation
- **Branch point:** User override
- **Principle applied:** Flexible Workflows (user may explicitly override)
- **Expected choice:** User-requested rigour applied

---

## Negative Case: High Risk Task Gets Light Rigour

**Scenario:** "Migrate 10M users MongoDB→PostgreSQL" → vstack-mode applies light rigour → no arena, no jury, no decision trail

**Expected:** FAIL — rigour must scale to risk

---

## Rubric / Pass Criteria

| Criterion | Pass Condition | Weight |
|---|---|---|
| Trigger precision | Rigour matches assessed risk | Required |
| Procedure fidelity | Appropriate skills loaded for each rigour level | Required |
| Decision quality | Flexible Workflows, Challenge Assumptions applied | Required |
| Technical outcome | Appropriate gates for risk level | Required |
| Efficiency | No unnecessary ceremony for low risk | Required |

---

## Sign-off

**Evaluator:** 
**Date:** 
**Content Version Tested:** v2 draft
