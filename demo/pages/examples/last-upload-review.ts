import type { Page } from '../../lib/router';
import type { SfxUploader } from '../../../src/sfx-uploader';
import { buildConfig } from '../../lib/auth';

const page: Page = {
  render() {
    return `
      <div class="page-header">
        <h1>Last upload review</h1>
        <p>
          After files finish uploading, the success card now offers a
          <strong>Review files</strong> button. Click it to switch to a
          read-only review screen showing every file from the most recent
          batch — successful and failed — with previews, status badges,
          editable metadata (saved locally), and an <strong>Open</strong>
          link to where each file actually lives.
        </p>
        <p>
          The review batch persists in <code>sessionStorage</code>, so closing
          and re-opening the uploader (or refreshing the page) keeps the last
          batch accessible via the <strong>View last upload</strong> pill on
          the drop-zone screen. Closing the browser tab clears it.
        </p>
        <p>
          <strong>Opt-in:</strong> This feature is <strong>disabled by default</strong>.
          Set <code>lastUploadReview: true</code> to enable it — the storage key is
          automatically scoped by your <code>container</code> and <code>airboxPuid</code>,
          so different airboxes never collide. If you have multiple uploaders on the
          same page targeting the <em>same</em> airbox, pass an explicit string ID
          instead (e.g. <code>lastUploadReview: 'product-photos'</code>).
        </p>
        <p>
          Metadata edits are <strong>local-only</strong> for now — there is no
          server PATCH endpoint to sync them back. Edited files are tagged
          with a small "Local edit" pill so you know they only live in the
          browser.
        </p>
      </div>

      <section class="page-section">
        <h2>Auto-scoped (recommended)</h2>
        <p>
          Storage key is derived from <code>auth.container</code> +
          <code>auth.airboxPuid</code> automatically.
        </p>
        <pre><code>lastUploadReview: true</code></pre>
        <div id="lur-container" style="min-height: 620px; margin-top: 16px;">
          <sfx-uploader id="lur-uploader"></sfx-uploader>
        </div>
      </section>

      <section class="page-section">
        <h2>Explicit ID</h2>
        <p>
          Use a custom string when multiple uploaders target the same airbox
          but serve different purposes.
        </p>
        <pre><code>lastUploadReview: 'product-photos'</code></pre>
        <div id="lur-explicit-container" style="min-height: 620px; margin-top: 16px;">
          <sfx-uploader id="lur-explicit-uploader"></sfx-uploader>
        </div>
      </section>

      <section class="page-section">
        <h2>How to try it</h2>
        <ol>
          <li>Drag a few files into either uploader above (or pick from your device).</li>
          <li>Wait for the upload to finish — the success card appears.</li>
          <li>Click <strong>Review files (N)</strong>.</li>
          <li>In the review screen: click <em>Details</em> on any tile to edit its metadata, click <em>Open</em> to open the file in a new tab, or use the filter chips to switch between Uploaded / Failed.</li>
          <li>Click <strong>Back</strong>, then <strong>Done</strong>. Re-open the uploader — the <em>View last upload</em> pill in the corner brings you back to the same review.</li>
          <li>Upload files in the <em>other</em> uploader — each one keeps its own review batch because their storage keys differ.</li>
        </ol>
      </section>
    `;
  },

  init(_uploader: SfxUploader) {
    // --- Auto-scoped example (lastUploadReview: true) ---
    const lur = document.getElementById('lur-uploader') as SfxUploader;
    lur.config = buildConfig({
      mode: 'inline',
      lastUploadReview: true,
      showLocateButton: true,
      showCopyCdnButton: true,
      inlineHeader: {
        accent: 'Airbox',
        title: 'Q1 Marketing Assets',
        description: 'Upload some files and then click "Review files" on the success card.',
      },
      callbacks: {
        onFileLocate: (file) => console.log('[Last upload review] Locate:', file.name, file.response?.file?.uuid),
      },
    });

    // --- Explicit ID example (lastUploadReview: 'product-photos') ---
    const lurExplicit = document.getElementById('lur-explicit-uploader') as SfxUploader;
    lurExplicit.config = buildConfig({
      mode: 'inline',
      lastUploadReview: 'product-photos',
      showLocateButton: true,
      showCopyCdnButton: true,
      inlineHeader: {
        accent: 'Airbox',
        title: 'Product Photos',
        description: 'Same container, different review storage — uses explicit ID.',
      },
      callbacks: {
        onFileLocate: (file) => console.log('[Explicit ID review] Locate:', file.name, file.response?.file?.uuid),
      },
    });
  },

  destroy() {
    const lur = document.getElementById('lur-uploader') as SfxUploader | null;
    if (lur) lur.close();
    const lurExplicit = document.getElementById('lur-explicit-uploader') as SfxUploader | null;
    if (lurExplicit) lurExplicit.close();
  },
};

export default page;
