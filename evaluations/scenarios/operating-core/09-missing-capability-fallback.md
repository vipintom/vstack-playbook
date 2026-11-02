# Evaluation Scenario: Missing Capability Fallbacks

**Content Under Test:** vstack-mode, playbooks, skills
**Scenario Type:** Failure Handling / Procedure Fidelity
**Date:** 2026-11-02
**Version:** v2 draft

---

## Scenario 9A: No Native Todo — Session-Maintained Checklist

### Input Fixture

**User Request:** "Add user profile endpoint with GET/PUT."

**Repository State:**
- Branch: main
- New feature

**Harness:** Portable (no native todo/checklist API)
**Model:** Any

---

### Expected Behaviour

#### Procedure Expectation
1. vstack-mode selects feature-delivery playbook
2. **Phase 6:** Detects no native todo support
3. **Fallback activated:** Creates checklist in session context (or PROGRESS.md)
4. Checklist maintains: step text, state (DONE/SKIP/BLOCKED/IN_PROGRESS), skip reason
5. Lead manually updates checklist state throughout execution
6. Handback includes: "Checklist maintained in session (no native todo)"

#### Failure Handling Expectation
- No error thrown
- Graceful degradation documented
- Same verification/evidence requirements apply

---

## Scenario 9B: No Subagent Dispatch — Sequential Execution

### Input Fixture

**User Request:** "Run performance benchmarks for 5 different cache configurations in parallel."

**Repository State:**
- Branch: main
- 5 cache configs to test independently

**Harness:** Portable (no subagent/task tool)
**Model:** Any

---

### Expected Behaviour

#### Procedure Expectation
1. vstack-mode selects performance-investigation or figure-it-out
2. Playbook calls for vstack-swarm (parallel execution)
3. **Fallback activated:** Sequential execution with same verification
4. Each config tested sequentially:
   - Run benchmark
   - Record metrics
   - Verify functional correctness
5. Results aggregated after all complete
6. Handback includes: "Executed sequentially (no subagent support)"

#### Decision Quality Expectation
- **Branch point:** Capability missing
- **Principle applied:** Degrade Gracefully
- **Expected choice:** Sequential fallback, not fake parallelism

---

## Scenario 9C: No Worktree Isolation — Directory Isolation

### Input Fixture

**User Request:** "Compare 3 API design alternatives using vstack-arena."

**Repository State:**
- Branch: main
- 3 design candidates to implement and compare

**Harness:** Portable (no git worktree support)
**Model:** Any

---

### Expected Behaviour

#### Procedure Expectation
1. vstack-arena invoked (direct or via playbook)
2. **Isolation needed:** 3 independent implementations
3. **Fallback activated:** Directory isolation with git branches
   - Create 3 directories: candidate-a/, candidate-b/, candidate-c/
   - Each gets own git branch from base
   - Implement in isolation
   - Compare artifacts
4. Handback includes: "Used directory isolation (no worktree support)"

---

## Scenario 9D: No Read-Only Reviewer — Explicit Instruction + Git Diff Validation

### Input Fixture

**User Request:** "Review the authentication refactor for security issues."

**Repository State:**
- Branch: feature/auth-refactor
- Changes: 10 files modified

**Harness:** Portable (no read-only agent mode)
**Model:** Any

---

### Expected Behaviour

#### Procedure Expectation
1. Lead requests vstack-review-loop
2. **Reviewer independence:** Fresh session started
3. **Fallback for read-only:**
   - Reviewer agent instructed: "Do not modify files. Read only. Report findings."
   - Tools restricted to: read, glob, grep, bash (no write/edit)
4. **Validation:** Lead runs `git diff` after review to confirm no writes
5. Independence level recorded: `declared` (not `confirmed`)
6. Handback includes: "Review independence: declared (no native read-only enforcement)"

---

## Scenario 9E: No Persistent Mode — Explicit Re-invocation

### Input Fixture

**User Request:** "Continue the feature delivery from yesterday's session."

**Repository State:**
- Branch: feature/user-profile
- Previous session: Completed discovery, created plan
- PROGRESS.md exists with checkpoint

**Harness:** Portable (no persistent mode/session)
**Model:** Any

---

### Expected Behaviour

#### Procedure Expectation
1. New session starts
2. **vstack-session-pickup invoked:**
   - Runs vstack-catchup (reads PROGRESS.md, validates git state)
   - Revalidates completed work
   - Confirms next action
3. **vstack-mode re-invoked explicitly** for next phase
4. No assumption of persistent context
5. Handback includes: "Mode re-invoked (no persistent mode)"

---

## Negative Case: Capability Missing → Error or Fake Success

**Scenario:** No subagent support → vstack-swarm throws error or reports "parallel complete" without actual parallel execution

**Expected:** FAIL — must use honest fallback, not error or fake success

---

## Rubric / Pass Criteria

| Criterion | Pass Condition | Weight |
|---|---|---|
| Trigger precision | Fallback activated when capability missing | Required |
| Procedure fidelity | Fallback procedure executed correctly | Required |
| Decision quality | Degrade Gracefully principle applied | Required |
| Technical outcome | Work completes with fallback, same verification | Required |
| Evidence quality | Fallback documented in handback | Required |
| Honesty | Unsupported capability reported, not simulated | Required |

---

## Sign-off

**Evaluator:** 
**Date:** 
**Content Version Tested:** v2 draft
