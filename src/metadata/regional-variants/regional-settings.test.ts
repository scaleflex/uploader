import type { RegionalVariantsGroup } from '../schema/schema.types';

// Side-effect import registers the custom element.
import './regional-settings';

interface RegionalSettingsEl extends HTMLElement {
  groups: RegionalVariantsGroup[];
  selectedFilters: Record<string, string>;
  updateComplete: Promise<unknown>;
}

async function mount(setup: (el: RegionalSettingsEl) => void): Promise<RegionalSettingsEl> {
  const el = document.createElement('sfx-regional-settings') as RegionalSettingsEl;
  setup(el);
  document.body.appendChild(el);
  await el.updateComplete;
  return el;
}

function makeGroup(
  uuid: string,
  variants: Array<[string, string]>,
  overrides: Partial<RegionalVariantsGroup> = {},
): RegionalVariantsGroup {
  return {
    uuid,
    label: 'Group',
    type: 'FTYPE_LANGUAGES',
    isRoot: true,
    variants: variants.map(([api, label]) => ({
      api_value: api,
      internal_unique_value: api,
      label,
    })),
    ...overrides,
  };
}

afterEach(() => {
  document.body.innerHTML = '';
});

describe('<sfx-regional-settings>', () => {
  describe('rendering', () => {
    it('renders nothing when no groups are provided', async () => {
      const el = await mount((e) => {
        e.groups = [];
        e.selectedFilters = {};
      });
      expect(el.shadowRoot!.querySelector('.trigger')).toBeNull();
    });

    it('renders nothing when every group has fewer than 2 variants', async () => {
      const el = await mount((e) => {
        e.groups = [makeGroup('a', [['en', 'English']])];
        e.selectedFilters = {};
      });
      expect(el.shadowRoot!.querySelector('.trigger')).toBeNull();
    });

    it('summarizes the variant in title/aria-label when there is exactly one multi-variant group', async () => {
      const el = await mount((e) => {
        e.groups = [
          makeGroup('lang', [
            ['en', 'English'],
            ['fr', 'Français'],
          ], { label: 'Languages' }),
        ];
        e.selectedFilters = { lang: 'fr' };
      });
      const trigger = el.shadowRoot!.querySelector('.trigger');
      expect(trigger?.getAttribute('title')).toBe('Français');
      expect(trigger?.getAttribute('aria-label')).toContain('Français');
    });

    it('summarizes each group in title/aria-label when more than one group is multi-variant', async () => {
      const el = await mount((e) => {
        e.groups = [
          makeGroup('lang', [['en', 'En'], ['fr', 'Fr']], { label: 'Languages', type: 'FTYPE_LANGUAGES' }),
          makeGroup('cur', [['USD', 'USD'], ['EUR', 'EUR']], { label: 'Currencies', type: 'FTYPE_CURRENCIES' }),
        ];
        e.selectedFilters = { lang: 'fr', cur: 'EUR' };
      });
      const trigger = el.shadowRoot!.querySelector('.trigger');
      expect(trigger?.getAttribute('title')).toBe('Languages: Fr, Currencies: EUR');
    });

    it('renders Globe icon + "Regional settings" label + chevron in the trigger', async () => {
      const el = await mount((e) => {
        e.groups = [makeGroup('lang', [['en', 'En'], ['fr', 'Fr']])];
        e.selectedFilters = { lang: 'en' };
      });
      expect(el.shadowRoot!.querySelector('.trigger-icon svg')).not.toBeNull();
      const label = el.shadowRoot!.querySelector('.trigger-label');
      expect(label?.textContent?.trim()).toBe('Regional settings');
      expect(el.shadowRoot!.querySelector('.trigger-chevron')).not.toBeNull();
    });

    it('rotates the chevron via the .open class when the dropdown is open', async () => {
      const el = await mount((e) => {
        e.groups = [makeGroup('lang', [['en', 'En'], ['fr', 'Fr']])];
        e.selectedFilters = { lang: 'en' };
      });
      let chevron = el.shadowRoot!.querySelector('.trigger-chevron');
      expect(chevron?.classList.contains('open')).toBe(false);
      (el.shadowRoot!.querySelector('.trigger') as HTMLButtonElement).click();
      await el.updateComplete;
      chevron = el.shadowRoot!.querySelector('.trigger-chevron');
      expect(chevron?.classList.contains('open')).toBe(true);
    });
  });

  describe('dropdown behavior', () => {
    async function open(el: RegionalSettingsEl) {
      (el.shadowRoot!.querySelector('.trigger') as HTMLButtonElement).click();
      await el.updateComplete;
    }

    it('lists every variant under its group header', async () => {
      const el = await mount((e) => {
        e.groups = [
          makeGroup('lang', [['en', 'English'], ['fr', 'Français']], {
            label: 'Languages',
          }),
          makeGroup('cur', [['USD', 'US Dollar'], ['EUR', 'Euro']], {
            label: 'Currencies',
            type: 'FTYPE_CURRENCIES',
          }),
        ];
        e.selectedFilters = { lang: 'en', cur: 'USD' };
      });
      await open(el);

      const headers = Array.from(
        el.shadowRoot!.querySelectorAll('.group-header'),
      ).map((h) => h.textContent?.trim());
      expect(headers).toEqual(['Languages', 'Currencies']);

      const options = Array.from(
        el.shadowRoot!.querySelectorAll('.option'),
      ).map((o) => o.textContent?.trim());
      expect(options).toEqual(['English', 'Français', 'US Dollar', 'Euro']);
    });

    it('marks the active variant as selected', async () => {
      const el = await mount((e) => {
        e.groups = [makeGroup('lang', [['en', 'En'], ['fr', 'Fr']])];
        e.selectedFilters = { lang: 'fr' };
      });
      await open(el);
      const options = el.shadowRoot!.querySelectorAll('.option');
      expect(options[0].classList.contains('selected')).toBe(false);
      expect(options[1].classList.contains('selected')).toBe(true);
    });

    it('emits regional-change with { groupUuid, value } on click', async () => {
      const el = await mount((e) => {
        e.groups = [makeGroup('lang', [['en', 'En'], ['fr', 'Fr']])];
        e.selectedFilters = { lang: 'en' };
      });
      const events: Array<CustomEvent<{ groupUuid: string; value: string }>> = [];
      el.addEventListener('regional-change', (e) =>
        events.push(e as CustomEvent<{ groupUuid: string; value: string }>),
      );

      await open(el);
      (el.shadowRoot!.querySelectorAll<HTMLElement>('.option')[1]).click();
      await el.updateComplete;

      expect(events).toHaveLength(1);
      expect(events[0].detail).toEqual({ groupUuid: 'lang', value: 'fr' });
    });

    it('does not emit when re-selecting the active variant', async () => {
      const el = await mount((e) => {
        e.groups = [makeGroup('lang', [['en', 'En'], ['fr', 'Fr']])];
        e.selectedFilters = { lang: 'fr' };
      });
      const events: CustomEvent[] = [];
      el.addEventListener('regional-change', (e) => events.push(e as CustomEvent));

      await open(el);
      (el.shadowRoot!.querySelectorAll<HTMLElement>('.option')[1]).click();
      expect(events).toHaveLength(0);
    });

    it('emits the right groupUuid for each group on cross-group selection', async () => {
      const el = await mount((e) => {
        e.groups = [
          makeGroup('lang', [['en', 'En'], ['fr', 'Fr']], { type: 'FTYPE_LANGUAGES' }),
          makeGroup('cur', [['USD', 'USD'], ['EUR', 'EUR']], { type: 'FTYPE_CURRENCIES' }),
        ];
        e.selectedFilters = { lang: 'en', cur: 'USD' };
      });
      const events: Array<CustomEvent<{ groupUuid: string; value: string }>> = [];
      el.addEventListener('regional-change', (e) =>
        events.push(e as CustomEvent<{ groupUuid: string; value: string }>),
      );

      await open(el);
      const allOpts = el.shadowRoot!.querySelectorAll<HTMLElement>('.option');
      allOpts[3].click(); // EUR — 4th option overall (lang × 2 + cur idx 1)
      await el.updateComplete;

      expect(events).toHaveLength(1);
      expect(events[0].detail).toEqual({ groupUuid: 'cur', value: 'EUR' });
    });
  });

  describe('keyboard navigation', () => {
    async function open(el: RegionalSettingsEl) {
      (el.shadowRoot!.querySelector('.trigger') as HTMLButtonElement).click();
      await el.updateComplete;
    }
    function press(el: RegionalSettingsEl, key: string) {
      const trigger = el.shadowRoot!.querySelector('.trigger') as HTMLElement;
      trigger.dispatchEvent(
        new KeyboardEvent('keydown', { key, bubbles: true, cancelable: true }),
      );
    }

    it('opens with ArrowDown when closed', async () => {
      const el = await mount((e) => {
        e.groups = [makeGroup('lang', [['en', 'En'], ['fr', 'Fr']])];
        e.selectedFilters = { lang: 'en' };
      });
      press(el, 'ArrowDown');
      await el.updateComplete;
      expect(el.shadowRoot!.querySelector('.dropdown')).not.toBeNull();
    });

    it('moves the active index with ArrowDown / ArrowUp', async () => {
      const el = await mount((e) => {
        e.groups = [makeGroup('lang', [['en', 'En'], ['fr', 'Fr'], ['de', 'De']])];
        e.selectedFilters = { lang: 'en' };
      });
      await open(el);
      // Opens with selected (en, index 0).
      press(el, 'ArrowDown');
      await el.updateComplete;
      let active = el.shadowRoot!.querySelectorAll<HTMLElement>('.option')[1];
      expect(active.classList.contains('active')).toBe(true);

      press(el, 'ArrowDown');
      await el.updateComplete;
      active = el.shadowRoot!.querySelectorAll<HTMLElement>('.option')[2];
      expect(active.classList.contains('active')).toBe(true);

      press(el, 'ArrowUp');
      await el.updateComplete;
      active = el.shadowRoot!.querySelectorAll<HTMLElement>('.option')[1];
      expect(active.classList.contains('active')).toBe(true);
    });

    it('selects the active option on Enter', async () => {
      const el = await mount((e) => {
        e.groups = [makeGroup('lang', [['en', 'En'], ['fr', 'Fr']])];
        e.selectedFilters = { lang: 'en' };
      });
      const events: CustomEvent[] = [];
      el.addEventListener('regional-change', (e) => events.push(e as CustomEvent));

      await open(el);
      press(el, 'ArrowDown');
      await el.updateComplete;
      press(el, 'Enter');
      await el.updateComplete;

      expect(events).toHaveLength(1);
      expect((events[0] as CustomEvent).detail).toEqual({
        groupUuid: 'lang',
        value: 'fr',
      });
    });

    it('closes the dropdown on Escape', async () => {
      const el = await mount((e) => {
        e.groups = [makeGroup('lang', [['en', 'En'], ['fr', 'Fr']])];
        e.selectedFilters = { lang: 'en' };
      });
      await open(el);
      expect(el.shadowRoot!.querySelector('.dropdown')).not.toBeNull();
      press(el, 'Escape');
      await el.updateComplete;
      expect(el.shadowRoot!.querySelector('.dropdown')).toBeNull();
    });
  });
});
