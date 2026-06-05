/**
 * Hardcoded product fields attached to an asset on upload.
 *
 * Matches admin v5's product fields schema (when a project has
 * `airstore.ui.products_enabled === true`). The values are sent on the upload
 * request — tus metadata header for resumable uploads, multipart form fields
 * for XHR — and surface in the admin's asset-details "Product" section.
 *
 * Both fields are independently optional; an undefined value means "do not
 * send" rather than "clear the value on the backend".
 */
export interface Product {
  /** Product reference (e.g. SKU). Alphanumeric only, no whitespace or punctuation. */
  ref?: string;
  /** Display position. Integer. */
  position?: number;
}

export type ProductFieldKey = keyof Product;
