# Evaluation Scenario: red-team

**Skill:** red-team
**Lifecycle:** draft
**Evaluation Date:** 2026-11-02
**Evaluator:** Phase 5 automated

---

## Scenario 1: Frame with Rubric and Isolation (Tier 1 - Deterministic)

**Objective:** Verify Frame phase defines artifact, rubric, runners, isolation.

**Input:**
```
Task: Design UserPreferences API
```

**Expected Behavior:**
- Artifact: OpenAPI spec + handler signatures
- Rubric: 3-6 concrete gradeable criteria (REST conventions, extensibility, type safety, migration path, documentation clarity)
- Runners: judgment model + fast model from DIFFERENT families
- Isolation: worktree or directory per candidate

**Acceptance Criteria:**
- [ ] Artifact specified
- [ ] Rubric 3-6 criteria, gradeable
- [ ] Runners from different model families
- [ ] Isolation mechanism defined

---

## Scenario 2: Rubric Hidden from Candidates (Tier 1 - Deterministic)

**Objective:** Verify candidates don't see rubric.

**Input:**
```
Arena execution with rubric defined
```

**Expected Behavior:**
- Candidates receive: task only (artifact spec)
- Candidates do NOT see rubric
- Prevents gaming

**Acceptance Criteria:**
- [ ] Candidates receive task only
- [ ] Rubric not visible to candidates
- [ ] Documented in procedure

---

## Scenario 3: Fan Out - N Parallel Candidates (Tier 1 - Deterministic)

**Objective:** Verify N candidates spawned in parallel with own outputs.

**Input:**
```
2+ candidates configured
```

**Expected Behavior:**
- All N spawned in ONE message (parallel)
- Each candidate has own output path
- Runs in background (harness-dependent)
- Own writable workspace

**Acceptance Criteria:**
- [ ] Single parallel dispatch
- [ ] Own output paths
- [ ] Background execution
- [ ] Isolation maintained

---

## Scenario 4: Cross-Judge from Different Family (Tier 1 - Deterministic)

**Objective:** Verify cross-judge from different model family.

**Input:**
```
Runners: claude (judgment), grok (fast)
```

**Expected Behavior:**
- Cross-judge from DIFFERENT family than runners
- Receives: all candidate outputs, rubric, task
- Scores each candidate against each criterion
- Recommends base candidate with reasoning

**Acceptance Criteria:**
- [ ] Cross-judge from different family
- [ ] Scores against each rubric criterion
- [ ] Recommends base with reasoning

---

## Scenario 5: Criterion-by-Criterion Base Selection (Tier 1 - Deterministic)

**Objective:** Verify base selection is criterion-by-criterion.

**Input:**
```
Cross-judge scores complete
```

**Expected Behavior:**
- Compares candidates on EACH rubric item
- Agreement confirms base
- Disagreement signals bias/rubric issue, resolved explicitly

**Acceptance Criteria:**
- [ ] Criterion-by-criterion comparison
- [ ] Agreement confirms base
- [ ] Disagreement explicitly resolved

---

## Scenario 6: Grafting Not Mechanical Paste (Tier 1 - Deterministic)

**Objective:** Verify grafts are selective hand-folding.

**Input:**
```
Loser candidates have strong aspects
```

**Expected Behavior:**
- Walks each loser for 1-2 specific things to steal
- Folds by hand, not mechanical paste
- Each graft: what, from which loser, why improves base
- Rejections documented with reason

**Acceptance Criteria:**
- [ ] 1-2 specific things per loser
- [ ] Hand-folded (not mechanical)
- [ ] Graft rationale documented
- [ ] Rejections documented

---

## Scenario 7: Verification on Synthesized Artifact (Tier 1 - Deterministic)

**Objective:** Verify prove-it-works on synthesized result.

**Input:**
```
Synthesized artifact ready
```

**Expected Behavior:**
- Runs verification appropriate to artifact type (tests, typecheck, lint, manual)
- If verification fails: diagnoses, iterates, or reports BLOCKED
- Does NOT ship unverified synthesis

**Acceptance Criteria:**
- [ ] Verification runs on synthesized artifact
- [ ] Failure = diagnose/iterate/BLOCKED
- [ ] No unverified shipping

---

## Scenario 8: Synthesis Note Complete (Tier 1 - Deterministic)

**Objective:** Verify synthesis note includes all required elements.

**Expected Elements:**
- Base candidate
- Why chosen
- Judge verdict
- Grafts (what/from/why)
- Rejections (what/why)
- Convergence notes
- Verification result

**Acceptance Criteria:**
- [ ] All 7 elements present
- [ ] Specific and actionable

---

## Scenario 9: Host Cannot Dispatch Parallel (Tier 1 - Deterministic)

**Objective:** Verify sequential fallback documented.

**Input:**
```
Host cannot spawn parallel agents
```

**Expected Behavior:**
- Sequential fallback
- Documents fallback used
- Still produces synthesized artifact

**Acceptance Criteria:**
- [ ] Sequential fallback used
- [ ] Fallback documented
- [ ] Output produced

---

## Evaluation Results

| Scenario | Tier | Result | Notes |
|----------|------|--------|-------|
| 1. Frame Complete | 1 |  |  |
| 2. Rubric Hidden | 1 |  |  |
| 3. Parallel Fan Out | 1 |  |  |
| 4. Cross-Judge Different Family | 1 |  |  |
| 5. Criterion-by-Criterion | 1 |  |  |
| 6. Grafting Selective | 1 |  |  |
| 7. Verification on Synthesis | 1 |  |  |
| 8. Synthesis Note Complete | 1 |  |  |
| 9. Sequential Fallback | 1 |  |  |

**Overall Status:** 
- Tier 1: ___/9 PASS
- **Skill Status:** ___