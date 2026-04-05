# Fill Metadata Bulk Modal — Implementation Plan

## Context

The uploader plugin has a working metadata editing system for **individual files** — clicking a file opens a preview sidebar with an inline `<sfx-metadata-form>` for editing that file's metadata. The "Fill Metadata" button in the actions-bar currently only dispatches a public event (no built-in UI).

The goal is to add a **bulk metadata editing modal** — when the user clicks "Fill Metadata", a full-screen modal opens allowing them to apply metadata changes to multiple selected files at once. The design reference is in `docs/upload-v11.html`.

---

## Current Architecture (post-refactor)

- **Single-file editing**: Preview sidebar in `sfx-uploader.ts` → `_renderPreviewLayout()` renders `<sfx-metadata-form>` inline. On `field-blur`, `_onPreviewMetadataBlur()` saves directly to the file store per-field.
- **"Fill Metadata" button**: In `actions-bar.ts`, dispatches `fill-metadata` event. `_onFillMetadata()` in sfx-uploader currently only fires a public event + callback — **no built-in bulk UI**.
- **`metadata-panel.ts`**: Still exists (272 lines, has bulkMode) but is **not rendered anywhere**. Can be removed or repurposed.
- **No `_metadataBulkMode` state** — removed from sfx-uploader. No `_onMetadataSave` / `_onMetadataClose` handlers remain.
- **Schema** is preloaded during auth into `_metadataSchema` + `_metadataAutocomplete`.

## User Decisions

- **Both** bulk apply + per-row inline editing
- **V5-aligned operations**: SET, ADD, DELETE (field-type-specific availability)
- **Full overlay modal** (position: fixed, 980px, backdrop blur)
- **Staged changes**: Apply stages locally, Save commits to store, Cancel discards
- **No confirmation dialog** on Apply

---

## Design Reference

From `docs/upload-v11.html` — the Fill Metadata modal layout:

```
┌──────────────────────────────────────────────────────────────────────┐
│  Fill multiple assets                                          [X]  │
├────────────┬─────────────────────────────────────────────────────────┤
│ Sidebar    │  Operation: [SET ▾]   Field value: [________]  [Apply] │
│            ├─────────────────────────────────────────────────────────┤
│ General    │  ☐  Thumb  Name ↑              Size    Title           │
│  ● Title   │  ─────────────────────────────────────────────────     │
│    Desc    │  ☑  [img]  IMG_6268.png        1.4MB   [________]     │
│    Alt     │  ☑  [img]  IMG_6274.png        856KB   [________]     │
│    Tags    │  ☑  [img]  Yellow sweater.jpg  1.9MB   [________]     │
│            │                                                        │
│ Product    │                                                        │
│    Color   │                                                        │
│    Year    ├─────────────────────────────────────────────────────────┤
│    Season  │  ← Back                              [Cancel]  [Save]  │
└────────────┴─────────────────────────────────────────────────────────┘
```

- **Sidebar**: Field list grouped by schema groups. Active field highlighted blue. Green dot on fields that have been bulk-applied.
- **Operation bar**: Operation dropdown + value input (type-aware) + Apply button.
- **Table**: Checkbox per file, thumbnail, name (sortable), size, inline field editor for active field.
- **Footer**: Back, Cancel, Save.

---

## Review Findings & Corrections

### 1. Wrapper strategy: `sfx-metadata-field` vs `sfx-metadata-field-edit`

The wrapper (`sfx-metadata-field`, `metadata-field.ts`) does three critical things the raw edit dispatcher does NOT:
- **Validation** via `validateField()` — shows inline error, rejects invalid values
- **Value transforms** via `mapValueToBackend()`/`mapValueFromBackend()` — boolean string↔bool, date string↔Date, geopoint string↔object, tags array↔objects, regional variant wrapping
- **Event interception** — stops child's `field-blur`, validates, transforms, re-dispatches with backend-format value

**Decision:**
- **Per-row table cells**: Use `sfx-metadata-field-edit` directly (NOT the wrapper). The wrapper includes a label+hint row that doesn't belong in a table cell. The row component must replicate validation + transforms (calling `validateField` and `mapValueToBackend`/`mapValueFromBackend` directly).
- **Op-bar**: Use `sfx-metadata-field-edit` directly. The op-bar holds value locally and only transforms on Apply. Must call `mapValueToBackend` before dispatching `bulk-apply`.
- **`_staged` stores values in backend format** (post-transform), matching the current `_localMeta` / `file.meta` convention.

### 2. Dropdown overflow in scrollable table

Select, multi-select, boolean, and tags fields use `position: absolute` dropdowns with `z-index: 10`. Inside the table's `overflow-y: auto` container, these will be **clipped**.

**Solution**: The table body should use `overflow-y: auto; overflow-x: visible` and the dropdown `z-index` should be elevated. Alternatively, if clipping persists, the table body gets `position: relative` and dropdowns get `position: fixed` with viewport-relative coordinates. Start with the simpler approach, fix if needed.

### 3. Textarea min-height 80px in table rows

The textarea field has `min-height: 80px` which is too tall for a table row. In table context, show `sfx-metadata-field-view` (read-only) which renders as a single-line preview. Clicking opens inline edit, which will expand the row. This matches the click-to-edit pattern and is acceptable.

### 4. Multi-select chips expanding row height

Multi-select trigger has `height: auto; flex-wrap: wrap`. With many selected values, chips wrap and grow the row. In table context, add `max-height: 36px; overflow: hidden` to the cell wrapper, showing a truncated view. Full chip list is visible when editing.

### 5. `ckey` vs `key` usage (critical)

- `file.meta[field.key]` — use `key` for reading/writing metadata values
- `config.requiredFields` — uses `ckey` (NOT `key`)
- Tags autocomplete `search(field.ckey, ...)` — uses `ckey`
- Schema field filtering `config.fields` — uses `ckey`

### 6. `deepMergeMeta` utility exists

`deepMergeMeta(existing, incoming)` from `required-fields.ts` handles array deduplication and empty-value skipping. The `bulk-operations.ts` module implements its own `applyBulkOperation` for SET/ADD/DELETE semantics (more specific than `deepMergeMeta`), but should reference `deepMergeMeta` for any generic merge needs.

### 7. Regional variants & `mapValueToBackend` file parameter

`mapValueToBackend(field, value, file?, language?)` — the optional `file` parameter preserves other language values in regional variant fields:
```typescript
if (field.regional_variants_group_uuid) {
  const existing = (file?.meta?.[field.key] as Record<string, unknown>) ?? {};
  return { ...existing, [lang]: transformed };
}
```
**For bulk apply**: When transforming the op-bar value for a file, pass the original `file` object so other languages aren't lost.
**For per-row edit**: Same — pass the specific file being edited.

### 8. Auto-open behavior on dropdowns

Select and multi-select call `this._openDropdown()` in `firstUpdated()`. When rendered in edit mode, dropdowns auto-open immediately. This is correct for click-to-edit (user clicked → edit renders → dropdown opens). No change needed.

### 9. Op-bar must send FRONTEND-format value (critical fix)

**Problem**: The original plan had the op-bar calling `mapValueToBackend(field, value, undefined, language)` before dispatching `bulk-apply`. For regional variant fields, passing `undefined` for the `file` parameter causes `mapValueToBackend` to produce `{ [lang]: value }` WITHOUT preserving other language values. The modal handler would then need to un-wrap and re-wrap — error-prone and double-wrapping risk.

**Fix**: The op-bar dispatches the **frontend-format** value as-is in `bulk-apply`. The modal's `_onBulkApply` handler calls `mapValueToBackend(field, frontendValue, fakeFile, language)` per-file, where `fakeFile` has `meta` populated from that file's `_staged` values. This way each file preserves its own other-language values.

For non-regional fields, the `file` param is ignored by `mapValueToBackend`, so this works universally.

### 10. Immutability helpers for Lit reactivity (critical)

Lit's `@state()` re-renders on reference change only (`===`). `Map` and `Set` mutations in-place do NOT trigger re-renders.

**Required**: A `_setStagedValue(fileId, fieldKey, value)` helper that always returns a new outer Map with a new inner Map:
```typescript
private _setStagedValue(fileId: string, fieldKey: string, value: unknown): void {
  const next = new Map(this._staged);
  const fileMap = new Map(next.get(fileId) ?? new Map());
  fileMap.set(fieldKey, value);
  next.set(fileId, fileMap);
  this._staged = next;
}
```

And a `_setStagedBulk(updates)` for `_onBulkApply` (single Map creation for all selected files). Same pattern for `_selected` and `_appliedFields` — always `new Set(...)`.

### 11. Batch save instead of N events (optimization)

Instead of dispatching N separate `metadata-save` events (one per changed file), dispatch a single `metadata-save-batch` event with all changes. The parent handler creates one new Map, applies all changes, calls `setState` once.

```typescript
// Modal dispatches:
metadata-save-batch { changes: Array<{ fileId, meta }> }

// Parent handler:
const next = new Map(this._store.getState().files);
for (const { fileId, meta } of changes) {
  const existing = next.get(fileId);
  if (!existing) continue;
  next.set(fileId, { ...existing, meta: { ...existing.meta, ...meta } });
}
this._store.setState({ files: next });
```

### 12. Stale-read risk with concurrent editing

If the user edits a file's metadata via the preview sidebar while the bulk modal is open, the bulk modal's staged copy won't reflect those changes. On Save, the staged values overwrite the sidebar edits.

**Mitigation for v1**: On Save, only send fields that were actually modified (per-field diff against the original `file.meta` snapshot). Fields the user didn't touch in the bulk modal are not sent, so sidebar edits to other fields survive.

```typescript
// Instead of sending entire staged map:
const changedMeta: Record<string, unknown> = {};
for (const [fieldKey, stagedVal] of fileStagedMap) {
  if (JSON.stringify(stagedVal) !== JSON.stringify(originalFile.meta[fieldKey])) {
    changedMeta[fieldKey] = stagedVal;
  }
}
// Only send changedMeta (not all staged values)
```

---

## New Files

### 1. `src/metadata/bulk/bulk-operations.ts` — Pure logic

```typescript
type BulkOperation = 'SET' | 'ADD' | 'DELETE';
```

- `getAvailableOperations(fieldType)`: Returns available operations per field type
  - Single-value types (text, textarea, numeric, decimal2, boolean, date, select-one, geopoint, attachment-uri): **SET only**
  - Array types (multi-select, tags, integer-list): **SET, ADD, DELETE**
- `applyBulkOperation(operation, currentValue, operationValue, fieldType)`: Applies one operation
  - **SET** → replace value entirely
  - **ADD** → append to array, deduplicate (tags by label, primitives by value)
  - **DELETE** → remove matching items from array

### 2. `src/metadata/bulk/bulk-metadata.styles.ts` — CSS

Exported `css` tagged template literals for each component. Uses existing `--sfx-up-*` custom properties. Key dimensions from design:

| Element | Dimensions |
|---------|-----------|
| Overlay | fixed inset 0, rgba(17,24,39,0.45), backdrop-filter blur(6px), z-index 1000 |
| Modal | 980px × 82vh, border-radius 14px |
| Sidebar | 220px wide, border-right |
| Top bar | 48px height |
| Op bar | 14px 24px padding, flex row, gap 12px |
| Table body | flex 1, overflow-y auto |
| File rows | 10px 24px padding, flex row, gap 12px |
| Footer | 14px 24px, border-top, flex space-between |

### 3. `src/metadata/bulk/bulk-meta-sidebar.ts` — Field navigator

**Element**: `sfx-bulk-meta-sidebar`

| Prop | Type | Description |
|------|------|-------------|
| `schema` | `MetadataSchema` | Schema with groups and fields |
| `activeFieldKey` | `string` | Currently selected field key |
| `filledFields` | `Set<string>` | Fields that have been applied/filled |

Renders: Iterates `schema.groups` → group labels + clickable field items. Active field highlighted. Green dot on filled fields. Required fields marked with `*`.

Dispatches: `field-select` → `{ fieldKey: string }`

### 4. `src/metadata/bulk/bulk-meta-op-bar.ts` — Operation + value + Apply

**Element**: `sfx-bulk-meta-op-bar`

| Prop | Type | Description |
|------|------|-------------|
| `field` | `MetadataField` | Active field from sidebar |
| `autocomplete` | `unknown` | Tags autocomplete instance |
| `config` | `MetadataConfig` | For language (regional variants) |

Internal state: `_operation`, `_value` (frontend format), `_opDropdownOpen`

Behavior:
- Resets operation to SET and value to empty default when `field` changes
- Renders operation dropdown (only shown for array field types; static "Set" label for single-value types)
- Renders value input via **`sfx-metadata-field-edit`** directly (NOT the wrapper — op-bar is always in edit mode, no click-to-edit needed)
- Intercepts `field-blur`/`field-change` events from child to capture value locally in **frontend format** (doesn't propagate until Apply clicked)
- Apply button dispatches `bulk-apply` → `{ operation, value }` where value is in **frontend format** (NOT transformed — see Review Finding #9). The modal handles per-file transforms.
- Disable Apply button when `_value` is empty or no files are selected

### 5. `src/metadata/bulk/bulk-meta-table.ts` — File table container

**Element**: `sfx-bulk-meta-table`

| Prop | Type | Description |
|------|------|-------------|
| `files` | `UploadFile[]` | Sorted files list |
| `field` | `MetadataField` | Active field |
| `staged` | `Map<string, Map<string, unknown>>` | All staged changes |
| `selected` | `Set<string>` | Selected file IDs |
| `config` | `MetadataConfig` | Config for language, etc. |
| `autocomplete` | `unknown` | Tags autocomplete |

Renders: Maps over files → `sfx-bulk-meta-row` for each, passing the effective value from staged map.

### 6. `src/metadata/bulk/bulk-meta-row.ts` — Per-file row

**Element**: `sfx-bulk-meta-row`

| Prop | Type | Description |
|------|------|-------------|
| `file` | `UploadFile` | The file |
| `field` | `MetadataField` | Active field |
| `value` | `unknown` | Effective value (staged or original) |
| `selected` | `boolean` | Checkbox state |
| `config` | `MetadataConfig` | Config |
| `autocomplete` | `unknown` | Tags autocomplete |

Internal state: `_editing: boolean`, `_error: string | null`

Renders:
- **Checkbox** → dispatches `row-toggle { fileId }`
- **Thumbnail** (52×38px) from `file.previewUrl` or placeholder
- **File name** (truncated) + size
- **Field value** (uses `sfx-metadata-field-edit` directly, NOT the wrapper):
  - View mode: `sfx-metadata-field-view` with value converted via `mapValueFromBackend(field, value, config.language)`. Click enters edit mode. Cell has `max-height: 36px; overflow: hidden` for textarea/multi-select fields.
  - Edit mode: `sfx-metadata-field-edit` with value in frontend format. On `field-blur`:
    1. Validate via `validateField(field, rawValue, config)` — if error, set `_error`, stay in edit mode
    2. Transform via `mapValueToBackend(field, rawValue, file, config.language)` — the `file` param preserves regional variant values
    3. Dispatch `row-field-change { fileId, value }` with **backend format** value
    4. Exit edit mode
  - Error display: show `_error` below the cell if validation failed

### 7. `src/metadata/bulk/bulk-metadata-modal.ts` — Top-level orchestrator

**Element**: `sfx-bulk-metadata-modal`

**Props from parent**: `schema`, `files`, `config`, `autocomplete`

**Internal state**:
```typescript
_activeFieldKey: string                          // selected sidebar field
_staged: Map<string, Map<string, unknown>>       // fileId → (fieldKey → value)
_selected: Set<string>                           // checked file IDs
_sortAsc: boolean                                // name column sort direction
_appliedFields: Set<string>                      // fields that had bulk-apply run
```

**Init** (`connectedCallback`): Deep-clone each file's `meta` into `_staged`. Select all files. Set `_activeFieldKey` to first field.

**Key methods**:

| Method | Trigger | Logic |
|--------|---------|-------|
| `_onBulkApply({ operation, value })` | Apply button | Value arrives in **frontend format**. For each file in `_selected`: (1) call `mapValueToBackend(field, frontendValue, { meta: Object.fromEntries(staged) } as UploadFile, language)` to get per-file backend value (preserves regional variants); (2) call `applyBulkOperation(operation, currentStagedValue, backendValue, fieldType)` to compute result; (3) write result to `_staged` using `_setStagedBulk`. Mark field in `_appliedFields`. |
| `_onRowFieldChange({ fileId, value })` | Inline edit blur | Write value to `_staged` for that file + active field |
| `_onSave()` | Save button | Build a `changes` array: for each file, diff `_staged` per-field against original `file.meta` — only include changed fields (see Review Finding #12). Dispatch single `metadata-save-batch { changes }`. Then dispatch `metadata-close`. |
| `_onCancel()` / `_onClose()` | Cancel/X button | Dispatch `metadata-close` only (discard staged) |
| `_getEffectiveValue(fileId, fieldKey)` | Table display | Returns staged value, fallback to original `file.meta[fieldKey]` |

**Render structure**:
```
overlay (fixed, backdrop blur)
  modal (flex column)
    top-bar (title + close)
    body (flex row)
      sfx-bulk-meta-sidebar
      main (flex column)
        sfx-bulk-meta-op-bar
        table-header (select-all, thumb, name↑↓, size, field-name)
        sfx-bulk-meta-table
    footer (← Back, Cancel, Save)
```

### 8. `src/metadata/bulk/index.ts` — Barrel

Imports all components for side-effect registration. Re-exports `SfxBulkMetadataModal` and `BulkOperation` type.

---

## Files to Modify

### 9. `src/metadata/metadata-panel.ts` — No changes needed

The panel is not rendered anywhere currently. Leave it as-is for now (can be cleaned up later).

### 10. `src/metadata/index.ts` — Add bulk import

```typescript
import './bulk/index';
export { SfxBulkMetadataModal } from './bulk/index';
```

### 11. `src/sfx-uploader.ts` — Wire up new modal

**Add new state** (near line 1400):
```typescript
@state() private _bulkMetadataOpen = false;
```

**Update `_onFillMetadata`** (line 2372): Open the bulk modal if schema is loaded:
```typescript
private _onFillMetadata = () => {
  const files = [...this._store.getState().files.values()].filter(
    (f) => SfxUploader._MODIFIABLE_STATUSES.has(f.status),
  );
  // Open built-in bulk modal if metadata schema is available
  if (this.config?.metadataConfig && this._metadataSchema) {
    this._bulkMetadataOpen = true;
  }
  // Always fire public event for backward compat
  this._dispatchPublic(PublicEvents.FILL_METADATA, { files });
  this.config?.callbacks?.onFillMetadata?.(files);
};
```

**Add new handlers** for bulk modal:
```typescript
private _onBulkMetadataSaveBatch = (e: CustomEvent<{ changes: Array<{ fileId: string; meta: Record<string, unknown> }> }>) => {
  const { changes } = e.detail;
  if (!changes.length) return;
  const next = new Map(this._store.getState().files);
  for (const { fileId, meta } of changes) {
    const existing = next.get(fileId);
    if (!existing) continue;
    next.set(fileId, { ...existing, meta: { ...existing.meta, ...meta } });
  }
  this._store.setState({ files: next });
};

private _onBulkMetadataClose = () => {
  this._bulkMetadataOpen = false;
};
```

**Add rendering** (in the `render()` method, after the preview layout block):
```html
${this._bulkMetadataOpen && this._metadataSchema
  ? html`
      <sfx-bulk-metadata-modal
        .schema=${this._metadataSchema}
        .files=${[...this._store.getState().files.values()].filter(f =>
          SfxUploader._MODIFIABLE_STATUSES.has(f.status)
        )}
        .config=${this.config?.metadataConfig ?? null}
        .autocomplete=${this._metadataAutocomplete}
        @metadata-save-batch=${this._onBulkMetadataSaveBatch}
        @metadata-close=${this._onBulkMetadataClose}
      ></sfx-bulk-metadata-modal>
    `
  : nothing}
```

The new modal renders its own overlay (position: fixed) — no wrapper needed. Single-file editing via the preview sidebar is **completely independent** and unaffected.

---

## Event Contracts

| Event | From → To | Detail | When |
|-------|-----------|--------|------|
| `fill-metadata` | actions-bar → uploader | — | User clicks "Fill Metadata" button |
| `metadata-save-batch` | bulk modal → uploader | `{ changes: Array<{ fileId, meta }> }` | Save (single event, only changed fields per file) |
| `metadata-close` | bulk modal → uploader | — | Save/Cancel/Close |
| `field-select` | sidebar → modal | `{ fieldKey }` | Sidebar click |
| `bulk-apply` | op-bar → modal | `{ operation, value }` | Apply button |
| `row-field-change` | row → modal | `{ fileId, value }` | Inline edit blur |
| `row-toggle` | row → modal | `{ fileId }` | Checkbox toggle |

All events: `bubbles: true, composed: true`.

Note: Single-file editing uses `field-blur` events from `sfx-metadata-form` → `_onPreviewMetadataBlur` — completely separate flow.

---

## Reused Existing Code

| What | File | Used Where |
|------|------|-----------|
| `sfx-metadata-field-edit` (type dispatcher) | `src/metadata/metadata-field-edit.ts` | Op-bar value input + per-row inline editing |
| `sfx-metadata-field-view` (read-only display) | `src/metadata/metadata-field-view.ts` | Per-row view mode |
| `MetadataFieldBase` + all 9 field components | `src/metadata/fields/*.ts` | Rendered by the edit dispatcher |
| `mapValueToBackend` / `mapValueFromBackend` | `src/metadata/schema/value-transforms.ts` | Op-bar (on Apply), per-row (on blur), modal (display) |
| `validateField` / `isEmpty` | `src/metadata/schema/validation.ts` | Per-row (on blur) |
| `isAssetHasMetadataValue` / `deepMergeMeta` | `src/metadata/schema/required-fields.ts` | Sidebar filled-dot, fallback merge |
| `MetadataSchema`, `MetadataField`, types | `src/metadata/schema/schema.types.ts` | All components |
| Tags autocomplete | `src/metadata/tags/tags-autocomplete.ts` | Passed to tags field via `autocomplete` prop. Uses `field.ckey` (not `key`!) |
| `metadataPanelStyles` (button CSS) | `src/metadata/metadata.styles.ts` | Bulk modal footer buttons |
| `metadataDropdownStyles`, `metadataChipStyles` | `src/metadata/metadata.styles.ts` | Referenced (NOT imported — already in field components) |

---

## Implementation Order

| Phase | Files | Description |
|-------|-------|-------------|
| 1 | `bulk-operations.ts`, `bulk-metadata.styles.ts` | Pure logic + CSS |
| 2 | `bulk-meta-row.ts`, `bulk-meta-table.ts` | Leaf components |
| 3 | `bulk-meta-sidebar.ts`, `bulk-meta-op-bar.ts` | Interactive components |
| 4 | `bulk-metadata-modal.ts`, `bulk/index.ts` | Orchestrator + barrel |
| 5 | `metadata/index.ts`, `sfx-uploader.ts` | Integration (add `_bulkMetadataOpen` state, update `_onFillMetadata`, add handlers, render modal) |

---

## Edge Cases

| Case | Handling |
|------|----------|
| Empty files list | Show empty state message, no sidebar/table |
| No schema fields | Show "No metadata fields configured" |
| Apply with no selection | Disable Apply button, show "Select files first" tooltip |
| Per-row + bulk apply | Both write to `_staged` in backend format, compose naturally |
| Required fields | `*` indicator in sidebar + table header. Uses `field.required === 1 \|\| config.requiredFields?.includes(field.ckey)` |
| Large file counts | Native scroll (virtual scroll out of scope) |
| File removed while modal open | `_onMetadataSave` guard: `if (!existing) return` |
| Dropdown clipping in table | Elevate z-index; if still clipped, switch to `position: fixed` with viewport coords |
| Textarea/multi-select in table cells | `max-height: 36px; overflow: hidden` in view mode. Full size in edit mode |
| Regional variant fields | `mapValueToBackend` called with `file` param to preserve other languages |
| Tags autocomplete | Uses `field.ckey` (not `key`). Autocomplete has built-in 200ms debounce + abort controller |

---

## Verification

1. `npm run build` — no TypeScript/build errors
2. Open demo, add multiple files, click "Fill Metadata" (requires `showFillMetadata: true` + `metadataConfig` in config)
3. Test sidebar navigation across field groups
4. Test bulk Apply with SET on text field → all selected files updated in staged view
5. Test ADD on multi-select field → values appended without duplicates
6. Test DELETE on tags field → values removed
7. Test per-row inline editing → individual file value changes
8. Test Cancel → no changes persisted to file store
9. Test Save → only changed fields committed (verify with console log)
10. Test single-file editing in preview sidebar still works independently
11. Test concurrent editing: edit file A's title in preview sidebar, then bulk-apply description to all → file A's title should survive
12. Test regional variant field: bulk-apply a value in one language → other language values preserved per file
