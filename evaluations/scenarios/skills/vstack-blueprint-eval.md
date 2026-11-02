# Evaluation Scenario: vstack-blueprint

**Skill:** vstack-blueprint
**Lifecycle:** draft
**Evaluation Date:** 2026-11-02
**Evaluator:** Phase 5 automated

---

## Scenario 1: Interfaces First (Tier 1 - Deterministic)

**Objective:** Verify component interfaces defined first (caller perspective).

**Input:**
```
Architecture decision: Strategy pattern for payment providers
```

**Expected Behavior:**
- Defines public APIs (signatures, contracts, schemas)
- Defines internal module boundaries
- Defines error and event contracts
- Caller perspective first

**Acceptance Criteria:**
- [ ] Public APIs defined
- [ ] Internal boundaries defined
- [ ] Error/event contracts
- [ ] Caller perspective first

---

## Scenario 2: Data Flows Designed (Tier 1 - Deterministic)

**Objective:** Verify data flows comprehensively designed.

**Input:**
```
Payment processing flow
```

**Expected Behavior:**
- Input validation and transformation
- State transitions and persistence
- Inter-component communication
- Serialization boundaries

**Acceptance Criteria:**
- [ ] Input validation/transformation
- [ ] State transitions/persistence
- [ ] Inter-component communication
- [ ] Serialization boundaries

---

## Scenario 3: Implementation Boundaries Specified (Tier 1 - Deterministic)

**Objective:** Verify implementation boundaries specified.

**Input:**
```
Payment module structure
```

**Expected Behavior:**
- Files/modules to create/modify
- Ownership per component
- Shared utilities vs component-specific

**Acceptance Criteria:**
- [ ] Files/modules listed
- [ ] Ownership per component
- [ ] Shared vs specific code

---

## Scenario 4: Implementation Sequence Planned (Tier 1 - Deterministic)

**Objective:** Verify dependency order and integration points.

**Input:**
```
Payment module implementation
```

**Expected Behavior:**
- Dependency order (what built first)
- Integration points
- Test boundaries

**Acceptance Criteria:**
- [ ] Dependency order
- [ ] Integration points
- [ ] Test boundaries

---

## Scenario 5: Migration Strategy (Tier 1 - Deterministic)

**Objective:** Verify migration strategy for breaking changes.

**Input:**
```
New payment providers replacing old
```

**Expected Behavior:**
- Schema migrations
- Data migration scripts
- Backward compatibility
- Rollback procedure

**Acceptance Criteria:**
- [ ] Schema migrations
- [ ] Data migration scripts
- [ ] Backward compatibility
- [ ] Rollback procedure

---

## Scenario 6: Verification Approach (Tier 1 - Deterministic)

**Objective:** Verify verification strategy covers acceptance criteria.

**Input:**
```
Payment module acceptance criteria
```

**Expected Behavior:**
- Unit test boundaries
- Integration test scenarios
- Contract tests
- Performance baselines

**Acceptance Criteria:**
- [ ] Unit test boundaries
- [ ] Integration scenarios
- [ ] Contract tests
- [ ] Performance baselines

---

## Scenario 6: Acyclic Dependencies (Tier 1 - Deterministic)

**Objective:** Verify dependencies are acyclic.

**Input:**
```
Blueprint with multiple components
```

**Expected Behavior:**
- Verifies no circular dependencies
- If cyclic: redesigns boundaries
- Reports acyclic status

**Acceptance Criteria:**
- [ ] Dependencies checked
- [ ] Cyclic = redesign
- [ ] Acyclic confirmed

---

## Scenario 7: Migration Plan Addresses Breaking Changes (Tier 1 - Deterministic)

**Objective:** Verify migration plan covers all breaking changes.

**Input:**
```
Breaking API changes
```

**Expected Behavior:**
- Migration plan addresses all breaking changes
- No breaking change unaddressed

**Acceptance Criteria:**
- [ ] All breaking changes covered
- [ ] No unaddressed breaking changes

---

## Scenario 7: Verification Strategy Covers Acceptance (Tier 1 - Deterministic)

**Objective:** Verify verification strategy covers acceptance criteria.

**Input:**
```
Acceptance criteria list
```

**Expected Behavior:**
- Verification strategy covers all criteria
- Gaps identified and documented

**Acceptance Criteria:**
- [ ] All criteria covered
- [ ] Gaps documented

---

## Scenario 8: Blueprint Complete for Task Planning (Tier 1 - Deterministic)

**Objective:** Verify blueprint complete enough for vstack-plan-loop.

**Input:**
```
Completed blueprint
```

**Expected Behavior:**
- Sufficient for task planning
- Time-boxed (30-60 min default)

**Acceptance Criteria:**
- [ ] Complete for planning
- [ ] Time-boxed

---

## Evaluation Results

| Scenario | Tier | Result | Notes |
|----------|------|--------|-------|
| 1. Interfaces First | 1 |  |  |
| 2. Data Flows | 1 |  |  |
| 3. Boundaries | 1 |  |  |
| 4. Sequence | 1 |  |  |
| 5. Migration | 1 |  |  |
| 6. Verification | 1 |  |  |
| 7. Acyclic | 1 |  |  |
| 8. Migration Covers Breaking | 1 |  |  |
| 9. Verification Covers Acceptance | 1 |  |  |
| 10. Complete for Planning | 1 |  |  |

**Overall Status:** 
- Tier 1: ___/10 PASS
- **Skill Status:** ___