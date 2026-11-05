# Gate sets

A delivery declares its gates; this file supplies the minimum when it does
not. Gates are commands. If a gate is not a command, it belongs in `review`.

## Minimum by change type

| Change type | Gates | Why |
|---|---|---|
| Any code change | `unit`, `types` | behaviour and contract |
| New behaviour | above + `acceptance` | the criteria must fail without the change |
| Dependencies changed | above + `audit`, `install-clean` | lockfile and vulnerability surface |
| Schema or migration | above + `migrate-up`, `migrate-down` | reversibility is the claim |
| Container, CI or infra | above + `build`, `smoke` | the artifact must exist and start |
| Docs only | `links`, `commands`, `counts` | published errors are defects |
| Release | the delivery's full set + `changelog` | what ships is what is claimed |

## Passed, failed, blocked, not_run

- **passed** — exit 0, tree frozen, log digested.
- **failed** — non-zero exit. Never softened to "warning".
- **blocked** — the gate could not run: no host, no credentials, no fixture.
  Blocked is not a mild failure; it is an absent result.
- **not_run** — nobody attempted it. Reported as such, always.

Only `passed` satisfies a required gate. The ledger refuses the close on
`failed`, `blocked` or `not_run`.

## Flake policy

State the number of runs before measuring (`done-when: 20 consecutive passes`).
A gate that fails intermittently is `failed` with a rate, e.g. 3/20. Rerunning
until green is not evidence; it is sampling the favourable tail.

## Independent verification

Required at Deep tier, and whenever the author and the verifier would share a
wrong assumption — same context, same model, same sketch of the bug.

The independent run gets: the frozen commit, the declared gates, and the diff.
It does not get the author's summary, the suspected cause or the promised
result. If it cannot reproduce from the commit alone, that is the finding.

## Overrides

An override records: the gate, why it cannot run, what risk is accepted, who
accepted it, and when it will be run. Three facts, no adjectives. An override
without a name is not an override; it is a missing gate.
