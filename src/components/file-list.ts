import { LitElement, html, css } from 'lit';
import { property } from 'lit/decorators.js';
import type { UploadFile } from '../store/store.types';

export class SfxFileList extends LitElement {
  static styles = css`
    :host {
      display: block;
      flex: 1;
      min-height: 0;
      overflow-y: auto;
      padding-bottom: 8px;
      scrollbar-width: thin;
      scrollbar-color: rgba(0, 0, 0, 0.15) transparent;
    }

    :host::-webkit-scrollbar {
      width: 6px;
    }

    :host::-webkit-scrollbar-track {
      background: transparent;
      margin: 8px 0;
    }

    :host::-webkit-scrollbar-thumb {
      background: rgba(0, 0, 0, 0.15);
      border-radius: 3px;
    }

    .grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(186px, 1fr));
      gap: 12px;
      padding-bottom: 16px;
    }

    @media (max-width: 480px) {
      .grid {
        grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
        gap: 8px;
      }
    }
  `;

  @property({ attribute: false }) files: UploadFile[] = [];

  render() {
    return html`
      <div class="grid">
        ${this.files.map(
          (f, i) => html`<sfx-file-item .file=${f} style="--tile-index:${i}"></sfx-file-item>`,
        )}
      </div>
    `;
  }
}
