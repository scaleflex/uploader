import { LitElement } from 'lit';
import { MetadataSchema, MetadataConfig } from './schema/schema.types';
import { UploadFile } from '../store/store.types';
import { Dependency } from './dependencies/dependencies.types';
export declare class SfxMetadataPanel extends LitElement {
    /** Re-render when translations load / language changes (render uses the module-level t). */
    private readonly _i18nController;
    static styles: import('lit').CSSResult[];
    schema: MetadataSchema | null;
    file: UploadFile | null;
    files: UploadFile[];
    bulkMode: boolean;
    config: MetadataConfig | null;
    autocomplete: unknown;
    taxonomyService: unknown;
    ultratags: unknown;
    defaultLanguage?: string;
    /**
     * Metadata dependencies for the active project. Evaluated per-file against
     * the current MIME + meta to drive hide/require/allow_values/set_values.
     * Pre-upload only — post-upload, the backend pre-computes this.
     */
    dependencies: Dependency[];
    /** Local copy of the current file's taxonomy entries (single-file mode). */
    private _localTaxonodes;
    /** Local copy of the current file's meta (single-file mode). */
    private _localMeta;
    /** Accumulated meta for bulk mode. */
    private _bulkMeta;
    willUpdate(changed: Map<string, unknown>): void;
    private _applySetValuesPreFill;
    /** Resolved dependency state for the current single-file selection. */
    private get _resolvedSchema();
    private get _modifiableFiles();
    private get _currentIndex();
    private get _hasPrev();
    private get _hasNext();
    private get _requiredFields();
    private get _filledCount();
    private get _showProgress();
    private get _activeMeta();
    private _dispatch;
    private _onFieldBlur;
    private _onTaxonomyEntryChange;
    private _onClose;
    private _onDone;
    private _onApplyAll;
    private _onPrev;
    private _onNext;
    private _renderHeader;
    private _renderProgress;
    private _renderFooter;
    render(): import('lit-html').TemplateResult<1>;
}
//# sourceMappingURL=metadata-panel.d.ts.map