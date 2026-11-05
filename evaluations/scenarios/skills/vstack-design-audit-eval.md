# Evaluation Scenario: audit

**Skill:** audit
**Lifecycle:** draft
**Evaluation Date:** 2026-11-02
**Evaluator:** Phase 5 automated

---

## Scenario 1: Audit Scope and Attributes Defined (Tier 1 - Deterministic)

**Objective:** Verify scope and attributes selected per context.

**Input:**
```
Target: Payment service before migration
```

**Expected Behavior:**
- Defines audit scope
- Selects relevant attributes (correctness, security, performance, maintainability, scalability, observability, operability)
- Defines pass/fail criteria per attribute

**Acceptance Criteria:**
- [ ] Scope defined
- [ ] Relevant attributes selected
- [ ] Pass/fail criteria per attribute

---

## Scenario 2: Correctness Inspection (Tier 1 - Deterministic)

**Objective:** Verify correctness attributes inspected.

**Expected Checks:**
- Invariants
- Edge cases
- Error handling
- State consistency

**Acceptance Criteria:**
- [ ] Invariants checked
- [ ] Edge cases checked
- [ ] Error handling checked
- [ ] State consistency checked

---

## Scenario 3: Security Inspection (Tier 1 - Deterministic)

**Objective:** Verify security attributes inspected.

**Expected Checks:**
- Authorization
- Input validation
- Secrets
- Data exposure
- Attack surface

**Acceptance Criteria:**
- [ ] Authorization checked
- [ ] Input validation checked
- [ ] Secrets checked
- [ ] Data exposure checked
- [ ] Attack surface checked

---

## Scenario 4: Performance Inspection (Tier 1 - Deterministic)

**Objective:** Verify performance attributes inspected.

**Expected Checks:**
- Complexity
- Database queries
- Memory
- Concurrency
- Scaling

**Acceptance Criteria:**
- [ ] Complexity checked
- [ ] Database queries checked
- [ ] Memory checked
- [ ] Concurrency checked
- [ ] Scaling checked

---

## Scenario 5: Maintainability Inspection (Tier 1 - Deterministic)

**Objective:** Verify maintainability attributes inspected.

**Expected Checks:**
- Coupling
- Naming
- Duplication
- Abstraction
- Documentation

**Acceptance Criteria:**
- [ ] Coupling checked
- [ ] Naming checked
- [ ] Duplication checked
- [ ] Abstraction checked
- [ ] Documentation checked

---

## Scenario 6: Scalability Inspection (Tier 1 - Deterministic)

**Objective:** Verify scalability attributes inspected.

**Expected Checks:**
- Horizontal/vertical limits
- Partition strategy
- State management

**Acceptance Criteria:**
- [ ] Limits identified
- [ ] Partition strategy checked
- [ ] State management checked

---

## Scenario 6: Observability Inspection (Tier 1 - Deterministic)

**Objective:** Verify observability attributes inspected.

**Expected Checks:**
- Logging
- Metrics
- Tracing
- Alerting coverage

**Acceptance Criteria:**
- [ ] Logging checked
- [ ] Metrics checked
- [ ] Tracing checked
- [ ] Alerting checked

---

## Scenario 7: Operability Inspection (Tier 1 - Deterministic)

**Objective:** Verify operability attributes inspected.

**Expected Checks:**
- Deployment
- Rollback
- Config
- Debugging support

**Acceptance Criteria:**
- [ ] Deployment checked
- [ ] Rollback checked
- [ ] Config checked
- [ ] Debugging support checked

---

## Scenario 7: Evidence Collected (Tier 1 - Deterministic)

**Objective:** Verify evidence collected for each finding.

**Expected Behavior:**
- Code references for each finding
- Metrics/benchmarks where available
- Test coverage gaps noted

**Acceptance Criteria:**
- [ ] Code references per finding
- [ ] Metrics/benchmarks where available
- [ ] Test coverage gaps noted

---

## Scenario 8: Scoring and Prioritization (Tier 1 - Deterministic)

**Objective:** Verify scoring and risk prioritization.

**Expected Output:**
- Per-attribute: PASS / CONCERN / FAIL
- Overall: acceptable / needs improvement / blocking
- Findings prioritized by risk

**Acceptance Criteria:**
- [ ] Per-attribute scores
- [ ] Overall assessment
- [ ] Risk-prioritized findings

---

## Scenario 8: Structured Findings (Tier 1 - Deterministic)

**Objective:** Verify findings structured with location, severity, evidence, recommendation.

**Expected Finding Format:**
- Location
- Severity
- Evidence
- Recommendation
- Risk of not addressing

**Acceptance Criteria:**
- [ ] Location per finding
- [ ] Severity per finding
- [ ] Evidence per finding
- [ ] Recommendation per finding
- [ ] Risk per finding

---

## Scenario 9: Recommendations Actionable (Tier 1 - Deterministic)

**Objective:** Verify recommendations specific and actionable.

**Input:**
```
Finding: hardcoded API key
```

**Expected Behavior:**
- Recommendation: move to env var
- Specific file/line
- Testable verification

**Acceptance Criteria:**
- [ ] Specific recommendation
- [ ] File/line referenced
- [ ] Testable

---

## Scenario 10: Risk of Not Addressing (Tier 1 - Deterministic)

**Objective:** Verify risk assessment per finding.

**Input:**
```
Finding: missing authorization check
```

**Expected Behavior:**
- Risk documented: "Unauthorized access to user data"
- Impact: High
- Likelihood: Medium

**Acceptance Criteria:**
- [ ] Risk documented
- [ ] Impact assessed
- [ ] Likelihood assessed

---

## Scenario 11: Blocker Escalation (Tier 1 - Deterministic)

**Objective:** Verify blocker findings escalated.

**Input:**
```
Blocking finding: SQL injection vulnerability
```

**Expected Behavior:**
- Escalates to Lead
- Does not proceed without mitigation
- Documents blocker

**Acceptance Criteria:**
- [ ] Escalates to Lead
- [ ] Does not proceed
- [ ] Documents blocker

---

## Scenario 12: Scope Creep Prevention (Tier 1 - Deterministic)

**Objective:** Verify scope limited to defined attributes.

**Input:**
```
Audit drifts into unrelated code
```

**Expected Behavior:**
- Returns to defined scope
- Does not expand scope

**Acceptance Criteria:**
- [ ] Returns to scope
- [ ] No scope creep

---

## Scenario 12: Fallback Without Formal Audit (Tier 1 - Deterministic)

**Objective:** Verify fallback documents key concerns.

**Input:**
```
No time for formal audit
```

**Expected Behavior:**
- Documents key concerns in review brief
- Notes audit not performed
- Documents as risk

**Acceptance Criteria:**
- [ ] Key concerns documented
- [ ] Audit gap noted
- [ ] Risk documented

---

## Evaluation Results

| Scenario | Tier | Result | Notes |
|----------|------|--------|-------|
| 1. Scope + Attributes | 1 |  |  |
| 2. Correctness | 1 |  |  |
| 3. Security | 1 |  |  |
| 4. Performance | 1 |  |  |
| 5. Maintainability | 1 |  |  |
| 6. Scalability | 1 |  |  |
| 6. Observability | 1 |  |  |
| 7. Operability | 1 |  |  |
| 7. Evidence | 1 |  |  |
| 8. Scoring | 1 |  |  |
| 8. Structured Findings | 1 |  |  |
| 9. Actionable Recs | 1 |  |  |
| 10. Risk Assessment | 1 |  |  |
| 11. Blocker Escalation | 1 |  |  |
| 12. Scope Creep | 1 |  |  |
| 12. Fallback | 1 |  |  |

**Overall Status:** 
- Tier 1: ___/15 PASS
- **Skill Status:** ___