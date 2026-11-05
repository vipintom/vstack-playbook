# Evaluation Scenario: resume

**Skill:** resume
**Lifecycle:** draft
**Evaluation Date:** 2026-11-02
**Evaluator:** Phase 5 automated

---

## Scenario 1: Knowledge Categories Identified (Tier 1 - Deterministic)

**Objective:** Verify relevant knowledge categories identified.

**Input:**
```
Task: Implement new API endpoint
```

**Expected Categories:**
- Architecture decisions and constraints
- Conventions and patterns
- Known issues and workarounds
- Verification procedures
- Past failures and lessons

**Acceptance Criteria:**
- [ ] All 5 categories considered
- [ ] Relevant categories selected

---

## Scenario 2: Project Memory Query (Tier 1 - Deterministic)

**Objective:** Verify project memory queried with filters.

**Input:**
```
Plugin available
```

**Expected Behavior:**
- Searches by category, tags, keywords
- Filters by validation date (prefers recent)
- Notes superseded/stale markers

**Acceptance Criteria:**
- [ ] Search by category/tags/keywords
- [ ] Filters by validation date
- [ ] Notes superseded/stale

---

## Scenario 3: Decision Ledger/ADRs Checked (Tier 1 - Deterministic)

**Objective:** Verify ADRs and decision ledger consulted.

**Input:**
```
Project with ADRs
```

**Expected Behavior:**
- Checks relevant architectural decisions
- Reviews past pivots and rationale
- Identifies superseded decisions

**Acceptance Criteria:**
- [ ] Architectural decisions checked
- [ ] Past pivots reviewed
- [ ] Superseded decisions identified

---

## Scenario 4: Recent Checkpoints Reviewed (Tier 1 - Deterministic)

**Objective:** Verify PROGRESS.md and recent work reviewed.

**Input:**
```
Active delivery with checkpoints
```

**Expected Behavior:**
- Reads PROGRESS.md for active deliveries
- Reviews failed approaches from recent work
- Notes open questions from prior sessions

**Acceptance Criteria:**
- [ ] PROGRESS.md read
- [ ] Failed approaches reviewed
- [ ] Open questions noted

---

## Scenario 5: Currency Tagging (Tier 1 - Deterministic)

**Objective:** Verify each finding tagged with currency status.

**Input:**
```
Findings from memory/ADRs/checkpoints
```

**Expected Behavior:**
- Tags each: current / historical / superseded / unknown
- Does not treat historical as current truth
- Validates conventions against current code

**Acceptance Criteria:**
- [ ] All findings tagged
- [ ] Historical not treated as current
- [ ] Conventions validated

---

## Scenario 6: Synthesize Relevant Context (Tier 1 - Deterministic)

**Objective:** Verify synthesis produces actionable context.

**Expected Output:**
- Conventions to follow
- Constraints to respect
- Past mistakes to avoid
- Expected verification

**Acceptance Criteria:**
- [ ] Conventions listed
- [ ] Constraints listed
- [ ] Past mistakes listed
- [ ] Verification expectations listed

---

## Scenario 6: Verification - No Stale Conventions (Tier 1 - Deterministic)

**Objective:** Verify no stale convention presented as current.

**Input:**
```
Old convention found in memory
```

**Expected Behavior:**
- Validates against current code
- Marks as superseded if outdated
- Does not present as current

**Acceptance Criteria:**
- [ ] Validated against code
- [ ] Superseded marked
- [ ] Not presented as current

---

## Scenario 7: Superseded Decisions Marked (Tier 1 - Deterministic)

**Objective:** Verify superseded decisions clearly marked.

**Input:**
```
Old ADR superseded by new
```

**Expected Behavior:**
- Clearly marks superseded
- Does not present as current

**Acceptance Criteria:**
- [ ] Superseded clearly marked
- [ ] Not presented as current

---

## Scenario 8: Validation Dates Noted (Tier 1 - Deterministic)

**Objective:** Verify validation dates noted for memory items.

**Input:**
```
Memory item from 6 months ago
```

**Expected Behavior:**
- Notes validation date
- Prefers recent
- Flags stale items

**Acceptance Criteria:**
- [ ] Validation date noted
- [ ] Recent preferred
- [ ] Stale flagged

---

## Scenario 8: Escalation - Critical Convention Unverified (Tier 1 - Deterministic)

**Objective:** Verify escalation when critical convention unverified.

**Input:**
```
Critical convention not validated against code
```

**Expected Behavior:**
- Validates against current code
- Escalates to Lead if cannot verify

**Acceptance Criteria:**
- [ ] Validates against code
- [ ] Escalates if unverifiable

---

## Scenario 9: Escalation - Conflicting Memory (Tier 1 - Deterministic)

**Objective:** Verify escalation on conflicting memory items.

**Input:**
```
Two memory items contradict
```

**Expected Behavior:**
- Escalates to Lead
- Does not choose arbitrarily

**Acceptance Criteria:**
- [ ] Escalates to Lead
- [ ] Does not choose arbitrarily

---

## Scenario 10: Fallback Without Plugin (Tier 1 - Deterministic)

**Objective:** Verify fallback without project memory plugin.

**Input:**
```
No plugin available
```

**Expected Behavior:**
- Searches ADRs, PROGRESS.md, git log manually
- Documents fallback
- Relies on team knowledge and code inspection

**Acceptance Criteria:**
- [ ] Manual ADR/git search
- [ ] Fallback documented
- [ ] Team knowledge + code inspection

---

## Scenario 11: Fallback Without Project Memory (Tier 1 - Deterministic)

**Objective:** Verify fallback without any project memory.

**Input:**
```
No project memory, no ADRs, no checkpoints
```

**Expected Behavior:**
- Relies on team knowledge and code inspection
- Documents no memory available

**Acceptance Criteria:**
- [ ] Team knowledge + code inspection
- [ ] No memory documented

---

## Evaluation Results

| Scenario | Tier | Result | Notes |
|----------|------|--------|-------|
| 1. Categories Identified | 1 |  |  |
| 2. Memory Query | 1 |  |  |
| 3. ADR/Ledger Check | 1 |  |  |
| 4. Checkpoints Reviewed | 1 |  |  |
| 5. Currency Tagging | 1 |  |  |
| 6. Synthesis | 1 |  |  |
| 6. No Stale Conventions | 1 |  |  |
| 7. Superseded Marked | 1 |  |  |
| 8. Validation Dates | 1 |  |  |
| 8. Unverified Escalation | 1 |  |  |
| 9. Conflict Escalation | 1 |  |  |
| 10. Plugin Fallback | 1 |  |  |
| 11. No Memory Fallback | 1 |  |  |

**Overall Status:** 
- Tier 1: ___/14 PASS
- **Skill Status:** ___