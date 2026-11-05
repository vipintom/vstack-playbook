# Evaluation Scenario: report

**Skill:** report
**Lifecycle:** draft
**Evaluation Date:** 2026-11-02
**Evaluator:** Phase 5 automated

---

## Scenario 1: Audience-Specific Explanation (Tier 1 - Deterministic)

**Objective:** Verify audience determines explanation structure.

**Test Cases:**
| Audience | Expected Focus |
|----------|----------------|
| Developer | Implementation details, code refs |
| Reviewer | Risks, changes, verification |
| Stakeholder | Impact, trade-offs, timeline |

**Input:**
```
Findings from code-tour: auth flow through middleware
Audience: Developer
```

**Expected Behavior:**
- Selects audience-appropriate focus
- Produces explanation matching audience

**Acceptance Criteria:**
- [ ] Developer = implementation details + code refs
- [ ] Reviewer = risks + changes + verification
- [ ] Stakeholder = impact + trade-offs + timeline

---

## Scenario 2: Key Findings Selection (Tier 1 - Deterministic)

**Objective:** Verify decision-relevant findings selected.

**Input:**
```
Findings: 20 items from investigation
Relevant: 5 items for decision
Dead ends: 3 items
Unknowns: 2 items
```

**Expected Behavior:**
- Focuses on decision-relevant (5 items)
- Omits exploratory dead ends (3 items)
- Includes unknowns and assumptions (2 items)

**Acceptance Criteria:**
- [ ] Decision-relevant selected
- [ ] Dead ends omitted
- [ ] Unknowns included
- [ ] Assumptions included

---

## Scenario 3: 5-Section Structure (Tier 1 - Deterministic)

**Objective:** Verify 5-section output format.

**Input:**
```
Findings to communicate
```

**Expected Output Sections:**
1. Context: what investigated and why
2. Key Findings: observed facts with source refs
3. Inferences: labeled with confidence
4. Unknowns: explicitly stated
5. Implications: for current task/decision

**Acceptance Criteria:**
- [ ] Context section
- [ ] Key Findings with sources
- [ ] Inferences labeled + confidence
- [ ] Unknowns explicit
- [ ] Implications for decision

---

## Scenario 4: Source Grounding (Tier 1 - Deterministic)

**Objective:** Verify all claims have source citations.

**Input:**
```
Explanation with claims
```

**Expected Behavior:**
- Every factual claim has file:line or evidence reference
- Consistent citation format
- Links to code/commits/evidence

**Acceptance Criteria:**
- [ ] Every claim has source
- [ ] Consistent format
- [ ] Links to evidence

---

## Scenario 4: Conciseness (Tier 1 - Deterministic)

**Objective:** Verify concise, lead-with-conclusion style.

**Input:**
```
Complex findings to communicate
```

**Expected Behavior:**
- Leads with conclusion/implication
- Supports with evidence
- Avoids narrative fluff
- Time-boxed (10-20 min)

**Acceptance Criteria:**
- [ ] Leads with conclusion
- [ ] Evidence supports
- [ ] No fluff
- [ ] Time-boxed

---

## Scenario 5: Escalation - Critical Finding (Tier 1 - Deterministic)

**Objective:** Verify escalation for critical unexplained findings.

**Input:**
```
Critical finding cannot be explained
```

**Expected Behavior:**
- Escalates to Lead
- Does not fabricate explanation

**Acceptance Criteria:**
- [ ] Escalates to Lead
- [ ] Does not fabricate

---

## Scenario 5: Audience Needs More Detail (Tier 1 - Deterministic)

**Objective:** Verify appendix/deep-dive for detail requests.

**Input:**
```
Audience requests more detail
```

**Expected Behavior:**
- Provides appendix or deep-dive reference
- Does not bloat main explanation

**Acceptance Criteria:**
- [ ] Appendix provided
- [ ] Main explanation concise
- [ ] Reference available

---

## Scenario 6: Fallback - No Formal Explanation (Tier 1 - Deterministic)

**Objective:** Verify fallback shares raw notes with caveats.

**Input:**
```
No time for formal explanation
```

**Expected Behavior:**
- Shares raw discovery notes
- Adds caveats
- Documents fallback

**Acceptance Criteria:**
- [ ] Raw notes shared
- [ ] Caveats added
- [ ] Fallback documented

---

## Scenario 6: Dependencies - code-tour/rationale/impact (Tier 1 - Deterministic)

**Objective:** Verify correct skill dependencies.

**Expected Behavior:**
- code-tour provides facts
- rationale provides rationale
- impact provides impact
- report consumes all three

**Acceptance Criteria:**
- [ ] Consumes how findings
- [ ] Consumes why findings
- [ ] Consumes blast-radius findings
- [ ] Produces communication artifact

---

## Scenario 7: Related Skills - Review Loop/Ledger (Tier 1 - Deterministic)

**Objective:** Verify related skill routing.

**Expected Behavior:**
- review consumes explanations
- decisions consumes decision records
- report produces for both

**Acceptance Criteria:**
- [ ] Review loop consumes
- [ ] Ledger consumes
- [ ] Produces for both

---

## Evaluation Results

| Scenario | Tier | Result | Notes |
|----------|------|--------|-------|
| 1. Audience-Specific | 1 |  |  |
| 2. Key Findings Selection | 1 |  |  |
| 3. 5-Section Structure | 1 |  |  |
| 4. Source Grounding | 1 |  |  |
| 4. Conciseness | 1 |  |  |
| 5. Critical Escalation | 1 |  |  |
| 5. Detail Appendix | 1 |  |  |
| 6. Fallback Raw Notes | 1 |  |  |
| 6. Dependencies | 1 |  |  |
| 7. Related Skills | 1 |  |  |

**Overall Status:** 
- Tier 1: ___/10 PASS
- **Skill Status:** ___