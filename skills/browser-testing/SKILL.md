---
name: browser-testing
description: Use when behaviour must be proven in a real browser — navigation, forms, auth flows, network conditions — rather than inferred from components; not for pixel comparison (visual-parity) or unit-level logic (tdd).
tier: stack
rigor: standard
status: stable
pairs-with: [visual-parity, verify, coverage]
---

# browser-testing

Drive the page the way a user does: cold load, real selectors, observable
outcomes. The artifact is a passing script or a trace, not a screenshot of a
state you set up by hand.

## When to use

- A flow crosses routing, forms, storage or a third-party script.
- A regression only appears in a browser (hydration, focus, navigation).
- A test must survive refactors of component internals.
- Auth, cookies or redirects are part of the behaviour.
- The claim is "the user can complete X".

Near misses:

- The question is how it looks → `visual-parity`.
- The logic is pure → `tdd`.
- The page has not been designed yet → `design`.

## Modes

| Mode | Tool shape |
|---|---|
| Scripted | Playwright test committed to the suite |
| Exploratory | headed browser with a console and network log |
| Ad hoc | one command against a running app, output kept |

## Steps

1. **Write the user path as steps** from a cold load: URL, action, expected
   observable. Artifact: path list.
2. **Choose stable selectors** — roles and labels over CSS classes. Artifact:
   selector table.
3. **Fix the data**: seed or mock the API; record the fixture. Artifact: fixture
   reference.
4. **Run the path** and capture trace, console and network on failure. Artifact:
   trace file.
5. **Assert the outcome, not the implementation** — visible text, URL, stored
   value. Artifact: assertions.
6. **Commit the script** to the suite and record the command. Artifact: test
   file and evidence line.

## Output

A committed script plus the command, plus a trace on failure. The path is
reproducible from a cold container, not from a warm developer browser.

## Failure

- **Flake from timing.** Replace sleeps with observable conditions; record the
  flake rate if it persists.
- **The app needs a real third party.** Mock at the network boundary and record
  what is mocked; test the real integration separately, once.
- **Selectors break on styling changes.** Move to role and label queries.

## Rationalizations

| Excuse | Reality |
|---|---|
| "I clicked through it manually." | Manual clicks leave no script and no trace. |
| "The component test covers it." | Component tests do not cover routing, hydration or storage. |
| "Sleeps make it stable." | They make it slow and still flaky. Wait on conditions. |
| "A screenshot is enough." | Screenshots do not prove the next click works. |

## Tracking

- **OpenChamber present:** the command and trace link on the delivery note.
- **OpenCode or files:** `e2e/` in the repo plus
  `.vstack/deliveries/<id>/traces/`.
- Ladder: `resources/tracking.md`.

## Verification

```bash
npx playwright test
```
