import { LitElement, html, css } from 'lit';
import { property } from 'lit/decorators.js';
import type { UploadFile } from '../store/store.types';

export class SfxFileList extends LitElement {
  static styles = css`
    :host {
      display: block;
      flex: 1;
      overflow-y: auto;
      min-height: 0;
    }

    .grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(186px, 1fr));
      gap: 12px;
      padding-bottom: 16px;
    }
  `;

  @property({ attribute: false }) files: UploadFile[] = [];

  render() {
    return html`
      <div class="grid">
        ${this.files.map(
          (f) => html`<sfx-file-item .file=${f}></sfx-file-item>`,
        )}
      </div>
    `;
  }
}
