# Evaluation Scenario: handoff

**Skill:** handoff
**Lifecycle:** draft
**Evaluation Date:** 2026-11-02
**Evaluator:** Phase 5 automated

---

## Scenario 1: Verification Cycle Completed Before Pause (Tier 1 - Deterministic)

**Objective:** Verify pause doesn't happen mid-verification.

**Input:**
```
Work in progress, verification mid-cycle
```

**Expected Behavior:**
- Completes current verification OR reverts to last clean state
- Does NOT pause with partial verification
- If cannot reach clean state → recovery before pause

**Acceptance Criteria:**
- [ ] Verification completes OR cleanly reverts
- [ ] No mid-check pause
- [ ] Recovery if needed

---

## Scenario 2: Checkpoint Updated with Complete State (Tier 1 - Deterministic)

**Objective:** Verify PROGRESS.md updated with complete state.

**Input:**
```
Work state: task 3 complete, task 4 in progress (specific next action)
Open questions: 2, Blockers: 1
Branch: feature/auth, Commit: abc123, Uncommitted: task 4 changes
```

**Expected Behavior:**
- Runs resume
- PROGRESS.md updated with: exact next action, verified work, open questions, blockers
- Records: branch, commit, uncommitted changes
- Checkpoint update succeeds

**Acceptance Criteria:**
- [ ] resume executed
- [ ] Next action exact
- [ ] Verified work listed
- [ ] Open questions listed
- [ ] Blockers listed
- [ ] Git state recorded

---

## Scenario 3: Workspace Cleaned or Documented (Tier 1 - Deterministic)

**Objective:** Verify workspace clean or documented.

**Input:**
```
Uncommitted changes: task 4 partial implementation
Build artifacts: dist/, .cache/
```

**Expected Behavior:**
- Stashes or commits uncommitted with clear message ("WIP: feature-name — next: specific action")
- Cleans build artifacts, temp files
- Notes intentional dirty state in checkpoint

**Acceptance Criteria:**
- [ ] Uncommitted stashed/committed with clear message
- [ ] Build artifacts cleaned
- [ ] Intentional dirty state documented

---

## Scenario 4: Pause Recorded with Metadata (Tier 1 - Deterministic)

**Objective:** Verify pause record includes all metadata.

**Input:**
```
Pause reason: end of day
Expected resume: tomorrow 9am
External: test DB running, test data seeded
```

**Expected Behavior:**
- Records: timestamp, reason, expected resume time
- Records: external side effects (running services, test data)
- Pause record in ledger/runtime

**Acceptance Criteria:**
- [ ] Timestamp recorded
- [ ] Reason recorded
- [ ] Expected resume time
- [ ] External side effects documented

---

## Scenario 5: Resumability Verified (Tier 1 - Deterministic)

**Objective:** Verify resumability check before pause.

**Input:**
```
Checkpoint updated, workspace clean
```

**Expected Behavior:**
- Verifies: next action specific and actionable
- Verifies: no ambiguous state
- Verifies: checkpoint matches repository state
- Result: YES/NO

**Acceptance Criteria:**
- [ ] Next action specific and actionable
- [ ] No ambiguous state
- [ ] Checkpoint matches repo state
- [ ] Resumability result (YES/NO)

---

## Scenario 6: Cannot Reach Clean State (Tier 1 - Deterministic)

**Objective:** Verify recovery before pause if needed.

**Input:**
```
Broken state, cannot complete verification
```

**Expected Behavior:**
- Triggers recovery before pause
- Does not pause with broken state
- Escalates if recovery fails

**Acceptance Criteria:**
- [ ] recovery triggered
- [ ] Does not pause broken
- [ ] Escalates if recovery fails

---

## Scenario 7: External Side Effects Unmanageable (Tier 1 - Deterministic)

**Objective:** Verify escalation for unmanageable side effects.

**Input:**
```
External service cannot be stopped, test data cannot be cleaned
```

**Expected Behavior:**
- Escalates to Lead
- Documents in pause record
- Does not pause if unsafe

**Acceptance Criteria:**
- [ ] Escalates to Lead
- [ ] Documents in pause record
- [ ] Safety first

---

## Scenario 8: Fallback Without Plugin (Tier 1 - Deterministic)

**Objective:** Verify fallback without plugin.

**Input:**
```
No plugin available for context-reset/ledger
```

**Expected Behavior:**
- Manual PROGRESS.md update
- Manual pause record
- Documents fallback used

**Acceptance Criteria:**
- [ ] Manual checkpoint update
- [ ] Manual pause record
- [ ] Fallback documented

---

## Evaluation Results

| Scenario | Tier | Result | Notes |
|----------|------|--------|-------|
| 1. Verification Complete | 1 |  |  |
| 2. Checkpoint Complete | 1 |  |  |
| 3. Workspace Clean | 1 |  |  |
| 4. Pause Metadata | 1 |  |  |
| 5. Resumability Verified | 1 |  |  |
| 6. Recovery Before Pause | 1 |  |  |
| 7. External Side Effects | 1 |  |  |
| 8. Plugin Fallback | 1 |  |  |

**Overall Status:** 
- Tier 1: ___/8 PASS
- **Skill Status:** ___