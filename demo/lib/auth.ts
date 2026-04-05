import type { UploaderConfig } from '../../src/sfx-uploader';

const STORAGE_KEY = 'sfx-uploader-demo-auth';

interface AuthCreds {
  container: string;
  securityTemplateId: string;
}

const DEFAULTS: AuthCreds = {
  container: '',
  securityTemplateId: '',
};

export function getAuth(): AuthCreds {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) return { ...DEFAULTS, ...JSON.parse(stored) };
  } catch { /* ignore */ }
  return { ...DEFAULTS };
}

export function saveAuth(creds: AuthCreds) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(creds));
}

export function buildConfig(overrides: Partial<UploaderConfig> = {}): UploaderConfig {
  const { container, securityTemplateId } = getAuth();
  return {
    auth: {
      mode: 'security-template' as const,
      container,
      securityTemplateId,
    },
    autoProceed: false,
    connectors: {
      companionUrl: 'https://companion.scaleflex.com',
      providers: ['google-drive', 'dropbox', 'box', 'onedrive'],
    },
    ...overrides,
  };
}

export function initAuthUI() {
  const btn = document.getElementById('auth-btn')!;
  const popover = document.getElementById('auth-popover')!;
  const containerInput = document.getElementById('auth-container') as HTMLInputElement;
  const secTemplateInput = document.getElementById('auth-sec-template') as HTMLInputElement;
  const saveBtn = document.getElementById('auth-save')!;

  // Load current values
  const creds = getAuth();
  containerInput.value = creds.container;
  secTemplateInput.value = creds.securityTemplateId;

  btn.addEventListener('click', (e) => {
    e.stopPropagation();
    popover.classList.toggle('hidden');
  });

  saveBtn.addEventListener('click', () => {
    saveAuth({
      container: containerInput.value.trim(),
      securityTemplateId: secTemplateInput.value.trim(),
    });
    popover.classList.add('hidden');
  });

  document.addEventListener('click', (e) => {
    if (!popover.contains(e.target as Node) && !btn.contains(e.target as Node)) {
      popover.classList.add('hidden');
    }
  });
}
