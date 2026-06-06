import { LitElement } from 'lit';
import { MetadataField, MetadataConfig } from '../schema/schema.types';
import { UploadFile } from '../../store/store.types';
import { PendingOp } from './bulk-operations';
import { TaxonodeEntry } from '../taxonomies/taxonomies.types';
/**
 * Thin table container — maps files to `<sfx-bulk-meta-row>` elements.
 */
export declare class SfxBulkMetaTable extends LitElement {
    static styles: import('lit').CSSResult[];
    files: UploadFile[];
    field: MetadataField;
    staged: Map<string, Map<string, unknown>>;
    stagedTaxonodes: Map<string, Map<string, TaxonodeEntry | null>>;
    selected: Set<string>;
    pendingOp: PendingOp | null;
    config: MetadataConfig | null;
    autocomplete: unknown;
    taxonomyService: unknown;
    private _getEffectiveValue;
    private _getTaxonodeEntry;
    render(): import('lit-html').TemplateResult<1>;
}
//# sourceMappingURL=bulk-meta-table.d.ts.map