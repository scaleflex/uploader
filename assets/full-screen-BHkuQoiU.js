import{b as i}from"./index-BaQdlWDE.js";const o={render(){return`
      <style>
        /* Hide demo chrome for full-screen test */
        .topbar, #sidebar { display: none !important; }
        body.has-sidebar { grid-template-columns: 1fr !important; }
        #content { padding: 0 !important; max-width: none !important; }
        main { padding: 0 !important; }
      </style>
      <div id="fs-container" style="position: fixed; inset: 0; z-index: 9999;">
        <a href="#/examples/inline" style="position: absolute; top: 12px; right: 12px; z-index: 10000; padding: 6px 14px; font-size: 13px; font-weight: 500; color: #475569; background: rgba(255,255,255,0.85); border: 1px solid #e2e8f0; border-radius: 8px; text-decoration: none; backdrop-filter: blur(4px); cursor: pointer;">← Back</a>
        <sfx-uploader
          id="fs-uploader"
          style="width: 100%; height: 100%; --sfx-up-max-height: 100%; --sfx-up-min-height: 0; --sfx-up-content-max-width: none;"
        ></sfx-uploader>
      </div>
    `},init(e){const t=document.getElementById("fs-uploader");t.config=i({mode:"inline",inlineHeader:{accent:"Airbox",title:"Q1 Marketing Assets",description:"Upload banners, logos and brand visuals for the Q1 campaign"}})},destroy(){const e=document.getElementById("fs-uploader");e&&e.close()}};export{o as default};
