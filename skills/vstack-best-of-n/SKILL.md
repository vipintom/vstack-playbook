---
name: vstack-best-of-n
description: Run bounded independent attempts for problems where competing solutions add value
lifecycle: draft
---

# vstack-best-of-n

## Purpose / Outcome

Executes empirical comparison of competing implementations: runs bounded independent attempts, evaluates against a rubric, selects the strongest or combines improvements, verifies the final result.

---

## When to Use (Positive Triggers)

- "Best of n for..." / "Compare implementations of..."
- When multiple materially different solutions may be viable
- When design uncertainty is high and empirical comparison helps
- When vstack-arena needs implementation candidates

---

## When Not to Use (Negative Triggers)

- Predictable mechanical edits
- When additional cost not justified
- Routine implementation
- Design phase → vstack-arena

---

## Required Context / Inputs

- Common problem statement
- Acceptance criteria
- Comparison rubric
- Isolation mechanism for candidates

---

## Preconditions

- Rubric defined before candidate generation
- Isolation mechanism available (worktree or directory)

---

## Procedure

### Step 1: Define Common Task

- Single prompt with acceptance criteria
- Shared constraints and requirements
- Explicit out-of-scope items

### Step 2: Define Comparison Rubric

- Criteria: correctness, simplicity, performance, maintainability, testability
- Weights per criterion
- PASS/FAIL thresholds

### Step 3: Generate Candidates

- Default: 3 independent attempts
- Each in isolated workspace
- Same base commit, same constraints

### Step 4: Evaluate Candidates

- Run equivalent verification on each
- Score against rubric
- Compare actual code and evidence (not just descriptions)

### Step 5: Select and Integrate

- Choose strongest or combine improvements
- Re-run full verification on final result
- Record selection rationale

### Step 6: Clean Up

- Discard non-selected candidate workspaces
- Keep selected candidate's changes

---

## Expected Outputs

- Selected implementation
- Rubric scores for each candidate
- Selection rationale
- Discarded approaches documented

---

## Verification

**Evidence recording:** VERIFIED / NOT_VERIFIED / INCONCLUSIVE / BLOCKED / NOT RUN / UNAVAILABLE


- All candidates evaluated against same rubric
- Final result passes full verification
- Selection based on evidence, not descriptions

---

## Failure Handling

| Failure Mode | Response |
|---|---|
| No candidate meets threshold | Return to vstack-architect |
| All candidates fail | Escalate to Lead |
| Isolation not available | Sequential fallback, document |

---

## Stop Conditions
- Work complete or goal achieved
- Blocked by external dependency or missing criteria
- Inconclusive - evidence gaps or ambiguous state
- Safe pause - interrupted with clean checkpoint


- Selection made and verified
- Time-boxed (default: 2-4 hours total)

---

## Escalation

- No candidate meets threshold → return to vstack-architect
- All candidates fail → escalate to Lead

---

## Fallback

- Without isolation: sequential candidate generation
- Without multiple attempts: single attempt with documented rationale

---

## Skill / Role / Tool Routing

- **Skills invoked:** vstack-architect (identifies need), vstack-arena (rubric comparison), vstack-verify-loop (evaluation)
- **Roles:** Builder (generates/evaluates), Lead (selection)
- **Tools:** Isolation mechanism, verification harness
- **References:** None

---

## Examples

### Example: Algorithm Comparison

**Task:** Implement deduplication for 10M records
**Rubric:** Correctness (40%), Performance (30%), Simplicity (20%), Testability (10%)
**Candidates:**
1. Hash-based (PASS, 2.3s, simple)
2. Sort-based (PASS, 4.1s, moderate)
3. Bloom filter (FAIL correctness)
**Selection:** Hash-based, re-verified, integrated

---

## Dependencies / References

- **Principles:** Prove It Works, Procedures Over Vague Instructions, Evidence Before Assertions
- **Skills:** vstack-architect, vstack-arena, vstack-verify-loop
- **References:** None

---

## Migration Record

- **Previous name/path:** skills/vstack-best-of-n/SKILL.md
- **Previous audit rating:** Adequate (historical input only)
- **Valuable concepts preserved:** Rubric before generation, isolated candidates, evidence-based evaluation, selection rationale, cleanup
- **Procedures rewritten:** Explicit 6-step procedure, rubric criteria with weights, evidence-based comparison, fallback isolation
- **Disposition:** rewrite
- **Research record:** docs/research/records/vstack-best-of-n.md