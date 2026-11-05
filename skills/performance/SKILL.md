---
name: performance
description: Use when a performance claim needs a baseline and a measured change under the same conditions; not for interpreting an existing profile (forensics) or for asserting speed without a number (evidence).
---

# performance

No number, no claim. Measure first, change one thing, measure again with the
same command, the same fixture and the same machine class.

## When to use

- Someone says slow, heavy or laggy and no baseline exists.
- A change claims to improve latency, memory or throughput.
- A regression is suspected between two releases.
- A capacity decision depends on a measured limit.
- A release gate includes a performance budget.

Near misses:

- A profile exists and needs reading → `forensics`.
- The number exists and needs recording → `evidence`.
- The concern is correctness under load → `red-team` or `verify`.

## Steps

1. **Write the claim with a number** ("p95 checkout < 300 ms at 20 rps").
   Artifact: `claim`.
2. **Fix the fixture and command** that produce the number; record them.
   Artifact: harness command.
3. **Measure the baseline at least three times**; report median and spread.
   Artifact: baseline table.
4. **Find the dominant cost** before changing code: profile, trace or query
   plan. Artifact: profile reference.
5. **Change one thing.** Re-measure with the same harness. Artifact: after
   table.
6. **Compare honestly:** same fixture, same machine class, same iterations;
   note variance and noise. Artifact: delta with confidence.
7. **Record** command, numbers and artifacts in the delivery and evidence file.
   Artifact: evidence lines.

## Output

| Run | p50 | p95 | p99 | Notes |
|---|---|---|---|---|
| baseline ×3 | 180 | 470 | 690 | 20 rps, fixture A |
| after ×3 | 120 | 240 | 380 | same command |

## Failure

- **No stable baseline** (noise > delta). Say so; do not ship the claim.
- **The machine differs between runs.** The comparison is void; rerun or
  normalise.
- **The optimisation changes behaviour.** Stop; correctness first, then speed.
- **The number improves only for the fixture.** Report the fixture's limits.
