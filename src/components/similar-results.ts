import { LitElement, html, css, nothing } from 'lit';
import { property } from 'lit/decorators.js';
import { buttonStyles, focusStyles } from './shared-styles';
import type { TFunction, UploadFile } from '../store/store.types';
import type { SimilarAsset } from '../sfx-uploader';
import { formatFileSize } from '../utils/file-utils';

/** One checked image plus its similar-asset results. */
export interface SimilarReviewImage {
  id: string;
  name: string;
  previewUrl: string | null;
  /** The full upload file — rendered with the real <sfx-file-item> tile. */
  file: UploadFile;
  results: SimilarAsset[];
}

/**
 * Review panel for the "Check similar assets" results (master-detail modal).
 * Left: the checked images (badge "N similar" / "No similar"). Right: the
 * selected image's similar assets with Open / Discard actions.
 *
 * Fires:
 *  - `similar-results-select`  → { fileId }   (pick another checked image)
 *  - `similar-results-open`    → { url }       (open a similar asset)
 *  - `similar-results-discard` → { fileId }    (discard the reviewed image)
 *  - `similar-results-close`   → void
 */
export class SfxSimilarResults extends LitElement {
  static styles = [
    buttonStyles,
    focusStyles,
    css`
      :host {
        font-family: var(--sfx-up-font, 'Inter', system-ui, sans-serif);
        /* Design-system text colors (dark / muted) for the whole modal. */
        --sfx-up-text: #37414b;
        --sfx-up-text-muted: #5b6e82;
        --sfx-up-text-secondary: #5b6e82;
        color: var(--sfx-up-text);
      }
      .backdrop {
        position: fixed;
        inset: 0;
        z-index: 11000;
        background: var(--sfx-up-backdrop, rgba(0, 0, 0, 0.45));
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 24px;
      }
      /* Fixed size — always the same width/height; content scrolls inside. */
      .modal {
        width: min(1040px, 96vw);
        height: min(760px, 88vh);
        background: var(--sfx-up-bg, #fff);
        border-radius: var(--sfx-up-radius, 16px);
        box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
        display: flex;
        flex-direction: column;
        overflow: hidden;
      }
      .head {
        display: flex;
        align-items: center;
        gap: 12px;
        padding: 16px 20px;
        border-bottom: 1px solid var(--sfx-up-border-light, #f1f5f9);
      }
      .head b { font-size: 16px; font-weight: 500; }
      .head .sub { font-size: 14px; color: var(--sfx-up-text-muted, #94a3b8); margin-left: auto; }
      /* Close button — same as the product header close (.header-btn). */
      .close-x {
        width: 30px; height: 30px; border-radius: 8px; border: none;
        background: var(--sfx-up-surface, #f8fafc); color: var(--sfx-up-text-muted, #94a3b8);
        cursor: pointer; display: flex; align-items: center; justify-content: center;
        transition: background 0.15s, color 0.15s; flex-shrink: 0;
      }
      .close-x svg { width: 16px; height: 16px; }
      .close-x:hover { background: var(--sfx-up-border, #e2e8f0); color: var(--sfx-up-text, #37414b); }

      .split { display: flex; min-height: 0; flex: 1; }
      .left {
        flex: 0 0 56%; min-width: 0; padding: 16px; overflow-y: auto;
        border-right: 1px solid var(--sfx-up-border, #e8edf5); background: var(--sfx-up-bg, #fff);
      }
      .left-head { font-size: 12px; color: var(--sfx-up-text-secondary, #475569); margin: 0 4px 12px; }
      .grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
        gap: 12px; align-content: start;
      }
      .tile {
        border-radius: 10px; background: #fff; border: 1px solid #dde3ed;
        box-shadow: 0 1px 3px rgba(0,0,0,.04), 0 4px 12px rgba(0,0,0,.06);
        position: relative; overflow: hidden; cursor: pointer; transition: box-shadow .15s;
      }
      .tile.sel { box-shadow: 0 0 0 1px var(--sfx-up-primary, #2563eb); }
      .tile .preview { position: relative; aspect-ratio: 16/10; overflow: hidden; background: var(--sfx-up-surface, #eef); }
      .tile .preview img { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; }
      .tile .info { padding: 6px 9px; }
      .tile .name { font-size: 12px; color: var(--sfx-up-text); white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
      .badge {
        position: absolute; top: 7px; left: 7px; z-index: 2;
        display: inline-flex; align-items: center; gap: 4px; height: 22px; padding: 0 8px;
        border-radius: 999px; background: var(--sfx-up-primary, #2563eb); color: #fff;
        font-size: 10.5px; font-weight: 700; box-shadow: 0 2px 6px var(--sfx-up-primary-glow, rgba(37,99,235,.22));
      }
      .badge.none { background: #fff; color: var(--sfx-up-text-muted, #94a3b8); border: 1px solid var(--sfx-up-border, #e2e8f0); box-shadow: none; }

      .right { flex: 1; min-width: 0; min-height: 0; display: flex; flex-direction: column; }
      .p-head { display: flex; align-items: center; gap: 10px; padding: 14px 16px; border-bottom: 1px solid var(--sfx-up-border-light, #f1f5f9); }
      .p-head .src { width: 40px; height: 40px; border-radius: 8px; object-fit: cover; flex: 0 0 40px; background: var(--sfx-up-surface, #eef); }
      .p-head .ttl { flex: 1; min-width: 0; }
      .p-head .ttl b { font-size: 14px; font-weight: 500; display: block; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
      .p-head .ttl span { font-size: 12px; color: var(--sfx-up-text-muted, #94a3b8); }
      .nav { display: inline-flex; gap: 6px; }
      .nav button { width: 30px; height: 30px; border-radius: 8px; border: 1px solid var(--sfx-up-border, #e2e8f0); background: #fff; color: var(--sfx-up-text-secondary, #475569); cursor: pointer; display: inline-flex; align-items: center; justify-content: center; }
      .nav button:hover:not(:disabled) { background: var(--sfx-up-border-light, #f1f5f9); }
      .nav button:disabled { opacity: .4; cursor: not-allowed; }
      .nav svg { width: 14px; height: 14px; }

      .p-body { padding: 16px; overflow-y: auto; flex: 1; min-height: 0; display: grid; grid-template-columns: repeat(auto-fill, minmax(170px, 1fr)); grid-auto-rows: max-content; gap: 12px; align-content: start; }
      .card { border: 1px solid #dde3ed; border-radius: 10px; overflow: hidden; background: #fff; box-shadow: 0 1px 3px rgba(0,0,0,.04); }
      .card .iw { position: relative; aspect-ratio: 16/10; background: var(--sfx-up-surface, #eef); }
      .card .iw img { width: 100%; height: 100%; object-fit: cover; display: block; }
      .score {
        position: absolute; top: 8px; left: 8px; z-index: 2; font-size: 11px; font-weight: 700;
        padding: 3px 8px; border-radius: 999px; background: rgba(255,255,255,.95);
        color: var(--sfx-up-primary, #2563eb); box-shadow: 0 2px 8px rgba(0,0,0,.15);
      }
      .score.high { color: var(--sfx-up-success, #15803d); }
      .card-open {
        position: absolute; top: 8px; right: 8px; z-index: 2; width: 26px; height: 26px; border-radius: 6px;
        border: none; background: rgba(255,255,255,.95); box-shadow: 0 1px 4px rgba(0,0,0,.18);
        color: var(--sfx-up-primary, #2563eb); display: inline-flex; align-items: center; justify-content: center; cursor: pointer;
      }
      .card-open svg { width: 13px; height: 13px; }
      .card .foot { padding: 7px 9px; border-top: 1px solid var(--sfx-up-border-light, #f1f5f9); }
      .card .foot-name { font-size: 12px; color: var(--sfx-up-text, #37414b); white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
      .card .foot-meta { font-size: 11px; color: var(--sfx-up-text-muted, #5b6e82); white-space: nowrap; overflow: hidden; text-overflow: ellipsis; margin-top: 1px; }

      .empty { flex: 1; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 10px; color: var(--sfx-up-text-muted, #94a3b8); padding: 40px; text-align: center; }
      .empty .ic { width: 48px; height: 48px; border-radius: 50%; background: var(--sfx-up-surface, #f8fafc); display: flex; align-items: center; justify-content: center; }
      .empty .ic svg { width: 22px; height: 22px; }
      .empty b { color: var(--sfx-up-text-secondary, #475569); font-size: 14px; }
      .empty span { font-size: 12px; }

      .p-foot { padding: 14px 24px; border-top: 1px solid var(--sfx-up-border-light, #f1f5f9); background: var(--sfx-up-bg, #fff); }
      .discard {
        width: 100%; height: 38px; border-radius: 6px; border: 1.5px solid #fecaca; background: #fff;
        color: var(--sfx-up-error, #dc2626); font-family: inherit; font-size: 14px; line-height: 24px; font-weight: 500; cursor: pointer;
        display: inline-flex; align-items: center; justify-content: center; gap: 8px;
      }
      .discard:hover { background: #fef2f2; }
      .discard svg { width: 14px; height: 14px; }

      @media (max-width: 720px) {
        .split { flex-direction: column; }
        .left { flex: none; border-right: none; border-bottom: 1px solid var(--sfx-up-border, #e8edf5); max-height: 40%; }
      }
    `,
  ];

  @property({ attribute: false }) t: TFunction = (k, d) => (typeof d === 'string' ? d : k);
  @property({ attribute: false }) images: SimilarReviewImage[] = [];
  @property({ type: String }) selectedId = '';

  private _prevHtmlOverflow = '';
  private _prevBodyOverflow = '';
  private _scrollLocked = false;

  /** Lock background scroll while the modal is open so the page behind it
   *  doesn't scroll; the modal's own panels still scroll internally.
   *  Idempotent: a second connectedCallback (re-insertion) won't re-save the
   *  already-locked value, which previously left the page stuck on close. */
  connectedCallback() {
    super.connectedCallback();
    if (this._scrollLocked) return;
    this._scrollLocked = true;
    this._prevHtmlOverflow = document.documentElement.style.overflow;
    this._prevBodyOverflow = document.body.style.overflow;
    document.documentElement.style.overflow = 'hidden';
    document.body.style.overflow = 'hidden';
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    if (!this._scrollLocked) return;
    this._scrollLocked = false;
    document.documentElement.style.overflow = this._prevHtmlOverflow;
    document.body.style.overflow = this._prevBodyOverflow;
  }

  private _emit(name: string, detail?: Record<string, unknown>) {
    this.dispatchEvent(new CustomEvent(name, { detail, bubbles: true, composed: true }));
  }

  /** Filename derived from the asset url (when the BE doesn't send a name). */
  private _assetName(r: SimilarAsset): string {
    return r.name || r.url?.split('/').pop()?.split('?')[0] || r.uuid;
  }

  /** Meta line: format · size · resolution. Size/resolution show only when the
   *  backend provides them (see SimilarAsset TODO(dev)); format comes from name. */
  private _assetMeta(r: SimilarAsset): string {
    const ext = this._assetName(r).split('.').pop()?.toUpperCase() ?? '';
    const parts = [ext];
    if (r.size) parts.push(formatFileSize(r.size));
    if (r.width && r.height) parts.push(`${r.width}×${r.height}`);
    return parts.filter(Boolean).join(' · ');
  }

  private _selected(): SimilarReviewImage | undefined {
    return this.images.find((im) => im.id === this.selectedId) ?? this.images[0];
  }

  private _navigate(dir: -1 | 1) {
    const idx = this.images.findIndex((im) => im.id === this._selected()?.id);
    const next = this.images[idx + dir];
    if (next) this._emit('similar-results-select', { fileId: next.id });
  }

  private _openIcon() {
    return html`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>`;
  }

  render() {
    const cur = this._selected();
    if (!cur) return nothing;
    const idx = this.images.findIndex((im) => im.id === cur.id);

    return html`
      <div class="backdrop" @click=${(e: Event) => { if (e.target === e.currentTarget) this._emit('similar-results-close'); }}>
        <div class="modal" role="dialog" aria-modal="true">
          <div class="head">
            <b>${this.t('similarResultsTitle', 'Similar assets review')}</b>
            <span class="sub">${this.t('similarResultsSummary', {
              count: this.images.length,
              defaultValue_one: '{{count}} image with similar assets',
              defaultValue_other: '{{count}} images with similar assets',
            })}</span>
            <button class="close-x" @click=${() => this._emit('similar-results-close')} aria-label=${this.t('close', 'Close')}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
            </button>
          </div>

          <div class="split">
            <div class="left">
              <div class="left-head">${this.t('pickToReview', 'Pick an image to review its similar assets')}</div>
              <div class="grid">
                ${this.images.map((im) => html`
                  <sfx-file-item
                    .t=${this.t}
                    .file=${im.file}
                    .similarCount=${im.results.length}
                    .similarResults=${im.results}
                    .isSelected=${im.id === cur.id}
                    reviewPick
                  ></sfx-file-item>
                `)}
              </div>
            </div>

            <div class="right">
              <div class="p-head">
                ${cur.previewUrl ? html`<img class="src" src=${cur.previewUrl} alt="" />` : nothing}
                <div class="ttl">
                  <b>${cur.name}</b>
                  <span>${cur.results.length > 0
                    ? this.t('nSimilarFound', {
                        count: cur.results.length,
                        defaultValue_one: '{{count}} similar asset found',
                        defaultValue_other: '{{count}} similar assets found',
                      })
                    : this.t('noSimilarFound', 'No similar assets found')}</span>
                </div>
                <div class="nav">
                  <button ?disabled=${idx <= 0} @click=${() => this._navigate(-1)} aria-label=${this.t('previous', 'Previous')}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><polyline points="15 18 9 12 15 6"/></svg>
                  </button>
                  <button ?disabled=${idx >= this.images.length - 1} @click=${() => this._navigate(1)} aria-label=${this.t('next', 'Next')}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><polyline points="9 18 15 12 9 6"/></svg>
                  </button>
                </div>
              </div>

              ${cur.results.length > 0
                ? html`
                    <div class="p-body">
                      ${cur.results.map((r) => {
                        const pct = Math.round(r.score * 100);
                        return html`
                          <div class="card">
                            <div class="iw">
                              <span class="score ${r.score >= 0.9 ? 'high' : ''}">${pct}%</span>
                              <button class="card-open" @click=${() => this._emit('similar-results-open', { url: r.url })} title=${this.t('openInNewWindow', 'Open in new window')}>${this._openIcon()}</button>
                              ${r.url ? html`<img src=${r.url} alt="" />` : nothing}
                            </div>
                            <div class="foot">
                              <div class="foot-name">${this._assetName(r)}</div>
                              <div class="foot-meta">${this._assetMeta(r)}</div>
                            </div>
                          </div>
                        `;
                      })}
                    </div>
                    <div class="p-foot">
                      <button class="discard" @click=${() => this._emit('similar-results-discard', { fileId: cur.id })}>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 6h18"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"/><path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/><line x1="10" x2="10" y1="11" y2="17"/><line x1="14" x2="14" y1="11" y2="17"/></svg>
                        ${this.t('discardFromUpload', 'Discard from upload')}
                      </button>
                    </div>
                  `
                : html`
                    <div class="empty">
                      <span class="ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="11" cy="11" r="7"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg></span>
                      <b>${this.t('noSimilarFound', 'No similar assets found')}</b>
                      <span>${this.t('noSimilarHint', 'This image looks unique in your library.')}</span>
                    </div>
                  `}
            </div>
          </div>
        </div>
      </div>
    `;
  }
}
