---
name: vstack-figure-it-out
description: Designs a bespoke, auditable playbook when no existing playbook fits or when a task is a large/cross-cutting version of a narrower task
lifecycle: draft
---

# vstack-figure-it-out

## When to Use

- No existing playbook fits the request shape (checked via `vstack-mode` routing)
- Task is a large, cross-cutting version of a narrower task (e.g., "refactor the entire codebase" vs "refactor the auth module")
- Task spans multiple standard playbook families with complex dependencies
- User explicitly requests a custom process

## When Not to Use

- For tasks that fit a standard playbook (bug-fixing, feature-delivery, refactoring, investigation, etc.)
- When a standard playbook with risk adaptation covers the need
- For routine work where bespoke design adds overhead without value

## Required Context

- Sharpened problem statement and acceptance criteria (from `vstack-sharpen`)
- Access to playbook catalogue and specialist skills
- Understanding of project conventions and constraints

## Preconditions

- `vstack-mode` has confirmed no standard playbook fits
- `vstack-sharpen` has produced sharpened problem with acceptance criteria

## Procedure

1. **Frame the problem: state outcome, falsifiable done predicate, scope, one-way doors, rigour, evidence needs**
   - **Action:** Define desired outcome, falsifiable definition of done, quantify scope, identify one-way doors, select rigour, identify evidence needed
   - **Evidence:** Done predicate, scope quantification, one-way doors list, rigour justification, evidence requirements
   - **Decision:** If no falsifiable done predicate → BLOCKED (need user input)

2. **Design the workflow: decompose, order by risk, establish verification harness, identify independent seams, assign workspaces, mark review checkpoints, produce phase list**
   - **Action:** Decompose into atomic units, order by riskiest unknowns first, design verification harness, identify independent seams, assign workspaces, mark architecture/review checkpoints, write phase list artifact
   - **Evidence:** Phase list with steps, skill triggers, verification, exit criteria
   - **Decision:** If no independent seams found → sequential execution

3. **Execute the loop: hypothesis-driven units, per-unit verification, artifact inspection, delegated validation, distinct verdicts**
   - **Action:** For each unit: state hypothesis, make smallest change, observe against done predicate, keep/revert/revise; verify before next dependent unit; inspect real artifacts; pair delegated work with validation; keep distinct verdicts
   - **Evidence:** Per-unit verification results (VERIFIED/NOT VERIFIED/INCONCLUSIVE/BLOCKED)
   - **Decision:** If unit fails verification → revert/revise; if blocked → escalate

4. **Keep the decision trail: canonical trail, reasons with evidence pointers, concise entries**
   - **Action:** Maintain vstack-ledger with one row per meaningful decision/checkpoint; record reason and evidence pointer; keep concise
   - **Evidence:** Ledger entries with commit, PR, file/line, test output, artifact, trace references
   - **Decision:** If trail incomplete → BLOCKED

5. **Verify and hand back: overall outcome verification, failed checks visible, lessons promoted, report**
   - **Action:** Verify overall against done predicate; ensure failed/inconclusive checks visible; promote corrections to structure/tests/lint; report playbook, rigour, evidence, open items, next action
   - **Evidence:** Overall verification result, lesson if promoted, handback report
   - **Decision:** If done predicate untestable → document as INCONCLUSIVE

## Non-Triggers (Explicit)

- Task fits `bug-fixing` → use `bug-fixing` playbook
- Task fits `feature-delivery` → use `feature-delivery` playbook
- Task fits `refactoring` → use `refactoring` playbook
- Task fits `investigation` → use `investigation` playbook
- Task fits `performance-investigation` → use `performance-investigation` playbook
- Task fits `prototype` → use `prototype` playbook
- Task fits `session-pickup` → use `session-pickup` playbook
- Task fits `safe-pause` → use `safe-pause` playbook

## Expected Outputs

- **Bespoke playbook artifact**: Phase list with steps, skill triggers, verification, exit criteria
- **Rigour justification**: Why this level, what would change it
- **Decision trail**: `vstack-ledger` entries with evidence pointers
- **Verification evidence**: Per-unit and overall against done predicate
- **Final handback**: Outcome, designed playbook, rigour, evidence, open items, next action

## Verification

**Evidence recording:** VERIFIED / NOT_VERIFIED / INCONCLUSIVE / BLOCKED / NOT RUN / UNAVAILABLE

- Bespoke playbook has falsifiable done predicate
- Each phase has independently checkable units
- Riskiest unknowns resolved early in sequence
- Verification harness established before changes (when baseline needed)
- Concurrent work has isolated write paths
- Decision trail records reasons and evidence pointers
- Overall outcome verified against original done predicate
- Failed/inconclusive checks visible in handback

## Stop Conditions
- Work complete or goal achieved
- Blocked by external dependency or missing criteria
- Inconclusive - evidence gaps or ambiguous state
- Safe pause - interrupted with clean checkpoint
- Bespoke playbook designed and verified against done predicate
- Implementation complete with all units VERIFIED
- Blocked: missing authority, tool, evidence, or approval
- Inconclusive: done predicate untestable; documented as such

## Failure Handling

| Failure Mode | Response |
|---|---|
| No falsifiable done predicate defined | BLOCKED — require user clarification before proceeding |
| No standard playbook fits but scope too small for bespoke | Use closest standard playbook with risk adaptation |
| Verification harness cannot be established | Escalate to Architect for design decision |
| No independent seams found for parallel work | Sequential execution with same verification rigour |
| Decision trail incomplete | BLOCKED — reconstruct before continuing |
| Overall done predicate untestable | Document as INCONCLUSIVE, escalate to Lead |

## Escalation

- User/Lead: Scope change, authority for irreversible action, done predicate clarification
- Architect: Cross-boundary design decision during execution
- Reviewer: High-risk phase requires independent assessment

## Skill / Role / Tool Routing

- **Skills invoked:** `vstack-sharpen`, `vstack-how`, `vstack-why`, `vstack-blast-radius`, `vstack-architect`, `vstack-arena`, `vstack-swarm`, `vstack-prototype`, `vstack-tdd`, `vstack-verify-loop`, `vstack-interrogate`, `vstack-review-loop`, `vstack-ledger`, `vstack-worktree`, `vstack-create-verification`, `vstack-lessons`
- **Roles:** Lead (owns figure-it-out), Builder (executes units), Reviewer (phase reviews)
- **Tools:** vstack-arena, vstack-swarm, vstack-worktree, vstack-ledger, host implementation tools
- **References:** All standard playbooks (checked for non-trigger), design-red-flags.md, rationale-template.md

## Examples

### Positive Example: Large Cross-Cutting Refactor

**Request:** "Modernize the entire data layer from callbacks to async/await across 50 files."
**Figure-it-out execution:**
1. Frame: Outcome = all callbacks to async; Done = all tests pass, no callback patterns remain, performance >= baseline. Scope = 50 files, 5 modules. One-way door = runtime behaviour change. Rigour = High (blast radius).
2. Design: Phases = (1) Discovery: map all callback sites (vstack-how, blast-radius). (2) Prototype: convert one module (vstack-prototype). (3) Arena: compare async patterns (vstack-arena). (4) Swarm: partition remaining modules (vstack-swarm). (5) Verify: full regression (vstack-verify-loop). (6) Review: Architecture + Correctness (vstack-jury).
3. Execute: Each module converted, verified, integrated.
4. Trail: Ledger entries for pattern choice, module order, integration issues.
5. Verify: All tests pass, no callbacks remain, performance verified.

### Non-Trigger Example: Single Module Refactor

**Request:** "Convert the auth module from callbacks to async."
**Mode decision:** Fits `refactoring` playbook. Use standard playbook, not figure-it-out.
**Result:** Standard playbook with risk adaptation (low risk = lighter process).

## Dependencies / References

- **Principles:** Understand Before Changing, Route Before Loading, Smallest Complete Change, Challenge Assumptions, Model Domain Explicitly, Loops Are First-Class, Evidence Before Completion, Degrade Gracefully
- **Skills:** `vstack-sharpen`, `vstack-how`, `vstack-why`, `vstack-blast-radius`, `vstack-architect`, `vstack-arena`, `vstack-swarm`, `vstack-prototype`, `vstack-tdd`, `vstack-verify-loop`, `vstack-interrogate`, `vstack-review-loop`, `vstack-ledger`, `vstack-worktree`, `vstack-create-verification`, `vstack-lessons`
- **Playbooks:** All standard playbooks (checked for non-trigger)
- **Roles:** Lead (owns figure-it-out), Builder (executes units), Reviewer (phase reviews)

## Migration Record

- **Previous name/path:** Not in v1 catalogue (pstack pattern)
- **Rewritten for v2:** Full bespoke playbook design per PRD Section 8 with 5 phases
- **Valuable concepts preserved:** Falsifiable done predicate, risk-first sequencing, verification harness, decision trail
- **Procedures rewritten:** Complete 5-phase procedure with explicit non-triggers
- **Disposition:** rewrite (new skill for v2)
- **Research record:** docs/research/records/vstack-figure-it-out.md