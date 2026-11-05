---
name: tdd
description: Test-first implementation for bug fixes with clear, cheap test paths. Red-Green-Refactor with mandatory failure verification
lifecycle: draft
---

# tdd

## Purpose / Outcome

Implements bug fixes using test-first cycle: write failing test, watch it fail, write minimal code to pass, verify, refactor. Mandatory: verify RED before GREEN.

---

## When to Use (Positive Triggers)

- Bug fix with clear, cheap test path
- Explicit user request for TDD
- Regression test needed
- When the bug has an obvious local test target

---

## When Not to Use (Negative Triggers)

- Throwaway prototypes
- Generated code
- Configuration files
- When test path is unclear, expensive, integration-heavy, or not requested
- When no practical test path is obvious (use closest executable check instead)

---

## Required Context / Inputs

- Bug understanding: intended vs current behavior, smallest reproduction
- Access to project test command
- Ability to run tests and capture output

---

## Preconditions

- Bug reproduced or clearly understood
- Test framework available
- Host can run tests

---

## Procedure

### Step 1: Understand the Bug

- Identify intended behavior, current behavior, affected path
- Find smallest observable reproduction
- Record: bug description, reproduction steps, affected file:line

### Step 2: Choose the Narrowest Executable Check

- Prefer existing test path used for that codepath (unit, component, integration)
- If no practical test path: do NOT create from scratch
- **Fallback:** closest executable check — script, manual repro, snapshot, log assertion

### Step 3: Write the Failing Test FIRST (RED)

- One behavior per test
- Clear name describing the expected behavior
- **Real code** — no mocks unless unavoidable (production boundaries only)
- **Verify RED:** Run the test, watch it fail for the EXPECTED reason
- **MANDATORY:** If test passes immediately → STOP, investigate (wrong test or bug already fixed)

### Step 4: GREEN — Minimal Code to Pass

- Write minimal implementation to make the test pass
- Do not change the test to match wrong implementation
- Do not weaken assertions
- Run test: must pass

### Step 5: Verify GREEN

- Run the test: passes
- Run related test suite: green
- **MANDATORY:** Verify suite green before refactor

### Step 6: REFACTOR

- Clean up implementation while keeping tests green
- Extract, rename, restructure as needed
- Run tests after each refactor step

### Step 7: Repeat for Next Behavior

- If bug has multiple observable behaviors: repeat from Step 3
- Each behavior gets its own failing-first test

---

## If Failing Test Impractical

- State why no failing test was written
- Use closest executable check:
  - Minimal script that reproduces failure
  - Manual reproduction steps with captured output
  - Snapshot comparison
  - Log assertion
- Apply same RED/GREEN/REFRACTOR discipline to the check

---

## Guardrails (Never Violate)

- **Never** change tests to match wrong implementation
- **Never** weaken assertions to make test pass
- **Never** keep regression test that doesn't fail before fix
- **Never** write new test over a bad test — delete bad test first
- **Never** skip "verify RED" — if you didn't watch it fail, you don't know if it tests the right thing

---

## Expected Outputs

- Failing-before test + failure output (or closest check + failure evidence)
- Passing-after test run + nearby validation
- If no failing-before test: explicit statement why + closest check used
- Refactored implementation with green tests

---

## Verification

**Evidence recording:** VERIFIED / NOT_VERIFIED / INCONCLUSIVE / BLOCKED / NOT RUN / UNAVAILABLE


- RED phase: test fails for expected reason (watched)
- GREEN phase: minimal code, test passes, suite green
- REFACTOR: tests stay green
- Full suite green after
- Guardrails not violated
- If impractical test path: closest check documented with reason

---

## Failure Handling

| Failure Mode | Response |
|---|---|
| Test passes immediately (RED fails) | STOP: wrong test or bug already fixed |
| No practical test path | Use closest executable check, document why |
| Test requires broad harness | Skip new test, use closest check |
| Refactor breaks tests | Revert refactor, keep minimal implementation |

---

## Stop Conditions
- Work complete or goal achieved
- Blocked by external dependency or missing criteria
- Inconclusive - evidence gaps or ambiguous state
- Safe pause - interrupted with clean checkpoint


- All bug behaviors covered by failing-first tests
- All tests pass
- Suite green
- No guardrail violations

---

## Escalation

- User decision required: test path ambiguity, scope expansion
- Lead decision required: architectural testability issues

---

## Skill / Role / Tool Routing

- **Skills invoked:** verify (suite verification)
- **Roles:** Builder (implements), Reviewer (verifies RED/GREEN)
- **Tools:** Host test command, test framework
- **References:** None

---

## Examples

### Example: Off-by-One in Pagination

**Bug:** Page 2 returns page 1 data

**Execution:**
1. Understand: `offset = page * limit` should be `(page - 1) * limit`
2. Test path: existing `pagination.test.ts`
3. RED: Add test `page 2 returns correct offset` → fails (returns page 1 data)
4. GREEN: Fix offset calculation → test passes
5. Verify GREEN: suite green
6. REFACTOR: extract offset helper → tests green

### Example: Null Pointer in Config Loader

**Bug:** Config loader crashes on missing file

**Execution:**
1. Understand: `readFileSync` throws, not handled
2. Test path: `config.test.ts`
3. RED: Test `loadConfig missing file returns default` → fails (throws)
4. GREEN: Add try/catch, return default → test passes
5. Verify GREEN: suite green
6. No refactor needed

---

## Dependencies / References

- **Principles:** Procedures Over Vague, Prove It Works
- **Skills:** verify
- **References:** None

---

## Migration Record

- **Previous name/path:** skills/tdd/SKILL.md
- **Previous audit rating:** Adequate (historical input only)
- **Valuable concepts preserved:** Iron Law (no production code without failing test), Red-Green-Refactor, verify RED/GREEN mandatory, guardrails, fallback to closest executable check
- **Procedures rewritten:** Explicit test selection hierarchy, mandatory verify steps, guardrails as never-violate rules, impractical test path handling
- **Disposition:** rewrite
- **Research record:** docs/research/records/tdd.md