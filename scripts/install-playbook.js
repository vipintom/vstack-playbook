#!/usr/bin/env node
/**
 * vstack Playbook Installation Script
 * Installs playbook content for different harnesses (opencode, codex, claude-code)
 */

import { readFileSync, writeFileSync, mkdirSync, readdirSync, statSync, copyFileSync, existsSync } from "node:fs";
import { join, resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const PLAYBOOK_ROOT = resolve(__dirname, "..");
const HARNESS = process.argv[2] || "playbook";

function copyDir(src, dest) {
  if (!existsSync(src)) return;
  if (!existsSync(dest)) mkdirSync(dest, { recursive: true });
  
  for (const entry of readdirSync(src)) {
    const srcPath = join(src, entry);
    const destPath = join(dest, entry);
    const stat = statSync(srcPath);
    if (stat.isDirectory()) {
      copyDir(srcPath, destPath);
    } else {
      copyFileSync(srcPath, destPath);
    }
  }
}

function getHarnessConfigDir(harness) {
  const home = process.env.HOME || process.env.USERPROFILE;
  switch (harness) {
    case "opencode":
      return join(home, ".config", "opencode", "skills", "vstack");
    case "codex":
      return join(home, ".codex", "skills", "vstack");
    case "claude-code":
      return join(home, ".claude", "skills", "vstack");
    default:
      return join(home, ".config", "vstack-playbook");
  }
}

async function installPlaybook() {
  console.log(`Installing vstack playbook for ${HARNESS}...`);
  
  const targetDir = getHarnessConfigDir(HARNESS);
  console.log(`Target directory: ${targetDir}`);
  
  const contentDirs = ["principles", "skills", "workflows", "resources", "evaluations", "agents"];
  
  for (const dir of contentDirs) {
    const src = join(PLAYBOOK_ROOT, dir);
    const dest = join(targetDir, dir);
    if (existsSync(src)) {
      copyDir(src, dest);
      console.log(`  Copied ${dir}/`);
    }
  }
  
  copyFileSync(join(PLAYBOOK_ROOT, "manifest.json"), join(targetDir, "manifest.json"));
  copyFileSync(join(PLAYBOOK_ROOT, "README.md"), join(targetDir, "README.md"));
  console.log("  Copied manifest.json, README.md");
  
  if (HARNESS !== "playbook") {
    const adapterSrc = join(PLAYBOOK_ROOT, "agents", "adapters", HARNESS);
    const adapterDest = join(targetDir, "agents", "adapters", HARNESS);
    if (existsSync(adapterSrc)) {
      copyDir(adapterSrc, adapterDest);
      console.log(`  Copied adapters for ${HARNESS}/`);
    }
  }
  
  const configHint = {
    installedAt: new Date().toISOString(),
    version: "0.1.0",
    harness: HARNESS,
    source: "vstack-playbook"
  };
  writeFileSync(join(targetDir, ".vstack-install.json"), JSON.stringify(configHint, null, 2));
  
  console.log(`\nvstack playbook installed for ${HARNESS}`);
  console.log(`   Location: ${targetDir}`);
}

installPlaybook().catch(err => {
  console.error("Installation failed:", err);
  process.exit(1);
});