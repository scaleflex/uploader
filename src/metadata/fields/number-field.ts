import { html } from 'lit';
import { metadataInputStyles } from '../metadata.styles';
import { MetadataFieldBase } from './field-base';

export class SfxMetaNumberField extends MetadataFieldBase {
  static styles = [metadataInputStyles];

  private get _step(): string {
    return this.field?.type === 'decimal2' ? '0.01' : '1';
  }

  private get _inputMode(): 'decimal' | 'numeric' {
    return this.field?.type === 'decimal2' ? 'decimal' : 'numeric';
  }

  private _onInput(e: Event) {
    this._emit('field-change', (e.target as HTMLInputElement).value);
  }

  private _onBlur(e: Event) {
    this._emit('field-blur', (e.target as HTMLInputElement).value);
  }

  private _onKeydown(e: KeyboardEvent) {
    if (e.key === 'Escape') {
      this._emit('field-escape');
      return;
    }
    if ((e.key === 'e' || e.key === 'E') && !e.ctrlKey && !e.metaKey && !e.altKey) {
      e.preventDefault();
    }
  }

  render() {
    return html`
      <input
        type="number"
        step=${this._step}
        inputmode=${this._inputMode}
        .value=${String(this.value ?? '')}
        placeholder=${this.field?.placeholder ?? ''}
        ?disabled=${this.disabled}
        @input=${this._onInput}
        @blur=${this._onBlur}
        @keydown=${this._onKeydown}
      />
    `;
  }
}

customElements.define('sfx-meta-number-field', SfxMetaNumberField);
