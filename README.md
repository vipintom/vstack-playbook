# vstack Playbook

Version 0.2.1. A portable agentic-development method: 54 skills, 13 playbooks
and 12 principles in plain Markdown.

The pack works with no vstack software. In OpenCode you can add the optional
recorder plugin to track deliveries, tasks and evidence in `.vstack/`; in
OpenChamber the panel shows that record read-only. Neither is required.

## What is here

| Path | Holds |
|---|---|
| `skills/<name>/SKILL.md` | 54 skills, one directory each |
| `playbooks/*.md` | 13 situation-based entry points |
| `principles/*.md` | 12 rules, each with trigger, rule, test and failure mode |
| `skills/*/references/` | Depth loaded only when a skill asks for it |

Start with `skills/route/SKILL.md`. It picks one playbook, one rigour tier and at most two skills.

## Install

### Clone the pack (full method)

```bash
git clone https://github.com/vipintom/vstack-playbook.git
```

Point your harness at `skills/`, or copy each skill directory into its skills directory. Keep the clone: `playbooks/` and `principles/` are part of the method.

OpenCode user skills live in `~/.config/opencode/skills/`:

```bash
cp -r vstack-playbook/skills/* ~/.config/opencode/skills/
```

Claude Code and Codex mappings are experimental in 0.2.1. The Markdown works; the exact discovery path does not.

### Skills CLI

```bash
npx skills add github:vipintom/vstack-playbook --skill '*' --agent opencode
```

This installs the skills only. Read `playbooks/` and `principles/` from the clone.

### Offline and Windows

The pack is Markdown; a clone works offline with no install step. On Windows,
point your harness at the clone with forward slashes, for example
`C:/work/vstack-playbook/skills`. No script or native dependency is involved.

### Uninstall

Remove the skill directories you copied, or delete the clone. The pack adds
nothing outside the target skills directory.

## Use

1. `route` — choose the playbook and tier.
2. Follow the playbook: Shape → Plan → Build → Prove → Review → Close, shortened for Quick work.
3. Keep the artifact each step names: a plan, a test result, a decision, a commit, a handoff.
4. Close only when the done-predicate is proven.

A claim without an artifact is not evidence. A check that did not run is reported as not run.

## Optional recorder

The `vstack-opencode` plugin adds exactly six tools — `vstack_route`, `vstack_task`, `vstack_evidence`, `vstack_decision`, `vstack_handoff`, `vstack_close` — and writes `.vstack/` in the project. It refuses a task completion with no evidence and a close with open work.

Every skill completes without it. Where a skill offers a recording call, the same fact goes into the plan, commit or handoff when the plugin is absent.

## Optional panel

The `vstack-openchamber` extension reads `.vstack/` and shows seven views: Now, Plan, Evidence, Timeline, Decisions, Deliveries, Health. It never writes and never invents a value.

## Compatibility

- Pack: 0.2.1, no runtime and no state format. It works alone.
- Recorder: `@vipintom/vstack-opencode` 0.2.1 is optional and reads or writes
  state schema 1.
- Panel: `@vstack/openchamber` 0.2.1 is optional and reads state schema 1.
- A mismatch is named by the component that sees it; the pack itself has no
  version check to fail.

## Quality bar

- 54 skills, 13 playbooks, 12 principles.
- Front matter carries a name and a description only.
- Every step names its artifact.
- No skill requires the plugin.
- Public repository, read-only: issues are welcome, pull requests are not accepted in 0.2.1.

## Release notes and licence

- `RELEASE-NOTES.md` — scope, the 0.1.0 rename map, migration and verification.
- MIT. See `LICENSE` and `NOTICE`.
