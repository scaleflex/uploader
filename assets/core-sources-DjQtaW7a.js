import{b as r}from"./index-BRdlKkfd.js";import{r as n}from"./code-block-C_3oxnLY.js";const s={render(){return`
      <div class="page-header">
        <h1>Built-in sources (coreSources)</h1>
        <p>The "More" menu always exposes four built-in sources by default: <strong>My Device</strong>, <strong>URL link</strong>, <strong>Camera</strong>, and <strong>Screen capture</strong>. Pass <code>connectors.coreSources</code> to render only a subset.</p>
        <p>On a touch device the list is shorter no matter what you allowlist: <strong>Screen capture</strong> is dropped because no mobile browser implements <code>getDisplayMedia</code>, and <strong>My Device</strong> is dropped because the drop zone is itself one large tap target that opens the same file picker. Check these examples on a phone and expect one pill fewer than the code says.</p>
      </div>

      <section class="page-section">
        <h2>Default — all four built-in sources</h2>
        <p>No <code>coreSources</code> set. Open the "More" menu and you should see Camera and Screen capture alongside the cloud providers. On a phone, Camera leads the visible pills instead of hiding in the menu.</p>
        <div id="all-container" style="min-height: 560px; margin-top: 16px; margin-bottom: 32px;">
          <sfx-uploader id="all-uploader"></sfx-uploader>
        </div>
      </section>

      <section class="page-section" style="margin-top: 40px;">
        <h2>Filtered — only My Device + URL</h2>
        <p>Sets <code>coreSources: ['device', 'url']</code>. Camera and Screen capture should be hidden from the "More" menu. On a phone this leaves URL link as the only import source — My Device is the drop zone itself there.</p>
        <div id="filtered-container" style="min-height: 560px; margin-top: 16px; margin-bottom: 32px;">
          <sfx-uploader id="filtered-uploader"></sfx-uploader>
        </div>
      </section>

      <section class="page-section">
        <h2>Code</h2>
        <div id="code-container"></div>
      </section>
    `},init(o){const e=document.getElementById("all-uploader");e.config=r({mode:"inline",connectors:{companionUrl:"https://eu-on-24001.connector.filerobot.com",providers:["google-drive","dropbox","onedrive","box","unsplash"]}});const t=document.getElementById("filtered-uploader");t.config=r({mode:"inline",connectors:{companionUrl:"https://eu-on-24001.connector.filerobot.com",providers:["google-drive","dropbox","onedrive","box","unsplash"],coreSources:["device","url"]}}),n("#code-container",[{label:"HTML",lang:"markup",code:`
<sfx-uploader id="uploader"></sfx-uploader>

<script type="module">
  import '@scaleflex/uploader/define';

  const uploader = document.getElementById('uploader');
  uploader.config = {
    auth: {
      mode: 'security-template',
      container: 'YOUR_CONTAINER',
      securityTemplateId: 'SECU_...',
    },
    mode: 'inline',
    connectors: {
      companionUrl: 'https://companion.example.com',
      providers: ['google-drive', 'dropbox', 'onedrive'],
      // Allowlist of built-in sources. Omit for all four.
      // IDs: 'device' | 'url' | 'camera' | 'screen-cast'
      coreSources: ['device', 'url'], // hides Camera + Screen capture
    },
  };
<\/script>`},{label:"React",lang:"tsx",code:`
import { Uploader } from '@scaleflex/uploader/react';

export function App() {
  return (
    <Uploader
      config={{
        auth: {
          mode: 'security-template',
          container: 'YOUR_CONTAINER',
          securityTemplateId: 'SECU_...',
        },
        mode: 'inline',
        connectors: {
          companionUrl: 'https://companion.example.com',
          providers: ['google-drive', 'dropbox', 'onedrive'],
          // Allowlist of built-in sources. Omit for all four.
          // IDs: 'device' | 'url' | 'camera' | 'screen-cast'
          coreSources: ['device', 'url'], // hides Camera + Screen capture
        },
      }}
      onAllComplete={(ok, failed) => console.log('Done:', ok, failed)}
    />
  );
}`}])},destroy(){const o=document.getElementById("all-uploader");o&&o.close();const e=document.getElementById("filtered-uploader");e&&e.close()}};export{s as default};
