import '../src/define';
import type { SfxUploader } from '../src/sfx-uploader';
import type { UploaderConfig } from '../src/sfx-uploader';

const uploader = document.getElementById('uploader') as SfxUploader;

const containerInput = document.getElementById('cfg-container') as HTMLInputElement;
const secTemplateInput = document.getElementById('cfg-sec-template') as HTMLInputElement;
const folderInput = document.getElementById('cfg-folder') as HTMLInputElement;
const airboxPuidInput = document.getElementById('cfg-airbox-puid') as HTMLInputElement;
const applyBtn = document.getElementById('cfg-apply') as HTMLButtonElement;

// Clear stale localStorage to use new defaults
localStorage.removeItem('sfx-uploader-dev-config');

function applyConfig() {
  const container = containerInput.value.trim();
  const securityTemplateId = secTemplateInput.value.trim();
  const folder = folderInput.value.trim() || '/Documents';
  const airboxPuid = airboxPuidInput.value.trim();

  if (!container || !securityTemplateId) {
    alert('Container and Security Template ID are required');
    return;
  }

  // Persist for next reload
  localStorage.setItem(
    'sfx-uploader-dev-config',
    JSON.stringify({ container, securityTemplateId, folder, airboxPuid }),
  );

  const config: UploaderConfig = {
    auth: {
      mode: 'security-template',
      container,
      securityTemplateId,
      ...(airboxPuid ? { airboxPuid } : {}),
    },
    targetFolder: folder,
    mode: 'inline',
    connectors: {
      companionUrl: 'https://eu-on-24001.connector.filerobot.com',
      providers: ['google-drive', 'dropbox', 'onedrive', 'box', 'unsplash'],
      customSources: [
        {
          id: 'canva-test',
          label: 'Canva (Custom)',
          fillIcon: true,
          icon: '<circle cx="12" cy="12" r="10" fill="#24BECA" stroke="none"/><path d="M15.5 10.5c-.3-1.2-1.4-2-2.7-2-1.8 0-3.3 1.7-3.3 3.8 0 1.5.8 2.5 1.9 2.5.8 0 1.4-.6 1.6-1.4.1-.2 0-.4-.2-.4h-.3c-.2 0-.3-.1-.3-.3 0-.5.4-1 1-1 .8 0 1.3.6 1.3 1.5 0 1.6-1.2 2.8-2.8 2.8-2 0-3.4-1.6-3.4-3.8 0-2.8 1.9-5 4.5-5 2 0 3.4 1.2 3.6 2.8 0 .2-.1.4-.3.4h-.3c-.2 0-.3-.2-.3-.4z" fill="#fff"/>',
          onActivate(uploader) {
            alert('Custom source clicked!');
            console.log('Uploader handle:', uploader, 'addFiles:', typeof uploader.addFiles);
          },
        },
      ],
    },
  };

  uploader.config = config;
}

applyBtn.addEventListener('click', applyConfig);

// Auto-apply if we have default values filled in
if (containerInput.value && secTemplateInput.value) {
  applyConfig();
}
