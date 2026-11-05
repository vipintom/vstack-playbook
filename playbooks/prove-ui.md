# prove-ui

**Applies when:** a claim is about what a user sees or does in an interface.
**Not for:** backend behaviour (`fix-bug`); a design still being chosen (`design`).
**Budget:** 5 skill loads.

## Steps

| # | Skill | Artifact |
|---|---|---|
| 1 | `shape` | the states and viewports that must be proven |
| 2 | `visual-parity` | screenshots and diffs against the reference |
| 3 | `browser-testing` | the interaction path, with selectors and assertions |
| 4 | `evidence` | screenshots, trace and digests |
| 5 | `verify` | the project's UI gates |

## Exit criteria

- Each named state has a screenshot at each named viewport.
- The interaction path runs from a cold page load, not a warm state.
- Differences are classified: intended, defect, or noise.

## Without subagents

Capture and assert in one session; keep the fixture data fixed. A screenshot
from a warm browser with unknown state is not evidence.
