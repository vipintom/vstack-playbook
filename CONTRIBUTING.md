# Contributing

vstack 0.2.0 is a personal framework, published read-only.

- **Issues are welcome.** Bug reports, unclear instructions and evaluation
  failures all help.
- **Pull requests are not accepted in 0.2.0.** The repository stays
  read-only for contributors so that one owner keeps the method coherent.
- **Forks are fine.** The MIT licence lets you adapt the pack; keep the
  `NOTICE` file with any redistribution.

## What a change has to meet

If you are proposing work through an issue, describe it the way the pack
itself requires:

1. **Trigger** — the situation where the current content fails.
2. **Baseline** — what an agent does today, quoted.
3. **Change** — the smallest edit that fixes it.
4. **Evidence** — the command and its output that show the fix.

## Skill standard (0.2.0)

Every skill must:

- start its `description` with `Use when`, stay under 1024 characters, and
  describe a trigger, never a procedure;
- declare `tier`, `rigor`, `status` and `pairs-with` in front matter;
- keep the body under 150 lines with the headings `When to use`, `Modes`,
  `Steps`, `Output`, `Failure`, `Rationalizations`, `Tracking`, and
  `Verification` only when it holds a fenced command;
- carry a `Rationalizations` table: the excuses an agent makes, each
  answered by what the skill does instead;
- say how the work is tracked in `## Tracking`: the OpenChamber focus card
  and project knowledge, then OpenCode's todo and adapter tools, then the
  ledger file. `resources/tracking.md` defines the ladder;
- reference only skills, rubrics and templates that exist;
- ship `evaluations/triggers/<skill>.json` with five positive and three
  negative prompts.

`node tools/validate.js` enforces all of the above. A change that cannot
pass it is not ready.
