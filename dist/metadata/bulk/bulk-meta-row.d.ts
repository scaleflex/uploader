import { LitElement } from 'lit';
import { MetadataField, MetadataConfig } from '../schema/schema.types';
import { UploadFile } from '../../store/store.types';
import { PendingOp } from './bulk-operations';
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
    selected: boolean;
    config: MetadataConfig | null;
    autocomplete: unknown;
    /** Pending bulk operation from op-bar (null when nothing pending or row unselected). */
    pendingOp: PendingOp | null;
    private _error;
    willUpdate(changed: Map<string, unknown>): void;
    private _onCheckboxChange;
    private _onFieldBlur;
    private _getExtension;
    /**
     * Compute what the value would become if the pending bulk operation were applied.
     * Returns null if there's no pending op or the preview equals the current value.
     */
    private _computePreview;
    render(): import('lit-html').TemplateResult<1>;
}
//# sourceMappingURL=bulk-meta-row.d.ts.map