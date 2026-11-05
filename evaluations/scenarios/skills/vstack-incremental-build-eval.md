# Evaluation Scenario: plan

**Skill:** plan
**Lifecycle:** draft
**Evaluation Date:** 2026-11-02
**Evaluator:** Phase 5 automated

---

## Scenario 1: Decomposition into Verifiable Units (Tier 1 - Deterministic)

**Objective:** Verify decomposition into smallest verifiable units.

**Input:**
```
Plan: 5 steps for user profile feature
```

**Expected Behavior:**
- Each unit: one logical change, one verification
- Prefers vertical slices (feature) over horizontal (layer)
- Avoids "prep" commits that don't pass verification

**Acceptance Criteria:**
- [ ] One logical change per unit
- [ ] One verification per unit
- [ ] Vertical slices preferred
- [ ] No "prep" commits

---

## Scenario 2: Per-Unit Verification Cycle (Tier 1 - Deterministic)

**Objective:** Verify baseline → change → verify cycle per unit.

**Input:**
```
Unit: Add user profile API endpoint
```

**Expected Behavior:**
a. Identifies narrowest verification (what check validates this?)
b. Runs baseline (captures current check result)
c. Makes the change (minimal diff)
d. Runs verification (same check as baseline)
e. Inspects actual output (reads real results, not summaries)
f. Fixes root cause (if check fails, fixes cause, doesn't weaken check)
g. Repeats until pass, then runs broader relevant checks

**Acceptance Criteria:**
- [ ] Narrowest verification identified
- [ ] Baseline captured
- [ ] Minimal diff
- [ ] Same check re-run
- [ ] Actual output inspected
- [ ] Root cause fixed (not check weakened)
- [ ] Repeats until pass
- [ ] Broader checks run after

---

## Scenario 3: Incremental Commits (Tier 1 - Deterministic)

**Objective:** Verify one logical change per commit.

**Input:**
```
5 units implemented
```

**Expected Behavior:**
- One logical change per commit
- Commit message: what + why (references plan step)
- Verification evidence in commit or PR

**Acceptance Criteria:**
- [ ] One change per commit
- [ ] Message: what + why + plan ref
- [ ] Evidence in commit/PR

---

## Scenario 4: Frequent Integration (Tier 1 - Deterministic)

**Objective:** Verify frequent integration and full verification before push.

**Input:**
```
Multiple units implemented
```

**Expected Behavior:**
- Pulls/rebases regularly
- Runs full verification suite before push
- Addresses conflicts immediately

**Acceptance Criteria:**
- [ ] Regular pull/rebase
- [ ] Full verification before push
- [ ] Conflicts addressed immediately

---

## Scenario 5: Escalation - Verification Fails Repeatedly (Tier 1 - Deterministic)

**Objective:** Verify unstick escalation.

**Input:**
```
Verification fails 3+ times on same unit
```

**Expected Behavior:**
- Invokes unstick
- Does not keep retrying same fix

**Acceptance Criteria:**
- [ ] Invokes unstick
- [ ] Does not retry same fix

---

## Scenario 6: Escalation - Step Requires Larger Change (Tier 1 - Deterministic)

**Objective:** Verify plan revision when step needs larger change.

**Input:**
```
Unit requires larger change than planned
```

**Expected Behavior:**
- Revises plan via plan
- Does not force large change in single unit

**Acceptance Criteria:**
- [ ] Revises plan
- [ ] Does not force large change

---

## Scenario 6: Fallback Without Automated Checks (Tier 1 - Deterministic)

**Objective:** Verify fallback with manual verification.

**Input:**
```
No automated checks available
```

**Expected Behavior:**
- Manual verification with documented evidence
- Does not skip verification

**Acceptance Criteria:**
- [ ] Manual verification
- [ ] Evidence documented
- [ ] Verification not skipped

---

## Evaluation Results

| Scenario | Tier | Result | Notes |
|----------|------|--------|-------|
| 1. Decomposition | 1 |  |  |
| 2. Verification Cycle | 1 |  |  |
| 3. Incremental Commits | 1 |  |  |
| 4. Frequent Integration | 1 |  |  |
| 5. Unstick Escalation | 1 |  |  |
| 6. Plan Revision | 1 |  |  |
| 6. Manual Fallback | 1 |  |  |

**Overall Status:** 
- Tier 1: ___/7 PASS
- **Skill Status:** ___