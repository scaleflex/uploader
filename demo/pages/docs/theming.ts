import type { Page } from '../../lib/router';
import { code, docNav, highlightAll } from '../../lib/doc-utils';

const page: Page = {
  render() {
    return `
      <div class="doc-content">
        <h1>Theming</h1>
        <p class="doc-lead">Customise the uploader's appearance using CSS custom properties.</p>

        <h2>CSS custom properties</h2>
        <p>Override these CSS custom properties on the <code>&lt;sfx-uploader&gt;</code> element or any ancestor. All variables use the <code>--sfx-up-</code> prefix.</p>

        <h3>Colours</h3>
        <table>
          <thead><tr><th>Property</th><th>Default</th><th>Description</th></tr></thead>
          <tbody>
            <tr><td><code>--sfx-up-primary</code></td><td><code>#2563eb</code></td><td>Primary accent colour</td></tr>
            <tr><td><code>--sfx-up-primary-hover</code></td><td><code>#1d4ed8</code></td><td>Primary hover state</td></tr>
            <tr><td><code>--sfx-up-primary-mid</code></td><td><code>#3b82f6</code></td><td>Mid-tone primary</td></tr>
            <tr><td><code>--sfx-up-primary-bg</code></td><td><code>#eff6ff</code></td><td>Light primary background</td></tr>
            <tr><td><code>--sfx-up-primary-glow</code></td><td><code>rgba(37,99,235,0.18)</code></td><td>Primary glow / shadow tint</td></tr>
            <tr><td><code>--sfx-up-success</code></td><td><code>#16a34a</code></td><td>Success state colour</td></tr>
            <tr><td><code>--sfx-up-success-bg</code></td><td><code>#f0fdf4</code></td><td>Success background</td></tr>
            <tr><td><code>--sfx-up-error</code></td><td><code>#dc2626</code></td><td>Error state colour</td></tr>
            <tr><td><code>--sfx-up-error-bg</code></td><td><code>#fef2f2</code></td><td>Error background</td></tr>
            <tr><td><code>--sfx-up-text</code></td><td><code>#1e293b</code></td><td>Main text colour</td></tr>
            <tr><td><code>--sfx-up-text-secondary</code></td><td><code>#64748b</code></td><td>Secondary text colour</td></tr>
            <tr><td><code>--sfx-up-text-muted</code></td><td><code>#94a3b8</code></td><td>Muted/placeholder text</td></tr>
            <tr><td><code>--sfx-up-bg</code></td><td><code>#ffffff</code></td><td>Main background</td></tr>
            <tr><td><code>--sfx-up-bg-hover</code></td><td><code>#f8fafc</code></td><td>Hover background</td></tr>
            <tr><td><code>--sfx-up-border</code></td><td><code>#e2e8f0</code></td><td>Border colour</td></tr>
          </tbody>
        </table>

        <h3>Modal</h3>
        <table>
          <thead><tr><th>Property</th><th>Default</th><th>Description</th></tr></thead>
          <tbody>
            <tr><td><code>--sfx-up-backdrop</code></td><td><code>rgba(0,0,0,0.5)</code></td><td>Backdrop overlay colour</td></tr>
            <tr><td><code>--sfx-up-modal-radius</code></td><td><code>16px</code></td><td>Modal corner radius</td></tr>
            <tr><td><code>--sfx-up-modal-shadow</code></td><td>large shadow</td><td>Modal box shadow</td></tr>
          </tbody>
        </table>

        <h3>Typography &amp; radius</h3>
        <table>
          <thead><tr><th>Property</th><th>Default</th><th>Description</th></tr></thead>
          <tbody>
            <tr><td><code>--sfx-up-font</code></td><td><code>'Inter', system-ui, sans-serif</code></td><td>Font stack</td></tr>
            <tr><td><code>--sfx-up-radius</code></td><td><code>12px</code></td><td>Default border radius</td></tr>
            <tr><td><code>--sfx-up-radius-sm</code></td><td><code>8px</code></td><td>Small border radius</td></tr>
          </tbody>
        </table>

        <h3>Example</h3>
        ${code(
          'css',
          `sfx-uploader {
  --sfx-up-primary: #6366f1;
  --sfx-up-primary-hover: #4f46e5;
  --sfx-up-primary-bg: #eef2ff;
  --sfx-up-radius: 16px;
  --sfx-up-font: 'Poppins', sans-serif;
}`,
        )}

        ${docNav(
          { href: '#/docs/api', label: 'API' },
          { href: '#/docs/types', label: 'Types' },
        )}
      </div>
    `;
  },

  init() {
    highlightAll();
  },
};

export default page;
