import type { Page } from '../../lib/router';
import { code, docNav, highlightAll } from '../../lib/doc-utils';

const page: Page = {
  render() {
    return `
      <div class="doc-content">
        <h1>Configuration</h1>
        <p class="doc-lead">All configuration is passed via the <code>config</code> property on the <code>&lt;sfx-uploader&gt;</code> element.</p>

        <h2>Authentication</h2>
        <p>The uploader supports three authentication modes:</p>

        <h3>Security template (recommended)</h3>
        <p>Use for client-side integrations. The uploader exchanges the security template ID for a SASS key on init.</p>
        ${code(
          'typescript',
          `{
  auth: {
    mode: 'security-template',
    container: string,            // Scaleflex container name
    securityTemplateId: string,   // Exchanged for a SASS key via API
  }
}`,
        )}

        <h3>SASS key (direct)</h3>
        <p>Use when you already have a SASS key (e.g. from your backend).</p>
        ${code(
          'typescript',
          `{
  auth: {
    mode: 'sass-key',
    container: string,
    sassKey: string,
  }
}`,
        )}

        <h3>Session (internal / Scaleflex apps)</h3>
        <p>Use when your backend manages Scaleflex sessions.</p>
        ${code(
          'typescript',
          `{
  auth: {
    mode: 'session',
    container: string,        // Scaleflex container name
    sessionToken: string,     // X-Session-Token
    companyToken?: string,    // X-Company-Token (optional)
    projectToken?: string,    // X-Project-Token (optional)
  }
}`,
        )}

        <h2>Config options</h2>
        <table>
          <thead><tr><th>Property</th><th>Type</th><th>Default</th><th>Description</th></tr></thead>
          <tbody>
            <tr><td><code>auth</code></td><td><code>AuthConfig</code></td><td><strong>required</strong></td><td>Authentication credentials (see above)</td></tr>
            <tr><td><code>targetFolder</code></td><td><code>string</code></td><td><code>'/'</code></td><td>Destination folder path in Scaleflex</td></tr>
            <tr><td><code>mode</code></td><td><code>'modal' | 'inline'</code></td><td><code>'modal'</code></td><td>Display mode</td></tr>
            <tr><td><code>concurrency</code></td><td><code>number</code></td><td><code>3</code></td><td>Maximum concurrent uploads</td></tr>
            <tr><td><code>autoProceed</code></td><td><code>boolean</code></td><td><code>false</code></td><td>Start uploading immediately after files are added</td></tr>
            <tr><td><code>showFillMetadata</code></td><td><code>boolean</code></td><td><code>false</code></td><td>Show "Fill Metadata" button in the actions bar</td></tr>
            <tr><td><code>restrictions</code></td><td><code>UploadRestrictions</code></td><td><code>undefined</code></td><td>File validation rules (see below)</td></tr>
            <tr><td><code>connectors</code></td><td><code>ConnectorConfig</code></td><td><code>undefined</code></td><td>Cloud provider configuration (see below)</td></tr>
            <tr><td><code>callbacks</code></td><td><code>UploaderCallbacks</code></td><td><code>undefined</code></td><td>Lifecycle callbacks (see <a href="#/docs/api">API</a>)</td></tr>
          </tbody>
        </table>

        <h2>Upload restrictions</h2>
        <p>Restrict which files users can add via the <code>restrictions</code> config option.</p>
        ${code(
          'typescript',
          `{
  restrictions: {
    maxFileSize: 10 * 1024 * 1024,           // 10 MB per file
    maxTotalFilesSize: 100 * 1024 * 1024,    // 100 MB total
    maxNumberOfFiles: 20,                     // Max number of files
    minNumberOfFiles: 1,                      // Min number of files
    allowedFileTypes: ['image/*', 'video/*'], // MIME patterns
    blockedFileTypes: ['application/exe'],    // Blocked MIME patterns
  }
}`,
        )}
        <table>
          <thead><tr><th>Property</th><th>Type</th><th>Description</th></tr></thead>
          <tbody>
            <tr><td><code>maxFileSize</code></td><td><code>number | null</code></td><td>Maximum file size in bytes</td></tr>
            <tr><td><code>maxTotalFilesSize</code></td><td><code>number | null</code></td><td>Maximum total size of all files in bytes</td></tr>
            <tr><td><code>maxNumberOfFiles</code></td><td><code>number | null</code></td><td>Maximum number of files allowed</td></tr>
            <tr><td><code>minNumberOfFiles</code></td><td><code>number | null</code></td><td>Minimum number of files required</td></tr>
            <tr><td><code>allowedFileTypes</code></td><td><code>string[] | null</code></td><td>Allowed MIME type patterns (e.g. <code>'image/*'</code>)</td></tr>
            <tr><td><code>blockedFileTypes</code></td><td><code>string[] | null</code></td><td>Blocked MIME type patterns</td></tr>
          </tbody>
        </table>

        <h2>Cloud connectors</h2>
        <p>Enable cloud provider imports by providing a <code>connectors</code> config. The uploader uses a Companion-compatible proxy for OAuth flows.</p>
        ${code(
          'typescript',
          `{
  connectors: {
    companionUrl: 'https://companion.example.com',
    providers: ['google-drive', 'dropbox', 'onedrive', 'box'],
  }
}`,
        )}
        <table>
          <thead><tr><th>Provider ID</th><th>Service</th></tr></thead>
          <tbody>
            <tr><td><code>'google-drive'</code></td><td>Google Drive</td></tr>
            <tr><td><code>'dropbox'</code></td><td>Dropbox</td></tr>
            <tr><td><code>'onedrive'</code></td><td>Microsoft OneDrive</td></tr>
            <tr><td><code>'box'</code></td><td>Box</td></tr>
            <tr><td><code>'instagram'</code></td><td>Instagram</td></tr>
            <tr><td><code>'facebook'</code></td><td>Facebook</td></tr>
            <tr><td><code>'unsplash'</code></td><td>Unsplash (search-based)</td></tr>
          </tbody>
        </table>

        ${docNav(
          { href: '#/docs/getting-started', label: 'Getting started' },
          { href: '#/docs/api', label: 'API' },
        )}
      </div>
    `;
  },

  init() {
    highlightAll();
  },
};

export default page;
