import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, "..");
const syncPairs = [
  {
    label: "images",
    source: path.join(projectRoot, "src", "content", "img"),
    target: path.join(projectRoot, "public", "content", "img")
  },
  {
    label: "fonts",
    source: path.join(projectRoot, "src", "content", "fonts"),
    target: path.join(projectRoot, "public", "content", "fonts")
  }
];

function ensureDir(dir) {
  fs.mkdirSync(dir, { recursive: true });
}

function copyDirRecursive(source, target) {
  ensureDir(target);
  const entries = fs.readdirSync(source, { withFileTypes: true });
  for (const entry of entries) {
    const sourcePath = path.join(source, entry.name);
    const targetPath = path.join(target, entry.name);
    if (entry.isDirectory()) {
      copyDirRecursive(sourcePath, targetPath);
    } else if (entry.isFile()) {
      fs.copyFileSync(sourcePath, targetPath);
    }
  }
}

for (const pair of syncPairs) {
  if (!fs.existsSync(pair.source)) {
    console.warn(`[sync-content-assets] Source not found (${pair.label}): ${pair.source}`);
    continue;
  }

  if (fs.existsSync(pair.target)) {
    fs.rmSync(pair.target, { recursive: true, force: true });
  }

  copyDirRecursive(pair.source, pair.target);
  console.log(`[sync-content-assets] Synced ${pair.source} -> ${pair.target}`);
}
