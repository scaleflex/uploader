import { getProviderSources } from './provider-registry';

describe('getProviderSources', () => {
  it('returns SourceDef for valid provider IDs', () => {
    const sources = getProviderSources(['google-drive', 'dropbox']);
    expect(sources).toHaveLength(2);
    expect(sources[0].id).toBe('google-drive');
    expect(sources[0].label).toBe('Google Drive');
    expect(sources[1].id).toBe('dropbox');
    expect(sources[1].label).toBe('Dropbox');
  });

  it('filters out unknown provider IDs', () => {
    const sources = getProviderSources(['google-drive', 'invalid-provider' as any]);
    expect(sources).toHaveLength(1);
    expect(sources[0].id).toBe('google-drive');
  });

  it('returns all 7 providers when all are requested', () => {
    const sources = getProviderSources([
      'google-drive', 'dropbox', 'onedrive', 'box',
      'instagram', 'facebook', 'unsplash',
    ]);
    expect(sources).toHaveLength(7);
  });

  it('returns empty array for empty input', () => {
    expect(getProviderSources([])).toEqual([]);
  });

  it('each source has icon and fillIcon=true', () => {
    const sources = getProviderSources(['google-drive', 'dropbox']);
    for (const source of sources) {
      expect(source.icon).toBeTruthy();
      expect(source.fillIcon).toBe(true);
    }
  });
});
