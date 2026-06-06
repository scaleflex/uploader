import { LitElement } from 'lit';
import { MetadataField } from './schema/schema.types';
import { TaxonodeEntry } from './taxonomies/taxonomies.types';
export declare class SfxMetadataFieldView extends LitElement {
    static styles: import('lit').CSSResult;
    field: MetadataField;
    value: unknown;
    taxonomyEntry: TaxonodeEntry | null;
    private _formatValue;
    render(): import('lit-html').TemplateResult<1>;
}
//# sourceMappingURL=metadata-field-view.d.ts.map