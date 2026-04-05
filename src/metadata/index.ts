// Metadata module — lazy entry point
// Re-export everything needed by the parent sfx-uploader.ts

export { fetchMetadataSchema, clearSchemaCache } from './schema/schema-service';
export { parseMetadataSchema } from './schema/schema-parser';
export { mapValueToBackend, mapValueFromBackend } from './schema/value-transforms';
export { validateField, isEmpty } from './schema/validation';
export { isAssetHasMetadataValue, getFilesWithMissingRequired, deepMergeMeta } from './schema/required-fields';
export { createTagsAutocomplete } from './tags/tags-autocomplete';

export type {
  MetadataSchema,
  MetadataConfig,
  MetadataField,
  MetadataGroup,
  RawMetadata,
  TagOption,
  GeoPoint,
} from './schema/schema.types';

// Import infrastructure components to register custom elements (side effect)
import './metadata-form';
import './metadata-field';

// Import field type components to register custom elements (side effect)
import './fields/text-field';
import './fields/textarea-field';
import './fields/select-field';
import './fields/multi-select-field';
import './fields/tags-field';
import './fields/boolean-field';
import './fields/number-field';
import './fields/date-field';
import './fields/geo-point-field';

// Import dispatcher components (side effect)
import './metadata-field-edit';
import './metadata-field-view';

// Bulk metadata modal
import './bulk/index';
export { SfxBulkMetadataModal } from './bulk/index';
