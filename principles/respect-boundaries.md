# Respect Boundaries

**Rule.** Every boundary has one owner.

State, decisions and modules have a single source of truth; crossing a boundary is explicit.

**Trigger.** Two places write the same state, or a module reaches into another's storage.

**Test.** Who writes it? Who reads it? Where is the source of truth recorded?

**Failure mode.** Two owners, two truths, and silent divergence.
