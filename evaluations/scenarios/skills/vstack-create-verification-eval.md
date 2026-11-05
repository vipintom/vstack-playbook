# Evaluation Scenario: verify-setup

**Skill:** verify-setup
**Lifecycle:** draft
**Evaluation Date:** 2026-11-02
**Evaluator:** Phase 5 automated

---

## Scenario 1: Project Inspection Complete (Tier 1 - Deterministic)

**Objective:** Verify all 12 inspection steps executed.

**Input:**
```
New project: React + Node.js API
```

**Expected Behavior:**
1. Inspects: package.json, build config, entry points, existing tests
2. Classifies: Web (browser + API)
3. Determines: DB, Redis, test fixtures
4. Establishes: install, build, start dev, start test commands
5. Verifies: health endpoint, port/URL
6. Defines: Playwright for UI, curl for API, test identities
7. Defines: assertions, logs, screenshots, DB verification
8. Defines: test DB, ephemeral ports, test config, no prod data
9. Defines: stop processes, clean test data, reset config
10. Identifies: manual gaps, flaky areas
11. Generates: SKILL.md in .opencode/skills/project-verification/
12. Validates: runs skill, Lead/Reviewer inspects

**Acceptance Criteria:**
- [ ] All 12 steps executed
- [ ] Skill generated at harness-specific location
- [ ] Validation run

---

## Scenario 2: Application Surface Classification (Tier 1 - Deterministic)

**Objective:** Verify correct surface classification.

**Test Cases:**
| Project | Expected Classification |
|---------|------------------------|
| React + Express | Web (browser + API) |
| React Native | Mobile |
| CLI tool | CLI |
| Electron app | Desktop |
| Library | Service/Library |

**Acceptance Criteria:**
- [ ] Correct classification per project type
- [ ] Handles multi-surface projects

---

## Scenario 3: Run Commands Established (Tier 1 - Deterministic)

**Objective:** Verify run commands match project.

**Input:**
```
package.json: "dev": "vite", "test": "vitest"
```

**Expected Behavior:**
- Install: npm ci
- Build: npm run build
- Start dev: npm run dev
- Start test: npm run test

**Acceptance Criteria:**
- [ ] Commands match package.json scripts
- [ ] All 4 categories covered

---

## Scenario 4: Health Checks Verified (Tier 1 - Deterministic)

**Objective:** Verify health check verification.

**Input:**
```
Project: API on port 3000, health at GET /health
```

**Expected Behavior:**
- Identifies: how to confirm correct instance
- Identifies: health endpoint / ready signal
- Identifies: port/URL for access

**Acceptance Criteria:**
- [ ] Health endpoint identified
- [ ] Ready signal identified
- [ ] Port/URL documented

---

## Scenario 5: Application Driving Defined (Tier 1 - Deterministic)

**Objective:** Verify driving method appropriate for surface.

**Test Cases:**
| Surface | Driving Method |
|---------|---------------|
| Web | Playwright/Cypress |
| API | curl/HTTPie |
| CLI | Direct invocation |
| Desktop | Platform automation |

**Acceptance Criteria:**
- [ ] Method matches surface
- [ ] Test identities defined
- [ ] Safe test data

---

## Scenario 6: Observation Channels Defined (Tier 1 - Deterministic)

**Objective:** Verify observation channels comprehensive.

**Expected Channels:**
- Expected responses/assertions
- Logs to check
- Screenshots/traces/metrics
- Database state verification

**Acceptance Criteria:**
- [ ] All 4 channels defined
- [ ] Specific to project

---

## Scenario 7: Isolation Defined (Tier 1 - Deterministic)

**Objective:** Verify isolation prevents prod contamination.

**Expected Elements:**
- Separate test database/schema
- Ephemeral ports
- Test-specific config
- No production data access

**Acceptance Criteria:**
- [ ] Test DB/schema separate
- [ ] Ephemeral ports
- [ ] Test config
- [ ] No prod data access

---

## Scenario 8: Cleanup Defined (Tier 1 - Deterministic)

**Objective:** Verify cleanup comprehensive.

**Expected Steps:**
- Stop test processes
- Clean test data
- Reset config

**Acceptance Criteria:**
- [ ] Process stop
- [ ] Data clean
- [ ] Config reset

---

## Scenario 9: Gaps Identified (Tier 1 - Deterministic)

**Objective:** Verify gaps documented.

**Expected:**
- What cannot be automated
- Manual verification needed
- Known flaky areas

**Acceptance Criteria:**
- [ ] Unautomatable documented
- [ ] Manual steps noted
- [ ] Flaky areas listed

---

## Scenario 10: Skill Generated and Validated (Tier 1 - Deterministic)

**Objective:** Verify skill generation and validation.

**Expected:**
- SKILL.md in harness skill dir (.opencode/skills/<project>-verification/)
- Uses template from project-templates/verification-skill/
- Includes all sections
- Validation: runs skill against representative scenario
- Lead/Reviewer inspects correctness

**Acceptance Criteria:**
- [ ] SKILL.md at correct location
- [ ] Template used
- [ ] All sections present
- [ ] Validation run
- [ ] Lead/Reviewer approval

---

## Scenario 11: Fallback Without Harness Skill Dir (Tier 1 - Deterministic)

**Objective:** Verify fallback location.

**Input:**
```
No harness skill directory available
```

**Expected Behavior:**
- Creates in project root .vstack-verification/
- Documents fallback used

**Acceptance Criteria:**
- [ ] Created at fallback location
- [ ] Fallback documented

---

## Scenario 12: Fallback Without Full Automation (Tier 1 - Deterministic)

**Objective:** Verify manual steps documented.

**Input:**
```
Critical gap: mobile testing requires physical device
```

**Expected Behavior:**
- Documents manual steps clearly in skill
- Does not fake automation
- Marks as manual in skill

**Acceptance Criteria:**
- [ ] Manual steps documented
- [ ] Marked as manual
- [ ] No fake automation

---

## Evaluation Results

| Scenario | Tier | Result | Notes |
|----------|------|--------|-------|
| 1. Full Inspection | 1 |  |  |
| 2. Surface Classification | 1 |  |  |
| 3. Run Commands | 1 |  |  |
| 4. Health Checks | 1 |  |  |
| 5. Driving Methods | 1 |  |  |
| 6. Observation Channels | 1 |  |  |
| 7. Isolation | 1 |  |  |
| 8. Cleanup | 1 |  |  |
| 9. Gaps | 1 |  |  |
| 10. Generation + Validation | 1 |  |  |
| 11. Fallback Location | 1 |  |  |
| 12. Manual Gaps | 1 |  |  |

**Overall Status:** 
- Tier 1: ___/12 PASS
- **Skill Status:** ___