# Workflow: Prototype

## Trigger & Suitability
- Explore feasibility of new approach, technology, or design
- Validate assumption before committing to full implementation
- Spike to reduce uncertainty (technical, UX, integration)
- Not production code — throwaway by default
- Risk: low (throwaway) but informs high-risk decisions

## Roles & Responsibilities

| Phase | Lead | Builder | Reviewer |
|---|---|---|---|
| Sharpen | Owns | — | — |
| Discovery | Coordinates | Executes | — |
| Prototype | Decides | Executes | — |
| Evaluate | Validates | Demonstrates | Challenges |
| Decide | Owns | — | Advises |

## Skill Sequence

### 1. Sharpen (`vstack-sharpen`)
- Define the question: "Can we do X with Y?" or "Does Z solve our problem?"
- Define success criteria: what proves feasibility?
- Define timebox: max effort before pivot/abandon (default: 1-2 days)
- **Required:** Always — prototype needs falsifiable goal

### 2. Discovery (`vstack-how`, `vstack-why`, `vstack-recall`, `vstack-architect`)
- `vstack-how` — existing similar implementations, patterns
- `vstack-why` — prior art, team experience, tradeoffs
- `vstack-recall` — has team tried this before?
- `vstack-architect` — how would it fit in system?
- **Output:** Prototype plan with scope boundaries

### 3. Prototype (`vstack-prototype`, `vstack-arena`, `vstack-incremental-build`)
- Build minimal viable to test the question
- `vstack-prototype` — throwaway code, hardcoded values OK
- `vstack-arena` — if comparing 2+ approaches, build both minimally
- `vstack-incremental-build` — if building on existing code
- **Constraints:** No tests, no polish, no production patterns — only what answers the question

### 4. Evaluation (`vstack-verify-loop`, `vstack-design-audit`)
- Test against success criteria from Sharpen
- `vstack-verify-loop` — run evaluation scenarios
- `vstack-design-audit` — if prototype reveals architectural implications
- **Required:** Clear pass/fail per success criterion

### 5. Decision (`vstack-figure-it-out`, `vstack-lessons`)
- **Pass:** Prototype validates approach → hand off to appropriate workflow (`feature-delivery`, `architecture-change`, etc.)
- **Fail:** Prototype invalidates approach → document why, try alternative or abandon
- **Partial:** Some criteria met → iterate or scope down
- **Document:** What worked, what didn't, key learnings, recommended next step

## Risk Adaptation

| Risk | Timebox | Scope | Evaluation |
|---|---|---|---|
| Low (internal tool) | 4 hrs | Single question | Quick demo |
| Medium (new lib/tech) | 1-2 days | Core workflow | Criteria-based |
| High (architectural pivot) | 1 week | End-to-end slice | Full + jury |

## Parallel Work
- Multiple approaches → parallel Builders (arena mode)
- Lead coordinates, ensures fair comparison

## Without Plugin
- Prototype in separate branch or temp dir
- Evaluation notes in PROTOTYPE.md
- Decision recorded in ADR

## With Plugin
- `vstack_delivery` type: prototype
- `vstack_task` per approach
- `vstack_check` runs evaluation criteria
- `vstack_memory` persists prototype artifacts, decisions
- `vstack_agent` for parallel approaches