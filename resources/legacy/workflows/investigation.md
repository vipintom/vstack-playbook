# Workflow: Investigation

## Trigger & Suitability
- Unknown cause of observed behavior (bug, performance issue, test failure, unexpected output)
- Need to understand "how does X work" or "why does Y happen"
- Not a clear defect with known fix (that's `bug-fixing`)
- Risk: variable (depends on what's found)

## Roles & Responsibilities

| Phase | Lead | Builder | Reviewer |
|---|---|---|---|
| Sharpen | Owns | — | — |
| Discovery | Coordinates | Executes | — |
| Hypothesis | Decides | Proposes | Challenges |
| Verify | Validates | Tests | — |
| Report | Owns | Contributes | — |

## Skill Sequence

### 1. Sharpen (`vstack-sharpen`)
- Define the observation precisely: what happened, what was expected, context
- Identify constraints: timebox, access, environment
- **Required:** Always — investigation needs a clear question

### 2. Discovery (`vstack-how`, `vstack-why`, `vstack-recall`, `vstack-blast-radius`)
- Map the relevant code paths, data flows, dependencies
- `vstack-how` — code walkthrough of suspected area
- `vstack-why` — find design rationale, ADRs, history
- `vstack-recall` — check if team has encountered this before
- `vstack-blast-radius` — understand potential impact surface
- **Depth adapts:** Light for localized, deep for systemic

### 3. Hypothesis Formation (`vstack-figure-it-out`)
- Generate 2-3 testable hypotheses ranked by likelihood
- Each hypothesis must have a falsification test
- **Required:** Written hypotheses before verification

### 4. Verification Loop (`vstack-verify-loop`, `vstack-debug`, `vstack-trace-forensics`)
- For each hypothesis: design test, execute, record result
- `vstack-debug` — systematic diagnosis if hypothesis fails
- `vstack-trace-forensics` — for performance/timing issues
- **Bounded:** Max 3 hypotheses before escalation
- **Escalation:** `vstack-unstick` if all hypotheses falsified

### 5. Report (`vstack-lessons`, `vstack-ledger`)
- Document: observation, hypotheses tested, results, root cause, fix recommendation
- If fix is clear → hand off to `bug-fixing` or appropriate workflow
- If cause unclear → document as known unknown, propose monitoring

## Risk Adaptation

| Risk | Discovery | Hypotheses | Verification |
|---|---|---|---|
| Low (config, typo) | Light (`vstack-how`) | 1-2 | Quick test |
| Medium (logic) | Standard (`vstack-how`, `vstack-why`) | 2-3 | Targeted tests |
| High (systemic, cross-cutting) | Deep (all skills) | 3+ | Comprehensive |
| Critical (prod, security) | Deep + expert | All plausible | Full reproduction |

## Parallel Work
- Multiple hypotheses can be tested in parallel by multiple Builders
- Lead coordinates, ensures non-overlapping test scope
- Synthesis by Lead after all results

## Without Plugin
- Manual code exploration, test execution
- Hypothesis log in INVESTIGATION.md
- Findings recorded in `vstack-ledger` equivalent (file)

## With Plugin
- `vstack_delivery` type: investigation
- `vstack_task` per hypothesis
- `vstack_check` records test results
- `vstack_memory` persists discoveries
- `vstack_status` tracks hypothesis progress