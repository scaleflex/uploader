import './number-field';
import type { MetadataField, MetadataFieldType } from '../schema/schema.types';
import { SfxMetaNumberField } from './number-field';

function makeField(type: MetadataFieldType): MetadataField {
  return {
    key: 'k',
    ckey: 'ck',
    uuid: 'u',
    title: 'My Field',
    type,
    required: 0,
    possible_values: [],
    regional_variants_group_uuid: null,
    permissions: [],
  };
}

async function mount(type: MetadataFieldType): Promise<SfxMetaNumberField> {
  const el = document.createElement('sfx-meta-number-field') as SfxMetaNumberField;
  el.field = makeField(type);
  document.body.appendChild(el);
  await el.updateComplete;
  return el;
}

function getInput(el: SfxMetaNumberField): HTMLInputElement {
  return el.shadowRoot!.querySelector('input') as HTMLInputElement;
}

afterEach(() => {
  document.body.innerHTML = '';
});

describe('SfxMetaNumberField — block exponent characters', () => {
  it('prevents "e" keydown on decimal2 fields', async () => {
    const el = await mount('decimal2');
    const event = new KeyboardEvent('keydown', { key: 'e', cancelable: true });
    getInput(el).dispatchEvent(event);
    expect(event.defaultPrevented).toBe(true);
  });

  it('prevents "E" keydown on numeric fields', async () => {
    const el = await mount('numeric');
    const event = new KeyboardEvent('keydown', { key: 'E', cancelable: true });
    getInput(el).dispatchEvent(event);
    expect(event.defaultPrevented).toBe(true);
  });

  it('still emits field-escape on Escape', async () => {
    const el = await mount('decimal2');
    let received = false;
    el.addEventListener('field-escape', () => {
      received = true;
    });
    const event = new KeyboardEvent('keydown', { key: 'Escape', cancelable: true });
    getInput(el).dispatchEvent(event);
    expect(received).toBe(true);
  });

  it('does not prevent digit keys', async () => {
    const el = await mount('numeric');
    const event = new KeyboardEvent('keydown', { key: '3', cancelable: true });
    getInput(el).dispatchEvent(event);
    expect(event.defaultPrevented).toBe(false);
  });

  it('does not block "e" when combined with Ctrl/Meta/Alt (preserves shortcuts like Ctrl+E)', async () => {
    const el = await mount('decimal2');
    for (const mods of [{ ctrlKey: true }, { metaKey: true }, { altKey: true }]) {
      const event = new KeyboardEvent('keydown', { key: 'e', cancelable: true, ...mods });
      getInput(el).dispatchEvent(event);
      expect(event.defaultPrevented).toBe(false);
    }
  });
});
