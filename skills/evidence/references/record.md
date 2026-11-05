# Evidence record format

One entry per claim, appended, never edited. With the recorder installed it
lives in the recorder's state; without it, write the same fields in
`docs/deliveries/<id>.md` or the commit message.

## Fields

| Field | Required | Meaning |
|---|---|---|
| `ts` | yes | ISO 8601 UTC timestamp of the run, not of the recording |
| `claim` | yes | one falsifiable sentence |
| `check` | yes | the exact command or observation, runnable by a stranger |
| `exit` | yes | process exit code; `null` for a non-command observation |
| `status` | yes | `verified`, `failed`, `blocked`, `not_verified` or `judgement` |
| `digest` | when a file exists | `sha256:<hex>` of the captured output |
| `artifact` | when a file exists | path relative to the delivery root |
| `task` | when scoped | task id the claim belongs to |
| `note` | optional | why the status is what it is |

## Rules

- **Append only.** A correction is a new line that names the line it replaces
  in `note`. Deletion destroys the only record that the first attempt failed.
- **No prose status.** "looks good" is not a status. Use the enum.
- **Failed lines stay.** The pair of a failing and a passing line at the same
  `check` is the strongest evidence in the file.
- **One claim per line.** Two claims joined by "and" hide the one that failed.
- **Digest what ran.** If `artifact` is present but `digest` is not, the file
  can change under the record.

## Tamper detection

The reader re-runs `check` and compares the digest. A mismatch means the tree,
the environment or the record changed — any of which invalidates the claim
until explained. At close, a required check whose latest entry is `failed` or
`blocked` blocks completion.

## Minimal example

```
{"ts":"2026-11-05T10:22:31Z","claim":"flaky test passes 50/50","check":"node --test --test-name-pattern flaky ×50","exit":0,"status":"verified","digest":"sha256:8c1f…","artifact":"run.log","task":"t3"}
{"ts":"2026-11-05T10:31:02Z","claim":"suite still green","check":"pnpm test","exit":1,"status":"failed","digest":"sha256:41aa…","artifact":"suite.log"}
```
