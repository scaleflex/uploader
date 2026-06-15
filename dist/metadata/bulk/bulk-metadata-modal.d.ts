import { LitElement, PropertyValues } from 'lit';
import { MetadataSchema, MetadataConfig } from '../schema/schema.types';
import { UploadFile } from '../../store/store.types';
import { Dependency } from '../dependencies/dependencies.types';
/**
 * Full-screen overlay modal for bulk metadata editing.
 * Orchestrates sidebar, op-bar, and file table.
 */
export declare class SfxBulkMetadataModal extends LitElement {
    /** Re-render when translations load / language changes (render uses the module-level t). */
    private readonly _i18nController;
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
    /**
     * Pre-upload metadata dependencies, threaded through to the
     * required-fields check so dep-required / dep-hidden are honored in the
     * bulk-edit gate. Empty array disables dep handling.
     */
    dependencies: Dependency[];
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
    /**
     * Cached results for the bulk-aggregated and per-file resolved schemas.
     * Both are computed in `willUpdate` (and invalidated together when any of
     * their inputs change) so each render reads stable references — preventing
     * the sub-components (sidebar / op-bar / table / rows) from re-rendering
     * on every parent state change.
     */
    private _cachedBulkResolved;
    private _cachedPerFileResolved;
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
    /**
     * Build a snapshot of selected files' effective meta (staged values layered
     * over original) for dep evaluation. Skips unselected files because they
     * can't be affected by bulk operations — the aggregated resolved should
     * reflect only what the user will edit.
     */
    private _selectedFileInputs;
    /**
     * Recompute the cached resolved schemas. The bulk aggregate drives the
     * sidebar (hide/required asterisks) and op-bar (allow_values intersection);
     * the per-file map drives each table row's own restrictions. Computed once
     * per change rather than on every render so child components see stable
     * references and only re-render when the contents actually move.
     */
    private _recomputeResolvedSchemas;
    /**
     * When the currently-active field becomes hidden by a firing dep (e.g. the
     * user changed a trigger that hides this column for every selected file),
     * jump to the first still-visible field instead of leaving the op-bar and
     * table column rendered for an invisible field.
     */
    private _advanceActiveFieldIfHidden;
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