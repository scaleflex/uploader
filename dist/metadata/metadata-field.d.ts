import { LitElement, nothing } from 'lit';
import { MetadataField, MetadataConfig } from './schema/schema.types';
import { TaxonodeEntry } from './taxonomies/taxonomies.types';
export declare class SfxMetadataFieldEl extends LitElement {
    static styles: import('lit').CSSResult[];
    field: MetadataField;
    value: unknown;
    config: MetadataConfig | null;
    autocomplete: unknown;
    taxonomyService: unknown;
    taxonomyEntry: TaxonodeEntry | null;
    disabled: boolean;
    private _error;
    /** Flag to prevent re-entry when we re-dispatch field-blur. */
    private _dispatching;
    private get _isRequired();
    private _onFieldBlur;
    connectedCallback(): void;
    disconnectedCallback(): void;
    private _handleChildBlur;
    /** Render the correct field editor based on field.type. */
    private _renderField;
    render(): typeof nothing | import('lit-html').TemplateResult<1>;
}
//# sourceMappingURL=metadata-field.d.ts.map