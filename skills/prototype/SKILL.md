---
name: shipototype
description: Build a disposable experiment to resolve empirical or design uncertainty
lifecycle: draft
---

# shipototype

## Purpose / Outcome

Builds minimal disposable experiments to resolve empirical or design uncertainty: defines the question, designs minimal experiment, defines success criteria, builds and runs, analyzes results, decides and cleans up.

---

## When to Use (Positive Triggers)

- When design has competing designs with empirical uncertainty
- When code-tour cannot determine behaviour without execution
- When performance characteristics are unknown
- When integration feasibility is unclear

---

## When Not to Use (Negative Triggers)

- When uncertainty can be resolved by reading code/docs
- For production code (prototype is disposable)
- When cost exceeds value of information

---

## Required Context / Inputs

- Specific uncertainty to resolve
- Success criteria for experiment
- Time/resource budget

---

## Preconditions

- Uncertainty clearly defined
- Experiment design feasible within budget

---

## Procedure

### Step 1: Define the Question

- What specific uncertainty does this resolve?
- What would constitute a clear answer?

### Step 2: Design Minimal Experiment

- Smallest code to answer the question
- Disposable — not production quality
- Isolated from production systems

### Step 3: Define Success Criteria

- Quantitative (latency < X, throughput > Y)
- Qualitative (API feels right, integration works)
- Failure conditions

### Step 4: Build and Run

- Time-boxed implementation
- Instrument for measurement
- Run in representative environment

### Step 5: Analyze Results

- Compare against success criteria
- Note unexpected behaviours
- Document learnings

### Step 6: Decide and Clean Up

- Answer the question
- Discard prototype code
- Record findings in decisions or project memory

---

## Expected Outputs

- Answer to the uncertainty question
- Evidence (measurements, observations)
- Decision rationale
- Prototype discarded

---

## Verification

**Evidence recording:** VERIFIED / NOT_VERIFIED / INCONCLUSIVE / BLOCKED / NOT RUN / UNAVAILABLE


- Question answered with evidence
- Prototype code not merged
- Findings recorded

---

## Failure Handling

| Failure Mode | Response |
|---|---|
| Budget exceeded without answer | Escalate to Lead |
| Prototype reveals new uncertainties | Iterate or escalate |

---

## Stop Conditions
- Work complete or goal achieved
- Blocked by external dependency or missing criteria
- Inconclusive - evidence gaps or ambiguous state
- Safe pause - interrupted with clean checkpoint


- Question answered or budget exhausted
- Time-boxed (default: 2-4 hours, max 1 day)

---

## Escalation

- Budget exceeded without answer → escalate to Lead
- Prototype reveals new uncertainties → iterate or escalate

---

## Fallback

- Without prototyping: document uncertainty as risk in plan

---

## Skill / Role / Tool Routing

- **Skills invoked:** design (identifies uncertainties), verify (measurement approach), decisions (records findings)
- **Roles:** Builder (experiments), Lead (approves budget)
- **Tools:** Build tools, measurement instrumentation
- **References:** None

---

## Examples

### Example: Cache Strategy Comparison

**Uncertainty:** Redis vs in-memory for session cache
**Experiment:** Minimal app with both, measure latency/hit rate
**Criteria:** Latency < 5ms, hit rate > 90%
**Result:** In-memory wins for single-instance, Redis for distributed
**Decision:** In-memory, record in ledger

---

## Dependencies / References

- **Principles:** Prove It Works, Smallest Complete Change, Evidence Before Assertions
- **Skills:** design, verify, decisions
- **References:** None

