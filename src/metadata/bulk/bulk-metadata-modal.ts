import { LitElement, html, nothing, type PropertyValues } from 'lit';
import { property, state } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import type {
  MetadataSchema,
  MetadataField,
  MetadataConfig,
} from '../schema/schema.types';
import type { UploadFile } from '../../store/store.types';
import type { Product } from '../../product/product.types';
import {
  PRODUCT_POSITION_FIELD_KEY,
  PRODUCT_REF_FIELD_KEY,
  isProductFieldKey,
  productKeyOf,
} from '../../product/product.fields';
import { isEmpty } from '../schema/validation';
import { missingRequiredFieldKeysInStaged } from '../schema/required-fields';
import { computeBulkResult, isValueRequiredForPreview, type BulkOperation, type PendingOp } from './bulk-operations';
import { bulkModalStyles } from './bulk-metadata.styles';
import type { TaxonodeEntry } from '../taxonomies/taxonomies.types';
import type { UltratagsValueItem } from '../ultratags/ultratags.types';
import { extractUltratagItems, mergeUltratagItems } from '../ultratags/ultratags.utils';

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
  @property({ attribute: false }) taxonomyService: unknown;
  @property({ attribute: false }) ultratags: unknown;
  @property({ attribute: false }) defaultLanguage?: string;
  /** When set, the modal opens with this field active instead of the first one. */
  @property({ attribute: false }) initialFieldKey: string | null = null;

  // --- Internal state ---
  @state() private _activeFieldKey = '';
  /**
   * Per-file staged values. Product fields are stored alongside metadata under
   * synthetic keys (`product.ref` / `product.position`) so the existing
   * sidebar / op-bar / table flow can drive them without modification.
   * Split back into meta vs product changes on Save.
   */
  @state() private _staged: Map<string, Map<string, unknown>> = new Map();
  /** Per-file staged taxonomy entries, keyed by file id then field key. */
  @state() private _stagedTaxonodes: Map<string, Map<string, TaxonodeEntry | null>> = new Map();
  @state() private _selected: Set<string> = new Set();
  @state() private _sortAsc = true;
  @state() private _pendingOp: PendingOp | null = null;
  @state() private _confirmVisible = false;
  /**
   * Derived from `_staged` / `schema` / `config` in `willUpdate`. Held as state
   * (rather than computed getters) so the Set identity is preserved when the
   * contents don't change — that prevents the sidebar from re-rendering on every
   * unrelated state change and keeps `render()` from doing the iteration twice.
   */
  @state() private _missingRequiredFieldKey: string | null = null;
  @state() private _missingRequiredKeys: Set<string> = new Set();
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
    const stagedTaxonodes = new Map<string, Map<string, TaxonodeEntry | null>>();
    const selected = new Set<string>();
    const originals = new Map<string, UploadFile>();
    const productsEnabled = this.schema?.productsEnabled === true;

    for (const file of this.files) {
      const fileMap = new Map<string, unknown>();
      if (file.meta) {
        for (const [k, v] of Object.entries(file.meta)) {
          fileMap.set(k, v);
        }
      }
      // Seed product values into the unified staging map under synthetic keys
      // so the sidebar / op-bar / table all drive them through the same flow.
      if (productsEnabled) {
        const p = file.product;
        if (p.ref !== undefined) fileMap.set(PRODUCT_REF_FIELD_KEY, p.ref);
        if (p.position !== undefined) fileMap.set(PRODUCT_POSITION_FIELD_KEY, p.position);
      }
      staged.set(file.id, fileMap);
      if (file.taxonodes) {
        stagedTaxonodes.set(
          file.id,
          new Map(Object.entries(file.taxonodes)),
        );
      }
      selected.add(file.id);
      originals.set(file.id, file);
    }

    this._staged = staged;
    this._stagedTaxonodes = stagedTaxonodes;
    this._selected = selected;
    this._originalFiles = originals;

    // Set active field — prefer caller-supplied initial field, else first available.
    const initial = this.initialFieldKey;
    if (initial && this.schema?.fieldsByKey.has(initial)) {
      this._activeFieldKey = initial;
    } else if (this.schema && this.schema.fields.length > 0) {
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

  private _setStagedTaxonodeBulk(
    fileIds: Iterable<string>,
    fieldKey: string,
    entry: TaxonodeEntry | null,
  ): void {
    const next = new Map(this._stagedTaxonodes);
    for (const fileId of fileIds) {
      const fileMap = new Map(next.get(fileId) ?? new Map());
      fileMap.set(fieldKey, entry);
      next.set(fileId, fileMap);
    }
    this._stagedTaxonodes = next;
  }

  private _setStagedTaxonodeSingle(
    fileId: string,
    fieldKey: string,
    entry: TaxonodeEntry | null,
  ): void {
    const next = new Map(this._stagedTaxonodes);
    const fileMap = new Map(next.get(fileId) ?? new Map());
    fileMap.set(fieldKey, entry);
    next.set(fileId, fileMap);
    this._stagedTaxonodes = next;
  }

  // -----------------------------------------------------------------------
  // Active field + filled fields
  // -----------------------------------------------------------------------

  private get _activeField(): MetadataField | undefined {
    return this.schema?.fieldsByKey?.get(this._activeFieldKey);
  }

  /**
   * Union of ultratag items currently present on the selected files for the
   * active ultratags field. Feeds the op-bar's `restrictToItems` so the bulk
   * Delete dropdown only suggests tags actually present on the selection.
   */
  private get _ultratagsPresentOnSelection(): UltratagsValueItem[] {
    const field = this._activeField;
    if (!field || field.type !== 'ultratags') return [];
    let union: Array<UltratagsValueItem | string> = [];
    for (const fileId of this._selected) {
      const file = this._originalFiles.get(fileId);
      const staged = this._staged.get(fileId)?.get(field.key);
      const raw = staged !== undefined ? staged : file?.meta?.[field.key];
      const items = extractUltratagItems(raw);
      if (items.length) {
        union = mergeUltratagItems(union, items, false);
      }
    }
    return union.filter((item): item is UltratagsValueItem => typeof item !== 'string');
  }

  /**
   * Reads the original value for diff/fallback. For real metadata fields this
   * is `file.meta[key]`; for synthetic product fields it's `file.product[pk]`.
   */
  private _originalValue(fileId: string, fieldKey: string): unknown {
    const file = this._originalFiles.get(fileId);
    if (!file) return undefined;
    if (isProductFieldKey(fieldKey)) {
      const pk = productKeyOf(fieldKey);
      return pk ? file.product?.[pk] : undefined;
    }
    return file.meta?.[fieldKey];
  }

  /**
   * Recomputes `_missingRequiredFieldKey` + `_missingRequiredKeys` from the
   * current staged map. Called from `willUpdate` when one of the inputs
   * (schema / config / staged) changes. Preserves Set identity when the
   * contents are unchanged so the sidebar re-renders only when its inputs
   * actually move.
   */
  private _refreshMissingRequired(): void {
    const nextKeys = this.schema
      ? missingRequiredFieldKeysInStaged(
          this._staged,
          this._originalFiles,
          this.schema,
          this.config ?? undefined,
        )
      : new Set<string>();

    // Derive the "first" key in schema iteration order so the footer label is
    // stable. Cheap O(fields) walk over an O(1) Set check.
    let nextFirst: string | null = null;
    if (this.schema && nextKeys.size > 0) {
      for (const field of this.schema.fields) {
        if (nextKeys.has(field.key)) { nextFirst = field.key; break; }
      }
    }

    if (nextFirst !== this._missingRequiredFieldKey) {
      this._missingRequiredFieldKey = nextFirst;
    }

    // Set identity preservation: only swap the reference when contents differ.
    const prev = this._missingRequiredKeys;
    let changed = prev.size !== nextKeys.size;
    if (!changed) {
      for (const k of nextKeys) {
        if (!prev.has(k)) { changed = true; break; }
      }
    }
    if (changed) this._missingRequiredKeys = nextKeys;
  }

  /** Fields where ANY file has a non-empty staged value that differs from original. */
  private get _filledFields(): Set<string> {
    const filled = new Set<string>();
    for (const field of this.schema?.fields ?? []) {
      for (const [fileId, fileMap] of this._staged) {
        const stagedVal = fileMap.get(field.key);
        const origVal = this._originalValue(fileId, field.key);
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

  willUpdate(changed: PropertyValues) {
    // Refresh the required-field gate whenever its inputs change. `_staged`
    // covers user edits; `schema` / `config` cover prop changes from the
    // parent (e.g. switching projects). `_originalFiles` is captured once in
    // `_initStaged`, and that assignment lands in the same tick as the initial
    // `_staged` set — so depending on `_staged` is sufficient.
    if (
      changed.has('_staged') ||
      changed.has('schema') ||
      changed.has('config')
    ) {
      this._refreshMissingRequired();
    }
  }

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

  private _onJumpToNextRequired = async () => {
    const key = this._missingRequiredFieldKey;
    if (!key) return;
    // Defense-in-depth: the footer button is rendered as disabled "Save" when
    // the user is already viewing the missing field (see `blockedAtField` in
    // render()), so this branch is unreachable via the UI. Kept to guard
    // programmatic callers and skip the no-op discard-pending prompt.
    if (this._activeFieldKey === key) return;
    if (!(await this._confirmDiscardPending())) return;
    this._pendingOp = null;
    this._activeFieldKey = key;
  };

  private _onBulkApply = (
    e: CustomEvent<{
      operation: BulkOperation;
      value: unknown;
      taxonomyEntry?: TaxonodeEntry | null;
    }>,
  ) => {
    const field = this._activeField;
    if (!field) return;

    const { operation, value: frontendValue, taxonomyEntry } = e.detail;
    const language = this.config?.language;
    const updates: Array<[string, string, unknown]> = [];

    for (const fileId of this._selected) {
      const fileStaged = this._staged.get(fileId);

      // Use staged value if available; otherwise fall back to the original
      // value (meta or product, depending on the field key).
      const currentStaged = fileStaged?.has(field.key)
        ? fileStaged.get(field.key)
        : this._originalValue(fileId, field.key) ?? null;

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

    if (field.type === 'taxonomy-node' && taxonomyEntry !== undefined) {
      this._setStagedTaxonodeBulk(this._selected, field.key, taxonomyEntry);
    }
  };

  private _onRowTaxonomyEntry = (
    e: CustomEvent<{ fileId: string; fieldKey: string; entry: TaxonodeEntry | null }>,
  ) => {
    const { fileId, fieldKey, entry } = e.detail;
    this._setStagedTaxonodeSingle(fileId, fieldKey, entry);
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
    // Belt-and-braces: the footer's primary button is swapped out when there
    // are missing required fields, but defend the save path itself in case
    // any code path bypasses the visual gate.
    if (this._missingRequiredFieldKey != null) return;
    if (!(await this._confirmDiscardPending())) return;

    const metaChanges: Array<{ fileId: string; meta: Record<string, unknown> }> = [];
    const productChanges: Array<{ fileId: string; product: Partial<Product> }> = [];

    for (const [fileId, fileStagedMap] of this._staged) {
      const originalFile = this._originalFiles.get(fileId);
      if (!originalFile) continue;

      const changedMeta: Record<string, unknown> = {};
      const changedProduct: Partial<Product> = {};

      for (const [fieldKey, stagedVal] of fileStagedMap) {
        const origVal = this._originalValue(fileId, fieldKey);
        if (JSON.stringify(stagedVal) === JSON.stringify(origVal)) continue;

        if (isProductFieldKey(fieldKey)) {
          const pk = productKeyOf(fieldKey);
          if (!pk) continue;
          // Empty string / null on a product key means "clear" — represented as
          // `undefined` so the merge helper drops the field.
          const isEmptyClear = stagedVal === '' || stagedVal == null;
          if (pk === 'position') {
            changedProduct.position = isEmptyClear ? undefined : Number(stagedVal);
          } else {
            changedProduct.ref = isEmptyClear ? undefined : String(stagedVal);
          }
        } else {
          changedMeta[fieldKey] = stagedVal;
        }
      }

      if (Object.keys(changedMeta).length > 0) {
        metaChanges.push({ fileId, meta: changedMeta });
      }
      if (Object.keys(changedProduct).length > 0) {
        productChanges.push({ fileId, product: changedProduct });
      }
    }

    this.dispatchEvent(
      new CustomEvent('metadata-save-batch', {
        detail: { changes: metaChanges },
        bubbles: true,
        composed: true,
      }),
    );

    if (productChanges.length > 0) {
      this.dispatchEvent(
        new CustomEvent('product-save-batch', {
          detail: { changes: productChanges },
          bubbles: true,
          composed: true,
        }),
      );
    }

    const taxonomyChanges: Array<{
      fileId: string;
      taxonodes: Record<string, TaxonodeEntry | null>;
    }> = [];
    for (const [fileId, fileMap] of this._stagedTaxonodes) {
      const originalFile = this._originalFiles.get(fileId);
      if (!originalFile) continue;
      const orig = originalFile.taxonodes ?? {};
      const patch: Record<string, TaxonodeEntry | null> = {};
      for (const [fieldKey, stagedEntry] of fileMap) {
        const origEntry = orig[fieldKey] ?? null;
        if (
          JSON.stringify(stagedEntry ?? null) !==
          JSON.stringify(origEntry ?? null)
        ) {
          patch[fieldKey] = stagedEntry ?? null;
        }
      }
      if (Object.keys(patch).length > 0) {
        taxonomyChanges.push({ fileId, taxonodes: patch });
      }
    }
    if (taxonomyChanges.length > 0) {
      this.dispatchEvent(
        new CustomEvent('taxonomy-save-batch', {
          detail: { changes: taxonomyChanges },
          bubbles: true,
          composed: true,
        }),
      );
    }

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
    const missingKey = this._missingRequiredFieldKey;
    // Fall back to the field key when the schema title is empty (malformed
    // schemas), so the label never reads "Next required:  →" with a missing
    // word.
    const missingTitle = missingKey
      ? this.schema.fieldsByKey.get(missingKey)?.title || missingKey
      : '';
    // When the user is already viewing the field that's blocking save, the
    // "Next required" label would be misleading (they're already here) — and
    // the disabled-button tooltip explaining "why" is invisible in Firefox /
    // Safari. Render disabled "Save" instead: it communicates the goal
    // ("you can't save yet") and lets the sidebar's bold red asterisk on the
    // active field carry the "where" explanation.
    const blockedAtField =
      missingKey != null && this._activeFieldKey === missingKey;
    const showNextRequiredCta = missingKey != null && !blockedAtField;

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
              .missingRequiredKeys=${this._missingRequiredKeys}
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
                      .taxonomyService=${this.taxonomyService}
                      .ultratags=${this.ultratags}
                      .defaultLanguage=${this.defaultLanguage}
                      .ultratagsPresentOnSelection=${this._ultratagsPresentOnSelection}
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
                        .stagedTaxonodes=${this._stagedTaxonodes}
                        .selected=${this._selected}
                        .pendingOp=${this._pendingOp}
                        .config=${this.config}
                        .autocomplete=${this.autocomplete}
                        .taxonomyService=${this.taxonomyService}
                        .ultratags=${this.ultratags}
                        .defaultLanguage=${this.defaultLanguage}
                        @row-field-change=${this._onRowFieldChange}
                        @row-toggle=${this._onRowToggle}
                        @row-taxonomy-entry=${this._onRowTaxonomyEntry}
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
            <!-- Single primary button so transitions between Save and "Next
                 required" don't recreate the DOM node (preserves focus + the
                 hover/active animation). Class, handler, content, and disabled
                 state all swap together.
                 Three states:
                   1. No required field missing      → "Save" (enabled)
                   2. Missing field is NOT active    → "Next required: X →"
                   3. Missing field IS active        → "Save" (disabled) -->
            <button
              class=${classMap({
                'btn-primary': true,
                'btn-primary--next': showNextRequiredCta,
              })}
              @click=${showNextRequiredCta ? this._onJumpToNextRequired : this._onSave}
              ?disabled=${blockedAtField}
              title=${showNextRequiredCta ? `Jump to ${missingTitle}` : ''}
            >
              ${showNextRequiredCta
                ? html`<span class="btn-primary-label">Next required: ${missingTitle}</span><span class="btn-primary-arrow" aria-hidden="true">→</span>`
                : 'Save'}
            </button>
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
