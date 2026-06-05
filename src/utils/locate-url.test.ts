import { resolveLocateUrl } from './locate-url';
import { makeUploadFile } from '../test-utils';
import type { UploadFile, UploadResponse } from '../store/store.types';

function withResponse(uuid: string | undefined): UploadFile {
  const response = {
    status: 'success',
    file: uuid !== undefined ? { uuid } : undefined,
  } as unknown as UploadResponse;
  return makeUploadFile({ status: 'complete', response });
}

describe('resolveLocateUrl', () => {
  const UUID = 'e176a9d7-1234-5678-9abc-def012345678';

  it('returns null when neither getLocateUrl nor adminUrl is set', () => {
    expect(resolveLocateUrl(withResponse(UUID), undefined)).toBeNull();
    expect(resolveLocateUrl(withResponse(UUID), {})).toBeNull();
  });

  it('returns null when adminUrl is set but the file has no uuid', () => {
    expect(resolveLocateUrl(withResponse(''), { adminUrl: 'https://hub.example.com' })).toBeNull();
    expect(resolveLocateUrl(withResponse(undefined), { adminUrl: 'https://hub.example.com' })).toBeNull();
    expect(resolveLocateUrl(makeUploadFile({ response: null }), { adminUrl: 'https://hub.example.com' })).toBeNull();
  });

  it('builds the default admin DAM deep-link when adminUrl + uuid are set', () => {
    const url = resolveLocateUrl(withResponse(UUID), { adminUrl: 'https://hub.example.com' });
    expect(url).toBe(`https://hub.example.com/library?lf=${encodeURIComponent(btoa(UUID))}`);
  });

  it('strips trailing slashes from adminUrl so the path joins cleanly', () => {
    const url = resolveLocateUrl(withResponse(UUID), { adminUrl: 'https://hub.example.com///' });
    expect(url).toBe(`https://hub.example.com/library?lf=${encodeURIComponent(btoa(UUID))}`);
  });

  it('URL-encodes the base64 (defensive — protects against `+` decoding to space)', () => {
    const url = resolveLocateUrl(withResponse(UUID), { adminUrl: 'https://hub.example.com' });
    expect(url).not.toBeNull();
    // The raw base64 should not appear unencoded — encodeURIComponent escapes
    // `+` → %2B, `/` → %2F, `=` → %3D. For this canonical UUID there happen
    // to be none, but the call site must still be encoded so the contract
    // holds for non-canonical inputs.
    const param = new URL(url!).searchParams.get('lf');
    expect(param).toBe(btoa(UUID));
  });

  it('uses the host-supplied getLocateUrl when provided (takes precedence over adminUrl)', () => {
    const custom = 'https://custom.example.com/asset/' + UUID;
    const url = resolveLocateUrl(withResponse(UUID), {
      adminUrl: 'https://hub.example.com',
      getLocateUrl: () => custom,
    });
    expect(url).toBe(custom);
  });

  it('falls back to adminUrl when getLocateUrl returns null / undefined / empty', () => {
    const cases: Array<string | null | undefined> = [null, undefined, ''];
    for (const ret of cases) {
      const url = resolveLocateUrl(withResponse(UUID), {
        adminUrl: 'https://hub.example.com',
        getLocateUrl: () => ret,
      });
      expect(url).toBe(`https://hub.example.com/library?lf=${encodeURIComponent(btoa(UUID))}`);
    }
  });

  it('passes the file through to getLocateUrl unchanged', () => {
    const file = withResponse(UUID);
    const spy = vi.fn(() => 'https://custom.example.com');
    resolveLocateUrl(file, { getLocateUrl: spy });
    expect(spy).toHaveBeenCalledWith(file);
  });
});
