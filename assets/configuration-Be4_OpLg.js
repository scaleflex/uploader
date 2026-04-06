import{h as t,c as e,d as o}from"./doc-utils-XkOyWBCy.js";const a={render(){return`
      <div class="doc-content">
        <h1>Configuration</h1>
        <p class="doc-lead">All configuration is passed via the <code>config</code> property on the <code>&lt;sfx-uploader&gt;</code> element.</p>

        <h2>Authentication</h2>
        <p>The uploader supports two authentication modes:</p>

        <h3>Security template (external / public apps)</h3>
        <p>Use for client-side integrations. The uploader exchanges the security template ID for a SASS key on init.</p>
        ${e("typescript",`{
  auth: {
    mode: 'security-template',
    container: string,            // Scaleflex container name
    securityTemplateId: string,   // Exchanged for a SASS key via API
  }
}`)}

        <h3>SASS key (internal / Scaleflex apps)</h3>
        <p>Use when you already have a SASS key (e.g. from your backend).</p>
        ${e("typescript",`{
  auth: {
    mode: 'sass-key',
    container: string,
    sassKey: string,
  }
}`)}

        <h2>Config options</h2>

        <h3>Required</h3>
        <table>
          <thead><tr><th>Property</th><th>Type</th><th>Default</th><th>Description</th></tr></thead>
          <tbody>
            <tr><td><code>auth</code></td><td><code>AuthConfig</code></td><td><strong>required</strong></td><td>Authentication credentials (see above)</td></tr>
          </tbody>
        </table>

        <h3>Display</h3>
        <table>
          <thead><tr><th>Property</th><th>Type</th><th>Default</th><th>Description</th></tr></thead>
          <tbody>
            <tr><td><code>header</code></td><td><code>boolean | 'close' | 'back'</code></td><td><code>'close'</code> (modal) / <code>true</code> (inline)</td><td>Controls the standard header bar. <code>'close'</code> shows an X button, <code>'back'</code> a back arrow, <code>true</code> shows header with no button, <code>false</code> hides the header entirely.</td></tr>
            <tr><td><code>inlineHeader</code></td><td><code>InlineHeaderConfig</code></td><td><code>undefined</code></td><td>Branded header for inline mode with <code>accent</code>, <code>title</code>, and <code>description</code> fields. When set, replaces the standard header. See <a href="#/examples/inline">Inline example</a>.</td></tr>
            <tr><td><code>mode</code></td><td><code>'modal' | 'inline'</code></td><td><code>'modal'</code></td><td>Display mode</td></tr>
            <tr><td><code>sourcesLayout</code></td><td><code>'pills' | 'cards'</code></td><td><code>'pills'</code></td><td>Layout for the import-from sources section. <code>'pills'</code> shows compact horizontal buttons; <code>'cards'</code> shows a grid of square cards with large icons.</td></tr>
          </tbody>
        </table>

        <h3>Upload behavior</h3>
        <table>
          <thead><tr><th>Property</th><th>Type</th><th>Default</th><th>Description</th></tr></thead>
          <tbody>
            <tr><td><code>autoProceed</code></td><td><code>boolean</code></td><td><code>false</code></td><td>Start uploading immediately after files are added</td></tr>
            <tr><td><code>concurrency</code></td><td><code>number</code></td><td><code>3</code></td><td>Maximum concurrent uploads</td></tr>
            <tr><td><code>showFillMetadata</code></td><td><code>boolean</code></td><td><code>false</code></td><td>Show "Fill Metadata" button in the actions bar</td></tr>
            <tr><td><code>targetFolder</code></td><td><code>string</code></td><td><code>'/'</code></td><td>Destination folder path in Scaleflex</td></tr>
            <tr><td><code>tusConfig</code></td><td><code>TusConfig | boolean</code></td><td><code>undefined</code></td><td>Enable resumable uploads via the tus protocol for large files. Pass <code>true</code> for defaults (10 MB threshold, 5 MB chunks) or a <code>TusConfig</code> object. See <a href="#/examples/resumable-upload">Resumable upload example</a>.</td></tr>
          </tbody>
        </table>

        <h3>Lifecycle</h3>
        <table>
          <thead><tr><th>Property</th><th>Type</th><th>Default</th><th>Description</th></tr></thead>
          <tbody>
            <tr><td><code>clearOnClose</code></td><td><code>boolean</code></td><td><code>true</code></td><td>Whether closing the modal clears all files. Set to <code>false</code> to preserve files across open/close cycles.</td></tr>
            <tr><td><code>clearOnComplete</code></td><td><code>boolean</code></td><td><code>true</code></td><td>Whether the "Done" action clears all files. In modal mode this also closes the uploader. Set to <code>false</code> to keep files after completion.</td></tr>
            <tr><td><code>closeOnComplete</code></td><td><code>boolean | number</code></td><td><code>false</code></td><td>Automatically close the uploader after all uploads finish. <code>true</code> uses a 1.5 s delay; pass a number for a custom delay in ms. Pairs well with <code>autoProceed</code> for a fully hands-off flow.</td></tr>
            <tr><td><code>minimizeOnUpload</code></td><td><code>boolean</code></td><td><code>false</code></td><td>Show a "Minimize & continue in background" button during uploads. When clicked, the modal collapses to a floating progress pill so the user can keep working.</td></tr>
            <tr><td><code>rejectedFileAutoRemoveDelay</code></td><td><code>number | false</code></td><td><code>false</code></td><td>Auto-remove rejected files after this delay in milliseconds. Set to a number (e.g. <code>4000</code>) to enable auto-removal.</td></tr>
          </tbody>
        </table>

        <h3>Advanced</h3>
        <table>
          <thead><tr><th>Property</th><th>Type</th><th>Default</th><th>Description</th></tr></thead>
          <tbody>
            <tr><td><code>callbacks</code></td><td><code>UploaderCallbacks</code></td><td><code>undefined</code></td><td>Lifecycle callbacks (see <a href="#/docs/api">API</a>)</td></tr>
            <tr><td><code>connectors</code></td><td><code>ConnectorConfig</code></td><td><code>undefined</code></td><td>Cloud provider configuration (see below)</td></tr>
            <tr><td><code>restrictions</code></td><td><code>UploadRestrictions</code></td><td><code>undefined</code></td><td>File validation rules (see below)</td></tr>
          </tbody>
        </table>

        <h2>Display modes</h2>
        <p>The uploader supports two display modes (<code>mode</code>) and a configurable header (<code>header</code>).</p>

        <h3>Modal (default)</h3>
        <p>Opens as a centered overlay with a backdrop. The header shows a close (X) button by default.</p>
        ${e("typescript",`uploader.config = {
  auth: { /* ... */ },
  mode: 'modal',           // default
  // header: 'close' // default for modal
};
uploader.open();`)}

        <h3>Inline</h3>
        <p>Embeds directly into the page. The standard header is shown with no button by default.</p>
        ${e("typescript",`uploader.config = {
  auth: { /* ... */ },
  mode: 'inline',
  // header: true // default — header visible, no button
};`)}

        <h3>Inline with branded header</h3>
        <p>Use <code>inlineHeader</code> for a custom branded header with accent, title, and description — ideal for full-page embedded views. When set, it replaces the standard header.</p>
        ${e("typescript",`uploader.config = {
  auth: { /* ... */ },
  mode: 'inline',
  inlineHeader: {
    accent: 'Airbox',
    title: 'Q1 Marketing Assets',
    description: 'Upload banners, logos and brand visuals',
  },
};`)}

        <h3>Back button (wizard / step flows)</h3>
        <p>Use <code>header: 'back'</code> to show a back arrow instead of a close icon — ideal for multi-step wizard flows where the uploader is one step in a larger process.</p>
        ${e("typescript",`uploader.config = {
  auth: { /* ... */ },
  header: 'back', // works in both modal and inline
};
uploader.open();`)}

        <h3>No header</h3>
        <p>Set <code>header: false</code> to hide the standard header entirely — useful when the parent app provides its own chrome.</p>
        ${e("typescript",`uploader.config = {
  auth: { /* ... */ },
  mode: 'inline',
  header: false,
};`)}

        <h2>Sources layout</h2>
        <p>Choose how import sources are displayed in the drop zone. The default <code>'pills'</code> layout shows compact horizontal buttons. The <code>'cards'</code> layout displays a grid of square cards with large icons — ideal for wider layouts where visual clarity is preferred.</p>

        <h3>Pills (default)</h3>
        <p>Sources appear as small inline pills in a single row. Overflow sources are hidden behind a "More" dropdown.</p>
        ${e("typescript",`uploader.config = {
  auth: { /* ... */ },
  // sourcesLayout: 'pills' // default
};`)}

        <h3>Cards</h3>
        <p>Sources appear as a grid of square cards with centered icons and labels. The cards are responsive — 5 visible on desktop, 3 on tablet, 2 on mobile — with overflow in a "More" card.</p>
        ${e("typescript",`uploader.config = {
  auth: { /* ... */ },
  sourcesLayout: 'cards',
};`)}

        <h2>Behavior options</h2>
        <p>Control how the uploader handles files on close, completion, and rejection.</p>

        <h3>Preserve files on close</h3>
        <p>By default, closing the modal clears all files. Set <code>clearOnClose: false</code> to preserve files across open/close cycles — useful when the uploader is part of a multi-step flow.</p>
        ${e("typescript",`uploader.config = {
  auth: { /* ... */ },
  mode: 'modal',
  clearOnClose: false, // files persist when the modal is closed
};`)}

        <h3>Keep files after completion</h3>
        <p>By default, the "Done" action clears all files and resets the uploader. Set <code>clearOnComplete: false</code> to keep files after completion — useful when you want to display the result or allow further actions.</p>
        ${e("typescript",`uploader.config = {
  auth: { /* ... */ },
  clearOnComplete: false, // files remain after "Done" is clicked
};`)}

        <h3>Auto-close on complete</h3>
        <p>Set <code>closeOnComplete: true</code> to automatically close the uploader after all uploads finish. The modal stays visible for 1.5 seconds so the user briefly sees the success state before it closes. Pairs naturally with <code>autoProceed</code> for a fully hands-off upload flow.</p>
        ${e("typescript",`uploader.config = {
  auth: { /* ... */ },
  autoProceed: true,      // start uploading immediately
  closeOnComplete: true,  // auto-close after uploads finish
};`)}

        <h3>Minimize to background</h3>
        <p>Set <code>minimizeOnUpload: true</code> to show a "Minimize & continue in background" button on the upload overlay. When clicked, the modal collapses into a small floating progress pill in the bottom-right corner, letting the user continue working while uploads finish in the background.</p>
        ${e("typescript",`uploader.config = {
  auth: { /* ... */ },
  minimizeOnUpload: true, // show minimize button during uploads
};`)}

        <h3>Rejected file auto-removal</h3>
        <p>By default, rejected files stay visible in the list. Set <code>rejectedFileAutoRemoveDelay</code> to a number to auto-remove them after that delay in milliseconds.</p>
        ${e("typescript",`uploader.config = {
  auth: { /* ... */ },
  rejectedFileAutoRemoveDelay: 4000, // auto-remove after 4 seconds
};`)}

        <h3>Resizable preview panel</h3>
        <p>When you click a file to preview it, the uploader splits into a <strong>file grid</strong> on the left and a <strong>preview panel</strong> on the right (420 px wide by default). Drag the vertical divider between them to resize — the file grid automatically adapts its column count (e.g. 3 → 4 columns) as you give it more space. The split range is clamped to 25 %–75 %.</p>
        <p>Images with transparency (PNG, WebP) display a <strong>checkerboard background</strong> in both the grid thumbnails and the preview panel so you can instantly see alpha areas.</p>

        <h2>Upload restrictions</h2>
        <p>Restrict which files users can add via the <code>restrictions</code> config option.</p>
        ${e("typescript",`{
  restrictions: {
    maxFileSize: 10 * 1024 * 1024,           // 10 MB per file
    maxTotalFilesSize: 100 * 1024 * 1024,    // 100 MB total
    maxNumberOfFiles: 20,                     // Max number of files
    minNumberOfFiles: 1,                      // Min number of files
    allowedFileTypes: ['image/*', 'video/*'], // MIME patterns
    blockedFileTypes: ['application/exe'],    // Blocked MIME patterns
  }
}`)}
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
        ${e("typescript",`{
  connectors: {
    companionUrl: 'https://companion.example.com',
    providers: ['google-drive', 'dropbox', 'onedrive', 'box'],
  }
}`)}
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

        ${o({href:"#/docs/getting-started",label:"Getting started"},{href:"#/docs/api",label:"API"})}
      </div>
    `},init(){t()}};export{a as default};
