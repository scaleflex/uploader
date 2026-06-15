import { LitElement } from 'lit';
import { MetadataField } from '../schema/schema.types';
import { I18nController } from '../../i18n/i18n-controller';
/**
 * Base class for all metadata field type components.
 * Provides shared properties (field, value, disabled) and the _emit() helper.
 */
export declare class MetadataFieldBase extends LitElement {
    field: MetadataField;
    value: unknown;
    disabled: boolean;
    /** Re-render when translations load / language changes (fields use the module-level t). */
    protected readonly i18nController: I18nController;
    /**
     * Localized placeholder for select-like fields: "Select <field title>",
     * falling back to a generic prompt when the field has no title.
     * `emptyFallback` is a pre-translated string (a literal t() call at the
     * call site) so the i18n key extractor can see the key/default pair.
     */
    protected _selectPlaceholder(emptyFallback?: string): string;
    /** Dispatch a metadata field event with consistent shape. */
    protected _emit(name: string, val?: unknown): void;
}
//# sourceMappingURL=field-base.d.ts.map