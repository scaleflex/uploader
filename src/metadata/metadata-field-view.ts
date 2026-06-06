import { LitElement, html, css } from 'lit';
import { property } from 'lit/decorators.js';
import type { MetadataField, GeoPoint, TagOption } from './schema/schema.types';
import { isUnsupportedField } from './schema/schema.types';
import { UNSUPPORTED_FIELD_MESSAGE } from './fields/unsupported-field';
import type { TaxonodeEntry } from './taxonomies/taxonomies.types';

export class SfxMetadataFieldView extends LitElement {
  static styles = css`
    :host { display: block; }
    .value {
      min-height: 28px;
      padding: 6px 8px;
      border-radius: 4px;
      font-size: 14px;
      color: var(--sfx-up-text, #1e293b);
      word-break: break-word;
      line-height: 1.4;
    }
    .empty {
      color: var(--sfx-up-text-muted, #94a3b8);
    }
    .link {
      color: var(--sfx-up-primary, #2563eb);
      text-decoration: none;
      max-width: 100%;
      display: inline-block;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    .link:hover {
      text-decoration: underline;
    }
  `;

  @property({ attribute: false }) field!: MetadataField;
  @property({ attribute: false }) value: unknown;
  @property({ attribute: false }) taxonomyEntry: TaxonodeEntry | null = null;

  private _formatValue(): string | ReturnType<typeof html> {
    const v = this.value;
    const type = this.field?.type;

    switch (type) {
      case 'boolean': {
        if (v === 'true') return 'True';
        if (v === 'false') return 'False';
        return '';
      }

      case 'date': {
        if (!v) return '';
        if (v instanceof Date) {
          return v.toLocaleDateString(undefined, {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
          });
        }
        if (typeof v === 'string' && v.length > 0) return v;
        return '';
      }

      case 'numeric':
      case 'decimal2': {
        if (v == null || v === '') return '';
        const n = Number(v);
        if (!Number.isFinite(n)) return String(v);
        return n.toLocaleString(undefined, {
          maximumFractionDigits: type === 'decimal2' ? 2 : 0,
        });
      }

      case 'select-one': {
        if (v == null || v === '') return '';
        const pv = this.field.possible_values?.find(
          p => p.internal_unique_value === v || p.api_value === v,
        );
        return pv?.label ?? String(v);
      }

      case 'multi-select': {
        if (!Array.isArray(v) || v.length === 0) return '';
        return (v as string[])
          .map(val => {
            const pv = this.field.possible_values?.find(
              p => p.internal_unique_value === val || p.api_value === val,
            );
            return pv?.label ?? String(val);
          })
          .join(', ');
      }

      case 'tags': {
        if (!Array.isArray(v) || v.length === 0) return '';
        return (v as TagOption[]).map(t => t.label || t.value).join(', ');
      }

      case 'taxonomy-node': {
        if (this.taxonomyEntry?.path) return this.taxonomyEntry.path;
        if (this.taxonomyEntry?.name) return this.taxonomyEntry.name;
        if (v == null || v === '') return '';
        return String(v);
      }

      case 'geopoint': {
        const geo = v as GeoPoint | null | undefined;
        if (
          !geo ||
          geo.latitude === '' ||
          geo.latitude == null ||
          geo.longitude === '' ||
          geo.longitude == null
        ) {
          return '';
        }
        return `(${geo.latitude}, ${geo.longitude})`;
      }

      case 'attachment-uri': {
        if (!v || (typeof v === 'string' && v.length === 0)) return '';
        const url = String(v);
        // Return a template for the link case — handled in render()
        return url;
      }

      case 'text':
      case 'textarea':
      default: {
        if (v == null || v === '') return '';
        return String(v);
      }
    }
  }

  render() {
    if (this.field && isUnsupportedField(this.field)) {
      return html`
        <div class="value empty" title=${UNSUPPORTED_FIELD_MESSAGE}>
          Not editable during upload
        </div>
      `;
    }

    const formatted = this._formatValue();
    const isEmpty = formatted === '';

    // Attachment URI: render as link
    if (this.field?.type === 'attachment-uri' && !isEmpty) {
      return html`
        <div class="value">
          <a class="link" href=${formatted} target="_blank" rel="noopener noreferrer"
            @click=${(e: Event) => e.stopPropagation()}
          >${formatted}</a>
        </div>
      `;
    }

    return html`
      <div class="value ${isEmpty ? 'empty' : ''}">${isEmpty ? '\u2014' : formatted}</div>
    `;
  }
}

customElements.define('sfx-metadata-field-view', SfxMetadataFieldView);
