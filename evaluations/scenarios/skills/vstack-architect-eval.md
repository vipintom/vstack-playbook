# Evaluation Scenario: design

**Skill:** design
**Lifecycle:** draft
**Evaluation Date:** 2026-11-02
**Evaluator:** Phase 5 automated

---

## Scenario 1: Grounding with how/why Before Sketch (Tier 1 - Deterministic)

**Objective:** Verify Ground phase runs how/why on relevant subsystems before sketching.

**Input:**
```
Request: "Architect a new payment processing module"
Context: Existing billing, orders, notification systems
```

**Expected Behavior:**
- Runs code-tour on billing, orders, notifications
- Runs rationale if design redefines ownership/layering
- Produces architectural explanation of touched subsystems
- Constraints from why become requirements, not guesses

**Acceptance Criteria:**
- [ ] code-tour invoked on relevant subsystems
- [ ] rationale invoked when ownership/layering changes
- [ ] Grounding complete before Phase B (Sketch)
- [ ] Constraints documented

---

## Scenario 2: Greenfield Skip Grounding (Tier 1 - Deterministic)

**Objective:** Verify Phase A skipped for genuinely greenfield work.

**Input:**
```
Request: "Design the public API for a brand new service"
Context: No existing systems to integrate
```

**Expected Behavior:**
- Detects greenfield (no surrounding systems)
- Skips Phase A (how/why)
- Proceeds directly to Phase B (Sketch)

**Acceptance Criteria:**
- [ ] Phase A skipped
- [ ] Reason: genuinely greenfield
- [ ] Proceeds to Sketch

---

## Scenario 3: Arena with 2+ Structurally Distinct Candidates (Tier 1 - Deterministic)

**Objective:** Verify Arena produces 2+ structurally distinct candidates.

**Input:**
```
Task: Generate design alternatives for payment module
Grounding: completed
```

**Expected Behavior:**
- Invokes red-team with design-sketch task
- Requires 2+ structurally distinct candidates (not cosmetic)
- Screens candidates against design-red-flags.md
- Applies interface depth principle

**Acceptance Criteria:**
- [ ] 2+ candidates generated
- [ ] Structurally distinct (not cosmetic variations)
- [ ] Red-flags screening applied
- [ ] Interface depth principle applied

---

## Scenario 4: Opt-in Checkpoint Behavior (Tier 1 - Deterministic)

**Objective:** Verify Agree phase is opt-in only.

**Input:**
```
Sketch completed
User: "Continue to implementation"
```

**Expected Behavior:**
- Presents sketch (usage + type + rationale)
- Does NOT pause unless user explicitly requests checkpoint
- If no request: proceeds to implementation
- Records: checkpoint requested (yes/no), feedback if any

**Acceptance Criteria:**
- [ ] No pause without explicit request
- [ ] Checkpoint requested flag recorded
- [ ] Proceeds without pause if not requested

---

## Scenario 5: Sketch as Contract - Deviation Recording (Tier 1 - Deterministic)

**Objective:** Verify sketch treated as contract, deviations recorded.

**Input:**
```
Implementation phase
Deviation: Added new field not in sketch
```

**Expected Behavior:**
- Deviation detected
- Reason recorded
- Sketch updated
- Continues implementation

**Acceptance Criteria:**
- [ ] Deviation detected
- [ ] Reason recorded
- [ ] Sketch updated
- [ ] Implementation continues

---

## Scenario 6: Scrap Triggers Detected (Tier 1 - Deterministic)

**Objective:** Verify scrap triggers detected and acted on.

**Test Cases:**
| Trigger | Detection | Response |
|---------|-----------|----------|
| Workarounds accumulating | Yes | Return to Phase B with new constraints |
| Escape hatches (flags, bypasses) | Yes | Return to Phase B |
| Lock reflex (same module repeatedly) | Yes | Return to Phase B |
| Caller knowledge (reaching internals) | Yes | Return to Phase B |

**Acceptance Criteria:**
- [ ] Each trigger detected
- [ ] Returns to Phase B
- [ ] New constraints from scrap analysis

---

## Scenario 7: Outputs Complete (Tier 1 - Deterministic)

**Objective:** Verify all required outputs produced.

**Expected Outputs:**
- Usage sketch (caller perspective first)
- Type sketch (signatures, module map, data flow)
- Rationale (per template: usage + synthesis decision)
- Synthesis note (from arena: base, why, judge verdict, grafts, rejections, convergence, verification)

**Acceptance Criteria:**
- [ ] Usage sketch present
- [ ] Type sketch present
- [ ] Rationale present
- [ ] Synthesis note present

---

## Scenario 7: Cross-Boundary Design Only (Tier 2 - Qualitative)

**Objective:** Verify architect only invoked for cross-boundary work.

**Test Cases:**
| Request | Should Invoke Architect? |
|---------|-------------------------|
| "Architect payment module" | Yes (new boundaries) |
| "Add field to User model" | No (single module) |
| "Refactor helper function" | No (no boundary change) |
| "Design new microservice" | Yes (cross-boundary) |

**Acceptance Criteria:**
- [ ] Correctly identifies cross-boundary work
- [ ] Does NOT invoke for single-module changes
- [ ] Non-triggers properly reject

---

## Evaluation Results

| Scenario | Tier | Result | Notes |
|----------|------|--------|-------|
| 1. Grounding | 1 |  |  |
| 2. Greenfield Skip | 1 |  |  |
| 3. Distinct Candidates | 1 |  |  |
| 4. Opt-in Checkpoint | 1 |  |  |
| 5. Contract Deviations | 1 |  |  |
| 6. Scrap Triggers | 1 |  |  |
| 7. Outputs Complete | 1 |  |  |
| 8. Cross-Boundary Only | 2 |  |  |

**Overall Status:** 
- Tier 1: ___/7 PASS
- Tier 2: ___/1 PASS
- **Skill Status:** ___