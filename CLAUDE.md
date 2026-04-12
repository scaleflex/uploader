# CLAUDE.md

## Tech Stack

- **Lit 3** web components with Shadow DOM encapsulation
- **TypeScript** strict mode, ES2022 target, decorators enabled (`useDefineForClassFields: false`)
- **Vite 6** — dual build (ESM + CJS) with `vite-plugin-dts` for declarations
- **tus-js-client** for resumable uploads
- **React wrapper** via `src/react.ts` (optional peer dep)
- **No linter configured** — no ESLint, Prettier, or StyleLint

## Development

```bash
yarn dev          # dev server (serves dev/)
yarn dev:demo     # demo site (serves demo/)
yarn build        # library build → dist/
yarn build:demo   # demo build → demo-dist/
yarn typecheck    # tsc --noEmit
yarn test         # vitest run
yarn test:watch   # vitest in watch mode
yarn test:coverage
```

## Project Structure

```
src/
├── sfx-uploader.ts       # Main component (~161KB, the big one)
├── index.ts              # Public API entry
├── react.ts              # React wrapper (forwardRef, controlled open)
├── define.ts             # Custom element registration
├── test-utils.ts         # Test helpers
├── auth/                 # Auth service & types
├── components/           # Lit sub-components (drop-zone, file-list, etc.)
├── connectors/           # Cloud provider integrations (Google Drive, etc.)
├── controllers/          # Lit reactive controllers
├── engine/               # Upload engine (tus + multipart)
├── events/               # Custom DOM event definitions
├── metadata/             # Metadata schema, fields, bulk editing
├── store/                # Reactive state management
├── types/                # Shared TypeScript types
└── utils/                # File utils, validation, helpers
```

Path alias: `@` → `src/` (configured in Vite and vitest).

## Conventions

- CSS custom properties use `--sfx-up-*` prefix for theming
- Custom element tag: `<sfx-uploader>`
- Components are Lit elements using `@property` and `@state` decorators
- Custom element registration is centralized in `src/define.ts` via `customElements.define()` (not `@customElement` decorator)
- Imports use relative paths (the `@` → `src/` alias is configured but not used in practice)

## Testing

- **Vitest** with jsdom environment, globals enabled
- Tests live alongside source: `src/**/*.test.ts`
- Test helpers in `src/test-utils.ts`: `makeUploadFile()`, `makeRestrictions()`, `makeDefaultState()`
- Coverage excludes: test files, type files, define.ts, react.ts, index.ts
- Playwright is a devDependency but no e2e tests are written yet

## Git Remotes & Push Rules

- `gitlab` (code.scaleflex.cloud) — primary remote. Push `main` here (`yarn push:source`).
- `origin` / `github` (github.com/scaleflex/uploader) — public repo. **ONLY push the `release` branch here. NEVER push `main` to GitHub.**

## Release Branch

The `release` branch contains only select files (README, LICENSE, CHANGELOG, package.json, dist/, dist-cdn/, demo/) — NOT the full source. Never merge `main` into `release` directly. Instead, cherry-pick or checkout individual files from `main` when updating release.

## GitHub Actions

- GitHub Actions workflows (`.github/workflows/`) run on the **`release` branch** since that's the only branch pushed to GitHub.
- The Pages workflow must also exist on the `release` branch to trigger.

## Release Process

- CDN release: `yarn release` (runs `scripts/release-cdn.mjs`)
- GitHub publish: `yarn publish:github` (runs `scripts/publish-github.sh`)
- Source push: `yarn push:source` (pushes main to GitLab)
- Current version: 0.2.11 (pre-1.0)

## Changelog

Follows [Keep a Changelog](https://keepachangelog.com/) format. New entries go under `## [Unreleased]` in `CHANGELOG.md`. Use semantic sections: Added, Changed, Fixed, Removed.
