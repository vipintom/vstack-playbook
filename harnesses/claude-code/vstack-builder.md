---
name: vstack-builder
description: Builder role for implementation and verification
harness: claude-code
---

# vstack-builder (Claude Code Adapter)

This is a Claude Code adapter for the canonical Builder role defined in `../../roles/builder.md`.

## Role Reference

See: `../../roles/builder.md` for canonical responsibilities, inputs, outputs, and procedures.

## Harness:** Claude Code

## Canonical Role:** Builder

## Role Mapping

This adapter maps the canonical Builder role to Claude Code agent configuration.

## Agent Definition (YAML Frontmatter)

```yaml
name: vstack-builder
description: "Builder role for implementation and verification"
model: inherit
tools:
  - Read
  - Glob
  - Grep
  - Edit
  - Bash
  - TodoWrite
  - TodoRead
disallowedTools: []
permissionMode: acceptEdits
maxTurns: 50
skills:
  - tdd
  - verify
  - debug
  - recovery
  - resume
```

## Agent Definition (YAML)

```yaml
name: vstack-builder
description: "Builder role for implementation and verification"
model: inherit
tools:
  - Read
  - Glob
  - Grep
  - Edit
  - Bash
  - TodoWrite
  - TodoRead
disallowedTools: []
permissionMode: acceptEdits
maxTurns: 50
skills:
  - tdd
  - verify
  - debug
  - recovery
  - resume
```

## Handoff Protocol

Receives work from Lead via subagent dispatch. Returns results with evidence. Uses `resume` at boundaries.