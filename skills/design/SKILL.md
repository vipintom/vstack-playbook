---
name: design
description: "Cross-boundary design: sketch types, signatures, module structure before code; synthesize alternatives; fill in against chosen sketch"
lifecycle: draft
---

# design

## Purpose / Outcome

Produces a cross-boundary design sketch before implementation: usage sketch (caller perspective), type sketch (signatures, module map), and rationale. Invokes red-team for design alternatives when needed.

---

## When to Use (Positive Triggers)

- "Architect this" / "Design this"
- Cross-boundary work: new module boundaries, data flows, contracts
- Non-trivial work where jumping to code would lock in wrong shape
- Explicit user request for design phase before implementation

---

## When Not to Use (Negative Triggers)

- Straightforward implementation (no design alternatives) → skip, go to feature-delivery
- Single-module changes without boundary implications → skip
- Pure implementation tasks → feature-delivery playbook without architect
- Adversarial review needed → red-team
- Parallel coverage/races → red-team

---

## Required Context / Inputs

- Sharpened problem statement with acceptance criteria
- Understanding of surrounding systems (via code-tour/rationale)
- Access to red-team for design alternatives
- Ability to implement against sketch (or handoff to builder)

---

## Preconditions

- Problem framed with falsifiable done predicate
- Relevant subsystems understood (how/why completed if needed)
- red-team available for alternative generation

---

## Procedure

### Phase A: Ground the Problem

- **Run code-tour** on relevant subsystems to build real mental model of every system the new code touches
- **Run rationale** if the design redefines ownership or layering — rationale becomes constraint, not guess
- **Skip Phase A only** when work is genuinely greenfield with no surrounding system to integrate
- Produce: architectural explanation of touched subsystems, constraints from why

### Phase B: Sketch via Arena

- **Invoke red-team** with design-sketch task and Phase A grounding artifacts
- **Require 2+ structurally distinct candidates** — not cosmetic variations
- **Screen candidates against design red flags** (references/design-red-flags.md) before synthesis
- **Apply interface depth principle** — prefer design that hides complexity behind smaller public surface
- Arena returns: synthesized sketch + synthesis note (base, why, judge verdict, grafts, rejections, convergence, verification)

### Phase C: Agree (Opt-in Checkpoint)

- **Present sketch to user** — usage sketch + type sketch + rationale
- **Checkpoint ONLY when explicitly requested** by user ("review sketch before implementing")
- If no explicit request: proceed to implementation
- Record: checkpoint requested (yes/no), user feedback if any

### Phase D: Implement Against Sketch

- Fill in the sketch with real implementation
- **Sketch is contract** — deviations from sketch are signal, not drift
- If deviation needed: record why, update sketch, continue
- Apply TDD (tdd) for bug fixes with clear test paths
- Apply verification (verify) per task

### Phase E: Scrap When Wrong

- **Stop and redesign** when these patterns appear:
  - **Workarounds** — code that exists only to compensate for earlier design choice
  - **Escape hatches** — "temporary" flags, bypasses, special cases accumulating
  - **Lock reflex** — same module touched repeatedly for related changes
  - **Caller knowledge** — callers reaching into internals they shouldn't know
- When triggered: return to Phase B with new constraints from scrap analysis

---

## Expected Outputs

- **Usage sketch** — caller perspective first: what the consumer writes, what they get back
- **Type sketch** — signatures, types, module map, data flow
- **Rationale** — per template (references/rationale-template.md): usage sketch, synthesis decision, constraints, trade-offs
- **Synthesis note** (from arena): base candidate, why, judge verdict, grafts, rejections, convergence, verification

---

## Verification

**Evidence recording:** VERIFIED / NOT_VERIFIED / INCONCLUSIVE / BLOCKED / NOT RUN / UNAVAILABLE


- Grounding completed (how/why) before sketch unless greenfield
- 2+ structurally distinct arena candidates
- Red-flags screening applied
- Opt-in checkpoint behavior correct
- Implementation matches sketch or deviations recorded
- Scrap triggers detected and acted on

---

## Failure Handling

| Failure Mode | Response |
|---|---|
| No surrounding system to ground | Skip Phase A, proceed to sketch |
| Arena returns <2 distinct candidates | Re-frame task, re-run arena with clearer rubric |
| Checkpoint requested but user unavailable | BLOCKED until checkpoint resolved |
| Scrap trigger detected | Return to Phase B, document scrap reason |
| Implementation deviates without recording | STOP, record deviation, update sketch |

---

## Stop Conditions
- Work complete or goal achieved
- Blocked by external dependency or missing criteria
- Inconclusive - evidence gaps or ambiguous state
- Safe pause - interrupted with clean checkpoint


- Sketch produced and (optionally) checkpointed
- Implementation complete against sketch
- All scrap triggers resolved or no triggers present
- Verification passes

---

## Escalation

- User decision required: checkpoint feedback, scope change
- Lead decision required: cross-boundary ownership dispute
- Architect decision required: scrap trigger on fundamental boundary

---

## Skill / Role / Tool Routing

- **Skills invoked:** code-tour, rationale (Phase A), red-team (Phase B), tdd (Phase D), verify (Phase D)
- **Roles:** Architect (owns design), Builder (implements against sketch), Reviewer (checkpoint if requested)
- **Tools:** red-team, host implementation tools
- **References:** design-red-flags.md, rationale-template.md

---

## Examples

### Example: New Payment Module

**Request:** "Architect a payment processing module"

**Execution:**
1. Ground: how on billing, orders, notifications; why on current payment coupling
2. Arena: 3 candidates — (a) strategy pattern, (b) event-driven, (c) mediator
3. Red-flags: (c) mediator creates central coupling
4. Judge picks (a) strategy, grafts error handling from (b)
5. Sketch: PaymentProcessor interface, Stripe/PayPal strategies, factory
6. Implement: TDD per strategy, verify-loop integration
7. No scrap triggers → complete

### Example: Greenfield API

**Request:** "Design the public API for the new service"

**Execution:**
1. Ground: skip (greenfield)
2. Arena: 2 candidates — (a) REST, (b) GraphQL
3. Red-flags: (b) overkill for simple CRUD
4. Judge picks (a), grafts versioning from (b)
5. Sketch: OpenAPI spec, handlers, middleware
6. Implement: feature-delivery playbook

---

## Dependencies / References

- **Principles:** Harness Independence, Procedures Over Vague, Interface Depth, Prove It Works
- **Skills:** code-tour, rationale, red-team, tdd, verify
- **References:** design-red-flags.md, rationale-template.md

