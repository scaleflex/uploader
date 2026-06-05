import { Product, ProductFieldKey } from './product.types';
export declare const PRODUCT_REF_KEY: ProductFieldKey;
export declare const PRODUCT_POSITION_KEY: ProductFieldKey;
export declare const PRODUCT_REF_INVALID_CHARS: RegExp;
/** Returns an i18n key for the error, or `null` when valid. */
export declare function validateProductRef(value: unknown): string | null;
/** Returns an i18n key for the error, or `null` when valid. */
export declare function validateProductPosition(value: unknown): string | null;
/** True when the product object has at least one defined, non-empty field. */
export declare function hasProductData(p: Product | undefined | null): boolean;
/**
 * Strip empty fields so the encoded payload never contains `{ ref: '' }` or
 * `{ position: null }`. Returns a fresh object; safe to JSON.stringify.
 */
export declare function compactProduct(p: Product | undefined | null): Product;
/**
 * Immutable patch merge for `Product`. `undefined` values in the patch drop
 * the key from the result, allowing callers to clear a field by passing
 * `{ ref: undefined }`. This is preferable to relying on `delete` mutation.
 */
export declare function mergeProductPatch(base: Product | undefined, patch: Partial<Product>): Product;
//# sourceMappingURL=product.constants.d.ts.map