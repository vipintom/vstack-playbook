import { createHash } from "node:crypto";
import { existsSync, readFileSync, readdirSync, statSync } from "node:fs";
import { join, relative, resolve } from "node:path";
import { parseFrontMatter } from "./lib/frontmatter.js";

export const STACK = [
  "typescript",
  "api-design",
  "frontend-design",
  "browser-testing",
  "fastapi",
  "docker",
  "makefile",
  "gitignore",
  "ci",
  "mcp-server",
  "technical-writing",
];

const CONTENT_DIRS = ["skills", "playbooks", "principles", "roles", "rubrics", "templates", "harness"];

export function buildManifest(root) {
  const packRoot = resolve(root);
  const skills = readSkills(packRoot);
  const stackSkills = skills.filter((skill) => skill.tier === "stack");
  const coreSkills = skills.filter((skill) => skill.tier !== "stack");

  assertStackComplete(packRoot, skills);

  return {
    schemaVersion: 2,
    playbookVersion: versionOf(packRoot),
    contentHash: contentHash(packRoot),
    counts: {
      skills: skills.length,
      playbooks: countMarkdown(join(packRoot, "playbooks")),
      principles: countMarkdown(join(packRoot, "principles"), ["index.md"]),
      roles: countMarkdown(join(packRoot, "roles")),
      rubrics: countMarkdown(join(packRoot, "rubrics")),
      templates: countMarkdown(join(packRoot, "templates")),
      triggerFixtures: countJson(join(packRoot, "evaluations/triggers")),
    },
    skills,
    playbooks: readPlaybooks(packRoot),
    principles: listNamed(join(packRoot, "principles"), ".md", ["index.md"]),
    roles: listNamed(join(packRoot, "roles"), ".md"),
    resources: {
      rubrics: listNamed(join(packRoot, "rubrics"), ".md"),
      templates: listNamed(join(packRoot, "templates"), ".md"),
    },
    evaluations: {
      triggers: countJson(join(packRoot, "evaluations/triggers")),
      playbooks: countMarkdown(join(packRoot, "evaluations/playbooks")),
    },
    profiles: {
      core: coreSkills.length,
      stack: stackSkills.length,
      full: skills.length,
      lists: {
        core: coreSkills.map((skill) => skill.name),
        stack: stackSkills.map((skill) => skill.name),
        full: skills.map((skill) => skill.name),
      },
    },
    renames: readRenames(packRoot),
    harnessSupport: {
      opencode: "release",
      "claude-code": "experimental",
      codex: "experimental",
    },
  };
}

function readSkills(packRoot) {
  const skillsRoot = join(packRoot, "skills");
  if (!existsSync(skillsRoot)) return [];
  return readdirSync(skillsRoot)
    .filter((entry) => statSync(join(skillsRoot, entry)).isDirectory())
    .sort()
    .map((entry) => {
      const path = join(skillsRoot, entry, "SKILL.md");
      const text = existsSync(path) ? readFileSync(path, "utf-8") : "";
      const { data } = parseFrontMatter(text);
      return {
        name: data?.name ?? entry,
        path: relative(packRoot, path),
        tier: data?.tier ?? "unassigned",
        rigor: data?.rigor ?? "unassigned",
        status: data?.status ?? "unassigned",
        pairsWith: Array.isArray(data?.["pairs-with"]) ? data["pairs-with"] : [],
        description: data?.description ?? "",
      };
    });
}

function readPlaybooks(packRoot) {
  const dir = join(packRoot, "playbooks");
  if (!existsSync(dir)) return [];
  return readdirSync(dir)
    .filter((file) => file.endsWith(".md"))
    .sort()
    .map((file) => ({ name: file.replace(/\.md$/, ""), path: `playbooks/${file}` }));
}

function assertStackComplete(packRoot, skills) {
  const tiered = skills.some((skill) => skill.tier !== "unassigned");
  if (!tiered) return;
  const onDisk = new Set(skills.map((skill) => skill.name));
  for (const name of STACK) {
    if (!onDisk.has(name)) {
      throw new Error(`profiles.stack lists \`${name}\` but skills/${name}/ does not exist`);
    }
  }
  for (const skill of skills) {
    if (skill.tier === "stack" && !STACK.includes(skill.name)) {
      throw new Error(`skills/${skill.name}/ is tier stack but is missing from profiles.stack`);
    }
  }
}

function contentHash(packRoot) {
  const hash = createHash("sha256");
  const files = [];
  for (const dir of CONTENT_DIRS) {
    const full = join(packRoot, dir);
    if (!existsSync(full)) continue;
    walk(full, files);
  }
  for (const file of files.sort()) {
    hash.update(relative(packRoot, file));
    hash.update("\0");
    hash.update(createHash("sha256").update(readFileSync(file)).digest("hex"));
    hash.update("\n");
  }
  return `sha256:${hash.digest("hex")}`;
}

function walk(dir, out) {
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    if (statSync(full).isDirectory()) walk(full, out);
    else out.push(full);
  }
}

function versionOf(packRoot) {
  const pkg = join(packRoot, "package.json");
  if (!existsSync(pkg)) return "0.0.0";
  return JSON.parse(readFileSync(pkg, "utf-8")).version ?? "0.0.0";
}

function readRenames(packRoot) {
  const file = join(packRoot, "tools/renames.json");
  if (!existsSync(file)) return {};
  return JSON.parse(readFileSync(file, "utf-8"));
}

function listNamed(dir, extension, exclude = []) {
  if (!existsSync(dir)) return [];
  return readdirSync(dir)
    .filter((file) => file.endsWith(extension) && !exclude.includes(file))
    .sort()
    .map((file) => file.replace(new RegExp(`${extension.replace(".", "\\.")}$`), ""));
}

function countMarkdown(dir, exclude = []) {
  return listNamed(dir, ".md", exclude).length;
}

function countJson(dir) {
  return listNamed(dir, ".json").length;
}
