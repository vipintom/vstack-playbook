# OpenCode

Release-tested harness. OpenChamber adds the focus card, project knowledge,
memory and notifications; the vstack adapter adds delivery, gate and evidence
tools.

## Detection

- Adapter: `vstack_status` answers without error.
- OpenChamber: focus and knowledge tools exist in the session.
- Neither: write `.vstack/` and continue; nothing in the method blocks.

## Mapping

| Capability | Use |
|---|---|
| `focus` | `focus_set`, `focus_status`, `focus_add`, `focus_begin`, `focus_complete` |
| `knowledge` | `openchamber_knowledge` (notes, todos, plans) |
| `memory` | `openchamber_memory` |
| `plan` | project plan, or `vstack_deliver` |
| `gate` | `vstack_gate run <name>` |
| `evidence` | `vstack_evidence` |
| `panel` | OpenChamber panel, read-only |
| `notify` | `openchamber_notify` |

## Bootstrap

At session start, `route` reads the frame; the adapter injects the routing
skill when installed. Without the adapter, the first message names `route`
explicitly.

## Notes

- The panel never writes. If a skill needs a state change, it uses the CLI or
  the file and the panel reflects it on the next read.
- Long tool names are not written into skill bodies; they live in this map.
