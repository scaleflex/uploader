import { MetadataField, MetadataGroup, MetadataSchema } from '../metadata/schema/schema.types';
import { TFunction } from '../store/store.types';
import { ProductFieldKey } from './product.types';
export type { ProductFieldKey };
/**
 * Synthetic MetadataField keys for the bulk-edit sidebar.
 * Using dotted prefix `product.` lets us route staged values through the
 * existing `Map<fieldKey, value>` staging structure while still distinguishing
 * product fields from real metadata at save time.
 */
export declare const PRODUCT_REF_FIELD_KEY = "product.ref";
export declare const PRODUCT_POSITION_FIELD_KEY = "product.position";
export declare const PRODUCT_GROUP_UUID = "__product__";
export declare function isProductFieldKey(key: string): boolean;
/** Map a synthetic bulk field key (`product.ref`) to the `Product` key (`ref`). */
export declare function productKeyOf(fieldKey: string): ProductFieldKey | null;
/**
 * Build the synthetic `MetadataField[]` for product ref + position. Used by the
 * bulk-edit sidebar so product values can be applied through the same
 * op-bar / table flow as real metadata. Titles are localized.
 */
export declare function makeProductFields(t: TFunction): MetadataField[];
/** Wraps `makeProductFields()` in a sidebar group titled "Product". */
export declare function makeProductGroup(t: TFunction): MetadataGroup;
/**
 * Insert the synthetic Product group into a metadata schema right after the
 * last root group, then rebuild `fields` / `fieldsByKey` to match.
 *
 * Position rationale: admin v5 surfaces product fields directly under the
 * common "Root fields" group in both the asset-details Metadata tab and the
 * bulk editor. We mirror that placement here so users see Product before any
 * specialized non-root groups (Geolocation, language variants, etc.).
 */
export declare function injectProductGroup(schema: MetadataSchema, t: TFunction): MetadataSchema;
//# sourceMappingURL=product.fields.d.ts.map