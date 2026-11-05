---
name: old-name
description: Use when a page still points at a skill name from the previous release.
tier: meta
rigor: standard
status: stable
pairs-with: []
---

# old-name

## When to use
A fixture that references a removed 0.1.0 skill.

## Modes
One mode: reproduce the old reference.

## Steps
1. Read the sentence that says `vstack-verify-loop`.

## Output
A validator error naming the old skill.

## Failure
The reference survives into a release.

## Tracking
Update the focus card; fall back to `resources/tracking.md`.
