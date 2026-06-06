import { LitElement, nothing } from 'lit';
import { MetadataField, MetadataConfig, RegionalVariantsGroup } from './schema/schema.types';
import { TaxonodeEntry } from './taxonomies/taxonomies.types';
import { UltratagsValueItem } from './ultratags/ultratags.types';
export declare class SfxMetadataFieldEl extends LitElement {
    static styles: import('lit').CSSResult[];
    field: MetadataField;
    value: unknown;
    config: MetadataConfig | null;
    autocomplete: unknown;
    taxonomyService: unknown;
    taxonomyEntry: TaxonodeEntry | null;
    ultratags: unknown;
    defaultLanguage?: string;
    ultratagsRestrictToItems: UltratagsValueItem[] | null;
    /**
     * Schema's regional-variants groups, used to render the per-field hint
     * label ("Languages: English"). Optional — when omitted, no hint is shown.
     */
    regionalVariantsGroups: RegionalVariantsGroup[];
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