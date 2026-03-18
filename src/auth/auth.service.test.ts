import { getApiBase, exchangeSassKey, buildAuthHeaders, resolveAuth } from './auth.service';
import type { SecurityTemplateAuth, SassKeyAuth, SessionAuth } from './auth.types';

describe('getApiBase', () => {
  it('returns Scaleflex API URL with container', () => {
    expect(getApiBase('my-container')).toBe('https://api.filerobot.com/my-container');
  });
});

describe('buildAuthHeaders', () => {
  it('builds headers for security-template mode with resolved key', () => {
    const auth: SecurityTemplateAuth = {
      mode: 'security-template',
      container: 'test',
      securityTemplateId: 'SECU_123',
    };
    const headers = buildAuthHeaders(auth, 'resolved-sass-key');
    expect(headers['X-Filerobot-Key']).toBe('resolved-sass-key');
  });

  it('falls back to template ID when no resolved key', () => {
    const auth: SecurityTemplateAuth = {
      mode: 'security-template',
      container: 'test',
      securityTemplateId: 'SECU_123',
    };
    const headers = buildAuthHeaders(auth);
    expect(headers['X-Filerobot-Key']).toBe('SECU_123');
  });

  it('builds headers for sass-key mode', () => {
    const auth: SassKeyAuth = {
      mode: 'sass-key',
      container: 'test',
      sassKey: 'my-sass-key',
    };
    const headers = buildAuthHeaders(auth);
    expect(headers['X-Filerobot-Key']).toBe('my-sass-key');
  });

  it('builds headers for session mode', () => {
    const auth: SessionAuth = {
      mode: 'session',
      container: 'test',
      sessionToken: 'sess-token',
      companyToken: 'comp-token',
      projectToken: 'proj-token',
    };
    const headers = buildAuthHeaders(auth);
    expect(headers['X-Filerobot-Session']).toBe('sess-token');
    expect(headers['X-Company-Token']).toBe('comp-token');
    expect(headers['X-Project-Token']).toBe('proj-token');
  });

  it('omits optional session tokens when not provided', () => {
    const auth: SessionAuth = {
      mode: 'session',
      container: 'test',
      sessionToken: 'sess-token',
    };
    const headers = buildAuthHeaders(auth);
    expect(headers['X-Filerobot-Session']).toBe('sess-token');
    expect(headers['X-Company-Token']).toBeUndefined();
    expect(headers['X-Project-Token']).toBeUndefined();
  });

  it('includes airboxPuid header when set', () => {
    const auth: SassKeyAuth = {
      mode: 'sass-key',
      container: 'test',
      sassKey: 'key',
      airboxPuid: 'puid-123',
    };
    const headers = buildAuthHeaders(auth);
    expect(headers['X-Filerobot-Airbox-Puid']).toBe('puid-123');
  });
});

describe('exchangeSassKey', () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('returns the SASS key on success', async () => {
    vi.spyOn(globalThis, 'fetch').mockResolvedValue(
      new Response(JSON.stringify({ status: 'success', key: 'resolved-key' }), { status: 200 }),
    );

    const key = await exchangeSassKey('my-container', 'SECU_123');
    expect(key).toBe('resolved-key');
    expect(fetch).toHaveBeenCalledWith(
      'https://api.filerobot.com/my-container/key/SECU_123',
      expect.objectContaining({ signal: expect.any(AbortSignal) }),
    );
  });

  it('throws on HTTP error', async () => {
    vi.spyOn(globalThis, 'fetch').mockResolvedValue(
      new Response('', { status: 403 }),
    );

    await expect(exchangeSassKey('c', 'S')).rejects.toThrow('HTTP 403');
  });

  it('throws on API error status', async () => {
    vi.spyOn(globalThis, 'fetch').mockResolvedValue(
      new Response(JSON.stringify({ status: 'error', msg: 'Invalid template' }), { status: 200 }),
    );

    await expect(exchangeSassKey('c', 'S')).rejects.toThrow('Invalid template');
  });
});

describe('resolveAuth', () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('exchanges SASS key for security-template mode', async () => {
    vi.spyOn(globalThis, 'fetch').mockResolvedValue(
      new Response(JSON.stringify({ status: 'success', key: 'sass-key-123' }), { status: 200 }),
    );

    const result = await resolveAuth({
      mode: 'security-template',
      container: 'my-container',
      securityTemplateId: 'SECU_1',
    });

    expect(result.apiBase).toBe('https://api.filerobot.com/my-container');
    expect(result.headers['X-Filerobot-Key']).toBe('sass-key-123');
    expect(result.sassKey).toBe('sass-key-123');
  });

  it('skips exchange for sass-key mode', async () => {
    const fetchSpy = vi.spyOn(globalThis, 'fetch');

    const result = await resolveAuth({
      mode: 'sass-key',
      container: 'my-container',
      sassKey: 'direct-key',
    });

    expect(fetchSpy).not.toHaveBeenCalled();
    expect(result.headers['X-Filerobot-Key']).toBe('direct-key');
    expect(result.sassKey).toBeUndefined();
  });
});
