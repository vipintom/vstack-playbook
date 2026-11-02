# Evaluation Scenario: vstack-help

**Skill:** vstack-help
**Lifecycle:** draft
**Evaluation Date:** 2026-11-02
**Evaluator:** Phase 5 automated

---

## Scenario 1: Problem-to-Skill Mapping (Tier 1 - Deterministic)

**Objective:** Verify problem maps to correct skill family.

**Test Cases:**
| Problem | Expected Family |
|---------|----------------|
| "How does X work?" | Understanding & discovery → vstack-how |
| "Why designed this way?" | Understanding & discovery → vstack-why |
| "What breaks if I change X?" | Understanding & discovery → vstack-blast-radius |
| "Add new feature" | Implementation → vstack-tdd, vstack-incremental-build |
| "Fix bug" | Debugging & recovery → vstack-debug, vstack-unstick |
| "Review this PR" | Review → vstack-review-loop |
| "Switch roles" | Continuity → vstack-context-reset |

**Acceptance Criteria:**
- [ ] Each problem maps to correct family
- [ ] No misclassification

---

## Scenario 2: Selects 1-3 Skills (Tier 1 - Deterministic)

**Objective:** Verify minimal set of 1-3 skills selected.

**Input:**
```
Problem: "Debug flaky test"
```

**Expected Behavior:**
- Selects 1-3 skills
- Not "just in case" skills
- Orders application

**Acceptance Criteria:**
- [ ] 1-3 skills selected
- [ ] No "just in case" skills
- [ ] Order specified

---

## Scenario 3: Confirms Fit via "When to Use" (Tier 1 - Deterministic)

**Objective:** Verify each selected skill's "When to Use" matches problem.

**Input:**
```
Selected: vstack-debug, vstack-unstick
Problem: "Debug flaky test"
```

**Expected Behavior:**
- Reads vstack-debug "When to Use": matches
- Reads vstack-unstick "When to Use": matches (after 3+ failures)
- Confirms fit

**Acceptance Criteria:**
- [ ] Each skill's When to Use checked
- [ ] All match problem
- [ ] Fit confirmed

---

## Scenario 4: Sequential Application (Tier 1 - Deterministic)

**Objective:** Verify skills applied in sequence.

**Input:**
```
Skills: vstack-debug, then vstack-unstick
```

**Expected Behavior:**
- Completes vstack-debug first
- Then starts vstack-unstick if needed
- Does not parallelize

**Acceptance Criteria:**
- [ ] Sequential
- [ ] Completes first before second
- [ ] No parallel

---

## Scenario 5: Escalation - No Skill Matches (Tier 1 - Deterministic)

**Objective:** Verify escalation when no skill matches.

**Input:**
```
Problem: "Design a new company logo"
```

**Expected Behavior:**
- No skill matches
- Uses vstack-sharpen to clarify
- Escalates if still unclear

**Acceptance Criteria:**
- [ ] No match found
- [ ] Uses vstack-sharpen
- [ ] Escalates if needed

---

## Scenario 6: Escalation - Too Many Skills (Tier 1 - Deterministic)

**Objective:** Verify handling when too many skills seem relevant.

**Input:**
```
Problem: "Refactor and optimize and test"
```

**Expected Behavior:**
- Picks most specific skill
- Others wait
- Documents rationale

**Acceptance Criteria:**
- [ ] Picks most specific
- [ ] Others wait
- [ ] Rationale documented

---

## Scenario 7: Related Skills - Mode and Sharpen (Tier 1 - Deterministic)

**Objective:** Verify related skill references.

**Expected Behavior:**
- References vstack-mode for context
- References vstack-sharpen for underspecified problems
- Integrates with skill selection

**Acceptance Criteria:**
- [ ] References vstack-mode
- [ ] References vstack-sharpen
- [ ] Integrates with selection

---

## Evaluation Results

| Scenario | Tier | Result | Notes |
|----------|------|--------|-------|
| 1. Problem-to-Skill Mapping | 1 |  |  |
| 2. 1-3 Skills Selected | 1 |  |  |
| 3. "When to Use" Confirmation | 1 |  |  |
| 4. Sequential Application | 1 |  |  |
| 5. No Match Escalation | 1 |  |  |
| 6. Too Many Skills | 1 |  |  |
| 7. Related Skills | 1 |  |  |

**Overall Status:** 
- Tier 1: ___/7 PASS
- **Skill Status:** ___