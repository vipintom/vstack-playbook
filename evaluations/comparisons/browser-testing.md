# browser-testing

| Counterpart | Source | What it does better |
|---|---|---|
| webapp-testing | anthropics-skills: | browser automation patterns with Playwright |
| no direct counterpart | pstack: | verification skills rather than browser flows |

## What this keeps

vstack adds selector stability and trace-on-failure.

## Decision

Take: Adopt trace capture on every failure.
Reject: copying their structure wholesale; the pack's sections and harness
ladder stay, only the described behaviour changes.

## Provenance

Read at the commits pinned in `evaluations/comparisons/index.json`. No text was
copied; the `NOTICE` file records influence where it exists.
