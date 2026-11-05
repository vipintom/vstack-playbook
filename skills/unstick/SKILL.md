---
name: unstick
description: "Break out of repeating failure cycles: name the shared assumption, test it directly, list different approaches, pick one, restart clean"
lifecycle: draft
---

# unstick

## Purpose / Outcome

Breaks assumption cycles after 3+ failed fix attempts. Names the shared assumption, tests it directly, lists materially different approaches, picks one, restarts clean.

---

## When to Use (Positive Triggers)

- 3+ failed fix attempts on same task (same error/wrong behavior)
- Explicit user request: "unstick this"
- Notice retrying small variations of same fix
- Same assumption failing repeatedly

---

## When Not to Use (Negative Triggers)

- First or second failure → debug / tdd normal cycle
- Different errors each time → debug each
- Design phase → design

---

## Required Context / Inputs

- Failed attempt history (what changed, what happened, exact error)
- Ability to test assumptions (print, log, which, grep, minimal script)
- Ability to restart clean (git stash/checkout or equivalent)

---

## Preconditions

- At least 3 failed fix attempts documented
- Same error or wrong behavior each time

---

## Procedure

### Step 1: Stop Editing

- Do not try a third (or fourth, fifth) variation of the same fix
- Acknowledge: the problem is likely a wrong belief, not a wrong edit

### Step 2: Document Failed Attempts

- Write each failed attempt in one line:
  - What you changed
  - What happened
  - **Exact error text**
- Keep this list — most useful for final report

### Step 3: Name the Shared Assumption

- Write the assumption that ALL failed attempts shared
- One sentence
- Typical examples:
  - "This file is the one that runs"
  - "The config is loaded"
  - "The function receives a string"
  - "The cache is cleared"
  - "The error comes from my code"

### Step 4: Test the Assumption Directly

- Use the **cheapest probe** that gives a yes/no answer:
  - Print statement / log line
  - `which` or `--version`
  - `grep` for the real call site
  - Minimal script
  - Read docs for exact version installed
- Paste the result

### Step 5: If Assumption is FALSE

- You found the real problem
- Plan fix from the new fact
- Return to debug / tdd with corrected understanding

### Step 6: If Assumption HOLDS

- List **3 materially different approaches** (different mechanism / library / layer / data path)
  - Not variations of the same approach
  - Must be structurally different
- Pick one, say why in one sentence

### Step 7: Restart Clean

- If debris from failed attempts: clean state (git stash / checkout / fresh checkout)
- Record false assumption (or confirmed assumption) and chosen approach in checkpoint

### Step 8: Return to Verification

- Return to verify with new approach
- Run verification on new approach

---

## Stop Conditions
- Work complete or goal achieved
- Blocked by external dependency or missing criteria
- Inconclusive - evidence gaps or ambiguous state
- Safe pause - interrupted with clean checkpoint


- Probe explains failure → fix from new fact
- New approach passes verification
- **Two rounds of unstick failed** → report to user with:
  - All failed attempts
  - Assumptions tested
  - Evidence gathered
  - Approaches tried
  - Recommendation

---

## Rules

- Do not repeat a failed fix even with small changes
- Evidence beats reasoning
- Keep failed-attempt list (most useful for report)
- Clean state before new approach
- Two rounds maximum, then report

---

## Expected Outputs

- Failed attempts list (change + result + exact error)
- Shared assumption (one sentence)
- Probe result (yes/no + evidence)
- If assumption holds: 3 materially different approaches + chosen + why
- Checkpoint record
- If two rounds failed: full report to user

---

## Verification

**Evidence recording:** VERIFIED / NOT_VERIFIED / INCONCLUSIVE / BLOCKED / NOT RUN / UNAVAILABLE


- Trigger only after 3+ failures
- Failed attempts documented with exact errors
- Shared assumption named (one sentence)
- Probe tests assumption directly (cheapest possible)
- If holds: 3 materially different approaches listed
- Clean restart before new approach
- Checkpoint recording
- Two-round limit enforced

---

## Failure Handling

| Failure Mode | Response |
|---|---|
| Cannot identify shared assumption | List all assumptions from attempts, test each |
| Probe inconclusive | Try different probe, document |
| No 3 materially different approaches | Report to user with what was explored |
| Clean restart not possible | Document debris, proceed with caution |

---

## Escalation

- User decision required: two rounds exhausted, fundamental assumption wrong
- Lead decision required: architectural assumption invalid

---

## Skill / Role / Tool Routing

- **Skills invoked:** debug, tdd, verify, resume
- **Roles:** Builder (executes), Lead (if two rounds failed)
- **Tools:** git, print/log, grep, minimal scripts, docs
- **References:** None

---

## Examples

### Example: Cache Not Clearing

**Failed attempts (3):**
1. Added `cache.clear()` call → same stale data
2. Increased TTL → same stale data
3. Switched to `cache.flushAll()` → same stale data

**Shared assumption:** "The cache is the source of stale data"

**Probe:** `grep -r "cache" --include="*.ts" | head -20` → reveals data comes from `localStorage`, not cache

**Result:** Assumption FALSE. Real problem: localStorage not cleared. Fix: clear localStorage on logout.

---

## Dependencies / References

- **Principles:** Attack the Premise, Fix Root Causes, Prove It Works
- **Skills:** debug, tdd, verify, resume
- **References:** None

---

## Migration Record

- **Previous name/path:** skills/unstick/SKILL.md
- **Previous audit rating:** Adequate (historical input only)
- **Valuable concepts preserved:** Stop after 3 failures, name shared assumption, cheapest probe, 3 different approaches, clean restart, two-round limit, checkpoint recording
- **Procedures rewritten:** Explicit trigger (3+ failures), failed attempt documentation format, assumption naming, probe hierarchy, material difference requirement, two-round limit with report
- **Disposition:** rewrite
- **Research record:** docs/research/records/unstick.md