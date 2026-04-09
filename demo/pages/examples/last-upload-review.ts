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
          Metadata edits are <strong>local-only</strong> for now — there is no
          server PATCH endpoint to sync them back. Edited files are tagged
          with a small "Local edit" pill so you know they only live in the
          browser.
        </p>
      </div>

      <section class="page-section">
        <div id="lur-container" style="min-height: 620px; margin-top: 16px;">
          <sfx-uploader id="lur-uploader"></sfx-uploader>
        </div>
      </section>

      <section class="page-section">
        <h2>How to try it</h2>
        <ol>
          <li>Drag a few files into the drop zone (or pick from your device).</li>
          <li>Wait for the upload to finish — the success card appears.</li>
          <li>Click <strong>Review files (N)</strong>.</li>
          <li>In the review screen: click <em>Details</em> on any tile to edit its metadata, click <em>Open</em> to open the file in a new tab, or use the filter chips to switch between Uploaded / Failed.</li>
          <li>Click <strong>Back</strong>, then <strong>Done</strong>. Re-open the uploader — the <em>View last upload</em> pill in the corner brings you back to the same review.</li>
        </ol>
      </section>
    `;
  },

  init(_uploader: SfxUploader) {
    const lur = document.getElementById('lur-uploader') as SfxUploader;
    lur.config = buildConfig({
      mode: 'inline',
      inlineHeader: {
        accent: 'Airbox',
        title: 'Q1 Marketing Assets',
        description: 'Upload some files and then click "Review files" on the success card.',
      },
    });
  },

  destroy() {
    const lur = document.getElementById('lur-uploader') as SfxUploader | null;
    if (lur) lur.close();
  },
};

export default page;
