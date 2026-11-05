---
name: red-team
description: "Adversarial review: adversaries try to break a change/design, findings survive only when proven by a run against real code"
lifecycle: draft
---

# red-team

## Purpose / Outcome

Adversarial review that tries to break a change or design. Only findings proven by a run against real code survive. Reports: Intent, Findings (command, output, how breaks intent, adversaries), Dropped.

---

## When to Use (Positive Triggers)

- "Interrogate this" / "Adversarial review" / "Multi-model review"
- "Challenge this" / "Stress test this code" / "Find blind spots"
- "Tear this apart"
- When design/change needs adversarial pressure before shipping

---

## When Not to Use (Negative Triggers)

- Cooperative verification → red-team
- Design synthesis → red-team
- Structured review with lenses → review
- Jury review → red-team

---

## Required Context / Inputs

- Scope: branch diff from merge base + working tree changes
- Intent: restated from user message, commits, PR description
- Adversary model capability (adversary tier)
- Isolation per adversary (worktree preferred, directory fallback)

---

## Preconditions

- Scope identifiable (branch, commits, working tree)
- Intent clarified (ask user if unclear)
- Host supports parallel adversary dispatch with isolation

---

## Procedure

### Step 1: Frame

- **Scope** = branch diff from merge base + working tree (explicitly stated)
- **Intent** = restate in your own words from user message, commits, PR description
- Ask user if intent is unclear
- Record: scope, intent

### Step 2: Fan Out (Adversaries)

- Use red-team Phase A (runners) + Phase B structure
- **Adversary brief** (replaces arena task):
  > Break this change. Prove each finding with a run against real code, such as a failing test, a repro script, or a command output. Keep repros in your own worktree. Report: title, exact command, output, required output. Leave out anything not run.
- Spawn adversaries (minimum 2, from adversary capability tier)
- Each adversary gets: scope, intent, adversary brief
- Each adversary works in isolation with copy of uncommitted changes

### Step 3: Verify Findings

- For each adversary finding: **rerun the exact command** in a clean environment
- **Keep only if output shows failure that breaks the stated intent**
- Drop findings that: cannot be reproduced, don't break intent, are style-only without behavioural impact

### Step 4: Output

- **Intent** (restated)
- **Findings** — for each verified:
  - Title
  - Exact command
  - Output
  - How it breaks intent
  - Which adversaries found it
- **Dropped** — per adversary: count + reason (unreproducible / doesn't break intent / style-only)
- **No verified findings** — if none survive verification

---

## Expected Outputs

- Intent (restated)
- Verified findings with reproduction commands
- Dropped findings with reasons per adversary
- "No verified findings" when applicable

---

## Verification

**Evidence recording:** VERIFIED / NOT_VERIFIED / INCONCLUSIVE / BLOCKED / NOT RUN / UNAVAILABLE


- Intent restated from user/commits/PR
- Adversaries use adversary brief (break + prove with run)
- Every finding rerun in clean environment
- Only intent-breaking findings kept
- Dropped findings documented per adversary
- Multiple adversaries merge shared root cause

---

## Failure Handling

| Failure Mode | Response |
|---|---|
| Intent unclear | Ask user, do not proceed |
| Adversaries return no findings | Report "No verified findings" |
| Verification rerun fails for all | Report "No verified findings" |
| Isolation not available | Directory fallback; document |
| Host cannot dispatch parallel | Sequential fallback; document |

---

## Stop Conditions
- Work complete or goal achieved
- Blocked by external dependency or missing criteria
- Inconclusive - evidence gaps or ambiguous state
- Safe pause - interrupted with clean checkpoint


- All findings verified or dropped
- Output format complete
- No verified findings → report as such

---

## Escalation

- User decision required: intent ambiguity
- Lead decision required: finding severity disputes

---

## Skill / Role / Tool Routing

- **Skills invoked:** red-team (Phase A+B structure), verify (finding verification)
- **Roles:** Adversaries (break + prove), Verifier (reruns findings)
- **Tools:** Host parallel dispatch, isolation, git diff
- **References:** None

---

## Examples

### Example: Auth Refactor

**Scope:** Branch `refactor/auth` diff + working tree
**Intent:** "Extract JWT validation into separate module, preserve all current behaviour"

**Adversary 1 finds:** Token refresh race condition
- Command: `npm test -- --grep "concurrent refresh"`
- Output: intermittent failure, 2/10 runs
- Breaks intent: concurrent refresh now fails

**Adversary 2 finds:** Same race + missing expiry check
- Command: `node repro.js`
- Output: expired token accepted
- Breaks intent: expired tokens now valid

**Verify:** Both repros rerun → both confirmed
**Dropped:** Adversary 1 dropped 3 style findings (no behavioural impact)

**Output:** Intent, 2 verified findings (race + expiry), dropped documented

---

## Dependencies / References

- **Principles:** Harness Independence, Procedures Over Vague, Prove It Works, Attack the Premise
- **Skills:** red-team (structure), verify (verification)
- **References:** None

