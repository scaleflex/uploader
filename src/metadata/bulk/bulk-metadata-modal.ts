import { LitElement, html, nothing } from 'lit';
import { property, state } from 'lit/decorators.js';
import type {
  MetadataSchema,
  MetadataField,
  MetadataConfig,
} from '../schema/schema.types';
import type { UploadFile } from '../../store/store.types';
import { isEmpty } from '../schema/validation';
import { computeBulkResult, isValueRequiredForPreview, type BulkOperation, type PendingOp } from './bulk-operations';
import { bulkModalStyles } from './bulk-metadata.styles';

/**
 * Full-screen overlay modal for bulk metadata editing.
 * Orchestrates sidebar, op-bar, and file table.
 */
export class SfxBulkMetadataModal extends LitElement {
  static styles = [bulkModalStyles];

  // --- Props from parent ---
  @property({ attribute: false }) schema!: MetadataSchema;
  @property({ attribute: false }) files: UploadFile[] = [];
  @property({ attribute: false }) config: MetadataConfig | null = null;
  @property({ attribute: false }) autocomplete: unknown;
  /** When set, the modal opens with this field active instead of the first one. */
  @property({ attribute: false }) initialFieldKey: string | null = null;

  // --- Internal state ---
  @state() private _activeFieldKey = '';
  @state() private _staged: Map<string, Map<string, unknown>> = new Map();
  @state() private _selected: Set<string> = new Set();
  @state() private _sortAsc = true;
  @state() private _pendingOp: PendingOp | null = null;
  @state() private _confirmVisible = false;
  private _confirmResolve: ((ok: boolean) => void) | null = null;

  // Snapshot of original files for diff on save
  private _originalFiles: Map<string, UploadFile> = new Map();

  connectedCallback() {
    super.connectedCallback();
    this._initStaged();
    document.addEventListener('keydown', this._onKeyDown);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    document.removeEventListener('keydown', this._onKeyDown);
    // Resolve any dangling confirm Promise so async callers don't hang forever
    this._confirmResolve?.(false);
    this._confirmResolve = null;
  }

  private _onKeyDown = async (e: KeyboardEvent) => {
    if (e.key !== 'Escape') return;

    // If the confirm dialog is open, Escape dismisses it (stay in modal)
    if (this._confirmVisible) {
      e.stopPropagation();
      this._onConfirmCancel();
      return;
    }

    // Don't close modal if user is typing in a form field — let the field
    // handle Escape first (e.g., closing a dropdown). The native KeyboardEvent
    // fires independently of the field-escape CustomEvent.
    const path = e.composedPath();
    const fromInput = path.some(
      (el) =>
        el instanceof HTMLInputElement ||
        el instanceof HTMLTextAreaElement ||
        el instanceof HTMLSelectElement,
    );
    if (fromInput) return;

    if (!(await this._confirmDiscardPending())) return;
    this._emitClose();
  };

  private _initStaged() {
    const staged = new Map<string, Map<string, unknown>>();
    const selected = new Set<string>();
    const originals = new Map<string, UploadFile>();

    for (const file of this.files) {
      const fileMap = new Map<string, unknown>();
      if (file.meta) {
        for (const [k, v] of Object.entries(file.meta)) {
          fileMap.set(k, v);
        }
      }
      staged.set(file.id, fileMap);
      selected.add(file.id);
      originals.set(file.id, file);
    }

    this._staged = staged;
    this._selected = selected;
    this._originalFiles = originals;

    // Set active field — prefer caller-supplied initial field, else first available
    const initial = this.initialFieldKey;
    if (initial && this.schema?.fieldsByKey?.has(initial)) {
      this._activeFieldKey = initial;
    } else if (this.schema?.fields?.length > 0) {
      this._activeFieldKey = this.schema.fields[0].key;
    }
  }

  // -----------------------------------------------------------------------
  // Immutability helpers
  // -----------------------------------------------------------------------

  private _setStagedValue(fileId: string, fieldKey: string, value: unknown): void {
    const next = new Map(this._staged);
    const fileMap = new Map(next.get(fileId) ?? new Map());
    fileMap.set(fieldKey, value);
    next.set(fileId, fileMap);
    this._staged = next;
  }

  private _setStagedBulk(updates: Array<[string, string, unknown]>): void {
    const next = new Map(this._staged);
    for (const [fileId, fieldKey, value] of updates) {
      const fileMap = new Map(next.get(fileId) ?? new Map());
      fileMap.set(fieldKey, value);
      next.set(fileId, fileMap);
    }
    this._staged = next;
  }

  // -----------------------------------------------------------------------
  // Active field + filled fields
  // -----------------------------------------------------------------------

  private get _activeField(): MetadataField | undefined {
    return this.schema?.fieldsByKey?.get(this._activeFieldKey);
  }

  /** Fields where ANY file has a non-empty staged value that differs from original. */
  private get _filledFields(): Set<string> {
    const filled = new Set<string>();
    for (const field of this.schema?.fields ?? []) {
      for (const [fileId, fileMap] of this._staged) {
        const stagedVal = fileMap.get(field.key);
        const origVal = this._originalFiles.get(fileId)?.meta[field.key];
        if (
          stagedVal !== undefined &&
          !isEmpty(stagedVal) &&
          JSON.stringify(stagedVal) !== JSON.stringify(origVal)
        ) {
          filled.add(field.key);
          break; // one file is enough to mark the field
        }
      }
    }
    return filled;
  }

  // -----------------------------------------------------------------------
  // Event handlers
  // -----------------------------------------------------------------------

  private get _hasPendingValue(): boolean {
    return this._pendingOp != null && !isEmpty(this._pendingOp.value);
  }

  /** Returns true if the caller should proceed; false if the user chose to stay. */
  private _confirmDiscardPending(): Promise<boolean> {
    if (!this._hasPendingValue) return Promise.resolve(true);
    return new Promise<boolean>((resolve) => {
      this._confirmResolve = resolve;
      this._confirmVisible = true;
    });
  }

  private _onConfirmOk = () => {
    this._confirmVisible = false;
    this._confirmResolve?.(true);
    this._confirmResolve = null;
  };

  private _onConfirmCancel = () => {
    this._confirmVisible = false;
    this._confirmResolve?.(false);
    this._confirmResolve = null;
  };

  /** Trap Tab inside the confirm dialog so focus cannot escape behind the overlay. */
  private _onConfirmKeydown = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;
    const dialog = this.shadowRoot?.querySelector('.fm-confirm') as HTMLElement | null;
    if (!dialog) return;
    const buttons = dialog.querySelectorAll<HTMLElement>('button');
    if (buttons.length === 0) return;
    const first = buttons[0];
    const last = buttons[buttons.length - 1];
    const active = this.shadowRoot?.activeElement;
    if (e.shiftKey && active === first) {
      e.preventDefault();
      last.focus();
    } else if (!e.shiftKey && active === last) {
      e.preventDefault();
      first.focus();
    }
  };

  updated(changed: Map<string, unknown>) {
    super.updated?.(changed);
    // Auto-focus the Cancel button when confirm dialog appears
    if (changed.has('_confirmVisible') && this._confirmVisible) {
      requestAnimationFrame(() => {
        const cancel = this.shadowRoot?.querySelector('.fm-confirm .btn-ghost') as HTMLElement | null;
        cancel?.focus();
      });
    }
  }

  private _onPendingChange = (
    e: CustomEvent<{ operation: BulkOperation; value: unknown }>,
  ) => {
    const { operation, value } = e.detail;
    const field = this._activeField;
    if (isEmpty(value) && (!field || isValueRequiredForPreview(operation, field.type))) {
      this._pendingOp = null;
    } else {
      this._pendingOp = { operation, value };
    }
  };

  private _onFieldSelect = async (e: CustomEvent<{ fieldKey: string }>) => {
    if (!(await this._confirmDiscardPending())) return;
    this._pendingOp = null;
    this._activeFieldKey = e.detail.fieldKey;
  };

  private _onBulkApply = (
    e: CustomEvent<{ operation: BulkOperation; value: unknown }>,
  ) => {
    const field = this._activeField;
    if (!field) return;

    const { operation, value: frontendValue } = e.detail;
    const language = this.config?.language;
    const updates: Array<[string, string, unknown]> = [];

    for (const fileId of this._selected) {
      const fileStaged = this._staged.get(fileId);

      // Use staged value if available, otherwise fall back to original file meta
      const currentStaged = fileStaged?.has(field.key)
        ? fileStaged.get(field.key)
        : this._originalFiles.get(fileId)?.meta?.[field.key] ?? null;

      const result = computeBulkResult(
        field,
        currentStaged,
        frontendValue,
        operation,
        language,
      );

      updates.push([fileId, field.key, result]);
    }

    this._setStagedBulk(updates);
  };

  private _onRowFieldChange = (
    e: CustomEvent<{ fileId: string; value: unknown }>,
  ) => {
    const field = this._activeField;
    if (!field) return;
    this._setStagedValue(e.detail.fileId, field.key, e.detail.value);
  };

  private _onRowToggle = (e: CustomEvent<{ fileId: string }>) => {
    const next = new Set(this._selected);
    if (next.has(e.detail.fileId)) {
      next.delete(e.detail.fileId);
    } else {
      next.add(e.detail.fileId);
    }
    this._selected = next;
  };

  private _onSelectAll = () => {
    if (this._selected.size === this.files.length) {
      this._selected = new Set();
    } else {
      this._selected = new Set(this.files.map((f) => f.id));
    }
  };

  private _onSortToggle = () => {
    this._sortAsc = !this._sortAsc;
  };

  // -----------------------------------------------------------------------
  // Save / Cancel / Close
  // -----------------------------------------------------------------------

  private _onSave = async () => {
    if (!(await this._confirmDiscardPending())) return;

    const changes: Array<{ fileId: string; meta: Record<string, unknown> }> = [];

    for (const [fileId, fileStagedMap] of this._staged) {
      const originalFile = this._originalFiles.get(fileId);
      if (!originalFile) continue;

      const changedMeta: Record<string, unknown> = {};
      for (const [fieldKey, stagedVal] of fileStagedMap) {
        if (
          JSON.stringify(stagedVal) !==
          JSON.stringify(originalFile.meta[fieldKey])
        ) {
          changedMeta[fieldKey] = stagedVal;
        }
      }

      if (Object.keys(changedMeta).length > 0) {
        changes.push({ fileId, meta: changedMeta });
      }
    }

    this.dispatchEvent(
      new CustomEvent('metadata-save-batch', {
        detail: { changes },
        bubbles: true,
        composed: true,
      }),
    );

    this._emitClose();
  };

  private _onCancel = async () => {
    if (!(await this._confirmDiscardPending())) return;
    this._emitClose();
  };

  private _onClose = async () => {
    if (!(await this._confirmDiscardPending())) return;
    this._emitClose();
  };

  private _emitClose() {
    this.dispatchEvent(
      new CustomEvent('metadata-close', {
        bubbles: true,
        composed: true,
      }),
    );
  }

  // -----------------------------------------------------------------------
  // Sorted files
  // -----------------------------------------------------------------------

  private get _sortedFiles(): UploadFile[] {
    const sorted = [...this.files];
    sorted.sort((a, b) => {
      const cmp = a.name.localeCompare(b.name) || a.id.localeCompare(b.id);
      return this._sortAsc ? cmp : -cmp;
    });
    return sorted;
  }

  // -----------------------------------------------------------------------
  // Render
  // -----------------------------------------------------------------------

  render() {
    if (!this.schema?.fields?.length) {
      return html`
        <div class="fm-overlay" @click=${this._onClose}>
          <div class="fm-modal" @click=${(e: Event) => e.stopPropagation()}>
            <div class="fm-topbar">
              <span class="fm-topbar-title">Fill multiple assets</span>
              <button class="fm-topbar-close" @click=${this._onClose} title="Close">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
                  <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>
            <div class="fm-empty">No metadata fields configured</div>
          </div>
        </div>
      `;
    }

    const field = this._activeField;
    const sortedFiles = this._sortedFiles;
    const allSelected = this._selected.size === this.files.length && this.files.length > 0;
    const someSelected = this._selected.size > 0 && !allSelected;

    return html`
      <div class="fm-overlay" @click=${this._onClose}>
        <div class="fm-modal" @click=${(e: Event) => e.stopPropagation()}>
          <!-- Top bar -->
          <div class="fm-topbar">
            <span class="fm-topbar-title">Fill multiple assets</span>
            <button class="fm-topbar-close" @click=${this._onClose} title="Close">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
                <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>

          <!-- Body -->
          <div class="fm-body">
            <!-- Sidebar -->
            <sfx-bulk-meta-sidebar
              .schema=${this.schema}
              .activeFieldKey=${this._activeFieldKey}
              .filledFields=${this._filledFields}
              .config=${this.config}
              @field-select=${this._onFieldSelect}
            ></sfx-bulk-meta-sidebar>

            <!-- Main area -->
            <div class="fm-main">
              <!-- Op bar -->
              ${field
                ? html`
                    <sfx-bulk-meta-op-bar
                      .field=${field}
                      .autocomplete=${this.autocomplete}
                      .config=${this.config}
                      .selectedCount=${this._selected.size}
                      @bulk-apply=${this._onBulkApply}
                      @pending-change=${this._onPendingChange}
                    ></sfx-bulk-meta-op-bar>
                  `
                : nothing}

              <!-- Table header -->
              <div class="fm-table-header">
                <div class="fm-th-check">
                  <input
                    type="checkbox"
                    class="fm-checkbox"
                    .checked=${allSelected}
                    .indeterminate=${someSelected}
                    @change=${this._onSelectAll}
                  />
                </div>
                <div class="fm-th-name" @click=${this._onSortToggle}>
                  Name
                  <span class="fm-sort-arrow">${this._sortAsc ? '\u2191' : '\u2193'}</span>
                </div>
                <div class="fm-th-size">Size</div>
                <div class="fm-th-field">${field?.title ?? ''}</div>
              </div>

              <!-- Table body -->
              <div class="fm-table-body">
                ${field
                  ? html`
                      <sfx-bulk-meta-table
                        .files=${sortedFiles}
                        .field=${field}
                        .staged=${this._staged}
                        .selected=${this._selected}
                        .pendingOp=${this._pendingOp}
                        .config=${this.config}
                        .autocomplete=${this.autocomplete}
                        @row-field-change=${this._onRowFieldChange}
                        @row-toggle=${this._onRowToggle}
                      ></sfx-bulk-meta-table>
                    `
                  : nothing}
              </div>
            </div>
          </div>

          <!-- Footer -->
          <div class="fm-footer">
            <button class="btn-back" @click=${this._onCancel}>
              \u2190 Back
            </button>
            <div class="spacer"></div>
            <button class="btn-ghost" @click=${this._onCancel}>Cancel</button>
            <button class="btn-primary" @click=${this._onSave}>Save</button>
          </div>

          ${this._confirmVisible ? html`
            <div class="fm-confirm-overlay" @click=${this._onConfirmCancel} @keydown=${this._onConfirmKeydown}>
              <div class="fm-confirm" role="alertdialog" aria-modal="true" aria-labelledby="fm-confirm-msg" @click=${(e: Event) => e.stopPropagation()}>
                <p class="fm-confirm-text" id="fm-confirm-msg">You have unapplied bulk changes. Discard them?</p>
                <div class="fm-confirm-actions">
                  <button class="btn-ghost" @click=${this._onConfirmCancel}>Cancel</button>
                  <button class="btn-primary" @click=${this._onConfirmOk}>Discard</button>
                </div>
              </div>
            </div>
          ` : nothing}
        </div>
      </div>
    `;
  }
}

customElements.define('sfx-bulk-metadata-modal', SfxBulkMetadataModal);
