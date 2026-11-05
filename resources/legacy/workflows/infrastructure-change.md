# Workflow: Infrastructure Change

## Trigger & Suitability
- Changes to deployment, CI/CD, cloud resources, networking, observability, or developer platform
- New infrastructure component (database, queue, cache, secrets manager)
- Scaling, migration, or cost optimization of existing infrastructure
- Risk: medium to critical (affects all environments)

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
| Review | Requests | Provides | Owns (full) |
| Complete | Validates | — | Confirms |

## Skill Sequence

### 1. Sharpen (`vstack-sharpen`)
- Define infrastructure goal: capability, scale, cost, reliability target
- Identify environments affected (dev, staging, prod), rollback plan
- **Required:** Always — infra changes need explicit scope and rollback

### 2. Discovery (`vstack-how`, `vstack-why`, `vstack-blast-radius`, `vstack-recall`)
- Map current infrastructure: resources, dependencies, configs, secrets
- `vstack-how` — current IaC, deployment pipelines, monitoring
- `vstack-why` — find existing decisions, constraints, vendor contracts
- `vstack-blast-radius` — impact on services, teams, data, compliance
- `vstack-recall` — prior incidents, scaling events, migrations

### 3. Blueprint (`vstack-architect`, `vstack-blueprint`, `vstack-arena`)
- Design alternatives: build vs buy, regions, sizing, HA, backup
- `vstack-architect` — infrastructure architecture (network, data, compute)
- `vstack-arena` — compare on: cost, reliability, operational burden, team skill fit
- `vstack-blueprint` — select with rationale
- **Required:** Documented decision with cost/reliability estimates

### 4. Blast Radius & Migration (`vstack-blast-radius`, `vstack-incremental-build`)
- Identify all dependent services, data migration needs, DNS, secrets
- Define migration strategy: blue-green, rolling, canary, maintenance window
- Rollback procedure tested in staging
- **Required:** Runbook for rollback, tested in non-prod

### 5. Plan Loop (`vstack-plan-loop`)
- Decompose into safe increments: provision → validate → migrate → decommission
- Each increment: verifiable, rollbackable, observable
- Dependencies: data migration before service cutover
- **Required:** Plan review with infra/platform team

### 6. Implementation Loop (per increment)
- `vstack-incremental-build` — IaC changes (Terraform, CloudFormation, etc.)
- `vstack-verify-loop` — plan output, staging deployment, smoke tests
- `vstack-debug` — diagnose deployment failures
- `vstack-context-reset` — at environment boundaries

### 7. Review Loop (`vstack-review-loop`)
- **Full review:** Security, Reliability, Cost, Operational, Compliance
- Infrastructure-specific lenses: disaster recovery, scaling behavior, secrets handling
- **Required:** For prod-impacting changes

### 8. Complete
- All environments migrated, monitoring alerting validated
- Runbook updated, team trained
- `vstack-lessons` — capture infra patterns

## Risk Adaptation

| Risk | Discovery | Blueprint | Migration | Review |
|---|---|---|---|---|
| Medium (dev/staging) | Standard | If new pattern | Rolling | Standard |
| High (prod, stateful) | Deep | Required | Blue-green + tested rollback | Full |
| Critical (prod, stateless, wide) | Deep + expert | Required + ADR | Canary + milestones | Full + platform team |

## Parallel Work
- Independent resources (separate VPC, account) → parallel
- Shared resources (database, network) → sequential with coordination
- Lead coordinates with platform team

## Without Plugin
- IaC changes via PR, plan output as evidence
- Manual staging deployment verification
- Runbook in RUNBOOK.md

## With Plugin
- `vstack_delivery` type: infrastructure
- `vstack_task` per increment
- `vstack_check` runs plan/apply, smoke tests
- `vstack_memory` persists infra state, runbooks
- `vstack_agent` for parallel resource provisioning