---
name: debug
description: "Systematic root cause investigation: reproduce failure, gather evidence, form hypothesis, test minimally, implement fix with failing test"
lifecycle: draft
---

# debug

## Purpose / Outcome

Systematic failure investigation before fixes. Reproduces, gathers evidence at component boundaries, traces data flow backward, forms single hypothesis, tests minimally, implements fix with failing test.

---

## When to Use (Positive Triggers)

- "Debug this" / "Diagnose this failure"
- Test failure reproduction
- Bug reproduction before fix
- Unexpected behavior investigation
- After 2 failed fixes → unstick

---

## When Not to Use (Negative Triggers)

- 3+ failed attempts → unstick
- Live system symptoms → forensics
- Design phase → design
- Verification execution → verify

---

## Required Context / Inputs

- Failure symptoms (error, wrong behavior, test failure)
- Repository access
- Ability to reproduce and run tests

---

## Preconditions

- Failure observable (error, log, wrong output, test failure)
- Code can be read and executed

---

## Procedure

### Phase 1: Root Cause Investigation

**BEFORE attempting ANY fix:**

1. **Read errors completely** — stack traces, line numbers, error codes, full messages. Don't skim.
2. **Reproduce consistently** — exact steps, every time? If not consistent, note conditions.
3. **Check recent changes** — `git diff`, recent commits, dependency updates, environment changes.
4. **Gather evidence at component boundaries** — log inputs/outputs at module boundaries, API boundaries, DB boundaries.
5. **Trace data flow backward** — from symptom to source. Follow the data, not the code structure.

### Phase 2: Pattern Analysis

1. **Find working examples** in codebase — similar patterns that work.
2. **Compare against reference implementations** — library docs, similar projects, previous versions.
3. **Identify differences** — list EVERY difference between working and failing.
4. **Understand dependencies** — what does this component depend on? Versions? Config?

### Phase 3: Hypothesis & Testing

1. **Form single hypothesis** — specific, written down. "X causes Y because Z."
2. **Test minimally** — one variable, smallest change to prove/disprove.
   - Add log/print at hypothesis point
   - Toggle one condition
   - Minimal script
3. **Verify before continuing** — hypothesis confirmed or denied.
4. **If you don't know** — admit it, research, ask. Don't guess.

### Phase 4: Implementation

1. **Create failing test case** — MANDATORY. Reproduces the exact failure.
2. **Implement single fix** — at the root cause, not the symptom.
3. **Verify fix** — test passes, suite green.
4. **If 3+ fixes failed** — STOP. Question architecture with human partner.

---

## Rules (Iron Law)

**NO FIXES WITHOUT ROOT CAUSE INVESTIGATION FIRST**

If you haven't completed Phase 1, you cannot propose fixes.

---

## Red Flags (Stop and Reassess)

- "Quick fix"
- "Just try this"
- "Skip the test"
- "Probably X"
- "One more fix attempt"
- **3+ fixes failed = architectural problem** — discuss with human partner

---

## Expected Outputs

- Root cause statement (specific, traced to source)
- Evidence gathered (boundary logs, data traces, diffs)
- Hypothesis tested (confirmed/denied with evidence)
- Failing test case + fix + passing verification
- If 3+ fixes: architecture discussion triggered

---

## Verification

**Evidence recording:** VERIFIED / NOT_VERIFIED / INCONCLUSIVE / BLOCKED / NOT RUN / UNAVAILABLE


- Errors read completely before hypothesis
- Reproduction consistent before investigation
- Evidence at component boundaries
- Single hypothesis tested minimally
- Failing test before fix
- 3+ failures → architecture discussion

---

## Failure Handling

| Failure Mode | Response |
|---|---|
| Cannot reproduce | Document conditions, try different environment, ask user |
| No working examples | Research external references, create minimal repro |
| Hypothesis untestable | Admit unknown, research, ask |
| Fix doesn't work | Return to Phase 1, new hypothesis |
| 3+ fixes failed | STOP, architecture discussion with human |

---

## Stop Conditions
- Work complete or goal achieved
- Blocked by external dependency or missing criteria
- Inconclusive - evidence gaps or ambiguous state
- Safe pause - interrupted with clean checkpoint


- Root cause identified and fixed
- Failing test passes, suite green
- 3+ fixes failed → architecture discussion

---

## Escalation

- User decision required: 3+ fixes failed, architecture question
- Lead decision required: cross-component root cause

---

## Skill / Role / Tool Routing

- **Skills invoked:** tdd (Phase 4), verify (verification), unstick (if 3+ failures)
- **Roles:** Builder (investigates/fixes), Reviewer (verifies fix)
- **Tools:** git, test framework, logging, minimal scripts
- **References:** root-cause-tracing.md, defense-in-depth.md, condition-based-waiting.md (bundled references)

---

## Examples

### Example: Flaky Test

**Symptom:** Test passes 8/10 times, fails 2/10 with timeout

**Phase 1:**
- Error: timeout at 5000ms
- Reproduce: runs 20 times, fails 4 times
- Recent changes: none in test, dependency upgraded
- Boundaries: test → service → DB
- Trace: DB query sometimes slow

**Phase 2:**
- Working examples: other tests use same pattern, pass
- Reference: library docs show connection pool config
- Differences: this test uses new pool size config
- Dependencies: DB pool size = 2, test runs parallel

**Phase 3:**
- Hypothesis: "Connection pool exhausted when parallel tests run"
- Test: run test in isolation → passes 20/20
- Confirmed

**Phase 4:**
- Failing test: already exists (the flaky one)
- Fix: increase pool size for test env
- Verify: passes 20/20, suite green

---

## Dependencies / References

- **Principles:** Fix Root Causes, Attack the Premise, Prove It Works
- **Skills:** tdd, verify, unstick
- **References:** root-cause-tracing.md, defense-in-depth.md, condition-based-waiting.md

