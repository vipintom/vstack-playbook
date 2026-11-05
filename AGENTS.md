# AGENTS.md — vstack-playbook

The vstack 0.2.0 Markdown pack. There is no runtime code, build step, schema,
manifest, generator or evaluation suite in this repository.

## Layout

| Path | Holds |
|---|---|
| `skills/<name>/SKILL.md` | 54 skills, one directory each |
| `skills/<name>/references/` | Depth loaded on demand |
| `playbooks/*.md` | 13 situation-based entry points |
| `principles/index.md` | Index of the 12 principles |
| `principles/*.md` | One rule each: trigger, rule, test, failure mode |

## Rules

- Markdown only. A new file needs a reader.
- Front matter is `name` and `description` only. No tier, rigour, status,
  harness or pairs-with fields.
- A description says when to use the skill and when not to. It never
  describes the procedure.
- 60–90 lines is the target; 120 is the maximum. Longer material belongs in
  `references/` and must be loaded on demand.
- Every step names the artifact it leaves.
- No mandatory sections. `## Tracking`, `## Rationalizations`, `## Modes` and
  `## Verification` are not required and must not be reintroduced.
- Plugin recording is optional. If a skill names a `vstack_*` tool, the same
  step must name the file artifact that survives without it.
- No `.vstack/` path is required by a skill.
- A count in a document must match what is on disk.
- Every skill is tracked in git.
- 0.1.0 names are gone. Do not revive `vstack-*`, `mode`, `how`, `why`,
  `architect`, `blast-radius`, `arena`, `best-of-n` or `swarm`.
- Ported material is credited in `NOTICE`.

## Verification

```bash
find skills -name SKILL.md | wc -l        # 54
find playbooks -maxdepth 1 -name '*.md' | wc -l   # 13
find principles -maxdepth 1 -name '*.md' ! -name index.md | wc -l  # 12
grep -rl '^## Tracking\|^## Rationalizations\|^## Modes\|^## Verification' skills  # empty
```

A change is ready when those commands agree and the changed skill still
completes without the recorder.
