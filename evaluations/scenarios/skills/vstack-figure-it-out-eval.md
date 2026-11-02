# Evaluation Scenario: vstack-figure-it-out

**Skill:** vstack-figure-it-out
**Lifecycle:** draft
**Evaluation Date:** 2026-11-02
**Evaluator:** Phase 5 automated

---

## Scenario 1: Non-Triggers Prevent Duplication (Tier 1 - Deterministic)

**Objective:** Verify explicit non-triggers prevent duplicating standard playbooks.

**Input:**
```
Request: "Add user authentication"
```

**Expected Behavior:**
- Recognizes as feature-delivery
- Does NOT design bespoke playbook
- Routes to feature-delivery playbook

**Acceptance Criteria:**
- [ ] Does not invoke figure-it-out
- [ ] Routes to feature-delivery
- [ ] Non-trigger documented

---

## Scenario 2: Non-Trigger List Complete (Tier 1 - Deterministic)

**Objective:** Verify all 8 standard playbooks listed as non-triggers.

**Expected Non-Triggers:**
1. feature-delivery
2. bug-fixing
3. refactoring
4. architecture-change
5. infrastructure-change
6. investigation
7. performance-investigation
8. prototype

**Acceptance Criteria:**
- [ ] All 8 listed
- [ ] Each prevents figure-it-out invocation

---

## Scenario 3: Phase A - Frame Complete (Tier 1 - Deterministic)

**Objective:** Verify framing produces falsifiable done predicate, scope, rigour.

**Input:**
```
Complex migration: monolith to microservices
```

**Expected Behavior:**
- Defines falsifiable done predicate
- Quantifies scope (units, effort, blockers)
- Identifies one-way doors
- Assesses rigour (biased high)
- Documents evidence needs
- Presents framing and tradeoffs before committing

**Acceptance Criteria:**
- [ ] Done predicate falsifiable
- [ ] Scope quantified
- [ ] One-way doors identified
- [ ] Rigour assessed (high)
- [ ] Evidence needs documented
- [ ] Tradeoffs presented

---

## Scenario 4: Phase B - Design Workflow (Tier 1 - Deterministic)

**Objective:** Verify workflow design covers all required elements.

**Expected Output:**
- Atomic units
- Risk-first ordering
- Verification harness per unit
- Independent seams
- Workspace assignment
- Review checkpoints
- Phase list artifact

**Acceptance Criteria:**
- [ ] Atomic units defined
- [ ] Risk-first ordering
- [ ] Verification harness per unit
- [ ] Independent seams
- [ ] Workspace assigned
- [ ] Review checkpoints
- [ ] Phase list artifact

---

## Scenario 5: Phase C - Execute Loop (Tier 1 - Deterministic)

**Objective:** Verify hypothesis-driven execution with verification.

**Input:**
```
Designed workflow with 5 phases
```

**Expected Behavior:**
- Hypothesis-driven units
- Per-unit verification
- Artifact inspection
- Delegation validation
- Distinct verdicts per unit

**Acceptance Criteria:**
- [ ] Hypothesis-driven units
- [ ] Per-unit verification
- [ ] Artifacts inspected
- [ ] Delegation validated
- [ ] Distinct verdicts

---

## Scenario 6: Phase D - Decision Trail (Tier 1 - Deterministic)

**Objective:** Verify decision trail recorded.

**Expected Output:**
- Ledger entries per decision
- Reasons documented
- Evidence pointers included
- Concise entries

**Acceptance Criteria:**
- [ ] Ledger entries per decision
- [ ] Reasons documented
- [ ] Evidence pointers
- [ ] Concise

---

## Scenario 7: Phase E - Verify/Hand Back (Tier 1 - Deterministic)

**Objective:** Verify verification and handback.

**Expected Behavior:**
- Overall verification (failed/inconclusive visible)
- Lessons promotion
- Report with outcome, decisions, evidence, risks, next action

**Acceptance Criteria:**
- [ ] Overall verification
- [ ] Failed/inconclusive visible
- [ ] Lessons promoted
- [ ] Handback complete

---

## Scenario 6: Non-Triggers Enforced (Tier 1 - Deterministic)

**Objective:** Verify figure-it-out NOT invoked for standard playbook cases.

**Test Cases:**
| Request | Should Invoke figure-it-out? |
|---------|------------------------------|
| "Add feature X" | No |
| "Fix bug Y" | No |
| "Refactor module Z" | No |
| "Migrate monolith to microservices" | Yes |

**Acceptance Criteria:**
- [ ] Standard requests route to playbooks
- [ ] Only complex/cross-cutting invokes figure-it-out

---

## Scenario 7: Bespoke Playbook for No Match (Tier 1 - Deterministic)

**Objective:** Verify bespoke playbook designed when no standard fits.

**Input:**
```
"Migrate monolith to microservices with zero downtime, database sharding, service mesh, CI/CD overhaul"
```

**Expected Behavior:**
- No standard playbook fits
- Designs bespoke playbook
- Executes through figure-it-out phases

**Acceptance Criteria:**
- [ ] No standard playbook fits
- [ ] Bespoke designed
- [ ] Phases executed

---

## Scenario 8: Decision Trail Auditable (Tier 1 - Deterministic)

**Objective:** Verify decision trail auditable after stepping away.

**Input:**
```
Complex project, human steps away for week
```

**Expected Behavior:**
- Decision trail with reasons/evidence pointers
- Human can audit after stepping away
- Trail concise and complete

**Acceptance Criteria:**
- [ ] Trail complete
- [ ] Reasons + evidence
- [ ] Auditable after absence
- [ ] Concise

---

## Evaluation Results

| Scenario | Tier | Result | Notes |
|----------|------|--------|-------|
| 1. Non-Triggers Prevent Duplication | 1 |  |  |
| 2. Non-Trigger List Complete | 1 |  |  |
| 3. Phase A Frame | 1 |  |  |
| 4. Phase B Design | 1 |  |  |
| 5. Phase C Execute | 1 |  |  |
| 6. Phase D Trail | 1 |  |  |
| 7. Phase E Verify | 1 |  |  |
| 7. Non-Triggers Enforced | 1 |  |  |
| 8. Bespoke for No Match | 1 |  |  |
| 9. Trail Auditable | 1 |  |  |

**Overall Status:** 
- Tier 1: ___/10 PASS
- **Skill Status:** ___