import type { Page } from '../../lib/router';
import type { SfxUploader } from '../../../src/sfx-uploader';
import { buildConfig } from '../../lib/auth';
import { renderCodeBlock } from '../../lib/code-block';
import { initCustomSelects } from '../../lib/custom-select';

let concurrency = 3;

function updateCode() {
  const container = document.getElementById('code-container');
  if (!container) return;
  container.innerHTML = '';
  renderCodeBlock('#code-container', [
    {
      label: 'JavaScript',
      lang: 'javascript',
      code: `
uploader.config = {
  auth: { /* ... */ },
  concurrency: ${concurrency}, // max parallel uploads
};`,
    },
  ]);
}

const page: Page = {
  render() {
    return `
      <div class="page-header">
        <h1>Concurrency</h1>
        <p>Control how many files upload simultaneously with the <code>concurrency</code> option. Lower values reduce server load; higher values finish faster.</p>
      </div>

      <section class="page-section">
        <div class="config-controls">
          <div class="form-group">
            <label for="concurrency-select">Concurrency</label>
            <select id="concurrency-select">
              <option value="1">1 (sequential)</option>
              <option value="2">2</option>
              <option value="3" selected>3 (default)</option>
              <option value="5">5</option>
              <option value="10">10</option>
            </select>
          </div>
        </div>
        <button class="btn-primary open-btn-spacing" id="open-btn">Open uploader</button>
      </section>

      <section class="page-section">
        <h2>Code</h2>
        <div id="code-container"></div>
      </section>
    `;
  },

  init(uploader: SfxUploader) {
    concurrency = 3;
    updateCode();
    const cleanupSelects = initCustomSelects();

    document.getElementById('concurrency-select')!.addEventListener('change', (e) => {
      concurrency = Number((e.target as HTMLSelectElement).value);
      updateCode();
    });

    document.getElementById('open-btn')!.addEventListener('click', () => {
      uploader.config = buildConfig({ concurrency });
      uploader.open();
    });

    page.destroy = () => cleanupSelects();
  },
};

export default page;
