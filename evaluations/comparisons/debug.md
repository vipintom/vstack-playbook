# debug

| Counterpart | Source | What it does better |
|---|---|---|
| systematic-debugging | superpowers: | four-phase loop with root-cause gate |
| verification-before-completion | superpowers: | proves the fix with a command |

## What this keeps

vstack adds an explicit ruled-out list and repro artifact.

## Decision

Take: Adopt the phase gate.
Reject: copying their structure wholesale; the pack's sections and harness
ladder stay, only the described behaviour changes.

## Provenance

Read at the commits pinned in `evaluations/comparisons/index.json`. No text was
copied; the `NOTICE` file records influence where it exists.
