# Metadata Editing Feature — Implementation Plan

## Context

### What the uploader plugin already has

- `UploadFile.meta: Record<string, unknown>` and `.tags: string[]` in the store
- `updateFileMeta(fileId, meta, tags)` / `updateFilesMeta(updates[])` public API methods
- `showFillMetadata` config + `onFillMetadata` callback + `sfx-fill-metadata` event
- Metadata included in upload request payload: FormData `info[files[]]` JSON with `{ name, type, meta?, tags? }`
- But **no UI for editing metadata** — clicking "Fill Metadata" just fires a callback

### How Filerobot v5 (Hub) does it — detailed reference

Full metadata system tightly coupled to React, Redux, react-hook-form, and Zod. Below is the exact implementation for each concern.

#### Schema source & loading

The metadata model is **not** fetched via a dedicated endpoint. It comes from two sources:

1. **Project data** (loaded on project selection):
   - Endpoint: `GET /project/{projectUuid}`
   - The metadata model lives at `project.data.metadata`:
     ```
     project.data.metadata.model[]           → MetadataModel[]
     project.data.metadata.store             → { force_filling_metadata_on_upload, regional_variants_groups[] }
     project.data.metadata.reference_mapping → external field mappings
     ```
   - The metadata version lives at `project.data.airstore.metadata_model` → `'M0_LEGACY'` or `'M1_EDGY'`

2. **Settings endpoint** (for public settings + permission model):
   - Endpoint: `GET /settings` (relative to API base, which already includes `/v4` or `/v5`)
   - Thunk: `fetchMetaAndSettings` in `metadata.slice.ts`
   - Returns: `{ settings, fs: { permission_model } }`
   - This does NOT return the metadata model itself — it's supplementary

3. **Metadata adapter** (`metadata.adapter.js`, 306 lines):
   - Handles migration from old format (fields have `regional_variants: string[]`) to new format (fields have `regional_variants_group_uuid: string`)
   - Called via `adaptProjectDataMetadata(projectData)` — detects format, transforms if needed
   - Enriches with `regional_variants_groups` in metadata.store

**For the plugin**: The metadata schema can come from two sources:

1. **Hub API** — `GET /project/{uuid}` with Hub session auth headers (`hubHeaders`). Used when the consumer has Hub session tokens.

2. **Airbox / Sharebox API (preferred for airbox integrations)** — The airbox config response (`GET /v3/a/{puid}/{title}?format=json`) already includes the full metadata schema at `airbox.metadata` with the same `{ model, store }` shape. When available, pass it as `metadataConfig.rawMetadata` to skip the Hub API call entirely — no Hub session tokens needed.

The `rawMetadata` approach is preferred whenever the schema is already available from an existing API call (airbox, sharebox, or any other source that returns the same `{ model[], store }` structure).

#### Schema shape (exact from API)

```typescript
// project.data.metadata
{
  model: [
    {
      applies_to: 'FILES',  // or 'DIRECTORIES' or 'PRODUCTS'
      groups: [
        {
          uuid: 'group-uuid-1',
          name: 'Root fields',
          isRoot: true,        // built-in fields
          ckey: 'root',
          fields: [
            {
              key: 'title',
              ckey: 'title',
              uuid: 'field-uuid-1',
              title: 'Title',
              type: 'text',
              placeholder: 'Title...',
              hint: '',
              required: 0,           // 0 = optional, 1 = required
              possible_values: [],
              regional_variants_group_uuid: null,  // or UUID string
              validation: '',         // regex pattern string or empty
              permissions: [],        // permission rules
              model: {},              // additional field config
              mapping: '',            // embedded metadata mapping
              icon: '',
            },
            // description field (type: 'textarea'), etc.
          ]
        },
        {
          uuid: 'group-uuid-2',
          name: 'Custom Group',
          isRoot: false,
          fields: [
            // custom metadata fields...
          ]
        }
      ]
    }
  ],
  store: {
    force_filling_metadata_on_upload: false,  // boolean
    regional_variants_groups: [
      {
        uuid: 'rvg-uuid-1',
        label: 'Language',
        type: 'LANGUAGES',           // or 'CURRENCIES' or 'CUSTOM'
        icon: '',
        isRoot: true,
        variants: [
          { internal_unique_value: 'iuv-en', api_value: 'en', label: 'English' },
          { internal_unique_value: 'iuv-fr', api_value: 'fr', label: 'Français' },
        ]
      }
    ]
  },
  reference_mapping: [],
  embedded_mapping: [],
  custom_embedded_metadata: [],
}
```

#### Schema processing utility (`get-metadata-groups.ts`)

```typescript
getMetadataGroups(
  metadataModel?: MetaModel[],
  metaModelType: string = 'FILES',  // filter by applies_to
  isRootOnly = false
): MetaGroup[]
```

Filters model for the specified `applies_to` type, returns groups with fields. Can filter for root fields only.

#### Redux state shape for metadata

```
state.explorer.metadata = {
  settings: Record<string, any>,           // public settings
  model: MetadataModel[],                  // from project data
  regionalGroups: RegionalVariantsGroup[], // from metadata.store
  regionalFilters: { [groupUuid]: 'en' },  // current selected variant per group (defaults to first)
  version: 'M0_LEGACY' | 'M1_EDGY',
  showTags: boolean,
  itemMetadataErrors: Record<string, any>,
  isSubmitting: boolean,
  activeRegionalLang: string,
  languageGroup: any[],
  activeFacetedSearchMetadataFields: string[],
}
```

Key selectors (memoized):
- `selectMetadataModel(state)` → `MetadataModel[]`
- `selectMetadataFields(state, filterRootFields?)` → all fields flattened, optionally excluding root
- `selectCustomMetadataGroups(state)` → only non-root groups
- `selectMetadataRegionalFilters(state)` → current variant selections
- `selectMetadataFieldByKey(state, key)` → single field lookup

#### Field types (exact TYPE_IDS from `metadata-model-field.js`)

```typescript
const TYPE_IDS = {
  NUMERIC: 'numeric',
  SELECT_ONE: 'select-one',      // Note: hyphenated in TYPE_IDS
  MULTI_SELECT: 'multi-select',  // Note: hyphenated
  TEXT_AREA: 'textarea',
  TEXT: 'text',
  SUPERTAGS: 'tags',
  DATE: 'date',
  BOOLEAN: 'boolean',
  ATTACHMENTS_ASSETS: 'asset-attachments',
  ATTACHMENT_URI: 'attachment-uri',
  GEO_POINT: 'geopoint',
  DECIMAL2: 'decimal2',
  INTEGER_LIST: 'integer-list',
}
```

**Important**: The type values use hyphens in TYPE_IDS (`'select-one'`, `'multi-select'`, `'attachment-uri'`, `'integer-list'`, `'geopoint'`) but the API may return underscored versions. The adapter normalizes these.

#### Field rendering pipeline (exact component chain)

```
use-file-metadata.jsx
  → Generates 4 field lists from metadata model:
    1. readOnlyGeneralMetadataFields (system, non-editable)
    2. editableGeneralMetadataFields (system, editable: title, description)
    3. rootMetadataGroups (root custom groups)
    4. customMetadataGroups (non-root custom groups)

MetadataTabContent.tsx
  → Renders sections: Default Fields → Product Fields → Custom Fields (each in accordion)

MetadataField.tsx
  → Table row: label (left) + value wrapper (right)
  → Shows required indicator, hint tooltip

MetadataFieldValueWrapper.tsx
  → VIEW MODE: renders CustomMetadataFieldValue
    → Value read from: file.meta[field.key] (or file.product[field.key] for product fields)
    → Regional variants: extracts value[metaRegionalFilters[groupUuid]]
    → Select options: translates internal_unique_value → label via optionsTranslations
    → Type-specific display:
      - boolean: checkmark/cross icon, or dash
      - attachment-uri: clickable link
      - date: formatted pretty date
      - numeric/decimal2: locale-formatted number
      - arrays: joined with ', '
      - empty: dash '—'
  → EDIT MODE (on click): renders MetadataEditableField
    → Permission check: canEditField (from canEditMetadata hook)
    → Click handler: sets currentEditingField context to field.key
    → Keyboard: Enter or Space also triggers edit
    → When switching between fields: isSwitchingFieldsRef prevents reset

MetadataEditableField.tsx
  → Wraps in react-hook-form <Form>
  → Initializes via useMetadataForm hook (creates form + validation + submission)
  → Conditionally shows save/cancel buttons (NOT for: select_one, boolean, integer_list, supertags, multi_select — these auto-submit)
  → Shows regional variant hint as description

MetadataEditableFieldByType.tsx
  → Switch dispatcher mapping field.type → component:
    'text'           → InputField
    'numeric'        → NumericField
    'decimal2'       → Decimal2Field
    'boolean'        → BooleanField
    'select-one'     → SelectField
    'multi-select'   → MultiSelectField
    'textarea'       → TextareaField
    'date'           → DateField
    'integer-list'   → IntegerListField
    'attachment-uri' → InputField (reused)
    'geopoint'       → GeoPointField
    'tags'           → TagsField
```

#### Form handling (`use-metadata-form.ts`) — exact logic

```typescript
// Initialization
schema = useDynamicFieldValidation({ field })  // → Zod schema
defaultValues = useMetadataDefaultValues({ file, field })  // → typed initial values
methods = useForm({ resolver: zodResolver(schema), defaultValues })

// Submission (handleFormSubmit):
1. Check isDirty (field changed) OR isProductDirty
2. Separate product from meta: const { product, ...meta } = formData
3. Transform values: mapMetadataValuesToBackend({ meta, field, file, metaRegionalFilters })
4. If pre-upload file (uploadStep: true):
   → dispatch(updateUploadInfoMetaTags({ filesIds: [file.id], meta, deepMergeMeta: true }))
   → NO API call — just Redux state
5. If saved file:
   → dispatch(updateFileMeta(uuid, { meta, method: 'put' }))
   → API: PUT /v5/file/{uuid}/meta
6. On success: invalidate file-dependencies cache, navigate to next required field

// Event handlers:
handleFormSubmitOnBlur(event?: FocusEvent):
  → Ignore if focus moved to save/cancel buttons (check relatedTarget)
  → Otherwise: formElement.requestSubmit()

handleResetByEscape(event: KeyboardEvent):
  → If key === 'Escape': resetToDefaults() + clear currentEditingField context
```

#### Default value extraction (`use-metadata-default-values.ts`) — exact per type

```typescript
// Product fields:
{ product: { ref: file?.product?.ref ?? '', position: file?.product?.position ?? null } }

// By type:
'geopoint':    parseGeoPoint(file?.meta?.[field.key])
               // "(lat,lng)" → { latitude: string, longitude: string }
               // Regex: value.match(/\(([^)]+)\)/) → split by ','

'boolean':     file?.meta?.[key] === '' ? '' : String(file?.meta?.[key])
               // true → 'true', false → 'false', null/undefined → 'null'

'date':        file?.meta?.[key] ? new Date(file?.meta?.[key]) : undefined

'decimal2':    String(file?.meta?.[key])

'supertags':   Array.isArray(rawValue)
                 ? rawValue.map(tag =>
                     typeof tag === 'string'
                       ? { value: tag, label: tag, name: tag }
                       : tag
                   )
                 : rawValue

// All others: getFieldValue({ value, regionalVariantsGroupUuid, metaRegionalFilters })
//   → If regional: parsedValue[metaRegionalFilters[groupUuid]] || ''
//   → If object: JSON.stringify(value)
//   → Otherwise: value as-is

// multi_select fallback: value || []
```

#### Validation (`use-dynamic-field-validation.ts`) — exact Zod schemas per type

```typescript
// TEXT / TEXTAREA / ATTACHMENT_URI / SELECT_ONE:
z.string()
  // + .refine(val => val.length > 0) if required
  // + .refine(val => new RegExp(field.validation).test(val)) if field.validation
  // + .refine(val => isValidUri(val)) for attachment_uri

// NUMERIC:
z.number()
  .min(-1_999_999_999, 'Value out of range')
  .max(1_999_999_999, 'Value out of range')
  .nullable()

// DECIMAL2:
z.string()
  .transform(val => val === '' ? undefined : Number(val))
  .refine(val => /^\d*\.?\d{0,2}$/.test(String(val)), 'Max 2 decimal places')
  .refine(val => val >= -9_999_999_999.99 && val <= 9_999_999_999.99, 'Out of range')

// BOOLEAN:
z.string()  // values: 'true', 'false', 'null'

// MULTI_SELECT:
z.array(z.string())
  // + .refine(val => val.length > 0) if required

// GEO_POINT:
z.object({
  latitude: z.string().transform(v => v === '' ? undefined : Number(v))
    .refine(v => v === undefined || (v >= -90 && v <= 90)),
  longitude: z.string().transform(v => v === '' ? undefined : Number(v))
    .refine(v => v === undefined || (v >= -180 && v <= 180)),
})
.superRefine((data, ctx) => {
  // Both or neither must be provided
  const hasLat = data.latitude != null
  const hasLng = data.longitude != null
  if (hasLat !== hasLng) {
    ctx.addIssue({ /* error on missing field */ })
  }
})

// DATE:
z.date()  // or z.date().nullable()

// Required handling (all types):
if (field.required === 1) {
  schema = schema.refine(val => {
    if (Array.isArray(val)) return val.length > 0
    if (typeof val === 'string') return val.length > 0
    return !!val
  }, `${field.title || field.key} is required`)
}

// Custom regex (text types):
if (field.validation) {
  schema = schema.refine(
    val => new RegExp(field.validation).test(String(val)),
    `Does not match pattern "${field.validation}"`
  )
}

// Final: z.object({ [field.key]: schema })
```

#### Value transformations (`map-metadata-values-to-backend.ts`) — exact

```typescript
function mapMetadataValuesToBackend({ meta, field, file, metaRegionalFilters }) {
  const key = field.key
  let value = meta[key]

  // GEO_POINT: { latitude, longitude } → "(lat,lng)"
  if (field.type === 'geopoint') {
    const { latitude, longitude } = value
    meta[key] = `(${latitude},${longitude})`
  }

  // BOOLEAN: string → native boolean/null
  if (field.type === 'boolean') {
    meta[key] = value === '' || value === 'null' ? null : value === 'true'
  }

  // DATE: Date object → "YYYY-MM-DD"
  if (field.type === 'date') {
    meta[key] = !value ? null : getDateString('ymd', '-', value)
    // getDateString formats as: year-month-day with zero padding
  }

  // SUPERTAGS: FileTag[] → string[] (just labels)
  if (field.type === 'tags') {
    meta[key] = value.map(tag => tag.label)
  }

  // SELECT_ONE: empty string → null
  if (field.type === 'select-one') {
    meta[key] = value === '' ? null : value
  }

  // REGIONAL VARIANTS: nest under regional filter key
  if (field.regional_variants_group_uuid) {
    meta[key] = {
      ...file.meta?.[key],  // preserve other language values
      [metaRegionalFilters[field.regional_variants_group_uuid]]: meta[key],
    }
  }

  return meta
}
```

#### Upload flow — exact FormData construction (`xhr-upload/index.js`)

```javascript
createFormDataUpload(file, opts) {
  const formPost = new FormData()
  const FIELD_NAME = 'files[]'

  // META — metadata key-value pairs
  if (hasKeys(file.meta) || hasKeys(opts.meta)) {
    formPost.append(
      `meta[${FIELD_NAME}]`,           // → "meta[files[]]"
      JSON.stringify({ ...file.meta, ...opts.meta })
    )
  }

  // INFO — file info (name, type, etc.)
  if (hasKeys(file.info) || hasKeys(opts.info) || opts.addInfoCallback) {
    const infoFromCb = opts.addInfoCallback?.(file)
    formPost.append(
      `info[${FIELD_NAME}]`,           // → "info[files[]]"
      JSON.stringify({ ...file.info, ...opts.info, ...(infoFromCb || {}) })
    )
  }

  // TAGS — language-keyed tags
  if (hasKeys(file.tags) || hasKeys(opts.tags)) {
    const tagLang = Object.keys(file.tags)[0]  // e.g., 'en'
    formPost.append(
      `tags[${FIELD_NAME}]`,           // → "tags[files[]]"
      JSON.stringify({
        lang: tagLang,
        new_tags: file.tags[tagLang].map(({ sid, label }) => sid || label),
      })
    )
  }

  // PRODUCT — product metadata
  if (hasKeys(file.product) || hasKeys(opts.product)) {
    formPost.append(
      `product[${FIELD_NAME}]`,        // → "product[files[]]"
      JSON.stringify({ ...file.product, ...opts.product })
    )
  }

  // FILE BINARY
  formPost.append(FIELD_NAME, fileBlob, fileName)

  return formPost
}

// Upload endpoint: POST /v4/files?folder={encodeURIComponent(folderPath)}
```

**Current uploader plugin FormData format** (xhr-upload.ts):
```javascript
// Plugin sends meta + tags INSIDE info[files[]] as nested JSON:
const info = { name, type };
if (Object.keys(file.meta).length > 0) info.meta = file.meta;
if (file.tags.length > 0) info.tags = file.tags;  // string[]
formData.append('info[files[]]', JSON.stringify(info));
formData.append('files[]', fileBlob, fileName);
```

**V5 sends meta, tags, info as SEPARATE FormData fields:**
```javascript
formData.append('meta[files[]]',    JSON.stringify(file.meta));
formData.append('info[files[]]',    JSON.stringify(file.info));
formData.append('tags[files[]]',    JSON.stringify({ lang: 'en', new_tags: [...] }));
formData.append('product[files[]]', JSON.stringify(file.product));
formData.append('files[]', fileBlob, fileName);
```

**Decision needed**: The Filerobot API accepts BOTH formats (nested inside info, or as separate fields). The current plugin format works — **no change needed to xhr-upload.ts**. The plugin already sends `info.meta` and `info.tags` correctly. However, if we want to align with v5 for tags (language-keyed), that would require changing the FormData construction.

**Tags format difference:**
- Plugin: `tags: string[]` → sent as `info.tags = ['tag1', 'tag2']`
- V5: `tags: Record<string, TagOption[]>` → sent as `tags[files[]] = { lang: 'en', new_tags: ['tag1'] }`

**Recommendation**: Keep plugin's simpler `string[]` format. The API accepts plain string arrays in the `info.tags` field. If language-keyed tags are needed later, add `metadataConfig.language` wrapping in the FormData layer only.

#### Upload metadata editing UI flow (exact code path)

```
1. User clicks "Fill metadata" button in upload-modal-header.tsx
   → Calls openUploadFilesMetadata() hook

2. useOpenUploadFilesMetadata.ts:
   if (uploadFilesIds.length > 1):
     → dispatch(bulkEditPanelOpened({ for: uploadFilesIds }))  // bulk edit
   else if (uploadFilesIds.length === 1):
     → dispatch(fileWindowUpdated({
         for: uploadFilesIds[0],
         enableEdit: true,
         tabId: ASSET_DETAILS_TAB_IDS.METADATA,  // forces metadata tab
       }))

3. Redux updates panels.fileWindow.for and panels.fileWindow.tabId

4. AssetDetails component renders (when fileWindowFor has value)
   → AssetDetailsTabsProvider reads tabId from Redux
   → isPreUpload flag set based on selectIsUploadableFile(state, fileId)
     (checks file.uploadStep === true)

5. AssetDetailsTabs renders:
   → Only GENERAL and METADATA tabs shown during upload
   → Progress bar: "X/Y required fields filled" (only if isPreUpload && on metadata tab)
   → RequiredFieldsWarning banner with "Fill metadata" link

6. MetadataTab → MetadataTabContent renders form sections:
   → Default fields (title, description)
   → Custom field groups (in accordions)
   → Each field: click to edit → form appears → blur to save

7. On field save (pre-upload): dispatch(updateUploadInfoMetaTags({
     filesIds: [file.id],
     meta: transformedMeta,
     deepMergeMeta: true,
   }))
   → Updates Redux upload state, NOT API
```

#### Required fields enforcement (exact logic)

```typescript
// get-metadata-empty-assets.ts
const isAssetHasMetadataValue = (value) => {
  if (Array.isArray(value)) return value.length > 0
  if (typeof value === 'object' && value !== null) {
    return Object.keys(value || {})
      .filter(key => ![undefined, null, ''].includes(value[key]))
      .length > 0
  }
  if (typeof value === 'string') return value.length > 0
  return !!value
}

const getMetadataEmptyAssets = (requiredFields, assets) => {
  return requiredFields.reduce((acc, field) => {
    const assetsWithEmpty = assets.filter(
      ({ meta = {} }) => !isAssetHasMetadataValue(meta[field.key])
    )
    if (assetsWithEmpty.length) acc[field.key] = assetsWithEmpty
    return acc
  }, {})
}

// Returns: { fieldKey: [file1, file2, ...], ... }
// hasNotFilledRequiredFields = Object.values(result).some(arr => arr.length > 0)
```

- Upload button disabled when `hasNotFilledRequiredFields && forceFillingMetadataOnUpload`
- Button variant changes to 'primary' (attention-grabbing) when metadata is missing
- Tooltip: "Please fill the required metadata first"
- Fill metadata button in header also gets primary variant to draw attention

#### Field visibility during upload (`FileWindow.utils.js`)

```typescript
const checkFieldVisibility = (field, file) => {
  if (field?.hide) return false
  if (!file?.uploadStep) return true           // show all if not uploading
  return file?.uploadStep && field.key !== 'tags'  // hide tags during upload
}
```

#### Tags field — complete implementation

**Component hierarchy:**
```
FormTagsField (form-tags-field.tsx)
  → FormTagsInnerField (manages state: open, searchQuery)
    → Popover wrapper (always opens on mount)
      → TagsInputTrigger (trigger):
          → Pills for selected tags (removable)
          → role="combobox-tags"
      → TagsFieldDropdownContent (content):
          → TagsSearch: text input with clear button
          → CommandList:
              → possible_values (filtered to exclude selected)
              → Autocomplete results from API
              → "Create '{query}'" option (if query not in results/selected)
              → Loading skeleton
              → "No results" message
```

**Tag operations:**
```typescript
handleAddTag(tag: TagOption):
  if (isSameTag already in field.value) return  // prevent duplicates
  field.onChange([...field.value, tag])
  setSearchQuery('')

handleRemoveTag(tag: TagOption):
  field.onChange(field.value.filter(t => !isSameTag(t, tag)))

// Can create new tag:
canCreate = searchQuery
  && !field.value.some(t => isSameTag(t, createTag(searchQuery)))
  && !possibleValues.some(pv => isSameTag(pv, createTag(searchQuery)))
  && !isLoading
```

**Autocomplete:**
```typescript
// Hook: useMetadataAutocomplete
// Endpoint: GET v5/metadata/autocomplete?q={query}&meta_key={metadataKey}&limit={limit}
// metadataKey format: `_${field.ckey}` (underscore prefix required!)
// Response: { data: { tags: [{ tag: string }] } }
// Uses react-query: queryKey: ['metadata/autocomplete', projectUuid, metadataKey, query]
// enabled: query.length > 0
// staleTime: 0, gcTime: 0 (no caching)

// Debounce pattern:
const deferredQuery = useDeferredValue(searchQuery)  // React 18
const debouncedQuery = useDebounce(deferredQuery.trim().toLowerCase(), 200)
// → API only called after 200ms of no typing
```

**Tag utilities (`tag-field.utils.ts`):**
```typescript
const isSameTag = (a, b) =>
  a.label?.trim().toLowerCase() === b.label?.trim().toLowerCase()

const normalizeLabel = (label) =>
  label.trim().replace(/\s+/g, ' ')          // collapse whitespace

const normalizeValue = (label) =>
  normalizeLabel(label).replace(/\s/g, '-')   // spaces → hyphens

const createTag = (label) => ({
  label: normalizeLabel(label),
  value: normalizeValue(label),
})
```

**TagOption type:**
```typescript
type TagOption = {
  sid?: string    // system ID (from API)
  value: string   // normalized value
  label: string   // display label
}
```

#### Select fields — exact implementation

**SelectField (select_one):**
```typescript
// Uses FormComboboxField with variant='single' (default)
// Options from useMetadataSortedPossibleValues hook
// Auto-opens on mount (defaultOpen: true)
// Auto-focuses trigger
// Submit on blur (setTimeout 0 for popover close race)
// Escape resets

<FormComboboxField
  control={form.control}
  name={field.key}
  comboboxProps={{
    placeholder: field.placeholder,
    options: sortedOptions,      // { id, label, value }[]
    defaultOpen: true,
    triggerProps: { autoFocus: true },
    onBlur: () => setTimeout(handleFormSubmitOnBlur, 0),
  }}
/>
```

**MultiSelectField (select_multi):**
```typescript
// Uses FormComboboxField with variant='multi-tags' (chips)
// Same options pattern
// Clears value on dependency conflict (useEffect)
// Submit on popover close (onCloseAutoFocus)

<FormComboboxField
  variant='multi-tags'
  comboboxProps={{
    options: sortedOptions,
    defaultOpen: true,
    popoverContentProps: {
      onCloseAutoFocus: handleFormSubmitOnBlur,
    },
  }}
/>
```

**useMetadataSortedPossibleValues hook:**
```typescript
// 1. Filter by dependencies (allow_values / set_values whitelist)
const allowed = allowValues?.length > 0
  ? possibleValues.filter(pv =>
      allowValues.some(av =>
        (av.allowed_values || av.set_values || [])
          .includes(pv.internal_unique_value)
      )
    )
  : possibleValues

// 2. Transform to options: { id: internal_unique_value, label: translatedLabel, value: internal_unique_value }
// 3. Sort alphabetically by label (localeCompare)
```

**BooleanField:**
```typescript
// Uses FormSelectField (NOT FormComboboxField — simpler, no search)
// 3 options: { label: 'True', value: 'true' }, { label: 'False', value: 'false' }, { label: 'None', value: 'null' }
// Options filtered by dependencies (set_values can limit to specific boolean)
// Auto-opens, submit on close
```

#### Other field specifics

**NumericField:**
- Uses locale-aware number input via `useInputWithLocaleNumber` hook
- Integer limits: ±1,999,999,999
- Custom keyboard handler for locale decimal separator

**Decimal2Field:**
- `<input type="number" step="0.01">`
- Max 2 decimal places (validated via regex: `/^\d*\.?\d{0,2}$/`)
- Range: ±9,999,999,999.99

**DateField:**
- Uses `FormDatePickerField` with locale awareness
- Handles Escape and pointer-down-outside for blur submission
- Value: Date object in form, "YYYY-MM-DD" string in API

**GeoPointField:**
- Two-column grid: latitude input + longitude input
- Both `type="number"` with `step="any"`
- Shared blur handler: only submits when focus leaves BOTH fields (checks if relatedTarget is the sibling input)
- Validation: both-or-neither required; lat [-90,90], lng [-180,180]

**TextareaField:**
- Multi-line text input
- Has "Describe with AI" button (calls POST /process/describe)
- Has translate button
- Has copy-to-clipboard button

**InputField (text / attachment-uri):**
- Standard text input with autoFocus
- Has translate button for text type
- attachment-uri uses same component, adds URI validation

#### updateUploadInfoMetaTags thunk — exact implementation

```typescript
updateUploadInfoMetaTags = createThunk(
  ({ filesIds, meta, tags, info, product, tagsForceUpdate, deepMergeMeta, removeMeta }, thunkApi) => {
    const updatedFiles = { ...selectUploads(thunkApi.getState()) }

    filesIds.forEach(fileId => {
      const newFile = { ...updatedFiles[fileId] }

      if (product) {
        newFile.product = { ...newFile.product, ...product }
      }

      if (info) {
        newFile.info = { ...newFile.info, ...info }
        if (info?.name) newFile.name = info.name  // sync filename
      }

      if (meta) {
        if (deepMergeMeta) {
          newFile.meta = deepMerge(newFile.meta, meta, {
            considerArray: true,
            removeFromArray: removeMeta,
            dismissArrayIfSourceNotArray: removeMeta,
          })
        } else {
          newFile.meta = { ...newFile.meta, ...meta }
        }
      }

      if (tags) {
        newFile.tags = tagsForceUpdate
          ? tags
          : deepMerge(newFile.tags, tags, { considerArray: true })
      }

      updatedFiles[fileId] = newFile
    })

    thunkApi.dispatch(uploadsReplaced(updatedFiles))
    return updatedFiles
  },
)
```

#### Metadata service API methods

```typescript
// metadata.service.ts — all static methods returning Promise

// Schema/settings
getMetadataAttributesKeys()                    → GET /v5/attributes/keys
getMetadataFieldDependencies(fieldUuid)        → GET /metadata/{fieldUuid}/dependencies
getMetadataAllFieldsDependencies()             → GET /metadata/dependencies
getFileDependencies(fileUuid)                  → GET /v5/file/{fileUuid}?fields=dependencies,conflicts
getMetadataEmbeddedFields()                    → GET /embedded-metadata-field

// Translations
getMetadataFieldsTranslations({lang, format})  → GET /v5/meta/model/fields/i18n?lang={}&format={}
saveMetadataFieldTranslations(data)            → PUT /v5/meta/model/fields/i18n
getMetadataFieldsOptionsTranslations(...)      → GET /v5/meta/model/fields/options/i18n

// AI
translateMetadataTextField(text, src, targets) → POST /integration/translate
describeWithAi(fileUuid, languages)            → POST /process/describe
getAllMetadataLanguages()                       → GET /languages

// File meta update
updateFileMeta(uuid, { meta, method })         → PUT or PATCH /v5/file/{uuid}/meta
updateFileTags(uuid, { lang, existingTags, newTags }) → PUT /v5/file/{uuid}/tags

// Tags autocomplete
autocomplete({ metadataKey, query, limit })    → GET v5/metadata/autocomplete?q={}&meta_key={}&limit={}
// Response: { data: { tags: [{ tag: string }] } }
```

---

## Goal

Add an in-plugin metadata editing UI that:
1. Fetches the project's metadata schema from the Filerobot API
2. Renders a schema-driven form with all supported field types
3. Lets users fill metadata per-file before upload
4. Supports both "all fields" and "only specified field ckeys" modes via config
5. Enforces required fields before upload when configured
6. Is fully lazy-loaded — zero cost if metadata is not used

---

## Architecture

### Lazy-Loaded Chunk

All metadata code lives in a separate Vite chunk (`metadata-form-*.js`), following the same pattern as `provider-browser-*.js`. It is only loaded when metadata editing is activated.

**Activation triggers:**
- `metadataConfig` provided in config → schema preloaded eagerly on init
- `showFillMetadata: true` without `metadataConfig` → backward-compatible callback-only mode (no chunk loaded)

### New Config Options

```typescript
interface UploaderConfig {
  // ... existing options ...

  /** Show "Fill Metadata" button in the actions bar. (existing) */
  showFillMetadata?: boolean;

  /** Metadata editing configuration. When provided, enables the built-in metadata form. */
  metadataConfig?: MetadataConfig;
}

interface MetadataConfig {
  /**
   * Which fields to show.
   * - 'all' — show every field from the project schema (for Hub)
   * - string[] — array of field ckeys to show, subset of schema (for portals/embeds)
   * Default: 'all'
   */
  fields?: 'all' | string[];

  /**
   * Override which field ckeys are required (must fill before upload).
   * If not set, uses the `required` flag from the schema (field.required === 1).
   * Can make schema-optional fields required or schema-required fields optional.
   */
  requiredFields?: string[];

  /**
   * Block upload until all required metadata fields are filled.
   * Mirrors Hub's `force_filling_metadata_on_upload` behavior.
   * When true: upload button disabled + tooltip "Fill required metadata first".
   * When 'auto': reads from schema's metadata.store.force_filling_metadata_on_upload.
   * Default: false
   */
  enforceRequiredBeforeUpload?: boolean | 'auto';

  /**
   * Show tags field with autocomplete.
   * Default: true (if tags/supertags field exists in schema)
   */
  showTags?: boolean;

  /**
   * Language key for tags and regional variants.
   * Default: 'en'
   */
  language?: string;

  /**
   * Default metadata values applied to every new file.
   * Deep-merged with any per-file meta set via updateFileMeta().
   */
  defaults?: Record<string, unknown>;
}
```

### Component Structure

```
src/
  metadata/                          # NEW — entire directory is a lazy chunk
    index.ts                         # Barrel: lazy entry point
    metadata-panel.ts                # Slide-over panel (single file or bulk mode)
    metadata-form.ts                 # Renders grouped fields for one file
    metadata-field.ts                # Single field: label + view/edit wrapper (click-to-edit)
    metadata-field-edit.ts           # Edit-mode dispatcher → routes to type component
    metadata-field-view.ts           # View-mode value display (type-aware formatting)
    fields/
      text-field.ts                  # type: text, attachment-uri (shared)
      textarea-field.ts              # type: textarea (auto-resize)
      select-field.ts                # type: select-one (dropdown with search, auto-open)
      multi-select-field.ts          # type: select-multi (dropdown + chips, auto-open)
      tags-field.ts                  # type: tags (pills + autocomplete dropdown + create new)
      boolean-field.ts               # type: boolean (select: True/False/None)
      number-field.ts                # type: numeric + decimal2 (shared, step differs)
      date-field.ts                  # type: date (native input[type=date])
      geo-point-field.ts             # type: geopoint (paired lat/lng, shared blur logic)
    schema/
      schema-service.ts              # Fetch + cache metadata schema from API
      schema-parser.ts               # Parse API response → MetadataSchema (filter, flatten, index)
      schema.types.ts                # MetadataModel, MetadataGroup, MetadataField, PossibleValue, etc.
      value-transforms.ts            # mapValueToBackend / mapValueFromBackend (all types)
      validation.ts                  # Per-field validation (required, range, regex, geo rules)
      required-fields.ts             # isAssetHasMetadataValue, getFilesWithMissingRequired
    tags/
      tags-autocomplete.ts           # Debounced fetch: GET /metadata/autocomplete?q=&meta_key=_ckey
      tag-utils.ts                   # isSameTag, normalizeLabel, normalizeValue, createTag
    metadata.styles.ts               # Shared adopted stylesheets
```

### Vite Config Change

```typescript
// vite.config.ts — add metadata as a separate chunk
manualChunks(id) {
  if (id.includes('/metadata/')) return 'metadata-form';
  if (id.includes('/connectors/') || id.includes('provider-browser')) return 'provider-browser';
}
```

### Panel Architecture (replicating existing provider-browser pattern)

The metadata panel must follow the same modal/slide-over pattern already established in the plugin for the provider browser.

#### Existing modal pattern in sfx-uploader.ts

**State management:**
```typescript
// Current pattern for provider browser:
@state() private _activeConnector: ProviderId | null = null;

// New pattern for metadata panel:
@state() private _metadataFileId: string | null = null;   // single-file mode
@state() private _metadataBulkMode: boolean = false;      // bulk mode
```

**Lazy loading pattern (existing):**
```typescript
// Provider browser lazy load — same pattern for metadata:
if (!customElements.get('sfx-provider-browser')) {
  const { SfxProviderBrowser } = await import('./components/provider-browser');
  customElements.define('sfx-provider-browser', SfxProviderBrowser);
}
this._activeConnector = source as ProviderId;

// Metadata equivalent:
if (!customElements.get('sfx-metadata-panel')) {
  const { SfxMetadataPanel } = await import('./metadata/metadata-panel');
  customElements.define('sfx-metadata-panel', SfxMetadataPanel);
}
this._metadataFileId = fileId;
```

**Modal CSS (existing in sfx-uploader.ts styles):**
```css
.connector-modal-backdrop {
  position: fixed; inset: 0; z-index: 1000;
  background: var(--sfx-up-backdrop);     /* rgba(0, 0, 0, 0.45) */
  backdrop-filter: blur(6px);
  display: flex; align-items: center; justify-content: center;
  padding: 20px;
  animation: fadeIn 0.18s ease both;
}
.connector-modal {
  background: var(--sfx-up-bg, #fff);
  border-radius: 12px;
  box-shadow: 0 28px 80px var(--sfx-up-shadow, rgba(0,0,0,0.18)), 0 4px 16px oklch(0 0 0 / 0.06);
  width: 100%; max-width: 520px;
  height: 75vh; max-height: 640px; min-height: 400px;
  overflow: hidden;
  display: flex; flex-direction: column;
  animation: modalIn 0.28s cubic-bezier(0.34, 1.2, 0.64, 1) forwards;
}
```

**Rendering pattern:**
```typescript
${this._metadataFileId || this._metadataBulkMode
  ? html`
      <div class="connector-modal-backdrop" @click=${this._onMetadataBackdropClick}>
        <div class="connector-modal">
          <sfx-metadata-panel
            .schema=${this._metadataSchema}
            .file=${this._metadataFileId ? this._store.getState().files.get(this._metadataFileId) : null}
            .files=${this._metadataBulkMode ? [...this._store.getState().files.values()] : []}
            .bulkMode=${this._metadataBulkMode}
            .config=${this.config?.metadataConfig}
            @metadata-save=${this._onMetadataSave}
            @metadata-close=${this._onMetadataClose}
            @metadata-navigate=${this._onMetadataNavigate}
          ></sfx-metadata-panel>
        </div>
      </div>
    `
  : nothing}
```

**Event flow (matching existing patterns):**
```typescript
// Close on backdrop click (existing pattern):
private _onMetadataBackdropClick = (e: MouseEvent) => {
  if (e.target === e.currentTarget) {
    this._metadataFileId = null;
    this._metadataBulkMode = false;
  }
};

// Open metadata panel — single file (from file-item click):
private _onFileMetadataEdit = (e: CustomEvent<{ fileId: string }>) => {
  this._metadataFileId = e.detail.fileId;
  this._metadataBulkMode = false;
};

// Open metadata panel — bulk mode (from "Fill Metadata" button):
private _onFillMetadata = () => {
  // If metadataConfig is set → open built-in panel
  if (this.config?.metadataConfig) {
    this._metadataBulkMode = true;
    this._metadataFileId = null;
  }
  // Always fire callback for backward compat
  const files = [...this._store.getState().files.values()]
    .filter(f => SfxUploader._MODIFIABLE_STATUSES.has(f.status));
  this._dispatchPublic(PublicEvents.FILL_METADATA, { files });
  this.config?.callbacks?.onFillMetadata?.(files);
};

// Save handler — update store from panel:
private _onMetadataSave = (e: CustomEvent<{ fileId: string; meta: Record<string, unknown> }>) => {
  const { fileId, meta } = e.detail;
  this._store.updateFile(fileId, { meta });
};
```

#### Panel component internal layout

```
sfx-metadata-panel (LitElement):
  :host {
    display: flex; flex-direction: column; height: 100%;
    font-family: var(--sfx-up-font); color: var(--sfx-up-text); background: var(--sfx-up-bg);
  }

  Header (flex-shrink: 0, border-bottom):
    - Back/close button (32px × 32px)
    - File thumbnail + name (or "Fill Metadata (N files)" for bulk)
    - Close button

  Progress bar (if enforcing, flex-shrink: 0, border-bottom):
    - "X/Y required fields filled"
    - Linear progress indicator

  Content (flex: 1, overflow-y: auto, padding: 8px):
    - sfx-metadata-form component
    - Scrollable area for all field groups

  Footer (flex-shrink: 0, border-top, padding: 12px):
    - [◀ Prev] [Next ▶] navigation (single file mode)
    - [Save] or [Apply to All Files] button
```

### Dropdown/Select Component Pattern (LitElement)

Since we don't have Radix UI or cmdk in LitElement, we need to build lightweight equivalents. The pattern for select/combobox:

#### Select dropdown (for select-one, boolean)

```typescript
// Custom LitElement dropdown — positioned via popover API or absolute positioning
class MetadataSelect extends LitElement {
  @property() options: { id: string; label: string; value: string }[] = [];
  @property() value: string = '';
  @property() placeholder: string = '';
  @property({ type: Boolean }) searchable = false;  // true for select-one, false for boolean
  @property({ type: Boolean }) open = false;
  @state() private _search = '';

  // Filtered options (for searchable mode)
  get filteredOptions() {
    if (!this._search) return this.options;
    return this.options.filter(o =>
      o.label.toLowerCase().includes(this._search.toLowerCase())
    );
  }

  // Positioning: use CSS anchor positioning or fallback to absolute
  // The dropdown renders below the trigger button
  // Width matches trigger width
  // Max-height with overflow scroll
  // Z-index: high enough to layer above panel content

  render() {
    return html`
      <button class="select-trigger" @click=${() => this.open = !this.open}>
        ${this.value ? this.options.find(o => o.value === this.value)?.label : this.placeholder}
        <svg><!-- chevron --></svg>
      </button>
      ${this.open ? html`
        <div class="select-dropdown">
          ${this.searchable ? html`
            <input class="select-search"
              .value=${this._search}
              @input=${(e) => this._search = e.target.value}
              placeholder="Search..."
            />
          ` : nothing}
          <div class="select-options">
            ${this.filteredOptions.map(option => html`
              <button class="select-option ${option.value === this.value ? 'selected' : ''}"
                @click=${() => this._selectOption(option)}>
                ${option.label}
              </button>
            `)}
            ${this.filteredOptions.length === 0 ? html`
              <div class="select-empty">No results</div>
            ` : nothing}
          </div>
        </div>
      ` : nothing}
    `;
  }
}
```

#### Multi-select with chips (for select-multi)

```typescript
// Extends select pattern with:
// - Multiple selection (checkbox-style or toggle on click)
// - Selected values displayed as removable chips/pills above dropdown
// - Dropdown stays open on selection (doesn't close)
// - Close on outside click or Escape
// - On close: emit field-blur
```

#### Tags field with autocomplete

```typescript
// Most complex component — combines:
// 1. Pills for selected tags (removable)
// 2. Text input for search
// 3. Dropdown with:
//    - Autocomplete results (debounced 200ms API call)
//    - possible_values from schema (filtered to exclude selected)
//    - "Create '{query}'" option
//    - Loading skeleton
//    - "No results" message
// 4. Debounce: setTimeout-based, 200ms
// 5. Dedup: isSameTag (case-insensitive trimmed label compare)
```

#### Key CSS for dropdowns

```css
.select-dropdown {
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  z-index: 10;  /* within panel context */
  background: var(--sfx-up-bg, #fff);
  border: 1px solid var(--sfx-up-border, #e2e8f0);
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  max-height: 200px;
  overflow-y: auto;
  margin-top: 4px;
}
.select-option {
  padding: 8px 12px;
  cursor: pointer;
  width: 100%;
  text-align: left;
}
.select-option:hover { background: var(--sfx-up-hover, #f1f5f9); }
.select-option.selected { background: var(--sfx-up-primary-light, #eff6ff); }
```

---

## Schema Types (mirroring Filerobot API)

```typescript
/** Raw from API: project.data.metadata.model[] */
interface MetadataModel {
  applies_to: 'FILES' | 'DIRECTORIES' | 'PRODUCTS';
  groups: MetadataGroup[];
}

interface MetadataGroup {
  uuid: string;
  name: string;
  isRoot: boolean;             // true for built-in fields (title, description)
  ckey?: string;
  fields: MetadataField[];
}

interface MetadataField {
  key: string;                 // API field key (used in file.meta)
  ckey: string;                // Custom key (autocomplete uses `_${ckey}`)
  uuid: string;
  title: string;               // Display label
  type: MetadataFieldType;
  placeholder?: string;
  hint?: string;
  required: 0 | 1;
  possible_values: PossibleValue[];
  regional_variants_group_uuid: string | null;
  validation?: string;         // Custom regex pattern
  permissions: MetadataFieldPermission[];
  model?: Record<string, unknown>;
  mapping?: string;
  icon?: string;
  hide?: boolean;              // If true, field is hidden
}

type MetadataFieldType =
  | 'text' | 'textarea'
  | 'select-one' | 'select-multi'      // Note: hyphenated in TYPE_IDS
  | 'boolean' | 'date'
  | 'numeric' | 'decimal2'
  | 'geopoint'                          // Note: no hyphen
  | 'integer-list'
  | 'tags'                              // supertags
  | 'attachment-uri';

interface PossibleValue {
  api_value: string;
  internal_unique_value: string;  // Used as option value + for filtering
  label: string;                  // Display label
}

interface MetadataFieldPermission {
  // Permission rules for who can edit
}

/** Parsed and cached for internal use */
interface MetadataSchema {
  groups: MetadataGroup[];                    // Filtered to FILES only
  fields: MetadataField[];                    // Flattened list of all fields
  fieldsByKey: Map<string, MetadataField>;    // Quick lookup by field.key
  forceFillingOnUpload: boolean;              // from metadata.store
  regionalVariantsGroups: RegionalVariantsGroup[];
  language: string;                           // Resolved language
}

interface RegionalVariantsGroup {
  uuid: string;
  label: string;
  type: 'LANGUAGES' | 'CURRENCIES' | 'CUSTOM';
  icon?: string;
  isRoot: boolean;
  variants: RegionalVariant[];
}

interface RegionalVariant {
  internal_unique_value: string;
  api_value: string;             // e.g., 'en', 'fr'
  label: string;                 // e.g., 'English', 'Français'
}

/** Tag option for tags field */
interface TagOption {
  sid?: string;                  // System ID (from autocomplete API)
  value: string;                 // Normalized value (hyphens)
  label: string;                 // Display label
}

/** Geo point value in form */
interface GeoPoint {
  latitude: string;
  longitude: string;
}
```

---

## Data Flow

### 1. Schema Loading

```
UploaderConfig has metadataConfig
  → sfx-uploader connectedCallback / config setter
  → lazy import('./metadata/index.ts')       // loads chunk
  → SchemaService.fetchSchema(auth)
      → GET {apiBase}/settings               // or appropriate endpoint
      → Response includes metadata.model[] + metadata.store
      → schema-parser.ts:
          → Filter model for applies_to === 'FILES'
          → Flatten groups[].fields[] → fields array
          → Build fieldsByKey Map
          → Read forceFillingOnUpload from metadata.store
          → Read regionalVariantsGroups from metadata.store
          → If metadataConfig.fields is string[]:
              filter fields/groups to only include matching ckeys
          → If field.hide === true: exclude from fields
      → Cache parsed MetadataSchema in memory (singleton)
  → showFillMetadata auto-set to true (if not explicitly false)
  → If forceFillingOnUpload || enforceRequiredBeforeUpload:
      enable upload blocking logic
```

### 2. Per-File Metadata Editing

```
User clicks file item (pencil icon) or clicks on file when metadataConfig is set
  → metadata-panel opens as slide-over from right
  → Panel header: file thumbnail + name + close button + prev/next nav
  → Panel body: metadata-form renders:
      → For each group in schema.groups:
          → Collapsible section with group.name header
          → For each visible field in group.fields:
              → metadata-field renders in VIEW mode:
                  → Label (left): field.title + required indicator (*) + hint tooltip
                  → Value (right): metadata-field-view displays formatted value
                      → boolean: ✓ / ✗ icon or dash
                      → date: formatted pretty date
                      → numeric/decimal2: locale-formatted number
                      → arrays (multi-select/tags): joined with ', '
                      → select_one: label from possible_values lookup
                      → attachment-uri: clickable link
                      → empty: '—' dash
              → On click (if editable): switches to EDIT mode
                  → metadata-field-edit dispatches to type component
                  → Type component auto-focuses
                  → On blur: validate → transform → update store
                  → On Escape: revert to original value
                  → On Enter: same as blur (for text fields)
                  → For select/boolean/tags: auto-submit on selection (no explicit save button)
  → Panel footer: "Save" button (single file)

  → Store update on field save:
      value = mapValueToBackend(field, formValue, language)
      store.updateFile(fileId, { meta: { ...file.meta, [field.key]: value } })
```

### 3. Bulk "Fill Metadata" Flow

```
User clicks "Fill Metadata" in actions bar
  → metadata-panel opens in bulk mode (no specific file)
  → Form shows all fields with empty values
  → User fills desired fields (only fills what they want)
  → "Apply to All Files" button → for each file with _MODIFIABLE_STATUSES:
      → Deep merge: file.meta = deepMergeMeta(file.meta, bulkMeta)
      → Tags: deduplicated merge
  → Panel closes
  → File items show metadata indicator badge
  → onFillMetadata callback fires (backward compat)
```

### 4. Upload-Time Enforcement

```
Upload button state computed reactively:
  → If enforceRequiredBeforeUpload === true OR (=== 'auto' AND schema.forceFillingOnUpload):
      → Compute: missingFields = getFilesWithMissingRequired(files, schema, config)
      → hasNotFilledRequired = Object.values(missingFields).some(arr => arr.length > 0)
      → If hasNotFilledRequired:
          → Upload button: disabled + tooltip "Fill required metadata for N files"
          → "Fill Metadata" button: highlighted (primary variant) to draw attention
          → File items with missing required: warning badge (orange dot)
      → Else: upload button enabled normally

  → Upload proceeds: metadata already in file.meta
      → existing xhr-upload.ts packages into FormData (no change needed)
```

### 5. File Item Metadata Indicator

```
metadata-field-indicator in file-item.ts:
  → If metadataConfig is set:
      → Count non-empty meta values: filled = Object.values(file.meta).filter(v => !isEmpty(v)).length
      → If filled > 0: show blue dot badge (bottom-left)
      → If enforcing AND file has missing required fields: show orange/red dot badge
      → Show pencil (✎) icon in filename row → click opens metadata panel
  → If metadataConfig is NOT set: no change to file-item
```

---

## API Endpoints Used

| Purpose | Method | Endpoint | Notes |
|---------|--------|----------|-------|
| Fetch metadata schema | GET | `{apiBase}/settings` | Returns `metadata.model[]`, `metadata.store` |
| Tags autocomplete | GET | `{apiBase}/metadata/autocomplete?q={query}&meta_key=_{ckey}` | Note: underscore prefix on meta_key! Returns `{ tags: [{ tag }] }` |
| Update file meta (post-upload) | PUT/PATCH | `{apiBase}/v5/file/{uuid}/meta` | Payload: `{ meta: Record<string, any> }` |
| Update file tags (post-upload) | PUT | `{apiBase}/v5/file/{uuid}/tags` | Payload: `{ lang, existingTags, newTags }` |

Pre-upload metadata: sent with upload payload as FormData (no extra API calls).

Auth headers: same as uploads — resolved by `auth.service.ts`.

---

## Field Type Implementation Reference

### Common Interface (all field components)

```typescript
// LitElement properties — all field components receive these
interface MetadataFieldProps {
  field: MetadataField;             // Schema definition
  value: unknown;                   // Current value (already mapped from backend)
  disabled?: boolean;
}

// All field components emit these CustomEvents:
'field-change': { key: string; value: unknown }    // Live value change (for preview)
'field-blur':   { key: string; value: unknown }    // Focus lost → trigger validation + save
'field-escape': { key: string }                    // Escape pressed → revert to original

// Fields that auto-submit (no separate save button needed):
// select-one, boolean, tags, multi-select
// These emit 'field-blur' immediately on selection/close.

// Fields that need explicit save (show save/cancel buttons):
// text, textarea, numeric, decimal2, date, geopoint, attachment-uri
```

### Per-Type Implementation Details

**text / attachment-uri** (`text-field.ts`):
```
<input type="text" autoFocus>
- Emit field-blur on blur
- Emit field-escape on Escape keydown
- attachment-uri: same component, just different validation
```

**textarea** (`textarea-field.ts`):
```
<textarea autoFocus>
- Auto-resize: adjust height to content on input
- Emit field-blur on blur
- Emit field-escape on Escape keydown
```

**select-one** (`select-field.ts`):
```
Custom dropdown component:
- Trigger button showing selected label (or placeholder)
- Popover dropdown with:
  - Search/filter input at top
  - Scrollable list of options from useMetadataSortedPossibleValues()
  - Options: { id: internal_unique_value, label: translated_label, value: internal_unique_value }
- Auto-opens on mount (defaultOpen: true)
- Auto-focuses trigger
- On option select: update value + close dropdown
- On close: emit field-blur (with setTimeout(0) for close race condition)
- On Escape: emit field-escape
- Empty value → null (mapValueToBackend handles this)
```

**multi-select** (`multi-select-field.ts`):
```
Custom dropdown + chips:
- Trigger area showing selected values as removable chips/pills
- Popover dropdown with:
  - Search/filter input
  - Checkable list of options
  - Selected options shown as checked
- Same auto-open + focus behavior
- On popover close: emit field-blur (onCloseAutoFocus)
- Chips: click X to remove from selection
- Value: string[] of internal_unique_values
```

**tags** (`tags-field.ts`):
```
Pills + autocomplete dropdown:
- Input area: pills for selected tags + text input for search
- Popover dropdown:
  - Search results from tags-autocomplete.ts (debounced 200ms)
  - possible_values from schema (filtered to exclude selected)
  - "Create '{query}'" option when:
    - searchQuery exists
    - NOT already selected (isSameTag check)
    - NOT in possible_values or autocomplete results
    - NOT loading
  - Loading skeleton while fetching
  - "No results" when search returns empty
- Add tag: click option → append to array, clear search
- Remove tag: click X on pill → filter from array
- Create new: normalizeLabel + normalizeValue → append
- Autocomplete: GET /metadata/autocomplete?q={query}&meta_key=_{field.ckey}
  - Response: { tags: [{ tag: string }] }
  - Debounce: 200ms timer-based
  - No caching (always fresh)
- Tag comparison: isSameTag (case-insensitive trimmed labels)
- Emit field-blur when popover closes
```

**boolean** (`boolean-field.ts`):
```
<select> / custom dropdown (no search, simpler than select-one):
- 3 options: True / False / None (values: 'true', 'false', 'null')
- Auto-opens on mount
- On select: emit field-blur immediately
- Value stored as string in form, transformed to boolean/null on save
```

**numeric** (`number-field.ts`):
```
<input type="number" step="1">
- Integer only
- Range validation: ±1,999,999,999
- Emit field-blur on blur
- Emit field-escape on Escape
```

**decimal2** (`number-field.ts` — shared with numeric):
```
<input type="number" step="0.01">
- Max 2 decimal places
- Range: ±9,999,999,999.99
- Validation: /^\d*\.?\d{0,2}$/ on input
- Same blur/escape behavior
```

**date** (`date-field.ts`):
```
<input type="date">
- Native browser date picker
- Value: "YYYY-MM-DD" string
- Emit field-blur on blur / date selection
- Emit field-escape on Escape
```

**geopoint** (`geo-point-field.ts`):
```
Two-column layout:
  [Latitude: <input type="number" step="any">]  [Longitude: <input type="number" step="any">]
- Both-or-neither validation: if one filled, other required
- Lat range: [-90, 90], Lng range: [-180, 180]
- Shared blur handler: ONLY emit field-blur when focus leaves BOTH fields
  (check if relatedTarget is the sibling input — if so, don't submit yet)
- Value in form: { latitude: string, longitude: string }
- Value to backend: "(lat,lng)" string
- Value from backend: parseGeoPoint("(lat,lng)") → { latitude, longitude }
```

---

## Validation Reference

Lightweight inline validation — no Zod dependency. Each function returns error string or null:

```typescript
function validateField(
  field: MetadataField,
  value: unknown,
  config?: MetadataConfig
): string | null {
  const required = config?.requiredFields
    ? config.requiredFields.includes(field.ckey)
    : field.required === 1;

  // Required check (matching v5's isAssetHasMetadataValue logic)
  if (required && isEmpty(value)) {
    return `${field.title || field.key} is required`;
  }

  // Skip further validation if empty and not required
  if (isEmpty(value)) return null;

  switch (field.type) {
    case 'numeric': {
      const n = Number(value);
      if (isNaN(n)) return 'Must be a number';
      if (n > 1_999_999_999 || n < -1_999_999_999) return 'Value out of range';
      if (!Number.isInteger(n)) return 'Must be an integer';
      break;
    }
    case 'decimal2': {
      const n = Number(value);
      if (isNaN(n)) return 'Must be a number';
      if (n > 9_999_999_999.99 || n < -9_999_999_999.99) return 'Value out of range';
      if (!/^\d*\.?\d{0,2}$/.test(String(value))) return 'Maximum 2 decimal places';
      break;
    }
    case 'geopoint': {
      const { latitude, longitude } = value as GeoPoint;
      const hasLat = latitude !== '' && latitude != null;
      const hasLng = longitude !== '' && longitude != null;
      if (hasLat !== hasLng) return 'Both latitude and longitude are required';
      if (hasLat) {
        const lat = Number(latitude), lng = Number(longitude);
        if (lat < -90 || lat > 90) return 'Latitude must be between -90 and 90';
        if (lng < -180 || lng > 180) return 'Longitude must be between -180 and 180';
      }
      break;
    }
    case 'attachment-uri': {
      try { new URL(value as string); } catch { return 'Invalid URI'; }
      break;
    }
  }

  // Custom regex from schema
  if (field.validation && typeof value === 'string') {
    try {
      if (!new RegExp(field.validation).test(value)) {
        return `Does not match required pattern`;
      }
    } catch { /* invalid regex in schema — skip */ }
  }

  return null;
}

// isEmpty — matches v5's isAssetHasMetadataValue logic (inverted)
function isEmpty(value: unknown): boolean {
  if (value == null) return true;
  if (Array.isArray(value)) return value.length === 0;
  if (typeof value === 'string') return value.length === 0;
  if (typeof value === 'object') {
    return Object.keys(value).filter(k => value[k] != null && value[k] !== '').length === 0;
  }
  return !value;
}
```

---

## Value Transformation Reference

### To Backend (before storing in `file.meta`)

```typescript
function mapValueToBackend(
  field: MetadataField,
  value: unknown,
  file?: UploadFile,
  language?: string,
): unknown {
  switch (field.type) {
    case 'geopoint': {
      const { latitude, longitude } = value as GeoPoint;
      if (latitude == null || longitude == null || latitude === '' || longitude === '')
        return null;
      return `(${latitude},${longitude})`;
    }
    case 'boolean':
      if (value === '' || value === 'null') return null;
      return value === 'true';
    case 'date':
      if (!value) return null;
      if (value instanceof Date) {
        const y = value.getFullYear();
        const m = String(value.getMonth() + 1).padStart(2, '0');
        const d = String(value.getDate()).padStart(2, '0');
        return `${y}-${m}-${d}`;
      }
      return value;
    case 'tags':
      return (value as TagOption[]).map(t => t.label);
    case 'select-one':
      return value === '' ? null : value;
    default:
      return value;
  }
  // Regional variants (if field.regional_variants_group_uuid):
  // result = {
  //   ...file?.meta?.[field.key],  // preserve other language values
  //   [language]: transformedValue,
  // }
}
```

### From Backend (when reading file.meta to populate form)

```typescript
function mapValueFromBackend(
  field: MetadataField,
  rawValue: unknown,
  language?: string,
): unknown {
  // Regional variant extraction first
  if (field.regional_variants_group_uuid && typeof rawValue === 'object' && rawValue !== null) {
    rawValue = (rawValue as Record<string, unknown>)[language ?? 'en'] ?? '';
  }

  switch (field.type) {
    case 'geopoint':
      return parseGeoPoint(rawValue as string);
    case 'boolean':
      if (rawValue === true) return 'true';
      if (rawValue === false) return 'false';
      return 'null';
    case 'date':
      return typeof rawValue === 'string' && rawValue ? new Date(rawValue) : null;
    case 'decimal2':
      return rawValue != null ? String(rawValue) : '';
    case 'tags':
      if (!Array.isArray(rawValue)) return [];
      return rawValue.map(t =>
        typeof t === 'string' ? { value: t, label: t } : t
      );
    case 'select-multi':
      return rawValue || [];
    default:
      return rawValue ?? '';
  }
}

function parseGeoPoint(value: unknown): GeoPoint {
  if (typeof value !== 'string' || !value) return { latitude: '', longitude: '' };
  const match = value.match(/\(([^)]+)\)/);
  if (!match) return { latitude: '', longitude: '' };
  const [lat, lng] = match[1].split(',');
  return { latitude: lat?.trim() ?? '', longitude: lng?.trim() ?? '' };
}
```

---

## Store Changes

### UploadFile — no changes needed

The existing `meta: Record<string, unknown>` and `tags: string[]` are sufficient.

### UploadFile.tags format consideration

The current plugin stores tags as `string[]`. V5 stores them as `Record<string, TagOption[]>` (language-keyed). For the FormData upload, v5 sends:
```json
{ "lang": "en", "new_tags": ["tag1", "tag2"] }
```

The current plugin sends tags inside `info[files[]]`. We need to align with what the API expects. Two options:
1. Keep `tags: string[]` and send as-is in existing format (simplest)
2. Change to language-keyed format matching v5

**Recommendation**: Keep `string[]` for now, add language wrapping only in the FormData construction layer if needed.

### New Store Helpers (in `metadata/required-fields.ts`)

```typescript
// Matches v5's isAssetHasMetadataValue logic exactly
function isAssetHasMetadataValue(value: unknown): boolean {
  if (Array.isArray(value)) return value.length > 0;
  if (typeof value === 'object' && value !== null) {
    return Object.keys(value)
      .filter(k => value[k] != null && value[k] !== '')
      .length > 0;
  }
  if (typeof value === 'string') return value.length > 0;
  return !!value;
}

// Matches v5's getMetadataEmptyAssets
function getFilesWithMissingRequired(
  files: Map<string, UploadFile>,
  schema: MetadataSchema,
  config?: MetadataConfig,
): Record<string, UploadFile[]> {
  const requiredFields = schema.fields.filter(f => {
    if (config?.requiredFields) return config.requiredFields.includes(f.ckey);
    return f.required === 1;
  });

  const modifiable = [...files.values()]
    .filter(f => ['idle', 'queued', 'rejected'].includes(f.status));

  return requiredFields.reduce((acc, field) => {
    const missing = modifiable.filter(
      file => !isAssetHasMetadataValue(file.meta[field.key])
    );
    if (missing.length > 0) acc[field.key] = missing;
    return acc;
  }, {} as Record<string, UploadFile[]>);
}

// Deep merge for bulk apply
function deepMergeMeta(
  existing: Record<string, unknown>,
  incoming: Record<string, unknown>,
): Record<string, unknown> {
  const result = { ...existing };
  for (const [key, value] of Object.entries(incoming)) {
    if (value === undefined || value === null || value === '') continue;
    if (Array.isArray(value) && Array.isArray(existing[key])) {
      // Deduplicate for tags/multi-select
      const set = new Set((existing[key] as unknown[]).map(v =>
        typeof v === 'object' ? JSON.stringify(v) : v
      ));
      const merged = [...(existing[key] as unknown[])];
      for (const item of value) {
        const key = typeof item === 'object' ? JSON.stringify(item) : item;
        if (!set.has(key)) { merged.push(item); set.add(key); }
      }
      result[key] = merged;
    } else {
      result[key] = value;
    }
  }
  return result;
}
```

---

## UI Design

### Metadata Panel (slide-over)

```
┌─────────────────────────────────────────┐
│  ← filename.jpg                      ✕  │  ← Header: back arrow, filename, close
├─────────────────────────────────────────┤
│  ▓▓▓▓▓▓▓▓▓▓▓░░░░ 3/5 required filled   │  ← Progress bar (only if enforcing)
├─────────────────────────────────────────┤
│                                         │
│  ▼ Default Fields                       │  ← Collapsible group (root, open by default)
│  ┌─────────────────────────────────┐    │
│  │ Title                           │    │
│  │ [Enter title...              ]  │    │  ← Click to edit, blur to save
│  ├─────────────────────────────────┤    │
│  │ Description                     │    │
│  │ [Enter description...        ]  │    │
│  │ [                            ]  │    │
│  └─────────────────────────────────┘    │
│                                         │
│  ▼ Custom Group Name                    │  ← Collapsible group (custom)
│  ┌─────────────────────────────────┐    │
│  │ Category *        [Required]    │    │  ← Required indicator
│  │ [Select...              ▾]     │    │  ← Auto-opens dropdown
│  ├─────────────────────────────────┤    │
│  │ Tags                           │    │
│  │ [pill1] [pill2] [type...]     │    │
│  │  ┌─── Autocomplete ────────┐  │    │
│  │  │ suggestion 1            │  │    │
│  │  │ suggestion 2            │  │    │
│  │  │ + Create "new tag"      │  │    │  ← Only when query not in results
│  │  └─────────────────────────┘  │    │
│  ├─────────────────────────────────┤    │
│  │ Active           True ✓        │    │  ← Boolean: icon display in view mode
│  ├─────────────────────────────────┤    │
│  │ Price            12.50          │    │  ← Decimal: locale-formatted in view
│  ├─────────────────────────────────┤    │
│  │ Date             2024-03-15     │    │  ← Date: formatted pretty
│  ├─────────────────────────────────┤    │
│  │ Location         (48.8, 2.3)   │    │  ← GeoPoint: formatted coords
│  └─────────────────────────────────┘    │
│                                         │
├─────────────────────────────────────────┤
│   [◀ Prev]            [Next ▶]   [Save] │  ← Footer: file nav + save
└─────────────────────────────────────────┘

Bulk mode: same layout but footer says [Apply to All Files]
           and header says "Fill Metadata (N files)"
```

### File Item Enhancement

```
┌──────────────────────┐
│ ✓                    │  ← done badge (existing)
│                      │
│    [preview image]   │
│                      │
│  ●                   │  ← metadata indicator: blue=has meta, orange=missing required
│  jpg · 2.5 MB       │
│  filename.jpg    ✎   │  ← pencil icon opens metadata panel
└──────────────────────┘
```

### Actions Bar Enhancement

```
┌───────────────────────────────────────────────────────────────┐
│ [📝 Fill Metadata]              [Clear] [Add more] [Upload ▶] │
│                                                                │
│  ⚠ 3 files missing required metadata                          │  ← Warning when enforcing
└───────────────────────────────────────────────────────────────┘

When enforcing + files missing required:
  - "Fill Metadata" button: primary variant (blue bg) to draw attention
  - Upload button: disabled + tooltip "Fill required metadata for N files"
```

---

## What We Skip (vs Filerobot v5)

| Feature | Reason to skip | Can add later? |
|---------|---------------|----------------|
| Field dependencies (cascading show/hide/require/allow_values/set_values) | Complex state machine with dependency resolution. Rarely critical during upload flow. | Yes — add dependency fetching + option filtering per field |
| Regional variants UI (language/currency switcher) | Upload usually single-language. Config has `language` option for basics. | Yes — add regional filter dropdown + variant value wrapping |
| Product metadata fields (ref, position) | Product management is Hub-only concern | Yes — add `showProductFields` config option |
| AI-powered description (`POST /process/describe`) | Nice-to-have, not core upload functionality | Yes — add button to textarea field |
| Field label translations (`GET /v5/meta/model/fields/i18n`) | Labels from schema sufficient; plugin has no i18n system | Yes — fetch translations and override field.title |
| Options translations (`GET /v5/meta/model/fields/options/i18n`) | Same as above; internal_unique_value labels usually sufficient | Yes — fetch and apply to possible_values |
| Embedded metadata mapping (XMP/EXIF) | Post-processing concern, not upload-time | No architectural blocker |
| `integer_list` field type | Disabled/internal-only in v5 | Trivial to add if needed |
| Metadata adapter (M0→M1 migration) | New projects use M1_EDGY format; legacy migration is Hub concern | Skip — assume M1 format |
| Bulk API (`/bulk/prepare` + `/bulk/apply`) | Not needed — bulk fill writes to local store, not API | No need |

Any of these can be added later without architectural changes.

---

## Size Estimate

| Component | Est. Minified + Gzipped |
|-----------|------------------------|
| Schema service + parser + types | ~3 KB |
| Value transforms + validation + required-fields | ~2 KB |
| Metadata panel + form + field wrapper + field view | ~5 KB |
| Field components (text, textarea, select, multi-select, boolean, number, date, geo) | ~6-8 KB |
| Tags field + autocomplete + tag utils | ~3-4 KB |
| Styles | ~1-2 KB |
| **Total metadata chunk** | **~20-24 KB** |

For comparison:
- Current `provider-browser` chunk: ~31 KB
- Lit framework (externalized): ~17 KB
- Zero cost if `metadataConfig` is not provided — chunk not loaded

---

## Implementation Phases

### Phase 1: Schema & Core Infrastructure
1. Create `src/metadata/` directory structure
2. `schema.types.ts` — all type definitions
3. `schema-service.ts` — fetch schema from API, handle auth headers
4. `schema-parser.ts` — parse API response, filter by applies_to=FILES, filter by config.fields, build indexes
5. `value-transforms.ts` — `mapValueToBackend` / `mapValueFromBackend` for ALL types
6. `validation.ts` — `validateField` function with all type-specific rules
7. `required-fields.ts` — `isAssetHasMetadataValue`, `getFilesWithMissingRequired`, `deepMergeMeta`
8. `tag-utils.ts` — `isSameTag`, `normalizeLabel`, `normalizeValue`, `createTag`
9. Wire lazy loading in `sfx-uploader.ts` + update Vite manualChunks

### Phase 2: Panel & Form Skeleton
1. `metadata-panel.ts` — slide-over container (reuse provider-browser pattern)
2. `metadata-form.ts` — renders collapsible groups → fields from schema
3. `metadata-field.ts` — label + view/edit wrapper with click-to-edit
4. `metadata-field-view.ts` — view-mode value display (all type formatting)
5. `metadata-field-edit.ts` — edit-mode dispatcher (type → component switch)
6. `metadata.styles.ts` — shared styles
7. Wire panel open/close in sfx-uploader.ts (file click + Fill Metadata button)

### Phase 3: Field Types (P0 — text, select, tags)
1. `text-field.ts` — text + attachment-uri
2. `textarea-field.ts` — auto-resize textarea
3. `select-field.ts` — dropdown with search, auto-open, option sorting
4. `multi-select-field.ts` — dropdown + chips, auto-open
5. `tags-field.ts` — pills + autocomplete dropdown + create new
6. `tags-autocomplete.ts` — debounced API fetch (200ms)

### Phase 4: Field Types (P1 — boolean, number, date, geo)
1. `boolean-field.ts` — True/False/None select
2. `number-field.ts` — numeric (integer) + decimal2 (2dp), shared component
3. `date-field.ts` — native date input
4. `geo-point-field.ts` — paired lat/lng with shared blur logic

### Phase 5: Upload Enforcement & Bulk
1. Required field enforcement — disable upload button, show warning
2. Missing-metadata warning in actions-bar
3. Progress bar in metadata panel header (X/Y required fields filled)
4. Bulk metadata form (apply to all files)
5. Deep merge logic for bulk apply
6. File item metadata indicator badge + pencil icon
7. `metadataConfig.defaults` — apply to new files on add

### Phase 6: Polish
1. Prev/Next file navigation in panel
2. Keyboard: Tab between fields, Enter to submit, Escape to cancel
3. Loading states (schema fetch spinner, tag autocomplete skeleton)
4. Error handling (schema fetch failure → fallback to callback-only mode)
5. Smooth slide-over transitions (CSS transitions)
6. Tests (unit for validation/transforms/tag-utils, integration for form flow)

---

## Resolved Questions

1. **FormData format**: **No change needed.** The current plugin sends `info[files[]]` with nested `{ name, type, meta, tags }` — the Filerobot API accepts this. V5 uses separate `meta[files[]]` / `tags[files[]]` fields, but both formats work. Keep the simpler nested format.

2. **Tags format**: **Keep `string[]`.** The plugin's `tags: string[]` sent inside `info.tags` works with the API. No need to switch to v5's language-keyed `Record<string, TagOption[]>` format. If language-keyed tags are needed later, wrap at the FormData layer only.

3. **Backward compatibility**: When `metadataConfig` is set, `showFillMetadata` auto-enabled and "Fill Metadata" opens the built-in panel. The `onFillMetadata` callback still fires after bulk apply. Without `metadataConfig`, the existing callback-only behavior is preserved.

4. **xhr-upload.ts**: **No changes needed.** The existing FormData construction already reads `file.meta` and `file.tags` and sends them correctly. Metadata editing only writes to the store — the upload path remains unchanged.

## Open Questions (All Resolved)

1. **Schema endpoint** — **RESOLVED**: Uses `GET https://hub.scaleflex.com/api/project/{projectUuid}` with `X-Filerobot-Key` header. Response at `project.data.metadata.model[]` and `project.data.metadata.store`. The `projectUuid` is required in `metadataConfig` — the integrating app provides it from its session data (`session_company.projects_roles[].project_uuid`). The Hub API base URL is configurable via `metadataConfig.hubApiBase` for dev/staging environments.

2. **Post-upload metadata editing** — **DEFERRED**: MVP is pre-upload only. The form writes to the local store; metadata is sent with the upload FormData. Post-upload `PUT /v5/file/{uuid}/meta` can be added later without architectural changes.

3. **File navigation in panel** — **IMPLEMENTED**: Prev/Next buttons are included in the panel footer for single-file mode. Navigation saves current file's meta before switching.
