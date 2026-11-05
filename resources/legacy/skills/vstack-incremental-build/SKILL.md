---
name: vstack-incremental-build
description: Keep implementation changes small, reviewable and verifiable
lifecycle: draft
---

# vstack-incremental-build

## Purpose / Outcome

Enforces implementation discipline by decomposing work into smallest verifiable units, each with baseline → change → verify cycle, committing incrementally, and integrating frequently.

---

## When to Use (Positive Triggers)

- For all implementation work (Standard and Advanced modes)
- When making multiple related changes
- As default implementation discipline

---

## When Not to Use (Negative Triggers)

- For single, trivial changes (Quick mode)
- When a larger atomic change is genuinely required

---

## Required Context / Inputs

- Plan from plan (or sharpened task)
- Verification approach from verify

---

## Preconditions

- Each step has a defined verification

---

## Procedure

### Phase 1: Decompose into Smallest Verifiable Units

- Each unit: one logical change, one verification
- Prefer vertical slices (feature) over horizontal (layer)
- Avoid "prep" commits that don't pass verification

### Phase 2: For Each Unit

a. **Identify narrowest verification** — what check validates this change?
b. **Run baseline** — capture current check result
c. **Make the change** — minimal diff
d. **Run verification** — same check as baseline
e. **Inspect actual output** — read real results, not summaries
f. **Fix root cause** — if check fails, fix the cause, don't weaken the check
g. **Repeat until pass** — then run broader relevant checks

### Phase 3: Commit Incrementally

- One logical change per commit
- Commit message: what + why (reference plan step)
- Include verification evidence in commit or PR

### Phase 4: Integrate Frequently

- Pull/rebase regularly
- Run full verification suite before push
- Address conflicts immediately

---

## Expected Outputs

- Series of small, verified commits
- Each commit passes its verification
- Broader checks pass after each integration

---

## Verification

**Evidence recording:** VERIFIED / NOT_VERIFIED / INCONCLUSIVE / BLOCKED / NOT RUN / UNAVAILABLE


- Every meaningful change has a verification
- No commit breaks existing tests
- Verification evidence recorded

---

## Failure Handling

| Failure Mode | Response |
|---|---|
| Verification fails repeatedly | unstick |
| Step requires larger change | Revise plan (plan) |

---

## Stop Conditions
- Work complete or goal achieved
- Blocked by external dependency or missing criteria
- Inconclusive - evidence gaps or ambiguous state
- Safe pause - interrupted with clean checkpoint


- All plan steps implemented and verified
- Time-boxed per step (default: 15-30 min per verification cycle)

---

## Escalation

- Verification fails repeatedly → unstick
- Step requires larger change → revise plan (plan)

---

## Fallback

- Without automated checks: manual verification with documented evidence

---

## Skill / Role / Tool Routing

- **Skills invoked:** plan (provides steps), verify (verification discipline), tdd (test-first approach), unslop (cleanup)
- **Roles:** Builder (implements), Reviewer (verifies)
- **Tools:** Verification suite, git
- **References:** None

---

## Examples

### Example: Feature Implementation

**Plan:** 5 steps for user profile
**Execution:**
1. Types → verify types compile
2. API types → verify schema valid
3. Service → verify unit tests
4. Endpoints → verify integration tests
5. UI → verify e2e
**Each step:** baseline → change → verify → commit → integrate

---

## Dependencies / References

- **Principles:** Verifiable Increments, Evidence Before Assertions, Prove It Works
- **Skills:** plan, verify, tdd, unslop
- **References:** None

---

## Migration Record

- **Previous name/path:** skills/vstack-incremental-build/SKILL.md
- **Previous audit rating:** Adequate (historical input only)
- **Valuable concepts preserved:** 4-phase procedure, unit decomposition, verification cycle, incremental commits, frequent integration
- **Procedures rewritten:** Explicit phase structure, verification cycle, root cause fixing, fallback
- **Disposition:** rewrite
- **Research record:** docs/research/records/vstack-incremental-build.md