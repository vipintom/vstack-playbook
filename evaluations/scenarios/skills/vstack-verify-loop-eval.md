# Evaluation Scenario: verify

**Skill:** verify
**Lifecycle:** draft
**Evaluation Date:** 2026-11-02
**Evaluator:** Phase 5 automated

---

## Scenario 1: Doctor Before Drive (Tier 1 - Deterministic)

**Objective:** Verify Doctor phase runs before Drive and blocks on failure.

**Input:**
```
Verification scope: per-task
Project: API server, DB, port 3000
```

**Expected Behavior:**
- Doctor checks: process up, version, port free, auth valid
- If Doctor fails: BLOCKED, no Drive
- If Doctor passes: proceeds to Drive

**Acceptance Criteria:**
- [ ] Doctor runs first
- [ ] Doctor failure = BLOCKED
- [ ] No Drive if Doctor fails
- [ ] Doctor passes = Drive executes

---

## Scenario 2: Real User Path Exercised (Tier 1 - Deterministic)

**Objective:** Verify Drive exercises real user path, not internal setters.

**Input:**
```
Task: Implement user login endpoint
Verification: run login tests + related auth tests
```

**Expected Behavior:**
- Uses project test command (npm test -- --grep "login")
- Exercises API as user would (HTTP requests)
- Does NOT use internal setters/mocks for core logic

**Acceptance Criteria:**
- [ ] Project test command used
- [ ] Real user path exercised
- [ ] No internal setters for core logic
- [ ] Mocks only at production boundaries

---

## Scenario 3: Side Effects Verified (Tier 1 - Deterministic)

**Objective:** Verify side effects verified alongside visible output.

**Input:**
```
Task: User registration
Verification: run registration tests
```

**Expected Behavior:**
- Captures: action (HTTP POST), resulting state (user created), side effects (DB row, email sent, log entry)
- Verifies DB row exists
- Verifies email sent (or queued)
- Verifies audit log entry

**Acceptance Criteria:**
- [ ] Action captured
- [ ] Resulting state captured
- [ ] Side effects verified (DB, email, logs)
- [ ] Not just visible output

---

## Scenario 4: Evidence Survives Cleanup (Tier 1 - Deterministic)

**Objective:** Verify evidence preserved after Cleanup.

**Input:**
```
Integration verification after feature delivery
```

**Expected Behavior:**
- Cleanup tears down instances
- Evidence preserved: test output, coverage, logs, screenshots, DB dumps
- Nothing outlives Drive phase

**Acceptance Criteria:**
- [ ] Instances torn down
- [ ] Evidence artifacts preserved
- [ ] Nothing outlives Drive

---

## Scenario 5: Per-Task vs Integration Distinction (Tier 1 - Deterministic)

**Objective:** Verify per-task and integration verification distinguished.

**Input:**
```
Delivery: User authentication (login, register, logout, protected routes)
```

**Expected Behavior:**
- Per-task: login tests + related auth tests (Step 5.2 in feature-delivery)
- Integration: full suite + e2e acceptance + cross-task contracts (Phase 6)
- Results recorded separately

**Acceptance Criteria:**
- [ ] Per-task verification recorded
- [ ] Integration verification recorded
- [ ] Distinction maintained in output

---

## Scenario 6: Dry-Run Observation (Tier 1 - Deterministic)

**Objective:** Verify dry-run observation recorded.

**Input:**
```
Verification with dry-run flag
```

**Expected Behavior:**
- Observes what dry-run actually skips
- Documents skipped checks
- Does not report skipped as verified

**Acceptance Criteria:**
- [ ] Dry-run observed
- [ ] Skipped items documented
- [ ] Not reported as VERIFIED

---

## Scenario 7: Doctor Failure Handling (Tier 1 - Deterministic)

**Objective:** Verify BLOCKED on Doctor failure.

**Input:**
```
Verification: port 3000 already in use
```

**Expected Behavior:**
- Doctor fails (port conflict)
- Result: BLOCKED
- No Drive executed
- Clear error message

**Acceptance Criteria:**
- [ ] Result = BLOCKED
- [ ] No Drive
- [ ] Clear error

---

## Scenario 8: Shared State Serial Execution (Tier 1 - Deterministic)

**Objective:** Verify serial execution for shared state.

**Input:**
```
Tests sharing test database
```

**Expected Behavior:**
- Detects shared state (DB)
- Runs tests serially
- Does not run parallel

**Acceptance Criteria:**
- [ ] Shared state detected
- [ ] Serial execution
- [ ] No parallel for shared state

---

## Evaluation Results

| Scenario | Tier | Result | Notes |
|----------|------|--------|-------|
| 1. Doctor Before Drive | 1 |  |  |
| 2. Real User Path | 1 |  |  |
| 3. Side Effects | 1 |  |  |
| 4. Evidence Survives | 1 |  |  |
| 4. Per-Task vs Integration | 1 |  |  |
| 5. Dry-Run Observation | 1 |  |  |
| 6. Doctor Failure | 1 |  |  |
| 7. Shared State Serial | 1 |  |  |

**Overall Status:** 
- Tier 1: ___/8 PASS
- **Skill Status:** ___