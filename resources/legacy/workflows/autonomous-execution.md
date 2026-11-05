# Workflow: Autonomous Execution

## Trigger & Suitability
- Well-defined, repeatable task suitable for unattended execution
- CI/CD pipeline steps, scheduled maintenance, automated remediation
- Task has clear success/failure criteria, bounded scope
- Not for exploratory, creative, or high-judgment work
- Risk: medium (unattended failures can compound)

## Roles & Responsibilities

| Phase | Lead | Builder (Automated) | Reviewer |
|---|---|---|---|
| Define | Owns | — | — |
| Configure | Coordinates | — | Validates |
| Execute | Monitors | Runs | — |
| Verify | Checks evidence | Reports | — |
| Escalate | Decides | Alerts | — |

## Skill Sequence

### 1. Define (`vstack-sharpen`, `vstack-figure-it-out`)
- Define task: trigger (schedule, event, manual), exact procedure, success/failure criteria
- Identify: required permissions, secrets, environment, timeouts
- Define escalation: who, when, how (alert, ticket, page)
- **Required:** Complete spec before automation

### 2. Configure (`vstack-skill-authoring`, `vstack-create-verification`)
- Encode procedure as skill or script with:
  - Explicit inputs (config, secrets via env)
  - Deterministic steps (no interactive prompts)
  - Structured output (JSON for parsing)
  - Explicit exit codes (0=success, 1=expected failure, 2=unexpected)
- `vstack-create-verification` — define verification checks
- **Required:** Test in staging first

### 3. Execute (Automated)
- Triggered by schedule, event, or manual dispatch
- Runs in isolated environment (container, fresh workspace)
- `vstack-context-reset` — ensures clean state each run
- Logs structured output to known location
- **Timeout:** Bounded (default: 30 min), kills on exceed

### 4. Verify (`vstack-verify-loop`)
- Automated checks run post-execution:
  - Exit code check
  - Output validation (schema, expected artifacts)
  - Side-effect verification (DB state, file changes, API response)
- **With Plugin:** `vstack_check` records result with evidence
- **Required:** All checks pass for "success"

### 5. Escalation (`vstack-ledger`, `vstack-safe-pause`)
- On failure: record in `vstack-ledger`, trigger escalation per Define
- `vstack-safe-pause` — pause related automation if systemic
- Lead reviews: retry, fix procedure, or disable
- **No silent failures:** Every execution produces visible record

## Risk Adaptation

| Risk | Verification | Escalation | Timeout |
|---|---|---|---|
| Low (cleanup, sync) | Basic | Alert only | 10 min |
| Medium (deploy, migrate) | Full + canary | Ticket + alert | 30 min |
| High (prod remediation) | Full + manual gate | Page + jury | 60 min |

## Parallel Work
- Independent autonomous tasks → parallel
- Shared resources → serialized via lock/mutex
- Lead monitors fleet via status dashboard

## Without Plugin
- Cron + scripts + log aggregation
- Manual verification of logs
- Escalation via alerting system

## With Plugin
- `vstack_delivery` type: autonomous
- `vstack_task` defines automated procedure
- `vstack_agent` executes in isolated context
- `vstack_check` runs verification, records evidence
- `vstack_status` shows fleet status
- `vstack_safe_pause` pauses on systemic failure