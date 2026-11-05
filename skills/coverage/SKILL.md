---
name: coverage
description: Use when it is unclear whether the tests prove the acceptance criteria, or existing behaviour needs a safety net before change; not for writing the next test (tdd) or for running the gates (verify).
tier: build
rigor: standard
status: stable
harness: [ledger, todo]
pairs-with: [tdd, verify, rubrics]
---

# coverage

Map criteria to checks. Line coverage is a by-product; the question is which
claim about behaviour has no test that could fail.

## When to use

- A delivery lists acceptance criteria and the tests do not obviously match.
- Refactoring needs a safety net around existing behaviour.
- A bug slipped through and the suite looked green.
- A reviewer asks "where is this tested?".
- A new skill or playbook claims guarantees nobody checks.

Near misses:

- The next behaviour needs a failing test → `tdd`.
- The gates must be run → `verify`.
- The criteria themselves are unclear → `shape` or `rubrics`.

## Modes

| Mode | Question |
|---|---|
| Criteria map | every criterion has a check that can fail |
| Characterisation | freeze current behaviour before changing it |
| Gap hunt | mutation or fault injection to find weak tests |

## Steps

1. **List the criteria as claims** (one per line, falsifiable). Artifact:
   criteria list.
2. **For each, find the test that would fail if the claim were false.** Cite
   `path:test:line`. Artifact: mapping table.
3. **Mark the gaps**: no test, test that cannot fail, test of the mock.
   Artifact: gap list with reason.
4. **Check the weak tests** by breaking the implementation in a scratch branch
   and confirming the test goes red. Artifact: mutation result.
5. **Rank gaps by consequence**, not by count. Artifact: ordered gaps.
6. **Hand the top gaps to `tdd`**; a gap is not closed by a coverage number.
   Artifact: task list.

## Output

| Criterion | Test | Can fail? | Gap |
|---|---|---|---|
| empty email rejected | `test/form.test.ts:41` | yes | — |
| retry is idempotent | none | — | no test |

## Failure

- **A criterion is untestable as written.** Rewrite it; that is a `shape` fix.
- **The test cannot fail** because it asserts a mock. Delete or rewrite it;
  coverage that cannot fail is worse than none.
- **Mutation testing is too slow.** Sample the riskiest paths; say which were
  not mutated.

## Rationalizations

| Excuse | Reality |
|---|---|
| "Coverage is 90%." | Coverage counts lines executed, not claims checked. |
| "The test exists, so it is covered." | Only if it fails when the behaviour breaks. |
| "Writing tests for old code is waste." | Characterising it is what makes the refactor safe. |
| "The gap is unlikely." | Unlikely is a frequency, not a proof. |

## Tracking

- **OpenChamber present:** the mapping table on the delivery note; gaps as
  todos.
- **OpenCode or files:** `docs/deliveries/<id>.md` under "Coverage".
- Ladder: `resources/tracking.md`.
