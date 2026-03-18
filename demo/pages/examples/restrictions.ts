import type { Page } from '../../lib/router';
import type { SfxUploader } from '../../../src/sfx-uploader';
import { buildConfig } from '../../lib/auth';
import { renderCodeBlock } from '../../lib/code-block';

let maxNumberOfFiles: number | undefined = 5;
let maxFileSize: number | undefined = 5 * 1024 * 1024;
let allowedFileTypes: string[] | undefined = ['image/*'];

function updateCode() {
  const container = document.getElementById('code-container');
  if (!container) return;
  container.innerHTML = '';

  const lines: string[] = [];
  if (maxNumberOfFiles != null) lines.push(`    maxNumberOfFiles: ${maxNumberOfFiles},`);
  if (maxFileSize != null) lines.push(`    maxFileSize: ${maxFileSize}, // ${maxFileSize / 1024 / 1024} MB`);
  if (allowedFileTypes?.length) lines.push(`    allowedFileTypes: [${allowedFileTypes.map((t) => `'${t}'`).join(', ')}],`);

  renderCodeBlock('#code-container', [
    {
      label: 'JavaScript',
      lang: 'javascript',
      code: `
uploader.config = {
  auth: { /* ... */ },
  restrictions: {
${lines.join('\n')}
  },
};`,
    },
  ]);
}

const page: Page = {
  render() {
    return `
      <div class="page-header">
        <h1>Restrictions</h1>
        <p>Limit which files users can add via the <code>restrictions</code> config. Files that violate restrictions are rejected with a reason.</p>
      </div>

      <section class="page-section">
        <div class="config-controls">
          <div class="form-group">
            <label for="max-files">Max files</label>
            <select id="max-files">
              <option value="">Unlimited</option>
              <option value="1">1</option>
              <option value="5" selected>5</option>
              <option value="10">10</option>
              <option value="20">20</option>
            </select>
          </div>
          <div class="form-group">
            <label for="max-size">Max file size</label>
            <select id="max-size">
              <option value="">Unlimited</option>
              <option value="1048576">1 MB</option>
              <option value="5242880" selected>5 MB</option>
              <option value="10485760">10 MB</option>
              <option value="52428800">50 MB</option>
            </select>
          </div>
          <div class="form-group">
            <label for="allowed-types">Allowed types</label>
            <select id="allowed-types">
              <option value="">All types</option>
              <option value="image/*" selected>Images only</option>
              <option value="video/*">Videos only</option>
              <option value="image/*,video/*">Images & videos</option>
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
    maxNumberOfFiles = 5;
    maxFileSize = 5 * 1024 * 1024;
    allowedFileTypes = ['image/*'];
    updateCode();

    document.getElementById('max-files')!.addEventListener('change', (e) => {
      const val = (e.target as HTMLSelectElement).value;
      maxNumberOfFiles = val ? Number(val) : undefined;
      updateCode();
    });

    document.getElementById('max-size')!.addEventListener('change', (e) => {
      const val = (e.target as HTMLSelectElement).value;
      maxFileSize = val ? Number(val) : undefined;
      updateCode();
    });

    document.getElementById('allowed-types')!.addEventListener('change', (e) => {
      const val = (e.target as HTMLSelectElement).value;
      allowedFileTypes = val ? val.split(',') : undefined;
      updateCode();
    });

    document.getElementById('open-btn')!.addEventListener('click', () => {
      uploader.config = buildConfig({
        restrictions: {
          ...(maxNumberOfFiles != null && { maxNumberOfFiles }),
          ...(maxFileSize != null && { maxFileSize }),
          ...(allowedFileTypes?.length && { allowedFileTypes }),
        },
      });
      uploader.open();
    });
  },
};

export default page;
