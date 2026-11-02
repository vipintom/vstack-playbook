#!/usr/bin/env node
/**
 * vstack Playbook Distribution Packaging
 * Creates tarball and zip with SHA256 checksums
 */

import { readFileSync, writeFileSync, mkdirSync, existsSync, rmSync } from "node:fs";
import { join, resolve, dirname } from "node:path";
import { createHash } from "node:crypto";
import { execSync } from "node:child_process";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const PLAYBOOK_ROOT = resolve(__dirname, "..");
const DIST_DIR = join(PLAYBOOK_ROOT, "dist");

const FILES_TO_PACKAGE = [
  "principles",
  "agents",
  "skills",
  "workflows",
  "resources",
  "evaluations",
  "scripts",
  "manifest.json",
  "README.md",
  "docs/capability-matrix.md"
];

function getVersion() {
  const pkg = JSON.parse(readFileSync(join(PLAYBOOK_ROOT, "package.json"), "utf-8"));
  return pkg.version;
}

function getManifest() {
  return JSON.parse(readFileSync(join(PLAYBOOK_ROOT, "manifest.json"), "utf-8"));
}

function createDistDir() {
  if (existsSync(DIST_DIR)) {
    rmSync(DIST_DIR, { recursive: true });
  }
  mkdirSync(DIST_DIR, { recursive: true });
}

function createTarball(version) {
  const tarballName = `vstack-playbook-v${version}.tar.gz`;
  const tarballPath = join(DIST_DIR, tarballName);
  
  const transform = `s,^,vstack-playbook-v${version}/,`;
  
  const files = FILES_TO_PACKAGE.join(" ");
  execSync(`tar -czf "${tarballPath}" --transform '${transform}' ${files}`, { 
    cwd: PLAYBOOK_ROOT,
    stdio: "inherit"
  });
  
  return tarballPath;
}

function createZip(version) {
  const zipName = `vstack-playbook-v${version}.zip`;
  const zipPath = join(DIST_DIR, zipName);
  
  const files = FILES_TO_PACKAGE.join(" ");
  execSync(`zip -r "${zipPath}" ${files}`, { 
    cwd: PLAYBOOK_ROOT,
    stdio: "inherit"
  });
  
  return zipPath;
}

function sha256(filePath) {
  const content = readFileSync(filePath);
  return createHash("sha256").update(content).digest("hex");
}

function updateManifest(version, tarballPath, zipPath) {
  const manifest = getManifest();
  const tarballName = `vstack-playbook-v${version}.tar.gz`;
  const zipName = `vstack-playbook-v${version}.zip`;
  
  manifest.packaging = {
    version: version,
    tarball: tarballName,
    zip: zipName,
    tarballSha256: sha256(tarballPath),
    zipSha256: sha256(zipPath),
    createdAt: new Date().toISOString()
  };
  
  manifest.playbookVersion = version;
  
  writeFileSync(join(PLAYBOOK_ROOT, "manifest.json"), JSON.stringify(manifest, null, 2));
  console.log(`Updated manifest.json with packaging info`);
}

async function main() {
  console.log("vstack Playbook Distribution Packaging");
  console.log("==========================================\n");
  
  const version = getVersion();
  console.log(`Version: ${version}\n`);
  
  createDistDir();
  
  console.log("Creating tarball...");
  const tarballPath = createTarball(version);
  console.log(`  OK ${tarballPath}`);
  
  console.log("\nCreating zip...");
  const zipPath = createZip(version);
  console.log(`  OK ${zipPath}`);
  
  console.log("\nGenerating checksums...");
  const tarballSha256 = sha256(tarballPath);
  const zipSha256 = sha256(zipPath);
  console.log(`  Tarball SHA256: ${tarballSha256}`);
  console.log(`  Zip SHA256:     ${zipSha256}`);
  
  console.log("\nUpdating manifest...");
  updateManifest(version, tarballPath, zipPath);
  
  console.log("\n==========================================");
  console.log("Distribution packaging complete!");
  console.log(`\nArtifacts:`);
  console.log(`  ${tarballPath} (${(readFileSync(tarballPath).length / 1024).toFixed(1)} KB)`);
  console.log(`  ${zipPath} (${(readFileSync(zipPath).length / 1024).toFixed(1)} KB)`);
  console.log(`\nChecksums:`);
  console.log(`  Tarball: ${tarballSha256}`);
  console.log(`  Zip:     ${zipSha256}`);
}

main().catch(err => {
  console.error("Packaging failed:", err);
  process.exit(1);
});