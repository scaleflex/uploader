import { html, css, nothing } from 'lit';
import { property, state } from 'lit/decorators.js';
import type { TagOption } from '../schema/schema.types';
import { metadataChipStyles } from '../metadata.styles';
import { MetadataFieldBase } from './field-base';
import { isSameTag, createTag } from '../tags/tag-utils';

export class SfxMetaTagsField extends MetadataFieldBase {
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
        max-height: 200px;
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
      }

      .loading, .empty {
        padding: 8px 10px;
        font-size: 13px;
        color: var(--sfx-up-text-muted, #94a3b8);
      }
    `,
  ];

  @property({ attribute: false }) autocomplete?: {
    search(ckey: string, query: string, callback: (results: TagOption[]) => void): void;
    cancel(): void;
  };

  @state() private _query = '';
  @state() private _results: TagOption[] = [];
  @state() private _loading = false;
  @state() private _dropdownOpen = false;
  @state() private _activeIndex = -1;
  private _blurTimeout: ReturnType<typeof setTimeout> | null = null;

  private get _tags(): TagOption[] {
    return Array.isArray(this.value) ? (this.value as TagOption[]) : [];
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    if (this._blurTimeout) clearTimeout(this._blurTimeout);
    this.autocomplete?.cancel();
  }

  private _onInput(e: Event) {
    const q = (e.target as HTMLInputElement).value;
    this._query = q;
    this._dropdownOpen = true;
    this._activeIndex = -1;

    if (!q.trim() || !this.field?.ckey) {
      this._results = [];
      this._loading = false;
      this.autocomplete?.cancel();
      return;
    }

    this._loading = true;
    this.autocomplete?.search(this.field.ckey, q, (results) => {
      this._results = results;
      this._loading = false;
    });
  }

  private _addTag(tag: TagOption) {
    if (this._tags.some(t => isSameTag(t, tag))) return;
    const next = [...this._tags, tag];
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

  private _removeTag(tag: TagOption) {
    const next = this._tags.filter(t => !isSameTag(t, tag));
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
        this._emit('field-blur', this._tags);
      }
    }, 150);
  }

  private _scrollActive() {
    this.updateComplete.then(() => {
      this.renderRoot.querySelector('.option.active')?.scrollIntoView({ block: 'nearest' });
    });
  }

  /** Total navigable items: suggestions + optional "Create" item. */
  private get _itemCount(): number {
    return this._suggestions.length + (this._canCreate ? 1 : 0);
  }

  private _onKeydown(e: KeyboardEvent) {
    if (e.key === 'Escape') {
      this._dropdownOpen = false;
      this._activeIndex = -1;
      this._emit('field-escape');
      return;
    }

    if (e.key === 'Backspace' && !this._query && this._tags.length) {
      this._removeTag(this._tags[this._tags.length - 1]);
      return;
    }

    if (!this._dropdownOpen) return;

    const total = this._itemCount;

    // Clamp _activeIndex if async results changed the list size
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
        const suggestions = this._suggestions;
        if (this._activeIndex >= 0 && this._activeIndex < suggestions.length) {
          this._addTag(suggestions[this._activeIndex]);
        } else if (this._activeIndex === suggestions.length && this._canCreate) {
          this._addTag(createTag(this._query));
        } else if (this._activeIndex === -1 && this._canCreate) {
          // Enter with no navigation: create tag from query
          this._addTag(createTag(this._query));
        } else if (this._activeIndex === -1 && suggestions.length) {
          // Enter with no navigation: select first suggestion
          this._addTag(suggestions[0]);
        }
        break;
      }
    }
  }

  private get _suggestions(): TagOption[] {
    const q = this._query.toLowerCase().trim();
    const selected = this._tags;

    const fromSchema = (this.field?.possible_values ?? [])
      .map(pv => ({ value: pv.api_value || pv.internal_unique_value, label: pv.label }))
      .filter(t => !selected.some(s => isSameTag(s, t)))
      .filter(t => !q || t.label.toLowerCase().includes(q));

    const fromAuto = this._results.filter(
      t => !selected.some(s => isSameTag(s, t)) && !fromSchema.some(s => isSameTag(s, t)),
    );

    return [...fromSchema, ...fromAuto];
  }

  private get _canCreate(): boolean {
    const q = this._query.trim();
    if (!q || this._loading) return false;
    const candidate = createTag(q);
    return (
      !this._tags.some(t => isSameTag(t, candidate)) &&
      !this._suggestions.some(t => isSameTag(t, candidate))
    );
  }

  render() {
    const tags = this._tags;
    const suggestions = this._suggestions;
    const createIdx = suggestions.length; // index of "Create" item in the navigable list

    return html`
      <div class="container" @click=${() => this.renderRoot.querySelector<HTMLInputElement>('.input')?.focus()}>
        ${tags.map(t => html`
          <span class="chip">
            ${t.label}
            <button class="chip-x" aria-label="Remove ${t.label}" @click=${(e: Event) => { e.stopPropagation(); this._removeTag(t); }}>&times;</button>
          </span>`)}
        <input class="input" type="text" .value=${this._query}
          role="combobox" aria-expanded=${this._dropdownOpen} aria-haspopup="listbox"
          aria-label=${this.field?.title ?? 'Tags'}
          placeholder=${tags.length ? '' : (this.field?.placeholder || 'Add tags')}
          ?disabled=${this.disabled}
          @input=${this._onInput} @blur=${this._onBlur} @keydown=${this._onKeydown} />
      </div>

      ${this._dropdownOpen && (this._query.trim() || suggestions.length) ? html`
        <div class="dropdown" role="listbox">
          ${this._loading ? html`<div class="loading">Loading</div>` : nothing}
          ${suggestions.map((t, i) => html`
            <div class="option ${i === this._activeIndex ? 'active' : ''}" role="option"
              @mousedown=${(e: Event) => { e.preventDefault(); this._addTag(t); }}
              @mouseenter=${() => { this._activeIndex = i; }}>
              ${t.label}
            </div>`)}
          ${this._canCreate ? html`
            <div class="option create ${createIdx === this._activeIndex ? 'active' : ''}"
              @mousedown=${(e: Event) => { e.preventDefault(); this._addTag(createTag(this._query)); }}
              @mouseenter=${() => { this._activeIndex = createIdx; }}>
              Create '${this._query.trim()}'
            </div>` : nothing}
          ${!this._loading && !suggestions.length && !this._canCreate
            ? html`<div class="empty">No results</div>` : nothing}
        </div>
      ` : nothing}
    `;
  }
}

customElements.define('sfx-meta-tags-field', SfxMetaTagsField);
