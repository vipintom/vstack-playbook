#!/usr/bin/env bash
# Pack structure gate. Repo-local mirror of workspace docker/test.sh
# pack_checks plus .github/workflows/ci.yml validate steps.
# Runs from repo root. Deps: bash, grep, find, sed, sort.
# Node is optional: relative-link check runs only when node exists.
set -euo pipefail

cd "$(dirname "${BASH_SOURCE[0]}")/.."

fail=0

# 1. Counts: 54 skills, 13 playbooks, 12 principles + index.
n_skills=$(find skills -name SKILL.md | wc -l | tr -d ' ')
n_playbooks=$(find playbooks -maxdepth 1 -name '*.md' | wc -l | tr -d ' ')
n_principles=$(find principles -maxdepth 1 -name '*.md' ! -name index.md | wc -l | tr -d ' ')
echo "skills: $n_skills (want 54)"
echo "playbooks: $n_playbooks (want 13)"
echo "principles: $n_principles (want 12)"
[ "$n_skills" -eq 54 ] || { echo "FAIL skills=$n_skills, expected 54"; fail=1; }
[ "$n_playbooks" -eq 13 ] || { echo "FAIL playbooks=$n_playbooks, expected 13"; fail=1; }
[ "$n_principles" -eq 12 ] || { echo "FAIL principles=$n_principles, expected 12"; fail=1; }
if [ ! -f principles/index.md ]; then echo "FAIL principles/index.md missing"; fail=1; fi

# 2. Forbidden sections must be empty.
if out=$(grep -rl '^## Tracking\|^## Rationalizations\|^## Modes\|^## Verification' skills playbooks principles || true); [ -n "$out" ]; then
  echo "FAIL forbidden sections in:"
  echo "$out"
  fail=1
else
  echo "no forbidden sections"
fi

# 3. Banned references must be empty.
if out=$(grep -rl 'manifest\.json\|vstack-runtime\|docs/deliveries' skills playbooks principles README.md AGENTS.md || true); [ -n "$out" ]; then
  echo "FAIL banned references in:"
  echo "$out"
  fail=1
else
  echo "no banned references"
fi

# 4. Frontmatter is name+description only.
for f in skills/*/SKILL.md; do
  fm=$(sed -n '/^---$/,/^---$/p' "$f" | grep -E '^[a-z-]+:' | cut -d: -f1 | sort | tr '\n' ' ')
  if [ "$fm" != "description name " ]; then
    echo "FAIL frontmatter $f: [$fm]"
    fail=1
  fi
done
echo "frontmatter checked"

# 5. Backtick skill refs (skills/<path>) resolve. Skip glob/placeholder refs.
bad_refs=0
while IFS= read -r ref; do
  case "$ref" in
    *\**|*\<*|*\>* ) continue ;;
  esac
  if [ ! -e "$ref" ]; then
    echo "FAIL backtick ref missing: $ref"
    bad_refs=1
  fi
done < <(grep -rhoE '`skills/[^`]+`' skills playbooks principles README.md AGENTS.md 2>/dev/null | tr -d '`' | sort -u || true)
[ "$bad_refs" -eq 0 ] || fail=1
echo "backtick skill refs resolve"

# 6. Relative markdown links resolve (node optional).
if command -v node >/dev/null 2>&1; then
  node -e "
  const fs = require('fs');
  const path = require('path');
  const roots = ['skills', 'playbooks', 'principles'];
  const files = [];
  for (const r of roots) {
    const walk = (d) => {
      for (const e of fs.readdirSync(d, { withFileTypes: true })) {
        const p = path.join(d, e.name);
        if (e.isDirectory()) walk(p);
        else if (p.endsWith('.md')) files.push(p);
      }
    };
    walk(r);
  }
  let bad = 0;
  for (const f of files) {
    const text = fs.readFileSync(f, 'utf8');
    for (const m of text.matchAll(/\]\(([^)#:]+\.md)(#[^)]*)?\)/g)) {
      const target = path.normalize(path.join(path.dirname(f), m[1]));
      if (!fs.existsSync(target)) { console.error('BROKEN ' + f + ' -> ' + m[1]); bad = 1; }
    }
  }
  process.exit(bad);
  "
  echo "relative links resolve"
else
  echo "SKIP relative links (node not found)"
fi

if [ "$fail" -ne 0 ]; then
  echo "check-structure: FAIL"
  exit 1
fi
echo "check-structure: PASS"
