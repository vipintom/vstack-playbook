# Evaluation Scenario: sharpen

**Skill:** sharpen
**Lifecycle:** draft
**Evaluation Date:** 2026-11-02
**Evaluator:** Phase 5 automated

---

## Scenario 1: Restates Request (Tier 1 - Deterministic)

**Objective:** Verify request restated in own words.

**Input:**
```
User: "Make the dashboard faster"
```

**Expected Behavior:**
- Restates: "Improve dashboard load performance"
- Does not just repeat user words

**Acceptance Criteria:**
- [ ] Restated in own words
- [ ] Not just repeated

---

## Scenario 2: Missing Pieces Identified (Tier 1 - Deterministic)

**Objective:** Verify all missing pieces identified.

**Input:**
```
"Make it faster"
```

**Expected Missing Pieces:**
- What is the specific problem? (load time? render time? API latency?)
- What does "done" look like? (P95 < 200ms? user perception?)
- Constraints? (time, scope, risk, compatibility)
- Out of scope? (backend redesign? new hardware?)

**Acceptance Criteria:**
- [ ] Specific problem identified
- [ ] Acceptance criteria defined
- [ ] Constraints identified
- [ ] Out of scope defined

---

## Scenario 3: Sharpened Version Proposed (Tier 1 - Deterministic)

**Objective:** Verify sharpened version includes all required elements.

**Input:**
```
Original: "Fix the slow dashboard"
```

**Expected Sharpened Version:**
- Clear problem statement: "Dashboard P95 load time > 3s"
- 3-5 testable acceptance criteria: "P95 < 500ms", "no layout shift", "API P95 < 100ms"
- Explicit scope boundaries: "Dashboard only, not API"
- Risk level: Medium

**Acceptance Criteria:**
- [ ] Clear problem statement
- [ ] 3-5 testable criteria
- [ ] Explicit scope boundaries
- [ ] Risk level assessed

---

## Scenario 4: User Confirmation (Tier 1 - Deterministic)

**Objective:** Verify confirmation with user or assumptions documented.

**Test Cases:**
| User Available | Expected Behavior |
|----------------|-------------------|
| Yes | Confirms with user |
| No | Documents assumptions |

**Acceptance Criteria:**
- [ ] Confirms if user available
- [ ] Documents assumptions if unavailable
- [ ] Does not proceed without one

---

## Scenario 4: Records Sharpened Request (Tier 1 - Deterministic)

**Objective:** Verify sharpened request recorded as delivery objective.

**Input:**
```
Sharpened: "Dashboard P95 < 500ms, criteria: P95 < 500ms, no layout shift, API < 100ms"
```

**Expected Behavior:**
- Records as delivery objective
- Used for subsequent planning

**Acceptance Criteria:**
- [ ] Recorded as objective
- [ ] Used for planning

---

## Scenario 5: Escalation - User Cannot Clarify (Tier 1 - Deterministic)

**Objective:** Verify escalation when user cannot clarify.

**Input:**
```
User: "I don't know, just make it faster"
```

**Expected Behavior:**
- Documents assumptions
- Proceeds with code-tour/rationale discovery
- Does not stall indefinitely

**Acceptance Criteria:**
- [ ] Assumptions documented
- [ ] Proceeds with discovery
- [ ] Does not stall

---

## Scenario 6: Escalation - Fundamental Ambiguity (Tier 1 - Deterministic)

**Objective:** Verify escalation on fundamental ambiguity.

**Input:**
```
User: "Make it better" (no specifics even after probing)
```

**Expected Behavior:**
- Escalates to human decision
- Documents fundamental ambiguity
- Does not guess

**Acceptance Criteria:**
- [ ] Escalates to human
- [ ] Documents ambiguity
- [ ] Does not guess

---

## Scenario 6: Related Skills (Tier 1 - Deterministic)

**Objective:** Verify related skill references.

**Expected Behavior:**
- References code-tour for discovery
- References plan for planning
- References route for context

**Acceptance Criteria:**
- [ ] References how
- [ ] References plan-loop
- [ ] References mode

---

## Evaluation Results

| Scenario | Tier | Result | Notes |
|----------|------|--------|-------|
| 1. Restates Request | 1 |  |  |
| 2. Missing Pieces | 1 |  |  |
| 3. Sharpened Version | 1 |  |  |
| 4. User Confirmation | 1 |  |  |
| 4. Records Objective | 1 |  |  |
| 5. User Cannot Clarify | 1 |  |  |
| 6. Fundamental Ambiguity | 1 |  |  |
| 6. Related Skills | 1 |  |  |

**Overall Status:** 
- Tier 1: ___/8 PASS
- **Skill Status:** ___