# Scaleflex Uploader — Staged Implementation Guide

> Companion to `docs/spec.md`
> Date: 2026-03-12

---

## Context

The spec (`docs/spec.md`) is a ~56KB, 22-section document covering everything from architecture to animations. The project currently has zero implementation — just an empty `src/index.ts` and a basic `tsconfig.json`. The spec already defines 6 implementation phases. This document breaks those phases into concrete, focused stages with copy-paste prompts for Claude Code.

## Approach: Stage-by-Stage with Focused Prompts

### Why staged, not "implement the spec"

- The spec is too large for a single prompt — Claude will lose detail or make inconsistent choices
- Each stage needs verification before the next builds on it
- You want to review architectural decisions (Store shape, component API) before 500 lines depend on them
- Asset-picker (`/Users/dmitrystremous/scaleflex/asset-picker`) is the reference codebase — each stage should explicitly mirror its patterns

---

## Stage Breakdown

### Stage 0: Project scaffolding (1 prompt)

```
Set up the project build pipeline mirroring asset-picker's setup.
Reference /Users/dmitrystremous/scaleflex/asset-picker for:
- Vite config (dev server + library build)
- tsconfig (Lit decorators, ESM target)
- Package.json (dependencies: lit, scripts: dev/build/preview)
- Dual ESM/CJS output with conditional exports
- Entry points structure

Follow spec sections 3 (Architecture) and 4 (Package Strategy).
Don't create any components yet — just the build pipeline that compiles and serves an empty Lit element.
```

### Stage 1a: Store + State (1 prompt)

```
Implement the reactive Store for uploader state, following asset-picker's
Store pattern at /Users/dmitrystremous/scaleflex/asset-picker/src/store/.
Follow spec section 5 (Core Upload Engine) for the state shape —
specifically the file states (idle → uploading → complete/error)
and queue management. Include the event bus for internal events (spec section 13.2).
```

### Stage 1b: Upload Engine (1 prompt)

```
Implement the upload engine — XHR upload to Filerobot /v4/files endpoint.
Follow spec section 9 (API Integration). Include:
- FormData construction with file + metadata
- Progress tracking via XHR progress events
- Concurrency limiting (spec section 12: concurrency config)
- Basic error handling
Reference the upload patterns from js-admin at
/Users/dmitrystremous/scaleflex/js-admin-react-filerobot-v5
No UI yet — this is a headless service that the Store drives.
```

### Stage 1c: Core Web Components (1 prompt)

```
Implement the core Lit web components following the design template
(docs/upload-final.html) and spec sections 7 + 10. Mirror asset-picker's
component patterns at /Users/dmitrystremous/scaleflex/asset-picker/src/components/.
Wire them to the Store from Stage 1a. Components to build:

1. <sfx-drop-zone> — Animated rings decoration, cloud upload icon,
   "Drag & Drop or click to browse" text, ripple effect on drag-over.
   Handles drag/drop + browse (hidden file input) + paste.

2. <sfx-import-divider> — "or import from" separator line.

3. <sfx-source-pills> — Row of pill buttons below the divider.
   Core pills: My Device (opens file picker), Camera, URL link.
   Connector pills added dynamically when plugins register.
   Each pill has SVG icon + label.

4. <sfx-file-list> + <sfx-file-item> — File queue with per-file
   thumbnail preview, name, size, progress bar, status icon,
   remove (×) and retry actions.

5. <sfx-success-card> — Post-upload view with animated checkmark,
   "Uploaded successfully!" title, subtitle, "Upload more" +
   configurable primary action button.

6. <sfx-actions-bar> — Persistent footer with Clear, Add more,
   and Upload button. Upload button has 3 states: idle (icon + "Upload"),
   uploading (spinner + "Uploading…"), done (checkmark + "Done!").

7. <sfx-uploader> root — Orchestrates all of the above, manages
   display mode (modal with header/close, inline, dropdown).

Include:
- File validation/restrictions (spec section 12: restrictions)
- Progress display per-file and total
- CSS custom properties with --sfx-up-* prefix (spec section 14)
```

### Stage 1d: Auth + React wrapper (1 prompt)

```
Add authentication (spec section 8) — security template + SASS key modes.
Add React wrapper mirroring asset-picker's approach at
/Users/dmitrystremous/scaleflex/asset-picker/src/react/.
Add public event dispatching (spec section 13.1) and config callbacks.
```

### Phases 2–6

Continue with spec Phases 2–6 similarly, each as 1–3 focused prompts following the same pattern.

---

## Prompt Principles

1. **Always reference the spec section numbers** — "Follow spec section 9" keeps Claude grounded
2. **Always point to asset-picker** for patterns — prevents reinventing conventions
3. **One concern per prompt** — Store, Engine, Components, Auth are separate prompts even within Phase 1
4. **Verify before proceeding** — after each stage, review the output, run the build, test manually
5. **Don't ask Claude to read the whole spec** — excerpt the relevant section or summarize it in the prompt
6. **Start each prompt with context** — "We've implemented Store and Upload Engine. Now add the UI components that consume them."

## What to Avoid

- **"Implement the spec"** — too vague, spec is too large
- **Skipping Stage 0** — if the build pipeline is wrong, everything else is painful
- **Multiple concerns per prompt** — "add Store AND components AND auth" will produce mediocre results for all three
- **Not referencing asset-picker** — the spec says to mirror it, and it's right there

---

## Verification per Stage

| Stage | How to verify |
|-------|--------------|
| 0 (scaffolding) | `npm run dev` serves a page, `npm run build` produces dist/ |
| 1a (store) | Unit test or console: create store, add files, verify state transitions |
| 1b (engine) | Mock/real upload to Filerobot, verify FormData, progress events |
| 1c (components) | `npm run dev`, drag files, see them in list, click upload |
| 1d (auth + react) | React demo app renders `<Uploader>`, events fire |
