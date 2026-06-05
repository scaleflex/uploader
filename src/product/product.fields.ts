import type {
  MetadataField,
  MetadataGroup,
  MetadataSchema,
} from '../metadata/schema/schema.types';
import type { TFunction } from '../store/store.types';
import type { ProductFieldKey } from './product.types';

export type { ProductFieldKey };

/**
 * Synthetic MetadataField keys for the bulk-edit sidebar.
 * Using dotted prefix `product.` lets us route staged values through the
 * existing `Map<fieldKey, value>` staging structure while still distinguishing
 * product fields from real metadata at save time.
 */
export const PRODUCT_REF_FIELD_KEY = 'product.ref';
export const PRODUCT_POSITION_FIELD_KEY = 'product.position';
export const PRODUCT_GROUP_UUID = '__product__';

const PRODUCT_FIELD_KEYS = new Set([
  PRODUCT_REF_FIELD_KEY,
  PRODUCT_POSITION_FIELD_KEY,
]);

export function isProductFieldKey(key: string): boolean {
  return PRODUCT_FIELD_KEYS.has(key);
}

/** Map a synthetic bulk field key (`product.ref`) to the `Product` key (`ref`). */
export function productKeyOf(fieldKey: string): ProductFieldKey | null {
  if (fieldKey === PRODUCT_REF_FIELD_KEY) return 'ref';
  if (fieldKey === PRODUCT_POSITION_FIELD_KEY) return 'position';
  return null;
}

/**
 * Build the synthetic `MetadataField[]` for product ref + position. Used by the
 * bulk-edit sidebar so product values can be applied through the same
 * op-bar / table flow as real metadata. Titles are localized.
 */
export function makeProductFields(t: TFunction): MetadataField[] {
  return [
    {
      key: PRODUCT_REF_FIELD_KEY,
      ckey: PRODUCT_REF_FIELD_KEY,
      uuid: 'product-ref',
      title: t('productRefLabel', 'Product reference'),
      type: 'text',
      placeholder: t('productRefPlaceholder', 'e.g. SKU-12345'),
      required: 0,
      possible_values: [],
      regional_variants_group_uuid: null,
      permissions: [],
    },
    {
      key: PRODUCT_POSITION_FIELD_KEY,
      ckey: PRODUCT_POSITION_FIELD_KEY,
      uuid: 'product-position',
      title: t('productPositionLabel', 'Position'),
      type: 'numeric',
      placeholder: t('productPositionPlaceholder', '0'),
      required: 0,
      possible_values: [],
      regional_variants_group_uuid: null,
      permissions: [],
    },
  ];
}

/** Wraps `makeProductFields()` in a sidebar group titled "Product". */
export function makeProductGroup(t: TFunction): MetadataGroup {
  return {
    uuid: PRODUCT_GROUP_UUID,
    // Not marked as `isRoot` — it slots in *after* the schema's root groups
    // (see `injectProductGroup`), so any subsequent non-root groups still
    // render below it.
    isRoot: false,
    name: t('productFieldsLabel', 'Product'),
    fields: makeProductFields(t),
  };
}

/**
 * Insert the synthetic Product group into a metadata schema right after the
 * last root group, then rebuild `fields` / `fieldsByKey` to match.
 *
 * Position rationale: admin v5 surfaces product fields directly under the
 * common "Root fields" group in both the asset-details Metadata tab and the
 * bulk editor. We mirror that placement here so users see Product before any
 * specialized non-root groups (Geolocation, language variants, etc.).
 */
export function injectProductGroup(
  schema: MetadataSchema,
  t: TFunction,
): MetadataSchema {
  const productGroup = makeProductGroup(t);

  // Find the index after the last root group; `-1 + 1 = 0` naturally handles
  // the "no root groups" case by inserting at the top.
  let lastRootIdx = -1;
  for (let i = 0; i < schema.groups.length; i++) {
    if (schema.groups[i].isRoot) lastRootIdx = i;
  }
  const insertAt = lastRootIdx + 1;

  const groups: MetadataGroup[] = [
    ...schema.groups.slice(0, insertAt),
    productGroup,
    ...schema.groups.slice(insertAt),
  ];
  const fields = groups.flatMap((g) => g.fields);
  const fieldsByKey = new Map(fields.map((f) => [f.key, f]));

  return { ...schema, groups, fields, fieldsByKey };
}
