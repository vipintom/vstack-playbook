# Evaluation Scenario: vstack-skill-evaluation

**Skill:** vstack-skill-evaluation
**Lifecycle:** draft
**Evaluation Date:** 2026-11-02
**Evaluator:** Phase 5 automated

---

## Scenario 1: Static Validation (Tier 1 - Deterministic)

**Objective:** Verify structural validator runs and passes.

**Input:**
```
Skill under evaluation
```

**Expected Behavior:**
- Runs: pnpm --filter @vstack/playbook validate
- Verifies frontmatter, required sections, unique IDs, link resolution
- Checks for unbounded loops, missing stop/escalation conditions
- Verifies no proprietary OpenCode APIs in canonical content

**Acceptance Criteria:**
- [ ] Validator runs
- [ ] Frontmatter valid
- [ ] Required sections present
- [ ] Unique IDs
- [ ] Links resolve
- [ ] No unbounded loops
- [ ] Stop/escalation conditions present
- [ ] No proprietary OpenCode APIs

---

## Scenario 2: Trigger Accuracy - Positive Cases (Tier 1 - Deterministic)

**Objective:** Verify skill triggers when it should.

**Input:**
```
Skill: vstack-tdd
Test case: "Fix bug with clear test path"
```

**Expected Behavior:**
- Skill triggers (positive case)
- Records trigger event

**Acceptance Criteria:**
- [ ] Triggers on positive case
- [ ] Trigger recorded

---

## Scenario 3: Trigger Accuracy - Negative Cases (Tier 1 - Deterministic)

**Objective:** Verify skill does NOT trigger when it shouldn't.

**Input:**
```
Skill: vstack-tdd
Test case: "Refactor without behavior change"
```

**Expected Behavior:**
- Skill does NOT trigger
- Does not route to tdd

**Acceptance Criteria:**
- [ ] Does not trigger
- [ ] Correctly rejects

---

## Scenario 4: Trigger Accuracy - Edge Cases (Tier 1 - Deterministic)

**Objective:** Verify edge cases at trigger boundaries.

**Input:**
```
Skill: vstack-debug
Test case: "Debug this" vs "Debug this issue" vs "Diagnose failure"
```

**Expected Behavior:**
- Consistent triggering across variations
- Boundary cases handled correctly

**Acceptance Criteria:**
- [ ] Consistent across variations
- [ ] Boundaries handled correctly

---

## Scenario 5: Procedure Quality - Steps Actionable (Tier 1 - Deterministic)

**Objective:** Verify procedure steps are actionable and produce expected outputs.

**Input:**
```
Skill: vstack-tdd
Procedure step: "Write failing test first"
```

**Expected Behavior:**
- Step is actionable
- Produces expected output (failing test)
- Evidence requirement met

**Acceptance Criteria:**
- [ ] Steps actionable
- [ ] Outputs as expected
- [ ] Evidence produced

---

## Scenario 6: Procedure Quality - Evidence Requirements Met (Tier 1 - Deterministic)

**Objective:** Verify evidence requirements satisfied.

**Input:**
```
Skill: vstack-debug
Procedure: "Read errors completely"
```

**Expected Behavior:**
- Produces evidence (error text, stack trace)
- Evidence requirement met

**Acceptance Criteria:**
- [ ] Evidence produced
- [ ] Requirement met

---

## Scenario 7: Procedure Quality - Stop Conditions Fire (Tier 1 - Deterministic)

**Objective:** Verify stop conditions fire correctly.

**Input:**
```
Skill: vstack-tdd
Condition: Test passes after fix
```

**Expected Behavior:**
- Stop condition fires (test passes, suite green)
- Does not continue indefinitely

**Acceptance Criteria:**
- [ ] Stop condition fires
- [ ] Does not continue indefinitely

---

## Scenario 8: Failure Handling - Retry Bounds (Tier 1 - Deterministic)

**Objective:** Verify retry bounds respected.

**Input:**
```
Skill: vstack-debug
3 failed fix attempts
```

**Expected Behavior:**
- Stops after 3 attempts
- Invokes vstack-unstick
- Does not attempt 4th fix

**Acceptance Criteria:**
- [ ] Stops at 3
- [ ] Invokes unstick
- [ ] No 4th attempt

---

## Scenario 9: Failure Handling - Escalation Triggers (Tier 1 - Deterministic)

**Objective:** Verify escalation triggers at correct thresholds.

**Input:**
```
Skill: vstack-unstick
2 rounds of unstick failed
```

**Expected Behavior:**
- Escalates to user
- Reports attempts, assumptions, evidence
- Does not attempt 3rd round

**Acceptance Criteria:**
- [ ] Escalates at 2 rounds
- [ ] Reports attempts/assumptions/evidence
- [ ] No 3rd round

---

## Scenario 10: Failure Handling - Fallback Behaviour (Tier 1 - Deterministic)

**Objective:** Verify fallback when optional capabilities missing.

**Input:**
```
Skill: vstack-arena
Capability: subagents unavailable
```

**Expected Behavior:**
- Sequential fallback used
- Documents fallback
- Produces correct output

**Acceptance Criteria:**
- [ ] Sequential fallback used
- [ ] Fallback documented
- [ ] Output correct

---

## Scenario 11: Harness Fallbacks - Subagents Unavailable (Tier 1 - Deterministic)

**Objective:** Verify sequential fallback when subagents unavailable.

**Input:**
```
Skill: vstack-swarm
Capability: subagents unavailable
```

**Expected Behavior:**
- Sequential execution
- Same output quality
- Documents fallback

**Acceptance Criteria:**
- [ ] Sequential fallback
- [ ] Output quality maintained
- [ ] Fallback documented

---

## Scenario 12: Harness Fallbacks - Worktrees Unavailable (Tier 1 - Deterministic)

**Objective:** Verify branch/directory fallback when worktrees unavailable.

**Input:**
```
Skill: vstack-best-of-n
Capability: worktrees unavailable
```

**Expected Behavior:**
- Branch/directory isolation used
- Documents fallback
- Candidates isolated

**Acceptance Criteria:**
- [ ] Branch/directory fallback
- [ ] Isolation maintained
- [ ] Fallback documented

---

## Scenario 13: Harness Fallbacks - Persistent Plugin Unavailable (Tier 1 - Deterministic)

**Objective:** Verify project files fallback when plugin unavailable.

**Input:**
```
Skill: vstack-ledger
Capability: persistent plugin unavailable
```

**Expected Behavior:**
- Uses project files (PROGRESS.md)
- Documents fallback
- Functions correctly

**Acceptance Criteria:**
- [ ] Project files fallback
- [ ] Fallback documented
- [ ] Functions correctly

---

## Scenario 14: Cross-Harness Evaluation (Tier 1 - Deterministic)

**Objective:** Verify skill installs and works in multiple harnesses.

**Test Harnesses:**
- OpenCode (clean profile)
- Codex (clean profile)
- Claude Code (clean profile)

**Expected Behavior:**
- Installs via Skills CLI
- Loads and invokes
- Produces expected outputs
- Selective installation works (single skill subset)

**Acceptance Criteria:**
- [ ] OpenCode: loads, invokes, outputs
- [ ] Codex: loads, invokes, outputs
- [ ] Claude Code: loads, invokes, outputs
- [ ] Selective installation works

---

## Scenario 16: Regression Evaluation (Tier 1 - Deterministic)

**Objective:** Verify no regressions from previous evaluation.

**Input:**
```
Current skill version vs previous baseline
```

**Expected Behavior:**
- Compares current results with baseline
- Identifies regressions
- Identifies false positives
- Updates evaluation status and changelog

**Acceptance Criteria:**
- [ ] Comparison done
- [ ] Regressions identified
- [ ] False positives identified
- [ ] Status/changelog updated

---

## Scenario 17: Record Results (Tier 1 - Deterministic)

**Objective:** Verify results stored with full provenance.

**Expected Storage:**
```
evals/results/<skill>-<model>-<harness>-<date>.json
```

**Expected Contents:**
- Scenario ID
- Fixture version
- Model/harness/version
- Date
- Prompts
- Actual evidence
- Deterministic PASS/FAIL
- Qualitative rubric scores
- Evaluator
- Limitations

**Acceptance Criteria:**
- [ ] Stored in correct location
- [ ] All fields present
- [ ] Full provenance

---

## Evaluation Results

| Scenario | Tier | Result | Notes |
|----------|------|--------|-------|
| 1. Static Validation | 1 |  |  |
| 2. Positive Triggers | 1 |  |  |
| 3. Negative Triggers | 1 |  |  |
| 4. Edge Cases | 1 |  |  |
| 5. Steps Actionable | 1 |  |  |
| 6. Evidence Requirements | 1 |  |  |
| 7. Stop Conditions | 1 |  |  |
| 8. Retry Bounds | 1 |  |  |
| 9. Escalation Triggers | 1 |  |  |
| 10. Fallback Behavior | 1 |  |  |
| 11. Subagents Fallback | 1 |  |  |
| 12. Worktrees Fallback | 1 |  |  |
| 13. Plugin Fallback | 1 |  |  |
| 14. Cross-Harness | 1 |  |  |
| 16. Regression | 1 |  |  |
| 17. Results Recording | 1 |  |  |

**Overall Status:** 
- Tier 1: ___/17 PASS
- **Skill Status:** ___