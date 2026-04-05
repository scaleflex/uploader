import { html, svg, type TemplateResult } from 'lit';
import type { MetadataFieldType } from './schema/schema.types';

/**
 * Inline SVG icons (16×16) for each metadata field type.
 * Stroke-based, inherits color via currentColor.
 */

const icons: Record<MetadataFieldType, TemplateResult> = {
  // T — plain text
  text: html`<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
    ${svg`<path d="M4 3h8M8 3v10"/>`}
  </svg>`,

  // Paragraph lines
  textarea: html`<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round">
    ${svg`<line x1="3" y1="4" x2="13" y2="4"/><line x1="3" y1="7" x2="13" y2="7"/><line x1="3" y1="10" x2="9" y2="10"/>`}
  </svg>`,

  // Dropdown chevron
  'select-one': html`<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
    ${svg`<rect x="2" y="3" width="12" height="10" rx="2"/><polyline points="6 7 8 9.5 10 7"/>`}
  </svg>`,

  // Checkboxes
  'multi-select': html`<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
    ${svg`<rect x="2" y="2" width="5" height="5" rx="1"/><polyline points="3 4.5 4.2 6 6 3"/><rect x="2" y="9" width="5" height="5" rx="1"/><line x1="9" y1="4.5" x2="14" y2="4.5"/><line x1="9" y1="11.5" x2="14" y2="11.5"/>`}
  </svg>`,

  // Toggle
  boolean: html`<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
    ${svg`<rect x="2" y="4.5" width="12" height="7" rx="3.5"/><circle cx="10.5" cy="8" r="2" fill="currentColor" stroke="none"/>`}
  </svg>`,

  // Calendar
  date: html`<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
    ${svg`<rect x="2" y="3" width="12" height="11" rx="2"/><line x1="2" y1="7" x2="14" y2="7"/><line x1="5.5" y1="1.5" x2="5.5" y2="4.5"/><line x1="10.5" y1="1.5" x2="10.5" y2="4.5"/>`}
  </svg>`,

  // Hash #
  numeric: html`<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round">
    ${svg`<line x1="6" y1="2" x2="4.5" y2="14"/><line x1="11.5" y1="2" x2="10" y2="14"/><line x1="3" y1="6" x2="13" y2="6"/><line x1="3" y1="10" x2="13" y2="10"/>`}
  </svg>`,

  // Circle + decimal marks
  decimal2: html`<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round">
    ${svg`<circle cx="5.5" cy="8" r="3"/><circle cx="12" cy="11" r="1" fill="currentColor" stroke="none"/><line x1="10" y1="5" x2="13" y2="5"/><line x1="10" y1="8" x2="13" y2="8"/>`}
  </svg>`,

  // Map pin
  geopoint: html`<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
    ${svg`<path d="M8 1.5a4.5 4.5 0 0 1 4.5 4.5c0 3.5-4.5 8.5-4.5 8.5S3.5 9.5 3.5 6A4.5 4.5 0 0 1 8 1.5Z"/><circle cx="8" cy="6" r="1.5"/>`}
  </svg>`,

  // Numbered list
  'integer-list': html`<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round">
    ${svg`<line x1="7" y1="4" x2="14" y2="4"/><line x1="7" y1="8" x2="14" y2="8"/><line x1="7" y1="12" x2="14" y2="12"/><text x="2" y="5.5" font-size="4.5" fill="currentColor" stroke="none" font-family="inherit">1</text><text x="2" y="9.5" font-size="4.5" fill="currentColor" stroke="none" font-family="inherit">2</text><text x="2" y="13.5" font-size="4.5" fill="currentColor" stroke="none" font-family="inherit">3</text>`}
  </svg>`,

  // Tag label
  tags: html`<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
    ${svg`<path d="M1.5 2.5h5.6l7.4 5.5-5.5 5.5-7.5-5.4z"/><circle cx="5" cy="6" r="1" fill="currentColor" stroke="none"/>`}
  </svg>`,

  // Link chain
  'attachment-uri': html`<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
    ${svg`<path d="M7 9l2-2"/><path d="M9.5 6.5l1.8-1.8a2.1 2.1 0 0 1 3 3L12.5 9.5"/><path d="M6.5 9.5L4.7 11.3a2.1 2.1 0 0 1-3-3L3.5 6.5"/>`}
  </svg>`,
};

export function fieldTypeIcon(type: MetadataFieldType): TemplateResult {
  return icons[type] ?? icons.text;
}
