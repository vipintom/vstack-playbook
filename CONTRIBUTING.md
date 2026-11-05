# Contributing

vstack 0.2.0 is a personal framework, published read-only.

- **Issues are welcome.** A failing instruction, a broken reference or a skill that fires at the wrong moment is useful.
- **Pull requests are not accepted in 0.2.0.** One owner keeps the method coherent.
- **Forks are fine.** The MIT licence lets you adapt the pack; keep `NOTICE` with any redistribution.

## What a change has to show

Describe the change the way the pack requires:

1. **Trigger** — the situation where the current content fails.
2. **Baseline** — what an agent does today, quoted from a run.
3. **Change** — the smallest edit that fixes it.
4. **Evidence** — the command and output that show the fix; for a skill, one run with the skill and one without.

## Skill bar

- Front matter is `name` and `description` only.
- The description says when to use it and when not to.
- 60–90 lines, 120 maximum.
- Every step names its artifact.
- No `## Tracking`, `## Rationalizations`, `## Modes` or `## Verification` section.
- No plugin requirement. A `vstack_*` call is optional and paired with a file fallback.
- No old 0.1.0 skill name.
- Every referenced skill, playbook and principle exists.
- The skill completes without `.vstack/` and without the recorder.

Run the checks in `AGENTS.md` before opening an issue with a patch suggestion.

## Read-only

The repository is public and read-only for contributions. Issues are the input
channel; changes are made by the owner.
