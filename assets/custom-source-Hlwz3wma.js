import{b as l}from"./index-B2xh3pMk.js";import{r as c}from"./code-block-C_3oxnLY.js";async function s(t){const e=document.createElement("canvas");e.width=600,e.height=400;const o=e.getContext("2d"),a=o.createLinearGradient(0,0,e.width,e.height);a.addColorStop(0,"#7d2ae8"),a.addColorStop(1,"#00c4cc"),o.fillStyle=a,o.fillRect(0,0,e.width,e.height),o.fillStyle="#fff",o.font="bold 48px Inter, sans-serif",o.textAlign="center",o.textBaseline="middle",o.fillText(t,e.width/2,e.height/2);const i=await new Promise((r,d)=>{e.toBlob(n=>n?r(n):d(new Error("toBlob failed")),"image/png")});return new File([i],`${t.toLowerCase().replace(/\s+/g,"-")}.png`,{type:"image/png"})}const p=`
  <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
    <defs>
      <linearGradient id="canva-demo-grad" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="#7d2ae8"/>
        <stop offset="100%" stop-color="#00c4cc"/>
      </linearGradient>
    </defs>
    <circle cx="12" cy="12" r="11" fill="url(#canva-demo-grad)"/>
    <text x="12" y="16" text-anchor="middle" font-family="Inter, sans-serif" font-weight="700" font-size="13" fill="#fff">C</text>
  </svg>
`,f={render(){return`
      <div class="page-header">
        <h1>Custom connectors (customSources)</h1>
        <p>Add a source pill backed by your own SDK or dialog. The uploader renders the pill alongside the built-in sources; clicking it calls your <code>onActivate</code> callback, where you open your own UI and push files back via <code>uploader.addFiles(File[])</code>.</p>
        <p>This demo simulates a Canva-style integration: click the <strong>Canva (demo)</strong> pill and a synthesized PNG is added to the queue, exactly as if it had been exported from a real third-party SDK.</p>
      </div>

      <section class="page-section">
        <h2>Live</h2>
        <div id="custom-source-container" style="min-height: 560px; margin-top: 16px; margin-bottom: 32px;">
          <sfx-uploader id="custom-source-uploader"></sfx-uploader>
        </div>
      </section>

      <section class="page-section">
        <h2>Code</h2>
        <div id="code-container"></div>
      </section>
    `},init(t){const e=document.getElementById("custom-source-uploader");e.config=l({mode:"inline",connectors:{companionUrl:"",providers:[],customSources:[{id:"canva-demo",label:"Canva (demo)",brandHtml:p,onActivate:async o=>{const a=await s("Hello from Canva");o.addFiles([a])}}]}}),c("#code-container",[{label:"HTML",lang:"markup",code:`
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
      // Leave empty if you only want custom sources (no Companion providers,
      // no URL import). Otherwise pass your companionUrl + providers as usual.
      companionUrl: '',
      providers: [],
      customSources: [
        {
          id: 'canva',
          label: 'Canva',
          brandHtml: '<svg viewBox="0 0 24 24">...</svg>',
          onActivate: async (handle) => {
            // 1. Open your SDK / picker / dialog
            const exported = await openCanvaPicker();
            // 2. Hand the resulting File(s) back to the uploader
            handle.addFiles(exported);
          },
        },
      ],
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
          companionUrl: '',
          providers: [],
          customSources: [
            {
              id: 'canva',
              label: 'Canva',
              brandHtml: '<svg viewBox="0 0 24 24">...</svg>',
              onActivate: async (handle) => {
                const exported = await openCanvaPicker();
                handle.addFiles(exported);
              },
            },
          ],
        },
      }}
      onAllComplete={(ok, failed) => console.log('Done:', ok, failed)}
    />
  );
}`}])},destroy(){const t=document.getElementById("custom-source-uploader");t&&t.close()}};export{f as default};
