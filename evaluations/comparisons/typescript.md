# typescript

| Counterpart | Source | What it does better |
|---|---|---|
| test-driven-development | superpowers: | tests describe intended behaviour |
| no direct counterpart | mattpocock-skills: | type-level exercises, not project procedure |

## What this keeps

vstack ties types to the build gate and declaration surface.

## Decision

Take: Keep; add the declaration-diff step as mandatory for libraries.
Reject: copying their structure wholesale; the pack's sections and harness
ladder stay, only the described behaviour changes.

## Provenance

Read at the commits pinned in `evaluations/comparisons/index.json`. No text was
copied; the `NOTICE` file records influence where it exists.
