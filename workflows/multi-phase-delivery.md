# Workflow: Multi-Phase Delivery

## Trigger & Suitability
- Large initiative requiring multiple coordinated deliveries over time
- Epic with distinct milestones, each delivering user value
- Cross-team or cross-system effort with dependencies
- Not a single feature (use `feature-delivery`) or architecture change (use `architecture-change`)
- Risk: high (coordination complexity, timeline risk)

## Roles & Responsibilities

| Phase | Lead | Builder | Reviewer |
|---|---|---|---|
| Sharpen | Owns | — | — |
| Discovery | Coordinates | Executes | — |
| Blueprint | Decides | Contributes | Challenges |
| Plan | Owns | Reviews | Challenges |
| Phase Loop | Coordinates | Executes | Reviews |
| Integrate | Coordinates | Executes | — |
| Review | Requests | Provides | Owns (full) |
| Complete | Validates | — | Confirms |

## Skill Sequence

### 1. Sharpen (`vstack-sharpen`)
- Define initiative goal, success metrics, timeline, constraints
- Identify all stakeholders, teams, systems involved
- **Required:** Always — multi-phase needs explicit alignment

### 2. Discovery (`vstack-how`, `vstack-why`, `vstack-blast-radius`, `vstack-recall`, `vstack-figure-it-out`)
- Map current state, dependencies, team capacities
- `vstack-figure-it-out` — decompose into phase candidates
- **Output:** Phase candidates with value, effort, dependencies

### 3. Blueprint (`vstack-architect`, `vstack-blueprint`, `vstack-plan-loop`)
- Design phase sequence: each phase delivers standalone value
- `vstack-architect` — system evolution across phases
- `vstack-blueprint` — select phase breakdown with rationale
- `vstack-plan-loop` — high-level plan with milestones, dependencies, risks
- **Required:** Phase map with integration points

### 4. Phase Planning (`vstack-plan-loop` per phase)
- Each phase planned as independent delivery (`feature-delivery`, `bug-fixing`, etc.)
- Phase entry/exit criteria explicit
- Cross-phase dependencies documented
- **Required:** Plan review before each phase

### 5. Phase Execution Loop (per phase)
- Execute phase using appropriate workflow
- `vstack-handoff` — phase transitions with context transfer
- `vstack-ledger` — record decisions, risks, changes per phase
- `vstack-context-reset` — at phase boundaries
- **Integration increment:** After all parallel phases, integration phase

### 6. Integration (`vstack-verify-loop`, `vstack-review-loop`)
- End-to-end verification across all phases
- Cross-phase integration tests
- Full review with all phase Reviewers

### 7. Complete
- All phases verified, integrated, documented
- Initiative retrospective (`vstack-lessons`)
- Archive phase plans, decisions

## Risk Adaptation

| Risk | Phases | Planning | Review |
|---|---|---|---|
| Medium | 2-3, low coupling | Standard per phase | Per phase + integration |
| High | 3-5, cross-system | Full + deps | Per phase + jury at integration |
| Critical | 5+, org-wide | Milestones + checkpoints | Continuous + jury |

## Parallel Work
- Independent phases → parallel (different teams/Builders)
- Shared dependencies → sequential with clear handoffs
- Lead coordinates across all phases

## Without Plugin
- Phase plans in PHASES.md
- Handoff documents per phase
- Integration tracked manually

## With Plugin
- `vstack_delivery` type: multi-phase (parent)
- Child deliveries per phase linked to parent
- `vstack_task` per phase task
- `vstack_check` tracks phase criteria
- `vstack_memory` persists cross-phase context
- `vstack_agent` dispatches phase Builders
- `vstack_status` shows phase progress