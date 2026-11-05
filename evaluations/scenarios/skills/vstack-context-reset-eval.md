# Evaluation Scenario: resume

**Skill:** resume
**Lifecycle:** draft
**Evaluation Date:** 2026-11-02
**Evaluator:** Phase 5 automated

---

## Scenario 1: Boundary Preserve - Complete Summary (Tier 1 - Deterministic)

**Objective:** Verify all 6 preservation steps at boundary.

**Input:**
```
Task complete, preparing for review
```

**Expected Behavior:**
1. Summarizes completed work (what, evidence, decisions)
2. Records current state (task status, blockers, partial progress)
3. Documents decisions (chosen, why, alternatives rejected)
4. Lists open questions (unknowns, pending decisions, risks)
5. Defines next actions (specific, actionable, ordered)
6. Stores in project memory or handoff document

**Acceptance Criteria:**
- [ ] All 6 steps executed
- [ ] Each step produces output
- [ ] Stored in memory/handoff

---

## Scenario 2: Resumption Restore - Full Restore (Tier 1 - Deterministic)

**Objective:** Verify full restoration from handoff/memory.

**Input:**
```
Handoff document with objective, completed, decisions, open items
```

**Expected Behavior:**
1. Reads handoff/memory
2. Verifies current state (code vs recorded)
3. Validates assumptions (quick checks)
4. Confirms next action
5. Proceeds from documented next step

**Acceptance Criteria:**
- [ ] Handoff read
- [ ] State verified
- [ ] Assumptions validated
- [ ] Next action confirmed
- [ ] Proceeds correctly

---

## Scenario 3: State Mismatch on Resumption (Tier 1 - Deterministic)

**Objective:** Verify investigation on state mismatch.

**Input:**
```
Handoff says task complete, but code shows incomplete
```

**Expected Behavior:**
- Investigates mismatch
- Does not assume handoff correct
- Documents discrepancy

**Acceptance Criteria:**
- [ ] Investigates
- [ ] Does not assume
- [ ] Documents discrepancy

---

## Scenario 4: Critical Decision Undocumented (Tier 1 - Deterministic)

**Objective:** Verify escalation on undocumented critical decision.

**Input:**
```
Critical architectural decision made but not in handoff
```

**Expected Behavior:**
- Escalates to Lead
- Does not proceed without clarification

**Acceptance Criteria:**
- [ ] Escalates to Lead
- [ ] Does not proceed

---

## Scenario 4: Lessons Captured (Tier 1 - Deterministic)

**Objective:** Verify lessons captured at boundaries.

**Input:**
```
Interruption with failed approach
```

**Expected Behavior:**
- Captures pattern from failure
- Records in lessons or project memory
- Links to context-reset entry

**Acceptance Criteria:**
- [ ] Pattern captured
- [ ] Recorded in lessons/memory
- [ ] Linked to context-reset

---

## Scenario 5: Handoff Enables Fresh Agent (Tier 1 - Deterministic)

**Objective:** Verify handoff sufficient for fresh agent.

**Input:**
```
Fresh agent reads handoff
```

**Expected Behavior:**
- Agent can continue without re-discovery
- No completed work re-done
- Understands objective, completed, decisions, open, next

**Acceptance Criteria:**
- [ ] No re-discovery needed
- [ ] No re-work
- [ ] Full understanding

---

## Scenario 6: Resumption Verifies Actual State (Tier 1 - Deterministic)

**Objective:** Verify resumption checks actual code vs recorded state.

**Input:**
```
Recorded: task complete, but tests failing
```

**Expected Behavior:**
- Runs quick checks
- Identifies actual state
- Does not trust recorded state blindly

**Acceptance Criteria:**
- [ ] Quick checks run
- [ ] Actual state identified
- [ ] Doesn't trust blindly

---

## Scenario 7: Next Action Specific and Actionable (Tier 1 - Deterministic)

**Objective:** Verify next action is concrete.

**Input:**
```
Handoff: "Continue implementation"
```

**Expected Behavior:**
- Rejects vague next action
- Requires: "Implement login endpoint in auth/controller.ts:45"
- Confirms exact next step

**Acceptance Criteria:**
- [ ] Next action specific
- [ ] Next action actionable
- [ ] Ordered correctly

---

## Scenario 8: Project Memory Integration (Tier 1 - Deterministic)

**Objective:** Verify project memory storage/retrieval.

**Input:**
```
Plugin available for project memory
```

**Expected Behavior:**
- Stores in project memory at boundary
- Retrieves on resumption
- Uses memory plugin if available

**Acceptance Criteria:**
- [ ] Stores in memory
- [ ] Retrieves from memory
- [ ] Uses plugin if available

---

## Scenario 8: Fallback Without Plugin (Tier 1 - Deterministic)

**Objective:** Verify fallback without project memory plugin.

**Input:**
```
No project memory plugin
```

**Expected Behavior:**
- Uses handoff document
- Documents fallback used

**Acceptance Criteria:**
- [ ] Uses handoff document
- [ ] Fallback documented

---

## Evaluation Results

| Scenario | Tier | Result | Notes |
|----------|------|--------|-------|
| 1. Preserve Complete | 1 |  |  |
| 2. Restore Complete | 1 |  |  |
| 3. State Mismatch | 1 |  |  |
| 4. Undocumented Decision | 1 |  |  |
| 4. Lessons Captured | 1 |  |  |
| 5. Fresh Agent Ready | 1 |  |  |
| 6. State Verification | 1 |  |  |
| 7. Specific Next Action | 1 |  |  |
| 8. Memory Integration | 1 |  |  |
| 8. Plugin Fallback | 1 |  |  |

**Overall Status:** 
- Tier 1: ___/10 PASS
- **Skill Status:** ___