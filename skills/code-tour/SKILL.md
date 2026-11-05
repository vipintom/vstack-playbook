---
name: code-tour
description: Explain runtime behaviour, entry points, data flow, state ownership and component boundaries using source references
lifecycle: draft
---

# code-tour

## Purpose / Outcome

Provides architectural explanations of runtime behaviour at the level of a senior engineer onboarding onto a subsystem. Produces: Overview, Key Concepts, How It Works, Where Things Live, Gotchas.

---

## When to Use (Positive Triggers)

- "How does X work?" / "Trace flow from A to B"
- "Walk me through the code path for..."
- "Where does Y happen in the code?"
- Read-only investigation of runtime behaviour before making changes
- Prerequisite for impact, design, debug

---

## When Not to Use (Negative Triggers)

- "Why was this designed this way?" → rationale
- "What breaks if I change X?" → impact
- "Fix the bug in X" → bug-fixing playbook → debug
- Trivial, well-understood local changes
- When discovery is already documented and current

---

## Required Context / Inputs

- Repository access (read-only)
- Sharpened problem statement (from sharpen if needed)
- Target area/files identified
- Ability to spawn fresh-context read-only agents (harness-dependent)

---

## Preconditions

- Code can be read (not obfuscated/minified without source maps)
- Entry points identifiable
- Host supports read-only investigation (fresh context, no writes)

---

## Procedure

### Step 1: Assess Complexity

- **Simple:** Single module, clear entry point, ≤3 files — single explainer explores and explains
- **Complex:** Multiple modules, unclear boundaries, >3 files — 2-4 parallel explorers → single explainer synthesis

### Step 2: Simple Path — Single Explainer

- Spawn one fresh-context read-only agent with the sharpened question
- Agent explores: entry points → data flow → state ownership → component boundaries
- Agent produces: Overview, Key Concepts, How It Works, Where Things Live, Gotchas
- Present output with light edits for clarity

### Step 3: Complex Path — Parallel Explorers + Synthesizer

- Decompose into 2-4 investigation angles (e.g., API layer, data layer, state machine, error paths)
- Spawn 2-4 parallel fresh-context read-only agents, each with one angle
- Each explorer returns: files read, key findings, open questions
- Spawn single fresh-context read-only synthesizer with all explorer outputs
- Synthesizer produces unified: Overview, Key Concepts, How It Works, Where Things Live, Gotchas
- Present synthesizer output

### Step 4: Output Format (Both Paths)

**Overview** — 2-3 sentences: what the system does, primary flow, scale

**Key Concepts** — 4-8 bullets: domain terms, patterns, invariants

**How It Works** — Sequential flow from entry point through transformations to output, with file:line references

**Where Things Live** — Table: concept → file(s) → ownership (module/team if known)

**Gotchas** — 3-6 items: non-obvious behaviour, footguns, performance traps, version-specific quirks

---

## Direct Skill Invocation

When user directly invokes code-tour, execute procedure directly without full mode routing.

---

## Expected Outputs

- Architectural explanation in the 5-section format above
- File:line references for all claims
- Open questions flagged
- Complexity assessment used (simple/complex)

---

## Verification

**Evidence recording:** VERIFIED / NOT_VERIFIED / INCONCLUSIVE / BLOCKED / NOT RUN / UNAVAILABLE


- Explanation covers entry point → output flow
- File:line references provided for all key claims
- Gotchas are non-obvious (not restating obvious code)
- Complexity path matches actual scope
- Read-only — no writes performed

---

## Failure Handling

| Failure Mode | Response |
|---|---|
| Entry point not found | Report INCONCLUSIVE, list searched paths |
| Code unreadable (obfuscated) | Report BLOCKED, require source maps |
| Explorers return conflicting findings | Synthesizer notes conflict, presents both |
| Host cannot spawn read-only agents | Fallback: sequential exploration in current context |

---

## Stop Conditions
- Work complete or goal achieved
- Blocked by external dependency or missing criteria
- Inconclusive - evidence gaps or ambiguous state
- Safe pause - interrupted with clean checkpoint


- Explanation complete with 5 sections
- All key claims have file:line references
- Open questions explicitly listed
- User confirms understanding or asks follow-up

---

## Escalation

- Design rationale needed → rationale
- Change impact needed → impact
- Failure reproduction needed → debug

---

## Skill / Role / Tool Routing

- **Skills invoked:** sharpen (if request vague), rationale (if rationale needed), impact (if impact needed)
- **Roles:** Explorers (read-only), Synthesizer (read-only)
- **Tools:** grep/glob/read (code exploration), host read-only agent dispatch
- **References:** None (skill is self-contained)

---

## Examples

### Simple Example: Single Module

**Request:** "How does the config loader work?"

**Execution:**
1. Complexity: Simple (single file, clear entry)
2. Single explainer reads config.ts, traces load() → parse() → validate() → cache
3. Output: 5 sections with file:line refs

### Complex Example: Auth Subsystem

**Request:** "How does authentication flow from login to protected route?"

**Execution:**
1. Complexity: Complex (routes, middleware, tokens, DB, cache)
2. Angles: API layer, token lifecycle, middleware chain, error handling
3. 4 explorers → 1 synthesizer
4. Unified 5-section output

---

## Dependencies / References

- **Principles:** Harness Independence, Procedures Over Vague Instructions
- **Skills:** sharpen, rationale, impact
- **References:** None bundled

