import { readFileSync, readdirSync, statSync, existsSync } from "node:fs";
import { basename, join, resolve } from "node:path";
import { parseFrontMatter } from "./frontmatter.js";

export const TIERS = ["entry", "frame", "design", "build", "review", "continuity", "meta", "stack"];
export const RIGOR = ["rigid", "standard", "flexible"];
export const STATUS = ["stable", "experimental", "deprecated"];
export const REQUIRED_SECTIONS = ["When to use", "Modes", "Steps", "Output", "Failure", "Rationalizations", "Tracking"];
export const BODY_LINE_BUDGET = 150;

const NAME_PATTERN = /^[a-z][a-z0-9]*(-[a-z0-9]+)*$/;
const BACKTICK = /`([^`\n]+)`/g;

/**
 * Validate one skill directory.
 *
 * @param {string} skillDir
 * @param {{ skillsRoot?: string }} [options]
 * @returns {{ errors: Issue[]; warnings: Issue[] }}
 */
export function validateSkill(skillDir, options = {}) {
  const errors = [];
  const warnings = [];
  const issue = (code, path, message) => errors.push({ code, path, message });

  const file = resolve(skillDir, "SKILL.md");
  if (!existsSync(file)) {
    issue("MISSING_FILE", skillDir, "SKILL.md is missing");
    return { errors, warnings };
  }

  const text = readFileSync(file, "utf-8");
  const { data, body, error } = parseFrontMatter(text);
  if (error || !data) {
    issue("INVALID_FRONT_MATTER", file, error ?? "front matter missing");
    return { errors, warnings };
  }

  const dirName = basename(resolve(skillDir));
  for (const key of ["name", "description", "tier", "rigor", "status"]) {
    if (typeof data[key] !== "string" || data[key] === "") {
      issue("SCHEMA_INVALID", file, `front matter is missing a string \`${key}\``);
    }
  }

  if (typeof data.name === "string") {
    if (data.name !== dirName) {
      issue("NAME_MISMATCH", file, `name \`${data.name}\` does not match directory \`${dirName}\``);
    }
    if (!NAME_PATTERN.test(data.name)) {
      issue("SCHEMA_INVALID", file, `name \`${data.name}\` is not kebab-case`);
    }
  }

  if (typeof data.description === "string") {
    if (!data.description.startsWith("Use when ")) {
      issue("DESCRIPTION_TRIGGER", file, "description must start with `Use when `");
    }
    if (data.description.length > 1024) {
      issue("DESCRIPTION_TOO_LONG", file, "description exceeds 1024 characters");
    }
  }

  if (typeof data.tier === "string" && !TIERS.includes(data.tier)) {
    issue("SCHEMA_INVALID", file, `tier \`${data.tier}\` is not one of ${TIERS.join(", ")}`);
  }
  if (typeof data.rigor === "string" && !RIGOR.includes(data.rigor)) {
    issue("SCHEMA_INVALID", file, `rigor \`${data.rigor}\` is not one of ${RIGOR.join(", ")}`);
  }
  if (typeof data.status === "string" && !STATUS.includes(data.status)) {
    issue("SCHEMA_INVALID", file, `status \`${data.status}\` is not one of ${STATUS.join(", ")}`);
  }

  const knownSkills = listSkillNames(options.skillsRoot ?? resolve(process.cwd(), "skills"));
  const pairs = data["pairs-with"];
  if (pairs !== undefined) {
    if (!Array.isArray(pairs)) {
      issue("SCHEMA_INVALID", file, "pairs-with must be an inline array");
    } else {
      for (const target of pairs) {
        if (!knownSkills.has(target)) {
          issue("UNKNOWN_SKILL_REF", file, `pairs-with names unknown skill \`${target}\``);
        }
      }
    }
  }

  const bodyLines = body.replace(/\s+$/, "").split("\n");
  if (bodyLines.length > BODY_LINE_BUDGET) {
    issue("BODY_TOO_LONG", file, `body is ${bodyLines.length} lines, budget is ${BODY_LINE_BUDGET}`);
  }

  const sections = new Map();
  const heading = /^## (.+)$/gm;
  let match;
  while ((match = heading.exec(body)) !== null) {
    sections.set(match[1].trim(), match.index + match[0].length);
  }

  for (const required of REQUIRED_SECTIONS) {
    if (!sections.has(required)) {
      issue("MISSING_SECTION", file, `missing required section \`## ${required}\``);
    }
  }

  if (sections.has("Verification")) {
    const after = body.slice(sections.get("Verification"));
    const next = /^## /m.exec(after);
    const section = next ? after.slice(0, next.index) : after;
    if (!/```[\s\S]*?```/.test(section)) {
      issue("VERIFICATION_NO_COMMAND", file, "`## Verification` must contain a fenced command");
    }
  }

  const tracking = sections.has("Tracking") ? sectionText(body, sections.get("Tracking")) : "";
  if (sections.has("Tracking") && !/focus|knowledge|tracking\.md|ledger/i.test(tracking)) {
    issue(
      "MISSING_SECTION",
      file,
      "`## Tracking` must name the harness surface (focus card, project knowledge) or point at `resources/tracking.md`",
    );
  }

  const oldNames = loadOldNames(options.renamesPath ?? resolve(process.cwd(), "tools/renames.json"));
  for (const token of backticked(body)) {
    if (oldNames.has(token)) {
      issue("OLD_SKILL_NAME", file, `body references the 0.1.0 name \`${token}\``);
    }
  }

  return { errors, warnings };
}

export function listSkillNames(skillsRoot) {
  if (!existsSync(skillsRoot)) return new Set();
  return new Set(
    readdirSync(skillsRoot).filter((entry) => {
      const full = join(skillsRoot, entry);
      return statSync(full).isDirectory() && existsSync(join(full, "SKILL.md"));
    }),
  );
}

function loadOldNames(path) {
  if (!existsSync(path)) return new Set();
  return new Set(Object.keys(JSON.parse(readFileSync(path, "utf-8"))));
}

function backticked(text) {
  const found = [];
  let match;
  BACKTICK.lastIndex = 0;
  while ((match = BACKTICK.exec(text)) !== null) found.push(match[1].trim());
  return found;
}

function sectionText(body, start) {
  const rest = body.slice(start);
  const next = /^## /m.exec(rest);
  return next ? rest.slice(0, next.index) : rest;
}
