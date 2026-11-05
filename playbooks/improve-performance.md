# improve-performance

**Applies when:** a number must move and can be measured today.
**Not for:** no baseline exists (measure first); a profile needs reading (`forensics`).
**Budget:** 6 skill loads.

## Steps

| # | Skill | Artifact |
|---|---|---|
| 1 | `shape` | claim with a number and threshold |
| 2 | `performance` | baseline, harness command, spread |
| 3 | `forensics` | the dominant cost, cited to code |
| 4 | `performance` | one change, re-measured with the same harness |
| 5 | `evidence` | before/after table and digests |
| 6 | `verify` | gates, including the correctness suite |

## Exit criteria

- Baseline and after use the same command, fixture and machine class.
- The delta exceeds the measured variance.
- Correctness gates pass; the optimisation did not change behaviour.

## Without subagents

Measure and change serially; parallel benchmarks contaminate each other. If the
machine is noisy, report the spread and stop rather than averaging it away.
