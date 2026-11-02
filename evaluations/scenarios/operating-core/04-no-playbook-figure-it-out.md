# Evaluation Scenario: No Suitable Playbook → figure-it-out

**Content Under Test:** vstack-mode, vstack-figure-it-out
**Scenario Type:** Positive Trigger / Procedure Fidelity
**Date:** 2026-11-02
**Version:** v2 draft

---

## Scenario 4A: Large Cross-Cutting Task (No Standard Playbook Fits)

### Input Fixture

**User Request:** "Modernize the entire codebase from callbacks to async/await across 200 files in 10 modules. Must maintain backward compatibility during transition."

**Repository State:**
- Branch: main
- Current: Callback-based patterns throughout
- Goal: Full async/await migration
- Constraint: Zero-downtime, backward compatible

**Harness:** Portable
**Model:** Any

---

### Expected Behaviour

#### Trigger Expectation
- **vstack-mode:** Activates, classifies request
- **Playbook selection:** No standard playbook fits (too large for refactoring, not new behaviour for feature-delivery)
- **vstack-figure-it-out:** Invoked (positive trigger: "No suitable match or large cross-cutting scope")

#### Procedure Expectation (vstack-mode → figure-it-out)
1. vstack-mode Phases 1-4: Frames, reads principles, classifies, finds no playbook fits
2. vstack-mode Phase 4: Selects figure-it-out
3. figure-it-out Phase A — Frame:
   - Outcome: All callbacks → async/await
   - Done predicate: All tests pass, no callback patterns, performance >= baseline
   - Scope: 200 files, 10 modules
   - One-way doors: Runtime behaviour change
   - Rigour: High (blast radius)
   - Evidence: Test results, grep for callbacks, benchmarks
4. figure-it-out Phase B — Design Workflow:
   - Atomic units: Per-module conversion
   - Risk-first: Prototype one module first
   - Verification harness: Baseline benchmarks + full test suite
   - Independent seams: Modules with no cross-dependencies
   - Workspaces: One worktree per module
   - Checkpoints: Prototype review, module integration reviews
   - Phase list artifact produced
5. figure-it-out Phase C — Execute Loop:
   - Per module: Hypothesis → Convert → Verify → Keep/Revert
   - Per-unit verification before next dependent module
6. figure-it-out Phase D — Decision Trail:
   - Ledger entries: Pattern choice, module order, integration issues
7. figure-it-out Phase E — Verify/Hand Back:
   - Overall: All tests pass, no callbacks, performance verified

#### Decision Quality Expectation
- **Branch point:** No playbook fits → figure-it-out
- **Principle applied:** Route Before Loading, Challenge Assumptions
- **Expected choice:** figure-it-out (not forcing refactoring playbook)

---

## Scenario 4B: Task Fits Standard Playbook (figure-it-out NOT Triggered)

### Input Fixture

**User Request:** "Convert the auth module from callbacks to async/await."

**Repository State:**
- Branch: main
- Single module, well-understood
- Goal: Async/await for auth only

**Harness:** Portable
**Model:** Any

---

### Expected Behaviour

#### Trigger Expectation
- **vstack-mode:** Activates, classifies as "Behaviour-preserving structural change"
- **Playbook selection:** refactoring playbook fits
- **figure-it-out:** NOT invoked (negative trigger: "Task fits refactoring playbook")

#### Procedure Expectation
1. vstack-mode selects refactoring playbook
2. Standard refactoring playbook executed
3. figure-it-out never invoked

#### Decision Quality Expectation
- **Branch point:** Playbook selection
- **Principle applied:** Route Before Loading (select narrowest suitable)
- **Expected choice:** refactoring (not figure-it-out)

---

## Negative Case: Standard Task Incorrectly Invokes figure-it-out

**Scenario:** "Fix typo in README" → vstack-mode invokes figure-it-out → designs bespoke playbook

**Expected:** FAIL — figure-it-out must not be invoked when standard playbook fits

---

## Rubric / Pass Criteria

| Criterion | Pass Condition | Weight |
|---|---|---|
| Trigger precision | figure-it-out invoked only when no playbook fits | Required |
| Procedure fidelity | 5 phases executed for bespoke task | Required |
| Decision quality | Correct non-trigger for standard tasks | Required |
| Technical outcome | Bespoke playbook artifact produced | Required |
| Evidence quality | Decision trail with evidence pointers | Required |

---

## Sign-off

**Evaluator:** 
**Date:** 
**Content Version Tested:** v2 draft
