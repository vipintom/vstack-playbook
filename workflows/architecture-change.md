# Workflow: Architecture Change

## Trigger & Suitability
- Structural change to system boundaries, data models, service contracts, or core abstractions
- New service, module, or component with system-wide impact
- Migration between architectures (monolith → services, REST → GraphQL, etc.)
- Risk: high to critical (system-wide impact)

## Roles & Responsibilities

| Phase | Lead | Builder | Reviewer |
|---|---|---|---|
| Sharpen | Owns | — | — |
| Discovery | Coordinates | Executes | — |
| Blueprint | Decides | Contributes | Challenges |
| Blast Radius | Owns | Analyzes | Validates |
| Plan | Owns | Reviews | Challenges |
| Implement | Coordinates | Executes | — |
| Verify | Checks evidence | Executes checks | — |
| Review | Requests | Provides | Owns (full + jury) |
| Complete | Validates | — | Confirms |

## Skill Sequence

### 1. Sharpen (`vstack-sharpen`)
- Define architectural problem, goals, non-goals, constraints
- Identify stakeholders, migration scope, rollback requirements
- **Required:** Always — architecture changes need explicit scope

### 2. Discovery (`vstack-how`, `vstack-why`, `vstack-blast-radius`, `vstack-recall`)
- Map current architecture: boundaries, contracts, data flows, dependencies
- `vstack-how` — codebase walkthrough of affected areas
- `vstack-why` — find existing ADRs, design decisions
- `vstack-blast-radius` — full system impact analysis
- `vstack-recall` — team knowledge of prior attempts

### 3. Blueprint (`vstack-architect`, `vstack-arena`, `vstack-blueprint`)
- Generate 2-3 architectural alternatives with tradeoffs
- `vstack-architect` — design each alternative (boundaries, contracts, data models)
- `vstack-arena` — compare alternatives on: complexity, migration cost, performance, team autonomy, reversibility
- `vstack-blueprint` — select with documented rationale
- **Required:** ADR for selected approach

### 4. Blast Radius Deep Dive (`vstack-blast-radius`, `vstack-interrogate`)
- Identify all affected: callers, data stores, APIs, tests, docs, teams
- `vstack-interrogate` — deep dive on highest-risk dependencies
- Define migration strategy: big-bang vs incremental, feature flags, rollback
- **Required:** Migration plan with checkpoints

### 5. Plan Loop (`vstack-plan-loop`)
- Decompose into verifiable increments per `verifiable-increments` principle
- Each increment: delivers value, independently verifiable, rollbackable
- Dependencies explicit, critical path identified
- **Required:** Plan review by Reviewer before implementation

### 6. Implementation Loop (per increment)
- `vstack-tdd` — contract tests first (new boundaries)
- `vstack-incremental-build` — for data/schema migrations
- `vstack-verify-loop` — contract tests + integration tests
- `vstack-debug` — diagnose failures
- `vstack-context-reset` — at increment boundaries

### 7. Review Loop (`vstack-review-loop`, `vstack-jury`)
- **Full review:** Correctness, Security, Performance, Maintainability, Migration Safety
- `vstack-jury` — mandatory for critical changes (3+ reviewers)
- Resolve all critical/high findings before next increment

### 8. Complete
- All increments verified, migration complete, rollback tested
- ADR updated with outcome
- `vstack-lessons` — capture architectural patterns

## Risk Adaptation

| Risk | Blueprint | Blast Radius | Plan | Review |
|---|---|---|---|---|
| High | Required + ADR | System | Full + deps | Full + jury |
| Critical | Required + ADR + expert | System + external | Milestones | Jury mandatory |

## Parallel Work
- Independent increments (no shared deps) → parallel Builders
- Integration increment → single Builder after parallel completes
- Lead coordinates boundaries explicitly

## Without Plugin
- ADR documents in docs/adr/
- Migration tracked in MIGRATION.md
- Manual test execution per increment
- Jury review via separate sessions

## With Plugin
- `vstack_delivery` type: architecture
- `vstack_task` per increment
- `vstack_check` runs contract/integration tests
- `vstack_memory` persists ADR, migration state
- `vstack_agent` dispatches parallel Builders
- `vstack_status` tracks increment progress