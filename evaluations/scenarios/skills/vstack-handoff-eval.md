# Evaluation Scenario: vstack-handoff

**Skill:** vstack-handoff
**Lifecycle:** draft
**Evaluation Date:** 2026-11-02
**Evaluator:** Phase 5 automated

---

## Scenario 1: Handoff Package Complete (Tier 1 - Deterministic)

**Objective:** Verify all 10 required handoff items included.

**Input:**
```
Worker completing task
```

**Expected Package Contents:**
- Objective: What was the goal?
- Scope: What was included/excluded?
- Completed: What was done with evidence?
- Incomplete: What remains?
- Next action: Exact next step
- Blockers: Dependencies, decisions needed
- Key facts: Paths, commands, versions, constraints
- Decisions: Important choices made
- Failed approaches: What failed and why
- Verification status: Checks run, results, remaining

**Acceptance Criteria:**
- [ ] All 10 items present
- [ ] Each item complete
- [ ] Evidence referenced

---

## Scenario 2: Completeness Validation (Tier 1 - Deterministic)

**Objective:** Verify completeness validation before transfer.

**Input:**
```
Handoff package prepared
```

**Expected Behavior:**
- All contract items addressed
- Evidence referenced
- No ambiguous next steps

**Acceptance Criteria:**
- [ ] All contract items addressed
- [ ] Evidence referenced
- [ ] Next steps unambiguous

---

## Scenario 3: Context Transfer (Tier 1 - Deterministic)

**Objective:** Verify context transferred via PROGRESS.md and runtime state.

**Input:**
```
Handoff to next session/agent
```

**Expected Behavior:**
- Updates PROGRESS.md
- Updates runtime task state (if plugin)
- Briefs recipient (async or sync)

**Acceptance Criteria:**
- [ ] PROGRESS.md updated
- [ ] Runtime state updated
- [ ] Recipient briefed

---

## Scenario 4: Recipient Validation (Tier 1 - Deterministic)

**Objective:** Verify recipient validates understanding.

**Input:**
```
Recipient receives handoff
```

**Expected Behavior:**
- Runs vstack-catchup or vstack-session-pickup
- Confirms understanding
- Begins from exact next action

**Acceptance Criteria:**
- [ ] Runs catchup/pickup
- [ ] Confirms understanding
- [ ] Begins from exact next action

---

## Scenario 5: Worker-to-Lead Handoff (Tier 1 - Deterministic)

**Objective:** Verify worker-to-lead handoff structure.

**Input:**
```
Worker completes task
```

**Expected Behavior:**
- Package includes: objective, scope, completed+evidence, incomplete, next action, blockers, key facts, decisions, failed approaches, verification status
- Lead can articulate next action
- Lead confirms understanding

**Acceptance Criteria:**
- [ ] Package complete
- [ ] Lead articulates next action
- [ ] Lead confirms understanding

---

## Scenario 6: Session-to-Session Handoff (Tier 1 - Deterministic)

**Objective:** Verify session-to-session handoff.

**Input:**
```
Session ending with work in progress
```

**Expected Behavior:**
- Updates PROGRESS.md
- Records exact next action
- Documents blockers, open questions, key facts
- Next session begins from exact next action

**Acceptance Criteria:**
- [ ] PROGRESS.md updated
- [ ] Next action exact
- [ ] Blockers/questions documented
- [ ] Next session starts correctly

---

## Scenario 6: Role Switch (Tier 1 - Deterministic)

**Objective:** Verify Builder → Reviewer handoff.

**Input:**
```
Builder completes implementation, Reviewer starts
```

**Expected Behavior:**
- Builder provides: diffs, evidence, test results
- Reviewer validates understanding
- Reviewer begins review from exact state

**Acceptance Criteria:**
- [ ] Diffs + evidence + test results provided
- [ ] Reviewer validates
- [ ] Review starts correctly

---

## Scenario 7: Fallback Without Plugin (Tier 1 - Deterministic)

**Objective:** Verify fallback without plugin.

**Input:**
```
No plugin available
```

**Expected Behavior:**
- Uses PROGRESS.md + verbal/written brief
- Documents fallback

**Acceptance Criteria:**
- [ ] PROGRESS.md used
- [ ] Verbal/written brief
- [ ] Fallback documented

---

## Scenario 8: Fallback Without PROGRESS.md (Tier 1 - Deterministic)

**Objective:** Verify fallback without PROGRESS.md.

**Input:**
```
No PROGRESS.md file
```

**Expected Behavior:**
- Reconstructs from git history and memory
- Documents reconstruction

**Acceptance Criteria:**
- [ ] Reconstructs from git
- [ ] Documents reconstruction

---

## Evaluation Results

| Scenario | Tier | Result | Notes |
|----------|------|--------|-------|
| 1. Package Complete | 1 |  |  |
| 2. Completeness Validation | 1 |  |  |
| 3. Context Transfer | 1 |  |  |
| 4. Recipient Validation | 1 |  |  |
| 5. Worker-to-Lead | 1 |  |  |
| 6. Session-to-Session | 1 |  |  |
| 6. Role Switch | 1 |  |  |
| 7. Plugin Fallback | 1 |  |  |
| 8. PROGRESS.md Fallback | 1 |  |  |

**Overall Status:** 
- Tier 1: ___/9 PASS
- **Skill Status:** ___