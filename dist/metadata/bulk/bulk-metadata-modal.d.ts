import { LitElement, PropertyValues } from 'lit';
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
    taxonomyService: unknown;
    ultratags: unknown;
    defaultLanguage?: string;
    /** When set, the modal opens with this field active instead of the first one. */
    initialFieldKey: string | null;
    private _activeFieldKey;
    /**
     * Per-file staged values. Product fields are stored alongside metadata under
     * synthetic keys (`product.ref` / `product.position`) so the existing
     * sidebar / op-bar / table flow can drive them without modification.
     * Split back into meta vs product changes on Save.
     */
    private _staged;
    /** Per-file staged taxonomy entries, keyed by file id then field key. */
    private _stagedTaxonodes;
    private _selected;
    private _sortAsc;
    private _pendingOp;
    private _confirmVisible;
    /**
     * Derived from `_staged` / `schema` / `config` in `willUpdate`. Held as state
     * (rather than computed getters) so the Set identity is preserved when the
     * contents don't change — that prevents the sidebar from re-rendering on every
     * unrelated state change and keeps `render()` from doing the iteration twice.
     */
    private _missingRequiredFieldKey;
    private _missingRequiredKeys;
    private _confirmResolve;
    private _originalFiles;
    connectedCallback(): void;
    disconnectedCallback(): void;
    private _onKeyDown;
    private _initStaged;
    private _setStagedValue;
    private _setStagedBulk;
    private _setStagedTaxonodeBulk;
    private _setStagedTaxonodeSingle;
    private get _activeField();
    /**
     * Union of ultratag items currently present on the selected files for the
     * active ultratags field. Feeds the op-bar's `restrictToItems` so the bulk
     * Delete dropdown only suggests tags actually present on the selection.
     */
    private get _ultratagsPresentOnSelection();
    /**
     * Reads the original value for diff/fallback. For real metadata fields this
     * is `file.meta[key]`; for synthetic product fields it's `file.product[pk]`.
     */
    private _originalValue;
    /**
     * Recomputes `_missingRequiredFieldKey` + `_missingRequiredKeys` from the
     * current staged map. Called from `willUpdate` when one of the inputs
     * (schema / config / staged) changes. Preserves Set identity when the
     * contents are unchanged so the sidebar re-renders only when its inputs
     * actually move.
     */
    private _refreshMissingRequired;
    /** Fields where ANY file has a non-empty staged value that differs from original. */
    private get _filledFields();
    private get _hasPendingValue();
    /** Returns true if the caller should proceed; false if the user chose to stay. */
    private _confirmDiscardPending;
    private _onConfirmOk;
    private _onConfirmCancel;
    /** Trap Tab inside the confirm dialog so focus cannot escape behind the overlay. */
    private _onConfirmKeydown;
    willUpdate(changed: PropertyValues): void;
    updated(changed: Map<string, unknown>): void;
    private _onPendingChange;
    private _onFieldSelect;
    private _onJumpToNextRequired;
    private _onBulkApply;
    private _onRowTaxonomyEntry;
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