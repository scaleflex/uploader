import type { Page } from '../../lib/router';
import { code, docNav, highlightAll } from '../../lib/doc-utils';

const page: Page = {
  render() {
    return `
      <div class="doc-content">
        <h1>Configuration</h1>
        <p class="doc-lead">All configuration is passed via the <code>config</code> property on the <code>&lt;sfx-uploader&gt;</code> element.</p>

        <h2>Authentication</h2>
        <p>The uploader supports two authentication modes:</p>

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

        <h2>Config options</h2>
        <table>
          <thead><tr><th>Property</th><th>Type</th><th>Default</th><th>Description</th></tr></thead>
          <tbody>
            <tr><td><code>auth</code></td><td><code>AuthConfig</code></td><td><strong>required</strong></td><td>Authentication credentials (see above)</td></tr>
            <tr><td><code>targetFolder</code></td><td><code>string</code></td><td><code>'/'</code></td><td>Destination folder path in Scaleflex</td></tr>
            <tr><td><code>mode</code></td><td><code>'modal' | 'inline'</code></td><td><code>'modal'</code></td><td>Display mode</td></tr>
            <tr><td><code>headerButton</code></td><td><code>'none' | 'close' | 'back'</code></td><td><code>auto</code></td><td>Header navigation button. Defaults to <code>'close'</code> for modal, <code>'none'</code> for inline. Use <code>'back'</code> with modal for step/wizard flows.</td></tr>
            <tr><td><code>concurrency</code></td><td><code>number</code></td><td><code>3</code></td><td>Maximum concurrent uploads</td></tr>
            <tr><td><code>autoProceed</code></td><td><code>boolean</code></td><td><code>false</code></td><td>Start uploading immediately after files are added</td></tr>
            <tr><td><code>showFillMetadata</code></td><td><code>boolean</code></td><td><code>false</code></td><td>Show "Fill Metadata" button in the actions bar</td></tr>
            <tr><td><code>restrictions</code></td><td><code>UploadRestrictions</code></td><td><code>undefined</code></td><td>File validation rules (see below)</td></tr>
            <tr><td><code>connectors</code></td><td><code>ConnectorConfig</code></td><td><code>undefined</code></td><td>Cloud provider configuration (see below)</td></tr>
            <tr><td><code>sourcesLayout</code></td><td><code>'pills' | 'cards'</code></td><td><code>'pills'</code></td><td>Layout for the import-from sources section. <code>'pills'</code> shows compact horizontal buttons; <code>'cards'</code> shows a grid of square cards with large icons.</td></tr>
            <tr><td><code>clearOnClose</code></td><td><code>boolean</code></td><td><code>true</code></td><td>Whether closing the modal clears all files. Set to <code>false</code> to preserve files across open/close cycles.</td></tr>
            <tr><td><code>clearOnComplete</code></td><td><code>boolean</code></td><td><code>true</code></td><td>Whether the "Done" action clears all files. In modal mode this also closes the uploader. Set to <code>false</code> to keep files after completion.</td></tr>
            <tr><td><code>rejectedFileAutoRemoveDelay</code></td><td><code>number | false</code></td><td><code>4000</code></td><td>Auto-remove rejected files after this delay in milliseconds. Set to <code>0</code> or <code>false</code> to disable auto-removal.</td></tr>
            <tr><td><code>callbacks</code></td><td><code>UploaderCallbacks</code></td><td><code>undefined</code></td><td>Lifecycle callbacks (see <a href="#/docs/api">API</a>)</td></tr>
          </tbody>
        </table>

        <h2>Display modes</h2>
        <p>The uploader supports two display modes (<code>mode</code>) and three header button styles (<code>headerButton</code>).</p>

        <h3>Modal (default)</h3>
        <p>Opens as a centered overlay with a backdrop. The header shows a close (X) button by default.</p>
        ${code(
          'typescript',
          `uploader.config = {
  auth: { /* ... */ },
  mode: 'modal',           // default
  // headerButton: 'close' // default for modal
};
uploader.open();`,
        )}

        <h3>Inline</h3>
        <p>Embeds directly into the page. No header button is shown by default.</p>
        ${code(
          'typescript',
          `uploader.config = {
  auth: { /* ... */ },
  mode: 'inline',
  // headerButton: 'none' // default for inline
};`,
        )}

        <h3>Step mode (modal + back button)</h3>
        <p>Use the modal with a back arrow instead of a close icon — ideal for multi-step wizard flows where the uploader is one step in a larger process.</p>
        ${code(
          'typescript',
          `uploader.config = {
  auth: { /* ... */ },
  mode: 'modal',
  headerButton: 'back',
};
uploader.open();`,
        )}

        <h2>Sources layout</h2>
        <p>Choose how import sources are displayed in the drop zone. The default <code>'pills'</code> layout shows compact horizontal buttons. The <code>'cards'</code> layout displays a grid of square cards with large icons — ideal for wider layouts where visual clarity is preferred.</p>

        <h3>Pills (default)</h3>
        <p>Sources appear as small inline pills in a single row. Overflow sources are hidden behind a "More" dropdown.</p>
        ${code(
          'typescript',
          `uploader.config = {
  auth: { /* ... */ },
  // sourcesLayout: 'pills' // default
};`,
        )}

        <h3>Cards</h3>
        <p>Sources appear as a grid of square cards with centered icons and labels. The cards are responsive — 5 visible on desktop, 3 on tablet, 2 on mobile — with overflow in a "More" card.</p>
        ${code(
          'typescript',
          `uploader.config = {
  auth: { /* ... */ },
  sourcesLayout: 'cards',
};`,
        )}

        <h2>Behavior options</h2>
        <p>Control how the uploader handles files on close, completion, and rejection.</p>

        <h3>Preserve files on close</h3>
        <p>By default, closing the modal clears all files. Set <code>clearOnClose: false</code> to preserve files across open/close cycles — useful when the uploader is part of a multi-step flow.</p>
        ${code(
          'typescript',
          `uploader.config = {
  auth: { /* ... */ },
  mode: 'modal',
  clearOnClose: false, // files persist when the modal is closed
};`,
        )}

        <h3>Keep files after completion</h3>
        <p>By default, the "Done" action clears all files and resets the uploader. Set <code>clearOnComplete: false</code> to keep files after completion — useful when you want to display the result or allow further actions.</p>
        ${code(
          'typescript',
          `uploader.config = {
  auth: { /* ... */ },
  clearOnComplete: false, // files remain after "Done" is clicked
};`,
        )}

        <h3>Rejected file auto-removal</h3>
        <p>Rejected files are auto-removed from the list after a configurable delay (default: 4 seconds). Set to <code>0</code> or <code>false</code> to keep rejected files visible until manually removed.</p>
        ${code(
          'typescript',
          `uploader.config = {
  auth: { /* ... */ },
  rejectedFileAutoRemoveDelay: 6000, // 6 seconds (default: 4000)
  // rejectedFileAutoRemoveDelay: 0,  // disable auto-removal
};`,
        )}

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
