import { html, css } from 'lit';
import type { GeoPoint } from '../schema/schema.types';
import { metadataInputStyles } from '../metadata.styles';
import { MetadataFieldBase } from './field-base';

export class SfxMetaGeoPointField extends MetadataFieldBase {
  static styles = [
    metadataInputStyles,
    css`
      .grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 12px;
      }
      label {
        display: block;
        font-size: 12px;
        color: var(--sfx-up-text-muted, #94a3b8);
        margin-bottom: 4px;
      }
      /* Strip native number spinners — UI-kit Input has no chrome */
      input[type='number'] {
        -moz-appearance: textfield;
        appearance: textfield;
      }
      input[type='number']::-webkit-outer-spin-button,
      input[type='number']::-webkit-inner-spin-button {
        -webkit-appearance: none;
        appearance: none;
        margin: 0;
      }
    `,
  ];

  private get _geo(): GeoPoint {
    const v = this.value as GeoPoint | null;
    return { latitude: v?.latitude ?? '', longitude: v?.longitude ?? '' };
  }

  private _onInput(coord: 'latitude' | 'longitude', e: Event) {
    const val = (e.target as HTMLInputElement).value;
    const next = { ...this._geo, [coord]: val };
    this.value = next;
    this._emit('field-change', next);
  }

  private _onBlur(e: FocusEvent) {
    const related = e.relatedTarget as HTMLElement | null;
    if (related && this.renderRoot.contains(related)) return;
    this._emit('field-blur', this._geo);
  }

  private _onKeydown(e: KeyboardEvent) {
    if (e.key === 'Escape') this._emit('field-escape');
  }

  render() {
    const geo = this._geo;
    return html`
      <div class="grid">
        <div>
          <label>Latitude</label>
          <input type="number" step="any" .value=${geo.latitude}
            ?disabled=${this.disabled}
            @input=${(e: Event) => this._onInput('latitude', e)}
            @blur=${this._onBlur} @keydown=${this._onKeydown} />
        </div>
        <div>
          <label>Longitude</label>
          <input type="number" step="any" .value=${geo.longitude}
            ?disabled=${this.disabled}
            @input=${(e: Event) => this._onInput('longitude', e)}
            @blur=${this._onBlur} @keydown=${this._onKeydown} />
        </div>
      </div>
    `;
  }
}

customElements.define('sfx-meta-geo-point-field', SfxMetaGeoPointField);
