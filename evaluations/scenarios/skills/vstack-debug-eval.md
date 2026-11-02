# Evaluation Scenario: vstack-debug

**Skill:** vstack-debug
**Lifecycle:** draft
**Evaluation Date:** 2026-11-02
**Evaluator:** Phase 5 automated

---

## Scenario 1: Errors Read Completely (Tier 1 - Deterministic)

**Objective:** Verify errors read completely before hypothesis.

**Input:**
```
Test failure with stack trace, line numbers, error codes
```

**Expected Behavior:**
- Reads stack trace completely
- Notes line numbers
- Notes error codes
- Reads full messages (does not skim)

**Acceptance Criteria:**
- [ ] Stack trace read completely
- [ ] Line numbers noted
- [ ] Error codes noted
- [ ] Full messages read

---

## Scenario 2: Consistent Reproduction (Tier 1 - Deterministic)

**Objective:** Verify reproduction consistent before investigation.

**Input:**
```
Flaky test: fails 2/10 runs
```

**Expected Behavior:**
- Runs multiple times (e.g., 20)
- Documents consistency (fails 4/20)
- Notes conditions if inconsistent

**Acceptance Criteria:**
- [ ] Multiple runs executed
- [ ] Consistency documented
- [ ] Conditions noted if inconsistent

---

## Scenario 3: Recent Changes Checked (Tier 1 - Deterministic)

**Objective:** Verify git diff, commits, deps, env checked.

**Input:**
```
Failure appeared after dependency upgrade
```

**Expected Behavior:**
- Runs git diff
- Checks recent commits
- Checks dependency updates
- Checks environment changes

**Acceptance Criteria:**
- [ ] git diff run
- [ ] Recent commits checked
- [ ] Dependencies checked
- [ ] Environment checked

---

## Scenario 4: Boundary Evidence Gathered (Tier 1 - Deterministic)

**Objective:** Verify evidence at component boundaries.

**Input:**
```
Failure in service → DB layer
```

**Expected Behavior:**
- Logs inputs/outputs at module boundaries
- Logs inputs/outputs at API boundaries
- Logs inputs/outputs at DB boundaries

**Acceptance Criteria:**
- [ ] Module boundaries logged
- [ ] API boundaries logged
- [ ] DB boundaries logged

---

## Scenario 5: Data Flow Traced Backward (Tier 1 - Deterministic)

**Objective:** Verify backward data flow tracing.

**Input:**
```
Symptom: wrong output
Source: unknown
```

**Expected Behavior:**
- Traces from symptom to source
- Follows data, not code structure
- Identifies source

**Acceptance Criteria:**
- [ ] Traces backward
- [ ] Follows data flow
- [ ] Source identified

---

## Scenario 5: Working Examples Found (Tier 1 - Deterministic)

**Objective:** Verify working examples in codebase found.

**Input:**
```
Similar pattern works elsewhere
```

**Expected Behavior:**
- Finds working examples in codebase
- Lists all working examples

**Acceptance Criteria:**
- [ ] Working examples found
- [ ] All listed

---

## Scenario 6: Reference Comparison (Tier 1 - Deterministic)

**Objective:** Verify comparison against reference implementations.

**Input:**
```
Library docs show different pattern
```

**Expected Behavior:**
- Compares against library docs
- Compares against similar projects
- Compares against previous versions

**Acceptance Criteria:**
- [ ] Library docs compared
- [ ] Similar projects compared
- [ ] Previous versions compared

---

## Scenario 7: Differences Listed (Tier 1 - Deterministic)

**Objective:** Verify every difference listed.

**Input:**
```
Working vs failing comparison
```

**Expected Behavior:**
- Lists EVERY difference
- No difference omitted

**Acceptance Criteria:**
- [ ] All differences listed
- [ ] None omitted

---

## Scenario 8: Dependencies Understood (Tier 1 - Deterministic)

**Objective:** Verify dependencies documented.

**Input:**
```
Component depends on external service
```

**Expected Behavior:**
- Lists what component depends on
- Documents versions
- Documents config

**Acceptance Criteria:**
- [ ] Dependencies listed
- [ ] Versions documented
- [ ] Config documented

---

## Scenario 8: Single Hypothesis Formed (Tier 1 - Deterministic)

**Objective:** Verify single written hypothesis.

**Input:**
```
Multiple possible causes
```

**Expected Behavior:**
- Forms ONE hypothesis (specific, written)
- "X causes Y because Z"
- Does not form multiple

**Acceptance Criteria:**
- [ ] Single hypothesis
- [ ] Written down
- [ ] Specific format

---

## Scenario 9: Minimal Test (Tier 1 - Deterministic)

**Objective:** Verify minimal hypothesis testing.

**Input:**
```
Hypothesis: connection pool exhausted
```

**Expected Behavior:**
- One variable changed
- Smallest change to prove/disprove
- Log/print at hypothesis point
- Or toggle one condition
- Or minimal script

**Acceptance Criteria:**
- [ ] One variable
- [ ] Smallest change
- [ ] Result observed

---

## Scenario 9: Verify Before Continue (Tier 1 - Deterministic)

**Objective:** Verify hypothesis confirmed before continuing.

**Input:**
```
Test result: confirmed
```

**Expected Behavior:**
- Hypothesis confirmed or denied
- Does not continue on unconfirmed
- Documents result

**Acceptance Criteria:**
- [ ] Confirmed/denied
- [ ] Doesn't continue unconfirmed
- [ ] Documented

---

## Scenario 10: Admit Unknown (Tier 1 - Deterministic)

**Objective:** Verify admission when unknown.

**Input:**
```
No idea why it fails
```

**Expected Behavior:**
- Admits "I don't know"
- Researches
- Asks for help
- Does NOT guess

**Acceptance Criteria:**
- [ ] Admits unknown
- [ ] Researches
- [ ] Asks
- [ ] No guessing

---

## Scenario 11: Mandatory Failing Test (Tier 1 - Deterministic)

**Objective:** Verify failing test before fix.

**Input:**
```
Bug identified
```

**Expected Behavior:**
- Creates failing test case
- Reproduces exact failure
- Test fails before fix

**Acceptance Criteria:**
- [ ] Failing test created
- [ ] Reproduces exact failure
- [ ] Test fails before fix

---

## Scenario 12: Single Fix at Root Cause (Tier 1 - Deterministic)

**Objective:** Verify fix at root cause, not symptom.

**Input:**
```
Root cause: connection pool size
```

**Expected Behavior:**
- Implements fix at root cause
- Not at symptom
- Single fix

**Acceptance Criteria:**
- [ ] Fix at root cause
- [ ] Not at symptom
- [ ] Single fix

---

## Scenario 13: Verify Fix (Tier 1 - Deterministic)

**Objective:** Verify test passes and suite green.

**Input:**
```
Fix implemented
```

**Expected Behavior:**
- Test passes
- Suite green
- Documents fix

**Acceptance Criteria:**
- [ ] Test passes
- [ ] Suite green
- [ ] Documented

---

## Scenario 13: 3+ Failures = Architecture Discussion (Tier 1 - Deterministic)

**Objective:** Verify escalation after 3+ failed fixes.

**Input:**
```
3 failed fix attempts
```

**Expected Behavior:**
- STOPS
- Questions architecture with human
- Does not attempt 4th fix

**Acceptance Criteria:**
- [ ] Stops after 3
- [ ] Questions architecture
- [ ] No 4th attempt

---

## Evaluation Results

| Scenario | Tier | Result | Notes |
|----------|------|--------|-------|
| 1. Errors Read | 1 |  |  |
| 2. Reproduction | 1 |  |  |
| 3. Recent Changes | 1 |  |  |
| 4. Boundary Evidence | 1 |  |  |
| 5. Backward Trace | 1 |  |  |
| 5. Working Examples | 1 |  |  |
| 6. Reference Compare | 1 |  |  |
| 7. Differences Listed | 1 |  |  |
| 8. Dependencies | 1 |  |  |
| 8. Single Hypothesis | 1 |  |  |
| 9. Minimal Test | 1 |  |  |
| 9. Verify Before Continue | 1 |  |  |
| 10. Admit Unknown | 1 |  |  |
| 11. Failing Test | 1 |  |  |
| 12. Root Cause Fix | 1 |  |  |
| 13. Verify Fix | 1 |  |  |
| 13. 3 Failures = Architecture | 1 |  |  |

**Overall Status:** 
- Tier 1: ___/16 PASS
- **Skill Status:** ___