import { LitElement } from 'lit';
import { property } from 'lit/decorators.js';
import type { MetadataField } from '../schema/schema.types';

/**
 * Base class for all metadata field type components.
 * Provides shared properties (field, value, disabled) and the _emit() helper.
 */
export class MetadataFieldBase extends LitElement {
  @property({ attribute: false }) field!: MetadataField;
  @property({ attribute: false }) value: unknown = '';
  @property({ type: Boolean }) disabled = false;

  /** Dispatch a metadata field event with consistent shape. */
  protected _emit(name: string, val?: unknown) {
    this.dispatchEvent(
      new CustomEvent(name, {
        detail: { key: this.field.key, ...(val !== undefined ? { value: val } : {}) },
        bubbles: true,
        composed: true,
      }),
    );
  }
}
