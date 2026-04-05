# Implementation Prompt: Fill Metadata Bulk Modal

Implement a bulk metadata editing modal for the Scaleflex uploader plugin. The full plan is in `docs/bulk-metadata-plan.md`. Read it carefully before starting. Follow the implementation order defined there.

## What to build

A full-screen overlay modal that opens when the user clicks "Fill Metadata" in the actions bar. It allows editing metadata across multiple upload files at once, with a sidebar for field navigation, an operation bar for bulk-applying values, and a per-file table with inline editing.

## Design reference

Open `docs/upload-v11.html` in a browser and click the "Fill Metadata" button at the bottom to see the exact UI design. Match that layout, spacing, and interaction patterns.

## Key files to read first

Before writing any code, read these files to understand existing patterns:

- `src/metadata/metadata-field-edit.ts` — Thin dispatcher that routes to the correct field editor by type. Your op-bar and table rows use this directly.
- `src/metadata/metadata-field-view.ts` — Read-only value display by type. Your table rows use this in view mode.
- `src/metadata/metadata-field.ts` — The wrapper that adds validation + value transforms + click-to-edit. You do NOT use this component, but you replicate its validation/transform logic in your row and op-bar components.
- `src/metadata/fields/field-base.ts` — Base class showing event pattern: `_emit(name, value)` dispatches `CustomEvent` with `{ key, value }`, `bubbles: true, composed: true`.
- `src/metadata/schema/value-transforms.ts` — `mapValueToBackend()` and `mapValueFromBackend()`. Critical for converting between frontend display format and backend storage format. Pay special attention to the regional variants wrapping at lines 136-142.
- `src/metadata/schema/validation.ts` — `validateField()` returns an error string or null.
- `src/metadata/schema/schema.types.ts` — All type definitions: `MetadataSchema`, `MetadataField`, `MetadataFieldType`, `MetadataConfig`, `UploadFile`, etc.
- `src/metadata/schema/required-fields.ts` — `isAssetHasMetadataValue()`, `deepMergeMeta()`.
- `src/metadata/metadata.styles.ts` — Shared CSS: `metadataInputStyles`, `metadataDropdownStyles`, `metadataChipStyles`, `metadataPanelStyles` (button CSS you can reuse), `metadataFieldStyles`.
- `src/metadata/index.ts` — Current exports and side-effect imports.
- `src/sfx-uploader.ts` — Read `_onFillMetadata` (line ~2372), `_onPreviewMetadataBlur` (line ~1856), and the render method (line ~3100+) to understand integration points.
- `src/store/store.types.ts` — `UploadFile` interface.
- `src/store/store.ts` — Store's `setState` is synchronous with re-entrancy protection.

## Critical implementation rules

### 1. Value format convention

- `_staged` map stores values in **backend format** (same as `file.meta`)
- Backend format examples: boolean → `true`/`false`/`null`, date → `"2024-01-15"`, geopoint → `"(40.7,-74.0)"`, tags → `["tag1","tag2"]`, select-one → `"internal_unique_value"` or `null`
- Field components work in **frontend format**: boolean → `"true"`/`"false"`/`"null"`, date → `Date` object, geopoint → `{ latitude: "40.7", longitude: "-74.0" }`, tags → `[{ value: "tag1", label: "tag1" }]`
- Always call `mapValueFromBackend(field, value, config.language)` before rendering a value in a field component
- Always call `mapValueToBackend(field, value, file, config.language)` before storing a value in `_staged`

### 2. Op-bar sends FRONTEND format

The op-bar dispatches `bulk-apply` with the value in **frontend format** (as the user entered it). The modal's `_onBulkApply` handler transforms per-file by calling `mapValueToBackend(field, frontendValue, fakeFile, language)` where `fakeFile = { meta: Object.fromEntries(fileStaged) } as UploadFile`. This preserves regional variant values per file.

### 3. Lit reactivity — always new references

Every mutation to `_staged` (Map), `_selected` (Set), `_appliedFields` (Set) must produce a new object reference. Use helper methods:

```typescript
private _setStagedValue(fileId: string, fieldKey: string, value: unknown): void {
  const next = new Map(this._staged);
  const fileMap = new Map(next.get(fileId) ?? new Map());
  fileMap.set(fieldKey, value);
  next.set(fileId, fileMap);
  this._staged = next;
}

private _setStagedBulk(updates: Array<[string, string, unknown]>): void {
  const next = new Map(this._staged);
  for (const [fileId, fieldKey, value] of updates) {
    const fileMap = new Map(next.get(fileId) ?? new Map());
    fileMap.set(fieldKey, value);
    next.set(fileId, fileMap);
  }
  this._staged = next;
}
```

### 4. Save sends only changed fields

On Save, diff per-field against the original `file.meta` snapshot. Only include fields whose value actually changed:

```typescript
const changedMeta: Record<string, unknown> = {};
for (const [fieldKey, stagedVal] of fileStagedMap) {
  if (JSON.stringify(stagedVal) !== JSON.stringify(originalFile.meta[fieldKey])) {
    changedMeta[fieldKey] = stagedVal;
  }
}
```

Dispatch a single `metadata-save-batch` event with all changed files.

### 5. `ckey` vs `key`

- Read/write metadata values: `file.meta[field.key]`
- Required fields check: `config.requiredFields?.includes(field.ckey)`
- Tags autocomplete: `autocomplete.search(field.ckey, query, callback)`

### 6. Event patterns

All custom events: `bubbles: true, composed: true`. Match the existing `_emit()` pattern in `field-base.ts`.

### 7. CSS theming

Use existing CSS custom properties: `--sfx-up-primary`, `--sfx-up-text`, `--sfx-up-border`, `--sfx-up-bg`, `--sfx-up-hover`, `--sfx-up-text-muted`, `--sfx-up-text-secondary`, `--sfx-up-error`, `--sfx-up-ring`, `--sfx-up-primary-bg`, `--sfx-up-font`, etc. See `metadata.styles.ts` for all used variables.

## Files to create (in order)

### Phase 1: `src/metadata/bulk/bulk-operations.ts`

Pure logic, no UI. Export:
- `BulkOperation` type: `'SET' | 'ADD' | 'DELETE'`
- `BulkOperationDef` interface: `{ key: BulkOperation; label: string }`
- `getAvailableOperations(fieldType: MetadataFieldType): BulkOperationDef[]`
  - Single-value types → `[SET]`
  - Array types (multi-select, tags, integer-list) → `[SET, ADD, DELETE]`
- `applyBulkOperation(operation, currentValue, operationValue, fieldType): unknown`
  - SET → return operationValue
  - ADD → append to array, deduplicate (tags by label string comparison, multi-select/integer-list by JSON.stringify)
  - DELETE → filter out matching items from array

### Phase 1: `src/metadata/bulk/bulk-metadata.styles.ts`

Export `css` tagged template literals. Match the design in `docs/upload-v11.html` (the `.fm-*` CSS classes). Use `--sfx-up-*` variables instead of hardcoded colors. Key dimensions:
- Overlay: `position: fixed; inset: 0; z-index: 1000; backdrop-filter: blur(6px)`
- Modal: `width: 980px; max-width: calc(100vw - 40px); height: 82vh; border-radius: 14px`
- Sidebar: `width: 220px`
- Top bar: `height: 48px`
- Table rows: `padding: 10px 24px`
- Thumbnail: `52px × 38px; border-radius: 6px; object-fit: cover`
- Footer: `padding: 14px 24px`

### Phase 2: `src/metadata/bulk/bulk-meta-row.ts`

LitElement `sfx-bulk-meta-row`. Props: `file: UploadFile`, `field: MetadataField`, `value: unknown` (backend format), `selected: boolean`, `config: MetadataConfig`, `autocomplete: unknown`. State: `_editing: boolean`, `_error: string | null`.

View mode: checkbox + thumbnail + file name + file size + `<sfx-metadata-field-view .field .value=${mapValueFromBackend(field, value, config?.language)}>`. Click on value cell → edit mode.

Edit mode: `<sfx-metadata-field-edit .field .value=${mapValueFromBackend(field, value, config?.language)} .autocomplete>`. Listen for `field-blur` → stop propagation → validate → transform → dispatch `row-field-change` with `{ fileId: file.id, value: backendValue }`.

Checkbox dispatches `row-toggle` with `{ fileId: file.id }`.

### Phase 2: `src/metadata/bulk/bulk-meta-table.ts`

LitElement `sfx-bulk-meta-table`. Thin container — maps `files` to `<sfx-bulk-meta-row>` for each, passing the effective value from `staged.get(file.id)?.get(field.key) ?? file.meta[field.key]`.

### Phase 3: `src/metadata/bulk/bulk-meta-sidebar.ts`

LitElement `sfx-bulk-meta-sidebar`. Props: `schema: MetadataSchema`, `activeFieldKey: string`, `filledFields: Set<string>`, `config: MetadataConfig`. Iterates `schema.groups` → renders group labels (uppercase, muted text) + field items (36px, clickable). Active item gets blue highlight. Green dot on filled fields. Red `*` on required fields (`field.required === 1 || config?.requiredFields?.includes(field.ckey)`). Click dispatches `field-select` with `{ fieldKey }`.

### Phase 3: `src/metadata/bulk/bulk-meta-op-bar.ts`

LitElement `sfx-bulk-meta-op-bar`. Props: `field: MetadataField`, `autocomplete: unknown`, `config: MetadataConfig`, `selectedCount: number`. State: `_operation: BulkOperation` (default SET), `_value: unknown` (frontend format), `_opDropdownOpen: boolean`.

Reset `_operation` and `_value` when `field` changes (`willUpdate`).

Render: operation dropdown (custom, using `getAvailableOperations`) + value input via `<sfx-metadata-field-edit .field .value .autocomplete>` + Apply button. Intercept `field-blur` and `field-change` from the edit component — stop propagation and capture into `_value`. On Apply click, dispatch `bulk-apply` with `{ operation: _operation, value: _value }` (value in **frontend format**). Disable Apply when `_value` is empty or `selectedCount === 0`.

For single-value field types (only SET available), don't render the dropdown — just show "Set" as static text.

### Phase 4: `src/metadata/bulk/bulk-metadata-modal.ts`

LitElement `sfx-bulk-metadata-modal`. The orchestrator. Props from parent: `schema`, `files`, `config`, `autocomplete`. State: `_activeFieldKey`, `_staged`, `_selected`, `_sortAsc`, `_appliedFields`.

Init in `connectedCallback`: clone `file.meta` into `_staged` for all files, select all, set first field active.

Render the full modal structure (overlay → modal → topbar + body + footer). Listen for events from children: `field-select`, `bulk-apply`, `row-field-change`, `row-toggle`.

`_onBulkApply`: for each file in `_selected`, call `mapValueToBackend(field, frontendValue, { meta: Object.fromEntries(staged.get(fileId)!) } as UploadFile, config?.language)` to get per-file backend value, then `applyBulkOperation(operation, currentStaged, backendValue, field.type)`. Use `_setStagedBulk` for all updates at once.

`_onSave`: build changes array (per-field diff), dispatch `metadata-save-batch`, then `metadata-close`.

Table header: select-all checkbox (3-state), Thumb column, Name column (sortable click), Size column, active field name column.

Footer: "← Back" button, Cancel button, Save button (primary style).

### Phase 4: `src/metadata/bulk/index.ts`

Barrel file:
```typescript
import './bulk-metadata-modal';
import './bulk-meta-sidebar';
import './bulk-meta-op-bar';
import './bulk-meta-table';
import './bulk-meta-row';
export type { BulkOperation } from './bulk-operations';
export { SfxBulkMetadataModal } from './bulk-metadata-modal';
```

### Phase 5: Modify `src/metadata/index.ts`

Add at the end:
```typescript
import './bulk/index';
export { SfxBulkMetadataModal } from './bulk/index';
```

### Phase 5: Modify `src/sfx-uploader.ts`

1. Add state: `@state() private _bulkMetadataOpen = false;`

2. Update `_onFillMetadata` (line ~2372):
```typescript
private _onFillMetadata = () => {
  const files = [...this._store.getState().files.values()].filter(
    (f) => SfxUploader._MODIFIABLE_STATUSES.has(f.status),
  );
  if (this.config?.metadataConfig && this._metadataSchema) {
    this._bulkMetadataOpen = true;
  }
  this._dispatchPublic(PublicEvents.FILL_METADATA, { files });
  this.config?.callbacks?.onFillMetadata?.(files);
};
```

3. Add handlers:
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

4. Add rendering in `render()` (after the preview layout block, before the closing of the main container):
```typescript
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

## Verification after implementation

1. `npm run build` — no errors
2. Open demo, add files, click "Fill Metadata"
3. Sidebar navigation works across groups
4. Bulk Apply SET on text field → all selected files show new value
5. Bulk Apply ADD on multi-select → values appended without duplicates
6. Bulk Apply DELETE on tags → values removed
7. Per-row inline edit → individual file changes
8. Cancel → no changes to store
9. Save → only changed fields persisted
10. Preview sidebar single-file editing still works independently
11. Concurrent: edit title in sidebar, bulk-apply description → title survives
