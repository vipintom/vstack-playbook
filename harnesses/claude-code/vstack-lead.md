---
name: vstack-lead
description: Lead role for delivery coordination and delegation
harness: claude-code
---

# vstack-lead (Claude Code Adapter)

This is a Claude Code adapter for the canonical Lead role defined in `../../roles/lead.md`.

## Role Reference

See: `../../roles/lead.md` for canonical responsibilities, inputs, outputs, and procedures.

## Harness:** Claude Code

## Canonical Role:** Lead

## Role Mapping

This adapter maps the canonical Lead role to Claude Code agent configuration.

## Agent Definition (YAML Frontmatter)

```yaml
name: vstack-lead
description: "Lead role for delivery coordination and delegation"
model: inherit
tools:
  - Read
  - Glob
  - Grep
  - Edit
  - Bash
  - Task
  - TodoWrite
  - TodoRead
  - Agent
disallowedTools: []
permissionMode: acceptEdits
maxTurns: 50
skills:
  - route
  - sharpen
  - plan
  - verify
  - ship
  - resume
```

## Agent Definition (YAML)

```yaml
name: vstack-lead
description: "Lead role for delivery coordination and delegation"
model: inherit
tools:
  - Read
  - Glob
  - Grep
  - Edit
  - Bash
  - Task
  - TodoWrite
  - TodoRead
  - Agent
disallowedTools: []
permissionMode: acceptEdits
maxTurns: 50
skills:
  - route
  - sharpen
  - plan
  - verify
  - ship
  - resume
```

## Delegation

Dispatches to:
- `vstack-builder` — implementation tasks
- `vstack-reviewer` — independent review tasks

## Handoff Protocol

Uses `resume` skill for context preservation at boundaries.