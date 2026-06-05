import { LitElement, html, css, svg, type TemplateResult } from 'lit';

/**
 * Shown in place of an editor for metadata field types the uploader can't
 * support before the asset exists (file attachments, ultratags, taxonomy
 * nodes). Pure placeholder — no inputs, no events.
 */
export const UNSUPPORTED_FIELD_MESSAGE =
  'This field is not supported during upload. You can edit it later in the asset library.';

/** Lock SVG — shared with the bulk op-bar notice. */
export const unsupportedLockIcon: TemplateResult = html`
  <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
    ${svg`<rect x="3" y="7" width="10" height="7" rx="1.5"/><path d="M5.5 7V5a2.5 2.5 0 0 1 5 0v2"/>`}
  </svg>
`;

export class SfxMetaUnsupportedField extends LitElement {
  static styles = css`
    :host { display: block; }
    .unsupported {
      display: flex;
      align-items: center;
      gap: 8px;
      width: 100%;
      height: 36px;
      padding: 0 10px;
      border: 1px dashed var(--sfx-up-border, #e2e8f0);
      border-radius: 6px;
      font-size: 13px;
      color: var(--sfx-up-text-muted, #94a3b8);
      background: var(--sfx-up-surface, #f8fafc);
      box-sizing: border-box;
      cursor: not-allowed;
      user-select: none;
    }
    .unsupported svg {
      width: 14px;
      height: 14px;
      flex-shrink: 0;
      color: var(--sfx-up-text-muted, #94a3b8);
    }
    .unsupported-text {
      flex: 1;
      min-width: 0;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  `;

  render() {
    return html`
      <div
        class="unsupported"
        title=${UNSUPPORTED_FIELD_MESSAGE}
        aria-label=${UNSUPPORTED_FIELD_MESSAGE}
        aria-disabled="true"
        role="note"
      >
        ${unsupportedLockIcon}
        <span class="unsupported-text" aria-hidden="true">Not editable during upload</span>
      </div>
    `;
  }
}

customElements.define('sfx-meta-unsupported-field', SfxMetaUnsupportedField);
