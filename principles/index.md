# vstack principles

Twelve rules. Each names a trigger, a test and the failure it prevents.

| Principle | Rule |
|---|---|
| [harness-independence-first](harness-independence-first.md) | The method outranks the tools. |
| [procedures-over-vague-instructions](procedures-over-vague-instructions.md) | A skill is a procedure, not an encouragement. |
| [evidence-before-completion](evidence-before-completion.md) | A claim is an artifact. |
| [smallest-complete-change](smallest-complete-change.md) | Solve the stated problem, in the smallest change that fully solves it. |
| [understand-before-changing](understand-before-changing.md) | Read the path before editing it. |
| [model-domain-explicitly](model-domain-explicitly.md) | Name the things in the problem, then let the code follow. |
| [respect-boundaries](respect-boundaries.md) | Every boundary has one owner. |
| [route-before-loading](route-before-loading.md) | Choose the playbook and the tier before loading skills. |
| [independent-challenge](independent-challenge.md) | The author does not grade their own work. |
| [verifiable-increments](verifiable-increments.md) | Every increment ends in something checkable. |
| [flexible-workflows-not-mandatory-ceremony](flexible-workflows-not-mandatory-ceremony.md) | Rigour follows risk. |
| [degrade-gracefully](degrade-gracefully.md) | Prefer the smallest runtime that meets the need. |

When two principles conflict, apply the precedence in `skills/principles/SKILL.md`:
truth before safety, safety before reversibility, reversibility before speed, speed before elegance.
