import{b as n}from"./index-DCMH4bYG.js";import{r as a}from"./code-block-Bk3NnwHF.js";const l={render(){return`
      <div class="page-header">
        <h1>Inline display</h1>
        <p>Embed the uploader directly in the page flow with <code>mode: 'inline'</code>. It sizes to its container and does not use a backdrop overlay.</p>
        <p>This example uses <code>inlineHeader</code> for a branded header with accent, title, and description — ideal for full-page views. For the standard header bar (with close/back buttons), see the <a href="#/examples/header-button">Header</a> example.</p>
        <p><a href="#/examples/full-screen">View full-screen example →</a></p>
      </div>

      <section class="page-section">
        <div id="inline-container" style="min-height: 560px; margin-top: 16px;">
          <sfx-uploader id="inline-uploader"></sfx-uploader>
        </div>
      </section>

      <section class="page-section">
        <h2>Code</h2>
        <div id="code-container"></div>
      </section>
    `},init(e){const i=document.getElementById("inline-uploader");i.config=n({mode:"inline",inlineHeader:{accent:"Airbox",title:"Q1 Marketing Assets",description:"Upload banners, logos and brand visuals for the Q1 campaign"}}),a("#code-container",[{label:"HTML",lang:"markup",code:`
<!-- Inline uploader -->
<div style="height: 500px;">
  <sfx-uploader id="inline-uploader"></sfx-uploader>
</div>

<script type="module">
  import '@scaleflex/uploader/define';

  const auth = {
    mode: 'security-template',
    container: 'YOUR_CONTAINER',
    securityTemplateId: 'SECU_...',
  };

  const uploader = document.getElementById('inline-uploader');
  uploader.config = {
    auth,
    mode: 'inline',
    inlineHeader: {
      accent: 'Airbox',
      title: 'Q1 Marketing Assets',
      description: 'Upload banners, logos and brand visuals for the Q1 campaign',
    },
  };
<\/script>`},{label:"React",lang:"tsx",code:`
import { Uploader } from '@scaleflex/uploader/react';

const auth = {
  mode: 'security-template' as const,
  container: 'YOUR_CONTAINER',
  securityTemplateId: 'SECU_...',
};

export function App() {
  return (
    <div style={{ height: 500 }}>
      <Uploader
        config={{
          auth,
          mode: 'inline',
          inlineHeader: {
            accent: 'Airbox',
            title: 'Q1 Marketing Assets',
            description: 'Upload banners, logos and brand visuals for the Q1 campaign',
          },
        }}
        onAllComplete={(ok, failed) => console.log('Done:', ok, failed)}
      />
    </div>
  );
}`}])},destroy(){const e=document.getElementById("inline-uploader");e&&e.close()}};export{l as default};
