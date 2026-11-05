# maintain-playbook

**Applies when:** the pack itself changes — skill, playbook, principle, schema, evaluation.
**Not for:** project work that merely uses the pack.
**Budget:** 6 skill loads.

## Steps

| # | Skill | Artifact |
|---|---|---|
| 1 | `shape` | the gap and the evidence it recurs |
| 2 | `skill-authoring` | description, fixtures, body, references |
| 3 | `skill-eval` | trigger accuracy and one procedure run |
| 4 | `verify` | validator, pack tests, docs regenerated |
| 5 | `review` | standard compliance and boundary collisions |
| 6 | `ship` | version bump and changelog |

## Exit criteria

- Validator reports zero errors; pack tests pass in the container.
- Every published count is generated, not typed.
- The skill's description excludes its nearest sibling.

## Without subagents

Run the evaluation locally before review. A skill that has never fired in a
test has not been tested; the corpus is the cheapest reviewer available.
