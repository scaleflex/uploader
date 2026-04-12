import { LitElement } from 'lit';
import { MetadataSchema, MetadataConfig } from '../schema/schema.types';
import { UploadFile } from '../../store/store.types';
/**
 * Full-screen overlay modal for bulk metadata editing.
 * Orchestrates sidebar, op-bar, and file table.
 */
export declare class SfxBulkMetadataModal extends LitElement {
    static styles: import('lit').CSSResult[];
    schema: MetadataSchema;
    files: UploadFile[];
    config: MetadataConfig | null;
    autocomplete: unknown;
    private _activeFieldKey;
    private _staged;
    private _selected;
    private _sortAsc;
    private _pendingOp;
    private _confirmVisible;
    private _confirmResolve;
    private _originalFiles;
    connectedCallback(): void;
    disconnectedCallback(): void;
    private _onKeyDown;
    private _initStaged;
    private _setStagedValue;
    private _setStagedBulk;
    private get _activeField();
    /** Fields where ANY file has a non-empty staged value that differs from original. */
    private get _filledFields();
    private get _hasPendingValue();
    /** Returns true if the caller should proceed; false if the user chose to stay. */
    private _confirmDiscardPending;
    private _onConfirmOk;
    private _onConfirmCancel;
    /** Trap Tab inside the confirm dialog so focus cannot escape behind the overlay. */
    private _onConfirmKeydown;
    updated(changed: Map<string, unknown>): void;
    private _onPendingChange;
    private _onFieldSelect;
    private _onBulkApply;
    private _onRowFieldChange;
    private _onRowToggle;
    private _onSelectAll;
    private _onSortToggle;
    private _onSave;
    private _onCancel;
    private _onClose;
    private _emitClose;
    private get _sortedFiles();
    render(): import('lit-html').TemplateResult<1>;
}
//# sourceMappingURL=bulk-metadata-modal.d.ts.map