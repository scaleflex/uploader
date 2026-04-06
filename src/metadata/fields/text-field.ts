import { html } from 'lit';
import { metadataInputStyles } from '../metadata.styles';
import { MetadataFieldBase } from './field-base';

export class SfxMetaTextField extends MetadataFieldBase {
  static styles = [metadataInputStyles];

  private _onInput(e: Event) {
    this._emit('field-change', (e.target as HTMLInputElement).value);
  }

  private _onBlur(e: Event) {
    this._emit('field-blur', (e.target as HTMLInputElement).value);
  }

  private _onKeydown(e: KeyboardEvent) {
    if (e.key === 'Escape') this._emit('field-escape');
  }

  render() {
    const title = this.field?.title ?? '';
    const fallback = title ? `Enter ${title.toLowerCase()}` : '';
    return html`
      <input
        type="text"
        .value=${(this.value as string) ?? ''}
        placeholder=${this.field?.placeholder || fallback}
        ?disabled=${this.disabled}
        @input=${this._onInput}
        @blur=${this._onBlur}
        @keydown=${this._onKeydown}
      />
    `;
  }
}

customElements.define('sfx-meta-text-field', SfxMetaTextField);
