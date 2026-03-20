import type { SourceDef } from '../types/source.types';
import type { ProviderId } from './connector.types';

// Brand icons — use brandHtml for multi-color / container icons,
// plain icon+fillIcon for single-color SVG paths.
const PROVIDER_DEFS: Record<ProviderId, SourceDef> = {
  'google-drive': {
    id: 'google-drive',
    label: 'Google Drive',
    fillIcon: true,
    icon: '',
    brandHtml: `<span class="brand-ico" style="background:transparent"><svg width="16" height="16" viewBox="0 0 87.3 78"><path d="M6.6 66.85l3.85 6.65c.8 1.4 1.95 2.5 3.3 3.3L27.5 53H0c0 1.55.4 3.1 1.2 4.5z" fill="#0066da"/><path d="M43.65 25L29.9 1.2C28.55 2 27.4 3.1 26.6 4.5L1.2 48.5C.4 49.9 0 51.45 0 53h27.5z" fill="#00ac47"/><path d="M73.55 76.8c1.35-.8 2.5-1.9 3.3-3.3l1.6-2.75 7.65-13.25c.8-1.4 1.2-2.95 1.2-4.5H59.8l5.65 10.85z" fill="#ea4335"/><path d="M43.65 25L57.4 1.2C56.05.4 54.5 0 52.9 0H34.4c-1.6 0-3.15.45-4.5 1.2z" fill="#00832d"/><path d="M59.8 53H27.5L13.75 76.8c1.35.8 2.9 1.2 4.5 1.2h50.8c1.6 0 3.15-.45 4.5-1.2z" fill="#2684fc"/><path d="M73.4 26.5l-12.7-22c-.8-1.4-1.95-2.5-3.3-3.3L43.65 25 59.8 53h27.45c0-1.55-.4-3.1-1.2-4.5z" fill="#ffba00"/></svg></span>`,
  },
  dropbox: {
    id: 'dropbox',
    label: 'Dropbox',
    fillIcon: true,
    icon: '',
    brandHtml: `<span class="brand-ico" style="background:#0061ff"><svg width="11" height="11" viewBox="0 0 528 512" fill="white"><path d="M264.4 116.3l-132 84.3 132 84.3-132 84.3L0 284.1l132.3-84.3L0 116.3 132.3 32l132.1 84.3zm-132 284.5l132-84.3 132 84.3-132 84.4-132-84.4zm132-116.6l132.3-84.3-132.3-83.9 131.6-84.3L528 116.3l-132.3 84.1L528 284.7l-132.4 83.9-131.2-84.4z"/></svg></span>`,
  },
  onedrive: {
    id: 'onedrive',
    label: 'OneDrive',
    fillIcon: true,
    icon: '',
    brandHtml: `<span class="brand-ico" style="background:#0078d4"><svg width="11" height="11" viewBox="0 0 24 24" fill="white"><path d="M10.5 13.5C10.5 11.57 12.07 10 14 10h6.5c.17 0 .34.01.5.02A6 6 0 009.01 11.6 4 4 0 0010.5 13.5zM12 14.5a5 5 0 00-5-5 5 5 0 00-5 5 3 3 0 003 3h9.5A3.5 3.5 0 0018 14c0-.18-.01-.35-.03-.52A5.48 5.48 0 0112 14.5z"/></svg></span>`,
  },
  box: {
    id: 'box',
    label: 'Box',
    fillIcon: true,
    icon: '',
    brandHtml: `<span class="brand-ico" style="background:#0e50a0;font-size:9px;font-weight:800;color:#fff">box</span>`,
  },
  instagram: {
    id: 'instagram',
    label: 'Instagram',
    fillIcon: true,
    icon: '',
    brandHtml: `<span class="brand-ico" style="background:linear-gradient(45deg,#f09433,#e6683c,#dc2743,#cc2366,#bc1888)"><svg width="12" height="12" viewBox="0 0 24 24" fill="white"><path d="M12 2.16c2.94 0 3.29.01 4.45.06 1.07.05 1.8.22 2.43.46.66.25 1.21.6 1.77 1.16.55.55.9 1.1 1.16 1.77.25.64.41 1.37.46 2.43.05 1.16.06 1.51.06 4.45s-.01 3.29-.06 4.45c-.05 1.07-.22 1.8-.46 2.43a4.9 4.9 0 01-1.16 1.77c-.55.55-1.1.9-1.77 1.16-.64.25-1.37.41-2.43.46-1.16.05-1.51.06-4.45.06s-3.29-.01-4.45-.06c-1.07-.05-1.8-.22-2.43-.46a4.9 4.9 0 01-1.77-1.16 4.9 4.9 0 01-1.16-1.77c-.25-.64-.41-1.37-.46-2.43C2.17 15.29 2.16 14.94 2.16 12s.01-3.29.06-4.45c.05-1.07.22-1.8.46-2.43a4.9 4.9 0 011.16-1.77A4.9 4.9 0 015.61 2.2c.64-.25 1.37-.41 2.43-.46C9.21 2.17 9.56 2.16 12 2.16zM12 16a4 4 0 110-8 4 4 0 010 8zm6.4-9.85a1.44 1.44 0 100 2.88 1.44 1.44 0 000-2.88z"/></svg></span>`,
  },
  facebook: {
    id: 'facebook',
    label: 'Facebook',
    fillIcon: true,
    icon: '',
    brandHtml: `<span class="brand-ico" style="background:#1877f2"><svg width="12" height="12" viewBox="0 0 24 24" fill="white"><path d="M24 12.07C24 5.41 18.63 0 12 0S0 5.41 0 12.07c0 6.02 4.39 11.02 10.12 11.93v-8.44H7.08v-3.49h3.04V9.41c0-3.02 1.79-4.69 4.53-4.69 1.31 0 2.68.24 2.68.24v2.97h-1.51c-1.49 0-1.95.93-1.95 1.89v2.26h3.33l-.53 3.49h-2.8v8.44C19.61 23.09 24 18.09 24 12.07z"/></svg></span>`,
  },
  unsplash: {
    id: 'unsplash',
    label: 'Unsplash',
    fillIcon: true,
    icon: '',
    brandHtml: `<span class="brand-ico" style="background:#111"><svg width="12" height="12" viewBox="0 0 24 24" fill="white"><path d="M8.5 11.5v5h7v-5h5.5V21h-18v-9.5h5.5zm7-8v5h-7v-5h7z"/></svg></span>`,
  },
  canva: {
    id: 'canva',
    label: 'Canva',
    fillIcon: true,
    icon: '',
    brandHtml: `<span class="brand-ico canva-ico" style="width:22px;height:22px;border-radius:50%;overflow:hidden;background:none"><svg width="22" height="22" viewBox="0 0 100 100"><defs><linearGradient id="cg" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#00C4CC"/><stop offset="100%" stop-color="#7B2FF7"/></linearGradient></defs><circle cx="50" cy="50" r="50" fill="url(#cg)"/><path d="M62 32c-2.5-1.5-5.5-2-9-2-11 0-19 8.5-19 20s7.5 19 17 19c4 0 7-1.2 9.5-3.5 1.2-1.1 2-2.5 2-3.8 0-1.8-1.2-3-3-3-1 0-1.8.5-2.8 1.5-1.5 1.5-3.2 2.3-5.5 2.3-5.5 0-9.5-4.5-9.5-12.5 0-8.5 4.5-13.5 10.5-13.5 2 0 3.8.6 5 1.5 1 .8 1.6 1.8 1.8 3 .2 1 .8 1.5 1.8 1.5 1.8 0 3-1.3 3-3.2 0-1.5-.5-3.2-1.8-4.3z" fill="white"/></svg></span>`,
  },
};

/**
 * Get SourceDef entries for the given provider IDs,
 * ready to merge with CORE_SOURCES for source-pills.
 */
export function getProviderSources(providers: ProviderId[]): SourceDef[] {
  return providers
    .filter((id) => id in PROVIDER_DEFS)
    .map((id) => PROVIDER_DEFS[id]);
}
