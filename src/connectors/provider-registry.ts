import type { SourceDef } from '../types/source.types';
import type { ProviderId } from './connector.types';

// Brand SVG icons — these use fill (not stroke), so SourceDef.fillIcon = true
const PROVIDER_DEFS: Record<ProviderId, SourceDef> = {
  'google-drive': {
    id: 'google-drive',
    label: 'Google Drive',
    fillIcon: true,
    icon: `<path d="M7.71 3.5L1.15 15l2.98 5.16h3.46L1.15 8.66 4.13 3.5h3.58zm1.04 0L15.3 15l-2.98 5.16H8.86L15.3 8.66 12.33 3.5H8.75zm7.54 5.16L22.85 15l-2.98 5.16-6.56-11.5h6.56z" fill="currentColor"/>`,
  },
  dropbox: {
    id: 'dropbox',
    label: 'Dropbox',
    fillIcon: true,
    icon: `<path d="M12 2L6.5 5.75 12 9.5l5.5-3.75L12 2zM6.5 5.75L1 9.5l5.5 3.75L12 9.5 6.5 5.75zM17.5 5.75L12 9.5l5.5 3.75L23 9.5l-5.5-3.75zM1 9.5l5.5 3.75L12 9.5 6.5 5.75 1 9.5zm22 0l-5.5 3.75L12 9.5l5.5-3.75L23 9.5zM6.5 14.5L12 18.25l5.5-3.75L12 10.75 6.5 14.5z" fill="currentColor"/>`,
  },
  onedrive: {
    id: 'onedrive',
    label: 'OneDrive',
    fillIcon: true,
    icon: `<path d="M10.07 8.82a5.5 5.5 0 0 1 8.6 1.43A4.5 4.5 0 0 1 19.5 19H6a4 4 0 0 1-.67-7.95 5.49 5.49 0 0 1 4.74-2.23z" fill="currentColor"/>`,
  },
  box: {
    id: 'box',
    label: 'Box',
    fillIcon: true,
    icon: `<path d="M12 2L3 7v10l9 5 9-5V7l-9-5zm0 2.18L18.36 7.5 12 10.82 5.64 7.5 12 4.18zM5 8.82l6 3.33v6.67l-6-3.33V8.82zm14 0v6.67l-6 3.33v-6.67l6-3.33z" fill="currentColor"/>`,
  },
  instagram: {
    id: 'instagram',
    label: 'Instagram',
    fillIcon: true,
    icon: `<path d="M12 2.16c2.94 0 3.29.01 4.45.06 1.07.05 1.8.22 2.43.46.66.25 1.21.6 1.77 1.16.55.55.9 1.1 1.16 1.77.25.64.41 1.37.46 2.43.05 1.16.06 1.51.06 4.45s-.01 3.29-.06 4.45c-.05 1.07-.22 1.8-.46 2.43a4.9 4.9 0 0 1-1.16 1.77c-.55.55-1.1.9-1.77 1.16-.64.25-1.37.41-2.43.46-1.16.05-1.51.06-4.45.06s-3.29-.01-4.45-.06c-1.07-.05-1.8-.22-2.43-.46a4.9 4.9 0 0 1-1.77-1.16 4.9 4.9 0 0 1-1.16-1.77c-.25-.64-.41-1.37-.46-2.43C2.17 15.29 2.16 14.94 2.16 12s.01-3.29.06-4.45c.05-1.07.22-1.8.46-2.43a4.9 4.9 0 0 1 1.16-1.77A4.9 4.9 0 0 1 5.61 2.2c.64-.25 1.37-.41 2.43-.46C9.21 2.17 9.56 2.16 12 2.16zM12 0C8.97 0 8.6.01 7.43.07 6.26.12 5.45.3 4.73.58a6.9 6.9 0 0 0-2.5 1.63A6.9 6.9 0 0 0 .58 4.73C.3 5.45.12 6.26.07 7.43.01 8.6 0 8.97 0 12s.01 3.4.07 4.57c.05 1.17.23 1.98.51 2.7a6.9 6.9 0 0 0 1.63 2.5 6.9 6.9 0 0 0 2.5 1.63c.72.28 1.53.46 2.7.51C8.6 23.99 8.97 24 12 24s3.4-.01 4.57-.07c1.17-.05 1.98-.23 2.7-.51a6.9 6.9 0 0 0 2.5-1.63 6.9 6.9 0 0 0 1.63-2.5c.28-.72.46-1.53.51-2.7.06-1.17.07-1.54.07-4.57s-.01-3.4-.07-4.57c-.05-1.17-.23-1.98-.51-2.7a6.9 6.9 0 0 0-1.63-2.5A6.9 6.9 0 0 0 19.27.58C18.55.3 17.74.12 16.57.07 15.4.01 15.03 0 12 0zm0 5.84a6.16 6.16 0 1 0 0 12.32 6.16 6.16 0 0 0 0-12.32zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.4-11.85a1.44 1.44 0 1 0 0 2.88 1.44 1.44 0 0 0 0-2.88z" fill="currentColor"/>`,
  },
  facebook: {
    id: 'facebook',
    label: 'Facebook',
    fillIcon: true,
    icon: `<path d="M24 12.07C24 5.41 18.63 0 12 0S0 5.41 0 12.07c0 6.02 4.39 11.02 10.12 11.93v-8.44H7.08v-3.49h3.04V9.41c0-3.02 1.79-4.69 4.53-4.69 1.31 0 2.68.24 2.68.24v2.97h-1.51c-1.49 0-1.95.93-1.95 1.89v2.26h3.33l-.53 3.49h-2.8v8.44C19.61 23.09 24 18.09 24 12.07z" fill="currentColor"/>`,
  },
  unsplash: {
    id: 'unsplash',
    label: 'Unsplash',
    fillIcon: true,
    icon: `<path d="M7.5 6.75V0h9v6.75h-9zM0 24V10.5h7.5v6.75h9V10.5H24V24H0z" fill="currentColor"/>`,
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
