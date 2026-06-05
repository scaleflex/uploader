import { LitElement, html, css, nothing } from 'lit';
import { property, state } from 'lit/decorators.js';
import { cspStyle } from '../utils/csp-style';
import type { UploadFile, TFunction } from '../store/store.types';
import { formatFileSize, getFileCategory, getFileExtension, getFileTypeIconUrl, getDefaultFileTypeIconUrl, isBrowserUnrenderableImage } from '../utils/file-utils';

export class SfxFileItem extends LitElement {
  static styles = css`
    :host {
      display: block;
    }

    .tile {
      border-radius: 10px;
      background: var(--sfx-up-bg, #fff);
      border: 1px solid #dde3ed;
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04), 0 4px 12px rgba(0, 0, 0, 0.06);
      animation: tileIn 0.45s cubic-bezier(0.34, 1.2, 0.64, 1) both;
      animation-delay: calc(min(var(--tile-index, 0), 8) * 0.04s);
      transition: box-shadow 0.15s, transform 0.15s;
      cursor: default;
      display: flex;
      flex-direction: column;
      position: relative;
      min-width: 0;
      overflow: hidden;
    }

    .tile:hover {
      box-shadow: 0 2px 6px rgba(0, 0, 0, 0.06), 0 6px 16px rgba(0, 0, 0, 0.08);
    }

    /* --- Preview area --- */
    .preview {
      position: relative;
      aspect-ratio: 16 / 10;
      overflow: hidden;
      flex-shrink: 0;
      background-color: var(--sfx-up-checker-bg, #fff);
      background-image:
        linear-gradient(45deg, var(--sfx-up-checker-tile, #f0f0f0) 25%, transparent 25%),
        linear-gradient(-45deg, var(--sfx-up-checker-tile, #f0f0f0) 25%, transparent 25%),
        linear-gradient(45deg, transparent 75%, var(--sfx-up-checker-tile, #f0f0f0) 75%),
        linear-gradient(-45deg, transparent 75%, var(--sfx-up-checker-tile, #f0f0f0) 75%);
      background-size: 16px 16px;
      background-position: 0 0, 0 8px, 8px -8px, -8px 0;
      border-radius: 10px 10px 0 0;
    }

    .preview-bg {
      position: absolute;
      inset: 0;
    }

    .preview-img {
      position: absolute;
      inset: 0;
      margin: auto;
      display: block;
      max-width: 100%;
      max-height: 100%;
    }

    .preview-bg.pdf { background: linear-gradient(135deg, #fef2f2, #fee2e2); }
    .preview-bg.doc { background: linear-gradient(135deg, #eff6ff, #dbeafe); }
    .preview-bg.vid { background: linear-gradient(135deg, #f5f3ff, #ede9fe); }
    .preview-bg.audio { background: linear-gradient(135deg, #fdf4ff, #fae8ff); }
    .preview-bg.sheet { background: linear-gradient(135deg, #f0fdf4, #dcfce7); }
    .preview-bg.slide { background: linear-gradient(135deg, #fff7ed, #ffedd5); }
    .preview-bg.zip { background: linear-gradient(135deg, #fffbeb, #fef3c7); }
    .preview-bg.code { background: linear-gradient(135deg, #f0f9ff, #e0f2fe); }
    .preview-bg.markup { background: linear-gradient(135deg, #f0fdfa, #ccfbf1); }
    .preview-bg.font { background: linear-gradient(135deg, #faf5ff, #f3e8ff); }
    .preview-bg.design { background: linear-gradient(135deg, #fdf2f8, #fce7f3); }
    .preview-bg.binary { background: linear-gradient(135deg, #f8fafc, #f1f5f9); }
    .preview-bg.data { background: linear-gradient(135deg, #ecfdf5, #d1fae5); }
    .preview-bg.gen { background: linear-gradient(135deg, #f8fafc, #f1f5f9); }

    /* --- File type icon --- */
    .type-icon {
      position: absolute;
      inset: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      pointer-events: none;
    }

    .type-icon-img {
      max-width: 72px;
      max-height: 72px;
      object-fit: contain;
    }

    .duration-badge {
      position: absolute;
      bottom: 6px;
      right: 6px;
      background: rgba(0, 0, 0, 0.65);
      color: #fff;
      font-size: 11px;
      font-weight: 600;
      padding: 2px 6px;
      border-radius: 4px;
      line-height: 1.3;
      pointer-events: none;
      z-index: 2;
    }

    /* --- Info bar --- */
    .info {
      padding: 8px 12px;
      min-width: 0;
      overflow: hidden;
    }

    .name-input {
      display: block;
      width: 100%;
      max-width: 100%;
      box-sizing: border-box;
      margin-bottom: 2px;
      min-width: 0;
      font-size: 12px;
      font-weight: 400;
      color: var(--foreground, var(--sfx-up-text, #111827));
      border: 1px solid transparent;
      border-radius: 3px;
      padding: 1px 4px;
      background: transparent;
      font-family: inherit;
      outline: none;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      transition: border-color 0.15s, background 0.15s;
    }
    .name-input:hover {
      border-color: var(--sfx-up-border, #e2e8f0);
      background: var(--sfx-up-bg, #fff);
    }
    .name-input:focus {
      border-color: var(--sfx-up-primary, #2563eb);
      background: var(--sfx-up-bg, #fff);
    }

    .meta {
      font-size: 12px;
      font-weight: 400;
      color: var(--sfx-up-text-muted, #94a3b8);
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      padding-left: 5px;
    }

    .tile.done {
      box-shadow: 0 0 0 2px var(--sfx-up-primary, #2563eb);
    }

    /* In review mode every tile is complete — the per-tile blue ring would
       turn the whole grid into a wall of borders, so suppress it. The status
       badge in the corner already conveys "uploaded successfully". */
    .tile.review.done {
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04), 0 4px 12px rgba(0, 0, 0, 0.06);
    }

    /* --- Action buttons --- */
    .actions {
      position: absolute;
      top: 6px;
      right: 6px;
      display: flex;
      gap: 4px;
      opacity: 0;
      transition: opacity 0.15s;
      z-index: 10;
    }

    .tile:hover .actions,
    .tile:focus-within .actions {
      opacity: 1;
    }

    /* Touch devices: always show actions since there is no hover */
    @media (hover: none) {
      .actions { opacity: 1; }
    }

    .act-btn {
      width: 26px;
      height: 26px;
      border-radius: 6px;
      border: none;
      background: var(--sfx-up-bg, #fff);
      box-shadow: 0 1px 4px var(--sfx-up-shadow, rgba(0, 0, 0, 0.15));
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: background 0.15s, transform 0.15s;
      color: var(--sfx-up-text-muted, #9ca3af);
      padding: 0;
    }

    .act-btn:hover {
      background: var(--sfx-up-border-light, #f3f4f6);
      transform: scale(1.08);
    }

    .act-btn.del:hover {
      background: var(--destructive-10, #fee2e2);
      color: var(--sfx-up-error, #dc2626);
    }

    .act-btn.retry:hover {
      background: var(--sfx-up-primary-bg, #eff6ff);
      color: var(--sfx-up-primary, #2563eb);
    }

    .act-btn svg {
      width: 11px;
      height: 11px;
    }

    /* --- Preview button --- */
    /* Centered hover actions wrapper (Details + optional Check similar).
       Flex column with stretch so both buttons share one width. */
    .center-actions {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      display: flex;
      flex-direction: column;
      gap: 6px;
      align-items: stretch;
      opacity: 0;
      transition: opacity 0.15s ease;
      z-index: 5;
    }

    .tile:hover .center-actions,
    .tile:focus-within .center-actions {
      opacity: 1;
    }

    @media (hover: none) {
      .center-actions { opacity: 1; }
    }

    .preview-btn,
    .check-similar-btn {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 5px;
      padding: 8px 16px;
      /* Consistent width so Details matches Check similar in both modes. */
      min-width: 150px;
      border-radius: 6px;
      cursor: pointer;
      font-family: inherit;
      font-size: 12px;
      font-weight: 600;
      white-space: nowrap;
      transition: all 0.15s ease;
    }

    /* Details — white, borderless (transparent border keeps the same box
       height as Check similar), blue text. On hover it stays white and scales
       up slightly (no blue fill, no darkening). Same look in both modes. */
    .preview-btn {
      border: 1px solid var(--sfx-up-primary, #2563eb);
      background: var(--sfx-up-bg, #fff);
      color: var(--sfx-up-primary, #2563eb);
    }

    .preview-btn:hover {
      background: var(--sfx-up-bg, #fff);
      color: var(--sfx-up-primary, #2563eb);
      transform: scale(1.05);
    }

    .preview-btn:hover svg {
      stroke: var(--sfx-up-primary, #2563eb);
    }

    /* Check similar — filled primary, visually distinct from Details */
    .check-similar-btn {
      border: 1.5px solid var(--sfx-up-primary, #2563eb);
      background: var(--sfx-up-primary, #2563eb);
      color: var(--sfx-up-bg, #fff);
      box-shadow: 0 2px 8px var(--sfx-up-primary-glow, rgba(37, 99, 235, 0.35));
    }

    /* No darkening on hover — same color, just a slight scale-up (both
       buttons grow on hover, not only Details). */
    .check-similar-btn:hover {
      background: var(--sfx-up-primary, #2563eb);
      border-color: var(--sfx-up-primary, #2563eb);
      transform: scale(1.05);
    }

    .preview-btn svg,
    .check-similar-btn svg {
      width: 13px;
      height: 13px;
    }

    /* Asset-picker style: on hover a dark semi-transparent overlay covers the
       preview, with the Details / Check similar buttons sitting on top. Only
       when the feature is enabled (cs-overlay) — normal mode is untouched. */
    .tile.cs-overlay .preview::after {
      content: '';
      position: absolute;
      inset: 0;
      background: rgba(0, 0, 0, 0);
      transition: background 0.15s ease;
      pointer-events: none;
      z-index: 2;
    }

    .tile.cs-overlay:hover .preview::after {
      background: rgba(0, 0, 0, 0.45);
    }

    /* --- Similar-image selection mode (asset-picker look) --- */
    .tile.selectable { cursor: pointer; }
    /* Selected: blue ring hugging the card, depth shadow preserved. */
    .tile.selected {
      box-shadow:
        0 0 0 1px var(--sfx-up-primary, #2563eb),
        0 1px 3px rgba(0, 0, 0, 0.04),
        0 4px 12px rgba(0, 0, 0, 0.06);
    }
    /* Non-image tiles can't be checked — dim them while selecting. */
    .tile.select-dimmed { opacity: 0.5; }

    /* Always-visible checkbox: empty white square → filled blue when checked. */
    .similar-cb {
      position: absolute;
      top: 8px;
      left: 8px;
      box-sizing: border-box;
      width: 24px;
      height: 24px;
      border-radius: 6px;
      border: 1.5px solid #cbd5e1;
      background: var(--sfx-up-bg, #fff);
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12);
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      z-index: 11;
      transition: all 0.15s ease;
    }

    .similar-cb svg { width: 16px; height: 16px; opacity: 0; transition: opacity 0.15s ease; }

    .similar-cb.checked {
      background: var(--sfx-up-primary, #2563eb);
      border-color: var(--sfx-up-primary, #2563eb);
    }

    .similar-cb.checked svg { opacity: 1; }

    /* --- Progress bar --- */
    .progress {
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      height: 2px;
      background: rgba(0, 0, 0, 0.06);
    }

    .progress-fill {
      height: 100%;
      background: var(--sfx-up-primary, #2563eb);
      transform-origin: left;
      transition: transform 0.32s ease;
    }

    /* --- Uploading spinner overlay --- */
    .spinner-overlay {
      position: absolute;
      inset: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      background: rgba(0, 0, 0, 0.22);
      opacity: 0;
      transition: opacity 0.2s;
      pointer-events: none;
    }

    .tile.uploading .spinner-overlay {
      opacity: 1;
    }

    .spin-ring {
      width: 28px;
      height: 28px;
      border: 2.5px solid rgba(255, 255, 255, 0.22);
      border-top-color: #fff;
      border-radius: 50%;
      animation: spinRing 0.7s linear infinite;
    }

    /* --- Done badge --- */
    .done-badge {
      position: absolute;
      top: 8px;
      left: 8px;
      width: 24px;
      height: 24px;
      border-radius: 50%;
      background: var(--sfx-up-primary, #2563eb);
      display: flex;
      align-items: center;
      justify-content: center;
      pointer-events: none;
      z-index: 10;
    }

    .done-badge svg {
      width: 14px;
      height: 14px;
    }

    /* --- Review mode: failed badge (mirrors done-badge) --- */
    .failed-badge {
      position: absolute;
      top: 8px;
      left: 8px;
      width: 24px;
      height: 24px;
      border-radius: 50%;
      background: var(--sfx-up-error, #dc2626);
      display: flex;
      align-items: center;
      justify-content: center;
      pointer-events: none;
      z-index: 10;
      color: #fff;
    }

    .failed-badge svg {
      width: 14px;
      height: 14px;
    }

    /* --- Review mode: stacked hover actions (Locate / Copy CDN) --- */
    .review-actions {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      display: flex;
      flex-direction: column;
      gap: 10px;
      opacity: 0;
      transition: opacity 0.15s ease;
      z-index: 6;
      pointer-events: none;
    }

    .tile.review:hover .review-actions,
    .tile.review:focus-within .review-actions {
      opacity: 1;
      pointer-events: auto;
    }

    @media (hover: none) {
      .tile.review .review-actions {
        opacity: 1;
        pointer-events: auto;
      }
    }

    .review-action {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      padding: 10px 18px;
      border-radius: 10px;
      border: none;
      font-family: inherit;
      font-size: 13px;
      font-weight: 600;
      white-space: nowrap;
      cursor: pointer;
      transition: transform 0.18s cubic-bezier(0.34, 1.3, 0.64, 1),
                  box-shadow 0.18s ease,
                  background 0.15s ease;
      box-shadow: 0 4px 12px rgba(15, 23, 42, 0.18),
                  0 1px 2px rgba(15, 23, 42, 0.08);
    }

    .review-action:hover {
      transform: scale(1.05);
      box-shadow: 0 6px 18px rgba(15, 23, 42, 0.22),
                  0 1px 3px rgba(15, 23, 42, 0.1);
    }

    .review-action:active {
      transform: scale(1.02);
    }

    .review-action svg {
      width: 15px;
      height: 15px;
      fill: none;
      stroke: currentColor;
      stroke-width: 2;
      stroke-linecap: round;
      stroke-linejoin: round;
    }

    /* Secondary — white card style (matches Preview in design system) */
    .review-action.secondary {
      background: rgba(255, 255, 255, 0.96);
      color: var(--sfx-up-text, #1e293b);
    }

    /* Primary — solid blue (matches + Select in design system) */
    .review-action.primary {
      background: var(--sfx-up-primary, #2563eb);
      color: #fff;
    }

    .review-action.primary:hover {
      background: var(--sfx-up-primary-hover, #1d4ed8);
    }

    /* Brief green flash after a successful clipboard copy */
    .review-action.copied {
      background: #16a34a !important;
      color: #fff;
    }

    /* --- Error / rejected state --- */
    .error-badge {
      position: absolute;
      bottom: 6px;
      left: 6px;
      right: 6px;
      font-size: 11px;
      font-weight: 500;
      line-height: 1.3;
      color: #fff;
      background: color-mix(in srgb, var(--sfx-up-error, #dc2626) 85%, transparent);
      border-radius: 6px;
      padding: 4px 8px;
      text-align: center;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }

    .tile.rejected {
      opacity: 0.6;
      box-shadow: 0 0 0 2px var(--sfx-up-error, #dc2626);
    }

    /* --- "Already uploaded" note (neutral, not an error) --- */
    .exists-badge {
      position: absolute;
      bottom: 6px;
      left: 6px;
      right: 6px;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 4px;
      font-size: 11px;
      font-weight: 500;
      line-height: 1.3;
      color: #fff;
      background: color-mix(in srgb, var(--sfx-up-text, #1e293b) 72%, transparent);
      border-radius: 6px;
      padding: 4px 8px;
      text-align: center;
      overflow: hidden;
    }

    .exists-badge svg {
      width: 12px;
      height: 12px;
      flex-shrink: 0;
    }

    /* --- Paused state --- */
    .tile.paused .spinner-overlay {
      opacity: 1;
      background: rgba(0, 0, 0, 0.35);
    }

    .tile.paused .spin-ring { display: none; }

    .pause-icon {
      width: 28px;
      height: 28px;
      display: none;
      align-items: center;
      justify-content: center;
      color: #fff;
    }

    .tile.paused .pause-icon { display: flex; }

    .act-btn.pause:hover {
      background: var(--warning-10, #fef3c7);
      color: var(--sfx-up-warning, #d97706);
    }

    .act-btn.resume:hover {
      background: var(--sfx-up-primary-bg, #eff6ff);
      color: var(--sfx-up-primary, #2563eb);
    }

    @keyframes tileIn {
      0% {
        opacity: 0;
        transform: scale(0.92) translateY(14px);
      }
      60% {
        opacity: 1;
      }
      80% {
        transform: scale(1.02) translateY(-2px);
      }
      100% {
        opacity: 1;
        transform: scale(1) translateY(0);
      }
    }

    @keyframes spinRing {
      to { transform: rotate(360deg); }
    }

    .tile:focus-visible {
      outline: 2px solid var(--sfx-up-ring, oklch(0.578 0.198 268.129 / 0.7));
      outline-offset: 2px;
    }

    .act-btn:focus-visible,
    .preview-btn:focus-visible {
      outline: 2px solid var(--sfx-up-ring, oklch(0.578 0.198 268.129 / 0.7));
      outline-offset: 2px;
    }

    @media (prefers-reduced-motion: reduce) {
      .tile { animation: none; }
      .spin-ring { animation: none; }
    }
  `;

  @property({ attribute: false }) t: TFunction = (k, d) => (typeof d === 'string' ? d : k);
  @property({ attribute: false }) file!: UploadFile;
  /** 'upload' (default): full controls; 'review': read-only post-upload
   *  view with status badges and hover actions (Locate / Copy CDN). */
  @property({ type: String }) mode: 'upload' | 'review' = 'upload';
  /** Optional host-supplied builder for the Locate button URL. When set,
   *  takes precedence over the default `response.file.url.public`. Lets
   *  host apps point Locate at their own dashboard / file manager. */
  @property({ attribute: false }) getLocateUrl?: (file: UploadFile) => string | null | undefined;
  /** Whether to show the "Locate" hover action on completed review tiles. */
  @property({ type: Boolean }) showLocateButton = false;
  /** Whether to show the "Copy CDN" hover action on completed review tiles. */
  @property({ type: Boolean }) showCopyCdnButton = false;
  /** Show the per-tile "Check similar" button (images only, when enabled). */
  @property({ type: Boolean }) showCheckSimilar = false;
  /** When true, the tile is in similar-image selection mode (shows a checkbox). */
  @property({ type: Boolean }) selectMode = false;
  /** Whether this tile is currently picked in selection mode. */
  @property({ type: Boolean }) isSelected = false;
  @state() private _dims = '';
  /** Brief flash on the Copy CDN button after a successful copy. */
  @state() private _copied = false;
  private _copiedTimer: number | null = null;

  updated(changed: Map<string, unknown>) {
    if (changed.has('file')) {
      this._dims = '';
      // Only read dimensions from a fresh local objectURL — for restored
      // files (where previewUrl is the CDN URL) the natural dimensions
      // would reflect a possibly-resized CDN variant, not the original.
      // Prefer the server-reported dims from response.file.info if present.
      if (this.file?.previewUrl?.startsWith('blob:')) {
        const url = this.file.previewUrl;
        const img = new Image();
        img.onload = () => { if (this.file?.previewUrl === url) this._dims = `${img.naturalWidth}\u00D7${img.naturalHeight}`; };
        img.src = url;
      } else if (this.file?.response?.file?.info) {
        const info = this.file.response.file.info;
        if (info.img_w && info.img_h) {
          this._dims = `${info.img_w}\u00D7${info.img_h}`;
        }
      }
    }
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    // Clear the Copy CDN flash timer so it doesn't fire on a detached
    // component (avoids a Lit "setState on disconnected element" warning
    // and a tiny memory leak holding the closure reference).
    if (this._copiedTimer != null) {
      clearTimeout(this._copiedTimer);
      this._copiedTimer = null;
    }
  }

  private _emit(name: string, extra?: Record<string, unknown>) {
    this.dispatchEvent(
      new CustomEvent(name, {
        detail: { fileId: this.file.id, ...extra },
        bubbles: true,
        composed: true,
      }),
    );
  }

  private _remove() { this._emit('file-remove'); }
  private _retry() { this._emit('file-retry'); }
  private _pause() { this._emit('file-pause'); }
  private _resume() { this._emit('file-resume'); }

  private _rename(e: Event) {
    const name = (e.target as HTMLInputElement).value.trim();
    if (!name) return;
    this._emit('file-rename', { name });
  }

  private _preview(e: Event) {
    e.stopPropagation();
    this._emit('file-preview');
  }

  /** Per-tile "Check similar" — check this single image against the library. */
  private _checkSimilarSingle(e: Event) {
    e.stopPropagation();
    if (!this.file) return;
    this._emit('check-similar-single', { file: this.file });
  }

  /** Toggle this image's selection while in similar-image selection mode. */
  private _toggleSimilar(e: Event) {
    e.stopPropagation();
    this._emit('similar-toggle');
  }

  private _locate(e: Event) {
    e.stopPropagation();
    if (!this.file) return;
    this._emit('file-locate', { file: this.file });
  }

  private async _copyCdn(e: Event) {
    e.stopPropagation();
    const url = this.file?.response?.file?.url?.cdn;
    if (!url) return;
    try {
      await navigator.clipboard.writeText(url);
    } catch {
      // Clipboard API unavailable (insecure context / old browser) — silently
      // skip rather than using the deprecated document.execCommand('copy').
      return;
    }
    this._emit('file-copy-cdn', { file: this.file, cdnUrl: url });
    this._copied = true;
    if (this._copiedTimer) clearTimeout(this._copiedTimer);
    this._copiedTimer = window.setTimeout(() => {
      this._copied = false;
      this._copiedTimer = null;
    }, 1400);
  }

  render() {
    const f = this.file;
    if (!f) return nothing;

    const category = getFileCategory(f);
    const isDone = f.status === 'complete';
    const isUploading = f.status === 'uploading';
    const isPaused = f.status === 'paused';
    const isError = f.status === 'error' || f.status === 'failed';
    const isRejected = f.status === 'rejected';
    const isReview = this.mode === 'review';
    const ext = getFileExtension(f.name);
    // HEIC/HEIF are images by MIME but browsers can't render them — they can't
    // be sent as a w=300 preview, so the similarity feature must skip them.
    const isImage = category === 'image' && !isBrowserUnrenderableImage(f.type);
    // Similar-image selection applies only to selectable images (upload mode).
    const inSelectMode = this.selectMode && isImage && !isReview;
    // Centered hover actions (Details + optional Check similar) show only on a
    // normal, not-yet-uploaded tile and not while picking images.
    const showCenterActions =
      !isReview && !isDone && !isUploading && !isPaused && !isError &&
      f.status !== 'rejected' && !this.selectMode;
    // Dark hover overlay whenever the centered actions show — for every file
    // type (documents/videos included), so Details always has a backdrop.
    // The Check similar button itself still only appears on images.
    const csOverlay = showCenterActions;

    const tileClass = [
      'tile',
      isDone ? 'done' : '',
      isUploading ? 'uploading' : '',
      isPaused ? 'paused' : '',
      isRejected ? 'rejected' : '',
      isReview ? 'review' : '',
      inSelectMode ? 'selectable' : '',
      inSelectMode && this.isSelected ? 'selected' : '',
      this.selectMode && !isImage && !isReview ? 'select-dimmed' : '',
      csOverlay ? 'cs-overlay' : '',
    ].filter(Boolean).join(' ');

    return html`
      <div
        class=${tileClass}
        tabindex="0"
        @click=${inSelectMode ? this._toggleSimilar : undefined}
      >
        <!-- Preview area -->
        <div class="preview">
          ${f.previewUrl
            ? html`<img class="preview-img" src=${f.previewUrl} alt="" />`
            : html`
                <div class="preview-bg ${category}"></div>
                <div class="type-icon">
                  <img
                    class="type-icon-img"
                    src=${getFileTypeIconUrl(ext)}
                    alt="${ext ? `${ext} file` : 'File'}"
                    @error=${(e: Event) => {
                      const img = e.target as HTMLImageElement;
                      const fallback = getDefaultFileTypeIconUrl();
                      if (!img.dataset.fallback && img.src !== fallback) {
                        img.dataset.fallback = '1';
                        img.src = fallback;
                      }
                    }}
                  />
                </div>
              `}

          <!-- Similar-image selection checkbox (selection mode, images only) -->
          ${inSelectMode
            ? html`
                <span
                  class="similar-cb ${this.isSelected ? 'checked' : ''}"
                  @click=${this._toggleSimilar}
                  role="checkbox"
                  aria-checked=${this.isSelected ? 'true' : 'false'}
                  aria-label=${this.t('selectImage', 'Select image')}
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </span>
              `
            : nothing}

          <!-- Centered hover actions: Details + (optional) Check similar.
               Not in review mode (review uses Locate / Copy CDN) and hidden
               while picking images in similar-selection mode. -->
          ${showCenterActions
            ? html`
                <div class="center-actions">
                  <button class="preview-btn" @click=${this._preview} aria-label=${this.t('details', 'Details')}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                      <circle cx="12" cy="12" r="3"/>
                    </svg>
                    ${this.t('details', 'Details')}
                  </button>
                  ${this.showCheckSimilar && isImage
                    ? html`
                        <button class="check-similar-btn" @click=${this._checkSimilarSingle} aria-label=${this.t('checkSimilar', 'Check similar')}>
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round">
                            <circle cx="11" cy="11" r="7"/>
                            <line x1="21" y1="21" x2="16.65" y2="16.65"/>
                          </svg>
                          ${this.t('checkSimilar', 'Check similar')}
                        </button>
                      `
                    : nothing}
                </div>
              `
            : nothing}

          <!-- Review-mode hover actions: Locate (open in storage) +
               Copy CDN (copy CDN URL to clipboard). Both buttons fade
               in on tile hover, only for completed files (failed files
               have no response.file.url). -->
          ${isReview && isDone && f.response?.file?.url && (this.showLocateButton || this.showCopyCdnButton)
            ? html`
                <div class="review-actions">
                  ${this.showLocateButton
                    ? html`<button class="review-action secondary" @click=${this._locate} aria-label=${this.t('locate', 'Locate')}>
                        <svg viewBox="0 0 24 24"><line x1="2" y1="12" x2="5" y2="12"/><line x1="19" y1="12" x2="22" y2="12"/><line x1="12" y1="2" x2="12" y2="5"/><line x1="12" y1="19" x2="12" y2="22"/><circle cx="12" cy="12" r="7"/></svg>
                        ${this.t('locate', 'Locate')}
                      </button>`
                    : nothing}
                  ${this.showCopyCdnButton && f.response.file.url.cdn
                    ? html`<button class="review-action primary ${this._copied ? 'copied' : ''}" @click=${this._copyCdn} title=${this.t('copyCdn', 'Copy CDN')} aria-label=${this.t('copyCdnLink', 'Copy CDN link to clipboard')}>
                        ${this._copied
                          ? html`<svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg>`
                          : html`<svg viewBox="0 0 24 24"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>`}
                        ${this._copied ? this.t('copied', 'Copied') : this.t('copyCdn', 'Copy CDN')}
                      </button>`
                    : nothing}
                </div>
              `
            : nothing}

          <!-- Spinner overlay (uploading = spinner, paused = pause icon) -->
          <div class="spinner-overlay">
            <div class="spin-ring"></div>
            <div class="pause-icon">
              <svg viewBox="0 0 24 24" fill="currentColor" width="28" height="28">
                <rect x="6" y="4" width="4" height="16" rx="1" />
                <rect x="14" y="4" width="4" height="16" rx="1" />
              </svg>
            </div>
          </div>

          <!-- Done badge -->
          ${isDone
            ? html`<div class="done-badge">
                <svg viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="3" stroke-linecap="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>`
            : nothing}

          <!-- Failed badge (review mode only — failed files get a visible status) -->
          ${isReview && isError
            ? html`<div class="failed-badge" title=${f.error || this.t('uploadFailed', 'Upload failed')}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round">
                  <line x1="6" y1="6" x2="18" y2="18"/>
                  <line x1="18" y1="6" x2="6" y2="18"/>
                </svg>
              </div>`
            : nothing}

          <!-- Progress bar (visible during upload and when paused; not in review mode) -->
          ${!isReview && (f.status === 'uploading' || f.status === 'paused')
            ? html`
                <div class="progress">
                  <div class="progress-fill" ${cspStyle({ transform: `scaleX(${Math.min(f.progress, 100) / 100})` })}></div>
                </div>
              `
            : nothing}

          <!-- Error / rejected text overlay (suppressed in review mode — failed-badge takes over) -->
          ${(isError || isRejected) && f.error && !isReview
            ? html`<div class="error-badge" title=${f.error}>${f.error}</div>`
            : nothing}

          <!-- "Already uploaded" note (same content already on the server —
               neutral, not an error). Shown for completed files in both the
               upload-complete view and the review screen. -->
          ${isDone && f.alreadyExisted
            ? html`<div class="exists-badge" title=${this.t('alreadyUploaded', 'Already uploaded')}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>
                <span>${this.t('alreadyUploaded', 'Already uploaded')}</span>
              </div>`
            : nothing}

          <!-- Video duration badge (hidden when error badge or exists badge is shown to avoid overlap) -->
          ${!(isError || isRejected) && !(isDone && f.alreadyExisted) && f.duration != null && f.duration > 0
            ? html`<div class="duration-badge">${this._formatDuration(f.duration)}</div>`
            : nothing}
        </div>

        <!-- Action buttons (hidden in review mode and while picking images
             for the similarity check — files are read-only there) -->
        ${isReview || this.selectMode ? nothing : html`
        <div class="actions">
          ${isUploading && f.isTus
            ? html`
                <button class="act-btn pause" @click=${this._pause} title=${this.t('pause', 'Pause')} aria-label=${this.t('pauseUpload', 'Pause upload')}>
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <rect x="6" y="4" width="4" height="16" rx="1" />
                    <rect x="14" y="4" width="4" height="16" rx="1" />
                  </svg>
                </button>
              `
            : nothing}
          ${isPaused
            ? html`
                <button class="act-btn resume" @click=${this._resume} title=${this.t('resume', 'Resume')} aria-label=${this.t('resumeUpload', 'Resume upload')}>
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <polygon points="5,3 19,12 5,21" />
                  </svg>
                </button>
              `
            : nothing}
          ${isError
            ? html`
                <button class="act-btn retry" @click=${this._retry} title=${this.t('retry', 'Retry')} aria-label=${this.t('retryUpload', 'Retry upload')}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round">
                    <polyline points="23 4 23 10 17 10" />
                    <path d="M20.49 15a9 9 0 11-2.12-9.36L23 10" />
                  </svg>
                </button>
              `
            : nothing}
          <button class="act-btn del" @click=${this._remove} title=${this.t('remove', 'Remove')} aria-label=${this.t('removeFile', 'Remove file')}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="3 6 5 6 21 6" />
              <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6" />
              <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
              <line x1="10" y1="11" x2="10" y2="17" />
              <line x1="14" y1="11" x2="14" y2="17" />
            </svg>
          </button>
        </div>
        `}

        <!-- Info bar -->
        <div class="info">
          <input class="name-input" type="text" .value=${f.name} title=${f.name}
            aria-label=${this.t('fileName', 'File name')}
            ?readonly=${isReview}
            @change=${isReview ? nothing : this._rename} @click=${(e: Event) => e.stopPropagation()} />
          <div class="meta">${ext || ''}${f.size ? ` \u00B7 ${formatFileSize(f.size)}` : ''}${this._dims ? ` \u00B7 ${this._dims}` : ''}</div>
        </div>
      </div>
    `;
  }

  private _formatDuration(seconds: number): string {
    const m = Math.floor(seconds / 60);
    const s = Math.floor(seconds % 60);
    return `${m}:${s.toString().padStart(2, '0')}`;
  }

}
