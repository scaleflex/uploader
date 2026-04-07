import type { SfxUploader } from '../../src/sfx-uploader';

export interface Page {
  render(): string;
  init?(uploader: SfxUploader): void;
  destroy?(): void;
}

type RouteEntry = { pattern: string; load: () => Promise<Page> };

const routes: RouteEntry[] = [
  { pattern: '/', load: () => import('../pages/landing').then((m) => m.default) },
  // Docs
  { pattern: '/docs/getting-started', load: () => import('../pages/docs/getting-started').then((m) => m.default) },
  { pattern: '/docs/configuration', load: () => import('../pages/docs/configuration').then((m) => m.default) },
  { pattern: '/docs/api', load: () => import('../pages/docs/api').then((m) => m.default) },
  { pattern: '/docs/theming', load: () => import('../pages/docs/theming').then((m) => m.default) },
  { pattern: '/docs/types', load: () => import('../pages/docs/types').then((m) => m.default) },
  // Examples
  { pattern: '/examples/basic', load: () => import('../pages/examples/basic').then((m) => m.default) },
  { pattern: '/examples/auto-upload', load: () => import('../pages/examples/auto-upload').then((m) => m.default) },
  { pattern: '/examples/restrictions', load: () => import('../pages/examples/restrictions').then((m) => m.default) },
  { pattern: '/examples/target-folder', load: () => import('../pages/examples/target-folder').then((m) => m.default) },
  { pattern: '/examples/concurrency', load: () => import('../pages/examples/concurrency').then((m) => m.default) },
  { pattern: '/examples/events', load: () => import('../pages/examples/events').then((m) => m.default) },
  { pattern: '/examples/modal', load: () => import('../pages/examples/modal').then((m) => m.default) },
  { pattern: '/examples/inline', load: () => import('../pages/examples/inline').then((m) => m.default) },
  { pattern: '/examples/sources-layout', load: () => import('../pages/examples/sources-layout').then((m) => m.default) },
  { pattern: '/examples/header-button', load: () => import('../pages/examples/header-button').then((m) => m.default) },
  { pattern: '/examples/minimize-to-background', load: () => import('../pages/examples/minimize-to-background').then((m) => m.default) },
  { pattern: '/examples/resumable-upload', load: () => import('../pages/examples/resumable-upload').then((m) => m.default) },
  { pattern: '/examples/react-wrapper', load: () => import('../pages/examples/react-wrapper').then((m) => m.default) },
  { pattern: '/examples/metadata', load: () => import('../pages/examples/metadata').then((m) => m.default) },
  { pattern: '/examples/full-screen', load: () => import('../pages/examples/full-screen').then((m) => m.default) },
];

let currentPage: Page | null = null;
let navId = 0;

export function initRouter(uploader: SfxUploader) {
  const content = document.getElementById('content')!;
  const sidebar = document.getElementById('sidebar')!;
  const sidebarDocs = document.getElementById('sidebar-docs')!;
  const sidebarExamples = document.getElementById('sidebar-examples')!;
  const topbarNavLinks = document.querySelectorAll<HTMLElement>('.topbar-nav-link');

  async function navigate() {
    const hash = location.hash.slice(1) || '/';
    const thisNav = ++navId;

    // Destroy previous page
    if (currentPage?.destroy) currentPage.destroy();

    // Find matching route
    const route = routes.find((r) => r.pattern === hash);
    if (!route) {
      location.hash = '#/';
      return;
    }

    // Determine section
    const isDocs = hash.startsWith('/docs/');
    const isExamples = hash.startsWith('/examples/');
    const hasSidebar = isDocs || isExamples;
    const isHome = hash === '/';

    // Toggle layout classes
    sidebar.classList.toggle('hidden', !hasSidebar);
    document.body.classList.toggle('has-sidebar', hasSidebar);
    document.body.classList.toggle('is-home', isHome);

    // Toggle doc vs example sidebar nav
    sidebarDocs.classList.toggle('hidden', !isDocs);
    sidebarExamples.classList.toggle('hidden', !isExamples);

    // Update active sidebar link
    sidebar.querySelectorAll('.sidebar-link').forEach((link) => {
      link.classList.toggle('active', link.getAttribute('data-route') === hash);
    });

    // Update active topbar nav link
    const activeSection = isDocs ? 'docs' : isExamples ? 'examples' : 'home';
    topbarNavLinks.forEach((link) => {
      link.classList.toggle('active', link.getAttribute('data-section') === activeSection);
    });

    // Close mobile sidebar
    sidebar.classList.remove('mobile-open');

    // Scroll to top
    window.scrollTo(0, 0);

    // Load & render page
    const page = await route.load();
    if (thisNav !== navId) return; // stale navigation, discard
    currentPage = page;
    content.innerHTML = page.render();
    if (page.init) page.init(uploader);
  }

  window.addEventListener('hashchange', navigate);
  navigate();
}
