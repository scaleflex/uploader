import{b as i}from"./index-D1s3Tt9e.js";import{r}from"./code-block-C_3oxnLY.js";import{i as a}from"./custom-select-mLCaw8r4.js";let o=3;function n(){const e=document.getElementById("code-container");e&&(e.innerHTML="",r("#code-container",[{label:"JavaScript",lang:"javascript",code:`
uploader.config = {
  auth: { /* ... */ },
  concurrency: ${o}, // max parallel uploads
};`}]))}const l={render(){return`
      <div class="page-header">
        <h1>Concurrency</h1>
        <p>Control how many files upload simultaneously with the <code>concurrency</code> option. Lower values reduce server load; higher values finish faster.</p>
      </div>

      <section class="page-section">
        <div class="config-controls">
          <div class="form-group">
            <label for="concurrency-select">Concurrency</label>
            <select id="concurrency-select">
              <option value="1">1 (sequential)</option>
              <option value="2">2</option>
              <option value="3" selected>3 (default)</option>
              <option value="5">5</option>
              <option value="10">10</option>
            </select>
          </div>
        </div>
        <button class="btn-primary open-btn-spacing" id="open-btn">Open uploader</button>
      </section>

      <section class="page-section">
        <h2>Code</h2>
        <div id="code-container"></div>
      </section>
    `},init(e){o=3,n();const t=a();document.getElementById("concurrency-select").addEventListener("change",c=>{o=Number(c.target.value),n()}),document.getElementById("open-btn").addEventListener("click",()=>{e.config=i({concurrency:o}),e.open()}),l.destroy=()=>t()}};export{l as default};
