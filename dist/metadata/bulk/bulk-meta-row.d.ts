import { LitElement } from 'lit';
import { MetadataField, MetadataConfig } from '../schema/schema.types';
import { UploadFile } from '../../store/store.types';
import { PendingOp } from './bulk-operations';
import { TaxonodeEntry } from '../taxonomies/taxonomies.types';
/**
 * Per-file row in the bulk metadata table.
 * Shows checkbox, thumbnail, file name, size, and the active field value.
 *
 * When a pending bulk operation exists (user typing in op-bar before Apply),
 * shows a live diff preview of what the operation would produce.
 * Otherwise always shows the editable field input.
 */
export declare class SfxBulkMetaRow extends LitElement {
    static styles: import('lit').CSSResult[];
    file: UploadFile;
    field: MetadataField;
    value: unknown;
    taxonomyEntry: TaxonodeEntry | null;
    selected: boolean;
    pendingOp: PendingOp | null;
    config: MetadataConfig | null;
    autocomplete: unknown;
    taxonomyService: unknown;
    ultratags: unknown;
    defaultLanguage?: string;
    private _error;
    willUpdate(changed: Map<string, unknown>): void;
    private _onCheckboxChange;
    private _onFieldBlur;
    private _onTaxonomyEntryChange;
    /** Compute what the value would become if the pending op were applied. */
    private _computePreviewValue;
    private _getExtension;
    render(): import('lit-html').TemplateResult<1>;
}
//# sourceMappingURL=bulk-meta-row.d.ts.map