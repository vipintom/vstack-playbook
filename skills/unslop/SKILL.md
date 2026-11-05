---
name: unslop
description: Use when generated or accumulated prose is bloated, vague or repetitive — docs, comments, commit messages, UI copy — and must be made clear without losing facts; not for code structure (refactor) or a correctness review (review).
---

# unslop

Cut writing that sounds like output rather than thought. The target is prose a
reader can act on: fewer words, same facts, no ceremony. Code structure belongs
to `refactor`.

## When to use

- Documentation repeats the heading in its first sentence.
- A comment narrates the code instead of explaining why.
- A commit message lists files instead of stating the change.
- UI copy hedges, apologises or markets.
- A generated draft is long and says little.

Near misses:

- The code itself is overbuilt → `refactor`.
- The content is wrong or unsafe → `review` or `debug`.
- The document needs a new structure, not a trim → `technical-writing`.

## Steps

1. **Name the reader and the one action** they must take after reading.
   Artifact: reader and action.
2. **Mark every sentence that does not change understanding or action.**
   Delete it. Artifact: cut list.
3. **Replace abstractions with nouns and verbs.** "Robust solution" becomes
   what it does; "leverage" becomes "use". Artifact: revised sentences.
4. **Remove ceremony**: greetings, restatements, "it is important to note",
   summaries of what you just said. Artifact: ceremony list.
5. **Keep payload verbatim**: commands, paths, code, numbers, error strings and
   qualifiers such as not, never and only. Artifact: payload diff.
6. **Read it aloud.** Any sentence you stumble over is still unclear; rewrite
   it once, then stop. Artifact: final draft.
7. **Check the result**: every fact survives, every link resolves, the action
   is obvious. Artifact: review note.

## Output

A shorter document with the same facts and a clearer action. Report the word
count removed, not the effort spent.

## Failure

- **A cut changes meaning.** Restore the qualifier; precision beats brevity.
- **The voice becomes flat.** Keep the author's rhythm; remove filler, not
  personality.
- **The text is already tight.** Say so and stop; editing for its own sake adds
  risk.
- **The real problem is structure.** Hand off to `technical-writing`.
