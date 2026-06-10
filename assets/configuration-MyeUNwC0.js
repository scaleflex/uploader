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
        <table class="config-table">
          <thead><tr><th>Property</th><th>Type</th><th>Default</th><th>Description</th></tr></thead>
          <tbody>
            <tr><td><code>auth</code></td><td><code>AuthConfig</code></td><td><strong>required</strong></td><td>Authentication credentials (see above)</td></tr>
          </tbody>
        </table>

        <h3>Display</h3>
        <table class="config-table">
          <thead><tr><th>Property</th><th>Type</th><th>Default</th><th>Description</th></tr></thead>
          <tbody>
            <tr><td><code>header</code></td><td><code>boolean | 'close' | 'back'</code></td><td><code>'close'</code> (modal) / <code>true</code> (inline)</td><td>Controls the standard header bar. <code>'close'</code> shows an X button, <code>'back'</code> a back arrow, <code>true</code> shows header with no button, <code>false</code> hides the header entirely.</td></tr>
            <tr><td><code>inlineHeader</code></td><td><code>InlineHeaderConfig</code></td><td><code>undefined</code></td><td>Branded header for inline mode with <code>accent</code>, <code>title</code>, and <code>description</code> fields. When set, replaces the standard header. See <a href="#/examples/inline">Inline example</a>.</td></tr>
            <tr><td><code>mode</code></td><td><code>'modal' | 'inline'</code></td><td><code>'modal'</code></td><td>Display mode</td></tr>
            <tr><td><code>sourcesLayout</code></td><td><code>'pills' | 'cards'</code></td><td><code>'pills'</code></td><td>Layout for the import-from sources section. <code>'pills'</code> shows compact horizontal buttons; <code>'cards'</code> shows a grid of square cards with large icons.</td></tr>
            <tr><td><code>locale</code></td><td><code>string</code></td><td><code>navigator.language</code></td><td>BCP 47 locale tag for the UI language (e.g. <code>'fr'</code>, <code>'de'</code>, <code>'en-US'</code>). Translations are loaded lazily from the Wordplex CDN; falls back to English for any untranslated keys.</td></tr>
          </tbody>
        </table>

        <h3>Upload behavior</h3>
        <table class="config-table">
          <thead><tr><th>Property</th><th>Type</th><th>Default</th><th>Description</th></tr></thead>
          <tbody>
            <tr><td><code>autoProceed</code></td><td><code>boolean</code></td><td><code>false</code></td><td>Start uploading immediately after files are added</td></tr>
            <tr><td><code>concurrency</code></td><td><code>number</code></td><td><code>3</code></td><td>Maximum concurrent uploads</td></tr>
            <tr><td><code>showFillMetadata</code></td><td><code>boolean</code></td><td><code>false</code></td><td>Show "Fill Metadata" button in the actions bar</td></tr>
            <tr><td><code>showLocateButton</code></td><td><code>boolean</code></td><td><code>false</code></td><td>Show "Locate" button on completed files — both on the review-screen tiles and as an icon in the floating panel's per-file rows. Fires <code>sfx-file-locate</code> event (detail <code>{ file, url }</code>) and <code>onFileLocate(file, url)</code> callback, then navigates the current tab to the resolved Locate URL (see <code>adminUrl</code> / <code>getLocateUrl</code>). Suppress the navigation by calling <code>event.preventDefault()</code> on <code>sfx-file-locate</code> or returning <code>false</code> from <code>onFileLocate</code> — then route <code>url</code> via your SPA router to avoid the full-page reload.</td></tr>
            <tr><td><code>showCopyCdnButton</code></td><td><code>boolean</code></td><td><code>false</code></td><td>Show "Copy CDN" button on completed file tiles in the review screen. Copies the CDN URL to clipboard and fires <code>sfx-file-copy-cdn</code> event.</td></tr>
            <tr><td><code>targetFolder</code></td><td><code>string</code></td><td><code>'/'</code></td><td>Destination folder path in Scaleflex</td></tr>
            <tr><td><code>forceName</code></td><td><code>string | (() =&gt; string)</code></td><td><code>undefined</code></td><td>Force every uploaded file to be saved under this exact name in <code>targetFolder</code>, overwriting any existing file with the same name. Translates to <code>&amp;opt_force_name=…</code> on the upload request and works across every source (local file, URL import, Google Drive, Unsplash, …). Setting this implicitly clamps <code>restrictions.maxNumberOfFiles</code> to <code>1</code>, disables the multi-select on the file picker, and bypasses tus regardless of file size. Use for single-asset slots like watermarks, default images, or folder icons.</td></tr>
            <tr><td><code>getUploadParams</code></td><td><code>(file) =&gt; Record&lt;string, string&gt; | undefined</code></td><td><code>undefined</code></td><td>Append arbitrary query parameters (typically Filerobot <code>opt_*</code> flags) to every upload request. Called per file just before its request is sent and merged into the URL of whichever upload path runs (XHR / URL / tus / Companion). Returning a non-empty object also forces the XHR path. Wins on key collision against <code>forceName</code>.</td></tr>
            <tr><td><code>tusConfig</code></td><td><code>TusConfig | boolean</code></td><td><code>undefined</code></td><td>Enable resumable uploads via the tus protocol for large files. Pass <code>true</code> for defaults (10 MB threshold, 5 MB chunks) or a <code>TusConfig</code> object. See <a href="#/examples/resumable-upload">Resumable upload example</a>.</td></tr>
            <tr><td><code>similarityCheck</code></td><td><code>{ enabled: boolean; confidence?: 'low' | 'mid' | 'high' }</code></td><td><code>undefined</code></td><td>Let users check images against visually similar assets in the library before uploading, to avoid duplicates. Hidden unless <code>enabled</code>. <code>confidence</code> maps to the similarity threshold (low 0.60 / mid 0.75 / high 0.90). See <a href="#/examples/similar-check">Similar asset check example</a>.</td></tr>
            <tr><td><code>uploadSettings</code></td><td><code>{ defaults?: {…} }</code></td><td><code>undefined</code> (panel always shown)</td><td>The settings panel (gear icon, image resize / video transcode / resumable uploads) is <strong>always available</strong> once files are added — no flag needed. This optional config only seeds the panel's starting values via <code>defaults</code>. See <a href="#/examples/upload-settings">Upload settings example</a>.</td></tr>
          </tbody>
        </table>

        <h3>Lifecycle</h3>
        <table class="config-table">
          <thead><tr><th>Property</th><th>Type</th><th>Default</th><th>Description</th></tr></thead>
          <tbody>
            <tr><td><code>clearOnClose</code></td><td><code>boolean</code></td><td><code>true</code></td><td>Whether closing the modal clears all files. Set to <code>false</code> to preserve files across open/close cycles.</td></tr>
            <tr><td><code>clearOnComplete</code></td><td><code>boolean</code></td><td><code>true</code></td><td>Whether the "Done" action clears all files. In modal mode this also closes the uploader. Set to <code>false</code> to keep files after completion.</td></tr>
            <tr><td><code>closeOnComplete</code></td><td><code>boolean | number</code></td><td><code>false</code></td><td>Automatically close the uploader after all uploads finish. <code>true</code> uses a 1.5 s delay; pass a number for a custom delay in ms. Pairs well with <code>autoProceed</code> for a fully hands-off flow.</td></tr>
            <tr><td><code>minimizeOnUpload</code></td><td><code>boolean</code></td><td><code>false</code></td><td>Show a "Minimize & continue in background" button during uploads. When clicked, the modal collapses to a floating progress pill so the user can keep working.</td></tr>
            <tr><td><code>lastUploadReview</code></td><td><code>boolean | string</code></td><td><code>false</code></td><td>Enable the last-upload review feature. <code>true</code> auto-scopes the storage key by <code>container</code> + <code>airboxPuid</code>. Pass a string for an explicit ID when multiple uploaders share the same airbox. See <a href="#/examples/last-upload-review">Last upload review example</a>.</td></tr>
            <tr><td><code>rejectedFileAutoRemoveDelay</code></td><td><code>number | false</code></td><td><code>false</code></td><td>Auto-remove rejected files after this delay in milliseconds. Set to a number (e.g. <code>4000</code>) to enable auto-removal.</td></tr>
          </tbody>
        </table>

        <h3>Advanced</h3>
        <table class="config-table">
          <thead><tr><th>Property</th><th>Type</th><th>Default</th><th>Description</th></tr></thead>
          <tbody>
            <tr><td><code>callbacks</code></td><td><code>UploaderCallbacks</code></td><td><code>undefined</code></td><td>Lifecycle callbacks (see <a href="#/docs/api">API</a>)</td></tr>
            <tr><td><code>connectors</code></td><td><code>ConnectorConfig</code></td><td><code>undefined</code></td><td>Cloud provider configuration (see below)</td></tr>
            <tr><td><code>restrictions</code></td><td><code>UploadRestrictions</code></td><td><code>undefined</code></td><td>File validation rules (see below)</td></tr>
            <tr><td><code>getLocateUrl</code></td><td><code>(file) =&gt; string | null | undefined</code></td><td><code>undefined</code></td><td>Host-supplied builder for the "Locate" button URL. Receives the completed <code>UploadFile</code> and should return a URL. Return <code>null</code> / <code>undefined</code> to fall back to the <code>adminUrl</code>-based default. Pairs with <code>showLocateButton: true</code>.</td></tr>
            <tr><td><code>adminUrl</code></td><td><code>string</code></td><td><code>window.location.origin</code></td><td>Base URL of the Filerobot admin / DAM app — used to build the default Locate target when <code>getLocateUrl</code> is not provided. The uploader navigates to <code>\${adminUrl}/library?lf=&lt;base64(uuid)&gt;</code>, the same deep-link the admin uses internally to scroll to and select a file. Defaults to <code>window.location.origin</code> (correct when embedded inside the admin); set explicitly for cross-origin embeds or custom domains.</td></tr>
            <tr><td><code>transformRemoteThumbnail</code></td><td><code>(url, ctx) =&gt; string</code></td><td><code>undefined</code></td><td>Rewrite third-party thumbnail URLs (URL imports + connector listings) into a CSP-allowed proxy URL. Use this when the host page enforces a Content-Security-Policy that disallows the original origin. See <a href="#csp-aware-deployments">CSP-aware deployments</a>.</td></tr>
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

        <h2>Internationalisation</h2>
        <p>The uploader ships with English strings baked in as fallbacks. To render the UI in a different language, pass a <a href="https://www.rfc-editor.org/rfc/rfc5646" target="_blank" rel="noopener">BCP 47</a> locale tag via <code>locale</code>. Translations are loaded lazily from the Wordplex CDN on first use; if a key is not yet translated the English default is shown.</p>
        ${e("typescript",`uploader.config = {
  auth: { /* ... */ },
  locale: 'fr', // 'fr', 'de', 'en-US', etc. — defaults to navigator.language
};`)}
        <p>To debug missing translations locally, set the flag in <code>localStorage</code> and reload — untranslated keys are logged to the console:</p>
        ${e("javascript","localStorage.setItem('sfxUploaderTranslationsMissingKeysEnabled', 'true');")}

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

        <h3>Last upload review</h3>
        <p>Enable the <strong>last upload review</strong> feature to let users revisit the most recent upload batch after closing and re-opening the uploader (within the same browser tab). The batch is persisted to <code>sessionStorage</code> and automatically cleared when the tab closes.</p>
        <p>The feature is <strong>disabled by default</strong>. When enabled, the storage key is scoped so that different uploader instances (different containers, airboxes, or purposes) never collide.</p>

        <h4>Auto-scoped (recommended)</h4>
        <p>Pass <code>true</code> — the key is derived from <code>auth.container</code> and <code>auth.airboxPuid</code> (when present).</p>
        ${e("typescript",`uploader.config = {
  auth: {
    mode: 'security-template',
    container: 'my-container',
    securityTemplateId: '...',
    airboxPuid: 'airbox-123',   // optional — included in the key when set
  },
  lastUploadReview: true,       // key: "sfx-uploader:last-upload:my-container:airbox-123"
};`)}

        <h4>Explicit ID</h4>
        <p>When you have <strong>multiple uploaders targeting the same airbox</strong> (e.g. one for product photos, one for avatars), pass a unique string to disambiguate them.</p>
        ${e("typescript",`// Uploader A — product photos
uploaderA.config = {
  auth: { /* same container + airbox */ },
  lastUploadReview: 'product-photos',  // key: "sfx-uploader:last-upload:product-photos"
};

// Uploader B — avatars
uploaderB.config = {
  auth: { /* same container + airbox */ },
  lastUploadReview: 'avatars',         // key: "sfx-uploader:last-upload:avatars"
};`)}

        <h3>Similar asset check</h3>
        <p>Enable <strong>similarity checking</strong> to let users compare images they are about to upload against visually similar assets already in the library — a duplicate-prevention step that happens <em>before</em> the upload finishes. The feature is <strong>disabled by default</strong> and is gated behind <code>similarityCheck.enabled</code>; no UI appears unless it is turned on.</p>
        ${e("typescript",`uploader.config = {
  auth: { /* ... */ },
  similarityCheck: {
    enabled: true,
    confidence: 'mid', // 'low' | 'mid' | 'high' (optional, default 'mid')
  },
};`)}
        <p>Once enabled, users can:</p>
        <ul>
          <li>click <strong>Check similar</strong> on a single image tile (shown under <em>Details</em>; image-only — HEIC/HEIF are excluded), or</li>
          <li>use the toolbar <strong>Check similar</strong> button to enter <strong>selection mode</strong> and check up to <strong>10</strong> images in one batch.</li>
        </ul>
        <p>Matches are surfaced in the <strong>Similar</strong> tab of the preview panel (next to <em>Details</em>), each with its similarity score. The <code>confidence</code> level maps to the backend similarity threshold:</p>
        <table class="config-table">
          <thead><tr><th>Confidence</th><th>Threshold</th><th>Behavior</th></tr></thead>
          <tbody>
            <tr><td><code>'low'</code></td><td>0.60</td><td>Loosest — surfaces more (and looser) matches</td></tr>
            <tr><td><code>'mid'</code></td><td>0.75</td><td>Balanced (default)</td></tr>
            <tr><td><code>'high'</code></td><td>0.90</td><td>Strictest — only near-identical matches</td></tr>
          </tbody>
        </table>
        <p>See the <a href="#/examples/similar-check">Similar asset check example</a> for an interactive demo.</p>

        <h3>Upload settings</h3>
        <p>The uploader ships with a built-in <strong>settings panel</strong> — a gear icon appears in the header once the queue contains an image, PDF, or video, opening a panel where users tune <strong>image resizing</strong>, <strong>video transcoding</strong>, and (optionally) <strong>resumable uploads</strong> before uploading. Pass <code>uploadSettings: false</code> to disable the panel entirely.</p>
        <p>The panel has up to three sections:</p>
        <ul>
          <li><strong>Image settings</strong> — shown when the queue contains images or PDFs. Resize to a maximum width / height (px); the upload request gets <code>&amp;resize=W,H</code>.</li>
          <li><strong>Video settings</strong> — shown when the queue contains a video. Transcode to an adaptive format with a chosen resolution (Auto / Mobile / Tablet / Desktop / HQ / Sample) over HLS; the upload request gets <code>&amp;postprocess=transcode&amp;video-resolution=…&amp;video_protocols=hls</code>.</li>
          <li><strong>Resume uploads</strong> — only shown when the host sets <code>uploadSettings.showResumableSwitcher: true</code>. Toggles resumable (tus) uploads. Marked <strong>Beta</strong>.</li>
        </ul>
        <p>Use <code>uploadSettings.defaults</code> to change the panel's <strong>starting values</strong>; omit it and the panel uses built-in defaults.</p>
        ${e("typescript",`uploader.config = {
  auth: { /* ... */ },
  uploadSettings: {
    // enabled: false,                 // or pass uploadSettings: false
    showResumableSwitcher: true,       // mirrors admin v5; default false
    defaults: {
      resize: true,
      maxWidth: 2048,
      maxHeight: 2048,
      transcode: true,
      resolution: 'auto', // 'auto' | 'mobile' | 'tablet' | 'desktop' | 'hq' | 'sample'
      protocol: 'hls',    // 'hls'
      resumable: true,
    },
  },
};`)}
        <p>See the <a href="#/examples/upload-settings">Upload settings example</a> for an interactive demo.</p>

        <h3>Resizable preview panel</h3>
        <p>When you click a file to preview it, the uploader splits into a <strong>file grid</strong> on the left and a <strong>preview panel</strong> on the right (420 px wide by default). Drag the vertical divider between them to resize — the file grid automatically adapts its column count (e.g. 3 → 4 columns) as you give it more space. The split range is clamped to 25 %–75 %.</p>
        <p>Images with transparency (PNG, WebP) display a <strong>checkerboard background</strong> in both the grid thumbnails and the preview panel so you can instantly see alpha areas.</p>

        <h2 id="csp-aware-deployments">CSP-aware deployments</h2>
        <p>When the host page enforces a strict <strong>Content-Security-Policy</strong> (e.g. <code>img-src 'self' data: blob: https://*.cloudimg.io https://*.filerobot.com</code>), thumbnails sourced from third-party origins — like an Unsplash search result, a Google Drive file listing, or an "Import from URL" preview pointing at <code>static.example.com</code> — are blocked by the browser before they render.</p>
        <p>The uploader handles this in two layers:</p>

        <h3>Post-upload CDN swap (automatic)</h3>
        <p>Once a file finishes uploading, its <code>previewUrl</code> is automatically swapped to the Filerobot CDN URL returned by the upload response (<code>response.file.url.cdn</code>). This means success-card thumbnails, the file grid, and the bulk-metadata table all render from a CSP-allowed origin without any host configuration. Restricted to <code>image/*</code> MIME types — videos keep their locally generated poster blob.</p>

        <h3>Pre-upload thumbnail rewriting (opt-in)</h3>
        <p>For the window <em>before</em> a file is uploaded — when previews come from the third-party origin directly — set <code>transformRemoteThumbnail</code> to return a CSP-allowed proxy URL. The most common pattern is to wrap the original URL in a Cloudimage / Filerobot proxy:</p>
        ${e("typescript",`uploader.config = {
  auth: { /* ... */ },
  transformRemoteThumbnail: (url, ctx) => {
    // ctx.source: 'url-import' | 'connector'
    // ctx.providerId: ProviderId | undefined  (only set when source === 'connector')
    return \`https://demo.cloudimg.io/v7/\${encodeURIComponent(url)}?w=200\`;
  },
};`)}
        <p>The hook applies in three places: the URL-import dialog, the file selected from a connector (Google Drive, Unsplash, etc.), and the listing thumbnails shown <em>while browsing</em> a connector. If your host doesn't have CSP restrictions, you can omit it entirely — the post-upload swap is enough for the long-lived state.</p>
        <p>Errors and empty-string returns from the hook are caught and silently fall back to the original URL.</p>

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

        <h3>Built-in sources</h3>
        <p>All four built-in sources are shown by default. Pass <code>coreSources</code> to render only a subset — for example, to hide <strong>Camera</strong> and <strong>Screen capture</strong> from the "More" menu:</p>
        ${e("typescript",`{
  connectors: {
    companionUrl: 'https://companion.example.com',
    providers: ['google-drive', 'dropbox', 'onedrive'],
    coreSources: ['device', 'url'], // hides Camera + Screen capture
  }
}`)}
        <table>
          <thead><tr><th>Source ID</th><th>Label</th></tr></thead>
          <tbody>
            <tr><td><code>'device'</code></td><td>My Device</td></tr>
            <tr><td><code>'url'</code></td><td>URL link</td></tr>
            <tr><td><code>'camera'</code></td><td>Camera</td></tr>
            <tr><td><code>'screen-cast'</code></td><td>Screen capture</td></tr>
          </tbody>
        </table>
        <p>Omit <code>coreSources</code> (or list all four) to keep the default behavior. Pass <code>[]</code> to hide every built-in source and rely solely on cloud <code>providers</code>.</p>

        <h3>Custom connectors</h3>
        <p>Add your own source pills for third-party SDKs (Canva, Figma, an in-house DAM, etc.) via <code>customSources</code>. Each entry renders a pill alongside the built-in sources; clicking it invokes your <code>onActivate</code> callback, where you open your own UI and push files back into the uploader via <code>uploader.addFiles(File[])</code>.</p>
        <p>Custom sources run entirely in your code — Companion is not involved. Compose them with Companion providers, or use them standalone by passing an empty <code>companionUrl</code> and empty <code>providers</code>.</p>
        ${e("typescript",`{
  connectors: {
    companionUrl: 'https://companion.example.com',
    providers: ['google-drive'],
    customSources: [
      {
        id: 'canva',
        label: 'Canva',
        brandHtml: '<svg viewBox="0 0 24 24">...</svg>', // brand icon (SVG or text)
        onActivate: async (uploader) => {
          // Open the Canva SDK / your own dialog, then hand files back:
          const exported: File[] = await openCanvaPicker();
          uploader.addFiles(exported);
        },
      },
    ],
  },
}`)}
        <p>To use custom sources without Companion at all (no cloud providers, no URL import):</p>
        ${e("typescript",`{
  connectors: {
    companionUrl: '',   // disables URL import + cloud providers
    providers: [],
    customSources: [/* ... */],
  },
}`)}
        <table>
          <thead><tr><th>SourceDef field</th><th>Type</th><th>Description</th></tr></thead>
          <tbody>
            <tr><td><code>id</code></td><td><code>string</code></td><td>Unique source id. Custom entries that try to override a reserved built-in id (<code>'device'</code>, <code>'camera'</code>, <code>'url'</code>, <code>'screen-cast'</code>) are skipped with a <code>console.warn</code>.</td></tr>
            <tr><td><code>label</code></td><td><code>string</code></td><td>Display label shown under the pill / in the More menu.</td></tr>
            <tr><td><code>labelKey</code></td><td><code>string</code></td><td>Optional i18n key. When set, the label is resolved via <code>t(labelKey, label)</code>.</td></tr>
            <tr><td><code>brandHtml</code></td><td><code>string</code></td><td>Inner HTML for the brand icon (typically an inline <code>&lt;svg&gt;</code>). Rendered inside a <code>.brand-ico</code> span. Preferred over <code>icon</code> for multi-color brand marks.</td></tr>
            <tr><td><code>icon</code></td><td><code>string</code></td><td>Inner SVG markup (without the outer <code>&lt;svg&gt;</code>). Use this for simple monochrome icons; pair with <code>iconColor</code> and <code>fillIcon</code> as needed.</td></tr>
            <tr><td><code>onActivate</code></td><td><code>(uploader: UploaderHandle) =&gt; void</code></td><td>Called when the pill is clicked. Receives a minimal handle exposing <code>addFiles(files: File[])</code> — call it once the user has picked / exported files from your SDK.</td></tr>
          </tbody>
        </table>
        <p>Custom pills are rendered <em>after</em> Companion providers and the remaining core sources, in the order you list them. See the <code>SourceDef</code> and <code>UploaderHandle</code> entries in <a href="#/docs/types">Types</a>, and the live <a href="#/examples/custom-source">Custom connector example</a>.</p>

        ${o({href:"#/docs/getting-started",label:"Getting started"},{href:"#/docs/api",label:"API"})}
      </div>
    `},init(){t()}};export{a as default};
