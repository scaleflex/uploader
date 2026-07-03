# Changelog

## 1.11.0

### Minor Changes

- 2986ac6: Implement `metadataConfig.defaults` — default metadata values (backend format, same keys as the upload `meta` payload) are now seeded into every newly added file across all add paths (local ingest, URL import, connectors). Seeded values pre-fill the metadata form and are sent with the upload; non-empty values also satisfy required-field enforcement. Previously the option was documented but had no effect. Also fixed docs: the airbox example used the nonexistent `targetDir` key (now `targetFolder`), and the `similarityCheck` confidence table showed 0.90 for `'high'` while the code uses 0.85.

### Patch Changes

- Updated dependencies [2986ac6]
  - @scaleflex/dam-metadata@0.3.5

## 1.10.0

### Minor Changes

- Add tags-item support (FRA-10513), fix CDN URL conversion regex (FRA-10579), add missing asset-picker translations (FRA-10565), and add `pnpm release:cdn` to upload all widget CDN bundles at once.

### Patch Changes

- Updated dependencies
  - @scaleflex/bulk-edit@0.3.0
  - @scaleflex/dam-core@0.3.0
  - @scaleflex/dam-metadata@0.3.0
  - @scaleflex/dam-ui@0.3.0

## 1.9.0

### Patch Changes

- 293caf4: Deduplication & reuse — Wave 1 (delete-now wins). See `plan/12-deduplication-and-reuse-plan.md`.

  **`@scaleflex/dam-metadata`** — the product-field surface is now fully exported from the
  package barrel: `ProductFieldKey`, `validateProductRef`, `validateProductPosition`,
  `mergeProductPatch`, `compactProduct`, `hasProductData`, and the `SfxProductFieldsForm`
  element (whose import registers `<sfx-product-fields-form>`). Additive; existing exports
  are unchanged. The dead `UploaderMissingKeysHelper` (`i18n/missing-keys-helper.ts`, never
  exported) and the duplicated `i18n/translate.ts` + `i18n/i18n-controller.ts` were removed —
  the package now re-exports `t` and `I18nController` directly from the `createI18n` bundle
  (`i18n/i18n.ts`); both public symbols keep the same names and types.

  **`@scaleflex/asset-picker`** — first real adoption of `@scaleflex/dam-core`. The duplicate
  `ap-*` Lit primitives now resolve to `@scaleflex/dam-ui`'s `sfx-*` set, the local
  `brand-color` util to `@scaleflex/dam-ui/theme`, the REST client to dam-core's `DamClient`,
  and the labels service + `Label` type to dam-core. The publicly re-exported `Label` type now
  comes from dam-core, where `color` / `shape` / `assets_count` are optional rather than
  required (a relaxation — consumers reading these fields should treat them as possibly
  undefined). All CSS custom properties moved from the `--ap-*` to the `--sfx-*` prefix.
  No change to the `<sfx-asset-picker>` element API, config, or events.

  **`@scaleflex/uploader`** — its private copy of the `product/` field engine was deleted in
  favour of `@scaleflex/dam-metadata` (the canonical home), and the duplicated
  `i18n/translate.ts` + `i18n/i18n-controller.ts` were collapsed onto the `createI18n` bundle.
  The public API is unchanged: the same product symbols are re-exported, now sourced from
  `@scaleflex/dam-metadata`.

- Updated dependencies [4de00f2]
- Updated dependencies [44d1394]
- Updated dependencies [313999a]
- Updated dependencies [12d0589]
- Updated dependencies [86252c7]
- Updated dependencies [293caf4]
- Updated dependencies [293caf4]
- Updated dependencies [c0e160b]
- Updated dependencies [d36b7fd]
  - @scaleflex/bulk-edit@0.2.0
  - @scaleflex/dam-core@0.2.0
  - @scaleflex/dam-ui@0.2.0
  - @scaleflex/dam-metadata@0.2.0

All notable changes to `@scaleflex/uploader` will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added

- **`metadataConfig.rawDependencies` — pass dependencies through config to override the Hub fetch.** Mirrors the existing `rawMetadata` escape hatch. When set (to either the raw `/api/metadata/dependencies` response or just its `dependencies` array), the uploader skips the Hub dependencies network call **and** its per-page module cache, normalizing the supplied list directly. This fixes a sync gap for host apps that own dependencies themselves (e.g. a Hub library view): editing dependency rules in settings and reopening the uploader previously showed stale rules in the asset-details sidebar and bulk-edit, because the per-project dependencies cache is never invalidated for the page's lifetime. The host now passes the freshly-fetched list on a new config object and the metadata UI reflects it immediately (`src/metadata/schema/schema.types.ts`, `src/sfx-uploader.ts`).

- **Metadata dependencies now support the `show` group action.** Conditional rules can target a group (or field) with an `is shown` action, the counterpart to the existing `is hidden`. When the rule fires, an otherwise default-hidden group (admin "Visible in asset metadata" off) is revealed with **all** its fields — not just the ones a `require` action marks required. This fixes the case where a rule that both _requires_ one field and _shows_ its group previously surfaced only the required field, leaving the group's other fields hidden because the `show` action was unsupported. `hide` still wins when both fire on the same target. Applies consistently to the asset-details form and the bulk-edit sidebar/modal/table; in bulk a field/group is revealed when **any** selected file's rule shows it (mirroring `require`). New `isFieldShownByDeps` helper and a `shown` flag on the resolved field state (`src/metadata/dependencies/`).

- **Search + collapse-all toolbar on the bulk-edit field navigator.** The Fill-multiple-assets sidebar now has a sticky header with a "Search fields…" input and a collapse-all/expand-all toggle. Typing filters the navigator to fields whose title matches (or keeps a whole group when the group name matches), ignoring collapsed state so every match stays visible, and shows a "No fields match" empty state when nothing does; clearing restores the tree. The toggle button collapses every group at once (or expands them all when already fully collapsed). The toolbar is hidden on the mobile (≤768px) horizontal tab-bar layout, where any carried-over query is also treated as inert so a desktop→mobile resize can't leave fields filtered out with no visible control to clear them (`src/metadata/bulk/bulk-meta-sidebar.ts`).

### Changed

- **Large-batch rendering & upload performance (500+ assets).** Several changes keep big batches smooth. (1) Each asset tile uses CSS `content-visibility: auto` (with a `contain-intrinsic-size` placeholder), so the browser skips layout/style/paint for tiles scrolled out of view — the responsive grid and all tile behavior are unchanged. (2) Byte-level upload progress is coalesced: instead of writing every XHR/tus progress event straight to the store (which, with N concurrent uploads, triggered `2×N` full re-renders per tick — one for the file patch, one for the recomputed totals), the engine buffers the latest progress per file and flushes once per animation frame, folding the file patch and aggregate totals into a single state update. Terminal states (complete/cancelled/paused/errored) apply immediately and are never clobbered by a late progress flush. (3) Re-renders are scoped to the changed tile: each `<sfx-file-item>` subscribes to the store for its own file and re-renders only when that file changes, so the file list no longer re-runs its (O(n)) render on progress-only frames. (4) Image dimension probing (which decodes the preview) is deferred until a tile is actually on-screen (via the browser's `contentvisibilityautostatechange`), so a 500-image batch no longer decodes every preview up-front; preview `<img>`s also decode off the main thread (`decoding="async"`).
- **Large-batch performance, part 2 — Fill-metadata modal & file ingestion.** Extends the 500+-asset work to the paths it originally missed. (1) **Bulk metadata modal:** each table row (`<sfx-bulk-meta-row>`) now uses `content-visibility: auto` so off-screen rows skip layout/paint, and skips re-rendering on op-bar keystrokes unless it's selected (the live diff preview only renders for selected rows) — so typing a bulk value no longer re-renders all N rows. The modal's `_filledFields` (an O(fields × files) JSON diff that fed the sidebar) and `_sortedFiles` (an O(n log n) sort) are now memoized in `willUpdate` instead of recomputed on every render; the filled-fields set keeps a stable reference when unchanged so the sidebar stops re-rendering on every keystroke. (2) **File ingestion:** dropping/selecting a large batch now dedupes incoming files via a `Set` of `name + size + folder` identities instead of re-scanning the whole queue for each file (was O(n²) with a fresh array allocation per file). (3) The pre-upload similar-image category scan and the required-metadata gate (O(files × deps × fields)) are skipped once an upload is in flight, so they no longer run on every progress frame.
- **Consistent status colours for the overall progress and per-asset state.** Outcomes now read the same everywhere — green = newly uploaded, **orange/warning = duplicate / already in library**, red = failed. Duplicates previously surfaced with a neutral/blue "info" treatment; they now use an amber warning-triangle icon and colour on the per-tile "Already uploaded" badge, the minimized floating pill, and the dialog header's done status. The header carries a segmented overall-progress bar (green/orange/red shares) and no longer shows a green "all done" check when the batch was only duplicates or had failures.
- **Single-screen upload flow — progress now lives on the asset list.** The uploader no longer swaps to a dedicated full-screen upload overlay or a "result" success card. Selected assets stay on screen the whole time and each tile shows its own live state (queued → progress bar → ✓ done / "Already uploaded" badge / error + retry). The **dialog header** hosts the overall progress — a determinate bar during upload (under "Uploading N files · X of Y complete") and a segmented green/orange/red bar with the outcome status ("N uploaded · M already in library · K failed") when finished — while the **actions bar carries only the actions** (Cancel / Minimize during upload, **Upload more** / **Close** when finished). This removes the separate "N files were already in your library" screen — duplicates surface as a per-tile badge instead. **Removed** the `<sfx-success-card>` component (and its export) as a result.
- **Uploads now start in list order.** The pre-upload asset list renders oldest-first, matching the queue's processing order, so the top rows begin uploading first and progress flows top-to-bottom (previously the list was reversed, so the first-to-upload file sat at the bottom).
- **`Locate` / `Copy CDN` are available inline on completed tiles** (when `showLocateButton` / `showCopyCdnButton` are enabled), so you no longer need the separate review screen to grab a CDN link or jump to an asset after upload.
- **Minimized pill opens straight to the list view.** With `minimizeOnUpload`, expanding the floating pill now restores the full uploader (showing the inline asset list with live progress) instead of an intermediate expanded mini-card, which has been removed.
- **Floating progress panel keeps in-progress work in view.** The expanded floating card's per-asset list is now grouped by status — **failed rows pinned at the top** (with their retry/remove controls), **active uploads next**, and **completed files folded into a collapsible "✓ N done" group** at the bottom. Previously every row was shown newest-first, so as a large batch progressed the finished rows pushed the still-uploading (and failed) ones out of the small panel's visible area. Completed rows no longer reorder live — they move into the group once and stay put — and the group auto-expands when nothing else needs attention (e.g. the done-state panel, which is all results).
- **Missing `metadataConfig.hubHeaders` now fails fast with a clear warning.** The Hub API (metadata schema + dependencies) uses session-based auth (`x-company-token` / `x-project-token` / `x-session-token`) and rejects the Filerobot SASS key with `401 SESSION_EXPIRED`. Previously the uploader fell back to the SASS-key headers anyway — the schema fetch failed with a generic `HTTP 401` and dependencies silently degraded to "no rules". Now, when no usable Hub auth is configured, the uploader skips the doomed requests, logs one explicit console warning (once per instance) naming the three required headers, and shows the same warning toast the old failure path showed. "Usable Hub auth" means non-empty `hubHeaders` (an accidental `{}` counts as absent) or a custom **non-default** `hubApiBase` (explicitly passing the default URL doesn't bypass the check). Metadata still works without `hubHeaders` via `rawMetadata` (locally parsed schema — dependency rules load only if the Hub is reachable) or via the per-project caches populated by a hub-authed uploader instance on the same page. The schema/dependencies services themselves now also refuse provably-doomed requests against the default Hub base with a descriptive error (new shared helpers in `src/metadata/hub-auth.ts`), so direct callers get an actionable message instead of a generic 401.

- **Full i18n coverage** — every user-facing string now goes through a translation key (`t('key', 'Default')`), including the surfaces that were previously hardcoded English: the floating progress pill ("Overall progress", "Done", error tooltip fallback), validation error messages, and the entire metadata subsystem (panel, form, bulk-edit modal, all field editors, regional settings). A new module-level translator (`src/i18n/translate.ts`) backed by the shared i18next singleton serves components too deep to receive the store's `t` property; a new `I18nController` Lit reactive controller re-renders those components when translations finish loading or the language changes, so no surface stays frozen in English after a slow translation fetch or a runtime `locale` switch.
- **Structured validation errors (internal)** — `validateFileInfo`/`validateFile` now return `{ code, message }` instead of a bare string, so behavior (e.g. the folder-drop overflow aggregation) branches on the stable `code` rather than locale-dependent message text. The message stored on files and dispatched in `sfx-file-rejected` / `onFileRejected` is unchanged (still a string).

### Fixed

- **Bulk-metadata field dropdowns are visible again.** The large-batch perf pass put `content-visibility: auto` on each bulk-edit row, which implies paint containment and clipped any open field dropdown (select, multi-select, tags, taxonomy, boolean) to its row — the panel overflowing into rows below stopped painting, so it looked transparent. The row now drops the containment while focus is inside it (`:host(:focus-within)`), so the dropdown overflows as before while off-screen rows keep skipping paint (`src/metadata/bulk/bulk-metadata.styles.ts`).
- **Bulk modal no longer opens the editor table on a field its sidebar hides via a group-level rule.** The navigability check that picks/auto-advances the active field only looked at the field's own `ckey`, while the sidebar also drops a field when its owning _group_'s `ckey` is hidden by a firing `hide` dependency — so a group-level hide could leave the table and op-bar rendering a column for a field the navigator refused to list. Both surfaces now share the same `isFieldHiddenByDeps` (field-OR-group) predicate, and the "required" notion is unified in one `isFieldRequiredResolved` helper (`src/metadata/schema/required-fields.ts`) used by the form, sidebar and modal. The resolved-schema cache is also seeded before the modal's first active-field pick, so a dependency-hidden first field no longer flashes for a frame on open.
- **Primary-coloured buttons now honour a single custom `--primary`.** The gradient/solid primary buttons (`Close`, `Upload`, metadata Apply, provider `+ Select`, etc.) blend `--sfx-up-primary` into `--sfx-up-primary-mid` and use `--sfx-up-primary-glow` for their shadow — but only `--sfx-up-primary` was bridged from the host's `--primary`, while `-mid`, `-hover`, `-bg` and `-glow` fell back to hardcoded blue. A host that set just `--primary: #00A0AE` (teal) therefore got a teal→blue gradient with a blue glow. These shades are now derived from `--sfx-up-primary` via `color-mix` (`src/sfx-uploader.ts`), so a single `--primary`/`--sfx-up-primary` produces a cohesive single-hue button; hosts can still override `--primary-mid`/`--primary-hover`/`--accent` explicitly. The derivation is gated behind an `@supports (color: color-mix(...))` block over literal-blue defaults, so browsers without `color-mix` keep a valid gradient instead of a transparent button.
- **`Locate` / `Copy CDN` now actually appear inline on completed tiles in the single-screen upload flow.** The buttons were rendered but invisible: the hover/focus reveal CSS was scoped to `.tile.review` (the dedicated review screen) only, while completed tiles in the single-screen flow carry `.tile.done`. The reveal (and the touch-device always-on fallback) now also matches `.tile.done`, so enabling `showLocateButton` / `showCopyCdnButton` surfaces the actions on hover as documented (`src/components/file-item.ts`). The overlay's outer render gate was also tightened to the two inner button conditions so a completed file with neither a `uuid` nor a CDN url no longer reveals an empty overlay.
- **Bulk metadata edit now respects per-asset dependency state.** Dependency rules (hide / require / `allow_values`) are evaluated per asset, but the bulk-edit Apply path previously wrote the op-bar value to _every_ selected asset uniformly — even ones where a firing rule hides the field or restricts it to a different value set. Apply now (1) **skips assets where the field is hidden** by a rule (the field doesn't apply to them, so no value is staged), and (2) **clamps the value to each asset's own `allow_values` set** — dropping a disallowed `select-one` value for that asset, and for `multi-select` dropping only the entries the bulk op _newly introduces_ while preserving any pre-existing values that predate the rule (matching the per-row editor, which keeps the current value visible rather than silently pruning it). This matters when the bulk aggregate falls back to "unrestricted" because not every selected asset has a rule firing: a value the op-bar accepts could still be invalid for an individual asset. In the asset table, rows whose field is hidden for that asset now render a muted **"Not applicable for this asset"** placeholder (and a "no change" preview) instead of an editable input.
- **Metadata field & option labels now follow the selected Regional Settings language.** When a metadata field (or a select/multi-select option) has translations configured in the admin "Field translations" page, switching the Regional Settings language in the upload metadata panel now displays the translated field titles, placeholders, tooltips and option labels (e.g. German "Limousine"/"Lieferwagen") instead of staying in the project's default language. Translations are fetched per active language from the Filerobot API (`/v5/meta/model/fields/i18n` and `/v5/meta/model/fields/options/i18n`, mirroring admin v5), cached per language, and applied as a display-only localized copy of the schema — field/option identities, validation, dependencies and saved values are unchanged. The feature activates only when the project defines a `LANGUAGES` regional-variants group; missing translations fall back to the default-language label, and a failed translation fetch degrades silently to the default labels.
- **Upload failures now show the specific backend reason instead of a generic "contact support" line.** When the backend refuses a file (e.g. `ERR_REFUSED_UPLOAD` from a postprocess rule), the detailed, human-readable reason lives in `info.msg` (`"File … is not allowed due to postprocess rule – …"`) while the top-level `hint` is a generic placeholder (`"Please contact support for more information."`). The uploader previously surfaced `hint`, hiding the actionable detail. A shared helper (`extractUploadErrorMessage`, `src/engine/error-message.ts`) now prefers `info.msg` over the top-level `msg`/`hint`, applied across all three upload paths (XHR, Companion, and tus large-file) so the per-file error badge and failure card display the real reason.
- i18next's default HTML escaping is disabled (`escapeValue: false`) — interpolated user text (search queries, tag names like `R&D` or `O'Brien`) rendered as literal HTML entities once translations loaded, since Lit text bindings don't parse entities.
- The module translator falls back to inline English defaults until i18next has actually initialised — previously `t()` could return `undefined` during the translation-fetch window, which blanked UI strings and silently disabled file restrictions (`maxFileSize`, `maxNumberOfFiles`, file-type rules) for files dropped immediately after open.
- The i18n key extractor (`scripts/extract-i18n-keys.mjs`) now handles defaults containing the other quote type and backslash-escaped quotes, instead of skipping or truncating them.

### Added

- **Metadata group default visibility (`show: false`).** Groups whose admin "Visible in asset metadata" toggle is off arrive from the settings API with `show: false` (the flag is present only when hidden — absence or `true` means visible, so existing projects need no migration). The uploader now honours it on both metadata surfaces. In the **asset-details metadata form** and the **bulk metadata panel**, a default-hidden group is hidden by default — but it is not _fully_ hidden: it still surfaces its currently **required** fields (schema-required, forced via `metadataConfig.requiredFields`, or made required by an active `require` dependency — per asset in the form, per selection in bulk), while its other fields stay hidden and the whole group (header included) drops out when none remain. Hiding is presentation-only: values already stored in those fields are preserved on save (never stripped). "Required" is decided by one shared predicate (`isFieldRequiredResolved`) used by the form, the bulk sidebar/modal, and the upload gate alike, so a required field can never be both gated and invisible. The bulk modal also avoids opening the editor table on a field the sidebar hides (the default and auto-advanced active field skip non-navigable fields), and shows an "All metadata fields are currently hidden" empty state for the edge case where every group is hidden with no required field to surface. New helper `src/metadata/schema/group-visibility.ts` (`isGroupHidden`).
- **Locate shortcut without drilling into the review list** — the "Locate" action (gated by `showLocateButton`) is reachable directly when a single completed file can be located unambiguously. It appears (1) inline on each completed tile (alongside `Copy CDN`, gated by `showCopyCdnButton`) — including same-asset "already uploaded" results, so a duplicate can be located in one click — and (2) on the collapsed floating pill next to the open/close buttons. Multi-file batches locate per-row on the completed tiles, since there's no single destination for a batch.

- **Upload response URLs in `transformRemoteThumbnail`** — for the post-upload preview swap (`ctx.source === 'cdn-complete'`), the context now carries `ctx.urls`: the complete `response.file.url` map from the backend (`public`, `cdn`, `cdn_permalink`, `permalink`). Hosts can return a different variant outright — e.g. `ctx.urls.permalink` (which carries the `?vh=` version hash) when uploading a _new version_ of an existing asset, where the `cdn` URL points at the unchanged path and the CDN still serves the previous version's cached image. `ctx.urls` is `undefined` for the `url-import` and `connector` sources.
- **`allowFileRename` config option** — set `UploaderConfig.allowFileRename: false` to make file names read-only in the pre-upload list (the inline name field on tiles stops accepting edits and loses its editable hover affordance). Use when the stored name must not change, e.g. the Hub's "upload new version" flow where the name decides which asset gets versioned. Renaming is also disabled automatically whenever `forceName` is set, since the server overrides the name anyway.

- **`apiDomain` config option** — new optional `UploaderConfig.apiDomain` property routes all Filerobot API calls to a custom host instead of the default `https://api.filerobot.com`. Intended for customers on isolated infrastructure (e.g. Linode/Akamai) where the backend returns an alternative API host via `settings.domains.api`. Pass the bare host (e.g. `"https://akli.api.filerobot.com"`); the container token is appended automatically. Note: large-file tus uploads use a separate Companion endpoint — override that independently via `tusConfig.endpoint` if needed.

- **Metadata dependencies (FRA-8419)** — the uploader now honors pre-upload metadata dependency rules from the Filerobot admin. Rules attached to a metadata field in the admin (under the **Dependencies** tab) conditionally hide/require/restrict/preset other fields based on the file's current metadata. Four action types are supported pre-upload:
  - **`hide`** — the target field/group is removed from the form; any existing value is stripped from the upload payload (so data the user couldn't see never ships to the BE). Group-targeted hides propagate to every child field.
  - **`require`** — the target field becomes required with a red asterisk; upload is blocked until filled, matching the existing required-fields gate.
  - **`allow_values`** — select/multi-select dropdown options are filtered to the rule's allowed set. If the current value is no longer allowed, a ⚠️ icon appears next to the label with the allowed labels listed in the tooltip; the upload button gates the same way as missing-required.
  - **`set_values`** — empty fields auto-fill with the rule's value (type-coerced: boolean → `true`/`false`/`null`, select-one → first value or `null`, multi-select → array or `null`).
  - **Bulk-edit semantics**: in the bulk modal, fields hide only when _every_ selected file would hide them; the dep-required asterisk appears if _any_ file requires the field; allowed-values restriction applies only when _every_ selected file has a rule firing (the "values vary → ignore dep" fallback); per-row select cells still honor each file's own rules. The active field auto-advances if a freshly-firing dep hides it.
  - **Conflict tooltips** resolve internal sys-key ids to user-facing labels and contributing dep UUIDs to their names ("Controlled by _X dependency_").
  - **Zero configuration.** Dependencies are fetched alongside the metadata schema from `hub.scaleflex.com/api/metadata/dependencies` whenever `metadataConfig` is set. Empty payloads, failed fetches, and projects without rules are all no-ops — behavior degrades to pre-dependency semantics without any host change. To programmatically refresh after admin changes, call `clearDependenciesCache(projectUuid)` (exported from `@scaleflex/uploader/dist/...`'s `metadata` module).
  - Public exports: `Dependency`, `ResolvedSchema`, `ResolvedFieldState`, `ConflictDetails`, `fetchDependencies`, `clearDependenciesCache`, `resolveForFileWithSchema`.
- **Similarity check is now wired to the real backend.** The "Check similar" flow (per-tile and batch) now resizes each selected image to 300 px wide on the client, then POSTs it as multipart form-data to `${endpoint}/images/embedding/vectorize/image?threshold=…` with `Filerobot-Token` (container) and `Filerobot-Key` (resolved SASS key) headers. Results are mapped from the response's `similar_assets` tuples `[uuid, score, url]`. `config.similarityCheck.confidence` maps to `low → 0.60` / `mid → 0.75` (default) / `high → 0.85`. New optional `config.similarityCheck.endpoint` overrides the default `https://ai.scaleflex.com` host (useful for staging). Per-image requests run with a concurrency cap of 3; Cancel aborts in-flight requests.
- Folder-traversal helpers are now exported from the package root: `attachRelativePath(file, path)` and `getRelativePath(file)`. Host adapters that build their own `File[]` arrays (e.g. a custom drop zone wired into a separate pipeline before the file lands in the uploader) can call `attachRelativePath(file, 'folder/sub/image.png')` to preserve folder structure without poking at the previously private `_sfxRelativePath` key.

### Changed

- `getRelativePath(file)` now reads a third source as a fallback: `file.relativePath`. Order is `_sfxRelativePath` → `webkitRelativePath` → `relativePath`. Matches the de-facto convention used by Uppy-style folder-drop utilities, so integrators that already attach `relativePath` for their own pipelines get folder-structure preservation in the uploader without writing a bridge adapter. As part of this change, an empty `webkitRelativePath` (`""` — set by the browser on files that didn't come from a directory input) is now treated as absent rather than as a real path, so a host-attached `relativePath` can take over instead of being shadowed by the empty native value.

### Changed

- File lists are now rendered newest-first across every surface — the main asset grid, the floating progress pill, the in-flight upload overlay, the success-card thumbnail collage, and the last-upload review screen. Previously new files were appended at the bottom, so after a fresh upload the user had to scroll past older files to see what they just added; now the most recent file sits at the top where the list naturally starts. Storage order (the underlying `Map`) is unchanged, so engine upload order and callback ordering are unaffected.
- `onFileLocate(file, url)` callback now receives the resolved Locate URL as a second argument and can return `false` to suppress the uploader's default current-tab navigation — mirrors the `onBeforeUpload` pattern. Hosts running inside a SPA can route to `url` via their own client-side router (e.g. `router.push(url)`) to avoid a full-page reload. The cancelable `sfx-file-locate` event detail now also includes `url`. Existing callbacks that ignore the new argument and return nothing keep working unchanged.
  - **Heads-up for analytics-style notifiers.** Only an explicit `=== false` return suppresses navigation (`undefined`/`null`/`0`/`""` do not), but if your existing single-expression arrow callback's tail call happens to return `false` you will lose Locate navigation. Example: `onFileLocate: (file) => analytics.track('locate', file.id)` — if `track()` returns `false`, that now cancels navigation. Wrap the body in `{ … }` and don't return, or explicitly `return true`, to keep the previous behaviour.

### Added

- `onFolderComplete(folder, successful, failed)` callback + matching `sfx-folder-complete` CustomEvent. Fires per dropped/picked folder when every file inside that folder reaches a terminal status (`complete` / `failed` / `cancelled` / `rejected`) — earlier than `onAllComplete`, so a host can incrementally refresh its folder view as each folder finishes rather than waiting for the whole batch. `folder` is the file's `relativeFolder` value (path relative to the configured `targetFolder`, e.g. `"myFolder/sub"`). Root-level files (empty `relativeFolder`) do not trigger this — use `onUploadComplete` for those. Fires once per folder per "round": a fresh upload batch (start of `uploadAll`) or new files added to an already-announced folder mid-batch (e.g. with `autoProceed`) both re-arm it.
- **Regional variants language selector** — a Globe-icon "Regional settings" dropdown in the header lets users switch the active variant for every regional-variants group in the schema (LANGUAGES, CURRENCIES, CUSTOM). Mirrors admin v5's `RegionalFiltersDropdown`. Picking French flips ultratags labels to the `fr` i18n value and wraps regional metadata fields under the right slot key.
  - Multi-group dropdown with section headers; keyboard nav (arrow keys / Enter / Escape).
  - Mounted in the host header (between the gear and the close button) and inside the bulk-metadata modal topbar. Both share the host's `_regionalFilters` state via a `regional-change` event.
  - Inline hint label ("Languages: English" / "Currencies: USD") rendered below every regional field's input.
- `MetadataConfig.regionalFilters?: Record<string, string>` — per-group active variant, keyed by group UUID. Defaults are seeded from the schema (first variant of each group); user picks via the selector override them.
- New `regional-variants/` module: `<sfx-regional-settings>` element, `resolveFieldRegionalKey` + `getFieldRegionalVariantHint` + `buildDefaultRegionalFilters` helpers, and a `REGIONAL_VARIANT_TYPE` constant (`{ LANGUAGES: 'FTYPE_LANGUAGES', CURRENCIES: 'FTYPE_CURRENCIES', CUSTOM: 'FTYPE_CUSTOM' }`) that mirrors admin v5's wire values.

### Fixed

- The Hub's **"Require metadata to be filled out on asset upload"** toggle is now respected when disabled. Previously, `enforceRequiredBeforeUpload: 'auto'` (the default) collapsed an explicit `store.force_filling_metadata_on_upload: false` to "not set" and fell back to enforcing whenever the schema contained any mandatory field — so disabling the toggle in the Hub had no effect on projects with required custom metadata. The setting is now tri-state: an explicit `true`/`false` from the API is authoritative in `'auto'` mode; the required-fields inference (schema `required` flags or non-empty `metadataConfig.requiredFields`) only applies when the response omits the setting. The bulk metadata editor follows the same decision — when enforcement is off it no longer withholds Save or shows the "Next required" CTA / unmet-field badges for empty required fields. **Type note:** the exported `MetadataSchema.forceFillingOnUpload` field widened from `boolean` to `boolean | undefined` to carry the tri-state (`undefined` = the API response didn't include the setting) — hosts reading it from the `sfx-metadata-schema` event payload or `parseMetadataSchema` should treat `undefined` as "not provided" rather than "off". Internally the resolution lives in a single `shouldEnforceRequiredMetadata(schema, config)` helper shared by the upload gate, the bulk editor, and the metadata panel, so the three surfaces can no longer disagree.
- The metadata panel's required-fields progress indicator now shows exactly when the upload is gated on required metadata (same decision as the upload button and bulk editor). Previously it only appeared when the config set `enforceRequiredBeforeUpload: 'auto'` explicitly (the unset default hid it) and it ignored the inference path entirely — so users could be blocked from uploading with no progress indicator explaining what was missing.
- The "Locate" button (progress/floating panel and review screen) now navigates the current tab to the asset's library deep-link instead of opening a new browser tab — so the file is revealed inside the already-loaded widget/admin. Hosts can still `preventDefault()` the cancelable `sfx-file-locate` event to route it themselves.
- Clicking "Locate" now collapses the uploader to its floating pill — previously the modal stayed open and blocked the host's interface while the asset was being revealed in the surrounding DAM/library widget. Hosts that intercept Locate (via `event.preventDefault()` or returning `false` from `onFileLocate`) get the same behaviour, so SPA-routed reveals are no longer hidden behind the open modal. The `onMinimize` callback / `sfx-minimize` event fire as usual.

### Changed

- The LANGUAGES regional-variants group now defaults to the variant matching the user's profile language (`metadataConfig.language`, falling back to `config.locale`) instead of always the first variant — so a French profile lands on the French variant on first open. Matches case-insensitively and accepts BCP 47 base/region pairs in either direction (`fr-FR` ↔ `fr`); falls back to the first variant when no match exists. Non-LANGUAGES groups (CURRENCIES, CUSTOM) keep the first-variant default.

### Changed

- `mapValueToBackend` / `mapValueFromBackend` / `computeBulkResult` now resolve the slot key per-field via `resolveFieldRegionalKey(field, config)`, keyed by the field's group UUID — not a single global `language`. CURRENCIES and CUSTOM regional fields now wrap correctly under their own variant (previously they were silently mis-keyed under whatever `config.language` was).
- Editing a regional field in single-file preview mode no longer wipes out the other-language slots — the metadata-field dispatcher passes a fake-file into `mapValueToBackend` so the spread retains existing translations.
- Similarity-check sticky banner is now fully opaque (two-layer background) and uses `z-index: 20` so tile content doesn't bleed through when scrolling.
- "Similar" tab count badge renders as a filled brand-blue circle (was a translucent pill).
- File-tile action buttons keep their text labels at every tile width instead of collapsing to icon-only when the side panel opens.

- The Upload settings panel now drives the upload request, aligning with admin v5 (`js-admin-react-filerobot-v5`):
  - **Image resize** — when _Resize Images_ is on and the file is an image or PDF, the request gets `&resize=W,H` (matches v5's `appendResizeQueryParams`).
  - **Video transcode** — when _Transcode video_ is on and the file is a video, the request gets `&postprocess=transcode&video-resolution=…&video_protocols=…` (matches v5's `appendVideoTranscodeQueryParams`).
  - **Resumable** — when the resumable switcher is exposed and toggled off, all files fall back to XHR; toggled on, the engine uses tus over the threshold (synthesizing a default `tusConfig` when the host didn't supply one).
- `uploadSettings: false` shorthand and `uploadSettings.enabled` to disable the panel entirely (the gear button never appears).
- `uploadSettings.showResumableSwitcher` (default `false`) — gates the Resume uploads row inside the panel, matching v5's `showResumableUploadSwitcher` explorer option.
- The gear button now appears only when the queue contains a processable file (image, PDF, or video) — non-processable queues hide it.

### Changed

- `uploadSettings.defaults.resolution` vocabulary now matches admin v5: `'auto' | 'mobile' | 'tablet' | 'desktop' | 'hq' | 'sample'` (was `'Auto' | '1080p' | '720p' | '480p'`).
- `uploadSettings.defaults.protocol` is now `'hls'` only (DASH removed; FRA-5131 — DASH transcoding broken). New i18n keys for the panel labels: `resolutionAuto`, `resolutionMobile`, `resolutionTablet`, `resolutionDesktop`, `resolutionHq`, `resolutionSample`, `protocolHls`.
- The Image settings section now only renders when the queue contains images or PDFs (matches v5).

- `ultratags` (custom tags) is now an editable field type during upload, matching the admin app's vocabulary editor:
  - Search the project vocabulary via `GET /v5/meta/ultratags?meta=…&q=…&format=regvar:api` (debounced 300 ms, min 2 characters, AbortController on each new keystroke).
  - Create new entries on the fly via `POST /v5/meta/ultratags` with `mode: 'upsert'` — the dropdown's "Create '<query>'" affordance fires the POST and appends the returned `output[0]` (enriched with `sid` + `uuid`) to the field value.
  - Pills resolve labels using the same fallback chain as admin (`lang` → `~LANG` regional variant → `defaultLang`); prefilled values that arrive as SIDs (`#ut…`) are resolved once on mount via `QUERY /v5/meta/ultratags` with `{ ultratags_sids: […] }` so chips render readable text.
  - Bulk-edit Set / Add / Remove are wired through `applyBulkOperation`, deduplicating by `sid || slug || uuid`. The bulk Remove dropdown is restricted to the union of tags actually present on the selected files (admin parity).
  - New `createUltratagsService(apiBase, headers)` factory exported from the metadata module; wired automatically in `_preloadMetadataSchema` alongside the tags and taxonomy services.
- Cloud connector browser improvements:
  - **Folder upload** — folders in cloud listings (Google Drive, Dropbox, OneDrive, Box) now have a checkbox. Selecting one or more folders and clicking _Add_ recursively walks each folder via Companion and uploads every file inside, preserving hierarchy through `UploadFile.relativeFolder` (the same plumbing used for local drag-and-drop folder uploads). A busy overlay reports progress while traversal runs.
  - **Back vs close split** — the top-left arrow now navigates to the _parent folder_ and is disabled at root. A new **close (×) button** at the top right dismisses the modal. Previously the arrow closed the modal even mid-navigation.
  - **Last modified column** — items now show a relative "X days/months/years ago" timestamp from Companion's `modifiedDate`, with a column header row above the listing.
  - **Wider modal** — connector modal grows from 520 → 760px max-width and 75 → 78vh max-height to fit the new column without crowding the name. The modified column collapses on narrow viewports (< 540px).
  - Every visible string in the connector browser is now routed through `t()` — the previously hardcoded auth view ("Connect Google Drive", "Sign in to browse…", "Sign in to Google Drive"), the error view's "Try again", and the breadcrumbs' "Root" label now respect the configured locale. Provider name interpolates via `{{provider}}`.
  - Search provider browser (Unsplash) — previously hardcoded "Enter text to search for images", "No results found", "Search", and "Retry" labels now route through `t()`. Back button picks up a `Close` `title` / `aria-label`.
  - New i18n keys: `name`, `lastModified`, `close`, `signOut`, `add`, `addItems`, `cancel`, `itemsSelected`, `selectFolder`, `preparingFiles`, `preparingFilesWithCount`, `folderEmpty`, `failedToReadFolder`, `connectProvider`, `connectProviderHint`, `signInToProvider`, `tryAgain`, `root`, `justNow`, `minutesAgo`, `hoursAgo`, `yesterday`, `daysAgo`, `monthsAgo`, `yearsAgo`, `search`, `retry`, `enterSearchHint`, `noSearchResults`.
- Folder structure preservation when a user drags a folder onto the drop zone or picks a directory in the file dialog. Nested files are now recursively walked (via `webkitGetAsEntry`) and each file's path within the dropped root is captured on `UploadFile.relativeFolder`. The upload engine joins that path onto `targetFolder` so Filerobot recreates the original hierarchy — e.g. dropping `photos/2026/jan/x.png` with `targetFolder: 'assets'` uploads to `assets/photos/2026/jan`.
  - New `preserveFolderStructure?: boolean` config option (default `true`). When `false`, dropped folders are still ingested but uploads stay flat under `targetFolder` (legacy behaviour).
  - Drop zone and drop-tile gain an extra "or upload a folder" affordance next to the "browse" link (rendered alongside a hidden `webkitdirectory` input) when folder support is enabled and multi-select is allowed. Single-asset slots (`forceName` or `maxNumberOfFiles: 1`) automatically hide the folder picker.
  - New i18n keys: `orUploadFolderPrefix` (default `"or upload a "`), `uploadFolder` (default `"folder"`).
- Sizing CSS custom properties so hosts can enlarge (or shrink) the modals without forking styles:
  - `--sfx-up-modal-max-width` — main uploader modal max width (default `1100px`).
  - `--sfx-up-bulk-modal-width` — bulk metadata edit modal width (default `980px`).
  - `--sfx-up-bulk-modal-height` — bulk metadata edit modal height (default `82vh`).
  - Existing `--sfx-up-max-height` (main modal height, default `88vh`) and `--sfx-up-content-max-width` (inner content max width, default `1600px`) are documented in the README alongside these. The bulk modal continues to clamp to `calc(100vw - 40px)` / `calc(100vh - 40px)` so it never overflows the viewport.
- Coexistence hooks for hosting apps that show their own floating progress panel alongside the uploader's float card / pill:
  - `--sfx-up-float-offset-x` / `--sfx-up-float-offset-y` CSS custom properties — additive offset (in px) applied to the float panel's bottom-right anchor. Positive `offset-x` adds to `right` (so the panel moves _leftward_); positive `offset-y` adds to `bottom` (so the panel moves _upward_). Default `0px`. Setting them via `el.style.setProperty(...)` on `<sfx-uploader>` is mirrored onto the portalled pill via a MutationObserver. The slide is animated (0.25s ease).
  - `sfx-panel-shown` public event — fires once on first mount of the floating panel (pill/card), payload `{ width, height, mode: 'pill' | 'card' }` so the host can measure the neighbour it needs to make room for.
  - `sfx-minimize` event now carries `{ width, height, mode }` of the floating panel (was empty `{}`).
  - `sfx-restore` event now carries `{ mode: 'modal' }` so the host knows the float has been torn down.
  - `getStatus(): 'empty' | 'ready' | 'uploading' | 'complete'` — read the current upload phase, e.g. to decide whether dismissing the panel would cancel in-flight uploads. Exposed as `UploaderStatus` / `UploaderPhase` type from the package entry and on the React `UploaderRef`.
  - `dismissPanel()` — close the panel from any visible state (modal, floating card, pill). Cancels in-flight uploads and fires `sfx-cancel` before `sfx-close` if called mid-upload. Honors the `clearOnClose` config the same way `close()` does. Exposed on the React `UploaderRef`.
- `tusConfig.jsonBase` config option — overrides the host that serves `/json/{fileId}` after a tus upload completes (the post-upload metadata fetch). When omitted, defaults to `{connectors.companionUrl}/json`, then to the hardcoded `eu-on-24001` fallback. Pair with `tusConfig.endpoint` when pinning tus to a non-default connector that uses a different host for the JSON metadata endpoint.
- "Already uploaded" handling for duplicate content. When the backend reports that
  identical content already exists in the target directory
  (`code: "SAME_ASSET_EXISTS_SKIP_UPLOAD"`), the upload is now treated as a
  **success** instead of showing the red "Upload failed" card. The pre-existing
  asset's `existing_file_uuid` is mapped into `response.file.uuid`, so `onUploadComplete`
  / `sfx-upload-complete` fire normally with the existing asset reference. A neutral
  "Already uploaded" note is shown on the file tile and a summary line on the success
  card. Applies to all upload paths (direct file, URL import, and cloud connectors).
  - Floating pill (collapsed + expanded) now mirrors the success card: when every
    completed file was a duplicate, the header swaps the green check for a blue
    info icon and "{n} file was already in your library / It's ready to use" copy.
    Per-file rows show a blue info badge for duplicates; in mixed batches a small
    info banner between the progress bar and the file list summarises how many
    files were already present.
- `connectors.coreSources` config option — allowlist of built-in sources to render in the More menu. When omitted, all four core sources (`device`, `url`, `camera`, `screen-cast`) are shown; set e.g. `coreSources: ['device', 'url']` to hide Camera and Screen capture.
- `forceName` config option — forces every uploaded file to be saved under a fixed name in `targetFolder`, overwriting any existing file with the same name. Translates to `&opt_force_name=…` on the upload request and works across every source (local file, URL import, Google Drive, Unsplash, tus). Implicitly clamps `restrictions.maxNumberOfFiles` to `1` and disables multi-select. Use for single-asset slots like watermarks, default images, or folder icons. Accepts a string or a thunk for per-session derivation.
- `getUploadParams` config option — appends arbitrary query parameters (typically Filerobot `opt_*` flags) to every upload request. Called per file just before its request is sent and merged into the URL of whichever upload path runs (XHR, URL, tus, or Companion). Wins on key collision against `forceName`.
- `transformRemoteThumbnail` config option — host apps with restrictive CSPs (e.g. Hub allowing only `*.filerobot.com` / `*.cloudimg.io`) can rewrite thumbnail URLs into a CSP-allowed proxy URL before they're rendered. Applies to URL imports (`source: 'url-import'`), connector listings (`source: 'connector'`, Google Drive / Unsplash / …), and the post-upload preview swap (`source: 'cdn-complete'`) for projects whose CDN uses a custom CNAME outside the host CSP allowlist.
- Internationalisation (i18n) support via i18next — all UI strings are now translatable
  - `locale` config option accepts any BCP 47 locale string (e.g. `'fr'`, `'de'`, `'en-US'`); defaults to `navigator.language`
  - Translations loaded lazily from Wordplex CDN; English defaults used as fallback when a key is not yet translated
  - Missing-key debug helper: set `localStorage.sfxUploaderTranslationsMissingKeysEnabled = 'true'` to log untranslated keys to the console
  - `scripts/extract-i18n-keys.mjs` — static extractor that generates `up-keys.json` for submission to the Wordplex TMS grid

- Configurable "Locate" and "Copy CDN" buttons on review-screen file tiles — hidden by default, opt-in via `showLocateButton` and `showCopyCdnButton` config options
  - Locate dispatches `sfx-file-locate` event and `onFileLocate` callback, then opens the resolved Locate URL in a new tab when one is configured (via `adminUrl` or `getLocateUrl`). Call `event.preventDefault()` on `sfx-file-locate` to suppress the auto-navigation and handle it yourself.
  - Copy CDN copies the CDN URL to clipboard and dispatches `sfx-file-copy-cdn` event and `onFileCopyCdn` callback
- `adminUrl` config option — base URL of the Filerobot admin / DAM app used to build the default Locate target. The uploader navigates to `${adminUrl}/library?lf=<base64(uuid)>`, the same deep-link the admin uses internally to scroll to and select a file in its library tree. Works for both freshly-uploaded files and "already in library" duplicates (both expose `response.file.uuid`). Defaults to `window.location.origin` (correct when the uploader is embedded inside the admin itself); set explicitly for cross-origin embeds, custom domains, or whitelabel deployments.
- Bulk metadata editing modal — click "Fill Metadata" to open a full-screen overlay for editing metadata across multiple files at once
  - Sidebar field navigator with schema groups, active highlight, and filled/required indicators
  - Operation bar with SET, ADD, DELETE operations (ADD/DELETE available for array fields: multi-select, tags)
  - Per-file table with inline click-to-edit and sortable name column
  - Staged changes with diff-only save (only modified fields are persisted)
  - Select-all / deselect-all with three-state checkbox
- `sfx-metadata-field-edit` dispatcher component for rendering the correct field editor by type
- `sfx-metadata-field-view` read-only value display component

### Changed

- Floating panel per-file rows now show a "Locate" icon button next to the success checkmark for completed files when `showLocateButton: true` is configured and the response carries a `uuid`. Clicking it fires the same `sfx-file-locate` event / `onFileLocate` callback (cancelable) and opens the resolved Locate URL — matching the existing Locate action on review tiles, so users can deep-link to the asset in the admin DAM without expanding back to the review screen.
- **URL import flow rerouted through the Companion connector** to match the legacy Hub uploader. Previously the uploader POSTed `{ files_urls: [{ url, name }] }` directly to `{apiBase}/v4/files`, letting the Filerobot API fetch the remote URL server-side. The new path mirrors the legacy Hub: POST `{companionUrl}/url/meta` to resolve the file's real size/name/type, then POST `{companionUrl}/url/get` which returns a WebSocket token used to stream progress and the final response from the connector. Benefits: accurate progress totals (the old path had a `size: 0` placeholder until completion), accurate `type` resolution from server-side content sniffing, and consistent behavior with cloud-provider uploads which already used Companion. **Requires `connectors.companionUrl` to be configured** — the "URL link" source pill is now hidden when it isn't, since there's nothing for the dialog to talk to.
- **Tus uploads now follow `connectors.companionUrl` for endpoint routing.** When `tusConfig` is enabled but `tusConfig.endpoint`/`tusConfig.jsonBase` aren't explicitly set, both default to `{companionUrl}/files` and `{companionUrl}/json` instead of the hardcoded `eu-on-24001` host. This means Hub-style region-optimal connector routing (the "fastest connector" logic Hub uses to pick e.g. `connector-p003-fr-ov-rbx8.airstore.scal3fl3x.com` per project) now flows through to large-file resumable uploads — previously a Hub project would correctly route cloud-provider uploads to its assigned connector but still hit `eu-on-24001` for tus chunks and the post-upload JSON fetch. Explicit overrides on `tusConfig.endpoint`/`jsonBase` still win, and the `eu-on-24001` fallback remains as the last resort when no companionUrl is configured at all.
- Removed the 60-second timeout on direct XHR uploads (`xhrUploadFile`). Large file uploads on slow connections were being killed before completing — the timeout originated from an early conservative default and never aligned with how long real-world Filerobot uploads can take. All upload paths (XHR, tus, Companion URL, Companion cloud-provider) now run as long as the network and server allow, matching the legacy Hub behavior. Network errors and abort still fire onError immediately; only the artificial wall-clock ceiling is gone.
- **Breaking:** Last-upload review is now **disabled by default**. Set `lastUploadReview: true` (auto-scoped by `container` + `airboxPuid`) or pass an explicit string ID to enable it. Previously the feature was always on with a single global `sessionStorage` key, causing different airboxes to overwrite each other's review data.
- Required-metadata enforcement is now on by default. `metadataConfig.enforceRequiredBeforeUpload` defaults to `'auto'` (was effectively `false`), and `'auto'` now also enforces when any schema field has `required: 1` or `metadataConfig.requiredFields` is provided — previously it only honored the `force_filling_metadata_on_upload` flag from the API store. Set `enforceRequiredBeforeUpload: false` to opt out.
- Clicking **Upload** with required metadata still missing no longer leaves the button silently disabled. Instead, the bulk metadata editor opens positioned on the first missing required field (Airbox-parity behavior). The "Fill Metadata" button is promoted to primary in this state so the next action is obvious.
- `integer-list` metadata fields are now treated as unsupported during upload (same as `ultratags`, `taxonomy-node`, `asset-attachments`, `attachments-assets`). They render the read-only "Not editable during upload" placeholder and are excluded from bulk operations — users can edit them in the asset library after ingest.
- OS-generated metadata files (`.DS_Store`, `Thumbs.db`, `desktop.ini`) are now silently skipped at all three intake paths (local file pick / drop, URL import, cloud connector). Previously a macOS user drag-and-dropping a folder would see `.DS_Store` queued and either uploaded or rejected with a "type not allowed" error. The skip is silent (no rejected entry, no toast) to match the behavior of the duplicate guard — these files are never user-intended.

### Fixed

- Cloud connector and URL uploads no longer save assets under generated `filerobot-file-<hash>` names. The Companion-relay metadata object only carried `filerobot-folder`, so Filerobot received no original `name` / `type` for the forwarded multipart body and fell back to a synthesized filename. Companion uploads now send the same `name`, `type`, `meta`, `tags`, and `product` fields as direct multipart uploads, so cloud-imported files land with their original filename and MIME type. Affects Google Drive / Dropbox / OneDrive / Box / Instagram / Facebook / Unsplash and "import by URL". URL imports additionally prefer Companion's resolved `name` / `type` (from `Content-Disposition` and `Content-Type`) over the host's URL-parsed guess when those headers are present.
  - **Wire-format note:** `uploadFile.meta` is no longer spread as top-level fields on the Companion request — it is now sent as a single JSON-stringified `meta` field, matching the direct (`xhr`/`tus`) paths. `uploadFile.tags` is likewise sent as a JSON-stringified `tags` field instead of a raw array. Hosts that depended on injecting top-level Filerobot fields through `meta` should use the documented `getUploadParams` config (query-string) or `extraParams` instead.
- Stray POST requests to the host site's `/locales/add/{lng}/{ns}` for every missing i18n key. i18next was configured with `saveMissing: true` to feed the dev-only `missingKeysHelper`, but `i18next-http-backend` also reads that flag and auto-POSTs missing keys to its default `addPath` (a relative URL that resolves against the embedding page). The backend's `addPath` is now explicitly disabled; the `missingKey` event still fires so the localStorage-gated console helper keeps working. No Wordplex behavior changes — the auto-POSTs never reached Wordplex in the first place.
- Success card (and any other size readout) no longer renders `"NaN undefined"` instead of the uploaded file size. Recent Filerobot `/v4/files` responses ship `size` as a structured `{ bytes, pretty }` object rather than a plain number, but `handleComplete` was assigning the object straight into `UploadFile.size` — the total-size reduce on the success card then string-concatenated `0 + {object}` into `"0[object Object]"`, which `formatFileSize` could not parse. The completion handler now extracts `.bytes` when the response uses the structured shape and falls back to the numeric shape for older endpoints (and the synthesized same-asset response). `formatFileSize` also gained a non-finite guard so any future stray `NaN` / `undefined` falls back to `"0 B"` rather than rendering literally.
- Decimal (`decimal2`) and Number (`numeric`) metadata fields no longer accept the exponent characters `e` / `E`. `<input type="number">` natively allows them, which previously meant users could type values like `"34e"` (caught only on blur for decimal2 by the regex check) or `"34e2"` on a numeric field (which silently parsed as `3400` and passed both the `isFinite` and `isInteger` checks). The number field now blocks `e`/`E` at keydown; post-blur validation remains as a backstop.
- Removing an in-progress file mid-upload no longer leaves the overall progress stuck (e.g. the float card showing "3 of 3 complete" but the bar frozen at 11% and never transitioning to "Done"). Cancelling a file via the engine and deleting it from the store did not trigger a recompute, so `totalProgress` / `isUploading` remained based on the pre-removal file set. The engine now exposes a `recompute()` hook that `_removeFile` calls after the file is removed, refreshing the aggregate totals and re-evaluating completion. Coupled fix: the ALL_COMPLETE detection previously relied on cancelled files staying in the store to suppress the event — the per-file remove flow violated that assumption, so `sfx-all-complete` / `onAllComplete` would now spuriously fire with empty arrays when the user removed the last in-flight file. ALL_COMPLETE is now also suppressed when neither successful nor failed has any entries (nothing meaningful to announce).
- GPU-bound lag / "frozen" UI / step-by-step cursor reported on Chrome + macOS (especially Apple Silicon with 4K Retina displays, worsening across tabs and over time, only resolved by a laptop reboot or toggling Chrome's graphics acceleration). Root cause: heavy use of `backdrop-filter: blur()` across modal backdrops, drop-zone source pills/cards, per-file overlay buttons, fullscreen preview controls, and bulk-metadata overlays — every blurred surface forced the GPU compositor to allocate a device-pixel-sized texture and re-blur it each paint, with the cost scaling 4× on Retina and accumulating per tab. Combined with a permanent `will-change: transform, opacity` on every file tile (which kept each tile's compositor layer alive indefinitely), the GPU process retained an unbounded number of large surfaces. All `backdrop-filter` rules have been removed and the always-on `will-change` hint dropped; backgrounds keep their existing colors with negligible visual change (modal dim layers retain their `rgba(0,0,0,0.45)` overlay; drop-zone source pills move from translucent white to solid white over the white panel they sit on; bulk-metadata overlays bump alpha by 0.05 to compensate for the lost blur softening; fullscreen preview controls keep their original white-translucent look). The Uploader now renders entirely on the compositor fast path on high-DPI displays.
- Thumbnails for device / camera / screen / paste uploads no longer flash the Filerobot "Missing origin image" placeholder right after upload. Their local `blob:` preview (always renderable and CSP-safe) is now kept instead of being swapped to the just-uploaded `cdn` URL, which can serve a placeholder until processing/caching catches up. URL imports and cloud-connector previews (remote http origins a host CSP may block) are still swapped to a server URL as before.
- Clicking anywhere in the modal body (outside the visual drop-zone widget) no longer opens the OS file picker. The clickable browse area is now scoped to the visual drag-and-drop widget only; the full modal area continues to accept drag-and-drop events.
- Google Drive connector now enforces single-file selection when `forceName` is set or `restrictions.maxNumberOfFiles: 1` is configured — previously users could select multiple files regardless. The "Select all" button is also hidden in single-select mode.
- HEIC/HEIF files are no longer incorrectly rejected when `allowedFileTypes: ['image/*']` is configured. Browsers report an empty MIME type for these formats; the uploader now infers the correct type from the file extension before validation. File previews are intentionally omitted for HEIC/HEIF since browsers cannot render them natively.
- Upload button is now disabled when all added files have been rejected by `allowedFileTypes` or other restrictions, rather than remaining active with no uploadable files.
- Upload progress overlay ("Uploading N files") no longer counts rejected or cancelled files toward the total, so the displayed count matches the number of files actually being uploaded.
- Total file size shown in the actions bar no longer includes rejected files.
- Required-metadata enforcement was a no-op for every Hub project: the schema parser typed `MetadataField.required` as `0 | 1` and every consumer compared with strict `=== 1`, but the Hub `/project/{uuid}` endpoint actually returns it as a JSON boolean. Switched to truthy checks (via a new `isFieldRequired` helper) and broadened the type to `boolean | 0 | 1`. The asterisk indicator now renders correctly, and clicking Upload with a missing required field now opens the bulk editor as intended.
- Dropdown fields (select, multi-select, boolean) closing immediately when clicking options inside Shadow DOM — fixed outside-click detection to use `composedPath()` instead of `e.target`
- Success-card and file-list thumbnails for URL-imported / connector-imported files no longer break under host CSPs that disallow the original origin — once the upload completes, `previewUrl` is automatically swapped to a server URL from the upload response. Preference order: `permalink` (canonical `api.filerobot.com/.../v4/get/{uuid}` — always `*.filerobot.com`, the most stable choice), then `cdn_permalink`, then `cdn` (which may be a project's custom CNAME like `qa-hub.scaleflex-cloud.com` that the host CSP doesn't allow). Hosts with tighter CSPs can also rewrite the chosen URL through `transformRemoteThumbnail` with `source: 'cdn-complete'`.

## [0.2.0] - 2026-03-22

### Added

- Cards layout for import-from sources (`sourcesLayout: 'cards'`) — responsive grid of square cards with large icons
- Video thumbnail generation from first frame
- Configurable `header` option (`'close'`, `'back'`, `true`, `false`)
- Screen capture source
- Prev/next navigation arrows on preview image
- Custom dropdown selects replacing native selects with preview panel scroll
- Clear files on modal close so next open starts fresh
- Asset count label and total file size display in upload view
- Extended drag-and-drop to entire body when drop zone is compact

### Changed

- Design polishing: normalized CSS tokens, aligned with UIKit design system
- Preview panel redesigned: inline tags, two-column metadata table, fullscreen zoom
- Uploader max-width set to 912px
- File grid widened to 440px for two-column layout in preview mode
- Responsive source pills on mobile viewports
- Paddings normalized to 24px throughout body and asset count

### Fixed

- Drag-and-drop adding files twice
- File restrictions: proper counting, rejected styling, auto-dismiss
- Duplicate file errors and Done button in non-modal mode
- Done badge appearing on non-uploaded files
- File tile borders
- Fullscreen zoom and scroll issues
- Various logic bugs, config options, and accessibility improvements

### Removed

- Canva SDK integration

## [0.1.0] - 2026-03-18

Initial release.

### Added

- `<sfx-uploader>` web component built with Lit 3 and Shadow DOM
- Reactive store-based state management with centralised file collection (Map-based for O(1) lookups)
- Modal and inline display modes
- Drag & drop zone with animated ring feedback
- Clipboard paste support for file uploads
- URL upload dialog for importing files from direct HTTP links
- Webcam capture dialog (photo and video via MediaRecorder API)
- Screen capture dialog for recording screen content
- Native file picker via device source
- File queue with thumbnail previews, progress bars, and status indicators
- Source pill buttons for switching between upload sources
- Concurrent upload queue with configurable concurrency (default: 3)
- Auto-proceed mode — start uploading as soon as files are added
- Retry logic with exponential backoff for failed uploads
- Per-file and aggregate progress tracking with speed and ETA calculations
- File validation: type, size, total size, and file count restrictions
- Per-file metadata and tag management (`updateFileMeta`, `updateFilesMeta`)
- "Fill metadata" button support for external metadata workflows
- Post-upload success card with file details
- Abort and cancel operations for individual and batch uploads
- Cloud provider connectors via Companion proxy server:
  - Google Drive
  - Dropbox
  - OneDrive
  - Box
  - Instagram
  - Facebook
  - Unsplash
- OAuth token management with `localStorage` caching for cloud providers
- Provider browser UI with folder navigation and file selection
- Custom source plugin architecture (`connectors.customSources`)
- Two authentication modes: security template and SASS key
- SASS key exchange for security template mode
- Auth header generation and API base URL derivation
- 20+ custom DOM events (`sfx-*`) with `bubbles` and `composed` for shadow DOM crossing
- Config-based callback alternative (`UploaderCallbacks`) for all events
- Cancelable `sfx-before-upload` event to intercept and prevent uploads
- React wrapper with `forwardRef` support, controlled `open` prop, and imperative ref methods
- CSS custom properties theming with `--sfx-up-*` prefix
- Package exports: `.`, `./react`, `./define`
- Vite 6 library build (ESM + CJS) with TypeScript declarations
- Full TypeScript type exports for all public APIs
