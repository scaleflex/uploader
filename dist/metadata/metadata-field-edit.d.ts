import { LitElement } from 'lit';
import { MetadataField } from './schema/schema.types';
import { TaxonodeEntry } from './taxonomies/taxonomies.types';
import { UltratagsValueItem } from './ultratags/ultratags.types';
/**
 * Thin dispatcher that renders the correct field editor based on field.type.
 * All field-change / field-blur / field-escape events bubble up from the
 * child components automatically (they are bubbles + composed).
 */
export declare class SfxMetadataFieldEdit extends LitElement {
    static styles: import('lit').CSSResult;
    field: MetadataField;
    value: unknown;
    autocomplete: unknown;
    taxonomyService: unknown;
    taxonomyEntry: TaxonodeEntry | null;
    ultratags: unknown;
    language?: string;
    defaultLanguage?: string;
    ultratagsRestrictToItems: UltratagsValueItem[] | null;
    disabled: boolean;
    render(): import('lit-html').TemplateResult<1>;
}
//# sourceMappingURL=metadata-field-edit.d.ts.map