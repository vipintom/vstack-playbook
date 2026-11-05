---
name: route
description: "Central operating entry point: frames outcome, reads principles, selects playbook, creates checklist, coordinates skills, verifies, hands back"
lifecycle: draft
---

# route

## Purpose / Outcome

Provides the central operating sequence for all non-trivial engineering work: frames the problem, reads principles, classifies the request, selects the single primary playbook, calibrates rigour, creates a verbatim task checklist, executes with skill triggers, reassesses on new evidence, verifies, reviews, and hands back a structured report.

---

## When to Use (Positive Triggers)

- At the start of any non-trivial engineering work (new behavior, defect, refactor, architecture, investigation, etc.)
- When onboarding to a project using vstack
- When unsure how to proceed and structured routing is needed
- When a task needs explicit playbook selection and rigour calibration
- Explicit user request: "use route"

---

## When Not to Use (Negative Triggers)

- Casual conversation or trivial edits (typos, formatting, config tweaks) — direct edit, no mode
- User directly invokes a specific skill (e.g., "use code-tour to trace this") — execute that skill directly
- Read-only questions that need only `code-tour`, `rationale`, or `report` — invoke those skills directly
- When the request is a simple question already answered by investigation playbook — invoke investigation directly

---

## Required Context / Inputs

- User request or problem statement
- Access to playbook content: principles/, workflows/, skills/
- Ability to create/maintain a task checklist (host native todo or session-maintained PROGRESS.md)
- Understanding of current task or delivery state

---

## Preconditions

- User request or problem statement available
- Playbook content accessible (skills/, workflows/, principles/)
- For multi-step work: host supports checklist/todo or session can maintain PROGRESS.md

---

## Procedure

### Step 1: Frame the Outcome (Sharpen)

- Identify what the user wants: outcome, constraints, exclusions, what counts as done. Preserve intent; do not silently expand the request.
- Clarify if needed — Use `sharpen` if request is vague, ambiguous, or missing acceptance criteria. Ask only when a materially different product outcome, irreversible action, or unsafe assumption cannot be resolved from available evidence.
- Record the sharpened problem: problem statement, acceptance criteria (falsifiable done predicate), scope boundaries, risk level (Low/Medium/High/Critical).
- **Decision point:** If request is trivial (typo, config tweak, single-word change) → STOP: direct edit, no mode, no playbook, no checklist.

### Step 2: Read the Principle Index

- **For multi-step work:** Read the compact principle index (`principles/index.md`) before choosing the procedure.
- **Load full principle leaves** when their triggers apply during execution (do not pre-load all 17).
- **Apply principles as decision rules** — They change decisions, they are not slogans. Name the principle that shaped each decision.

### Step 3: Classify the Request

- Determine the request shape using the routing table below. Assess: scope, uncertainty, risk, reversibility, blast radius, user expectation.

| Request Shape | Primary Playbook | Common Specialist Skills |
|---|---|---|
| Read-only question about behaviour or design | `investigation` | `code-tour`, `rationale`, `report`, `resume` |
| Defect or regression | `bug-fixing` | `code-tour`, `rationale` (when needed), `tdd`, `verify`, `red-team` |
| New or changed behaviour | `feature-delivery` | `code-tour`, `rationale`, `design`, `red-team`, `red-team`, `tdd`, `verify`, `red-team` |
| Behaviour-preserving structural change | `refactoring` | `code-tour`, `impact`, `design` (when boundaries change), `verify`, `unslop` |
| Measured slowness / performance issue | `performance-investigation` | `code-tour`, `performance`, `forensics`, `forensics`, `verify` |
| Sustained optimisation against a target | `hillclimb` | `performance`, `verify`, `decisions` |
| Live runtime symptom (leak, idle-CPU, glitch) | `runtime-forensics` | `forensics`, `code-tour`, `debug`, `forensics` |
| Existing profile/trace artifact analysis | `trace-forensics` | `forensics`, `debug`, `report` |
| Empirical or design uncertainty | `prototype` | `shipototype`, `design` (where needed) |
| Visual equivalence requirement | `visual-parity` | `visual-parity`, `verify`, `verify-setup` |
| Skill or Playbook change | `skill-maintenance` | `skill-authoring`, `skill-eval`, `decisions` |
| Long-running or unattended execution | `autonomous-execution` / `multi-phase-delivery` | `figure-it-out`, `decisions`, `resume`, `handoff` |
| Resume prior work | `session-pickup` | `resume`, `resume`, `code-tour`/`rationale` (if state uncertain) |
| Stop safely | `safe-pause` | `handoff`, `resume`, `decisions` |
| Pull request preparation/status | `pr-preparation` / `pr-monitoring` | `ship`, `watch-pr`, `ready`, `review` |
| Ship/merge request | `shipping` | `ready`, `ship`, `ship`, `watch-pr` |
| No suitable match or large cross-cutting scope | `figure-it-out` | Relevant specialist skills selected by designed plan |

- **Decision point:** If request shape is unclear → re-sharpen with `sharpen`.

### Step 4: Select One Primary Playbook

- Choose the narrowest suitable playbook from the routing table. Do not invoke several overlapping playbooks.
- **If no playbook fits** or the task is a large/cross-cutting version of a narrower task → invoke `figure-it-out` to design a bespoke playbook before implementing.
- Record the selection: playbook name, reason, any material omissions from standard routing.

### Step 5: Calibrate Rigour

- Scale investigation depth, design alternatives, parallelism, decision trail, review, and approval to: risk, uncertainty, reversibility, blast radius, user expectation.
- **Do not create mandatory Quick/Standard/Advanced ceremony** for every task. Use the playbook's risk adaptation table.
- **User may explicitly override rigour** — document the override and reason.
- Document the rigour calibration: why this level, what would change it.

### Step 6: Create the Task Checklist

- **Copy the selected playbook's ordered steps verbatim** into the host's task/todo mechanism (native todo, checklist, or session-maintained PROGRESS.md).
- **Preserve all original steps** — A non-applicable step stays visible with `skip: <reason>`. Never silently delete or summarize away a playbook step.
- Add task-specific items below the playbook steps.

### Step 7: Execute the Playbook

- Work through the checklist in order. For each step:
    - Execute the action
    - Produce the required evidence/artifact
    - Make the decision (branch if specified)
    - Update checklist state truthfully: DONE / SKIP: reason / BLOCKED / IN_PROGRESS
- **Invoke specialist skills only when their documented triggers fire**. Do not load skills preemptively.
- **Reassess when evidence changes the plan** — If discovery changes scope, risk, or feasibility, revise the remaining checklist and record the reason. Do not continue a disproven plan mechanically.

### Step 8: Verify and Review

- Apply the playbook's verification requirements — Run checks, inspect artifacts, record evidence (VERIFIED / NOT VERIFIED / INCONCLUSIVE / BLOCKED).
- Apply the playbook's review requirements — Independent review if required, adversarial if high-risk, self-review if only option (label honestly).
- **A missing or inconclusive result is not a pass**. Repair broken gates; do not bypass to manufacture success.

### Step 9: Hand Back

- Report outcome: SUCCESS / FAILURE / BLOCKED / INCONCLUSIVE / SAFE_PAUSE
- Important decisions — Summary with evidence pointers
- Evidence summary — Verification results, review findings, gaps
- Unresolved risks — Known limitations, open questions
- Next action — Specific, actionable, ordered
- **For long-running/unattended work:** Use `decisions` for decision trail, `resume` for checkpoints, `handoff` for suspension.

---

## Direct Skill Invocation

When the user directly invokes a specialist skill (e.g., "use code-tour to trace this"), execute that skill's procedure directly without the full mode routing. The skill owns its triggers, procedure, and outputs.

---

## Expected Outputs

- Selected playbook name and routing rationale
- Task checklist with playbook steps copied verbatim
- Updated checklist state throughout execution
- Evidence records from verification (VERIFIED/NOT_VERIFIED/INCONCLUSIVE/BLOCKED)
- Review findings (if applicable)
- Final handback report (outcome, decisions, evidence, risks, next action)
- Decision trail (for long-running work)

---

## Verification

**Evidence recording:** VERIFIED / NOT_VERIFIED / INCONCLUSIVE / BLOCKED / NOT RUN / UNAVAILABLE

- Routing rationale documented for the selected playbook
- Checklist contains all playbook steps (none silently omitted)
- Non-applicable steps marked `skip: <reason>`
- Verification evidence recorded for each acceptance criterion
- Review conducted per playbook requirements
- Final handback includes outcome, decisions, evidence, risks, next action

---

## Failure Handling

| Failure Mode | Response |
|---|---|
| No playbook matches request | Invoke `figure-it-out` for bespoke playbook |
| Checklist mechanism unavailable | Session-maintained PROGRESS.md with same structure |
| Specialist skill trigger unclear | Re-read skill's When to Use / When Not to Use |
| Evidence inconclusive | Report INCONCLUSIVE, do not manufacture success |
| Rigour override by user | Document override and reason, apply requested rigour |
| Host missing capability (subagent, worktree, etc.) | Use documented fallback (sequential, directory isolation) |

---

## Stop Conditions
- Work complete or goal achieved
- Blocked by external dependency or missing criteria
- Inconclusive - evidence gaps or ambiguous state
- Safe pause - interrupted with clean checkpoint


- Work complete: all acceptance criteria VERIFIED, review dispositioned
- Blocked: missing authority, tool, evidence, or approval
- Inconclusive: cannot determine outcome; documented as such
- Safe pause: work interrupted; checkpoint saved with next action, verified work, blockers

---

## Escalation

- User decision required: irreversible action, scope expansion, scope reduction
- Lead decision required: playbook selection ambiguity, rigour calibration dispute
- Architect decision required: cross-boundary design change during execution

---

## Skill / Role / Tool Routing

- **Skills invoked:**
  - `sharpen` (Step 1, when request vague)
  - `figure-it-out` (Step 4, when no playbook fits)
  - `decisions` (Step 9, long-running work)
  - `resume` (Step 9, checkpoints)
  - `handoff` (Step 9, suspension)
  - `resume` (resumption)
  - Specialist skills per playbook (Step 7, when triggers fire)
- **Roles:** Lead (owns mode execution), Builder (executes checklist), Reviewer (independent review)
- **Tools:** Host checklist/todo or PROGRESS.md, git, host skill invocation
- **References:** `principles/index.md`, `workflows/` (playbooks), `skills/` (specialist skills)

---

## Examples

### Positive Example: Feature Delivery

**Request:** "Add user authentication with JWT."
**Mode execution:**
1. Sharpen: Problem = need auth; Criteria = login/register endpoints, JWT issuance, protected routes, tests.
2. Principles: Read index; Harness Independence, Procedures Over Vague, Flexible Workflows apply.
3. Classify: New behaviour, cross-boundary → `feature-delivery` playbook.
4. Select: `feature-delivery` (not `architecture-change` — not cross-cutting enough).
5. Rigour: Medium risk → full discovery, architect if needed, TDD, verify, review.
6. Checklist: Copy feature-delivery steps verbatim.
7. Execute: Discovery → Architect (if needed) → Plan → TDD per task → Verify per task → Review.
8. Hand back: Outcome, decisions (JWT library choice), evidence (test results), next action.

### Non-Trigger Example: Trivial Edit

**Request:** "Fix typo in README."
**Mode execution:** Classify as trivial. No playbook. No skills. Direct edit. Verify: lint passes.
**Result:** Minimal overhead.

---

## Dependencies / References

- **Principles:** All (index + leaves as triggered) — `principles/index.md` + leaf files
- **Playbooks:** All (selected by routing) — `workflows/`
- **Skills:** `sharpen`, `figure-it-out`, `decisions`, `resume`, `handoff`, `resume`, `help` — `skills/`
- **Roles:** Lead (owns mode execution), Builder (executes checklist), Reviewer (independent review) — `agents/roles/`

