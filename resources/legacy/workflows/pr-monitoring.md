# Workflow: PR Monitoring

## Trigger & Suitability
- PR opened, needs tracking through review, CI, merge
- Long-running PRs at risk of staleness, conflicts, scope creep
- Team wants visibility into PR pipeline health
- Risk: low (observability), but prevents high-risk stale PRs

## Roles & Responsibilities

| Phase | Lead | Builder | Reviewer |
|---|---|---|---|
| Monitor | Owns | — | Reports |
| Act | Decides | Executes | — |
| Escalate | Owns | — | Advises |

## Skill Sequence

### 1. Monitor (`vstack-watch-pr`)
- `vstack-watch-pr` — track PR state:
  - Age (time since open, since last update)
  - CI status (passing, failing, flaky)
  - Review status (requested, in-progress, approved, changes requested)
  - Merge conflicts (yes/no, with whom)
  - Scope changes (commits added after review started)
- **With Plugin:** `vstack_status` — aggregate dashboard for team/lead

### 2. Act (`vstack-figure-it-out`, `vstack-handoff`)
- **Stale (>3 days no activity):** Ping author/reviewers, identify blocker
- **Conflicts:** Author resolves, re-request review
- **Scope creep:** Lead evaluates — new scope = new PR or defer
- **Flaky CI:** Investigate, fix or quarantine
- **Review stalled:** Re-assign, escalate to Lead

### 3. Escalate (`vstack-ledger`, `vstack-safe-pause`)
- **Chronic stale (>2 weeks):** Lead decides — close, defer, or reassign
- **Repeated conflicts:** Architecture review needed (`architecture-change`)
- **Systemic CI issues:** `infrastructure-change` workflow
- `vstack-safe-pause` — pause related automation if PR pipeline blocked

### 4. Complete
- PR merged or closed
- Metrics recorded: cycle time, review iterations, conflict frequency
- `vstack-lessons` — pipeline health patterns

## Risk Adaptation

| Risk | Monitoring Frequency | Escalation Threshold |
|---|---|---|
| Low | Daily | 1 week stale |
| Medium | Per commit | 3 days stale |
| High | Continuous | 1 day stale |

## Parallel Work
- Multiple PRs monitored in parallel
- Lead triages, delegates actions

## Without Plugin
- GitHub/GitLab PR dashboard
- Manual triage in standup
- Metrics via API scripts

## With Plugin
- `vstack_delivery` type: pr-monitoring (ongoing)
- `vstack_watch_pr` polls PR state
- `vstack_status` shows team PR health
- `vstack_check` records cycle time metrics
- `vstack_agent` can auto-ping on thresholds