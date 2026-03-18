import type { Page } from '../lib/router';
import type { SfxUploader } from '../../src/sfx-uploader';
import { buildConfig } from '../lib/auth';
import { renderCodeBlock } from '../lib/code-block';

const page: Page = {
  render() {
    return `
      <section class="hero">
        <div class="hero-inner">
          <div class="hero-badge">@scaleflex/uploader</div>
          <h1><span class="gradient-text">Uploader</span></h1>
          <p>A framework-agnostic Web Component for uploading files to Scaleflex VXP. Drag & drop, URL, webcam, screen capture, and cloud providers — in a single HTML tag.</p>
          <div class="hero-actions">
            <a href="https://www.npmjs.com/package/@scaleflex/uploader" target="_blank" rel="noopener" class="btn-secondary">
              <svg width="16" height="16" viewBox="0 0 256 256" fill="currentColor"><path d="M0 256V0h256v256H0zm41-41h59.2v-133H141v133h33.4V41H41v174z"/></svg>
              npm
            </a>
          </div>
          <div class="hero-meta">
            <span>Web Component</span>
            <span>Lit 3</span>
            <span>React wrapper</span>
            <span>TypeScript</span>
            <span>7 cloud providers</span>
          </div>
        </div>
      </section>

      <section class="demo-section">
        <div class="section-inner">
          <div class="section-header">
            <div class="section-label">Live demo</div>
            <h2>Try it right here</h2>
            <p>Upload files to Scaleflex VXP. Drag & drop, paste, or pick from your device.</p>
          </div>
          <div class="demo-uploader-container">
            <sfx-uploader id="demo-inline-uploader"></sfx-uploader>
          </div>
        </div>
      </section>

      <section class="quick-start-section">
        <div class="section-inner">
          <div class="section-header">
            <div class="section-label">Quick Start</div>
            <h2>Up and running in under a minute</h2>
            <p>Install from npm, import the custom element, and start uploading with a few lines of code.</p>
          </div>
          <div class="quick-start-steps">
            <div class="quick-start-step">
              <div class="step-header">
                <div class="step-number">1</div>
                <h3>Install</h3>
              </div>
              <div class="step-code">
                <code>npm install @scaleflex/uploader</code>
                <button class="step-copy" data-code="npm install @scaleflex/uploader" aria-label="Copy to clipboard">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>
                </button>
              </div>
            </div>
            <div class="quick-start-step">
              <div class="step-header">
                <div class="step-number">2</div>
                <h3>Import</h3>
              </div>
              <div class="step-code">
                <code>import '@scaleflex/uploader/define';</code>
                <button class="step-copy" data-code="import '@scaleflex/uploader/define';" aria-label="Copy to clipboard">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>
                </button>
              </div>
            </div>
            <div class="quick-start-step">
              <div class="step-header">
                <div class="step-number">3</div>
                <h3>Use</h3>
              </div>
              <p class="step-description">Add <code>&lt;sfx-uploader&gt;</code> to your HTML, set config, and call <code>.open()</code> or use inline mode.</p>
            </div>
          </div>
          <div id="quick-start-code"></div>
        </div>
      </section>

      <section class="features-section">
        <div class="section-inner">
          <div class="section-header">
            <div class="section-label">Features</div>
            <h2>Everything you need for file uploads</h2>
          </div>
          <div class="features-grid">
            <div class="feature-card">
              <div class="feature-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/></svg>
              </div>
              <h3>Drag & drop</h3>
              <p>Animated drop zone with visual feedback. Supports paste from clipboard too.</p>
            </div>
            <div class="feature-card">
              <div class="feature-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/></svg>
              </div>
              <h3>Multiple sources</h3>
              <p>Device, URL, webcam, screen capture, and 7 cloud providers via Companion.</p>
            </div>
            <div class="feature-card">
              <div class="feature-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="20" x2="12" y2="10"/><line x1="18" y1="20" x2="18" y2="4"/><line x1="6" y1="20" x2="6" y2="16"/></svg>
              </div>
              <h3>Progress tracking</h3>
              <p>Per-file and aggregate progress with speed and ETA. Concurrent queue with configurable limit.</p>
            </div>
            <div class="feature-card">
              <div class="feature-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="1 4 1 10 7 10"/><path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10"/></svg>
              </div>
              <h3>Auto retry</h3>
              <p>Exponential backoff for failed uploads. Resume paused or retry failed files at any time.</p>
            </div>
            <div class="feature-card">
              <div class="feature-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
              </div>
              <h3>File validation</h3>
              <p>Restrict by file type, max size, total size, and file count. Rejected files show clear reasons.</p>
            </div>
            <div class="feature-card">
              <div class="feature-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>
              </div>
              <h3>Fully themeable</h3>
              <p>CSS custom properties with <code>--sfx-up-*</code> prefix. Works in modal or inline mode.</p>
            </div>
          </div>
        </div>
      </section>

      <section class="demo-also" id="also-slider">
        <div class="demo-also-slides">
          <div class="demo-also-slide active">
            <div class="demo-also-inner">
              <div class="demo-also-content">
                <div class="demo-also-label">Also by Scaleflex</div>
                <h2>js-cloudimage-360-view</h2>
                <p>Interactive 360 product views with drag, zoom, autoplay and hotspots. Perfect for e-commerce product pages.</p>
                <div class="demo-also-actions">
                  <a href="https://scaleflex.github.io/js-cloudimage-360-view/" target="_blank" rel="noopener" class="btn-primary btn-sm">Live demo</a>
                  <a href="https://github.com/scaleflex/js-cloudimage-360-view" target="_blank" rel="noopener" class="btn-secondary btn-sm">GitHub</a>
                </div>
              </div>
              <div class="demo-also-visual">
                <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="grad360" x1="0" y1="0" x2="200" y2="200"><stop offset="0%" stop-color="rgba(44,153,255,0.3)"/><stop offset="100%" stop-color="rgba(0,212,170,0.15)"/></linearGradient></defs><circle cx="100" cy="100" r="80" stroke="rgba(255,255,255,0.08)" stroke-width="1"/><circle cx="100" cy="100" r="60" stroke="rgba(255,255,255,0.06)" stroke-width="1"/><ellipse cx="100" cy="100" rx="80" ry="32" stroke="url(#grad360)" stroke-width="2"/><ellipse cx="100" cy="100" rx="80" ry="32" transform="rotate(60 100 100)" stroke="rgba(0,212,170,0.2)" stroke-width="1.5"/><ellipse cx="100" cy="100" rx="80" ry="32" transform="rotate(120 100 100)" stroke="rgba(0,212,170,0.15)" stroke-width="1.5"/><circle cx="100" cy="100" r="6" fill="rgba(44,153,255,0.7)"/><circle cx="100" cy="100" r="3" fill="rgba(44,153,255,1)"/><circle cx="180" cy="100" r="4" fill="rgba(0,212,170,0.5)"/><circle cx="60" cy="69" r="3" fill="rgba(44,153,255,0.4)"/><circle cx="140" cy="131" r="3" fill="rgba(44,153,255,0.4)"/><path d="M165 55l8-3m-4-4l-4 7" stroke="rgba(255,255,255,0.15)" stroke-width="1" stroke-linecap="round"/></svg>
              </div>
            </div>
          </div>
          <div class="demo-also-slide">
            <div class="demo-also-inner">
              <div class="demo-also-content">
                <div class="demo-also-label">Also by Scaleflex</div>
                <h2>js-cloudimage-before-after</h2>
                <p>Beautiful image comparison slider with responsive design, touch support, and smooth animations.</p>
                <div class="demo-also-actions">
                  <a href="https://scaleflex.github.io/js-cloudimage-before-after/" target="_blank" rel="noopener" class="btn-primary btn-sm">Live demo</a>
                  <a href="https://github.com/scaleflex/js-cloudimage-before-after" target="_blank" rel="noopener" class="btn-secondary btn-sm">GitHub</a>
                </div>
              </div>
              <div class="demo-also-visual">
                <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="gradBA" x1="0" y1="40" x2="200" y2="160"><stop offset="0%" stop-color="rgba(44,153,255,0.15)"/><stop offset="100%" stop-color="rgba(0,212,170,0.08)"/></linearGradient></defs><rect x="20" y="40" width="160" height="120" rx="8" stroke="rgba(255,255,255,0.1)" stroke-width="1.5" fill="rgba(255,255,255,0.02)"/><rect x="20" y="40" width="80" height="120" rx="8" fill="url(#gradBA)"/><line x1="100" y1="40" x2="100" y2="160" stroke="rgba(44,153,255,0.5)" stroke-width="2"/><circle cx="100" cy="100" r="16" stroke="rgba(44,153,255,0.6)" stroke-width="2" fill="rgba(44,153,255,0.1)"/><path d="M93 94l-5 6 5 6" stroke="rgba(255,255,255,0.5)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M107 94l5 6-5 6" stroke="rgba(255,255,255,0.5)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><rect x="30" y="55" width="40" height="5" rx="2" fill="rgba(255,255,255,0.08)"/><rect x="30" y="65" width="28" height="4" rx="2" fill="rgba(255,255,255,0.05)"/><circle cx="50" cy="110" r="12" fill="rgba(44,153,255,0.08)" stroke="rgba(44,153,255,0.2)" stroke-width="1"/><rect x="130" y="55" width="40" height="5" rx="2" fill="rgba(255,255,255,0.04)"/><rect x="130" y="65" width="28" height="4" rx="2" fill="rgba(255,255,255,0.03)"/></svg>
              </div>
            </div>
          </div>
          <div class="demo-also-slide">
            <div class="demo-also-inner">
              <div class="demo-also-content">
                <div class="demo-also-label">Also by Scaleflex</div>
                <h2>filerobot-image-editor</h2>
                <p>Full-featured image editor with cropping, filters, annotations, and more. Works standalone or embedded.</p>
                <div class="demo-also-actions">
                  <a href="https://scaleflex.github.io/filerobot-image-editor/" target="_blank" rel="noopener" class="btn-primary btn-sm">Live demo</a>
                  <a href="https://github.com/scaleflex/filerobot-image-editor" target="_blank" rel="noopener" class="btn-secondary btn-sm">GitHub</a>
                </div>
              </div>
              <div class="demo-also-visual">
                <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="gradFIE" x1="20" y1="40" x2="180" y2="160"><stop offset="0%" stop-color="rgba(44,153,255,0.1)"/><stop offset="100%" stop-color="rgba(0,212,170,0.05)"/></linearGradient></defs><rect x="20" y="40" width="160" height="120" rx="8" stroke="rgba(255,255,255,0.1)" stroke-width="1.5" fill="rgba(255,255,255,0.02)"/><rect x="20" y="40" width="160" height="24" rx="8" fill="rgba(255,255,255,0.03)"/><rect x="20" y="63" width="160" height="1" fill="rgba(255,255,255,0.06)"/><circle cx="33" cy="52" r="4" fill="rgba(44,153,255,0.3)"/><circle cx="47" cy="52" r="4" fill="rgba(0,212,170,0.25)"/><circle cx="61" cy="52" r="4" fill="rgba(255,255,255,0.1)"/><rect x="130" y="48" width="40" height="8" rx="4" fill="rgba(44,153,255,0.15)"/><path d="M45 130l30-40 22 22 18-18 30 36" stroke="rgba(44,153,255,0.5)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M45 130l30-40 22 22 18-18 30 36z" fill="url(#gradFIE)"/><circle cx="65" cy="90" r="10" stroke="rgba(0,212,170,0.5)" stroke-width="1.5" fill="rgba(0,212,170,0.08)"/><rect x="30" y="142" width="22" height="5" rx="2" fill="rgba(255,255,255,0.06)"/><rect x="57" y="142" width="22" height="5" rx="2" fill="rgba(255,255,255,0.06)"/><rect x="84" y="142" width="22" height="5" rx="2" fill="rgba(255,255,255,0.06)"/></svg>
              </div>
            </div>
          </div>
          <div class="demo-also-slide">
            <div class="demo-also-inner">
              <div class="demo-also-content">
                <div class="demo-also-label">Also by Scaleflex</div>
                <h2>@scaleflex/asset-picker</h2>
                <p>Framework-agnostic Asset Picker for browsing and selecting digital assets from Scaleflex DAM.</p>
                <div class="demo-also-actions">
                  <a href="https://scaleflex.github.io/asset-picker/" target="_blank" rel="noopener" class="btn-primary btn-sm">Live demo</a>
                  <a href="https://www.npmjs.com/package/@scaleflex/asset-picker" target="_blank" rel="noopener" class="btn-secondary btn-sm">npm</a>
                </div>
              </div>
              <div class="demo-also-visual">
                <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="gradAP" x1="20" y1="30" x2="180" y2="170"><stop offset="0%" stop-color="rgba(44,153,255,0.12)"/><stop offset="100%" stop-color="rgba(0,212,170,0.06)"/></linearGradient></defs><rect x="20" y="30" width="160" height="140" rx="10" stroke="rgba(255,255,255,0.1)" stroke-width="1.5" fill="rgba(255,255,255,0.02)"/><rect x="20" y="30" width="160" height="28" rx="10" fill="rgba(255,255,255,0.03)"/><rect x="20" y="57" width="160" height="1" fill="rgba(255,255,255,0.06)"/><rect x="30" y="40" width="50" height="8" rx="4" fill="rgba(44,153,255,0.2)"/><rect x="30" y="70" width="70" height="50" rx="6" fill="url(#gradAP)" stroke="rgba(44,153,255,0.2)" stroke-width="1"/><rect x="110" y="70" width="60" height="50" rx="6" fill="url(#gradAP)" stroke="rgba(44,153,255,0.15)" stroke-width="1"/><rect x="30" y="130" width="70" height="30" rx="6" fill="rgba(255,255,255,0.02)" stroke="rgba(255,255,255,0.06)" stroke-width="1"/><rect x="110" y="130" width="60" height="30" rx="6" fill="rgba(255,255,255,0.02)" stroke="rgba(255,255,255,0.06)" stroke-width="1"/><circle cx="65" cy="90" r="8" fill="rgba(0,212,170,0.12)" stroke="rgba(0,212,170,0.3)" stroke-width="1"/><circle cx="140" cy="90" r="8" fill="rgba(44,153,255,0.12)" stroke="rgba(44,153,255,0.3)" stroke-width="1"/></svg>
              </div>
            </div>
          </div>
        </div>
        <div class="demo-also-dots" id="also-dots"></div>
      </section>

      <footer class="demo-footer">
        <div class="demo-footer-main">
          <div class="demo-footer-brand">
            <a href="https://www.scaleflex.com" target="_blank" rel="noopener">
              <img src="https://assets.scaleflex.com/Marketing/Logos/Scaleflex%20Logos/Logo%20Horizontal/scaleflex%20logo%20without%20tagline%20white%20text%20%28horizontal%29%20.png?vh=85bc00" alt="Scaleflex" class="demo-footer-logo" />
            </a>
            <p>Framework-agnostic file upload widget for Scaleflex VXP.</p>
          </div>
          <div class="demo-footer-col">
            <h4>Resources</h4>
            <a href="https://www.npmjs.com/package/@scaleflex/uploader" target="_blank" rel="noopener">npm</a>
          </div>
          <div class="demo-footer-col">
            <h4>Scaleflex</h4>
            <a href="https://www.scaleflex.com" target="_blank" rel="noopener">Website</a>
            <a href="https://www.scaleflex.com/en/digital-asset-management" target="_blank" rel="noopener">Scaleflex DAM</a>
            <a href="https://www.cloudimage.io" target="_blank" rel="noopener">Cloudimage</a>
          </div>
          <div class="demo-footer-col">
            <h4>Open Source</h4>
            <a href="https://scaleflex.github.io/asset-picker/" target="_blank" rel="noopener">Asset Picker</a>
            <a href="https://github.com/scaleflex/filerobot-image-editor" target="_blank" rel="noopener">Image Editor</a>
            <a href="https://github.com/scaleflex/js-cloudimage-360-view" target="_blank" rel="noopener">360 View</a>
          </div>
        </div>
        <div class="demo-footer-bottom">
          <p>Made with care by the <a href="https://www.scaleflex.com" target="_blank" rel="noopener">Scaleflex</a> team</p>
        </div>
      </footer>
    `;
  },

  init(_uploader: SfxUploader) {
    // Live demo: inline uploader
    const demoUploader = document.getElementById('demo-inline-uploader') as SfxUploader;
    demoUploader.config = buildConfig({
      mode: 'inline',
      targetFolder: '/uploads',
      connectors: {
        companionUrl: 'https://eu-on-24001.connector.filerobot.com',
        providers: ['google-drive', 'dropbox', 'onedrive', 'unsplash'],
      },
    });

    // Copy buttons in quick-start steps
    document.querySelectorAll<HTMLButtonElement>('.step-copy').forEach((btn) => {
      btn.addEventListener('click', async () => {
        const code = btn.dataset.code ?? '';
        try {
          await navigator.clipboard.writeText(code);
          btn.classList.add('copied');
          btn.innerHTML = '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>';
        } catch {
          // ignore
        }
        setTimeout(() => {
          btn.classList.remove('copied');
          btn.innerHTML = '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>';
        }, 1500);
      });
    });

    renderCodeBlock('#quick-start-code', [
      {
        label: 'HTML',
        lang: 'markup',
        code: `
<script type="module">
  import '@scaleflex/uploader/define';
</script>

<sfx-uploader id="uploader"></sfx-uploader>

<button onclick="document.getElementById('uploader').open()">
  Upload files
</button>

<script>
  const uploader = document.getElementById('uploader');
  uploader.config = {
    auth: {
      mode: 'security-template',
      container: 'YOUR_CONTAINER',
      securityTemplateId: 'YOUR_TEMPLATE_ID',
    },
    mode: 'modal',
    targetFolder: '/uploads',
  };

  uploader.addEventListener('sfx-all-complete', (e) => {
    console.log('Uploaded:', e.detail.successful);
  });
</script>`,
      },
      {
        label: 'React',
        lang: 'tsx',
        code: `
import { useRef } from 'react';
import { Uploader, type UploaderRef } from '@scaleflex/uploader/react';

export function App() {
  const ref = useRef<UploaderRef>(null);

  return (
    <>
      <button onClick={() => ref.current?.open()}>Upload files</button>
      <Uploader
        ref={ref}
        config={{
          auth: {
            mode: 'security-template',
            container: 'YOUR_CONTAINER',
            securityTemplateId: 'YOUR_TEMPLATE_ID',
          },
          mode: 'modal',
          targetFolder: '/uploads',
        }}
        onAllComplete={(successful, failed) => {
          console.log('Done:', successful.length, 'uploaded');
        }}
      />
    </>
  );
}`,
      },
    ]);

    // "Also by Scaleflex" slider
    const slides = document.querySelectorAll<HTMLElement>('.demo-also-slide');
    const dotsContainer = document.getElementById('also-dots');
    if (slides.length && dotsContainer) {
      let current = 0;
      let animating = false;
      let autoTimer: ReturnType<typeof setInterval>;

      // Create dots
      slides.forEach((_, i) => {
        const dot = document.createElement('button');
        dot.className = `demo-also-dot${i === 0 ? ' active' : ''}`;
        dot.setAttribute('aria-label', `Slide ${i + 1}`);
        dot.addEventListener('click', () => goTo(i));
        dotsContainer.appendChild(dot);
      });
      const dots = dotsContainer.querySelectorAll<HTMLElement>('.demo-also-dot');

      function goTo(index: number) {
        if (index === current || animating) return;
        animating = true;
        const direction = index > current ? 'left' : 'right';
        const leaving = slides[current];
        const entering = slides[index];

        leaving.classList.add(`slide-out-${direction}`);
        entering.classList.add(`slide-in-${direction}`, 'active');

        entering.addEventListener('animationend', () => {
          leaving.classList.remove('active', `slide-out-${direction}`);
          entering.classList.remove(`slide-in-${direction}`);
          dots[current].classList.remove('active');
          dots[index].classList.add('active');
          current = index;
          animating = false;
        }, { once: true });

        resetAuto();
      }

      function resetAuto() {
        clearInterval(autoTimer);
        autoTimer = setInterval(() => goTo((current + 1) % slides.length), 5000);
      }
      resetAuto();

      // Store cleanup function
      (page as any)._cleanupSlider = () => clearInterval(autoTimer);
    }
  },

  destroy() {
    const demoUploader = document.getElementById('demo-inline-uploader') as SfxUploader | null;
    if (demoUploader) demoUploader.close();
    (page as any)._cleanupSlider?.();
    delete (page as any)._cleanupSlider;
  },
};

export default page;
