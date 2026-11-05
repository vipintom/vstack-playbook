# Playbook selection

Thirteen playbooks. Pick by situation, not by phase name. Each entry states
when it applies, when it does not, its exit check and its skill budget.

| Playbook | Applies when | Not for | Exit check | Budget |
|---|---|---|---|---|
| `understand` | behaviour or cause is unknown and reading is the work | a bug with a known repro | a written answer cites `path:line` | 3 |
| `spike` | a decision needs an experiment, and the result may be thrown away | production code | the question is answered or abandoned, with the artifact kept | 3 |
| `build-feature` | new behaviour with acceptance criteria | changing existing behaviour | tests exist, fail without the change, pass with it | 5 |
| `fix-bug` | a reproducible defect | unexplained behaviour (use `understand` first) | failing test → passing test, cause named | 4 |
| `refactor` | structure changes, behaviour does not | any intended behaviour change | suite green before and after, diff classified | 4 |
| `change-architecture` | a boundary, contract or ownership moves | local restructuring | decision recorded, callers migrated, old path deleted | 5 |
| `change-infrastructure` | deploys, CI, containers, secrets, cloud resources | application code | change applied from a reviewed source of truth, rollback named | 4 |
| `improve-performance` | a number must move and is measured today | no baseline exists (measure first) | before/after numbers from the same command | 4 |
| `migrate` | schema, data, API, protocol or dependency transition | clean-slate work | new path live, old path removable, rollback proven | 5 |
| `prove-ui` | a claim is about what a user sees | backend behaviour | screenshot or trace at a named viewport and state | 4 |
| `deliver` | work is complete and must ship | unfinished work | gates passed, record written, user can reproduce | 5 |
| `write-docs` | the artifact is explanation | code with docs as a side effect | a reader completes the task without asking | 3 |
| `maintain-playbook` | the pack itself changes | project work | validator and evaluations green, counts generated | 4 |

## Choosing between neighbours

- **`understand` vs `fix-bug`:** can you reproduce it in one command? If no,
  understand first. Debugging without a repro guesses.
- **`refactor` vs `change-architecture`:** does a caller outside the module
  see a difference? Yes means architecture.
- **`spike` vs `prototype`:** spike answers a question and keeps a note;
  prototype answers "what would this feel like" and keeps a build.
- **`migrate` vs `change-architecture`:** data or contracts already exist and
  must survive. Architecture changes code ownership; migration also changes
  what is stored.
- **`deliver` vs `ship`:** `deliver` is the playbook, `ship` is the skill that
  performs the release step. Route to `deliver`.

## When nothing fits

Route to `figure-it-out`. It builds a bespoke playbook with the same
guarantees: ordered steps, an artifact per step, and an exit check. A
fourteenth playbook is added only after the same situation appears three
times.
