import { html, css } from 'lit';
import { metadataInputStyles } from '../metadata.styles';
import { MetadataFieldBase } from './field-base';

export class SfxMetaTextareaField extends MetadataFieldBase {
  static styles = [
    metadataInputStyles,
    css`
      textarea {
        height: auto;
        min-height: 80px;
        padding: 8px 10px;
        resize: none;
      }
    `,
  ];

  firstUpdated() {
    const ta = this.renderRoot.querySelector('textarea');
    if (ta) this._autoResize(ta);
  }

  private _autoResize(el: HTMLTextAreaElement) {
    el.style.height = 'auto';
    el.style.height = `${Math.max(80, el.scrollHeight)}px`;
  }

  private _onInput(e: Event) {
    const ta = e.target as HTMLTextAreaElement;
    this._autoResize(ta);
    this._emit('field-change', ta.value);
  }

  private _onBlur(e: Event) {
    this._emit('field-blur', (e.target as HTMLTextAreaElement).value);
  }

  private _onKeydown(e: KeyboardEvent) {
    if (e.key === 'Escape') this._emit('field-escape');
  }

  render() {
    return html`
      <textarea
        .value=${(this.value as string) ?? ''}
        placeholder=${this.field?.placeholder ?? ''}
        ?disabled=${this.disabled}
        @input=${this._onInput}
        @blur=${this._onBlur}
        @keydown=${this._onKeydown}
      ></textarea>
    `;
  }
}

customElements.define('sfx-meta-textarea-field', SfxMetaTextareaField);
