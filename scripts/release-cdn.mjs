#!/usr/bin/env node
import { execSync } from "child_process";
import { resolve, dirname, join } from "path";
import { fileURLToPath, pathToFileURL } from "url";
import { homedir } from "os";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, "..");
const { run } = await import(
  pathToFileURL(join(homedir(), ".claude/skills/release-cdn/release-cdn.mjs")).href
);

run({
  root,
  artifacts: {
    plugin: {
      versionKey: "version",
      cdnFileName: "sfx-uploader.min.js",
      build(version) {
        // Build a self-contained IIFE bundle for CDN (inlines lit)
        execSync(
          'npx vite build --config vite.cdn.config.ts',
          { stdio: "inherit", cwd: root },
        );
        return resolve(root, "dist-cdn/sfx-uploader.min.js");
      },
    },
  },
  updateFiles: ["README.md", "docs/spec.md"],
});
