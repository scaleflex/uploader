import { html } from 'lit';
import { metadataInputStyles } from '../metadata.styles';
import { MetadataFieldBase } from './field-base';

export class SfxMetaDateField extends MetadataFieldBase {
  static styles = [metadataInputStyles];

  /** Convert value to "YYYY-MM-DD" string for the native date input. */
  private get _dateStr(): string {
    const v = this.value;
    if (!v) return '';
    if (v instanceof Date) return v.toISOString().split('T')[0];
    return String(v);
  }

  private _onChange(e: Event) {
    const val = (e.target as HTMLInputElement).value;
    this._emit('field-change', val);
    this._emit('field-blur', val);
  }

  private _onKeydown(e: KeyboardEvent) {
    if (e.key === 'Escape') this._emit('field-escape');
  }

  render() {
    return html`
      <input
        type="date"
        .value=${this._dateStr}
        ?disabled=${this.disabled}
        @change=${this._onChange}
        @keydown=${this._onKeydown}
      />
    `;
  }
}

customElements.define('sfx-meta-date-field', SfxMetaDateField);
