#!/usr/bin/env node
/**
 * vstack Playbook Installation Test
 * Verifies installation works correctly for all harnesses
 */

import { readFileSync, existsSync, statSync, readdirSync } from "node:fs";
import { join, resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const PLAYBOOK_ROOT = resolve(__dirname, "..");

const HARNESSES = ["opencode", "codex", "claude-code", "playbook"];

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

function checkDirExists(path, name) {
  if (!existsSync(path)) {
    console.log(`  FAIL ${name}: ${path} - NOT FOUND`);
    return false;
  }
  const stat = statSync(path);
  if (!stat.isDirectory()) {
    console.log(`  FAIL ${name}: ${path} - NOT A DIRECTORY`);
    return false;
  }
  console.log(`  OK ${name}: ${path}`);
  return true;
}

function checkFileExists(path, name) {
  if (!existsSync(path)) {
    console.log(`  FAIL ${name}: ${path} - NOT FOUND`);
    return false;
  }
  console.log(`  OK ${name}: ${path}`);
  return true;
}

function validateInstallation(harness) {
  const targetDir = getHarnessConfigDir(harness);
  let allPassed = true;
  
  console.log(`\nValidating ${harness} installation at: ${targetDir}`);
  
  const requiredDirs = ["principles", "skills", "workflows", "resources", "evaluations", "agents"];
  for (const dir of requiredDirs) {
    allPassed = checkDirExists(join(targetDir, dir), dir) && allPassed;
  }
  
  allPassed = checkFileExists(join(targetDir, "manifest.json"), "manifest.json") && allPassed;
  allPassed = checkFileExists(join(targetDir, "README.md"), "README.md") && allPassed;
  
  if (harness !== "playbook") {
    const adapterDir = join(targetDir, "agents", "adapters", harness);
    allPassed = checkDirExists(adapterDir, `adapters/${harness}`) && allPassed;
    
    const roles = ["lead", "builder", "reviewer"];
    for (const role of roles) {
      allPassed = checkFileExists(join(adapterDir, `vstack-${role}.md`), `adapter: vstack-${role}.md`) && allPassed;
    }
  }
  
  allPassed = checkFileExists(join(targetDir, ".vstack-install.json"), ".vstack-install.json") && allPassed;
  
  try {
    const manifest = JSON.parse(readFileSync(join(targetDir, "manifest.json"), "utf-8"));
    if (!manifest.schemaVersion || !manifest.playbookVersion) {
      console.log(`  FAIL manifest.json: missing required fields`);
      allPassed = false;
    } else {
      console.log(`  OK manifest.json: schemaVersion=${manifest.schemaVersion}, playbookVersion=${manifest.playbookVersion}`);
    }
  } catch (e) {
    console.log(`  FAIL manifest.json: invalid JSON`);
    allPassed = false;
  }
  
  const principlesDir = join(targetDir, "principles");
  if (existsSync(principlesDir)) {
    const principleFiles = readdirSync(principlesDir).filter(f => f.endsWith(".md"));
    console.log(`  Principles found: ${principleFiles.length}`);
    if (principleFiles.length < 17) {
      console.log(`  WARN Expected at least 17 principles`);
    }
  }
  
  const skillsDir = join(targetDir, "skills");
  if (existsSync(skillsDir)) {
    const skillDirs = readdirSync(skillsDir).filter(f => statSync(join(skillsDir, f)).isDirectory());
    console.log(`  Skills found: ${skillDirs.length}`);
    if (skillDirs.length < 52) {
      console.log(`  WARN Expected at least 52 skills`);
    }
  }
  
  const workflowsDir = join(targetDir, "workflows");
  if (existsSync(workflowsDir)) {
    const workflowFiles = readdirSync(workflowsDir).filter(f => f.endsWith(".md"));
    console.log(`  Workflows found: ${workflowFiles.length}`);
    if (workflowFiles.length < 18) {
      console.log(`  WARN Expected at least 18 workflows`);
    }
  }
  
  return allPassed;
}

async function main() {
  console.log("vstack Playbook Installation Test");
  console.log("=====================================");
  
  let allHarnessesPassed = true;
  
  for (const harness of HARNESSES) {
    const passed = validateInstallation(harness);
    allHarnessesPassed = allHarnessesPassed && passed;
  }
  
  console.log("\n=====================================");
  if (allHarnessesPassed) {
    console.log("All installation tests PASSED");
    process.exit(0);
  } else {
    console.log("Some installation tests FAILED");
    process.exit(1);
  }
}

main().catch(err => {
  console.error("Test failed:", err);
  process.exit(1);
});