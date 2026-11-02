# Evaluation Scenario: vstack-principles

**Skill:** vstack-principles
**Lifecycle:** draft
**Evaluation Date:** 2026-11-02
**Evaluator:** Phase 5 automated

---

## Scenario 1: Principles Applied in Order (Tier 1 - Deterministic)

**Objective:** Verify 10 principles applied in order during decision.

**Input:**
```
Decision: Choose implementation approach
```

**Expected Behavior:**
1. Harness independence first
2. Procedures over vague instructions
3. Flexible workflows
4. Loops first
5. Small team
6. Evidence before completion
7. Independent challenge
8. Runtime simplicity
9. Clear responsibility
10. Degrade gracefully

**Acceptance Criteria:**
- [ ] All 10 applied in order
- [ ] Each principle considered
- [ ] Decision traceable to principles

---

## Scenario 2: Decision Traceability (Tier 1 - Deterministic)

**Objective:** Verify decision traceable to specific principle(s).

**Input:**
```
Decision: Use sequential execution over parallel
```

**Expected Behavior:**
- Names principle(s) that shaped choice
- Principle 3 (Flexible workflows) or Principle 10 (Degrade gracefully)
- Documents which principle changed decision

**Acceptance Criteria:**
- [ ] Principle(s) named
- [ ] Specific principle identified
- [ ] Decision changed by principle

---

## Scenario 3: No Principle Violated Without Reason (Tier 1 - Deterministic)

**Objective:** Verify no principle violated without documented reason.

**Input:**
```
Decision violates Principle 1 (Harness independence)
```

**Expected Behavior:**
- Documents trade-off
- Chooses consciously
- Records rationale

**Acceptance Criteria:**
- [ ] Trade-off documented
- [ ] Conscious choice
- [ ] Rationale recorded

---

## Scenario 4: Harness Limitation Fallback (Tier 1 - Deterministic)

**Objective:** Verify harness limitation fallback documented.

**Input:**
```
Harness lacks subagent support
```

**Expected Behavior:**
- Documents fallback
- Implements sequential alternative
- Records limitation

**Acceptance Criteria:**
- [ ] Fallback documented
- [ ] Alternative implemented
- [ ] Limitation recorded

---

## Scenario 5: Escalation - Principles Conflict (Tier 1 - Deterministic)

**Objective:** Verify escalation when principles conflict.

**Input:**
```
Principle 3 (Flexible workflows) vs Principle 4 (Loops first) conflict
```

**Expected Behavior:**
- Documents trade-off
- Chooses based on context
- Documents decision

**Acceptance Criteria:**
- [ ] Trade-off documented
- [ ] Choice made
- [ ] Decision documented

---

## Scenario 6: Reference During Any Decision (Tier 1 - Deterministic)

**Objective:** Verify principles referenced during any decision.

**Input:**
```
Any decision point
```

**Expected Behavior:**
- References principles
- Does not substitute for skill procedures
- Guides decision

**Acceptance Criteria:**
- [ ] Referenced during decision
- [ ] Not substitute for skills
- [ ] Guides decision

---

## Scenario 7: Evaluating Proposed Approach (Tier 1 - Deterministic)

**Objective:** Verify principles used to evaluate approach.

**Input:**
```
Proposed approach: parallel execution
```

**Expected Behavior:**
- Evaluates against principles
- Checks: harness independence, procedures, flexible workflows, etc.
- Accepts/rejects based on principles

**Acceptance Criteria:**
- [ ] Evaluated against principles
- [ ] Accept/reject based on principles
- [ ] Rationale given

---

## Scenario 7: Resolving Ambiguity (Tier 1 - Deterministic)

**Objective:** Verify principles resolve ambiguity in skills/workflows.

**Input:**
```
Ambiguity in skill procedure
```

**Expected Behavior:**
- Applies principles in order
- Resolves ambiguity
- Documents resolution

**Acceptance Criteria:**
- [ ] Principles applied
- [ ] Ambiguity resolved
- [ ] Resolution documented

---

## Scenario 8: Leaf File Access (Tier 2 - Qualitative)

**Objective:** Verify principles skill accesses leaf files.

**Input:**
```
Decision requires Principle 3 detail
```

**Expected Behavior:**
- Reads principle leaf file
- Applies leaf file guidance
- Does not rely only on index

**Acceptance Criteria:**
- [ ] Leaf file read
- [ ] Guidance applied
- [ ] Not just index

---

## Evaluation Results

| Scenario | Tier | Result | Notes |
|----------|------|--------|-------|
| 1. Applied in Order | 1 |  |  |
| 2. Traceable Decisions | 1 |  |  |
| 3. No Violation Without Reason | 1 |  |  |
| 4. Harness Fallback | 1 |  |  |
| 5. Conflict Escalation | 1 |  |  |
| 6. Referenced in Decisions | 1 |  |  |
| 7. Approach Evaluation | 1 |  |  |
| 7. Ambiguity Resolution | 1 |  |  |
| 8. Leaf File Access | 2 |  |  |

**Overall Status:** 
- Tier 1: ___/8 PASS
- Tier 2: ___/1 PASS
- **Skill Status:** ___