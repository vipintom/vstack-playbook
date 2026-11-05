---
name: refactor
description: Use when structure must change while behaviour stays exactly the same, and the safety net must exist before the first edit; not for changing behaviour (tdd) or moving a boundary other code depends on (design).
tier: build
rigor: rigid
status: stable
pairs-with: [coverage, verify, review]
---

# refactor

Behaviour preserved, structure improved. The suite is green before the first
edit and after every step; any red is a stop, not a warning.

## When to use

- Duplication, long functions, unclear names or tangled dependencies.
- Preparing ground for a feature without changing behaviour yet.
- Moving code between modules when no caller sees a difference.
- A review asked for structure and the behaviour is agreed.

Near misses:

- Behaviour changes at all → `tdd`.
- A public boundary moves → `design` plus `migration`.
- There is no test coverage → `coverage` first.

## Modes

| Mode | Step size |
|---|---|
| Rename/extract | one mechanical move per commit |
| Restructure | one seam per commit, suite green between |
| Pre-feature | characterise, then refactor, then change behaviour |

`rigor: rigid` — no refactor without a green baseline, and no behaviour change
inside a refactor commit.

## Steps

1. **Prove the baseline** by running the suite; record the counts. Artifact:
   baseline output.
2. **Write down the invariant** that stays true ("same responses for these 12
   cases"). Artifact: invariant list.
3. **Make one structural change**, mechanical where possible. Artifact: diff.
4. **Run the suite**; any failure means revert this step, not patch forward.
   Artifact: green output.
5. **Repeat** until the structure is as intended. Artifact: commit series.
6. **Compare the surface** before and after: exports, routes, payloads.
   Artifact: surface diff (should be empty).
7. **Record** the refactor separately in history from any behaviour change.
   Artifact: delivery note and commit series.

## Output

A commit series where each commit is one mechanical move and the suite is green
at every point. The reviewer can stop after any commit.

## Failure

- **No tests cover the area.** Stop, write characterisation tests via
  `coverage`; refactoring blind is rewriting.
- **The suite is already red.** Fix or record the pre-existing failures before
  starting; otherwise you cannot tell your damage from theirs.
- **A step needs behaviour change.** Split it out into `tdd`; never hide it in
  a refactor.
- **The diff grows beyond review size.** Stop and split; a refactor nobody can
  read is a rewrite with extra risk.

## Rationalizations

| Excuse | Reality |
|---|---|
| "Tests are slow, I'll run them at the end." | Then a break is buried under ten changes. |
| "I'll fix this bug while I'm here." | That is two commits; separate them and keep the refactor provable. |
| "The tests are probably wrong." | Then fix the test first, visibly, not inside the refactor. |
| "The structure is obviously better." | Better is not the claim; unchanged behaviour is. |

## Tracking

- **OpenChamber present:** one action per mechanical step; `focus_status`
  "implementing".
- **OpenCode or files:** commit series is the record; delivery note links it.
- Ladder: `resources/tracking.md`.
