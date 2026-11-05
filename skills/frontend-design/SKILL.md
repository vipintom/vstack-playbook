---
name: frontend-design
description: Use when a new interface or substantial visual change needs deliberate direction — hierarchy, type, spacing, states — not template defaults; not for verifying an existing UI (visual-parity) or component behaviour (browser-testing).
---

# frontend-design

Decide the look on purpose: one direction, a small palette, a type scale, and
states designed before the happy path is polished. Generic is a default, not a
style.

## When to use

- A new page, flow or component family is being introduced.
- The UI looks assembled from defaults and nobody can say why.
- Hierarchy is unclear: everything competes for attention.
- Empty, loading, error and dense states are undesigned.
- A redesign must keep the product's identity.

Near misses:

- The UI exists and must match a reference → `visual-parity`.
- Behaviour must be proven in a browser → `browser-testing`.
- The change is one token → edit it.

## Steps

1. **Name the direction in one sentence** and the reference set that expresses
   it. Artifact: direction note.
2. **Set tokens first**: type scale, spacing rhythm, colour roles, radii.
   Artifact: token list.
3. **Design the states** — empty, loading, error, dense, disabled — before the
   happy path. Artifact: state inventory.
4. **Lay out hierarchy**: one primary action per view, reading order, grouping.
   Artifact: wireframe or annotated screenshot.
5. **Check the hard cases**: long text, narrow width, dark mode, focus rings,
   reduced motion. Artifact: screenshots.
6. **Hand to implementation** with tokens and states; verify with
   `visual-parity`. Artifact: spec.

## Output

A direction sentence, tokens, and a state inventory that implementation can
follow. Every visual choice traces to the direction.

## Failure

- **The direction is "modern".** That is not a decision; pick references and
  say what is taken from each.
- **States are missing.** They will be improvised under deadline; design them
  now, cheaply.
- **The brand has no system.** Extract tokens from existing screens first.
