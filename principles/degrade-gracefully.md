# Degrade Gracefully

**Rule.** Prefer the smallest runtime that meets the need.

Simple systems fail in ways people can diagnose; complexity must earn its place.

**Trigger.** Adding a dependency, service or abstraction for convenience.

**Test.** What breaks when this component is unavailable, and can the fallback be described in one sentence?

**Failure mode.** Fragile stacks whose failures nobody can explain.
