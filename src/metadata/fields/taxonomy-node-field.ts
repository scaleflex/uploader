import { html, css, nothing } from 'lit';
import { property, state } from 'lit/decorators.js';
import { metadataDropdownStyles } from '../metadata.styles';
import { MetadataFieldBase } from './field-base';
import type {
  TaxonodeEntry,
  TaxonomyAutocompleteTag,
  TaxonomyNode,
} from '../taxonomies/taxonomies.types';
import type { TaxonomyService } from '../taxonomies/taxonomies-service';

interface DrillCrumb {
  uuid: string;
  name: string;
  ltree: string;
}

const ROOT_CRUMB: DrillCrumb = { uuid: '__root__', name: '', ltree: '' };

export class SfxMetaTaxonomyNodeField extends MetadataFieldBase {
  static styles = [
    metadataDropdownStyles,
    css`
      .breadcrumb {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        gap: 2px;
        padding: 8px 10px;
        border-bottom: 1px solid var(--sfx-up-border, #e2e8f0);
        font-size: 12px;
        color: var(--sfx-up-text-muted, #94a3b8);
      }
      .crumb {
        background: none;
        border: none;
        padding: 2px 4px;
        font-family: inherit;
        font-size: 12px;
        color: var(--sfx-up-text-secondary, #64748b);
        cursor: pointer;
        border-radius: 4px;
      }
      .crumb:hover { background: var(--sfx-up-hover, #f1f5f9); }
      .crumb.current {
        color: var(--sfx-up-text, #1e293b);
        font-weight: 500;
        cursor: default;
      }
      .crumb.current:hover { background: none; }
      .crumb-sep { color: var(--sfx-up-text-muted, #94a3b8); user-select: none; }

      .tree-row {
        display: flex;
        align-items: center;
        gap: 8px;
        padding: 8px 10px;
        font-size: 14px;
        color: var(--sfx-up-text, #1e293b);
        cursor: pointer;
      }
      .tree-row:hover,
      .tree-row.active { background: var(--sfx-up-hover, #f1f5f9); }
      .tree-row.selected {
        color: var(--sfx-up-primary, #2563eb);
        font-weight: 500;
      }
      .tree-name {
        flex: 1;
        min-width: 0;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      .tree-count {
        color: var(--sfx-up-text-muted, #94a3b8);
        font-size: 13px;
      }
      .tree-radio {
        flex-shrink: 0;
        width: 14px;
        height: 14px;
        border-radius: 50%;
        border: 1.5px solid var(--sfx-up-border, #e2e8f0);
        display: inline-flex;
        align-items: center;
        justify-content: center;
        box-sizing: border-box;
      }
      .tree-radio.checked {
        border-color: var(--sfx-up-primary, #2563eb);
      }
      .tree-radio.checked::after {
        content: '';
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background: var(--sfx-up-primary, #2563eb);
      }
      .tree-chevron {
        flex-shrink: 0;
        width: 14px;
        height: 14px;
        color: var(--sfx-up-text-muted, #94a3b8);
      }
      .tree-chevron svg { width: 100%; height: 100%; display: block; }
      .tree-chevron.hidden { visibility: hidden; }

      .ac-row {
        display: flex;
        flex-direction: column;
        gap: 2px;
        padding: 6px 10px;
        font-size: 14px;
        cursor: pointer;
        color: var(--sfx-up-text, #1e293b);
      }
      .ac-row:hover,
      .ac-row.active { background: var(--sfx-up-hover, #f1f5f9); }
      .ac-tag {
        font-weight: 500;
      }
      .ac-path {
        font-size: 11px;
        color: var(--sfx-up-text-muted, #94a3b8);
      }

      .dropdown.taxo {
        max-height: 320px;
        display: flex;
        flex-direction: column;
      }
      .dropdown.taxo > .search,
      .dropdown.taxo > .breadcrumb {
        flex-shrink: 0;
      }
      .scroll {
        overflow-y: auto;
      }

      .misconfigured {
        padding: 8px 10px;
        border: 1px dashed var(--sfx-up-error, #dc2626);
        border-radius: 6px;
        font-size: 13px;
        color: var(--sfx-up-error, #dc2626);
      }
    `,
  ];

  @property({ attribute: false }) taxonomyService?: TaxonomyService;
  @property({ attribute: false }) entry: TaxonodeEntry | null = null;

  @state() private _open = false;
  @state() private _query = '';
  @state() private _drillStack: DrillCrumb[] = [ROOT_CRUMB];
  @state() private _currentNodes: TaxonomyNode[] = [];
  @state() private _searchResults: TaxonomyAutocompleteTag[] = [];
  @state() private _loading = false;
  @state() private _activeIndex = -1;
  @state() private _resolvedTaxonomyUuid: string | null = null;
  @state() private _taxonomyResolutionFailed = false;

  private _boundOutsideClick = this._onOutsideClick.bind(this);
  private _searchSeq = 0;

  private get _taxonomySuid(): string | undefined {
    const params = (this.field?.model?.parameters as
      | { taxonomy_suid?: string }
      | undefined) ?? undefined;
    return params?.taxonomy_suid;
  }

  /** Resolve `taxonomy_suid` (the human code on the field) → taxonomy UUID
   *  (what `/v5/taxonomy/{uuid}/nodes` expects). Memoised per element. */
  private async _resolveTaxonomyUuid(): Promise<string | null> {
    if (this._resolvedTaxonomyUuid) return this._resolvedTaxonomyUuid;
    const suid = this._taxonomySuid;
    if (!suid || !this.taxonomyService) return null;
    const taxonomies = await this.taxonomyService.fetchTaxonomies();
    const match = taxonomies.find((t) => t.suid === suid);
    if (!match) {
      console.warn(
        `[sfx-uploader] taxonomy '${suid}' not found in catalogue. Field "${this.field?.ckey ?? this.field?.key}" model:`,
        this.field?.model,
        'Available taxonomies:',
        taxonomies.map((t) => ({ suid: t.suid, uuid: t.uuid, name: t.name })),
      );
      this._taxonomyResolutionFailed = true;
      return null;
    }
    this._resolvedTaxonomyUuid = match.uuid;
    this._taxonomyResolutionFailed = false;
    return match.uuid;
  }

  private get _isSearchMode(): boolean {
    return this._query.trim().length > 0;
  }

  private get _selectedScalar(): string {
    return typeof this.value === 'string' ? this.value : '';
  }

  private get _displayPath(): string {
    if (this.entry?.path) return this.entry.path;
    if (this.entry?.name) return this.entry.name;
    return this._selectedScalar;
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    document.removeEventListener('mousedown', this._boundOutsideClick);
    this.taxonomyService?.cancel();
  }

  private _onOutsideClick(e: MouseEvent) {
    if (!e.composedPath().includes(this)) {
      this._close();
    }
  }

  private async _openDropdown() {
    if (!this._taxonomySuid || !this.taxonomyService) return;
    this._open = true;
    this._query = '';
    this._activeIndex = -1;
    // Pre-position to the selected node's parent so the user lands on
    // siblings rather than the root every time. Falls back to root for
    // unset fields and for entries picked via autocomplete (which carry
    // no lineage).
    this._drillStack = this._seedDrillStackFromEntry();
    document.addEventListener('mousedown', this._boundOutsideClick);
    await this._loadCurrentNodes();
    this.updateComplete.then(() => {
      this.renderRoot.querySelector<HTMLInputElement>('.search')?.focus();
    });
  }

  private _seedDrillStackFromEntry(): DrillCrumb[] {
    const entry = this.entry;
    if (!entry?.lineage) return [ROOT_CRUMB];
    const ltreeParts = entry.lineage.split('.').filter(Boolean);
    if (ltreeParts.length <= 1) return [ROOT_CRUMB];
    const ancestorLtree = ltreeParts.slice(0, -1);
    const nameParts = entry.path
      ? entry.path.split(/\s*[›>]\s*/).filter(Boolean)
      : [];
    const ancestorNames = nameParts.slice(0, -1);
    const crumbs: DrillCrumb[] = [ROOT_CRUMB];
    let cumulative = '';
    for (let i = 0; i < ancestorLtree.length; i++) {
      cumulative = cumulative
        ? `${cumulative}.${ancestorLtree[i]}`
        : ancestorLtree[i];
      crumbs.push({
        uuid: `__seed_${cumulative}`,
        name: ancestorNames[i] ?? ancestorLtree[i],
        ltree: cumulative,
      });
    }
    return crumbs;
  }

  willUpdate(changed: Map<string, unknown>) {
    if (changed.has('field')) {
      // Field swapped — flush the resolved UUID; the new field may point to a
      // different taxonomy.
      this._resolvedTaxonomyUuid = null;
      this._taxonomyResolutionFailed = false;
    }
  }

  private _close() {
    if (!this._open) return;
    this._open = false;
    this._activeIndex = -1;
    document.removeEventListener('mousedown', this._boundOutsideClick);
    // Abort any in-flight drill or autocomplete request — the popover is gone,
    // their results would only land in dropped state.
    this.taxonomyService?.cancel();
    this._emit('field-blur', this._selectedScalar);
  }

  private async _loadCurrentNodes() {
    if (!this.taxonomyService) return;
    this._loading = true;
    const seq = ++this._searchSeq;
    const uuid = await this._resolveTaxonomyUuid();
    if (seq !== this._searchSeq) return;
    if (!uuid) {
      this._currentNodes = [];
      this._loading = false;
      return;
    }
    const baseLtree = this._drillStack[this._drillStack.length - 1].ltree;
    const resp = await this.taxonomyService.fetchNodes(uuid, baseLtree);
    if (seq !== this._searchSeq) return;
    this._currentNodes = resp.nodes;
    this._loading = false;
    // Highlight + scroll-to the currently selected node when it lives in this
    // level (e.g. after the drill-stack was pre-positioned to the parent on
    // reopen). Falls back to no highlight when the selected node isn't in
    // sight (different branch, root level, or unset field).
    const selected = this._selectedScalar;
    const selectedIdx = selected
      ? this._currentNodes.findIndex(
          (n) => n.uuid === selected || n.slug === selected,
        )
      : -1;
    this._activeIndex = selectedIdx;
    if (selectedIdx >= 0) this._scrollActive();
  }

  private _onSearchInput(e: Event) {
    const q = (e.target as HTMLInputElement).value;
    this._query = q;
    this._activeIndex = -1;
    if (!q.trim() || !this.taxonomyService) {
      this._searchResults = [];
      this._loading = false;
      this.taxonomyService?.cancel();
      return;
    }
    this._loading = true;
    const seq = ++this._searchSeq;
    this.taxonomyService.autocomplete(this.field.ckey, q, (results) => {
      if (seq !== this._searchSeq) return;
      this._searchResults = results;
      this._loading = false;
    });
  }

  private async _drillInto(node: TaxonomyNode) {
    this._drillStack = [
      ...this._drillStack,
      { uuid: node.uuid, name: node.name, ltree: node.ltree },
    ];
    await this._loadCurrentNodes();
  }

  private async _jumpToCrumb(idx: number) {
    if (idx < 0 || idx >= this._drillStack.length) return;
    this._drillStack = this._drillStack.slice(0, idx + 1);
    await this._loadCurrentNodes();
  }

  private _buildTreeEntry(node: TaxonomyNode): TaxonodeEntry {
    // The admin v5 app gets the full taxonode info (name, path, lineage) back
    // from the BE in the PATCH /file response, then caches it on
    // `file.taxonodes`. The uploader runs *before* the file exists on the BE,
    // so there's no PATCH and no server-side taxonode to read. We synthesise
    // the same shape locally from the `/v5/taxonomy/{uuid}/nodes` responses
    // we've already cached during drilling: ancestor names come from the
    // drill stack, the leaf comes from the node itself.
    const parents = this._drillStack
      .filter((c) => c.uuid !== ROOT_CRUMB.uuid)
      .map((c) => c.name);
    const path = [...parents, node.name].filter(Boolean).join(' › ');
    return {
      uuid: node.uuid,
      suid: node.slug,
      name: node.name,
      path: path || node.name,
      lineage: node.ltree,
      slug: node.slug,
      attributes: (node.attr as Record<string, unknown> | null | undefined) ?? null,
    };
  }

  private _buildAutocompleteEntry(
    tag: TaxonomyAutocompleteTag,
  ): TaxonodeEntry {
    const path = tag.path || tag.tag;
    const last = path.split(/\s*[›>]\s*/).filter(Boolean).pop() ?? tag.tag;
    return {
      uuid: tag.uuid,
      suid: tag.suid,
      name: last,
      path,
      lineage: '',
    };
  }

  private _emitTaxonomyEntry(entry: TaxonodeEntry | null) {
    this.dispatchEvent(
      new CustomEvent('taxonomy-entry-change', {
        detail: { key: this.field.key, entry },
        bubbles: true,
        composed: true,
      }),
    );
  }

  private _selectTreeNode(node: TaxonomyNode) {
    // The BE accepts uuid, slug, or suid; prefer uuid (canonical) and fall back
    // to slug for nodes that haven't been issued a uuid yet.
    const scalar = node.uuid || node.slug;
    const entry = this._buildTreeEntry(node);
    this.value = scalar;
    this.entry = entry;
    this._emit('field-change', scalar);
    this._emitTaxonomyEntry(entry);
    this._close();
  }

  private _selectAutocomplete(tag: TaxonomyAutocompleteTag) {
    const scalar = tag.suid || tag.uuid;
    const entry = this._buildAutocompleteEntry(tag);
    this.value = scalar;
    this.entry = entry;
    this._emit('field-change', scalar);
    this._emitTaxonomyEntry(entry);
    this._close();
  }

  private _clear(e: Event) {
    e.stopPropagation();
    this.value = '';
    this.entry = null;
    this._emit('field-change', '');
    this._emitTaxonomyEntry(null);
    this._emit('field-blur', '');
  }

  private get _navigableCount(): number {
    return this._isSearchMode
      ? this._searchResults.length
      : this._currentNodes.length;
  }

  private _scrollActive() {
    this.updateComplete.then(() => {
      this.renderRoot.querySelector('.tree-row.active, .ac-row.active')
        ?.scrollIntoView({ block: 'nearest' });
    });
  }

  private _onKeydown(e: KeyboardEvent) {
    if (e.key === 'Escape') {
      this._open = false;
      this._activeIndex = -1;
      document.removeEventListener('mousedown', this._boundOutsideClick);
      this.taxonomyService?.cancel();
      this._emit('field-escape');
      this.renderRoot.querySelector<HTMLButtonElement>('.trigger')?.focus();
      return;
    }

    const total = this._navigableCount;

    if (this._activeIndex >= total) {
      this._activeIndex = Math.max(total - 1, -1);
    }

    if (e.key === 'ArrowDown') {
      e.preventDefault();
      this._activeIndex = Math.min(this._activeIndex + 1, total - 1);
      this._scrollActive();
      return;
    }
    if (e.key === 'ArrowUp') {
      e.preventDefault();
      this._activeIndex = Math.max(this._activeIndex - 1, -1);
      this._scrollActive();
      return;
    }

    if (e.key === 'ArrowRight' && !this._isSearchMode) {
      if (this._activeIndex >= 0 && this._activeIndex < this._currentNodes.length) {
        const node = this._currentNodes[this._activeIndex];
        if (node.children.count_direct > 0) {
          e.preventDefault();
          this._drillInto(node);
        }
      }
      return;
    }

    if (e.key === 'ArrowLeft' && !this._isSearchMode) {
      if (this._drillStack.length > 1) {
        e.preventDefault();
        this._jumpToCrumb(this._drillStack.length - 2);
      }
      return;
    }

    if (e.key === 'Enter') {
      if (this._activeIndex < 0) return;
      e.preventDefault();
      if (this._isSearchMode) {
        const tag = this._searchResults[this._activeIndex];
        if (tag) this._selectAutocomplete(tag);
      } else {
        const node = this._currentNodes[this._activeIndex];
        if (node) this._selectTreeNode(node);
      }
    }
  }

  private _renderBreadcrumb() {
    const crumbs = this._drillStack;
    if (crumbs.length <= 1) return nothing;
    return html`
      <div class="breadcrumb">
        ${crumbs.map((c, i) => {
          const isLast = i === crumbs.length - 1;
          const label = c.uuid === ROOT_CRUMB.uuid ? 'Root' : c.name;
          return html`
            ${i > 0 ? html`<span class="crumb-sep">›</span>` : nothing}
            <button class="crumb ${isLast ? 'current' : ''}" type="button"
              ?disabled=${isLast}
              @click=${() => !isLast && this._jumpToCrumb(i)}>
              ${label}
            </button>
          `;
        })}
      </div>
    `;
  }

  private _renderTree() {
    if (this._loading && this._currentNodes.length === 0) {
      return html`<div class="empty">Loading…</div>`;
    }
    if (this._taxonomyResolutionFailed) {
      return html`<div class="empty">Taxonomy not found</div>`;
    }
    if (this._currentNodes.length === 0) {
      return html`<div class="empty">No nodes</div>`;
    }
    const selected = this._selectedScalar;
    return html`
      <div class="scroll" role="listbox">
        ${this._currentNodes.map((node, i) => {
          const hasChildren = node.children.count_direct > 0;
          const isSelected =
            !!selected && (selected === node.uuid || selected === node.slug);
          return html`
            <div class="tree-row ${i === this._activeIndex ? 'active' : ''} ${isSelected ? 'selected' : ''}"
              role="option" aria-selected=${isSelected}
              @mouseenter=${() => { this._activeIndex = i; }}
              @click=${() => hasChildren ? this._drillInto(node) : this._selectTreeNode(node)}>
              <span class="tree-radio ${isSelected ? 'checked' : ''}" role="button"
                aria-label="Select ${node.name}"
                @click=${(e: Event) => { e.stopPropagation(); this._selectTreeNode(node); }}></span>
              <span class="tree-name" title=${node.name}>${node.name}</span>
              ${hasChildren
                ? html`<span class="tree-count" aria-hidden="true">(${node.children.count_direct})</span>`
                : nothing}
              <span class="tree-chevron ${hasChildren ? '' : 'hidden'}" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="m9 18 6-6-6-6"/>
                </svg>
              </span>
            </div>
          `;
        })}
      </div>
    `;
  }

  private _renderSearch() {
    if (this._loading && this._searchResults.length === 0) {
      return html`<div class="empty">Loading…</div>`;
    }
    if (this._searchResults.length === 0) {
      return html`<div class="empty">No results</div>`;
    }
    return html`
      <div class="scroll" role="listbox">
        ${this._searchResults.map((tag, i) => html`
          <div class="ac-row ${i === this._activeIndex ? 'active' : ''}"
            role="option"
            @mouseenter=${() => { this._activeIndex = i; }}
            @click=${() => this._selectAutocomplete(tag)}>
            <span class="ac-tag">${tag.tag}</span>
            ${tag.path && tag.path !== tag.tag
              ? html`<span class="ac-path">${tag.path}</span>`
              : nothing}
          </div>
        `)}
      </div>
    `;
  }

  render() {
    if (!this._taxonomySuid) {
      return html`<div class="misconfigured" role="alert">Field is missing taxonomy config</div>`;
    }

    const title = this.field?.title ?? '';
    const placeholderFallback = title
      ? `Select ${title.toLowerCase()}`
      : 'Select a node';
    const path = this._displayPath;
    const hasValue = !!path;

    return html`
      <button class="trigger" type="button"
        ?disabled=${this.disabled}
        role="combobox"
        aria-expanded=${this._open}
        aria-haspopup="listbox"
        @click=${() => (this._open ? this._close() : this._openDropdown())}
        @keydown=${(e: KeyboardEvent) => {
          if (!this._open && (e.key === 'ArrowDown' || e.key === 'Enter' || e.key === ' ')) {
            e.preventDefault();
            this._openDropdown();
          }
        }}>
        ${hasValue
          ? html`<span class="trigger-value" title=${path}>${path}</span>`
          : html`<span class="placeholder">${this.field?.placeholder || placeholderFallback}</span>`}
        ${hasValue && !this.disabled ? html`
          <span class="trigger-clear" role="button" tabindex="0" aria-label="Clear"
            @click=${this._clear}
            @keydown=${(e: KeyboardEvent) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); this._clear(e); } }}>&times;</span>
        ` : nothing}
        <span class="trigger-chevron ${this._open ? 'open' : ''}" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="m6 9 6 6 6-6"/>
          </svg>
        </span>
      </button>

      ${this._open ? html`
        <div class="dropdown taxo" @keydown=${this._onKeydown}>
          <input class="search" type="text"
            aria-label="Search taxonomy"
            placeholder="Search…"
            .value=${this._query}
            @input=${this._onSearchInput} />
          ${!this._isSearchMode ? this._renderBreadcrumb() : nothing}
          ${this._isSearchMode ? this._renderSearch() : this._renderTree()}
        </div>
      ` : nothing}
    `;
  }
}

customElements.define('sfx-meta-taxonomy-node-field', SfxMetaTaxonomyNodeField);
