# Release & Deploy

## Prerequisites

- `.env.local` in project root (not committed):
  ```env
  FILEROBOT_CDN_TOKEN=scaleflex
  FILEROBOT_CDN_SECU=SECU_CCB526580D7F4E819BF84F6B8F8FDFFE
  FILEROBOT_CDN_FOLDER=/plugins/scaleflex/uploader/{version}/
  ```
- SSH key with access to both remotes:
  - **GitLab (origin):** `git@code.scaleflex.cloud:scaleflex-plugins/uploader.git`
  - **GitHub:** `git@github.com:scaleflex/uploader.git`
- npm authenticated (`npm whoami` should work)

## Git remotes

```bash
# If github remote is not set up:
git remote add github git@github.com:scaleflex/uploader.git
```

| Remote   | URL                                                      | Branches      |
|----------|----------------------------------------------------------|---------------|
| `origin` | `git@code.scaleflex.cloud:scaleflex-plugins/uploader.git` | `main`, `release` |
| `github` | `git@github.com:scaleflex/uploader.git`                  | `release` (default branch on GitHub) |

## Branch layout

- **`main`** — source code, development (GitLab only)
- **`release`** — built artifacts for public consumption: `dist/`, `demo/`, `README.md`, `CHANGELOG.md`, `LICENSE`, `package.json`. This is the default branch on GitHub so the README renders there. No source code, no `node_modules/`.

## Full release process

### 1. Run the release script

```bash
npm run release            # patch bump (e.g. 0.2.5 → 0.2.6)
npm run release -- minor   # minor bump (e.g. 0.2.6 → 0.3.0)
npm run release -- major   # major bump (e.g. 0.3.0 → 1.0.0)
```

This automatically:
- Bumps version in `package.json`
- Builds the CDN bundle (`dist-cdn/sfx-uploader.min.js`)
- Uploads to Filerobot CDN
- Updates CDN URLs in `README.md` and `docs/spec.md`
- Builds the library (`dist/`)
- Publishes to npm (may prompt for OTP — authenticate in browser)
- Prints the CDN URL

If npm publish fails (OTP, network), run manually:
```bash
npm publish --access public
```

### 2. Update remaining CDN URLs

The release script updates `README.md` and `docs/spec.md`. Manually check and update:
- `demo/pages/landing.ts` — CDN URL in quick-start panel
- `demo/pages/docs/getting-started.ts` — CDN URL in docs
- `.claude/skills/integrate-uploader/SKILL.md` — CDN URL in skill

### 3. Commit the release on main

```bash
git add package.json README.md demo/pages/landing.ts demo/pages/docs/getting-started.ts .claude/skills/integrate-uploader/SKILL.md
git commit -m "Release vX.Y.Z: bump version, update CDN URLs and dist bundles"
git tag vX.Y.Z
```

### 4. Push main to GitLab

```bash
git push origin main
git push origin vX.Y.Z
```

> **Note:** `main` is protected on GitLab — force push is not allowed. If the release script already pushed commits, rebase first: `git pull --rebase origin main`

### 5. Build the demo site

```bash
npx vite build --config vite.demo.config.ts
```

This outputs to `demo-dist/`.

### 6. Update the release branch

```bash
# Copy build artifacts to temp
cp -r dist /tmp/sfx-up-dist
cp -r demo-dist /tmp/sfx-up-demo-dist
cp README.md CHANGELOG.md LICENSE package.json /tmp/

# Switch to release branch
git checkout release

# Replace contents
rm -rf dist/ demo/
cp -r /tmp/sfx-up-dist dist
mkdir -p demo && cp -r /tmp/sfx-up-demo-dist/* demo/
cp /tmp/README.md /tmp/CHANGELOG.md /tmp/LICENSE /tmp/package.json .

# Commit
git add -A
git status  # verify no node_modules, .env.local, .idea, etc.
git commit -m "Update release artifacts for vX.Y.Z"

# Switch back
git checkout main
```

### 7. Push release branch to both remotes

```bash
# GitLab
git push origin release

# GitHub (public-facing — this is the default branch shown on github.com)
git push github release --force
```

> **Why `--force` for GitHub?** The release branch on GitLab and GitHub may diverge (GitHub had manual README edits). Force push is safe since the branch only contains built artifacts.

## CDN URLs

The CDN URL format is:
```
https://cdn.scaleflex.com/uploader/{version}/sfx-uploader.min.js
```

Example: `https://cdn.scaleflex.com/uploader/0.2.5/sfx-uploader.min.js`

## Troubleshooting

### npm publish fails with EOTP
Authenticate in the browser URL shown in the error, then retry:
```bash
npm publish --access public
```

### GitLab rejects push (non-fast-forward)
```bash
git pull --rebase origin main
git push origin main
```

### GitHub rejects push (non-fast-forward)
```bash
git push github release --force
```

### SSH passphrase prompts
Each push requires the SSH key passphrase. To avoid repeated prompts, add the key to the agent:
```bash
ssh-add ~/.ssh/id_ed25519
```
