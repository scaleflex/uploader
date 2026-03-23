# Deploying to GitHub Pages

Source code is private on GitLab (`code.scaleflex.cloud`). Only build artifacts and the demo are published to the public GitHub repo.

## Prerequisites

1. Add the GitHub remote (one-time setup):

```bash
git remote add github git@github.com:scaleflex/uploader.git
```

2. Verify remotes:

```bash
git remote -v
# origin   git@code.scaleflex.cloud:scaleflex-plugins/uploader.git (GitLab - private)
# github   git@github.com:scaleflex/uploader.git (public)
```

## Update GitHub Pages Demo

Run the publish script:

```bash
./scripts/publish-github.sh "Update release artifacts"
```

Or via npm:

```bash
npm run publish:github
```

This will:

1. Build the library (`npm run build` → `dist/`)
2. Build the demo (`npm run build:demo` → `demo-dist/`)
3. Push `dist/`, `demo-dist/`, `package.json`, `README.md`, `LICENSE`, and `CHANGELOG.md` to the `release` branch on GitHub

## GitHub Pages Settings

In the GitHub repo (Settings → Pages), make sure:

- **Source** is set to **GitHub Actions**
- The workflow at `.github/workflows/pages.yml` auto-deploys on push to `main`

## Demo URL

https://scaleflex.github.io/uploader/
