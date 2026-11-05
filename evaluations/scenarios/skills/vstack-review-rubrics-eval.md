# Evaluation Scenario: rubrics

**Skill:** rubrics
**Lifecycle:** draft
**Evaluation Date:** 2026-11-02
**Evaluator:** Phase 5 automated

---

## Scenario 1: Applicable Rubrics Selected (Tier 1 - Deterministic)

**Objective:** Verify correct rubrics selected for review scope.

**Input:**
```
Review: New payment endpoint
Scope: API security, data handling
```

**Expected Behavior:**
- Selects: Security & Data Integrity, Data Integrity & Correctness
- Does not select: Accessibility & UX (unless UI)

**Acceptance Criteria:**
- [ ] Correct rubrics selected
- [ ] Irrelevant rubrics excluded
- [ ] Selection documented

---

## Scenario 2: Systematic Application (Tier 1 - Deterministic)

**Objective:** Verify each lens applied independently then consolidated.

**Input:**
```
Review with Security & Data Integrity rubric
```

**Expected Behavior:**
- Applies each criterion independently
- Generates findings per lens
- Consolidates: deduplicates, prioritizes

**Acceptance Criteria:**
- [ ] Each lens independently
- [ ] Findings generated per lens
- [ ] Consolidated (deduplicated, prioritized)

---

## Scenario 3: Security & Data Integrity Findings (Tier 1 - Deterministic)

**Objective:** Verify Security & Data Integrity rubric produces correct findings.

**Input:**
```
Payment endpoint with auth
```

**Expected Checks:**
- Authorization: every endpoint/data access checked
- Input validation: all untrusted input validated at boundaries
- Secrets: no hardcoded secrets, proper rotation
- Encryption: data at rest/in transit
- Audit: sensitive operations logged
- Injection: SQL, command, XSS, path traversal prevented

**Acceptance Criteria:**
- [ ] Authorization checked
- [ ] Input validation checked
- [ ] Secrets checked
- [ ] Encryption checked
- [ ] Audit checked
- [ ] Injection prevention checked

---

## Scenario 4: Performance & Resources Findings (Tier 1 - Deterministic)

**Objective:** Verify Performance & Resources rubric produces correct findings.

**Input:**
```
API endpoint with DB queries
```

**Expected Checks:**
- Complexity: algorithmic bounds appropriate
- Database: queries indexed, N+1 avoided
- Memory: no leaks, bounded caches
- Concurrency: no deadlocks, proper pooling
- Scaling: horizontal/vertical limits known

**Acceptance Criteria:**
- [ ] Complexity checked
- [ ] Database checked
- [ ] Memory checked
- [ ] Concurrency checked
- [ ] Scaling checked

---

## Scenario 5: Maintainability & Style Findings (Tier 1 - Deterministic)

**Objective:** Verify Maintainability & Style rubric produces correct findings.

**Input:**
```
Code with naming inconsistencies
```

**Expected Checks:**
- Coupling: low between modules, high cohesion
- Naming: consistent, intention-revealing
- Duplication: DRY, no copy-paste
- Abstraction: appropriate level, not over-engineered
- Documentation: public APIs documented, decisions recorded

**Acceptance Criteria:**
- [ ] Coupling checked
- [ ] Naming checked
- [ ] Duplication checked
- [ ] Abstraction checked
- [ ] Documentation checked

---

## Scenario 6: Accessibility & UX Findings (Tier 1 - Deterministic)

**Objective:** Verify Accessibility & UX rubric produces correct findings.

**Input:**
```
UI component
```

**Expected Checks:**
- Semantic HTML, ARIA where needed
- Keyboard navigation
- Color contrast
- Error messages actionable
- Loading states

**Acceptance Criteria:**
- [ ] Semantic HTML/ARIA
- [ ] Keyboard navigation
- [ ] Color contrast
- [ ] Actionable errors
- [ ] Loading states

---

## Scenario 7: Data Integrity & Correctness Findings (Tier 1 - Deterministic)

**Objective:** Verify Data Integrity & Correctness rubric produces correct findings.

**Input:**
```
Data mutation endpoint
```

**Expected Checks:**
- Invariants: encoded in types/schemas
- Transactions: ACID where required
- Idempotency: retryable operations safe
- Migrations: backward compatible, tested
- Edge cases: null, empty, boundary, concurrent

**Acceptance Criteria:**
- [ ] Invariants checked
- [ ] Transactions checked
- [ ] Idempotency checked
- [ ] Migrations checked
- [ ] Edge cases checked

---

## Scenario 8: Consolidation (Tier 1 - Deterministic)

**Objective:** Verify findings consolidated correctly.

**Input:**
```
Multiple findings from different lenses
```

**Expected Behavior:**
- Deduplicates findings
- Prioritizes by severity
- Single consolidated report

**Acceptance Criteria:**
- [ ] Deduplicated
- [ ] Prioritized
- [ ] Single report

---

## Scenario 9: Verification - All Applicable Rubrics Applied (Tier 1 - Deterministic)

**Objective:** Verify no quality attribute silently ignored.

**Verification Method:**
- Checks all applicable rubrics applied
- No attribute ignored

**Acceptance Criteria:**
- [ ] All applicable rubrics applied
- [ ] No silent ignore

---

## Scenario 10: Verification - Findings Reference Criteria (Tier 1 - Deterministic)

**Objective:** Verify findings reference specific rubric criteria.

**Verification Method:**
- Each finding cites rubric criterion
- No finding without rubric basis

**Acceptance Criteria:**
- [ ] Each finding cites criterion
- [ ] No finding without basis

---

## Scenario 11: Escalation - Blocker Found (Tier 1 - Deterministic)

**Objective:** Verify blocker escalation.

**Input:**
```
Rubric reveals Blocker
```

**Expected Behavior:**
- Escalates per review process
- Documents blocker

**Acceptance Criteria:**
- [ ] Escalates per process
- [ ] Blocker documented

---

## Scenario 12: Fallback - No Formal Rubrics (Tier 1 - Deterministic)

**Objective:** Verify fallback without formal rubrics.

**Input:**
```
No formal rubrics available
```

**Expected Behavior:**
- Ad-hoc review with documented focus areas
- Documents fallback

**Acceptance Criteria:**
- [ ] Ad-hoc with documented focus
- [ ] Fallback documented

---

## Evaluation Results

| Scenario | Tier | Result | Notes |
|----------|------|--------|-------|
| 1. Rubrics Selected | 1 |  |  |
| 2. Systematic Application | 1 |  |  |
| 3. Security Findings | 1 |  |  |
| 4. Performance Findings | 1 |  |  |
| 5. Maintainability Findings | 1 |  |  |
| 6. Accessibility Findings | 1 |  |  |
| 7. Data Integrity Findings | 1 |  |  |
| 8. Consolidation | 1 |  |  |
| 9. All Rubrics Applied | 1 |  |  |
| 10. Findings Reference Criteria | 1 |  |  |
| 11. Blocker Escalation | 1 |  |  |
| 12. No Rubrics Fallback | 1 |  |  |

**Overall Status:** 
- Tier 1: ___/12 PASS
- **Skill Status:** ___