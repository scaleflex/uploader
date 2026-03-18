import '../src/define';
import type { SfxUploader } from '../src/sfx-uploader';
import { initRouter } from './lib/router';
import { initAuthUI } from './lib/auth';

// Auth UI
initAuthUI();

// Router
const uploader = document.getElementById('uploader') as SfxUploader;
initRouter(uploader);

// Sidebar toggle (mobile)
document.getElementById('sidebar-toggle')?.addEventListener('click', () => {
  document.getElementById('sidebar')?.classList.toggle('mobile-open');
});
