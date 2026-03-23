import{h as t,c as e}from"./doc-utils-XkOyWBCy.js";const l={render(){return`
      <div class="doc-content">
        <h1>React wrapper</h1>
        <p class="doc-lead">The <code>@scaleflex/uploader/react</code> sub-path provides a declarative React wrapper with controlled state and callback props.</p>

        <h2>Installation</h2>
        ${e("bash","npm install @scaleflex/uploader react react-dom")}

        <h2>Basic usage</h2>
        ${e("tsx",`import { useState } from 'react';
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
        }}
        onAllComplete={(ok, failed) => {
          console.log(\`\${ok.length} uploaded, \${failed.length} failed\`);
        }}
        onClose={() => setOpen(false)}
      />
    </>
  );
}`)}

        <h2>Ref usage</h2>
        <p>Access imperative methods via a React ref for programmatic control:</p>
        ${e("tsx",`import { useRef } from 'react';
import { Uploader, type UploaderRef } from '@scaleflex/uploader/react';

function App() {
  const ref = useRef<UploaderRef>(null);

  return (
    <>
      <button onClick={() => ref.current?.open()}>Open</button>
      <button onClick={() => ref.current?.upload()}>Upload all</button>
      <button onClick={() => ref.current?.cancelUpload()}>Cancel</button>
      <Uploader
        ref={ref}
        config={{
          auth: {
            mode: 'security-template',
            container: 'YOUR_CONTAINER',
            securityTemplateId: 'SECU_...',
          },
        }}
        onUploadComplete={(file, response) => {
          console.log('Uploaded:', response.file.url.cdn);
        }}
      />
    </>
  );
}`)}

        <h2>TypeScript types</h2>
        ${e("typescript",`import type {
  UploaderRef,
  UploaderConfig,
  UploadFile,
  UploadResponse,
} from '@scaleflex/uploader/react';`)}

        <h2>Complete example</h2>
        ${e("tsx",`import { useState, useRef } from 'react';
import { Uploader, type UploaderRef } from '@scaleflex/uploader/react';

function FileManager() {
  const [open, setOpen] = useState(false);
  const [files, setFiles] = useState<string[]>([]);
  const ref = useRef<UploaderRef>(null);

  return (
    <div>
      <button onClick={() => setOpen(true)}>Upload files</button>

      <ul>
        {files.map((url) => (
          <li key={url}>
            <a href={url} target="_blank">{url}</a>
          </li>
        ))}
      </ul>

      <Uploader
        ref={ref}
        open={open}
        config={{
          auth: {
            mode: 'security-template',
            container: 'YOUR_CONTAINER',
            securityTemplateId: 'SECU_...',
          },
          targetFolder: '/user-uploads',
          restrictions: {
            maxNumberOfFiles: 10,
            maxFileSize: 10 * 1024 * 1024,
          },
        }}
        onUploadComplete={(file, response) => {
          setFiles((prev) => [...prev, response.file.url.cdn]);
        }}
        onClose={() => setOpen(false)}
      />
    </div>
  );
}`)}
      </div>
    `},init(){t()}};export{l as default};
