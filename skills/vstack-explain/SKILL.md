---
name: vstack-explain
description: Produce a concise, source-grounded explanation for a developer, reviewer, or stakeholder from discovery findings
lifecycle: draft
---

# vstack-explain

## Purpose / Outcome

Produces concise, audience-tailored explanations from discovery findings. Transforms raw facts from vstack-how/vstack-why into structured communication with explicit source citations, labeled inferences, and clear implications.

---

## When to Use (Positive Triggers)

- "Explain this to..." / "Communicate findings to..."
- After vstack-how/vstack-why produce findings needing communication
- Preparing review briefs for vstack-review-loop
- Documenting decisions for vstack-ledger

---

## When Not to Use (Negative Triggers)

- Raw discovery → vstack-how / vstack-why
- Decision recording → vstack-ledger
- Review assessment → vstack-review-loop
- Session resumption → vstack-session-pickup

---

## Required Context / Inputs

- Findings from vstack-how and/or vstack-why (with source citations)
- Target audience: developer / reviewer / stakeholder
- Desired detail level

---

## Preconditions

- Discovery complete with source citations
- Audience identified

---

## Procedure

### Step 1: Determine Audience and Purpose

- **Developer:** Implementation details, code references, technical depth
- **Reviewer:** Risks, changes, verification approach, decision support
- **Stakeholder:** Impact, trade-offs, timeline, business implications

### Step 2: Select Key Findings

- Focus on decision-relevant information only
- Omit exploratory dead ends
- Include unknowns and assumptions explicitly

### Step 3: Structure Explanation

**Context** — What was investigated and why (1-2 sentences)

**Key Findings** — Observed facts with source references (file:line, commit, evidence)

**Inferences** — Labeled as inferences with confidence (High/Medium/Low)

**Unknowns** — Explicitly stated gaps

**Implications** — For the current task/decision

### Step 4: Ground in Sources

- Every factual claim has file:line or evidence reference
- Use consistent citation format
- Link to relevant code/commits/evidence

### Step 5: Keep Concise

- Lead with conclusion/implication
- Support with evidence
- Avoid narrative fluff
- Time-box: default 10-20 min

---

## Expected Outputs

- Concise explanation (Markdown or structured text)
- Source citations for all claims
- Clear implications for current work
- Audience-appropriate detail level

---

## Verification

**Evidence recording:** VERIFIED / NOT_VERIFIED / INCONCLUSIVE / BLOCKED / NOT RUN / UNAVAILABLE


- Another engineer can verify claims from citations
- No unverified assertions
- Inferences separated from observations
- Unknowns explicit
- Appropriate detail for audience

---

## Failure Handling

| Failure Mode | Response |
|---|---|
| Missing source for claim | Mark as UNKNOWN, do not assert |
| Audience needs more detail | Provide appendix or deep-dive reference |
| Critical finding cannot be explained | Escalate to Lead |

---

## Stop Conditions
- Work complete or goal achieved
- Blocked by external dependency or missing criteria
- Inconclusive - evidence gaps or ambiguous state
- Safe pause - interrupted with clean checkpoint


- Explanation communicates necessary understanding
- All claims have source citations
- Time-box respected

---

## Escalation

- Cannot explain critical finding → escalate to Lead
- Audience needs more detail → provide appendix or deep-dive

---

## Skill / Role / Tool Routing

- **Skills invoked:** vstack-how (source of facts), vstack-why (source of rationale), vstack-blast-radius (source of impact), vstack-ledger (consumer)
- **Roles:** Explainer (produces), Reviewer/Stakeholder (consumes)
- **Tools:** File references, git, evidence artifacts
- **References:** None

---

## Examples

### Example: Developer Explanation

**Audience:** Developer implementing fix
**Findings:** vstack-how traced auth flow through middleware chain
**Explanation:**
- Context: Auth flow from login to protected route
- Key Findings: JWT validation in `auth/middleware.ts:45`, token refresh in `auth/refresh.ts:12`
- Inferences: Race condition possible on concurrent refresh (Medium)
- Unknowns: Behavior under clock skew
- Implications: Fix must handle concurrent refresh atomically

### Example: Reviewer Brief

**Audience:** Reviewer for vstack-review-loop
**Findings:** vstack-why found ADR-007 chose email-only index
**Explanation:**
- Context: Why users table indexed on email only
- Key Findings: ADR-007 "Email-only index for uniqueness", commit a1b2c3d
- Inferences: Status filter added later, not in original design (High)
- Unknowns: Composite index performance impact
- Implications: Preserve email uniqueness; consider composite if status filter hot

---

## Dependencies / References

- **Principles:** Procedures Over Vague Instructions, Evidence Before Assertions
- **Skills:** vstack-how, vstack-why, vstack-blast-radius, vstack-ledger
- **References:** None

---

## Migration Record

- **Previous name/path:** skills/vstack-explain/SKILL.md
- **Previous audit rating:** Adequate (historical input only)
- **Valuable concepts preserved:** Audience-specific structure, source grounding, inference labeling, concise format
- **Procedures rewritten:** Explicit audience determination, 5-section structure, source citation mandate, time-box
- **Disposition:** rewrite
- **Research record:** docs/research/records/vstack-explain.md