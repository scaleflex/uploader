import { LitElement } from 'lit';
import { MetadataField } from '../schema/schema.types';
/**
 * Base class for all metadata field type components.
 * Provides shared properties (field, value, disabled) and the _emit() helper.
 */
export declare class MetadataFieldBase extends LitElement {
    field: MetadataField;
    value: unknown;
    disabled: boolean;
    /** Dispatch a metadata field event with consistent shape. */
    protected _emit(name: string, val?: unknown): void;
}
//# sourceMappingURL=field-base.d.ts.map