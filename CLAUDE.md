# CLAUDE.md

## Git Remotes & Push Rules

- `origin` (code.scaleflex.cloud) — primary remote. Push `main` here.
- `github` (github.com/scaleflex/uploader) — public repo. **ONLY push the `release` branch here. NEVER push `main` to GitHub.**

## Release Branch

The `release` branch contains only select files (README, LICENSE, CHANGELOG, package.json, dist/, dist-cdn/, demo/) — NOT the full source. Never merge `main` into `release` directly. Instead, cherry-pick or checkout individual files from `main` when updating release.

## GitHub Actions

- GitHub Actions workflows (`.github/workflows/`) run on the **`release` branch** since that's the only branch pushed to GitHub.
- The Pages workflow must also exist on the `release` branch to trigger.
