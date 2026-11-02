# Evaluation Scenario: vstack-blast-radius

**Skill:** vstack-blast-radius
**Lifecycle:** draft
**Evaluation Date:** 2026-11-02
**Evaluator:** Phase 5 automated

---

## Scenario 1: Low Risk - Direct Callers Only (Tier 1 - Deterministic)

**Objective:** Verify low risk scales to direct callers only.

**Input:**
```
Change: Rename internal helper function
Risk: Low
```

**Expected Behavior:**
- Identifies direct callers only
- Does not trace transitive dependencies
- Completes quickly

**Acceptance Criteria:**
- [ ] Direct callers identified
- [ ] No transitive tracing
- [ ] Fast completion

---

## Scenario 2: Medium Risk - Transitive + Contracts (Tier 1 - Deterministic)

**Objective:** Verify medium risk includes transitive dependencies and contracts.

**Input:**
```
Change: Modify UserService.getUser() signature
Risk: Medium
```

**Expected Behavior:**
- Identifies direct callers (auth, billing)
- Traces transitive dependencies (5 more via auth/billing)
- Notes test files needing updates
- Analyzes API response schema changes
- Notes migration requirements

**Acceptance Criteria:**
- [ ] Direct callers found
- [ ] Transitive dependencies traced
- [ ] Test files noted
- [ ] Contracts analyzed
- [ ] Migration needs identified

---

## Scenario 3: High Risk - Full Closure + External + Performance (Tier 1 - Deterministic)

**Objective:** Verify high risk includes full transitive closure, external, performance.

**Input:**
```
Change: Migrate from REST to GraphQL API
Risk: High
```

**Expected Behavior:**
- Full transitive closure
- External integrations (mobile app, web dashboard)
- Performance implications (query complexity)
- Rollout requirements (canary, rollback, monitoring)

**Acceptance Criteria:**
- [ ] Full transitive closure
- [ ] External integrations mapped
- [ ] Performance assessed
- [ ] Rollout requirements defined

---

## Scenario 4: Direct Caller Identification (Tier 1 - Deterministic)

**Objective:** Verify all direct callers found via grep/IDE.

**Input:**
```
Change: Modify validateUser() function
```

**Expected Behavior:**
- Uses grep/IDE to find all callers
- Includes test files
- Lists all callers

**Acceptance Criteria:**
- [ ] All callers found
- [ ] Test files included
- [ ] Complete list

---

## Scenario 5: Data Contract Changes (Tier 1 - Deterministic)

**Objective:** Verify schema changes and migration needs identified.

**Input:**
```
Change: Add required field to User schema
```

**Expected Behavior:**
- Identifies schema changes
- Notes backward/forward compatibility needs
- Identifies persisted state affected

**Acceptance Criteria:**
- [ ] Schema changes listed
- [ ] Compatibility needs noted
- [ ] Persisted state identified

---

## Scenario 6: External Integration Impact (Tier 1 - Deterministic)

**Objective:** Verify downstream/upstream services mapped.

**Input:**
```
Change: Modify payment webhook payload
```

**Expected Behavior:**
- Identifies downstream services consuming API
- Identifies upstream providers with contract changes
- Notes CI/CD pipelines affected

**Acceptance Criteria:**
- [ ] Downstream services listed
- [ ] Upstream providers listed
- [ ] CI/CD pipelines noted

---

## Scenario 7: Failure Path Mapping (Tier 1 - Deterministic)

**Objective:** Verify error handling, retry logic, timeouts mapped.

**Input:**
```
Change: Modify circuit breaker threshold
```

**Expected Behavior:**
- Maps error handling affected
- Maps retry logic affected
- Maps timeout/circuit breaker configs

**Acceptance Criteria:**
- [ ] Error handling mapped
- [ ] Retry logic mapped
- [ ] Timeout configs mapped

---

## Scenario 8: Security Boundary Assessment (Tier 1 - Deterministic)

**Objective:** Verify authz, data access, audit implications assessed.

**Input:**
```
Change: Modify authorization middleware
```

**Expected Behavior:**
- Assesses authorization checks in affected paths
- Assesses data access pattern changes
- Assesses audit/logging implications

**Acceptance Criteria:**
- [ ] Authz checks assessed
- [ ] Data access assessed
- [ ] Audit implications assessed

---

## Scenario 9: Rollout Requirements (Tier 1 - Deterministic)

**Objective:** Verify canary, rollback, monitoring defined.

**Input:**
```
High-risk deployment
```

**Expected Behavior:**
- Canary/feature flag needed?
- Rollback procedure defined
- Monitoring/alerting updates specified

**Acceptance Criteria:**
- [ ] Canary/flag decision
- [ ] Rollback procedure
- [ ] Monitoring updates

---

## Evaluation Results

| Scenario | Tier | Result | Notes |
|----------|------|--------|-------|
| 1. Low Risk | 1 |  |  |
| 2. Medium Risk | 1 |  |  |
| 3. High Risk | 1 |  |  |
| 4. Direct Callers | 1 |  |  |
| 5. Data Contracts | 1 |  |  |
| 6. External Integrations | 1 |  |  |
| 7. Failure Paths | 1 |  |  |
| 8. Security Boundaries | 1 |  |  |
| 9. Rollout Requirements | 1 |  |  |

**Overall Status:** 
- Tier 1: ___/9 PASS
- **Skill Status:** ___