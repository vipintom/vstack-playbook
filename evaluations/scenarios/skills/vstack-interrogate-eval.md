# Evaluation Scenario: red-team

**Skill:** red-team
**Lifecycle:** draft
**Evaluation Date:** 2026-11-02
**Evaluator:** Phase 5 automated

---

## Scenario 1: Intent Restatement Accuracy (Tier 1 - Deterministic)

**Objective:** Verify intent restated from user/commits/PR.

**Input:**
```
Scope: branch diff + working tree
User message: "Refactor auth to use JWT"
Commits: refactor auth module
PR: "Switch to JWT for stateless auth"
```

**Expected Behavior:**
- Restates intent: "Extract JWT validation into separate module, preserve all current behaviour"
- Asks user if unclear
- Records: scope, intent

**Acceptance Criteria:**
- [ ] Intent restated in own words
- [ ] Sources: user message, commits, PR
- [ ] Asks if unclear
- [ ] Scope + intent recorded

---

## Scenario 2: Adversary Brief Correct (Tier 1 - Deterministic)

**Objective:** Verify adversaries receive correct brief.

**Input:**
```
Scope and intent defined
```

**Expected Behavior:**
- Adversary brief: "Break this change. Prove each finding with a run against real code (failing test, repro script, command output). Keep repros in own worktree. Report: title, exact command, output, required output. Leave out anything not run."
- Minimum 2 adversaries
- From adversary capability tier
- Each gets scope, intent, brief
- Each in isolation with copy of uncommitted changes

**Acceptance Criteria:**
- [ ] Brief matches specification exactly
- [ ] Minimum 2 adversaries
- [ ] Isolation with copy of changes
- [ ] Capability tier used

---

## Scenario 3: Verification Rerun Keeps Only Proven (Tier 1 - Deterministic)

**Objective:** Verify findings rerun in clean environment.

**Input:**
```
Adversary 1: Token refresh race (command, output)
Adversary 2: Same race + missing expiry check
Adversary 1: 3 style findings (no behavioural impact)
```

**Expected Behavior:**
- Reruns each finding's exact command in clean environment
- Keeps ONLY if output shows failure breaking intent
- Drops: unreproducible, doesn't break intent, style-only

**Acceptance Criteria:**
- [ ] Each finding rerun in clean env
- [ ] Only intent-breaking kept
- [ ] Unreproducible dropped
- [ ] Non-behavioural dropped
- [ ] Style-only dropped

---

## Scenario 4: Dropped Findings Documented Per Adversary (Tier 1 - Deterministic)

**Objective:** Verify dropped findings documented per adversary.

**Input:**
```
Adversary 1 drops 3 style findings
Adversary 2 drops 1 unreproducible
```

**Expected Behavior:**
- Dropped section: per adversary, count + reason
- Reasons: unreproducible / doesn't break intent / style-only

**Acceptance Criteria:**
- [ ] Per adversary count
- [ ] Per adversary reasons
- [ ] Categories: unreproducible / doesn't break intent / style-only

---

## Scenario 5: Multiple Adversaries Merge Shared Root Cause (Tier 1 - Deterministic)

**Objective:** Verify shared root cause merged across adversaries.

**Input:**
```
Adversary 1: Token refresh race
Adversary 2: Same race + missing expiry check
```

**Expected Behavior:**
- Merges shared root cause (race condition)
- Reports as single finding with multiple adversaries
- Distinct findings kept separate

**Acceptance Criteria:**
- [ ] Shared root cause merged
- [ ] Single finding for shared cause
- [ ] Adversaries listed per finding

---

## Scenario 6: Output Format Complete (Tier 1 - Deterministic)

**Objective:** Verify output has all required sections.

**Expected Output:**
- Intent (restated)
- Findings (command, output, how breaks intent, adversaries)
- Dropped (per adversary: count + why)
- "No verified findings" if none survive

**Acceptance Criteria:**
- [ ] Intent present
- [ ] Findings with all fields
- [ ] Dropped per adversary
- [ ] "No verified findings" when applicable

---

## Scenario 7: Host Cannot Dispatch Parallel (Tier 1 - Deterministic)

**Objective:** Verify sequential fallback.

**Input:**
```
Host cannot spawn parallel adversaries
```

**Expected Behavior:**
- Sequential fallback
- Documents fallback
- Still produces output

**Acceptance Criteria:**
- [ ] Sequential fallback
- [ ] Fallback documented
- [ ] Output produced

---

## Scenario 8: No Verified Findings (Tier 1 - Deterministic)

**Objective:** Verify correct output when no findings survive.

**Input:**
```
All adversary findings dropped on verification
```

**Expected Behavior:**
- Output: "No verified findings"
- Dropped section still present
- Intent still present

**Acceptance Criteria:**
- [ ] "No verified findings" reported
- [ ] Dropped documented
- [ ] Intent present

---

## Evaluation Results

| Scenario | Tier | Result | Notes |
|----------|------|--------|-------|
| 1. Intent Restatement | 1 |  |  |
| 2. Adversary Brief | 1 |  |  |
| 3. Verification Rerun | 1 |  |  |
| 4. Dropped Documented | 1 |  |  |
| 5. Shared Root Cause Merged | 1 |  |  |
| 6. Output Format | 1 |  |  |
| 7. Sequential Fallback | 1 |  |  |
| 8. No Verified Findings | 1 |  |  |

**Overall Status:** 
- Tier 1: ___/8 PASS
- **Skill Status:** ___