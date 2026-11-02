---
name: vstack-why
description: Investigate design rationale using git history, PR discussions, ADRs, long-form docs, team chat, infrastructure signals, error tracking, and product analytics
lifecycle: draft
---

# vstack-why

## Purpose / Outcome

Investigates the motivation and intent behind code. Answers: what forces led to this shape? Produces: Question, Code in Question, What We Found, Inferences, Competing Hypotheses, What We Don't Know, Sources Consulted, Confidence Summary.

---

## When to Use (Positive Triggers)

- "Why does X work this way?" / "Why was Y designed this way?"
- "What's the rationale for Z?"
- "Design decision behind..."
- "Postmortem for..."
- Read-only investigation of design intent before changes
- Precursor to change: Preserve/Change/Avoid/Risk constraints for planning

---

## When Not to Use (Negative Triggers)

- "How does X work?" → vstack-how
- "What breaks if I change X?" → vstack-blast-radius
- "Fix the bug" → bug-fixing playbook
- Runtime behaviour tracing → vstack-how

---

## Required Context / Inputs

- Target code location (file:line or symbol)
- Specific question about design rationale
- Repository access (read-only)
- Access to evidence sources: git, PRs, docs, chat, observability, errors, analytics (via harness tools/MCPs)

---

## Preconditions

- Code anchor identifiable (git blame, log, PR numbers)
- Host provides access to evidence sources or MCPs
- Fresh-context agents for parallel investigation

---

## Procedure

### Step 1: Understand Target and Question

- Identify the exact code in question (file:line, symbol, commit)
- Clarify the specific "why" question
- Record: code anchor, question, expected outcome

### Step 2: Build Code Anchor

- Run `git blame` on target lines — capture commit SHAs, authors, dates
- Run `git log --oneline` on file — capture relevant commits
- Identify PR numbers from commit messages or `git log --grep`
- Record all anchors: commits, PRs, authors, dates

### Step 3: Discover Evidence Sources

- Query available MCPs/tools and map to 7 evidence categories:
  1. **Source Control** — git history, blame, log (ALWAYS)
  2. **Issue Tracker** — Jira, Linear, GitHub Issues
  3. **Long-form Docs** — ADRs, RFCs, design docs, wiki
  4. **Real-time Chat** — Slack, Discord, Teams
  5. **Infrastructure Observability** — Datadog, Grafana, CloudWatch
  6. **Error Tracking** — Sentry, Rollbar, Bugsnag
  7. **Product Analytics** — Snowflake, BigQuery, Amplitude
- For each category: identify available tool/MCP or mark unavailable

### Step 4: Spawn Parallel Investigators

- Spawn one fresh-context agent per available evidence category
- Each investigator receives: code anchor, question, their category
- Investigators return: findings, sources, confidence (High/Medium/Low), skip reason if category unavailable
- **Source Control is mandatory** — always spawn
- **Skip category only if:** no tool/MCP available OR provably irrelevant (document justification)

### Step 5: Synthesize with Epistemics Framework

- Spawn single fresh-context synthesizer with all investigator outputs
- Synthesizer applies epistemics framework:
  - **Observations** — directly verified facts
  - **Inferences** — logical conclusions from observations
  - **Hypotheses** — plausible but unproven explanations
  - **Unknowns** — explicitly listed gaps
  - **Confidence** — High/Medium/Low per claim
- Produces unified output in 8 sections

### Step 6: Output Format (8 Sections)

**Question** — Restated with code anchor

**Code in Question** — File:line, symbol, commit context

**What We Found** — Per category: findings, sources, confidence

**Inferences** — Logical conclusions from evidence

**Competing Hypotheses** — Plausible alternatives with supporting/contradicting evidence

**What We Don't Know** — Explicit gaps, missing sources

**Sources Consulted** — Table: category, tool/MCP, query, result

**Confidence Summary** — Per-inference confidence + overall

### Step 7: If Precursor to Change

- Add **Preserve/Change/Avoid/Risk** constraints for downstream planning:
  - **Preserve** — invariants that must hold
  - **Change** — what the evidence suggests changing
  - **Avoid** — patterns the evidence warns against
  - **Risk** — uncertainties that could cause issues

---

## Direct Skill Invocation

When user directly invokes vstack-why, execute procedure directly without full mode routing.

---

## Expected Outputs

- 8-section rationale investigation
- Per-category evidence with sources and confidence
- Preserve/Change/Avoid/Risk when precursor to change
- Code anchors (commits, PRs) for traceability

---

## Verification

**Evidence recording:** VERIFIED / NOT_VERIFIED / INCONCLUSIVE / BLOCKED / NOT RUN / UNAVAILABLE


- Source Control category always investigated
- Skip justifications explicit for unavailable categories
- Confidence language preserved (Observation/Inference/Hypothesis/Unknown)
- Code anchors provided
- Preserve/Change/Avoid/Risk when applicable
- No writes performed (read-only)

---

## Failure Handling

| Failure Mode | Response |
|---|---|
| No code anchor found | Report INCONCLUSIVE, request clarification |
| No MCPs/tools for any category | Use available; document gaps in What We Don't Know |
| Investigators return conflicting findings | Synthesizer presents as Competing Hypotheses |
| Host cannot spawn parallel agents | Fallback: sequential investigation |

---

## Stop Conditions
- Work complete or goal achieved
- Blocked by external dependency or missing criteria
- Inconclusive - evidence gaps or ambiguous state
- Safe pause - interrupted with clean checkpoint


- 8-section output complete
- All available categories investigated
- Confidence separated from observations
- Preserve/Change/Avoid/Risk when precursor to change

---

## Escalation

- Runtime behaviour needed → vstack-how
- Change impact needed → vstack-blast-radius
- Implementation needed → appropriate playbook

---

## Skill / Role / Tool Routing

- **Skills invoked:** vstack-how (if behaviour needed), vstack-blast-radius (if impact needed)
- **Roles:** Investigators (read-only per category), Synthesizer (read-only)
- **Tools:** git, host MCP/tools for 7 evidence categories, host read-only agent dispatch
- **References:** epistemics framework (bundled or referenced)

---

## Examples

### Example: Database Index Choice

**Question:** "Why is the users table indexed on email only, not email+status?"

**Execution:**
1. Code anchor: schema.sql:42, commit a1b2c3d
2. Source Control: commit message "Add email index for login lookup"
3. Issue Tracker: PR #234 "Optimize login query"
4. Long-form Docs: ADR-007 "Email-only index for uniqueness"
5. Chat: Slack thread "status filter added later"
6. Inference: Email uniqueness was original concern; status filter came after
7. Preserve: email uniqueness; Change: consider composite if status filter hot; Risk: partial index perf unknown

### Example: Circuit Breaker Config

**Question:** "Why is the circuit breaker threshold 5 failures in 10 seconds?"

**Execution:**
1. Code anchor: resilience.ts:15, commit e4f5g6h
2. Source Control: commit "Add circuit breaker per incident #88"
3. Infra Observability: Grafana dashboard shows 5/10s matched production incidents
4. Error Tracking: Sentry shows cascade at 6 failures
5. Inference: Threshold calibrated to historical incident boundary
6. Preserve: threshold; Avoid: lowering without load test; Risk: traffic pattern shift

---

## Dependencies / References

- **Principles:** Harness Independence, Procedures Over Vague Instructions, Attack the Premise
- **Skills:** vstack-how, vstack-blast-radius
- **References:** epistemics.md (confidence framework)

---

## Migration Record

- **Previous name/path:** skills/vstack-why/SKILL.md
- **Previous audit rating:** Adequate (historical input only)
- **Valuable concepts preserved:** 7 evidence categories, parallel investigators, synthesizer, code anchors, confidence framework
- **Procedures rewritten:** Explicit code anchor building, MCP discovery step, skip justifications, epistemics framework, Preserve/Change/Avoid/Risk for planning
- **Disposition:** rewrite
- **Research record:** docs/research/records/vstack-why.md