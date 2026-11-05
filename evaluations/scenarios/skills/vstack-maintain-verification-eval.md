# Evaluation Scenario: verify-maintain

**Skill:** verify-maintain
**Lifecycle:** draft
**Evaluation Date:** 2026-11-02
**Evaluator:** Phase 5 automated

---

## Scenario 1: Maintenance Triggers Identified (Tier 1 - Deterministic)

**Objective:** Verify all trigger categories detected.

**Input:**
```
Project changes: new API route added, test framework upgraded, verification failures observed
```

**Expected Behavior:**
- Detects: changed scripts/entry points/routes/APIs/UI
- Detects: changed test framework/config/feature flags
- Detects: observed verification failures/discrepancies
- Detects: stale validation timestamp

**Acceptance Criteria:**
- [ ] All 4 trigger categories detected
- [ ] Specific changes identified

---

## Scenario 2: Skill vs Reality Comparison (Tier 1 - Deterministic)

**Objective:** Verify comprehensive comparison of skill vs reality.

**Input:**
```
Project: new /api/v2/users route added
Skill: drive steps only cover /api/v1/users
```

**Expected Behavior:**
- Compares: setup commands vs package.json/scripts
- Compares: run commands vs actual dev/test commands
- Compares: health checks vs actual endpoints
- Compares: drive steps vs current app surfaces
- Compares: observe channels vs actual logging/metrics
- Compares: cleanup vs actual process management

**Acceptance Criteria:**
- [ ] All 6 comparison categories executed
- [ ] Mismatches identified

---

## Scenario 3: Change Detection - Hash and Semantic (Tier 1 - Deterministic)

**Objective:** Verify both hash and semantic change detection.

**Input:**
```
Changes: package-lock.json updated, new route /api/v2/users added, vitest upgraded
```

**Expected Behavior:**
- Detects: command/artifact hash changes (package-lock)
- Detects: semantic changes (new route, new API)
- Detects: tool/framework upgrades (vitest)

**Acceptance Criteria:**
- [ ] Hash changes detected
- [ ] Semantic changes detected
- [ ] Tool upgrades detected

---

## Scenario 4: Skill Update with Explicit Gaps (Tier 1 - Deterministic)

**Objective:** Verify skill updated with gaps marked explicitly.

**Input:**
```
Mismatches found: new route, upgraded framework
```

**Expected Behavior:**
- Modifies affected sections
- Updates version/timestamp
- Marks unresolved gaps explicitly (does not hide)

**Acceptance Criteria:**
- [ ] Affected sections modified
- [ ] Version/timestamp updated
- [ ] Gaps marked explicitly

---

## Scenario 5: Validation - Smoke Test and Journey (Tier 1 - Deterministic)

**Objective:** Verify validation runs smoke test and representative journey.

**Input:**
```
Skill updated
```

**Expected Behavior:**
- Runs smoke test through updated skill
- Executes representative journey
- Verifies all steps work

**Acceptance Criteria:**
- [ ] Smoke test runs
- [ ] Representative journey executes
- [ ] All steps verified

---

## Scenario 6: Metadata Recording (Tier 1 - Deterministic)

**Objective:** Verify metadata updated correctly.

**Input:**
```
Validation passed
```

**Expected Behavior:**
- Updates lastValidated timestamp
- Updates content hash
- Notes changes in skill changelog

**Acceptance Criteria:**
- [ ] lastValidated updated
- [ ] Content hash updated
- [ ] Changelog entry added

---

## Scenario 7: Validation Fails Repeatedly (Tier 1 - Deterministic)

**Objective:** Verify escalation on repeated validation failures.

**Input:**
```
Validation fails 3 times
```

**Expected Behavior:**
- Escalates to debug verification itself
- Reports to Lead

**Acceptance Criteria:**
- [ ] Escalates to debug
- [ ] Reports to Lead

---

## Scenario 8: Unresolvable Gap (Tier 1 - Deterministic)

**Objective:** Verify unresolvable gap handling.

**Input:**
```
Gap: mobile testing requires physical device
```

**Expected Behavior:**
- Documents in skill
- Escalates to Lead

**Acceptance Criteria:**
- [ ] Gap documented in skill
- [ ] Escalates to Lead

---

## Scenario 9: Fallback Without Full Validation (Tier 1 - Deterministic)

**Objective:** Verify fallback when full validation unavailable.

**Input:**
```
Cannot run full validation (missing environment)
```

**Expected Behavior:**
- Updates known changes
- Marks rest for review
- Documents fallback used

**Acceptance Criteria:**
- [ ] Known changes updated
- [ ] Rest marked for review
- [ ] Fallback documented

---

## Scenario 9: Outcomes Classification (Tier 2 - Qualitative)

**Objective:** Verify correct outcome classification.

**Test Cases:**
| Changes | Expected Outcome |
|---------|-----------------|
| No changes | clean |
| Doc/harness fixes | changed |
| Product gap | blocked |

**Acceptance Criteria:**
- [ ] clean = no changes needed
- [ ] changed = doc/harness/map corrections
- [ ] blocked = coverage couldn't finish or fix couldn't ship

---

## Evaluation Results

| Scenario | Tier | Result | Notes |
|----------|------|--------|-------|
| 1. Triggers Identified | 1 |  |  |
| 2. Skill vs Reality | 1 |  |  |
| 3. Hash + Semantic | 1 |  |  |
| 4. Update with Gaps | 1 |  |  |
| 5. Validation Journey | 1 |  |  |
| 6. Metadata | 1 |  |  |
| 7. Repeated Failure | 1 |  |  |
| 8. Unresolvable Gap | 1 |  |  |
| 9. Fallback | 1 |  |  |
| 10. Outcomes | 2 |  |  |

**Overall Status:** 
- Tier 1: ___/9 PASS
- Tier 2: ___/1 PASS
- **Skill Status:** ___