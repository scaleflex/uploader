import { REGIONAL_VARIANT_TYPE } from './constants';

/**
 * Regression guard: these wire values come from the Filerobot BE. Admin v5
 * defines the same constants in
 * features/settings/pages/metadata/metadata.constants.ts. If anyone shortens
 * them back to bare `LANGUAGES` etc. the regional-variants lookup silently
 * stops matching and every regional field falls back to the user locale.
 */
describe('REGIONAL_VARIANT_TYPE', () => {
  it('uses the FTYPE_-prefixed wire values', () => {
    expect(REGIONAL_VARIANT_TYPE.LANGUAGES).toBe('FTYPE_LANGUAGES');
    expect(REGIONAL_VARIANT_TYPE.CURRENCIES).toBe('FTYPE_CURRENCIES');
    expect(REGIONAL_VARIANT_TYPE.CUSTOM).toBe('FTYPE_CUSTOM');
  });
});
