# CLAUDE.md

## Git Remotes & Push Rules

- `origin` (code.scaleflex.cloud) — primary remote. Push `main` here.
- `github` (github.com/scaleflex/uploader) — public repo. **ONLY push the `release` branch here. NEVER push `main` to GitHub.**

## GitHub Actions

- GitHub Actions workflows (`.github/workflows/`) run on the **`release` branch** since that's the only branch pushed to GitHub.
