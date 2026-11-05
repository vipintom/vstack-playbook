---
name: tdd
description: Use when behaviour must change and a test can state the expected behaviour before the implementation exists; not for characterising unknown existing behaviour (coverage) or for a disposable experiment (prototype).
---

# tdd

Red, green, refactor. The test exists and fails for the right reason before the
implementation exists. No exceptions without the owner's recorded permission.

## When to use

- New behaviour, a bug fix, or a changed contract.
- A boundary that can be asserted from outside.
- The change will be reviewed and the reviewer must see it fail without the
  fix.
- A regression has to stay fixed.

Near misses:

- Existing behaviour needs a safety net first → `coverage`.
- The question is exploratory → `prototype`.
- The failure has no cause yet → `debug` finds it, then `tdd` fixes it.

## Steps

1. **Write one failing test** with a name that states behaviour. Artifact: test
   file, uncommitted.
2. **Run it and watch it fail** for the expected reason (missing behaviour, not
   a typo). Artifact: failure output with message.
3. **Write the smallest implementation** that passes. No extra options, no
   speculative branches. Artifact: implementation diff.
4. **Run the test again** and the suite; fix until green with pristine output.
   Artifact: green output.
5. **Refactor with tests green**, no behaviour change. Artifact: refactor diff
   and green run.
6. **Repeat** for the next behaviour, then record evidence. Artifact: evidence
   lines per cycle.

## Output

The test is the specification; the diff is the minimum that satisfies it; the
evidence file holds the failing and passing runs for the same test.

## Failure

- **The test passes before the code.** You are testing existing behaviour:
  change the test or delete it and write the real one.
- **The test is hard to write.** The interface is hard to use: change the
  seam, not the test.
- **The test cannot fail** (tautology, mock asserts itself). Rewrite against
  real behaviour.
- **Something else breaks.** Fix it now; the suite is the definition of green.
- **No unit test can see the behaviour** (framework glue, third-party callback).
   Use the closest integration test, record why the unit test is impossible and
   name the observation that would catch a regression. Integration-only is an
   escape with a reason, not a default.
