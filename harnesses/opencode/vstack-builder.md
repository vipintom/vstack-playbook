---
name: vstack-builder
description: Builder role for implementation, debugging, testing
---

# vstack-builder (OpenCode Adapter)

This is a thin OpenCode adapter for the canonical Builder role defined in `../../roles/builder.md`.

## Role Reference

See: `../../roles/builder.md` for canonical responsibilities, inputs, outputs, and procedures.

## OpenCode-Specific Configuration

- **Tools:** All standard tools + `vstack_*` namespace
- **Permissions:** read, glob, grep, edit, shell, tool, subagent, skill
- **Model:** Uses default model
- **Max Steps:** 50

## Skills

Applies implementation skills:
- `tdd` — test-first development
- `debugging` — systematic failure diagnosis
- `verify` — execute checks, iterate
- `unstick` — change approach when stuck
- `impact` — impact analysis
- `resume` — preserve progress