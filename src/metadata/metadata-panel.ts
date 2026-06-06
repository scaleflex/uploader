import { LitElement, html, css, nothing } from 'lit';
import { property, state } from 'lit/decorators.js';
import { cspStyle } from '../utils/csp-style';
import type { MetadataSchema, MetadataConfig, MetadataField } from './schema/schema.types';
import type { TaxonodeEntry } from './taxonomies/taxonomies.types';
import type { UploadFile } from '../store/store.types';
import { isAssetHasMetadataValue, isFieldRequired } from './schema/required-fields';
import { metadataPanelStyles } from './metadata.styles';

// Inline SVG icons (16x16)
const closeIcon = html`<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
  <line x1="4" y1="4" x2="12" y2="12"/><line x1="12" y1="4" x2="4" y2="12"/>
</svg>`;

const prevIcon = html`<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <polyline points="10 3 5 8 10 13"/>
</svg>`;

const nextIcon = html`<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <polyline points="6 3 11 8 6 13"/>
</svg>`;

/** Statuses for files that can still be edited. */
const MODIFIABLE_STATUSES = new Set(['idle', 'queued', 'rejected']);

export class SfxMetadataPanel extends LitElement {
  static styles = [metadataPanelStyles];

  @property({ attribute: false }) schema: MetadataSchema | null = null;
  @property({ attribute: false }) file: UploadFile | null = null;
  @property({ attribute: false }) files: UploadFile[] = [];
  @property({ type: Boolean }) bulkMode = false;
  @property({ attribute: false }) config: MetadataConfig | null = null;
  @property({ attribute: false }) autocomplete: unknown = null;
  @property({ attribute: false }) taxonomyService: unknown = null;

  /** Local copy of the current file's taxonomy entries (single-file mode). */
  @state() private _localTaxonodes: Record<string, TaxonodeEntry | null> = {};

  /** Local copy of the current file's meta (single-file mode). */
  @state() private _localMeta: Record<string, unknown> = {};

  /** Accumulated meta for bulk mode. */
  @state() private _bulkMeta: Record<string, unknown> = {};

  // -------------------------------------------------------------------------
  // Lifecycle
  // -------------------------------------------------------------------------

  willUpdate(changed: Map<string, unknown>) {
    // Sync local meta when file changes (single-file mode)
    if (changed.has('file') && !this.bulkMode && this.file) {
      this._localMeta = { ...this.file.meta };
      this._localTaxonodes = { ...(this.file.taxonodes ?? {}) };
    }
  }

  // -------------------------------------------------------------------------
  // Computed
  // -------------------------------------------------------------------------

  private get _modifiableFiles(): UploadFile[] {
    return this.files.filter(f => MODIFIABLE_STATUSES.has(f.status));
  }

  private get _currentIndex(): number {
    if (!this.file) return -1;
    return this._modifiableFiles.findIndex(f => f.id === this.file!.id);
  }

  private get _hasPrev(): boolean {
    return this._currentIndex > 0;
  }

  private get _hasNext(): boolean {
    const mf = this._modifiableFiles;
    return this._currentIndex >= 0 && this._currentIndex < mf.length - 1;
  }

  private get _requiredFields(): MetadataField[] {
    if (!this.schema || !this.config) return [];
    return this.schema.fields.filter(f => isFieldRequired(f, this.config!));
  }

  private get _filledCount(): number {
    const meta = this.bulkMode ? this._bulkMeta : this._localMeta;
    return this._requiredFields.filter(f => isAssetHasMetadataValue(meta[f.key])).length;
  }

  private get _showProgress(): boolean {
    if (!this.config) return false;
    const enforce = this.config.enforceRequiredBeforeUpload;
    if (enforce === true) return true;
    if (enforce === 'auto' && this.schema?.forceFillingOnUpload) return true;
    return false;
  }

  private get _activeMeta(): Record<string, unknown> {
    return this.bulkMode ? this._bulkMeta : this._localMeta;
  }

  // -------------------------------------------------------------------------
  // Event handlers
  // -------------------------------------------------------------------------

  private _dispatch(name: string, detail?: unknown) {
    this.dispatchEvent(
      new CustomEvent(name, {
        detail,
        bubbles: true,
        composed: true,
      }),
    );
  }

  private _onFieldBlur(e: CustomEvent) {
    const { key, value } = e.detail;
    if (this.bulkMode) {
      this._bulkMeta = { ...this._bulkMeta, [key]: value };
    } else {
      this._localMeta = { ...this._localMeta, [key]: value };
    }
  }

  private _onTaxonomyEntryChange(
    e: CustomEvent<{ key: string; entry: TaxonodeEntry | null }>,
  ) {
    const { key, entry } = e.detail;
    if (this.bulkMode) return;
    this._localTaxonodes = { ...this._localTaxonodes, [key]: entry };
  }

  private _onClose() {
    // In single-file mode, save before closing
    if (!this.bulkMode && this.file) {
      this._dispatch('metadata-save', {
        fileId: this.file.id,
        meta: { ...this._localMeta },
      });
    }
    this._dispatch('metadata-close');
  }

  private _onDone() {
    if (this.file) {
      this._dispatch('metadata-save', {
        fileId: this.file.id,
        meta: { ...this._localMeta },
      });
    }
    this._dispatch('metadata-close');
  }

  private _onApplyAll() {
    const meta = { ...this._bulkMeta };
    for (const f of this._modifiableFiles) {
      this._dispatch('metadata-save', {
        fileId: f.id,
        meta,
        bulkMode: true,
      });
    }
    this._dispatch('metadata-close');
  }

  private _onPrev() {
    if (!this._hasPrev) return;
    // Save current file's meta before navigating
    if (this.file) {
      this._dispatch('metadata-save', {
        fileId: this.file.id,
        meta: { ...this._localMeta },
      });
    }
    const prevFile = this._modifiableFiles[this._currentIndex - 1];
    this._dispatch('metadata-navigate', { fileId: prevFile.id });
  }

  private _onNext() {
    if (!this._hasNext) return;
    // Save current file's meta before navigating
    if (this.file) {
      this._dispatch('metadata-save', {
        fileId: this.file.id,
        meta: { ...this._localMeta },
      });
    }
    const nextFile = this._modifiableFiles[this._currentIndex + 1];
    this._dispatch('metadata-navigate', { fileId: nextFile.id });
  }

  // -------------------------------------------------------------------------
  // Render
  // -------------------------------------------------------------------------

  private _renderHeader() {
    const title = this.bulkMode
      ? `Fill Metadata (${this._modifiableFiles.length} files)`
      : (this.file?.name ?? 'Metadata');

    return html`
      <div class="panel-header">
        <span class="panel-title" title=${title}>${title}</span>
        <button class="panel-close" @click=${this._onClose} aria-label="Close">${closeIcon}</button>
      </div>
    `;
  }

  private _renderProgress() {
    if (!this._showProgress || this._requiredFields.length === 0) return nothing;

    const total = this._requiredFields.length;
    const filled = this._filledCount;
    const pct = Math.round((filled / total) * 100);

    return html`
      <div class="progress-bar">
        <div class="progress-label">${filled}/${total} required fields filled</div>
        <div class="progress-track">
          <div class="progress-fill" ${cspStyle({ width: `${pct}%` })}></div>
        </div>
      </div>
    `;
  }

  private _renderFooter() {
    if (this.bulkMode) {
      return html`
        <div class="panel-footer">
          <div class="spacer"></div>
          <button class="btn-primary" @click=${this._onApplyAll}>
            Apply to All Files
          </button>
        </div>
      `;
    }

    const mf = this._modifiableFiles;
    const idx = this._currentIndex;
    const showNav = mf.length > 1;

    return html`
      <div class="panel-footer">
        ${showNav
          ? html`
              <button class="btn-ghost" ?disabled=${!this._hasPrev} @click=${this._onPrev}>
                ${prevIcon} Prev
              </button>
              <span class="page-counter">
                ${idx + 1} / ${mf.length}
              </span>
              <button class="btn-ghost" ?disabled=${!this._hasNext} @click=${this._onNext}>
                Next ${nextIcon}
              </button>
            `
          : nothing}
        <div class="spacer"></div>
        <button class="btn-primary" @click=${this._onDone}>Done</button>
      </div>
    `;
  }

  render() {
    return html`
      ${this._renderHeader()}
      ${this._renderProgress()}
      <div
        class="panel-content"
        @field-blur=${this._onFieldBlur}
        @taxonomy-entry-change=${this._onTaxonomyEntryChange}
      >
        <sfx-metadata-form
          .schema=${this.schema}
          .meta=${this._activeMeta}
          .config=${this.config}
          .autocomplete=${this.autocomplete}
          .taxonomyService=${this.taxonomyService}
          .taxonodes=${this._localTaxonodes}
        ></sfx-metadata-form>
      </div>
      ${this._renderFooter()}
    `;
  }
}

customElements.define('sfx-metadata-panel', SfxMetadataPanel);
