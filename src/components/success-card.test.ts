import { SfxSuccessCard } from './success-card';

if (typeof customElements !== 'undefined' && !customElements.get('sfx-success-card')) {
  customElements.define('sfx-success-card', SfxSuccessCard);
}

async function mount(props: Partial<SfxSuccessCard> = {}): Promise<SfxSuccessCard> {
  const el = document.createElement('sfx-success-card') as SfxSuccessCard;
  Object.assign(el, props);
  document.body.appendChild(el);
  await el.updateComplete;
  return el;
}

function $(el: SfxSuccessCard, selector: string): HTMLElement | null {
  return el.shadowRoot?.querySelector(selector) as HTMLElement | null;
}

describe('SfxSuccessCard — minimize affordance', () => {
  afterEach(() => {
    document.body.querySelectorAll('sfx-success-card').forEach((n) => n.remove());
  });

  it('hides the minimize button by default', async () => {
    const el = await mount({ fileCount: 1 });
    expect($(el, '.minimize-btn')).toBeNull();
    expect($(el, '.close-btn')).not.toBeNull();
  });

  it('renders the minimize button when showMinimize is true', async () => {
    const el = await mount({ fileCount: 1, showMinimize: true });
    const btn = $(el, '.minimize-btn');
    expect(btn).not.toBeNull();
    expect(btn?.getAttribute('title')).toBe('Minimize & continue in background');
  });

  it('dispatches a composed, bubbling minimize-uploader event on click', async () => {
    const el = await mount({ fileCount: 1, showMinimize: true });
    let captured: CustomEvent | null = null;
    document.body.addEventListener(
      'minimize-uploader',
      (e) => {
        captured = e as CustomEvent;
      },
      { once: true },
    );
    ($(el, '.minimize-btn') as HTMLButtonElement).click();
    expect(captured).not.toBeNull();
    expect(captured!.bubbles).toBe(true);
    expect(captured!.composed).toBe(true);
  });

  it('does not dispatch minimize-uploader when the close button is clicked', async () => {
    const el = await mount({ fileCount: 1, showMinimize: true });
    let minimizeCount = 0;
    let closeCount = 0;
    document.body.addEventListener('minimize-uploader', () => minimizeCount++);
    document.body.addEventListener('close-uploader', () => closeCount++);
    ($(el, '.close-btn') as HTMLButtonElement).click();
    expect(minimizeCount).toBe(0);
    expect(closeCount).toBe(1);
  });

  it('renders the minimize button in the failed-only variant too', async () => {
    const el = await mount({
      fileCount: 0,
      failedFiles: [{ id: '1', name: 'a.png', error: 'boom' }],
      showMinimize: true,
    });
    expect($(el, '.minimize-btn')).not.toBeNull();
  });

  it('uses the custom translation function for the tooltip', async () => {
    const t = ((key: string, def: string) =>
      key === 'minimizeAndContinue' ? 'Свернуть и продолжить в фоне' : def) as SfxSuccessCard['t'];
    const el = await mount({ fileCount: 1, showMinimize: true, t });
    expect($(el, '.minimize-btn')?.getAttribute('title')).toBe(
      'Свернуть и продолжить в фоне',
    );
  });
});
