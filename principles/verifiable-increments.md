# Verifiable Increments

**Rule.** Every increment ends in something checkable.

Loops are bounded: each iteration produces an artifact, and a stalled loop escalates.

**Trigger.** A long loop of edits, or a plan step with no checkpoint.

**Test.** What can be checked at the end of this increment, and what stops the loop?

**Failure mode.** Work that cannot be stopped, reviewed or rolled back.
