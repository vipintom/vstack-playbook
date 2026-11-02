---
name: vstack-verify-loop
description: "Broad verification execution: runs test suites, integration checks, acceptance criteria validation, captures evidence"
lifecycle: draft
---

# vstack-verify-loop

## Purpose / Outcome

Executes verification at per-task and integration levels: runs test suites, integration checks, acceptance criteria, captures evidence. Does NOT write tests (that's vstack-tdd).

---

## When to Use (Positive Triggers)

- "Verify this" / "Run tests"
- Per-task verification in playbooks
- Integration verification after all tasks
- Post-mitigation verification
- Acceptance criteria validation

---

## When Not to Use (Negative Triggers)

- Write failing test first → vstack-tdd
- Reproduce failure → vstack-debug
- Break assumptions → vstack-unstick
- Design phase → vstack-architect

---

## Required Context / Inputs

- Verification scope: per-task or integration
- Project test command and verification harness
- Acceptance criteria (for integration verification)
- Ability to capture evidence (files, DB state, messages, output)

---

## Preconditions

- Doctor check passes (process, version, port, auth)
- Harness available (test command, selectors, commands)

---

## Procedure

### Step 1: Doctor (Read-only Health Check)

- **Process up** — service/process running
- **Right version/build** — matches expected
- **Port owned** — no conflicts
- **Auth valid** — credentials/tokens work
- **If Doctor fails:** Report BLOCKED, do not proceed to Drive

### Step 2: Drive (Execute Harness)

- **Per-task:** Run task tests + related regression tests
- **Integration:** Full suite + acceptance criteria + cross-task contracts
- Use project test command, real selectors/commands
- **Real user path** — exercise as user would (not internal setters)
- **Serial for shared state** — if tests share DB/service, run serially
- **Parallel for isolated** — independent tests in parallel

### Step 3: Evidence (Capture)

- **Action** — what was executed (command, selector, input)
- **Resulting state** — visible output, UI state, API response
- **Side effects** — files written, DB changes, messages sent, logs
- **Verify side effects** alongside visible output
- **Mocks only at production boundaries** — not internal

### Step 4: Cleanup

- Tear down instances started
- **Preserve evidence** — artifacts, logs, screenshots, DB dumps
- Nothing outlives the drive phase

### Step 5: Record

- Per-task: VERIFIED / NOT_VERIFIED / INCONCLUSIVE / BLOCKED per criterion
- Integration: Overall PASS / ISSUES / BLOCKED with evidence
- Dry-run observation: if dry-run used, observe what it actually skips

---

## Verification Standards

- Exercise real user path (not internal setters)
- Capture action AND resulting state
- Verify side effects alongside visible
- Mocks only at production boundaries
- Dry-run verification: observe what it actually skips
- Evidence survives cleanup

---

## Expected Outputs

- Per-task verification results with evidence
- Integration verification result with evidence
- Evidence artifacts preserved
- Dry-run observations (if applicable)

---

## Verification

**Evidence recording:** VERIFIED / NOT_VERIFIED / INCONCLUSIVE / BLOCKED / NOT RUN / UNAVAILABLE

- Doctor before Drive
- Real user path exercised
- Side effects verified
- Evidence survives cleanup
- Per-task + integration distinction maintained
- Dry-run observed if used

---

## Failure Handling

| Failure Mode | Response |
|---|---|
| Doctor fails | BLOCKED — fix environment first |
| Test command fails | INCONCLUSIVE — investigate harness |
| Acceptance criteria not met | NOT_VERIFIED — record gaps |
| Evidence capture fails | INCONCLUSIVE — document what's missing |
| Shared state contamination | Serial execution, better isolation |

---

## Stop Conditions
- Work complete or goal achieved
- Blocked by external dependency or missing criteria
- Inconclusive - evidence gaps or ambiguous state
- Safe pause - interrupted with clean checkpoint


- All acceptance criteria VERIFIED or gaps documented
- Evidence captured and preserved
- Cleanup complete

---

## Escalation

- User decision required: acceptance criteria ambiguity
- Lead decision required: harness gaps, systemic verification failures

---

## Skill / Role / Tool Routing

- **Skills invoked:** vstack-tdd (if test-first needed), vstack-create-verification (if harness missing)
- **Roles:** Builder (executes), Reviewer (inspects evidence)
- **Tools:** Host test command, verification harness, evidence capture
- **References:** feature-map format (references/feature-map.md)

---

## Examples

### Example: Per-Task Verification

**Task:** Implement user login endpoint

**Execution:**
1. Doctor: API server up, DB migrated, port 3000 free
2. Drive: `npm test -- --grep "login"` + related auth tests
3. Evidence: test output, coverage, login response captured
4. Cleanup: test DB transactions rolled back
5. Record: VERIFIED (all login tests pass)

### Example: Integration Verification

**Delivery:** User authentication feature (login, register, logout, protected routes)

**Execution:**
1. Doctor: full stack up, DB clean, ports free
2. Drive: `npm test` (full suite) + `npm run test:e2e` (acceptance)
3. Evidence: full suite output, e2e screenshots, API logs
4. Cleanup: e2e browser closed, test DB reset
5. Record: PASS (all criteria VERIFIED)

---

## Dependencies / References

- **Principles:** Prove It Works, Procedures Over Vague
- **Skills:** vstack-tdd, vstack-create-verification
- **References:** feature-map.md (verification harness structure)

---

## Migration Record

- **Previous name/path:** skills/vstack-verify-loop/SKILL.md
- **Previous audit rating:** Adequate (historical input only)
- **Valuable concepts preserved:** Doctor → Drive → Evidence → Cleanup, per-task vs integration, real user path, side effects, mocks at boundaries only, evidence survives cleanup
- **Procedures rewritten:** Explicit Doctor step, verification standards, dry-run observation, per-task/integration distinction, evidence preservation rules
- **Disposition:** rewrite
- **Research record:** docs/research/records/vstack-verify-loop.md