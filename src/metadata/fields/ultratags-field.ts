import { html, css, nothing } from 'lit';
import { property, state } from 'lit/decorators.js';
import { MetadataFieldBase } from './field-base';
import { metadataChipStyles } from '../metadata.styles';
import {
  ULTRATAGS_AUTOCOMPLETE_LIMIT,
  ULTRATAGS_CREATE_MODES,
  ULTRATAGS_LIST_FORMAT_REGVAR_API,
  ULTRATAGS_SEARCH_DEBOUNCE_MS,
  ULTRATAGS_SEARCH_MIN_QUERY_LENGTH,
} from '../ultratags/ultratags.constants';
import type {
  UltratagEntry,
  UltratagsServiceLike,
  UltratagsValue,
  UltratagsValueItem,
} from '../ultratags/ultratags.types';
import {
  buildUltratagsLookup,
  deriveSlug,
  enrichUltratagItems,
  isUltratagSid,
  resolveLabel,
} from '../ultratags/ultratags.utils';

interface DropdownOption {
  entry: UltratagEntry;
  label: string;
}

const sameKey = (item: UltratagsValueItem, ref: { uuid?: string; sid?: string; slug?: string }): boolean => {
  if (ref.uuid && item.uuid === ref.uuid) return true;
  if (ref.sid && item.sid === ref.sid) return true;
  if (ref.slug && item.slug === ref.slug) return true;
  return false;
};

export class SfxMetaUltratagsField extends MetadataFieldBase {
  static styles = [
    metadataChipStyles,
    css`
      :host { display: block; position: relative; }

      .container {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        gap: 4px;
        min-height: 36px;
        padding: 4px 8px;
        border: 1px solid var(--sfx-up-border, #e2e8f0);
        border-radius: 6px;
        background: var(--sfx-up-bg, #fff);
        box-sizing: border-box;
        cursor: text;
      }
      .container:focus-within {
        border-color: var(--sfx-up-primary, #2563eb);
        box-shadow:
          0 0 0 2px var(--sfx-up-bg, #fff),
          0 0 0 5px var(--sfx-up-ring, oklch(0.578 0.198 268.129 / 0.7));
      }

      .input {
        flex: 1;
        min-width: 80px;
        border: none;
        outline: none;
        font-size: 14px;
        font-family: var(--sfx-up-font, 'Inter', system-ui, -apple-system, sans-serif);
        color: var(--sfx-up-text, #1e293b);
        background: transparent;
        padding: 2px 0;
      }
      .input::placeholder {
        font-family: var(--sfx-up-font, 'Inter', system-ui, -apple-system, sans-serif);
        font-size: 14px;
        color: var(--sfx-up-text-muted, #94a3b8);
        opacity: 1;
      }

      .dropdown {
        position: absolute;
        top: calc(100% + 4px);
        left: 0;
        right: 0;
        z-index: 10;
        background: var(--sfx-up-bg, #fff);
        border: 1px solid var(--sfx-up-border, #e2e8f0);
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        max-height: 240px;
        overflow-y: auto;
      }

      .option {
        padding: 8px 10px;
        font-size: 14px;
        cursor: pointer;
        color: var(--sfx-up-text, #1e293b);
      }
      .option:hover, .option.active { background: var(--sfx-up-hover, #f1f5f9); }
      .option.create {
        color: var(--sfx-up-primary, #2563eb);
        font-weight: 500;
        border-top: 1px solid var(--sfx-up-border, #e2e8f0);
      }
      .option .label-fallback {
        color: var(--sfx-up-text-muted, #94a3b8);
        font-size: 12px;
        margin-left: 6px;
      }

      .loading, .empty, .hint {
        padding: 8px 10px;
        font-size: 13px;
        color: var(--sfx-up-text-muted, #94a3b8);
      }
    `,
  ];

  @property({ attribute: false }) ultratags?: UltratagsServiceLike;
  @property({ attribute: false }) language?: string;
  @property({ attribute: false }) defaultLanguage?: string;
  /**
   * When provided, the dropdown is limited to this set instead of querying the
   * API and the "Create" affordance is hidden. Used by bulk-edit "Remove" to
   * only suggest tags actually present on the selected files.
   */
  @property({ attribute: false }) restrictToItems?: UltratagsValueItem[];

  @state() private _query = '';
  @state() private _results: UltratagEntry[] = [];
  @state() private _loading = false;
  @state() private _dropdownOpen = false;
  @state() private _activeIndex = -1;

  private _blurTimeout: ReturnType<typeof setTimeout> | null = null;
  /** SIDs we have already asked the backend to resolve — never retry on the
   *  same SID even if it didn't come back, otherwise an unknown SID would
   *  trigger an infinite re-fetch loop as `value` keeps re-rendering. */
  private _enrichmentAttempted = new Set<string>();

  private get _items(): UltratagsValueItem[] {
    if (!Array.isArray(this.value)) return [];
    return (this.value as UltratagsValue).map((v) => (typeof v === 'string' ? (isUltratagSid(v) ? { sid: v } : { slug: v }) : v));
  }

  private get _currentLang(): string {
    return this.language || 'en';
  }

  private get _defaultLang(): string {
    return this.defaultLanguage || this._currentLang;
  }

  private get _isRestricted(): boolean {
    return Array.isArray(this.restrictToItems);
  }

  connectedCallback() {
    super.connectedCallback();
    this._maybeEnrichBySids();
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    if (this._blurTimeout) clearTimeout(this._blurTimeout);
    this.ultratags?.cancel();
  }

  updated(changed: Map<string, unknown>) {
    if (changed.has('value')) {
      this._maybeEnrichBySids();
    }
  }

  /**
   * On first render (and after a value swap), resolve any items that are
   * SID-only into full entries so the pills can show readable labels. Each
   * SID is fetched at most once to keep an unknown SID from looping forever.
   */
  private async _maybeEnrichBySids() {
    const svc = this.ultratags;
    if (!svc) return;
    const items = this._items;
    if (items.length === 0) return;
    const needsResolution: string[] = [];
    for (const item of items) {
      if (item.sid && !item.i18n && !this._enrichmentAttempted.has(item.sid)) {
        needsResolution.push(item.sid);
      }
    }
    if (needsResolution.length === 0) return;
    for (const sid of needsResolution) this._enrichmentAttempted.add(sid);
    try {
      const resp = await svc.getBySids({
        sids: needsResolution,
        format: ULTRATAGS_LIST_FORMAT_REGVAR_API,
      });
      const lookup = buildUltratagsLookup(resp.items || []);
      const enriched = enrichUltratagItems(items, lookup);
      this.value = enriched;
    } catch {
      // Resolution best-effort — chips fall back to slug/sid if it fails.
    }
  }

  private _selectedKeys(): Set<string> {
    const set = new Set<string>();
    for (const item of this._items) {
      if (item.uuid) set.add(item.uuid);
      if (item.sid) set.add(item.sid);
      if (item.slug) set.add(item.slug);
    }
    return set;
  }

  private _entryAlreadySelected(entry: Pick<UltratagEntry, 'uuid' | 'sid' | 'slug'>): boolean {
    const selected = this._selectedKeys();
    return (
      (!!entry.uuid && selected.has(entry.uuid)) ||
      (!!entry.sid && selected.has(entry.sid)) ||
      selected.has(entry.slug)
    );
  }

  private _labelForItem(item: UltratagsValueItem): string {
    const fake: Pick<UltratagEntry, 'i18n' | 'slug'> = {
      i18n: item.i18n,
      slug: item.slug || '',
    };
    const resolved = resolveLabel(fake, this._currentLang, this._defaultLang).value;
    return resolved || item.slug || item.sid || '';
  }

  private get _restrictedEntries(): UltratagEntry[] {
    if (!this._isRestricted) return [];
    return (this.restrictToItems || []).map((item) => ({
      slug: item.slug || '',
      sid: item.sid,
      uuid: item.uuid || '',
      i18n: item.i18n,
    })) as UltratagEntry[];
  }

  private get _dropdownOptions(): DropdownOption[] {
    const selected = this._selectedKeys();
    const isSelected = (e: Pick<UltratagEntry, 'uuid' | 'sid' | 'slug'>): boolean =>
      (!!e.uuid && selected.has(e.uuid)) || (!!e.sid && selected.has(e.sid)) || selected.has(e.slug);

    const source = this._isRestricted ? this._restrictedEntries : this._results;
    const filtered = source
      .filter((entry) => !isSelected(entry))
      .map((entry) => ({
        entry,
        label: resolveLabel(entry, this._currentLang, this._defaultLang).value || entry.slug,
      }));

    if (this._isRestricted) {
      const q = this._query.trim().toLowerCase();
      if (q) return filtered.filter((o) => o.label.toLowerCase().includes(q));
      return filtered;
    }
    return filtered;
  }

  private get _isSearching(): boolean {
    return this._query.trim().length >= ULTRATAGS_SEARCH_MIN_QUERY_LENGTH;
  }

  private get _canCreate(): boolean {
    if (this._isRestricted) return false;
    if (!this._isSearching || this._loading) return false;
    const trimmed = this._query.trim();
    const slug = deriveSlug(trimmed);
    if (!slug) return false;
    const selected = this._selectedKeys();
    if (selected.has(slug)) return false;
    if (this._dropdownOptions.some((o) => o.label.toLowerCase() === trimmed.toLowerCase())) return false;
    return true;
  }

  private get _itemCount(): number {
    return this._dropdownOptions.length + (this._canCreate ? 1 : 0);
  }

  private _onInput(e: Event) {
    const q = (e.target as HTMLInputElement).value;
    this._query = q;
    this._dropdownOpen = true;
    this._activeIndex = -1;

    if (this._isRestricted) {
      // Local filter only — no remote search.
      this._loading = false;
      return;
    }

    if (!this._isSearching || !this.field?.key) {
      this._results = [];
      this._loading = false;
      this.ultratags?.cancel();
      return;
    }

    const svc = this.ultratags;
    if (!svc) return;
    // Admin parity: the BE matches case-insensitively, but lowercase queries
    // dedupe identical searches that differ only in capitalisation.
    const normalised = q.trim().toLowerCase();
    this._loading = true;
    // No `lang` param — admin v5 omits it too. The BE returns full
    // multilingual `i18n` for every entry and label resolution is done
    // client-side via `resolveLabel(entry, _currentLang, _defaultLang)`.
    svc
      .list({
        meta: this.field.key,
        q: normalised,
        limit: ULTRATAGS_AUTOCOMPLETE_LIMIT,
        format: ULTRATAGS_LIST_FORMAT_REGVAR_API,
      })
      .then((resp) => {
        if (this._query.trim().toLowerCase() !== normalised) return; // outdated
        this._results = resp.items || [];
        this._loading = false;
      })
      .catch(() => {
        if (this._query.trim().toLowerCase() !== normalised) return;
        this._results = [];
        this._loading = false;
      });
  }

  private _addEntry(entry: UltratagEntry) {
    if (this._entryAlreadySelected(entry)) return;
    const newItem: UltratagsValueItem = {
      slug: entry.slug,
      sid: entry.sid,
      uuid: entry.uuid,
      i18n: entry.i18n,
    };
    const next = [...this._items, newItem];
    this.value = next;
    this._query = '';
    this._results = [];
    this._dropdownOpen = false;
    this._activeIndex = -1;
    this._emit('field-change', next);
    this.updateComplete.then(() => {
      this.renderRoot.querySelector<HTMLInputElement>('.input')?.focus();
    });
  }

  private async _createFromQuery() {
    const trimmed = this._query.trim();
    if (!trimmed) return;
    const svc = this.ultratags;
    if (!svc || !this.field?.key) return;
    const slug = deriveSlug(trimmed);
    if (!slug) return;
    const lang = this._currentLang;
    try {
      const result = await svc.create({
        meta: this.field.key,
        mode: ULTRATAGS_CREATE_MODES.UPSERT,
        items: [{ slug, i18n: { [lang]: trimmed } }],
      });
      const created = result?.output?.[0];
      const enriched: UltratagsValueItem = {
        slug: created?.slug || slug,
        sid: created?.sid,
        uuid: created?.uuid,
        i18n: created?.i18n || { [lang]: trimmed },
      };
      if (
        this._entryAlreadySelected({
          uuid: enriched.uuid || '',
          sid: enriched.sid,
          slug: enriched.slug || slug,
        })
      ) {
        return;
      }
      const next = [...this._items, enriched];
      this.value = next;
      this._query = '';
      this._results = [];
      this._dropdownOpen = false;
      this._activeIndex = -1;
      this._emit('field-change', next);
      this.updateComplete.then(() => {
        this.renderRoot.querySelector<HTMLInputElement>('.input')?.focus();
      });
    } catch {
      // Create failures are non-fatal — the dropdown stays open so the user
      // can retry. The uploader has no toast surface yet, so we only log here.
      console.warn('[sfx-uploader] ultratag create failed');
    }
  }

  private _removeItem(item: UltratagsValueItem) {
    const next = this._items.filter((existing) => !sameKey(existing, item));
    this.value = next;
    this._emit('field-change', next);
  }

  private _onBlur() {
    if (this._blurTimeout) clearTimeout(this._blurTimeout);
    this._blurTimeout = setTimeout(() => {
      this._blurTimeout = null;
      if (!this.renderRoot.querySelector('.dropdown:hover')) {
        this._dropdownOpen = false;
        this._activeIndex = -1;
        this._emit('field-blur', this._items);
      }
    }, 150);
  }

  private _scrollActive() {
    this.updateComplete.then(() => {
      this.renderRoot.querySelector('.option.active')?.scrollIntoView({ block: 'nearest' });
    });
  }

  private _onKeydown(e: KeyboardEvent) {
    if (e.key === 'Escape') {
      this._dropdownOpen = false;
      this._activeIndex = -1;
      this._emit('field-escape');
      return;
    }
    if (e.key === 'Backspace' && !this._query && this._items.length) {
      this._removeItem(this._items[this._items.length - 1]);
      return;
    }
    if (!this._dropdownOpen) return;

    const total = this._itemCount;
    if (this._activeIndex >= total) {
      this._activeIndex = Math.max(total - 1, -1);
    }
    if (total === 0 && e.key !== 'Enter') return;

    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault();
        this._activeIndex = Math.min(this._activeIndex + 1, total - 1);
        this._scrollActive();
        break;
      case 'ArrowUp':
        e.preventDefault();
        this._activeIndex = Math.max(this._activeIndex - 1, -1);
        this._scrollActive();
        break;
      case 'Home':
        e.preventDefault();
        this._activeIndex = 0;
        this._scrollActive();
        break;
      case 'End':
        e.preventDefault();
        this._activeIndex = total - 1;
        this._scrollActive();
        break;
      case 'Enter': {
        e.preventDefault();
        const options = this._dropdownOptions;
        if (this._activeIndex >= 0 && this._activeIndex < options.length) {
          this._addEntry(options[this._activeIndex].entry);
        } else if (this._activeIndex === options.length && this._canCreate) {
          void this._createFromQuery();
        } else if (this._activeIndex === -1 && this._canCreate) {
          void this._createFromQuery();
        } else if (this._activeIndex === -1 && options.length) {
          this._addEntry(options[0].entry);
        }
        break;
      }
    }
  }

  render() {
    const items = this._items;
    const options = this._dropdownOptions;
    const createIdx = options.length;
    const trimmed = this._query.trim();
    const placeholderText =
      this.field?.placeholder || (this._isRestricted ? 'Search tags to remove' : 'Add custom tags');

    return html`
      <div class="container" @click=${() => this.renderRoot.querySelector<HTMLInputElement>('.input')?.focus()}>
        ${items.map((item) => {
          const label = this._labelForItem(item);
          const key = item.uuid || item.sid || item.slug || label;
          return html`
            <span class="chip" title=${label}>
              ${label}
              <button class="chip-x" aria-label="Remove ${label}"
                @click=${(e: Event) => { e.stopPropagation(); this._removeItem(item); }}>&times;</button>
            </span>`;
        })}
        <input class="input" type="text" .value=${this._query}
          role="combobox" aria-expanded=${this._dropdownOpen} aria-haspopup="listbox"
          aria-label=${this.field?.title ?? 'Custom tags'}
          placeholder=${items.length ? '' : placeholderText}
          ?disabled=${this.disabled}
          @input=${this._onInput} @blur=${this._onBlur}
          @focus=${() => { this._dropdownOpen = true; }}
          @keydown=${this._onKeydown} />
      </div>

      ${this._dropdownOpen ? html`
        <div class="dropdown" role="listbox">
          ${!this._isRestricted && !this._isSearching
            ? html`<div class="hint">Type at least ${ULTRATAGS_SEARCH_MIN_QUERY_LENGTH} characters to search.</div>`
            : nothing}
          ${!this._isRestricted && this._isSearching && this._loading
            ? html`<div class="loading">Loading…</div>`
            : nothing}
          ${(this._isRestricted || (this._isSearching && !this._loading))
            ? options.map((o, i) => html`
                <div class="option ${i === this._activeIndex ? 'active' : ''}" role="option"
                  @mousedown=${(e: Event) => { e.preventDefault(); this._addEntry(o.entry); }}
                  @mouseenter=${() => { this._activeIndex = i; }}>
                  ${o.label}
                </div>`)
            : nothing}
          ${(this._isRestricted || (this._isSearching && !this._loading)) && options.length === 0 && !this._canCreate
            ? html`<div class="empty">No results found</div>`
            : nothing}
          ${this._canCreate
            ? html`
              <div class="option create ${createIdx === this._activeIndex ? 'active' : ''}"
                @mousedown=${(e: Event) => { e.preventDefault(); void this._createFromQuery(); }}
                @mouseenter=${() => { this._activeIndex = createIdx; }}>
                Create '${trimmed}'
              </div>`
            : nothing}
        </div>
      ` : nothing}
    `;
  }
}

customElements.define('sfx-meta-ultratags-field', SfxMetaUltratagsField);
