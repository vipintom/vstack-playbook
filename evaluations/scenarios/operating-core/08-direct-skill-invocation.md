# Evaluation Scenario: Direct Skill Invocation

**Content Under Test:** route, specialist skills
**Scenario Type:** Positive Trigger / Procedure Fidelity
**Date:** 2026-11-02
**Version:** v2 draft

---

## Scenario 8A: Direct Skill Invocation Bypasses Full Mode Routing

### Input Fixture

**User Request:** "Use code-tour to trace the authentication flow from login endpoint to JWT validation."

**Repository State:**
- Branch: main
- Auth flow: login route → middleware → JWT validation → user lookup
- No implementation needed, read-only

**Harness:** Portable
**Model:** Any

---

### Expected Behaviour

#### Trigger Expectation
- **route:** NOT invoked (user directly requests specific skill)
- **code-tour:** Directly invoked with its procedure

#### Procedure Expectation
1. Agent recognises direct skill invocation request
2. Executes code-tour procedure directly:
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

**User Request:** "Use impact to analyze impact of changing UserService.getUser() signature."

**Repository State:**
- Branch: main
- UserService.getUser() called in 15 places
- Proposed: Change return type from User to User | null

**Harness:** Portable
**Model:** Any

---

### Expected Behaviour

#### Trigger Expectation
- **route:** NOT invoked
- **impact:** Directly invoked

#### Procedure Expectation
1. Agent executes impact directly:
   - Identify directly affected modules (UserService)
   - Trace callers (grep for getUser() calls)
   - Map data contracts (return type change impact)
   - Identify failure paths (null handling in callers)
2. Outputs: Affected modules list, caller map, contract changes, failure paths
3. No mode routing overhead

---

## Scenario 8C: Direct Invocation Still Respects Skill Triggers

### Input Fixture

**User Request:** "Use design to design a new microservice for payments."

**Repository State:**
- Branch: main
- Current: Monolithic payment logic
- Goal: Extract to microservice

**Harness:** Portable
**Model:** Any

---

### Expected Behaviour

#### Procedure Expectation
1. Agent executes design directly
2. **design preconditions checked:**
   - Requires code-tour and rationale for current system
   - Requires impact for impact scope
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
1. route invoked (non-trivial work)
2. Mode executes Phases 1-6: frames, reads principles, selects feature-delivery, creates checklist
3. **Skills invoked ONLY when triggers fire during execution:**
   - code-tour: When discovery phase needs runtime behaviour
   - design: When design alternatives needed
   - tdd: When implementation task needs test-first
   - verify: When verification needed
   - review: When review phase reached
4. Skills NOT loaded preemptively

---

## Negative Case: Direct Skill Request Forces Full Mode Routing

**Scenario:** "Use code-tour to trace auth flow" → route invoked → reads all principles → selects playbook → creates checklist → then invokes code-tour

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
