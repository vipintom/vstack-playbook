# Evaluation Scenario: Direct Skill Invocation

**Content Under Test:** vstack-mode, specialist skills
**Scenario Type:** Positive Trigger / Procedure Fidelity
**Date:** 2026-11-02
**Version:** v2 draft

---

## Scenario 8A: Direct Skill Invocation Bypasses Full Mode Routing

### Input Fixture

**User Request:** "Use vstack-how to trace the authentication flow from login endpoint to JWT validation."

**Repository State:**
- Branch: main
- Auth flow: login route → middleware → JWT validation → user lookup
- No implementation needed, read-only

**Harness:** Portable
**Model:** Any

---

### Expected Behaviour

#### Trigger Expectation
- **vstack-mode:** NOT invoked (user directly requests specific skill)
- **vstack-how:** Directly invoked with its procedure

#### Procedure Expectation
1. Agent recognises direct skill invocation request
2. Executes vstack-how procedure directly:
   - Identify entry points (login endpoint)
   - Trace execution path (middleware → JWT validation → user lookup)
   - Map data flow (credentials → token → user object)
   - Identify ownership (AuthController owns login, JwtService owns validation)
   - Define boundaries (Auth vs User modules)
3. No principle index reading, no playbook selection, no checklist creation
4. Outputs: Execution trace, data flow map, ownership boundaries

#### Decision Quality Expectation
- **Branch point:** Direct invocation vs mode routing
- **Principle applied:** Route Before Loading (minimum appropriate)
- **Expected choice:** Direct skill execution, no mode overhead

---

## Scenario 8B: Direct Skill Invocation with Context

### Input Fixture

**User Request:** "Use vstack-blast-radius to analyze impact of changing UserService.getUser() signature."

**Repository State:**
- Branch: main
- UserService.getUser() called in 15 places
- Proposed: Change return type from User to User | null

**Harness:** Portable
**Model:** Any

---

### Expected Behaviour

#### Trigger Expectation
- **vstack-mode:** NOT invoked
- **vstack-blast-radius:** Directly invoked

#### Procedure Expectation
1. Agent executes vstack-blast-radius directly:
   - Identify directly affected modules (UserService)
   - Trace callers (grep for getUser() calls)
   - Map data contracts (return type change impact)
   - Identify failure paths (null handling in callers)
2. Outputs: Affected modules list, caller map, contract changes, failure paths
3. No mode routing overhead

---

## Scenario 8C: Direct Invocation Still Respects Skill Triggers

### Input Fixture

**User Request:** "Use vstack-architect to design a new microservice for payments."

**Repository State:**
- Branch: main
- Current: Monolithic payment logic
- Goal: Extract to microservice

**Harness:** Portable
**Model:** Any

---

### Expected Behaviour

#### Procedure Expectation
1. Agent executes vstack-architect directly
2. **vstack-architect preconditions checked:**
   - Requires vstack-how and vstack-why for current system
   - Requires vstack-blast-radius for impact scope
3. If preconditions not met, agent requests them first
4. Then executes architect procedure:
   - Establish decision criteria
   - Define system boundaries
   - Generate alternatives
   - Evaluate and select
4. Direct invocation doesn't bypass skill's own preconditions

---

## Scenario 8D: Mode Invoked for Non-Trivial Work, Skills Invoked by Trigger

### Input Fixture

**User Request:** "Add user authentication with JWT."

**Repository State:**
- Branch: main
- New feature

**Harness:** Portable
**Model:** Any

---

### Expected Behaviour

#### Procedure Expectation
1. vstack-mode invoked (non-trivial work)
2. Mode executes Phases 1-6: frames, reads principles, selects feature-delivery, creates checklist
3. **Skills invoked ONLY when triggers fire during execution:**
   - vstack-how: When discovery phase needs runtime behaviour
   - vstack-architect: When design alternatives needed
   - vstack-tdd: When implementation task needs test-first
   - vstack-verify-loop: When verification needed
   - vstack-review-loop: When review phase reached
4. Skills NOT loaded preemptively

---

## Negative Case: Direct Skill Request Forces Full Mode Routing

**Scenario:** "Use vstack-how to trace auth flow" → vstack-mode invoked → reads all principles → selects playbook → creates checklist → then invokes vstack-how

**Expected:** FAIL — direct skill invocation must bypass full mode routing

---

## Rubric / Pass Criteria

| Criterion | Pass Condition | Weight |
|---|---|---|
| Trigger precision | Direct invocation bypasses mode routing | Required |
| Procedure fidelity | Skill executes its procedure directly | Required |
| Decision quality | Route Before Loading (minimum appropriate) | Required |
| Technical outcome | Skill outputs produced without mode overhead | Required |
| Efficiency | No unnecessary skills/checks loaded | Required |

---

## Sign-off

**Evaluator:** 
**Date:** 
**Content Version Tested:** v2 draft
