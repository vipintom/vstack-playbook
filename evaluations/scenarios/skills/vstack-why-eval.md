# Evaluation Scenario: vstack-why

**Skill:** vstack-why
**Lifecycle:** draft
**Evaluation Date:** 2026-11-02
**Evaluator:** Phase 5 automated

---

## Scenario 1: All 7 Categories Investigated (Tier 1 - Deterministic)

**Objective:** Verify all 7 evidence categories are investigated when available.

**Input:**
```
Request: "Why was the users table indexed on email only?"
Target: schema.sql:42, commit a1b2c3d
```

**Expected Behavior:**
- Source Control: ALWAYS spawned (git blame, log, PR numbers)
- Issue Tracker: Spawned if available
- Long-form Docs: Spawned if available
- Real-time Chat: Spawned if available
- Infra Observability: Spawned if available
- Error Tracking: Spawned if available
- Product Analytics: Spawned if available
- Skip justifications documented for unavailable

**Acceptance Criteria:**
- [ ] Source Control always spawned
- [ ] Available categories spawned
- [ ] Unavailable categories documented with justification
- [ ] No category silently skipped

---

## Scenario 2: Code Anchor Building (Tier 1 - Deterministic)

**Objective:** Verify code anchor built from git blame, log, PR numbers.

**Input:**
```
Request: "Why is circuit breaker threshold 5 failures in 10 seconds?"
Target: resilience.ts:15
```

**Expected Behavior:**
- git blame on target lines → commit SHAs, authors, dates
- git log --oneline on file → relevant commits
- PR numbers identified from commit messages
- All anchors recorded before spawning investigators

**Acceptance Criteria:**
- [ ] git blame executed
- [ ] git log executed
- [ ] PR numbers identified
- [ ] Anchors recorded before spawning

---

## Scenario 3: Epistemics Framework Applied (Tier 1 - Deterministic)

**Objective:** Verify synthesizer separates Observations/Inferences/Hypotheses/Unknowns.

**Input:**
```
Request: "Why was Redis chosen over in-memory cache?"
```

**Expected Behavior:**
- Observations: Directly verified facts (ADR-005, commit messages)
- Inferences: Logical conclusions (scaling concerns drove choice)
- Hypotheses: Plausible but unproven (team preference?)
- Unknowns: Explicitly listed (no load test data found)
- Confidence: High/Medium/Low per claim

**Acceptance Criteria:**
- [ ] Observations separated from Inferences
- [ ] Inferences separated from Hypotheses
- [ ] Unknowns explicitly listed
- [ ] Confidence per claim (High/Medium/Low)

---

## Scenario 4: Preserve/Change/Avoid/Risk Output (Tier 1 - Deterministic)

**Objective:** Verify planning constraints produced when precursor to change.

**Input:**
```
Request: "Why is the API rate limit 100/min?"
Context: Precursor to increasing limit
```

**Expected Behavior:**
- Preserve: Invariants that must hold (fairness, abuse prevention)
- Change: What evidence suggests changing (user complaints)
- Avoid: Patterns evidence warns against (unlimited)
- Risk: Uncertainties (traffic spike impact unknown)

**Acceptance Criteria:**
- [ ] Preserve section present
- [ ] Change section present
- [ ] Avoid section present
- [ ] Risk section present

---

## Scenario 5: Source Control Always Spawned (Tier 1 - Deterministic)

**Objective:** Verify Source Control category mandatory.

**Input:**
```
Request: "Why does X work this way?"
Context: No other MCPs available
```

**Expected Behavior:**
- Source Control investigator spawned
- Other categories skipped with justification
- Findings from git only

**Acceptance Criteria:**
- [ ] Source Control always spawned
- [ ] Other skips documented
- [ ] Output based on available evidence

---

## Scenario 5: Null Results Documented (Tier 1 - Deterministic)

**Objective:** Verify null results from categories are documented.

**Input:**
```
Request: "Why was this design chosen?"
Context: No ADRs, no chat history, no analytics
```

**Expected Behavior:**
- Source Control: findings from git
- Other categories: "No data available" documented
- What We Don't Know: lists all gaps

**Acceptance Criteria:**
- [ ] Null results in What We Found
- [ ] Gaps in What We Don't Know
- [ ] No silent omissions

---

## Scenario 6: Confidence Language Preserved (Tier 2 - Qualitative)

**Objective:** Verify confidence separation in output.

**Input:**
```
Request: "Why was this architectural pattern chosen?"
```

**Expected Behavior:**
- Output uses: "We observed", "This suggests", "Possible that", "Unknown"
- No "definitely", "certainly", "proven" without evidence
- Confidence Summary section present

**Acceptance Criteria:**
- [ ] Language reflects confidence levels
- [ ] Confidence Summary present
- [ ] No overconfident claims

---

## Evaluation Results

| Scenario | Tier | Result | Notes |
|----------|------|--------|-------|
| 1. 7 Categories | 1 |  |  |
| 2. Code Anchor | 1 |  |  |
| 3. Epistemics Framework | 1 |  |  |
| 4. Preserve/Change/Avoid/Risk | 1 |  |  |
| 5. Source Control Mandatory | 1 |  |  |
| 6. Null Results | 1 |  |  |
| 7. Confidence Language | 2 |  |  |

**Overall Status:** 
- Tier 1: ___/6 PASS
- Tier 2: ___/1 PASS
- **Skill Status:** ___