# Understand Before Changing

**Rule.** Read the path before editing it.

Changing code you have not traced produces fixes that work by coincidence.

**Trigger.** You are about to edit a file you have not read the callers of.

**Test.** Can you name the entry point, the state owner and the failure path you are altering?

**Failure mode.** Regressions in paths the author never knew existed.
