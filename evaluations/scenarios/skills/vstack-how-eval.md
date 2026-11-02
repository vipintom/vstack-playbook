# Evaluation Scenario: vstack-how

**Skill:** vstack-how
**Lifecycle:** draft
**Evaluation Date:** 2026-11-02
**Evaluator:** Phase 5 automated

---

## Scenario 1: Simple Module Tracing (Tier 1 - Deterministic)

**Objective:** Verify simple path produces correct 5-section output.

**Input:**
```
Request: "How does the config loader work?"
Context: Single file config.ts, clear entry point load()
```

**Expected Behavior:**
- Complexity assessment: Simple (single file, clear entry, ≤3 files)
- Single explainer executes
- Output: Overview, Key Concepts, How It Works, Where Things Live, Gotchas
- File:line references for all claims

**Acceptance Criteria:**
- [ ] Complexity = Simple
- [ ] Single explainer used (no parallel)
- [ ] 5 sections present
- [ ] File:line refs for all key claims
- [ ] Gotchas are non-obvious

---

## Scenario 2: Complex Subsystem Decomposition (Tier 1 - Deterministic)

**Objective:** Verify complex path uses parallel explorers + synthesizer.

**Input:**
```
Request: "How does authentication flow from login to protected route?"
Context: Multiple modules (routes, middleware, tokens, DB, cache)
```

**Expected Behavior:**
- Complexity assessment: Complex (>3 files, unclear boundaries)
- 2-4 parallel explorers spawned with different angles
- Single synthesizer produces unified output
- 5 sections with file:line refs

**Acceptance Criteria:**
- [ ] Complexity = Complex
- [ ] 2-4 explorers spawned
- [ ] Angles: API layer, token lifecycle, middleware chain, error handling
- [ ] Synthesizer produces unified output
- [ ] All 5 sections present

---

## Scenario 3: Read-Only Enforcement (Tier 1 - Deterministic)

**Objective:** Verify no writes performed during exploration.

**Input:**
```
Request: "How does the payment processing work?"
```

**Expected Behavior:**
- Explorers marked readonly
- No file writes
- No git commits
- No test execution

**Acceptance Criteria:**
- [ ] No writes performed
- [ ] No commits made
- [ ] Only read operations

---

## Scenario 4: Output Format Completeness (Tier 1 - Deterministic)

**Objective:** Verify all 5 sections present with required content.

**Input:**
```
Request: "Trace the data flow for user registration"
```

**Expected Behavior:**
- Overview: 2-3 sentences, what system does, primary flow, scale
- Key Concepts: 4-8 bullets, domain terms, patterns, invariants
- How It Works: Sequential flow from entry point, file:line refs
- Where Things Live: Table (concept → file(s) → ownership)
- Gotchas: 3-6 items, non-obvious, footguns, perf traps

**Acceptance Criteria:**
- [ ] All 5 sections present
- [ ] Overview 2-3 sentences
- [ ] Key Concepts 4-8 bullets
- [ ] How It Works sequential with refs
- [ ] Where Things Live table format
- [ ] Gotchas 3-6 non-obvious items

---

## Scenario 5: Host Cannot Spawn Agents (Tier 1 - Deterministic)

**Objective:** Verify fallback to sequential exploration.

**Input:**
```
Request: "How does X work?"
Context: Host cannot spawn read-only agents
```

**Expected Behavior:**
- Sequential exploration in current context
- Documents fallback used
- Output still complete

**Acceptance Criteria:**
- [ ] Fallback documented
- [ ] Sequential execution used
- [ ] Output complete

---

## Scenario 6: Entry Point Not Found (Tier 1 - Deterministic)

**Objective:** Verify INCONCLUSIVE when entry point missing.

**Input:**
```
Request: "How does the legacy module work?"
Context: No clear entry points, obfuscated code
```

**Expected Behavior:**
- Reports INCONCLUSIVE
- Lists searched paths
- Does not fabricate explanation

**Acceptance Criteria:**
- [ ] Result = INCONCLUSIVE
- [ ] Searched paths listed
- [ ] No fabrication

---

## Evaluation Results

| Scenario | Tier | Result | Notes |
|----------|------|--------|-------|
| 1. Simple Module | 1 |  |  |
| 2. Complex Subsystem | 1 |  |  |
| 3. Read-Only Enforcement | 1 |  |  |
| 4. Output Format | 1 |  |  |
| 5. Host Fallback | 1 |  |  |
| 6. Entry Not Found | 1 |  |  |

**Overall Status:** 
- Tier 1: ___/6 PASS
- **Skill Status:** ___