# AGENTS.md — vstack-playbook

The vstack 0.2.0 skill pack. Markdown and YAML only; no runtime code ships
from this repository. Tools in `tools/` exist to validate and generate the
pack, not to run it.

## Layout

| Path | Holds |
|---|---|
| `skills/<name>/SKILL.md` | 54 skills, one directory each |
| `playbooks/*.md` | 13 situation-based entry points |
| `principles/*.md` | 12 rules, each with trigger, rule and test |
| `roles/*.md` | lead, builder, reviewer |
| `rubrics/*.md` | 7 review lenses |
| `templates/*.md` | 7 fill-in documents |
| `evaluations/` | trigger fixtures, pack integrity, playbook golden runs |
| `harnesses/` | OpenCode (release), Claude Code and Codex (experimental) |
| `schema/` | JSON Schema for skills and playbooks |
| `tools/` | validators, manifest and docs generators, eval runners |
| `resources/legacy/` | 0.1.0 workflow bodies kept for reference only |

## Commands

All commands run inside the test container. Host results do not count.

```bash
docker compose run --rm pack node tools/validate.js   # schema + reference checks
docker compose run --rm pack node tools/gen-docs.js   # regenerate manifest and docs
docker compose run --rm pack node --test              # full pack suite
make test                                             # same, via Makefile
```

## Rules

- Every number in README or docs comes from `manifest.json`. Hand-typed
  counts are a test failure.
- Every content file may reference only skills, rubrics and templates that
  exist. Old 0.1.0 names (`vstack-*`, `mode`, `how`, `why`, `architect`,
  `best-of-n`, `arena`) are rejected by the validator.
- A skill body is at most 150 lines and describes judgement, not a
  transcript. Steps are ordered; each ends in an artifact.
- Every skill has a `## Tracking` section that names the harness surface:
  OpenChamber focus card and project knowledge, OpenCode todos and adapter
  tools, ledger file as fallback. `resources/tracking.md` is the ladder.
  No skill may leave state only in the chat.
- A description starts with `Use when` and names a trigger, never a
  procedure.
- 0.1.0 content is not ported unless the `NOTICE` file credits its source.
