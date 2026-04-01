import{b as r}from"./index-DiBLSo6t.js";import{r as a}from"./code-block-Bk3NnwHF.js";const t={render(){return`
      <div class="page-header">
        <h1>Sources layout</h1>
        <p>Choose how import sources are displayed in the drop zone: compact <code>pills</code> (default) or a grid of square <code>cards</code> with large icons.</p>
      </div>

      <section class="page-section">
        <h2>Cards layout</h2>
        <p>Sources are displayed as a responsive grid of cards. The number of visible cards adapts to screen width — 5 on desktop, 3 on tablet, 2 on mobile — with overflow sources in a "More" dropdown.</p>
        <div id="cards-container" style="min-height: 580px; margin-top: 16px; margin-bottom: 32px;">
          <sfx-uploader id="cards-uploader"></sfx-uploader>
        </div>
      </section>

      <section class="page-section" style="margin-top: 40px;">
        <h2>Pills layout (default)</h2>
        <p>Sources are displayed as compact inline pills in a horizontal row.</p>
        <div id="pills-container" style="min-height: 560px; margin-top: 16px; margin-bottom: 32px;">
          <sfx-uploader id="pills-uploader"></sfx-uploader>
        </div>
      </section>

      <section class="page-section">
        <h2>Code</h2>
        <div id="code-container"></div>
      </section>
    `},init(e){const o=document.getElementById("cards-uploader");o.config=r({mode:"inline",sourcesLayout:"cards",connectors:{companionUrl:"https://eu-on-24001.connector.filerobot.com",providers:["google-drive","dropbox","onedrive","box","unsplash"]}});const d=document.getElementById("pills-uploader");d.config=r({mode:"inline",connectors:{companionUrl:"https://eu-on-24001.connector.filerobot.com",providers:["google-drive","dropbox","onedrive","box","unsplash"]}}),a("#code-container",[{label:"HTML",lang:"markup",code:`
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
    sourcesLayout: 'cards', // 'pills' (default) or 'cards'
    connectors: {
      companionUrl: 'https://companion.example.com',
      providers: ['google-drive', 'dropbox', 'onedrive'],
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
        sourcesLayout: 'cards', // 'pills' (default) or 'cards'
        connectors: {
          companionUrl: 'https://companion.example.com',
          providers: ['google-drive', 'dropbox', 'onedrive'],
        },
      }}
      onAllComplete={(ok, failed) => console.log('Done:', ok, failed)}
    />
  );
}`}])},destroy(){const e=document.getElementById("cards-uploader");e&&e.close();const o=document.getElementById("pills-uploader");o&&o.close()}};export{t as default};
