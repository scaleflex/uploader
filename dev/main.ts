import '../src/define';
import type { SfxUploader } from '../src/sfx-uploader';
import type { UploaderConfig } from '../src/sfx-uploader';

const uploader = document.getElementById('uploader') as SfxUploader;

const containerInput = document.getElementById('cfg-container') as HTMLInputElement;
const secTemplateInput = document.getElementById('cfg-sec-template') as HTMLInputElement;
const folderInput = document.getElementById('cfg-folder') as HTMLInputElement;
const airboxPuidInput = document.getElementById('cfg-airbox-puid') as HTMLInputElement;
const applyBtn = document.getElementById('cfg-apply') as HTMLButtonElement;
const modalBtn = document.getElementById('cfg-modal') as HTMLButtonElement;
const stepBtn = document.getElementById('cfg-step') as HTMLButtonElement;

// Clear stale localStorage to use new defaults
localStorage.removeItem('sfx-uploader-dev-config');

function applyConfig(
  mode: 'inline' | 'modal' = 'inline',
  headerButton?: 'none' | 'close' | 'back',
) {
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
    mode,
    ...(headerButton ? { headerButton } : {}),
    connectors: {
      companionUrl: 'https://eu-on-24001.connector.filerobot.com',
      providers: ['google-drive', 'dropbox', 'onedrive', 'box', 'unsplash'],
      customSources: [
        {
          id: 'canva',
          label: 'Canva',
          fillIcon: true,
          icon: '',
          brandHtml: `<span class="brand-ico canva-ico" style="width:22px;height:22px;border-radius:50%;overflow:hidden;background:none"><svg width="22" height="22" viewBox="0 0 100 100"><defs><linearGradient id="cg" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#00C4CC"/><stop offset="100%" stop-color="#7B2FF7"/></linearGradient></defs><circle cx="50" cy="50" r="50" fill="url(#cg)"/><path d="M62 32c-2.5-1.5-5.5-2-9-2-11 0-19 8.5-19 20s7.5 19 17 19c4 0 7-1.2 9.5-3.5 1.2-1.1 2-2.5 2-3.8 0-1.8-1.2-3-3-3-1 0-1.8.5-2.8 1.5-1.5 1.5-3.2 2.3-5.5 2.3-5.5 0-9.5-4.5-9.5-12.5 0-8.5 4.5-13.5 10.5-13.5 2 0 3.8.6 5 1.5 1 .8 1.6 1.8 1.8 3 .2 1 .8 1.5 1.8 1.5 1.8 0 3-1.3 3-3.2 0-1.5-.5-3.2-1.8-4.3z" fill="white"/></svg></span>`,
          onActivate: () => {
            alert('This is a custom integration showcase. Here can be your custom implementation!');
          },
        },
      ],
    },
  };

  uploader.config = config;
}

applyBtn.addEventListener('click', () => applyConfig());

modalBtn.addEventListener('click', () => {
  applyConfig('modal');
  uploader.open();
});

stepBtn.addEventListener('click', () => {
  applyConfig('modal', 'back');
  uploader.open();
});

// Auto-apply if we have default values filled in
if (containerInput.value && secTemplateInput.value) {
  applyConfig();
}
