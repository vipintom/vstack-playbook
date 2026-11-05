---
name: visual-parity
description: Use when a UI must match a defined reference — design file, previous build or specification — and the difference must be shown, not described; not for checking behaviour on a live page (browser-testing) or for a general review (review).
---

# visual-parity

Compare what renders with what was specified, at named viewports and states.
The artifact is the image or the measured difference, not the opinion.

## When to use

- A design file exists and the build must match it.
- A redesign must not regress an existing page.
- Spacing, type, colour or state styling is disputed.
- A screenshot test exists and its baseline changed.
- A release claim includes "looks right".

Near misses:

- The question is interaction behaviour → `browser-testing`.
- The question is overall code quality → `review`.
- The design itself is undecided → `design`.

## Steps

1. **Name the reference and the states**: design file version, previous build
   hash, or written spec. Artifact: `reference`.
2. **Fix the environment**: viewport sizes, device scale, fonts, data fixture.
   Unfixed environment produces fake differences. Artifact: environment block.
3. **Capture the build** at each viewport and state. Artifact: screenshots.
4. **Diff against the reference** with an image diff; record the percentage and
   the regions. Artifact: diff images and numbers.
5. **Classify each difference**: intended (record and update reference),
   defect (fix), or noise (environment or anti-aliasing). Artifact: table.
6. **Re-capture after fixes** and attach the final pair. Artifact: evidence
   line.

## Output

| State | Viewport | Diff | Class | Action |
|---|---|---|---|---|
| empty | 390×844 | 0.4% | noise | none |
| error | 390×844 | 3.1% | defect | banner overlaps CTA |

## Failure

- **No reference exists.** Write the spec first or capture the current build as
  the baseline and say so.
- **The environment cannot be fixed.** Report the difference as unverified
  rather than passing it.
- **Anti-aliasing dominates the diff.** Use tolerance and a perceptual metric;
  record the threshold.
