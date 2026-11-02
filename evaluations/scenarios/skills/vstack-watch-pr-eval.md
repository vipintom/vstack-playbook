# Evaluation Scenario: vstack-watch-pr

**Skill:** vstack-watch-pr
**Lifecycle:** draft
**Evaluation Date:** 2026-11-02
**Evaluator:** Phase 5 automated

---

## Scenario 1: CI Monitoring (Tier 1 - Deterministic)

**Objective:** Verify CI completion monitoring.

**Input:**
```
PR created, CI running
```

**Expected Behavior:**
- Watches for CI completion
- On failure: diagnoses, fixes, reverify, pushes
- Records evidence

**Acceptance Criteria:**
- [ ] Watches CI completion
- [ ] On failure: diagnose, fix, reverify, push
- [ ] Evidence recorded

---

## Scenario 2: Review Monitoring (Tier 1 - Deterministic)

**Objective:** Verify review findings monitoring.

**Input:**
```
PR open, review findings arrive
```

**Expected Behavior:**
- Watches for review findings
- For each finding: validates, fixes if valid, reverifies
- Disposition: fixed / dismissed / deferred / accepted risk
- Records disposition rationale

**Acceptance Criteria:**
- [ ] Watches for findings
- [ ] Validates each
- [ ] Fixes if valid, reverify
- [ ] Disposition with rationale

---

## Scenario 3: Reverify After Fixes (Tier 1 - Deterministic)

**Objective:** Verify re-verification after fixes.

**Input:**
```
Fix applied for review finding
```

**Expected Behavior:**
- Runs affected verifications
- Updates evidence
- Pushes updates

**Acceptance Criteria:**
- [ ] Affected verifications run
- [ ] Evidence updated
- [ ] Updates pushed

---

## Scenario 4: Repeat Until Clean (Tier 1 - Deterministic)

**Objective:** Verify repeat cycle until clean state.

**Input:**
```
CI passes, no unresolved blocking findings
```

**Expected Behavior:**
- CI passes
- No unresolved blocking findings
- All findings dispositioned

**Acceptance Criteria:**
- [ ] CI passes
- [ ] No open blocking findings
- [ ] All findings dispositioned

---

## Scenario 5: Unresolvable Finding (Tier 1 - Deterministic)

**Objective:** Verify escalation for unresolvable findings.

**Input:**
```
Finding cannot be resolved
```

**Expected Behavior:**
- Escalates to Lead
- Documents unresolvable

**Acceptance Criteria:**
- [ ] Escalates to Lead
- [ ] Documents unresolvable

---

## Scenario 6: CI Flakiness (Tier 1 - Deterministic)

**Objective:** Verify CI flakiness handling.

**Input:**
```
CI fails intermittently
```

**Expected Behavior:**
- Investigates flakiness
- Does not ignore
- Fixes root cause

**Acceptance Criteria:**
- [ ] Investigates
- [ ] Does not ignore
- [ ] Root cause fixed

---

## Scenario 7: Fallback Without CI/Review Monitoring (Tier 1 - Deterministic)

**Objective:** Verify fallback without CI/review integration.

**Input:**
```
No CI/review monitoring available
```

**Expected Behavior:**
- Manual check before vstack-ready
- Documents fallback

**Acceptance Criteria:**
- [ ] Manual check before ready
- [ ] Fallback documented

---

## Evaluation Results

| Scenario | Tier | Result | Notes |
|----------|------|--------|-------|
| 1. CI Monitoring | 1 |  |  |
| 2. Review Monitoring | 1 |  |  |
| 3. Reverify After Fixes | 1 |  |  |
| 4. Repeat Until Clean | 1 |  |  |
| 5. Unresolvable Finding | 1 |  |  |
| 6. CI Flakiness | 1 |  |  |
| 7. No Monitoring Fallback | 1 |  |  |

**Overall Status:** 
- Tier 1: ___/7 PASS
- **Skill Status:** ___