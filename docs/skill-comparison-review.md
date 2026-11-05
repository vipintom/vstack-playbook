# Skill comparison review — vstack 0.2.0 vs superpowers and pstack

Date: 2026-11-05. Snapshot: commit `cde0ae5`, extracted with `git archive`.
`skills/coverage/` is absent from that snapshot because git ignores it; its
body was read from the working tree and is cited as
`skills/coverage/SKILL.md`. The tree was still being rewritten while this audit
ran; every citation below was re-checked against `cde0ae5` after the last
commit. Corpus was read to the cited section: the superpowers skills under
`/home/ubuntu/.agents/skills/` named in the table, pstack's `skills/` tree, and
the `.out-of-scope/poteto-mode/` playbooks and principle leaves. Items marked
`sampled` were read only in part; their counterpart advantage is indicative,
and those verdicts rest mainly on the vstack procedure against the standard.
No skill, playbook or evaluation file was edited; this report is the only new
file.

Abbreviations: `sp:` = `/home/ubuntu/.agents/skills/<name>/SKILL.md`;
`ps:` = `/home/ubuntu/agentic-stack/repos/pstack/<path>`.

## Verdict

1. **Equal** to the corpus on trigger design: 54 of 54 descriptions name a
   moment and an exclusion, while the superpowers descriptions cited here
   name no near-miss, and nearly every step names an artifact.
2. **Above** the corpus on verification bookkeeping, evidence digests, readiness
   waivers, migration staging and harness-neutral tracking; these are the parts
   a reviewer can replay.
3. **Below** on five procedures that corpus packs own in more depth:
   verification-skill setup and upkeep, impact proof, skill-authoring baseline
   testing, watch-pr failure discrimination, and the design/writing reference
   layers.
4. **Below** structurally on two pack mechanics: the `coverage` skill is not in
   git, and 10 `## Verification` sections run the pack validator instead of
   proving the skill's own artifact.
5. **Net:** procedure quality is at parity or ahead in entry, frame, review and
   continuity; the deficits are concentrated in 14 skills (five of them
   load-bearing), 2 pack mechanics and one missing skill (executing a plan).

## Score table

Verdict is against the named counterpart on the seven judged dimensions, not
against the whole corpus. `—` means no corpus item was read for that subject;
those rows are judged against `docs/skill-standard.md` only.

| Skill | Tier | Closest counterpart | Counterpart's advantage | vstack's advantage | Verdict | One improvement (line to change) |
|---|---|---|---|---|---|---|
| route | entry | ps:poteto-mode/SKILL.md | Copies the chosen playbook's steps into the todo list verbatim, with skip reasons (`ps:.out-of-scope/poteto-mode/SKILL.md:116`) | Tier caps, skipped skills and a routing record are artifacts (`skills/route/SKILL.md:52-56`) | equal | Add "copy the playbook steps verbatim before the first skill" to step 7 (`skills/route/SKILL.md:57`) |
| help | entry | sp:using-superpowers | Demands skill invocation before any answer and gives a priority order (`sp:using-superpowers/SKILL.md:18-31`) | Answers from the generated catalog, never memory (`skills/help/SKILL.md:41-45`) | above | Add a stale-catalog failure: regenerate if `manifest.json` is older than HEAD (`skills/help/SKILL.md:41`) |
| principles | entry | ps:skills/foundations/principles/SKILL.md | Points at full leaf rules, and a citation must name the choice it changed (`ps:skills/foundations/principles/SKILL.md:9-13`) | A precedence order for conflicting rules (`skills/principles/SKILL.md:48-50`) | below | Step 2 must read the leaf file, not the one-line index; fix the fictional P4/P9 example (`skills/principles/SKILL.md:43`, `:60`) |
| shape | frame | sp:brainstorming | Interrogates intent before design and holds a hard approval gate (`sp:brainstorming/SKILL.md:47-84`, `:247`) | Outcome, non-goals and done predicate as separate artifacts (`skills/shape/SKILL.md:44-49`) | equal | Add "play the frame back to the requester before planning" (`skills/shape/SKILL.md:55`) |
| sharpen | frame | sp:brainstorming/SKILL.md | One question per message, plain language, no option menus (`sp:brainstorming/SKILL.md:86-101`) | Three-question cap, recommended default and cost of being wrong (`skills/sharpen/SKILL.md:46-50`) | above | Record the cost of each default taken, not just the default (`skills/sharpen/SKILL.md:47`) |
| plan | frame | sp:writing-plans | Exact files, consumes/produces interfaces and per-step commands (`sp:writing-plans/SKILL.md:92-138`) | Artifact and check per task, plus non-goal pruning (`skills/plan/SKILL.md:44-54`) | equal | Add an `Interfaces: consumes / produces` row to the task template and step 3 (`skills/plan/SKILL.md:47`) |
| figure-it-out | frame | ps:skills/design/figure-it-out/SKILL.md | Riskiest-unknown-first sequencing and a verification harness before features (`ps:skills/design/figure-it-out/SKILL.md:29-32`) | A rejection note, explicit budget and recurrence rule (`skills/figure-it-out/SKILL.md:41-54`) | equal | Add "order steps riskiest unknown first" to step 3 (`skills/figure-it-out/SKILL.md:46`) |
| code-tour | frame | ps:skills/understand/how/SKILL.md | Fans out read-only explorers for complex subsystems and has a critique mode (`ps:skills/understand/how/SKILL.md:35-58`) | Read-only rule and a `path:line` per hop, plus a gaps list (`skills/code-tour/SKILL.md:40-51`) | equal | Add a fan-out rule for tours spanning more than three subsystems (`skills/code-tour/SKILL.md:32`) |
| rationale | frame | ps:skills/understand/why/SKILL.md | Seven evidence categories, null results as evidence, confidence calibration (`ps:skills/understand/why/SKILL.md:12-52`) | Ranked sources and explicit `inferred` labels (`skills/rationale/SKILL.md:44-52`) | below | Add "searched and found nothing" and a confidence phrase to Output (`skills/rationale/SKILL.md:56`) |
| prototype | frame | ps:.out-of-scope/poteto-mode/playbooks/prototype.md | Labels the artifact throwaway before building (`sampled`) | Timebox stop rule and an explicit delete/park decision (`skills/prototype/SKILL.md:44-54`) | equal | Record the decision the prototype informed, not only findings (`skills/prototype/SKILL.md:50`) |
| design | design | ps:skills/design/architect/SKILL.md | Three or four independent sketches, then synthesis with an explicit base and grafts (`ps:skills/design/architect/SKILL.md:29-43`) | Rejected alternative, staging and impact summary are mandatory (`skills/design/SKILL.md:53-58`) | below | Require two structurally distinct shapes before choosing one (`skills/design/SKILL.md:46`) |
| blueprint | design | ps:skills/design/architect/SKILL.md | Candidate sketches give the interface alternatives before synthesis (`ps:skills/design/architect/SKILL.md:29-43`) | Compile-as-sketch check and test seams (`skills/blueprint/SKILL.md:47-52`) | above | Record the type-check command and output, not just "type-check output" (`skills/blueprint/SKILL.md:51`) |
| impact | design | ps:skills/understand/blast-radius/SKILL.md | Names the one fact the change is safe because of and proves it by running code (`ps:skills/understand/blast-radius/SKILL.md:15-29`) | Consequence classification table covering data and external consumers (`skills/impact/SKILL.md:47-50`) | below | Add "prove the safety fact at level 4 (ran it) or mark unproven" (`skills/impact/SKILL.md:47`) |
| red-team | design | ps:skills/design/architect/SKILL.md | An adversarial subagent attacks the sketch before implementation (`ps:skills/design/architect/SKILL.md:51`) | Reproduction required per finding and confidence split (`skills/red-team/SKILL.md:44-51`) | above | Add a trigger for attacking a design before code exists (`skills/red-team/SKILL.md:32`) |
| rubrics | design | ps:.out-of-scope/poteto-mode/playbooks/eval.md | A small judge rubric, blind scoring, one scale for both variants (`ps:.out-of-scope/poteto-mode/playbooks/eval.md:19-25`) | Applicability marks and `unverified` instead of `pass` (`skills/rubrics/SKILL.md:45-51`) | equal | In Calibration mode, forbid the two scorers from seeing each other's sheet (`skills/rubrics/SKILL.md:36`) |
| audit | design | ps:skills/understand/blast-radius/SKILL.md | Proof ladder for each safety fact (`ps:skills/understand/blast-radius/SKILL.md:19-29`) | Ranked findings, withdrawn claims and a scope/commit record (`skills/audit/SKILL.md:51-57`) | above | State the sample size and what was not sampled in Output (`skills/audit/SKILL.md:57`) |
| performance | design | ps:.out-of-scope/poteto-mode/playbooks/perf-issue.md | Eight strategy families as hypothesis generators (`ps:.out-of-scope/poteto-mode/playbooks/perf-issue.md:7-15`) | Baseline three runs, spread and same-harness delta (`skills/performance/SKILL.md:47-56`) | equal | Name the strategy family the change belongs to before editing (`skills/performance/SKILL.md:51`) |
| forensics | design | ps:.out-of-scope/poteto-mode/playbooks/trace-forensics.md | Transforms the artifact into a queryable form before reading (`ps:.out-of-scope/poteto-mode/playbooks/trace-forensics.md:8`) | Provenance block and explicit limits of the artifact (`skills/forensics/SKILL.md:42-49`) | equal | Add "load into a queryable form" as step 3 (`skills/forensics/SKILL.md:42`) |
| migration | design | ps:skills/foundations/principles/references/sequence-verifiable-units.md | Every unit ends in a check before the next starts (`ps:skills/foundations/principles/references/sequence-verifiable-units.md:12-14`) | Expand/contract, cutover and rollback proof as one table (`skills/migration/SKILL.md:45-64`) | above | Move rollback proof before backfill; step 8 currently runs "before step 4" but is numbered last (`skills/migration/SKILL.md:59`) |
| tdd | build | sp:test-driven-development | Iron law to delete pre-test code, 11 rationalizations, a when-stuck table (`sp:test-driven-development/SKILL.md:31-45`, `:308-315`) | Artifact per cycle and evidence lines for red and green (`skills/tdd/SKILL.md:43-54`) | equal | Add "code written before the test is deleted, not adapted" to Failure (`skills/tdd/SKILL.md:63`) |
| debug | build | sp:systematic-debugging | Multi-component instrumentation and a 3-fix architecture stop (`sp:systematic-debugging/SKILL.md:70-106`, `:198-212`) | One hypothesis with a prediction; cause named in the commit (`skills/debug/SKILL.md:47-56`) | equal | Add "three failed fixes means question the architecture, not fix #4" (`skills/debug/SKILL.md:69`) |
| refactor | build | ps:.out-of-scope/poteto-mode/playbooks/refactoring.md | Pins the contract first and reverts changes that do not lower reader load (`ps:.out-of-scope/poteto-mode/playbooks/refactoring.md:7-14`) | Green-per-step commit series and a surface diff (`skills/refactor/SKILL.md:42-52`) | equal | Add "if the behaviour pin cannot be written, stop" (`skills/refactor/SKILL.md:62`) |
| unstick | build | sp:systematic-debugging | Escalates to architecture after three failed fixes (`sp:systematic-debugging/SKILL.md:191-212`) | Attempt table, three alternatives and a clean restart (`skills/unstick/SKILL.md:41-51`) | above | Put the three-attempt trip-wire in the description (`skills/unstick/SKILL.md:3`) |
| evidence | build | ps:skills/verify/show-me-your-work/SKILL.md | Audits the log against the transcript and gets cross-model review (`ps:skills/verify/show-me-your-work/SKILL.md:54-74`) | `sha256` digest, JSONL line and `not_verified` downgrade (`skills/evidence/SKILL.md:54-60`) | above | Add "audit lines against the artifact after the run; cut invented rows" (`skills/evidence/SKILL.md:60`) |
| verify | build | sp:verification-before-completion | Gate function: identify, run, read, verify, then claim (`sp:verification-before-completion/SKILL.md:22-36`) | Per-gate `not_run`/`blocked` disclosure and a refusal (`skills/verify/SKILL.md:55-61`) | above | Replace the validator block with the delivery's gate command or "no command: gate table" (`skills/verify/SKILL.md:112`) |
| coverage | build | sp:test-driven-development/references/writing-good-tests.md | Tests must fail for the production change; real behaviour only (`sampled`) | Criteria-to-check map with a "can fail?" column (`skills/coverage/SKILL.md:40-48`) | above | Un-ignore the skill; `.gitignore:19` hides it from every clone (`skills/coverage/SKILL.md:1`) |
| verify-setup | build | ps:skills/verify/create-verification-skill/SKILL.md | Interviews the repo for surface, run, drive, observe, isolate; adds doctor and cleanup (`ps:skills/verify/create-verification-skill/SKILL.md:11-36`) | Declares gates and proves the doc from a clean checkout (`skills/verify-setup/SKILL.md:41-52`) | below | Add the surface/run/drive/observe interview before writing the doc (`skills/verify-setup/SKILL.md:41`) |
| verify-maintain | build | ps:skills/verify/maintain-verification-skill/SKILL.md | A live pass over every feature, with `clean`/`changed`/`blocked` outcomes (`ps:skills/verify/maintain-verification-skill/SKILL.md:23-37`) | Drift list and a clean-run proof of the edit (`skills/verify-maintain/SKILL.md:40-46`) | below | Add "drive every documented feature live; blocked is an outcome" (`skills/verify-maintain/SKILL.md:40`) |
| visual-parity | build | ps:.out-of-scope/poteto-mode/playbooks/visual-parity.md | No baseline, no claim; baseline tampering is a fail (`ps:.out-of-scope/poteto-mode/playbooks/visual-parity.md:5-8`) | Environment block and difference classification (`skills/visual-parity/SKILL.md:40-49`) | equal | Say that updating a baseline is a deliberate, recorded act, never a diff fix (`skills/visual-parity/SKILL.md:61`) |
| review | review | sp:requesting-code-review | Independent reviewer subagent with base/head SHAs and crafted context (`sp:requesting-code-review/SKILL.md:24-42`) | Location, consequence and smallest fix per finding (`skills/review/SKILL.md:46-51`) | equal | Require a reviewer that did not write the diff, and pass it base..head plus intent (`skills/review/SKILL.md:40`) |
| ready | review | sp:finishing-a-development-branch | Detects worktree state and presents an explicit merge menu (`sp:finishing-a-development-branch/SKILL.md:28-80`) | Waiver with a name and `not_run` disclosure (`skills/ready/SKILL.md:51-54`) | above | Name the target branch or artefact in the verdict (`skills/ready/SKILL.md:53`) |
| ship | review | sp:finishing-a-development-branch | Environment-aware cleanup and exact merge options (`sp:finishing-a-development-branch/SKILL.md:53-80`) | Artifact hash first and record written as part of the act (`skills/ship/SKILL.md:43-50`) | above | Confirm branch protection or merge queue before the merge mode (`skills/ship/SKILL.md:43`) |
| watch-pr | review | ps:.out-of-scope/poteto-mode/playbooks/babysit.md | Declares a mode, works the merge frontier, distinguishes flake from stale base (`ps:.out-of-scope/poteto-mode/playbooks/babysit.md:9-21`) | No-poll rule and a bounded watch condition (`skills/watch-pr/SKILL.md:42-43`) | below | Add stale-base discrimination before calling a rerun a flake (`skills/watch-pr/SKILL.md:60`) |
| report | review | ps:skills/verify/show-me-your-work/SKILL.md | Ends with an Attention section of what to scrutinise (`ps:skills/verify/show-me-your-work/SKILL.md:65-74`) | Result first, limits and no process narration (`skills/report/SKILL.md:40-47`) | above | Add an "Attention" line naming what the reader should verify (`skills/report/SKILL.md:47`) |
| handoff | continuity | ps:.out-of-scope/poteto-mode/playbooks/pause-safely.md | Commits or stashes WIP and records tree status (`ps:.out-of-scope/poteto-mode/playbooks/pause-safely.md:5-8`) | Blockers, decisions and the reversal of a half-applied change (`skills/handoff/SKILL.md:43-53`) | equal | Add "commit or stash WIP; record clean/dirty" before the handoff record (`skills/handoff/SKILL.md:43`) |
| resume | continuity | ps:.out-of-scope/poteto-mode/playbooks/session-pickup.md | Reads the prior trail and refuses to re-derive it (`ps:.out-of-scope/poteto-mode/playbooks/session-pickup.md:5-9`) | Reconciliation plus one gate re-run (`skills/resume/SKILL.md:40-49`) | equal | Add "do not redo completed work; re-run one gate only" (`skills/resume/SKILL.md:46`) |
| recovery | continuity | ps:.out-of-scope/poteto-mode/playbooks/pause-safely.md | Does not cross an irreversible line to pause (`ps:.out-of-scope/poteto-mode/playbooks/pause-safely.md:6`) | Target state, evidence preservation and proof of arrival (`skills/recovery/SKILL.md:43-53`) | above | Announce the blast radius of the reversal before applying it (`skills/recovery/SKILL.md:49`) |
| decisions | continuity | ps:skills/verify/show-me-your-work/SKILL.md | Append-only log with a re-runnable evidence pointer (`ps:skills/verify/show-me-your-work/SKILL.md:17-23`) | Alternatives, consequences, owner and supersession (`skills/decisions/SKILL.md:41-52`) | above | Require the artifact that proves the consequence, not only a link (`skills/decisions/SKILL.md:47`) |
| lessons | continuity | ps:skills/foundations/principles/references/encode-lessons-in-structure.md | Encodes a lesson as a lint, test or script before prose (`sampled`) | Recurrence evidence and a method diff with proof (`skills/lessons/SKILL.md:40-48`) | above | Order the change choices test/lint before checklist line (`skills/lessons/SKILL.md:44`) |
| worktree | continuity | sp:using-git-worktrees | Consent before creating; submodule guard; exact detection commands (`sp:using-git-worktrees/SKILL.md:16-33`, `:80-100`) | Cleanup condition and refusal to discard unmerged work (`skills/worktree/SKILL.md:50-64`) | below | Add the submodule guard and the consent line (`skills/worktree/SKILL.md:40`) |
| skill-authoring | meta | sp:writing-skills | Watches an agent fail without the skill before writing it (`sp:writing-skills/SKILL.md:14-31`) | Trigger fixture first, body budget and a comparison record (`skills/skill-authoring/SKILL.md:44-58`) | below | Add a baseline failure run before the fixture is accepted (`skills/skill-authoring/SKILL.md:44`) |
| skill-eval | meta | ps:.out-of-scope/poteto-mode/playbooks/eval.md | Blinding, sanitized names and an independent judge (`ps:.out-of-scope/poteto-mode/playbooks/eval.md:7-25`) | Per-skill precision/recall and corpus hash (`skills/skill-eval/SKILL.md:40-50`) | below | Add the blinding rules; without them the number measures the observer effect (`skills/skill-eval/SKILL.md:40`) |
| unslop | meta | ps:skills/prose/unslop/SKILL.md | Twenty named prose tells with replacements (`ps:skills/prose/unslop/SKILL.md:28-60`) | Negative diff, surface check and deletion counts (`skills/unslop/SKILL.md:40-52`) | below | Rename or merge: the name means prose cleanup in both corpus packs (`skills/unslop/SKILL.md:3`) |
| typescript | stack | sp:typescript-best-practices | Fifteen concrete type rules in one table (`sp:typescript-best-practices/SKILL.md:12-26`) | Compiler first and declaration diff for libraries (`skills/typescript/SKILL.md:40-46`) | below | Move a rule table into `references/type-rules.md` and cite it in step 2 (`skills/typescript/SKILL.md:42`) |
| api-design | stack | sp:api-designer | Resource modelling, versioning and pagination references (`sp:api-designer/SKILL.md:21-38`) | Closed error set and compatibility checked through `impact` (`skills/api-design/SKILL.md:40-49`) | equal | Add "mock the contract and make one consumer call" before recording (`skills/api-design/SKILL.md:49`) |
| frontend-design | stack | sp:frontend-design | Anti-default visual tells, typography direction and subject grounding (`sp:frontend-design/SKILL.md:11-45`) | States inventory before the happy path (`skills/frontend-design/SKILL.md:41-49`) | below | Move a tells checklist into `references/` and require it in step 1 (`skills/frontend-design/SKILL.md:41`) |
| browser-testing | stack | — | No corpus skill read for browser automation | Trace on failure and cold-container reproducibility (`skills/browser-testing/SKILL.md:41-51`) | equal | Record a flake rate over ten runs when a failure persists (`skills/browser-testing/SKILL.md:62`) |
| fastapi | stack | sp:fastapi-backend | SQLAlchemy 2.0, Celery and testing specifics (`sampled`) | Async test DB and transaction boundary rules (`skills/fastapi/SKILL.md:42-49`) | equal | Add a worker/background-task path test (`skills/fastapi/SKILL.md:46`) |
| docker | stack | sp:docker-deployment | Deployment safety and reverse-proxy conventions (`sp:docker-deployment/SKILL.md:10-24`) | Digest pin, non-root, health check and secrets at run (`skills/docker/SKILL.md:41-52`) | above | Verify the runtime user in the check, not only the `USER` line (`skills/docker/SKILL.md:92`) |
| makefile | stack | — | No corpus skill read for Make | Default help, `.PHONY` and a clean-run proof (`skills/makefile/SKILL.md:40-51`) | equal | Require CI to call the same targets, checked by reading the workflow (`skills/makefile/SKILL.md:51`) |
| gitignore | stack | — | No corpus skill read for ignore rules | `check-ignore` verification and tracked-file audit (`skills/gitignore/SKILL.md:40-48`) | equal | Add a negation-order test to the check (`skills/gitignore/SKILL.md:63`) |
| ci | stack | ps:.out-of-scope/poteto-mode/playbooks/shipping.md | Reviewed source of truth and rollback before arming (`sampled`) | Fail-fast order, immutable cache keys and a deliberate failure (`skills/ci/SKILL.md:40-52`) | equal | Map every required check to a declared gate name (`skills/ci/SKILL.md:40`) |
| mcp-server | stack | — | No corpus MCP skill was read | Protocol-level test without an agent; bounded side effects (`skills/mcp-server/SKILL.md:40-49`) | equal | Add a five-prompt tool-selection test to step 4 (`skills/mcp-server/SKILL.md:48`) |
| technical-writing | stack | sp:technical-writing | Diátaxis modes and sentence-level rules with a source (`sp:technical-writing/SKILL.md:9-38`) | Every command run; a test reader (`skills/technical-writing/SKILL.md:40-52`) | below | Add `references/style.md` and point step 2 at it (`skills/technical-writing/SKILL.md:46`) |

## Top 15 gaps, ranked

1. **`coverage` is invisible to git.** `.gitignore:19` has an unanchored
   `coverage/` rule that also matches `skills/coverage/`, so the skill is
   untracked while `manifest.json:6` publishes 54. Proof: `git ls-files
   skills/coverage/SKILL.md` is empty and `git archive HEAD | tar -t | grep -c
   skills/coverage` returns 0. Smallest fix: change `.gitignore:19` to
   `/coverage/` and add `!skills/coverage/`; `git add skills/coverage`; verify
   the archive count is 1. Corpus has no equivalent packaging defect.

2. **Ten `## Verification` sections prove the pack, not the skill.**
   `skills/tdd/SKILL.md:92`, `skills/verify/SKILL.md:112`,
   `skills/shape/SKILL.md:98`, `skills/plan/SKILL.md:99`,
   `skills/design/SKILL.md:101`, `skills/route/SKILL.md:104`,
   `skills/handoff/SKILL.md:94`, `skills/ready/SKILL.md:95`,
   `skills/recovery/SKILL.md:89`, `skills/migration/SKILL.md:99` all run
   `docker compose run --rm pack node tools/validate.js`. That command checks
   the pack and says nothing about whether the skill ran. Counterpart:
   `sp:verification-before-completion/SKILL.md:22-36` requires the command that
   proves the claim. Smallest fix: per skill, either the artifact command (tdd:
   the test plus suite) or "no command: <the evidence that counts>".

3. **`verify-setup` writes a doc without interviewing the app.**
   `skills/verify-setup/SKILL.md:41-43` says "inventory what must be proven"
   and "discover the real commands", but never asks what surface a user
   touches, how to drive it, or how to observe it. Counterpart
   `ps:skills/verify/create-verification-skill/SKILL.md:11-21` interviews
   surface/run/drive/observe/isolate and adds a doctor check (`:31-36`).
   Smallest fix: add one step "interview the repo for surface, run, drive,
   observe, isolate" before step 1.

4. **`verify-maintain` never runs the app.** `skills/verify-maintain/SKILL.md:40-46`
   runs documented commands and compares with CI, but a command can pass while
   a feature is unreachable. Counterpart
   `ps:skills/verify/maintain-verification-skill/SKILL.md:33` requires a live
   pass over every feature and `:17` makes `blocked` an outcome. Smallest fix:
   add "drive every documented feature live; report blocked when it cannot be
   reached".

5. **`impact` lists consumers but proves nothing.**
   `skills/impact/SKILL.md:47-50` classifies consequences; nothing requires the
   one fact the change is safe because of. Counterpart
   `ps:skills/understand/blast-radius/SKILL.md:19-29` gives a five-level proof
   ladder and `:37` requires "prove the one fact". Smallest fix: insert a step
   "name the safety fact; get it to level 4 (ran it) or mark unproven".

6. **`skill-authoring` never watches the skill fail.**
   `skills/skill-authoring/SKILL.md:44-47` starts from the trigger fixture and
   the description. Counterpart `sp:writing-skills/SKILL.md:14-31` makes the
   baseline failure the RED step: run the task without the skill first. Smallest
   fix: add "run one task without the skill and record the failure" before the
   fixture is written.

7. **`tdd` has no honest escape for an impractical test.**
   `skills/tdd/SKILL.md:63-68` treats a hard test only as a bad seam, so an
   agent facing an integration-only bug must write a bad test or silently
   break the rule. Counterpart `ps:skills/design/tdd/SKILL.md:11` and `:23-27`
   allow skipping with a recorded reason and "prefer no new test over a bad
   test". Smallest fix: add a Failure row: "test path expensive or
   integration-only: record why and use the closest executable check."

8. **`migration` contradicts its own step order.**
   `skills/migration/SKILL.md:59` says "Prove rollback before step 4 runs" but
   is numbered step 8, after cutover at `:57`; `:40` says the order is the
   safety. Counterpart sequencing rule
   `ps:skills/foundations/principles/references/sequence-verifiable-units.md:12-14`
   puts the check before the next unit. Smallest fix: move rollback proof to
   step 4 and renumber the rest.

9. **`principles` points at a summary and cites rules that do not exist.**
   `skills/principles/SKILL.md:43-44` says read `principles/index.md` — "the
   rule text, not a summary" — but `principles/index.md:5-17` is a one-line
   table of 12 summaries. The Output example at `skills/principles/SKILL.md:60-62`
   cites P4 and P9 with meanings no file carries. Counterpart
   `ps:skills/foundations/principles/SKILL.md:9-13` points at full leaves.
   Smallest fix: read the leaf named in the row; rewrite the example using
   `evidence-before-completion`.

10. **Trigger fixtures cannot detect misrouting.** All 54 files have five
    positives and three negatives, and 0 of 162 negatives name the sibling they
    should reach, e.g. `evaluations/triggers/tdd.json:12-16` is a bare list.
    Counterpart `ps:.out-of-scope/poteto-mode/playbooks/eval.md:24` checks
    which skill was actually chosen. Smallest fix: make each negative
    `{"request": ..., "expected": "<sibling>"}` and have the runner assert the
    sibling.

11. **Modes are decorative in 44 of 54 skills.** Example:
    `skills/design/SKILL.md:30-35` defines Sketch/Standard/Deep, but the Steps
    at `:41-59` never branch on them. `docs/skill-standard.md:30` says Modes
    state "what changes, what is skipped"; counterpart
    `ps:skills/design/figure-it-out/SKILL.md:23` makes the rigor level change
    the gates and artifacts. Smallest fix: for each skill, either
    add one branch sentence to the affected steps or delete the table and lower
    the mode claim.

12. **`handoff` can hand over a dirty tree.**
    `skills/handoff/SKILL.md:43-53` records state, next action and reversal, but
    never commits or stashes WIP or records clean/dirty. Counterpart
    `ps:.out-of-scope/poteto-mode/playbooks/pause-safely.md:7` makes the WIP
    commit the durability step. Smallest fix: add "commit or stash WIP; record
    `git status --porcelain`" to step 1.

13. **`review` does not require an independent reviewer.**
    `skills/review/SKILL.md:40-47` reads intent and the diff but never says who
    reviews or what context they get. Counterpart
    `sp:requesting-code-review/SKILL.md:32-40` dispatches a reviewer with
    base/head SHAs and explicit requirements, "never your session's history".
    Smallest fix: add "the reviewer must not have written the diff; give it
    base..head and the intent, not the chat".

14. **`watch-pr` cannot tell a flake from a stale base.**
    `skills/watch-pr/SKILL.md:60-63` says record the rate and rerun once.
    Counterpart `ps:.out-of-scope/poteto-mode/playbooks/babysit.md:21` says one
    fresh build, never a job retry; an identical second failure is not flake;
    check `git merge-base --is-ancestor` for a stale base. Smallest fix: add
    that discrimination to the flake failure.

15. **`refactor` and `unslop` are the same procedure under two triggers.**
    Both require a green baseline, small deletions with the suite green after
    each, and a surface check: `skills/refactor/SKILL.md:42-52` versus
    `skills/unslop/SKILL.md:40-52`; descriptions overlap at
    `skills/refactor/SKILL.md:3` and `skills/unslop/SKILL.md:3`. Counterpart
    `ps:.out-of-scope/poteto-mode/playbooks/refactoring.md:5-14` keeps one
    procedure and puts subtraction inside it. Smallest fix: merge `unslop` into
    `refactor` as a "Subtract" mode, or give `unslop` the prose subject its name
    means in both corpus packs.

## Five systemic findings

1. **Verification is self-referential.** 21 skills have `## Verification`; 10
   of them run the same pack validator
   (`skills/tdd/SKILL.md:92`, `skills/verify/SKILL.md:112`,
   `skills/shape/SKILL.md:98`, `skills/plan/SKILL.md:99`,
   `skills/design/SKILL.md:101`, `skills/route/SKILL.md:104`,
   `skills/handoff/SKILL.md:94`, `skills/ready/SKILL.md:95`,
   `skills/recovery/SKILL.md:89`, `skills/migration/SKILL.md:99`). The
   other 11 are artifact-specific (`skills/browser-testing/SKILL.md:87`,
   `skills/api-design/SKILL.md:86`, `skills/ci/SKILL.md:89`,
   `skills/docker/SKILL.md:92`, `skills/gitignore/SKILL.md:86`,
   `skills/makefile/SKILL.md:86`, `skills/mcp-server/SKILL.md:86`,
   `skills/technical-writing/SKILL.md:87`, `skills/typescript/SKILL.md:83`,
   `skills/evidence/SKILL.md:106`, `skills/fastapi/SKILL.md:87`).
   The validator passed only after the tree changed during this audit: the first
   run exited 1 with 8 errors, and a later run still failed with a count drift,
   so the pasted proof was false at the time it was cited.

2. **Trigger evaluation measures half the job.** 54 fixture files, each exactly
   five positives and three negatives; 0 negatives carry an expected sibling.
   A run can therefore prove "the skill did not fire" but never "the request
   reached the right sibling". Example: `evaluations/triggers/tdd.json:12-16`.
   `skills/skill-eval/SKILL.md:42` reports precision/recall, which the fixture
   format cannot supply for negatives.

3. **Modes do not change the procedure.** 44 of 54 skills define mode labels in
   `## Modes` that never reappear in `## Steps`. The standard promises "what
   changes, what is skipped" (`docs/skill-standard.md:30`); the steps are one
   path. This is token cost with no decision behind it, and it makes the
   Quick/Standard/Deep promise unverifiable. `skills/design/SKILL.md:30-58`
   is a clean example.

4. **Execution of a plan is unowned.** `skills/plan/SKILL.md:55` ends at the
   plan record; `playbooks/build-feature.md:14-17` lists `tdd` next, but `tdd`
   owns one test cycle, not task-by-task execution, rulings, commits and
   checkpointing. Superpowers has `sp:executing-plans/SKILL.md:20-38` (four
   stop conditions, ledgered rulings, continuous execution) and
   `sp:subagent-driven-development/SKILL.md`; vstack has neither. A reader
   following the pack must invent the execution discipline.

5. **Failure and rigour markers are thin where they matter most.** Only 5 of
   54 Failure sections use the word "unknown" (`design`, `figure-it-out`,
   `handoff`, `route`, `shape`), although `docs/skill-standard.md:33` says
   "unknown" is an allowed answer. Separately, 15 skills declare
   `rigor: rigid`; 8 never name the load-bearing step that rule 8 requires
   (`handoff`, `migration`, `performance`, `plan`, `ready`, `recovery`,
   `refactor`, `ship`). `docs/skill-standard.md:61-62` makes that sentence
   mandatory for rigid skills.

## What is genuinely better than the corpus

1. **Trigger boundaries are universal and short.** All 54 descriptions follow
   `Use when <moment>; not for <sibling>`; mean length 209 characters, longest
   281. Superpowers' core skills mostly name only the moment
   (`sp:test-driven-development/SKILL.md:3`, `sp:systematic-debugging/SKILL.md:3`).
   pstack's `tdd` names a skip condition but no sibling
   (`ps:skills/design/tdd/SKILL.md:3`). vstack's routing problem is therefore
   smaller than either pack's.

2. **The gate ledger is better than a checklist.** `skills/verify/SKILL.md:55-72`
   classifies every gate `passed`/`failed`/`not_run`/`blocked` and refuses
   completion on a missing required gate. Superpowers' gate function
   (`sp:verification-before-completion/SKILL.md:22-49`) is sharper about
   running the command in this message, but it has no per-gate record and no
   `not_run` disclosure, so a skipped gate disappears.

3. **Readiness records risk acceptance by name.**
   `skills/ready/SKILL.md:49-53` requires a waiver to name the gate, the risk,
   the accepting person and the date. `sp:finishing-a-development-branch/SKILL.md:53-80`
   presents a merge menu but has no artifact for an accepted risk.

4. **Evidence is replayable by construction.**
   `skills/evidence/SKILL.md:54-60` captures stdout/stderr/exit, hashes the
   artifact and appends a JSONL row with `not_verified` for anything that did
   not run. pstack's `prove-it-works` asks for a script
   (`ps:skills/foundations/principles/references/prove-it-works.md:23-27`) but
   does not fix a record format, so two runs cannot be compared mechanically.

5. **The tracking ladder is harness-neutral.**
   `resources/tracking.md:7-36` names OpenChamber, then OpenCode/adapter, then
   files, and every skill points at it. The corpus hardcodes its own harness:
   pstack names Cursor agent types and default model IDs
   (`ps:.out-of-scope/poteto-mode/SKILL.md:91`), superpowers names
   `~/.claude/skills/` (`sp:writing-skills/SKILL.md:12`). vstack survives a
   harness swap without editing 54 bodies.

6. **Migration has an artifact table the corpus lacks.**
   `skills/migration/SKILL.md:45-64` names expand, backfill, dual-read, cutover,
   deletion and rollback with a proof per step. pstack carries migration only
   as a principle (migrate callers, delete legacy); neither pack has a
   step table with rollback proof. The step-order bug in gap 8 is a numbering
   defect, not a missing idea.

## Rulings for the pack owner

1. **Fix `.gitignore` before the next release.** Change `coverage/` to
   `/coverage/`, add `!skills/coverage/`, commit the skill. Cost: one line, one
   re-add, one archive check. Without it, every clone and `git archive` ships
   53 skills while the manifest says 54.
2. **Replace or relabel the 10 validator Verifications.** Cost: 10 edits and a
   decision per skill (command vs "no command: <evidence>"). Keeping them is
   worse than deleting the section, because a false proof teaches the reader
   that the skill was checked.
3. **Give the 162 trigger negatives an expected sibling.** Cost: fixture schema
   change, 162 entries, runner update, one re-run. Without it, `skill-eval` is a
   smoke test; the skill already admits this at `skills/skill-eval/SKILL.md:61`.
4. **Merge `unslop` into `refactor`, or repurpose the name.** Cost: one skill
   fewer or one new prose skill; route, manifest, docs and capability matrix
   change. Keeping both leaves a router coin-flip and a name collision with
   pstack's prose `unslop`.
5. **Decide where plan execution lives.** Cost: either a 55th skill (`execute`)
   or ~15 lines added to `plan` (currently 100 lines, so it fits). Without a
   decision, the pack's most common path relies on an unstated procedure that
   superpowers spells out in 321 lines.
6. **Keep `verify-setup` and `verify-maintain` separate, but deepen both.**
   Cost: two reference files (~60 lines) importing pstack's surface interview,
   doctor check and live feature pass. Merging them would lose the "create vs
   maintain" trigger split, which is correct.
7. **Fix `principles` to read leaves and use real rule names.** Cost: three
   lines in `skills/principles/SKILL.md` and one example rewrite. The current
   example cites P4/P9, which no file defines, and the step points at a
   summary while forbidding summaries.
8. **Keep `audit`, `report`, `evidence`, `ready`, `recovery` and `migration`.**
   All six have no equal in the corpus on record-keeping; cutting them would
   remove the pack's clearest advantage. Cost of keeping: none beyond the
   migration renumber.
9. **Add per-file attribution where phrasing tracks superpowers.** `worktree`'s
   core principle at `skills/worktree/SKILL.md:13-15` is a close paraphrase of
   `sp:using-git-worktrees/SKILL.md:12` (nine words verbatim: "then fall back
   to git. Never fight the harness"), and `tdd`'s five rows reproduce superpowers'
   first, second, fourth and fifth excuses plus its "spirit not ritual" red flag
   (`skills/tdd/SKILL.md:75-79` vs `sp:test-driven-development/SKILL.md:226-234`,
   `:248`). The longest measured overlap with either pack is ten words. The pack-level `NOTICE`
   credits superpowers, but `NOTICE:23` says no source text is copied; add a
   one-line attribution in each file or rephrase. Cost: two lines.
10. **Pin the audit snapshot before publishing.** This report cites `cde0ae5`;
    the tree advanced during the audit (five commits and a principles rewrite).
    Re-run `node tools/validate.js` and `git status` at the chosen commit and
    cite that hash in the release note. Cost: one run, one line.

## Commit-message summary

Review the 54-skill pack at `cde0ae5` against superpowers and pstack: trigger
descriptions, artifact-per-step, evidence digests, the gate ledger, readiness
waivers and harness-neutral tracking are at or above the corpus, while
verify-setup, verify-maintain, impact, skill-authoring, watch-pr and the
design/writing reference layers are below it. Ten Verification sections prove
the pack rather than the skill, all 162 trigger negatives lack an expected
sibling, 44 skills define modes their steps never use, plan execution is
unowned, and `coverage` is excluded from git by `.gitignore:19`. Fix the
gitignore, the false Verifications and the fixture schema first; then merge
`unslop` into `refactor`, deepen the two verification skills, and replace the
fictional P4/P9 principle example.