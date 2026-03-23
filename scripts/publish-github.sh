#!/usr/bin/env bash
set -euo pipefail

# Publishes only build artifacts (dist + demo) to the public GitHub repo.
# Source code stays private on GitLab.
#
# Usage:
#   ./scripts/publish-github.sh [commit-message]
#
# Prerequisites:
#   - GitHub remote "origin" pointing to the public repo
#   - npm run build / npm run build:demo must work

GITHUB_REMOTE="github"
GITHUB_BRANCH="release"
SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
ROOT_DIR="$(cd "$SCRIPT_DIR/.." && pwd)"
STAGE_DIR="$(mktemp -d)"
COMMIT_MSG="${1:-"Update release artifacts"}"

cleanup() { rm -rf "$STAGE_DIR"; }
trap cleanup EXIT

echo "==> Building library..."
cd "$ROOT_DIR"
npm run build

echo "==> Building demo..."
npm run build:demo

echo "==> Preparing release branch..."

# Clone only the release branch (shallow) to avoid pulling source history
if git ls-remote --exit-code "$GITHUB_REMOTE" "$GITHUB_BRANCH" >/dev/null 2>&1; then
  git clone --depth 1 --branch "$GITHUB_BRANCH" "$(git remote get-url $GITHUB_REMOTE)" "$STAGE_DIR"
else
  # First time: create an orphan branch
  cd "$STAGE_DIR"
  git init
  git remote add origin "$(cd "$ROOT_DIR" && git remote get-url $GITHUB_REMOTE)"
  git checkout --orphan "$GITHUB_BRANCH"
  cd "$ROOT_DIR"
fi

echo "==> Copying artifacts..."
# Clean old artifacts but preserve .git
find "$STAGE_DIR" -mindepth 1 -maxdepth 1 ! -name '.git' -exec rm -rf {} +

# Copy built demo site to root (GitHub Pages serves from /)
if [ -d "$ROOT_DIR/demo-dist" ]; then
  cp -r "$ROOT_DIR/demo-dist/." "$STAGE_DIR/"
elif [ -d "$ROOT_DIR/dist-demo" ]; then
  cp -r "$ROOT_DIR/dist-demo/." "$STAGE_DIR/"
fi

# Copy build artifacts
cp -r "$ROOT_DIR/dist" "$STAGE_DIR/"

# Copy package metadata
cp "$ROOT_DIR/package.json" "$STAGE_DIR/"
cp "$ROOT_DIR/README.md" "$STAGE_DIR/"
[ -f "$ROOT_DIR/LICENSE" ] && cp "$ROOT_DIR/LICENSE" "$STAGE_DIR/"
[ -f "$ROOT_DIR/CHANGELOG.md" ] && cp "$ROOT_DIR/CHANGELOG.md" "$STAGE_DIR/"

echo "==> Committing & pushing to GitHub ($GITHUB_BRANCH)..."
cd "$STAGE_DIR"
git add -A
if git diff --cached --quiet; then
  echo "No changes to publish."
  exit 0
fi
git commit -m "$COMMIT_MSG"
git push origin "$GITHUB_BRANCH"

echo "==> Done! Artifacts published to $GITHUB_REMOTE/$GITHUB_BRANCH"
