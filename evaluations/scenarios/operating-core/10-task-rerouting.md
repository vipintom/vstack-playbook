# Evaluation Scenario: Task Rerouting After New Evidence

**Content Under Test:** route, playbooks
**Scenario Type:** Procedure Fidelity / Decision Quality
**Date:** 2026-11-02
**Version:** v2 draft

---

## Scenario 10A: Discovery Invalidates Initial Route → Reassessment

### Input Fixture

**User Request:** "Add user profile page with avatar upload."

**Repository State (Initial):**
- Branch: main
- Assumed: Simple profile page, avatar upload to local storage

**Repository State (After Discovery):**
- Discovery reveals: Avatar upload requires 3rd party CDN, image transformation pipeline, compliance review
- Cross-boundary impact: Storage service, CDN config, legal approval

**Harness:** Portable
**Model:** Any

---

### Expected Behaviour

#### Procedure Expectation
1. route initially selects feature-delivery (new behaviour, assumed low-medium risk)
2. **Phase 7 (Execute):** Discovery phase runs code-tour/impact
3. **Reassessment triggered:** Discovery reveals cross-cutting impact
4. **Checklist revised:**
   - Architect step: ACTIVATED (was skipped)
   - Blast Radius: ACTIVATED (was light)
   - Arena: ACTIVATED (CDN provider alternatives)
   - Jury: ACTIVATED (compliance + security)
5. **Plan updated:** Phased approach with compliance gate
6. **Reason recorded:** "Discovery revealed 3rd party dependencies and compliance requirements"
7. **Execution continues** with revised checklist
7. **Handback includes:** "Route revised after discovery: added Architect, Arena, Jury"

#### Decision Quality Expectation
- **Branch point:** Reassessment after evidence
- **Principle applied:** Reassess when evidence changes (route Phase 7)
- **Expected choice:** Revise checklist, don't continue disproven plan

---

## Scenario 10B: Verification Failure → Debug → Unstick → Replan

### Input Fixture

**User Request:** "Fix the race condition in OrderService.createOrder()."

**Repository State:**
- Branch: main
- Bug: Intermittent duplicate orders under load
- Initial hypothesis: Missing database lock

**Harness:** Portable
**Model:** Any

---

### Expected Behaviour

#### Procedure Expectation
1. route selects bug-fixing playbook
2. **Execution:** TDD (regression test) → Implement fix (add lock) → Verify
3. **Verification FAILS:** Race condition persists (lock not sufficient)
4. **debug invoked:** Reproduces, gathers evidence, hypothesizes
5. **debug finds:** Root cause is application-level logic, not DB lock
6. **unstick triggered** (3 failed attempts):
   - Lists attempts: lock, transaction, retry
   - Questions assumption: "Is DB lock the right level?"
   - Chooses materially different approach: Application-level idempotency key
7. **Replan:** Checklist revised — new approach, new verification
8. **Handback includes:** "Unstick triggered: assumption wrong, approach changed"

#### Decision Quality Expectation
- **Branch point:** Verification failure → unstick
- **Principle applied:** Loops Are First-Class, Challenge Assumptions
- **Expected choice:** Change approach, not repeat failed fix

---

## Scenario 10C: User Request Changes Scope Mid-Execution

### Input Fixture

**User Request:** "Add user profile page."

**Mid-Execution Change:** User says: "Actually, also need admin dashboard with user management."

**Repository State:**
- Branch: feature/user-profile
- Completed: Discovery, Plan for profile page
- In Progress: Implementation of profile page

**Harness:** Portable
**Model:** Any

---

### Expected Behaviour

#### Procedure Expectation
1. route initially routing: feature-delivery for profile page
2. **User request received:** New scope (admin dashboard)
3. **Reassessment:** New request = separate feature or expanded scope
4. **Lead decision:** 
   - Option A: Separate delivery (new route invocation for admin dashboard)
   - Option B: Expand current delivery (revise plan, add tasks)
5. **If Option B:** Checklist revised with new tasks, dependencies updated
6. **Handback includes:** "Scope expanded per user request: added admin dashboard tasks"

#### Decision Quality Expectation
- **Branch point:** Scope change
- **Principle applied:** Route Before Loading, Flexible Workflows
- **Expected choice:** Explicit scope decision, not silent scope creep

---

## Scenario 10D: Harness Capability Discovered Mid-Execution

### Input Fixture

**User Request:** "Run 5 independent benchmarks in parallel."

**Harness (Initial Assumption):** No subagent support
**Harness (Discovered):** Subagent support available via undocumented API

**Repository State:**
- Branch: main
- 5 benchmarks to run

**Harness:** Portable (subagent discovered mid-execution)

---

### Expected Behaviour

#### Procedure Expectation
1. route initially plans sequential (no subagent)
2. **Mid-execution discovery:** Subagent capability found
3. **Reassessment:** red-team can now use parallel execution
4. **Checklist revised:** Sequential → Parallel for benchmarks
5. **Handback includes:** "Capability discovered: parallel execution enabled"

#### Decision Quality Expectation
- **Branch point:** Capability discovery
- **Principle applied:** Degrade Gracefully (upgrade when capability found)
- **Expected choice:** Upgrade to better capability when available

---

## Negative Case: Evidence Changes but Plan Continues Mechanically

**Scenario:** Discovery reveals cross-cutting impact → checklist unchanged → continues with light rigour → production incident

**Expected:** FAIL — must reassess and revise when evidence changes

---

## Rubric / Pass Criteria

| Criterion | Pass Condition | Weight |
|---|---|---|
| Trigger precision | Reassessment triggered by new evidence | Required |
| Procedure fidelity | Checklist revised, reason recorded | Required |
| Decision quality | Reassess principle applied | Required |
| Technical outcome | Revised plan executes with appropriate rigour | Required |
| Evidence quality | Revision reason traced to evidence | Required |
| Honesty | Failed/inconclusive results not hidden | Required |

---

## Sign-off

**Evaluator:** 
**Date:** 
**Content Version Tested:** v2 draft
