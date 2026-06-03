<p align="center">
  <a href="https://www.scaleflex.com">
    <img src="https://scaleflex.cloudimg.io/v7/plugins/scaleflex/logo.png?vh=b0a502&radius=25&w=700" alt="Scaleflex" width="350">
  </a>
</p>

<h1 align="center">@scaleflex/uploader</h1>

<p align="center">
  Framework-agnostic file upload Web Component for <a href="https://www.scaleflex.com">Scaleflex VXP</a>.<br>
  Drag &amp; drop, URL, webcam, screen capture, and cloud providers — in a single HTML tag.
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/@scaleflex/uploader"><img src="https://img.shields.io/npm/v/@scaleflex/uploader.svg?style=flat-square" alt="npm version"></a>
  <a href="https://www.npmjs.com/package/@scaleflex/uploader"><img src="https://img.shields.io/npm/dm/@scaleflex/uploader.svg?style=flat-square" alt="npm downloads"></a>
  <a href="https://bundlephobia.com/package/@scaleflex/uploader"><img src="https://img.shields.io/bundlephobia/minzip/@scaleflex/uploader?style=flat-square" alt="bundle size"></a>
  <img src="https://img.shields.io/badge/license-proprietary-red?style=flat-square" alt="license">
</p>

<p align="center">
  <a href="https://scaleflex.github.io/uploader/">Live Demo</a> |
  <a href="https://scaleflex.github.io/uploader/#/docs/getting-started">Documentation</a> |
  <a href="https://scaleflex.github.io/uploader/#/examples/basic">Examples</a> |
  <a href="https://cdn.scaleflex.com/uploader/1.3.4/sfx-uploader.min.js">CDN</a> |
  <a href="https://www.npmjs.com/package/@scaleflex/uploader">npm</a> |
  <a href="https://www.scaleflex.com">Scaleflex</a>
</p>

---

## Features

- **Drag & drop** — animated drop zone with visual feedback, plus paste from clipboard
- **Multiple sources** — device, URL import, webcam, screen capture, and 7 cloud providers (Google Drive, Dropbox, OneDrive, Box, Instagram, Facebook, Unsplash)
- **Concurrent uploads** — configurable concurrency with retry and exponential backoff
- **Real-time progress** — per-file and aggregate progress with speed and ETA
- **File restrictions** — type, size, and count limits with clear rejection reasons
- **Modal or inline** — use as a modal overlay or embed directly in your page, with configurable header buttons (`close`, `back`, or `none`) for wizard and step flows
- **Internationalisation** — built-in i18n via i18next; pass `locale` in config (`'fr'`, `'de'`, `'en-US'`, etc.) — falls back to English for untranslated keys
- **Fully themeable** — CSS custom properties with `--sfx-up-*` prefix
- **React wrapper** — controlled `open` prop and imperative ref via `@scaleflex/uploader/react`
- **Lit 3** — lightweight Web Component with Shadow DOM encapsulation
- **ESM + CJS** — dual build, tree-shakeable, TypeScript declarations included

## Installation

```bash
npm install @scaleflex/uploader
```

Or use the CDN for a no-bundler setup:

```
https://cdn.scaleflex.com/uploader/1.3.4/sfx-uploader.min.js
```

```html
<script src="https://cdn.scaleflex.com/uploader/1.3.4/sfx-uploader.min.js"></script>
```

## Quick start

### Web Component

```html
<script type="module">
    import '@scaleflex/uploader/define';

    const uploader = document.querySelector('sfx-uploader');
    uploader.config = {
        auth: {
            mode: 'security-template',
            container: 'YOUR_CONTAINER',
            securityTemplateId: 'SECU_...',
        },
        locale: 'fr', // optional — defaults to navigator.language
    };
    uploader.open();
</script>

<sfx-uploader></sfx-uploader>
```

### React

```tsx
import { useState } from 'react';
import { Uploader } from '@scaleflex/uploader/react';

function App() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button onClick={() => setOpen(true)}>Upload files</button>
      <Uploader
        open={open}
        config={{
          auth: {
            mode: 'security-template',
            container: 'YOUR_CONTAINER',
            securityTemplateId: 'SECU_...',
          },
          locale: 'fr', // optional — defaults to navigator.language
        }}
        onClose={() => setOpen(false)}
        onAllComplete={(ok, failed) => console.log('Done', ok, failed)}
      />
    </>
  );
}
```

## Package exports

| Specifier | Description |
|---|---|
| `@scaleflex/uploader` | Core `SfxUploader` class (use with `customElements.define`) |
| `@scaleflex/uploader/define` | Auto-registers `<sfx-uploader>` — import for side-effect |
| `@scaleflex/uploader/react` | React wrapper component |

## Browser support

| Browser | Version |
|---|---|
| Chrome / Edge | 90+ |
| Firefox | 100+ |
| Safari | 15.4+ |

## Claude Code Integration

If you use [Claude Code](https://docs.anthropic.com/en/docs/claude-code), this package ships with a ready-made skill that helps Claude add the uploader to your project — detecting your framework, wiring auth, events, theming, and restrictions automatically.

**Per-project** (recommended — share with your team via version control):

```bash
mkdir -p .claude/skills/integrate-uploader
cp node_modules/@scaleflex/uploader/.claude/skills/integrate-uploader/SKILL.md \
   .claude/skills/integrate-uploader/SKILL.md
```

Commit the `.claude/skills/` directory to version control. The skill is now available to everyone on the team.

**Per-user** (available across all your projects):

```bash
mkdir -p ~/.claude/skills/integrate-uploader
cp node_modules/@scaleflex/uploader/.claude/skills/integrate-uploader/SKILL.md \
   ~/.claude/skills/integrate-uploader/SKILL.md
```

Then type `/integrate-uploader` in Claude Code and it will walk you through the full integration — install, config, events, and theming — tailored to your stack (React, Vue, vanilla JS, etc.).

## Documentation

See the full documentation and interactive examples at **[scaleflex.github.io/uploader](https://scaleflex.github.io/uploader/)**.

## License

See [LICENSE](./LICENSE).
