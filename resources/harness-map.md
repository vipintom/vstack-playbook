# Harness map

One ladder per capability. Use the highest rung present; never assume it;
always leave the file record. A skill names a capability, never a tool.

| Capability | OpenChamber / OpenCode | vstack adapter | CLI | File (always) |
|---|---|---|---|---|
| `focus` | `focus_set`, `focus_status`, `focus_add` | — | — | `.vstack/focus.md` |
| `knowledge` | `openchamber_knowledge` | — | — | `.vstack/ledger/progress.md` |
| `memory` | `openchamber_memory` | — | — | `AGENTS.md` note |
| `todo` | session todos | `vstack_task` | `vstack task` | task list in the delivery |
| `plan` | project plan | `vstack_deliver` | `vstack deliver` | `docs/deliveries/<id>.md` |
| `ledger` | — | `vstack_status` | `vstack status` | `.vstack/` |
| `gate` | — | `vstack_gate` | `vstack gate run` | `logs/` + digest |
| `evidence` | — | `vstack_evidence` | `vstack evidence` | `evidence.jsonl` |
| `panel` | panel projections (read) | — | `vstack report` | `.vstack/state/` |
| `notify` | `openchamber_notify` | — | — | say it in the reply |

## Rules

1. **Detect, do not assume.** Check what the session actually has before using
   a tool. A missing tool produces a clear fallback, not an error.
2. **The file record is mandatory.** The tool is a convenience; `.vstack/` or
   the delivery file is the truth a later session can read.
3. **The panel is read-only.** Skills read projections and hand the user a
   copyable command. No skill writes through the panel.
4. **Name capabilities in prose, not tools.** "With the adapter installed use
   `vstack_gate`; otherwise run the command" is the pattern; "call
   `vstack_gate`" is lock-in.
5. **The pack works with no runtime.** Remove every tool and the method still
   completes; that property is tested, not promised.

## Per-harness notes

- `harnesses/opencode.md` — tools available, detection commands, fallbacks.
- `harnesses/claude-code.md` — experimental mapping.
- `harnesses/codex.md` — experimental mapping.
