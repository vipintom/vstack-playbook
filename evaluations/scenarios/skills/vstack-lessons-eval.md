# Evaluation Scenario: lessons

**Skill:** lessons
**Lifecycle:** draft
**Evaluation Date:** 2026-11-02
**Evaluator:** Phase 5 automated

---

## Scenario 1: Pattern Identification (Tier 1 - Deterministic)

**Objective:** Verify recurring pattern identified with examples.

**Input:**
```
4 null pointer bugs in auth module in 2 months
```

**Expected Behavior:**
- Identifies: same bug type
- Documents: 4 occurrences with locations
- Not one-off

**Acceptance Criteria:**
- [ ] Pattern described
- [ ] Multiple examples (3+)
- [ ] Not one-off

---

## Scenario 2: Root Cause Analysis (Tier 1 - Deterministic)

**Objective:** Verify root cause analyzed, not symptom.

**Input:**
```
Pattern: null pointer in auth
```

**Expected Behavior:**
- Analyzes: missing check? unclear convention? bad default? knowledge gap?
- Identifies: root cause (e.g., no lint rule for optional chaining)
- Not just "add null checks"

**Acceptance Criteria:**
- [ ] Root cause identified
- [ ] Not symptom-only
- [ ] Systemic cause found

---

## Scenario 3: Improvement Design (Tier 1 - Deterministic)

**Objective:** Verify improvement addresses root cause.

**Input:**
```
Root cause: no lint rule for optional chaining
```

**Expected Improvement Types:**
- New check/assertion
- Convention update
- Template/pattern
- Skill update
- Project memory entry

**Expected Behavior:**
- Selects appropriate improvement type
- Implements: adds check, updates doc, creates template
- Does NOT just document

**Acceptance Criteria:**
- [ ] Improvement type selected
- [ ] Implemented (check/doc/template/skill)
- [ ] Not just documentation

---

## Scenario 4: Implementation (Tier 1 - Deterministic)

**Objective:** Verify improvement implemented.

**Input:**
```
Improvement: ESLint rule for strict null checks
```

**Expected Behavior:**
- Adds check
- Updates doc
- Creates template
- Verifies implementation works

**Acceptance Criteria:**
- [ ] Check added
- [ ] Doc updated
- [ ] Template created (if applicable)

---

## Scenario 5: Historical Validation (Tier 1 - Deterministic)

**Objective:** Verify improvement would have caught historical occurrences.

**Input:**
```
4 historical null pointer bugs
```

**Expected Behavior:**
- Tests improvement against last 3 occurrences
- Confirms would have caught them
- Documents validation

**Acceptance Criteria:**
- [ ] Tested against 3+ historical
- [ ] Would have caught
- [ ] Validation documented

---

## Scenario 6: Enforceable/Checkable (Tier 1 - Deterministic)

**Objective:** Verify improvement is enforceable, not just documentation.

**Input:**
```
Improvement: "Developers should be more careful"
```

**Expected Behavior:**
- Rejects non-enforceable improvements
- Requires: check, convention, template, skill, memory entry
- Documents why not enforceable if rejected

**Acceptance Criteria:**
- [ ] Enforceable/checkable
- [ ] Not just documentation
- [ ] Rejection documented if non-enforceable

---

## Scenario 7: Escalation - Architectural Change (Tier 1 - Deterministic)

**Objective:** Verify escalation when pattern requires architectural change.

**Input:**
```
Pattern: distributed transaction failures
Root cause: lack of saga pattern
```

**Expected Behavior:**
- Escalates to blueprint
- Lead decision required
- Documents escalation

**Acceptance Criteria:**
- [ ] Escalates to blueprint
- [ ] Lead decision
- [ ] Escalation documented

---

## Scenario 8: Pattern External to Project (Tier 1 - Deterministic)

**Objective:** Verify external pattern handling.

**Input:**
```
Pattern: upstream library breaking changes
```

**Expected Behavior:**
- Documents workaround
- Monitors for fix
- Does not try to fix external

**Acceptance Criteria:**
- [ ] Workaround documented
- [ ] Monitoring set up
- [ ] No external fix attempt

---

## Scenario 9: Related Skills (Tier 1 - Deterministic)

**Objective:** Verify related skill routing.

**Expected Behavior:**
- debug reveals patterns
- review findings may reveal patterns
- resume preserves lessons at boundaries
- Project memory stores lessons

**Acceptance Criteria:**
- [ ] Debug referenced
- [ ] Review loop referenced
- [ ] Context reset referenced
- [ ] Project memory referenced

---

## Evaluation Results

| Scenario | Tier | Result | Notes |
|----------|------|--------|-------|
| 1. Pattern Identification | 1 |  |  |
| 2. Root Cause Analysis | 1 |  |  |
| 3. Improvement Design | 1 |  |  |
| 4. Implementation | 1 |  |  |
| 5. Historical Validation | 1 |  |  |
| 6. Enforceable | 1 |  |  |
| 7. Architectural Escalation | 1 |  |  |
| 8. External Pattern | 1 |  |  |
| 9. Related Skills | 1 |  |  |

**Overall Status:** 
- Tier 1: ___/9 PASS
- **Skill Status:** ___