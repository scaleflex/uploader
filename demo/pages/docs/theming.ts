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

        <h3>UIKit bridging</h3>
        <p>Each token falls back to a Scaleflex UIKit variable when available, so the uploader inherits your design-system theme automatically. For example <code>--sfx-up-primary</code> resolves to <code>var(--primary, #2563eb)</code>. Override the <code>--sfx-up-*</code> token directly if you need an uploader-specific value.</p>

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
            <tr><td><code>--sfx-up-error</code></td><td><code>#dc2626</code></td><td>Error state colour</td></tr>
            <tr><td><code>--sfx-up-text</code></td><td><code>#1e293b</code></td><td>Main text colour</td></tr>
            <tr><td><code>--sfx-up-text-secondary</code></td><td><code>#475569</code></td><td>Secondary text colour</td></tr>
            <tr><td><code>--sfx-up-text-muted</code></td><td><code>#94a3b8</code></td><td>Muted/placeholder text</td></tr>
            <tr><td><code>--sfx-up-bg</code></td><td><code>#ffffff</code></td><td>Main background</td></tr>
            <tr><td><code>--sfx-up-surface</code></td><td><code>#f8fafc</code></td><td>Elevated surface background (cards, buttons)</td></tr>
            <tr><td><code>--sfx-up-border</code></td><td><code>#e8edf5</code></td><td>Border colour</td></tr>
            <tr><td><code>--sfx-up-border-light</code></td><td><code>#f1f5f9</code></td><td>Subtle border / muted background</td></tr>
          </tbody>
        </table>

        <h3>Modal &amp; layout</h3>
        <table>
          <thead><tr><th>Property</th><th>Default</th><th>Description</th></tr></thead>
          <tbody>
            <tr><td><code>--sfx-up-backdrop</code></td><td><code>rgba(0,0,0,0.45)</code></td><td>Backdrop overlay colour</td></tr>
            <tr><td><code>--sfx-up-max-height</code></td><td><code>88vh</code></td><td>Maximum height of the uploader panel</td></tr>
          </tbody>
        </table>

        <h3>Shadows</h3>
        <table>
          <thead><tr><th>Property</th><th>Default</th><th>Description</th></tr></thead>
          <tbody>
            <tr><td><code>--sfx-up-shadow</code></td><td><code>rgba(0,0,0,0.1)</code></td><td>Generic shadow colour</td></tr>
          </tbody>
        </table>

        <h3>Typography, radius &amp; focus</h3>
        <table>
          <thead><tr><th>Property</th><th>Default</th><th>Description</th></tr></thead>
          <tbody>
            <tr><td><code>--sfx-up-font</code></td><td><code>'Inter', system-ui, sans-serif</code></td><td>Font stack</td></tr>
            <tr><td><code>--sfx-up-radius</code></td><td><code>16px</code></td><td>Default border radius</td></tr>
            <tr><td><code>--sfx-up-ring</code></td><td><code>oklch(0.578 0.198 268.129 / 0.7)</code></td><td>Focus-visible outline colour</td></tr>
          </tbody>
        </table>

        <h3>Example</h3>
        ${code(
          'css',
          `sfx-uploader {
  --sfx-up-primary: #6366f1;
  --sfx-up-primary-hover: #4f46e5;
  --sfx-up-primary-bg: #eef2ff;
  --sfx-up-surface: #f5f3ff;
  --sfx-up-radius: 16px;
  --sfx-up-ring: rgba(99, 102, 241, 0.7);
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
