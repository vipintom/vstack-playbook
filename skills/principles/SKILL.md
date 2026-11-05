---
name: shipinciples
description: Core engineering and agent operating rules
lifecycle: draft
---

# shipinciples

## Purpose / Outcome

Provides 10 core decision rules applied in order when making decisions. Each principle has a trigger, behavior, and example. Principles change decisions, they are not slogans.

---

## When to Use (Positive Triggers)

- As a reference during any decision
- When evaluating a proposed approach
- When resolving ambiguity in a skill or workflow

---

## When Not to Use (Negative Triggers)

- As a substitute for a specific skill's procedure

---

## Required Context / Inputs

- The current decision or ambiguity

---

## Preconditions

- Decision point identified

---

## Procedure

Apply these principles in order when making decisions:

1. **Harness independence first** — Does this work without proprietary runtime?
   - **Action:** Check if proposed approach requires proprietary runtime features
   - **Evidence:** List of runtime dependencies, fallback alternatives identified
   - **Decision:** If proprietary required → document fallback, apply principle 10

2. **Procedures over vague instructions** — Is there a concrete step-by-step?
   - **Action:** Verify skill/workflow has explicit Procedure with Action/Evidence/Decision
   - **Evidence:** Procedure section present with numbered steps
   - **Decision:** If missing → BLOCKED until procedure defined

3. **Flexible workflows** — Does the process fit the task size and risk?
   - **Action:** Match rigour to risk level (Low/Medium/High/Critical)
   - **Evidence:** Risk assessment, rigour calibration documented
   - **Decision:** If over-engineered → simplify to fit task

4. **Loops first** — Is there a bounded feedback loop with escalation?
   - **Action:** Identify feedback loops (TDD, verify-loop, debug, unstick) with iteration bounds
   - **Evidence:** Loop structure with max iterations and escalation path
   - **Decision:** If no loop → BLOCKED until loop defined

5. **Small team** — Can this use Lead/Builder/Reviewer + skills?
   - **Action:** Map work to Lead/Builder/Reviewer roles with skill triggers
   - **Evidence:** Role assignments, skill routing table
   - **Decision:** If role unclear → BLOCKED

6. **Evidence before completion** — What executed check supports the claim?
   - **Action:** Require executed verification for each acceptance criterion
   - **Evidence:** Verification output with evidence recording states
   - **Decision:** If no evidence → NOT VERIFIED, do not claim complete

7. **Independent challenge** — Is review sufficiently context-separated?
   - **Action:** Ensure review uses fresh context (new session or explicit reset)
   - **Evidence:** Review context isolation documented
   - **Decision:** If same-context → label as weaker review

8. **Runtime simplicity** — Does the plugin add only what instructions can't?
   - **Action:** Prefer harness tools over plugin services; instructions first
   - **Evidence:** Tool vs service boundary documented
   - **Decision:** If plugin overreaches → refactor to instructions

9. **Clear responsibility** — Who owns this: playbook, plugin, or OpenChamber?
   - **Action:** Assign ownership per concern (playbook = methodology, plugin = runtime, OpenChamber = view)
   - **Evidence:** Responsibility matrix
   - **Decision:** If ownership ambiguous → BLOCKED

10. **Degrade gracefully** — Does it work without advanced harness features?
    - **Action:** Test/verify fallback paths (sequential, directory isolation, manual checks)
    - **Evidence:** Fallback documentation, verification without advanced features
    - **Decision:** If no fallback → BLOCKED until documented

---

## Expected Outputs

- Decision aligned with principles
- Documented adaptation if harness requires it

---

## Verification

**Evidence recording:** VERIFIED / NOT_VERIFIED / INCONCLUSIVE / BLOCKED / NOT RUN / UNAVAILABLE


- Decision traceable to specific principle(s)
- No principle violated without documented reason

---

## Failure Handling

| Failure Mode | Response |
|---|---|
| Principles conflict | Document trade-off and choose |
| Harness limitation blocks principle | Document fallback |

---

## Stop Conditions
- Work complete or goal achieved
- Blocked by external dependency or missing criteria
- Inconclusive - evidence gaps or ambiguous state
- Safe pause - interrupted with clean checkpoint


- Decision made with principle alignment

---

## Escalation

- Principles conflict → document trade-off and choose
- Harness limitation blocks principle → document fallback

---

## Skill / Role / Tool Routing

- **Skills invoked:** route (invokes principles), help (finds skills), all skills (embody principles)
- **Roles:** All (apply principles)
- **Tools:** Principle index and leaf files
- **References:** playbook/principles/*.md (17 leaf files)

---

## Examples

### Example: Choosing Implementation Approach

**Decision:** Use sequential vs parallel execution
**Principles applied:** 3 (Flexible workflows — sequential for simple), 10 (Degrade gracefully — sequential works without subagents)
**Result:** Sequential chosen, documented rationale

---

## Dependencies / References

- **Principles:** All (this skill applies them)
- **Skills:** route, help
- **References:** playbook/principles/*.md

---

## Migration Record

- **Previous name/path:** skills/shipinciples/SKILL.md
- **Previous audit rating:** Adequate (historical input only)
- **Valuable concepts preserved:** 10 principles in order, trigger/behavior/example format, principle application, escalation
- **Procedures rewritten:** Explicit principle list, decision traceability, harness adaptation
- **Disposition:** rewrite
- **Research record:** docs/research/records/shipinciples.md