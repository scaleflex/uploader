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
      providers: ['google-drive', 'dropbox', 'onedrive', 'box', 'unsplash', 'canva'],
      customSources: [],
    },
  };

  uploader.config = config;
}

applyBtn.addEventListener('click', applyConfig);

// Auto-apply if we have default values filled in
if (containerInput.value && secTemplateInput.value) {
  applyConfig();
}
