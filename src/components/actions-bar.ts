import { LitElement, html, css, nothing } from "lit";
import { property } from "lit/decorators.js";
import { cspStyle } from "../utils/csp-style";
import { buttonStyles, focusStyles } from "./shared-styles";
import type { TFunction } from "../store/store.types";

export type UploadButtonState = "idle" | "uploading" | "done";

export class SfxActionsBar extends LitElement {
  static styles = [
    buttonStyles,
    focusStyles,
    css`
      :host {
        display: flex;
        flex-direction: column;
        background: var(--sfx-up-bg, #ffffff);
        flex-shrink: 0;
        box-shadow: none;
        position: relative;
        animation: barSlideUp 0.3s cubic-bezier(0.34, 1.2, 0.64, 1) both;
        container-type: inline-size;
        container-name: actions-bar;
      }

      /* Full-column-width divider above the actions bar.
       The bar sits inside .content which is capped at
       --sfx-up-content-max-width (1600px), so a plain :host border-top
       would leave visible gaps on ultra-wide viewports. Instead we
       draw the line as a pseudo-element on the first child and push
       it 100vw to each side — the outer .inline { overflow: hidden }
       clips it back to the column width. */
      :host > :first-child {
        position: relative;
      }

      :host > :first-child::before {
        content: "";
        position: absolute;
        top: 0;
        left: -100vw;
        right: -100vw;
        height: 1px;
        background: var(--sfx-up-border, #e2e8f0);
        pointer-events: none;
        z-index: 1;
      }

      @keyframes barSlideUp {
        from {
          opacity: 0;
          transform: translateY(12px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }

      /* --- Progress row --- */
      .progress-row {
        display: flex;
        align-items: center;
        gap: 12px;
        padding: 10px 24px 0;
        max-width: var(--sfx-up-content-max-width, 1600px);
        margin-inline: auto;
        box-sizing: border-box;
        width: 100%;
      }

      .progress-track {
        flex: 1;
        height: 4px;
        background: var(--sfx-up-border, #e2e8f0);
        border-radius: 2px;
        overflow: hidden;
      }

      .progress-fill {
        height: 100%;
        background: var(--sfx-up-primary, #2563eb);
        border-radius: 2px;
        transition: width 0.3s ease;
      }

      .progress-label {
        font-size: 13px;
        font-weight: 600;
        color: var(--sfx-up-text, #1e293b);
        white-space: nowrap;
        flex-shrink: 0;
      }

      /* --- Buttons row --- */
      .buttons-row {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 14px 24px;
        max-width: var(--sfx-up-content-max-width, 1600px);
        margin-inline: auto;
        box-sizing: border-box;
        width: 100%;
      }

      .left {
        display: flex;
        align-items: center;
        gap: 8px;
      }

      .right {
        display: flex;
        align-items: center;
        gap: 8px;
      }

      .select-count {
        font-size: 13px;
        font-weight: 500;
        color: var(--sfx-up-text-secondary, #475569);
      }

      /* --- Always-on similarity selection toolbar --- */
      .sim-ico {
        flex: 0 0 30px;
        width: 30px;
        height: 30px;
        border-radius: 8px;
        background: var(--sfx-up-primary-bg, #eff6ff);
        color: var(--sfx-up-primary, #2563eb);
        display: inline-flex;
        align-items: center;
        justify-content: center;
      }
      .sim-ico svg { width: 16px; height: 16px; }

      .sim-text { min-width: 0; display: flex; flex-direction: column; line-height: 1.25; }
      .sim-text b {
        font-size: 13.5px;
        font-weight: 600;
        color: var(--sfx-up-text, #1e293b);
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      .sim-text span {
        font-size: 12px;
        font-weight: 400;
        color: var(--sfx-up-text-muted, #64748b);
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }

      .count-pill {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        min-width: 40px;
        height: 28px;
        padding: 0 10px;
        border-radius: 999px;
        background: var(--sfx-up-surface, #eef2ff);
        color: var(--sfx-up-primary, #2563eb);
        font-size: 13px;
        font-weight: 700;
      }
      .count-pill.full {
        background: var(--sfx-up-primary, #2563eb);
        color: #fff;
      }

      .select-all {
        background: none;
        border: none;
        cursor: pointer;
        font-family: inherit;
        font-size: 13px;
        font-weight: 600;
        color: var(--sfx-up-primary, #2563eb);
        padding: 0 6px;
        height: 28px;
        border-radius: 6px;
        transition: background 0.15s ease;
      }
      .select-all:hover { background: var(--sfx-up-primary-bg, #eff6ff); }

      /* --- Button overrides (base in shared-styles) --- */

      .btn-sec {
        background: var(--sfx-up-primary-bg, #eff6ff);
        color: var(--sfx-up-primary, #2563eb);
        border: 1.5px solid var(--sfx-up-primary-glow, rgba(37, 99, 235, 0.15));
      }

      .btn-sec:hover {
        background: var(--sfx-up-primary-bg, #dbeafe);
      }

      .btn-retry {
        background: var(--destructive-10, #fef2f2);
        color: var(--sfx-up-error, #dc2626);
        border: 1.5px solid var(--sfx-up-error, rgba(220, 38, 38, 0.2));
      }

      .btn-retry:hover {
        background: var(--destructive-10, #fee2e2);
        color: var(--destructive-foreground, #b91c1c);
        border-color: var(--sfx-up-error, rgba(220, 38, 38, 0.35));
      }

      .btn-primary {
        min-width: 110px;
      }

      .btn-primary.done-state {
        background: var(--sfx-up-success, #16a34a);
        box-shadow: 0 2px 10px var(--sfx-up-shadow, rgba(22, 163, 74, 0.28));
      }

      /* --- Spinner --- */
      .btn-spin {
        width: 14px;
        height: 14px;
        border: 2px solid rgba(255, 255, 255, 0.3);
        border-top-color: #fff;
        border-radius: 50%;
        animation: spinRing 0.7s linear infinite;
      }

      /* --- Count --- */
      .count {
        font-size: 14px;
        font-weight: 700;
        color: var(--sfx-up-text, #1e293b);
      }

      .count span {
        font-weight: 400;
        color: var(--sfx-up-text-muted, #94a3b8);
      }

      @keyframes spinRing {
        to {
          transform: rotate(360deg);
        }
      }

      /* Collapse the right group to icon-only when the actions bar
         itself is narrow — not when the viewport is. @container beats
         @media here because inline uploaders can live inside a column
         narrower than the browser window. */
      @container actions-bar (max-width: 560px) {
        .buttons-row {
          padding: 10px 12px;
          gap: 6px;
        }
        .left,
        .right {
          gap: 6px;
        }
        button {
          height: 36px;
          font-size: 12px;
        }
        .right .btn-ghost,
        .right .btn-sec,
        .right .btn-retry,
        .right .btn-primary {
          padding: 0;
          width: 36px;
          min-width: 36px;
          gap: 0;
        }
        .right .btn-label {
          display: none;
        }
        .right svg {
          width: 16px;
          height: 16px;
        }
      }

      /* Very narrow: also collapse the left Fill Metadata pill. */
      @container actions-bar (max-width: 380px) {
        .left .btn-sec {
          padding: 0;
          width: 36px;
          min-width: 36px;
          gap: 0;
        }
        .left .btn-label {
          display: none;
        }
        .left svg {
          width: 16px;
          height: 16px;
        }
      }

      @media (prefers-reduced-motion: reduce) {
        :host {
          animation: none;
        }
        .btn-spin {
          animation: none;
        }
      }
    `,
  ];

  @property({ attribute: false }) t: TFunction = (k, d) => (typeof d === 'string' ? d : k);
  @property({ type: String }) uploadState: UploadButtonState = "idle";
  @property({ type: Number }) fileCount = 0;
  @property({ type: Number }) totalSize = 0;
  @property({ type: Number }) failedCount = 0;
  @property({ type: Boolean }) showFillMetadata = false;
  /**
   * When true, the Fill Metadata button is rendered as primary (prominent),
   * and clicking Upload dispatches `require-metadata` instead of `upload-start`
   * so the host can open the metadata editor first.
   */
  @property({ type: Boolean }) requireMetadataFirst = false;
  @property({ type: Number }) completedCount = 0;
  @property({ type: Number }) uploadProgress = 0;
  /** Show the "Check similar" button (gated by config.similarityCheck.enabled). */
  @property({ type: Boolean }) showCheckSimilar = false;
  /** When true, the bar shows the similar-image selection toolbar instead. */
  @property({ type: Boolean }) selectMode = false;
  /** Number of images currently picked for the similarity check. */
  @property({ type: Number }) selectedCount = 0;
  /** Max images selectable for a similarity check (0 = no cap shown). */
  @property({ type: Number }) maxSelection = 0;
  /** Whether all selectable images are currently picked (drives "Select all"). */
  @property({ type: Boolean }) allSelected = false;

  private _clear() {
    this.dispatchEvent(
      new CustomEvent("clear-all", { bubbles: true, composed: true }),
    );
  }

  private _addMore() {
    this.dispatchEvent(
      new CustomEvent("add-more", { bubbles: true, composed: true }),
    );
  }

  private _fillMetadata() {
    this.dispatchEvent(
      new CustomEvent("fill-metadata", { bubbles: true, composed: true }),
    );
  }

  private _upload() {
    if (this.requireMetadataFirst) {
      this.dispatchEvent(
        new CustomEvent("require-metadata", { bubbles: true, composed: true }),
      );
      return;
    }
    this.dispatchEvent(
      new CustomEvent("upload-start", { bubbles: true, composed: true }),
    );
  }

  private _retryAll() {
    this.dispatchEvent(
      new CustomEvent("retry-all", { bubbles: true, composed: true }),
    );
  }

  private _checkSimilarEnter() {
    this.dispatchEvent(
      new CustomEvent("check-similar-enter", { bubbles: true, composed: true }),
    );
  }

  private _checkSimilarCancel() {
    this.dispatchEvent(
      new CustomEvent("check-similar-cancel", { bubbles: true, composed: true }),
    );
  }

  private _checkSimilarRun() {
    this.dispatchEvent(
      new CustomEvent("check-similar-run", { bubbles: true, composed: true }),
    );
  }

  private _similarSelectAll() {
    this.dispatchEvent(
      new CustomEvent("similar-select-all", {
        detail: { selected: !this.allSelected },
        bubbles: true,
        composed: true,
      }),
    );
  }

  render() {
    const isUploading = this.uploadState === "uploading";

    // "Check similar assets" image-selection mode replaces the normal bar.
    if (this.selectMode) {
      return this._renderSelectToolbar();
    }

    return html`
      ${isUploading
        ? html`
            <div class="progress-row">
              <div
                class="progress-track"
                role="progressbar"
                aria-valuenow=${Math.round(this.uploadProgress)}
                aria-valuemin="0"
                aria-valuemax="100"
                aria-label=${this.t('uploadProgress', 'Upload progress')}
              >
                <div
                  class="progress-fill"
                  ${cspStyle({ width: `${this.uploadProgress}%` })}
                ></div>
              </div>
              <span class="progress-label"
                >${this.completedCount}/${this.fileCount} ${this.t('files', 'files')}</span
              >
            </div>
          `
        : nothing}
      <div class="buttons-row">
        <div class="left">
          ${this.showFillMetadata && this.uploadState === "idle"
            ? html`
                <button
                  class=${this.requireMetadataFirst ? "btn-primary" : "btn-sec"}
                  @click=${this._fillMetadata}
                  aria-label=${this.t('fillMetadata', 'Fill Metadata')}
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path
                      d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"
                    />
                    <polyline points="14 2 14 8 20 8" />
                    <line x1="16" y1="13" x2="8" y2="13" />
                    <line x1="16" y1="17" x2="8" y2="17" />
                    <line x1="10" y1="9" x2="8" y2="9" />
                  </svg>
                  <span class="btn-label">${this.t('fillMetadata', 'Fill Metadata')}</span>
                </button>
              `
            : nothing}
          ${this.showCheckSimilar && this.uploadState === "idle"
            ? html`
                <button
                  class="btn-sec"
                  @click=${this._checkSimilarEnter}
                  aria-label=${this.t('checkSimilar', 'Check similar')}
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                  >
                    <circle cx="11" cy="11" r="7" />
                    <line x1="21" y1="21" x2="16.65" y2="16.65" />
                  </svg>
                  <span class="btn-label">${this.t('checkSimilar', 'Check similar')}</span>
                </button>
              `
            : nothing}
        </div>
        <div class="right">
          <button class="btn-ghost" @click=${this._clear} aria-label=${this.t('clear', 'Clear')}>
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M3 6h18" />
              <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
              <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
              <line x1="10" y1="11" x2="10" y2="17" />
              <line x1="14" y1="11" x2="14" y2="17" />
            </svg>
            <span class="btn-label">${this.t('clear', 'Clear')}</span>
          </button>
          <button class="btn-sec" @click=${this._addMore} aria-label=${this.t('addMore', 'Add more')}>
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2.2"
              stroke-linecap="round"
            >
              <line x1="12" y1="5" x2="12" y2="19" />
              <line x1="5" y1="12" x2="19" y2="12" />
            </svg>
            <span class="btn-label">${this.t('addMore', 'Add more')}</span>
          </button>
          ${this.failedCount > 0
            ? html`
                <button
                  class="btn-retry"
                  @click=${this._retryAll}
                  aria-label=${this.t('retryAll', 'Retry all ({{count}})', { count: this.failedCount })}
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2.2"
                    stroke-linecap="round"
                  >
                    <polyline points="23 4 23 10 17 10" />
                    <path d="M20.49 15a9 9 0 11-2.12-9.36L23 10" />
                  </svg>
                  <span class="btn-label">${this.t('retryAll', 'Retry all ({{count}})', { count: this.failedCount })}</span>
                </button>
              `
            : nothing}
          ${this._renderUploadButton()}
        </div>
      </div>
    `;
  }

  private _renderSelectToolbar() {
    const n = this.selectedCount;
    const max = this.maxSelection;
    const full = max > 0 && n >= max;
    return html`
      <div class="buttons-row">
        <div class="left">
          <span class="sim-ico">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round">
              <circle cx="11" cy="11" r="7" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
          </span>
          <div class="sim-text">
            <b>${this.t('selectImagesToCheck', 'Select images to check for similar assets')}</b>
            <span>${max > 0
              ? this.t('selectImagesHintMax', 'Pick up to {{max}}, then click Check', { max })
              : this.t('selectImagesHint', 'Pick one or more, then click Check')}</span>
          </div>
        </div>
        <div class="right">
          ${max > 0
            ? html`<span
                class="count-pill ${full ? 'full' : ''}"
                aria-label=${this.t('countSelected', '{{count}} of {{max}} selected', { count: n, max })}
              >${n}/${max}</span>`
            : nothing}
          <button class="select-all" type="button" @click=${this._similarSelectAll}>
            ${this.allSelected
              ? this.t('deselectAll', 'Deselect all')
              : this.t('selectAll', 'Select all')}
          </button>
          <button class="btn-ghost" @click=${this._checkSimilarCancel} aria-label=${this.t('cancel', 'Cancel')}>
            <span class="btn-label">${this.t('cancel', 'Cancel')}</span>
          </button>
          <button
            class="btn-primary"
            @click=${this._checkSimilarRun}
            ?disabled=${n === 0}
            aria-label=${this.t('checkSimilar', 'Check similar')}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
              <circle cx="11" cy="11" r="7" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
            <span class="btn-label">${this.t('checkSimilar', 'Check similar')}</span>
          </button>
        </div>
      </div>
    `;
  }

  private _renderUploadButton() {
    const isUploading = this.uploadState === "uploading";
    const isDone = this.uploadState === "done";

    const cls = ["btn-primary", isDone ? "done-state" : ""]
      .filter(Boolean)
      .join(" ");

    const ariaLabel = isUploading ? this.t('uploading', 'Uploading') : isDone ? this.t('done', 'Done') : this.t('upload', 'Upload');

    return html`
      <button
        class=${cls}
        @click=${this._upload}
        ?disabled=${isUploading || (this.fileCount === 0 && !isDone)}
        aria-label=${ariaLabel}
      >
        ${isUploading
          ? html`<span class="btn-spin"></span
              ><span class="btn-label">${this.t('uploading', 'Uploading')}…</span>`
          : isDone
          ? html`
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2.5"
                stroke-linecap="round"
              >
                <polyline points="20 6 9 17 4 12" />
              </svg>
              <span class="btn-label">${this.t('done', 'Done')}!</span>
            `
          : html`
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2.2"
                stroke-linecap="round"
              >
                <polyline points="16 16 12 12 8 16" />
                <line x1="12" y1="12" x2="12" y2="21" />
                <path d="M20.39 18.39A5 5 0 0018 9h-1.26A8 8 0 103 16.3" />
              </svg>
              <span class="btn-label">${this.t('upload', 'Upload')}</span>
            `}
      </button>
    `;
  }
}
