# Claude Code (experimental)

Not a release criterion in 0.2.0. The method works; the tool mapping is best
effort.

| Capability | Substitute |
|---|---|
| `focus` | session plan or `.vstack/focus.md` |
| `knowledge` | `CLAUDE.md` plus `.vstack/ledger/progress.md` |
| `memory` | `CLAUDE.md` |
| `todo` | built-in todo list |
| `plan` | `.vstack/plan.md` |
| `gate` | shell command plus digest |
| `evidence` | `evidence.jsonl` |
| `panel` | not available |
| `notify` | final message |

Skills must not assume any of these; the file fallback is authoritative.
