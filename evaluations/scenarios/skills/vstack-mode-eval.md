# Evaluation Scenario: route

**Skill:** route
**Lifecycle:** draft
**Evaluation Date:** 2026-11-02
**Evaluator:** Phase 5 automated

---

## Scenario 1: Trivial vs Non-Trivial Routing (Tier 1 - Deterministic)

**Objective:** Verify route correctly distinguishes trivial edits from non-trivial work.

**Input:**
```
Request: "Fix typo in README"
```

**Expected Behavior:**
- Classifies as trivial
- No playbook selected
- No skills invoked
- Direct edit performed

**Acceptance Criteria:**
- [ ] Classified as trivial
- [ ] No playbook invoked
- [ ] No skills invoked
- [ ] Direct edit executed

---

## Scenario 2: Read-Only vs Implementation Classification (Tier 1 - Deterministic)

**Objective:** Verify correct classification of read-only vs implementation requests.

**Input:**
```
Request: "How does the auth flow work?"
```

**Expected Behavior:**
- Classifies as read-only
- Selects investigation playbook
- Routes to code-tour/rationale

**Acceptance Criteria:**
- [ ] Classified as read-only
- [ ] Investigation playbook selected
- [ ] code-tour/rationale invoked

---

## Scenario 3: Correct Playbook Selection (Tier 1 - Deterministic)

**Objective:** Verify correct primary playbook selection for 4+ request classes.

**Test Cases:**
| Request | Expected Playbook |
|---------|------------------|
| "Add user authentication with JWT" | feature-delivery |
| "Fix null pointer in auth" | bug-fixing |
| "Refactor user service" | refactoring |
| "Optimize database queries" | performance-investigation |

**Acceptance Criteria:**
- [ ] Each request selects correct playbook
- [ ] No overlapping playbooks selected
- [ ] Rigour calibration appropriate

---

## Scenario 4: No Playbook → figure-it-out (Tier 1 - Deterministic)

**Objective:** Verify figure-it-out invoked when no standard playbook fits.

**Input:**
```
Request: "Migrate monolith to microservices with zero downtime, database sharding, service mesh, CI/CD overhaul"
```

**Expected Behavior:**
- No standard playbook matches
- Invokes figure-it-out
- Designs bespoke playbook

**Acceptance Criteria:**
- [ ] No standard playbook selected
- [ ] figure-it-out invoked
- [ ] Bespoke playbook designed

---

## Scenario 5: Risk-Based Rigour Calibration (Tier 1 - Deterministic)

**Objective:** Verify rigour scales with risk, not mandatory tiers.

**Test Cases:**
| Request | Risk | Expected Rigour |
|---------|------|----------------|
| "Update copyright year" | Low | Minimal |
| "Add new API endpoint" | Medium | Standard |
| "Migrate payment provider" | High | Full (architect, arena, jury) |
| "Change encryption algorithm" | Critical | Maximum (all gates) |

**Acceptance Criteria:**
- [ ] Rigour adapts to risk
- [ ] No mandatory Quick/Standard/Advanced
- [ ] User override documented

---

## Scenario 6: Verbatim Checklist Copy (Tier 1 - Deterministic)

**Objective:** Verify playbook steps copied verbatim to checklist.

**Input:**
```
Request: "Add user profile page" (feature-delivery)
```

**Expected Behavior:**
- Checklist contains ALL feature-delivery steps verbatim
- Non-applicable steps marked `skip: <reason>`
- No steps silently omitted

**Acceptance Criteria:**
- [ ] All steps present
- [ ] Skips have explicit reasons
- [ ] No silent omissions

---

## Scenario 7: Explicit Skipped Step Handling (Tier 1 - Deterministic)

**Objective:** Verify skipped steps have explicit reasons.

**Input:**
```
Simple config change (feature-delivery)
```

**Expected Behavior:**
- Blueprint phase marked `skip: Straightforward implementation, no design alternatives`
- Reason explicit and specific

**Acceptance Criteria:**
- [ ] Skip reason explicit
- [ ] Reason specific to task
- [ ] Not generic "not needed"

---

## Scenario 8: Direct Skill Invocation (Tier 1 - Deterministic)

**Objective:** Verify direct skill invocation bypasses full mode routing.

**Input:**
```
User: "Use code-tour to trace the login flow"
```

**Expected Behavior:**
- Executes code-tour directly
- No playbook selection
- No checklist creation
- No rigour calibration

**Acceptance Criteria:**
- [ ] code-tour executed directly
- [ ] No playbook selected
- [ ] No checklist
- [ ] No rigour calibration

---

## Scenario 9: Missing Capability Fallback (Tier 1 - Deterministic)

**Objective:** Verify graceful degradation when host capabilities missing.

**Input:**
```
Request: "Arena this design"
Context: Host cannot spawn parallel agents
```

**Expected Behavior:**
- Falls back to sequential execution
- Documents fallback used
- Still produces synthesized artifact

**Acceptance Criteria:**
- [ ] Sequential fallback used
- [ ] Fallback documented
- [ ] Output quality maintained

---

## Scenario 10: Task Rerouting on New Evidence (Tier 1 - Deterministic)

**Objective:** Verify checklist revision when evidence changes plan.

**Input:**
```
Mid-implementation, discovery reveals blast radius 10x larger
```

**Expected Behavior:**
- Checklist revised with new scope
- Reason for revision documented
- Old plan not mechanically continued

**Acceptance Criteria:**
- [ ] Checklist revised
- [ ] Revision reason documented
- [ ] Old plan not continued

---

## Evaluation Results

| Scenario | Tier | Result | Notes |
|----------|------|--------|-------|
| 1. Trivial Routing | 1 |  |  |
| 2. Read-Only vs Implementation | 1 |  |  |
| 3. Playbook Selection | 1 |  |  |
| 4. figure-it-out Trigger | 1 |  |  |
| 5. Risk-Based Rigour | 1 |  |  |
| 6. Verbatim Checklist | 1 |  |  |
| 7. Explicit Skipped Steps | 1 |  |  |
| 8. Direct Invocation | 1 |  |  |
| 9. Capability Fallback | 1 |  |  |
| 10. Task Rerouting | 1 |  |  |

**Overall Status:** 
- Tier 1: ___/10 PASS
- **Skill Status:** ___