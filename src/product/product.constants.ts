import type { Product, ProductFieldKey } from './product.types';

export const PRODUCT_REF_KEY: ProductFieldKey = 'ref';
export const PRODUCT_POSITION_KEY: ProductFieldKey = 'position';

// Mirrors admin v5's `invalidCharRegex` (src/features/metadata/metadata.constants.ts).
// Rejects whitespace, backticks, and the listed punctuation set.
export const PRODUCT_REF_INVALID_CHARS =
  /[!#$%^&*()=+{}\[\];"<>\\,\/?~\t\n\r\s`]/;

/** Returns an i18n key for the error, or `null` when valid. */
export function validateProductRef(value: unknown): string | null {
  if (value == null || value === '') return null;
  if (typeof value !== 'string') return 'productRefInvalid';
  if (PRODUCT_REF_INVALID_CHARS.test(value)) return 'productRefInvalid';
  return null;
}

/** Returns an i18n key for the error, or `null` when valid. */
export function validateProductPosition(value: unknown): string | null {
  if (value == null || value === '') return null;
  const num = typeof value === 'number' ? value : Number(value);
  if (!Number.isFinite(num)) return 'productPositionInvalid';
  if (!Number.isInteger(num)) return 'productPositionInvalid';
  return null;
}

/** True when the product object has at least one defined, non-empty field. */
export function hasProductData(p: Product | undefined | null): boolean {
  if (!p) return false;
  if (p.ref != null && p.ref !== '') return true;
  // Position 0 is a valid value — only undefined / null count as empty.
  if (p.position != null) return true;
  return false;
}

/**
 * Strip empty fields so the encoded payload never contains `{ ref: '' }` or
 * `{ position: null }`. Returns a fresh object; safe to JSON.stringify.
 */
export function compactProduct(p: Product | undefined | null): Product {
  const out: Product = {};
  if (p?.ref != null && p.ref !== '') out.ref = p.ref;
  if (p?.position != null) out.position = p.position;
  return out;
}

/**
 * Immutable patch merge for `Product`. `undefined` values in the patch drop
 * the key from the result, allowing callers to clear a field by passing
 * `{ ref: undefined }`. This is preferable to relying on `delete` mutation.
 */
export function mergeProductPatch(
  base: Product | undefined,
  patch: Partial<Product>,
): Product {
  const merged: Product = { ...(base ?? {}) };
  for (const k of Object.keys(patch) as ProductFieldKey[]) {
    const v = patch[k];
    if (v === undefined) {
      delete (merged as Record<string, unknown>)[k];
    } else {
      (merged as Record<string, unknown>)[k] = v;
    }
  }
  return merged;
}
