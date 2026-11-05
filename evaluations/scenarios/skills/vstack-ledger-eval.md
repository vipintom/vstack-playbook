# Evaluation Scenario: decisions

**Skill:** decisions
**Lifecycle:** draft
**Evaluation Date:** 2026-11-02
**Evaluator:** Phase 5 automated

---

## Scenario 1: Decision Point Identification (Tier 1 - Deterministic)

**Objective:** Verify decision point captured with all required fields.

**Input:**
```
Decision: Switch from Redis to in-memory cache
```

**Expected Capture:**
- What choice was made?
- What alternatives considered?
- What triggered the decision?

**Acceptance Criteria:**
- [ ] Choice documented
- [ ] Alternatives listed
- [ ] Trigger identified

---

## Scenario 2: Concise Record (Tier 1 - Deterministic)

**Objective:** Verify ledger entry is concise with all required fields.

**Expected Entry Fields:**
- Timestamp
- Workflow phase
- Decision summary
- Alternatives (brief)
- Chosen option
- Rationale summary
- Evidence references
- Related task/delivery
- Outcome (if known)

**Acceptance Criteria:**
- [ ] All 9 fields present
- [ ] Concise (not verbose)
- [ ] Evidence references valid

---

## Scenario 3: Append-Only (Tier 1 - Deterministic)

**Objective:** Verify ledger is append-only.

**Input:**
```
Previous decision needs correction
```

**Expected Behavior:**
- Does NOT edit existing entry
- Creates new entry superseding old
- Marks old entry as superseded explicitly

**Acceptance Criteria:**
- [ ] No edits to existing
- [ ] New entry created
- [ ] Old marked superseded

---

## Scenario 4: Artifact Linking (Tier 1 - Deterministic)

**Objective:** Verify cross-references to artifacts.

**Expected Links:**
- ADR reference
- Commit/diff
- Evidence records
- PROGRESS.md checkpoint

**Acceptance Criteria:**
- [ ] ADR reference
- [ ] Commit/diff
- [ ] Evidence records
- [ ] PROGRESS.md link

---

## Scenario 5: Escalation - Authorization Required (Tier 1 - Deterministic)

**Objective:** Verify pending authorization recorded.

**Input:**
```
Decision needs Lead approval
```

**Expected Behavior:**
- Records as pending
- Escalates to Lead
- Does not proceed without authorization

**Acceptance Criteria:**
- [ ] Recorded as pending
- [ ] Escalated to Lead
- [ ] Does not proceed

---

## Scenario 5: Trigger - unstick (Tier 1 - Deterministic)

**Objective:** Verify ledger entry on approach change.

**Input:**
```
unstick changed approach after 3 failures
```

**Expected Behavior:**
- Records decision to change approach
- Links to unstick record
- Documents false assumption

**Acceptance Criteria:**
- [ ] Records approach change
- [ ] Links to unstick
- [ ] Documents false assumption

---

## Scenario 6: Trigger - recovery (Tier 1 - Deterministic)

**Objective:** Verify ledger entry on state restoration.

**Input:**
```
recovery restored to baseline
```

**Expected Behavior:**
- Records recovery action
- Links to recovery record
- Documents baseline restored to

**Acceptance Criteria:**
- [ ] Records recovery
- [ ] Links to recovery
- [ ] Documents baseline

---

## Scenario 6: Trigger - resume (Tier 1 - Deterministic)

**Objective:** Verify checkpoint link recorded.

**Input:**
```
resume updated PROGRESS.md
```

**Expected Behavior:**
- Links ledger entry to checkpoint
- Records checkpoint timestamp

**Acceptance Criteria:**
- [ ] Links to checkpoint
- [ ] Timestamp recorded

---

## Scenario 7: Trigger - resume (Tier 1 - Deterministic)

**Objective:** Verify ledger consumed on resume.

**Input:**
```
Session pickup reads ledger
```

**Expected Behavior:**
- Reads ledger for decisions
- Reconstructs context from trail
- Does not assume memory accurate

**Acceptance Criteria:**
- [ ] Reads ledger
- [ ] Reconstructs context
- [ ] Doesn't assume memory

---

## Scenario 7: Fallback Without Ledger (Tier 1 - Deterministic)

**Objective:** Verify fallback records in PROGRESS.md.

**Input:**
```
No ledger available
```

**Expected Behavior:**
- Records in PROGRESS.md Decisions section
- Documents fallback

**Acceptance Criteria:**
- [ ] Records in PROGRESS.md
- [ ] Documents fallback

---

## Evaluation Results

| Scenario | Tier | Result | Notes |
|----------|------|--------|-------|
| 1. Decision Point | 1 |  |  |
| 2. Concise Record | 1 |  |  |
| 3. Append-Only | 1 |  |  |
| 4. Artifact Linking | 1 |  |  |
| 4. Authorization Pending | 1 |  |  |
| 5. Unstick Trigger | 1 |  |  |
| 5. Recovery Trigger | 1 |  |  |
| 6. Context-Reset Link | 1 |  |  |
| 6. Session-Pickup Consumer | 1 |  |  |
| 7. Fallback PROGRESS.md | 1 |  |  |

**Overall Status:** 
- Tier 1: ___/10 PASS
- **Skill Status:** ___