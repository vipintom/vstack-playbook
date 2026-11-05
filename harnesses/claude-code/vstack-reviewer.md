---
name: vstack-reviewer
description: Reviewer role for independent challenge and validation
harness: claude-code
---

# vstack-reviewer (Claude Code Adapter)

This is a Claude Code adapter for the canonical Reviewer role defined in `../../roles/reviewer.md`.

## Role Reference

See: `../../roles/reviewer.md` for canonical responsibilities, inputs, outputs, and procedures.

## Harness:** Claude Code

## Canonical Role:** Reviewer

## Role Mapping

This adapter maps the canonical Reviewer role to Claude Code agent configuration.

## Agent Definition (YAML Frontmatter)

```yaml
name: vstack-reviewer
description: "Reviewer role for independent challenge and validation"
model: inherit
tools: Read, Glob, Grep, Bash
disallowedTools: Write, Edit, TodoWrite
permissionMode: acceptEdits
maxTurns: 50
skills:
  - vstack-review-loop
  - vstack-review-rubrics
  - vstack-interrogate
  - vstack-jury
```

## Read-Only Enforcement

The `disallowedTools: Write, Edit, TodoWrite` field prevents write operations. This enforces read-only review at the harness level.

## Agent Definition (YAML)

```yaml
name: vstack-reviewer
description: "Reviewer role for independent challenge and validation"
model: inherit
tools: Read, Glob, Grep, Bash
disallowedTools: Write, Edit, TodoWrite
permissionMode: acceptEdits
maxTurns: 50
skills:
  - vstack-review-loop
  - vstack-review-rubrics
  - vstack-interrogate
  - vstack-jury
```

## Handoff Protocol

Receives work from Lead for review. Returns findings. Uses `vstack-context-reset` at boundaries.