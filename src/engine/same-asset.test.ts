import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import {
  SAME_ASSET_EXISTS_CODE,
  isSameAssetExists,
  buildSameAssetResponse,
  fetchSameAssetResponse,
} from './same-asset';
import { makeUploadFile } from '../test-utils';
import type { UploadResponse } from '../store/store.types';

// The real backend body for an already-existing asset — note: no `file` object.
const sameAssetBody = {
  status: 'error',
  code: SAME_ASSET_EXISTS_CODE,
  msg: 'The same file with the same content already exists in requested directory.',
  hint: 'This file has already been uploaded.',
  similar_file_path: '',
  existing_file_uuid: 'e176a9d7-71c9-5de9-bc6a-98fadf350000',
  info: {
    version: 4.46,
    uniq_id: 'AsIAH97Sd6j4eeO',
    project_uuid: '2ad5b42d-84d3-4278-a44c-defe988d427b',
    company_uuid: '7062f363-39f8-423d-b150-6de2c89b8027',
  },
} as unknown as UploadResponse;

describe('isSameAssetExists', () => {
  it('is true for the SAME_ASSET_EXISTS_SKIP_UPLOAD code', () => {
    expect(isSameAssetExists(sameAssetBody)).toBe(true);
  });

  it('is false for an ordinary error', () => {
    expect(isSameAssetExists({ status: 'error', msg: 'boom' } as UploadResponse)).toBe(false);
  });

  it('is false for a success body and for nullish input', () => {
    expect(isSameAssetExists({ status: 'success' } as UploadResponse)).toBe(false);
    expect(isSameAssetExists(null)).toBe(false);
    expect(isSameAssetExists(undefined)).toBe(false);
  });
});

describe('buildSameAssetResponse', () => {
  it('synthesizes a success response using existing_file_uuid as the asset uuid', () => {
    const uploadFile = makeUploadFile({
      id: 'f1',
      name: 'avatar1.jpg',
      type: 'image/jpeg',
      size: 1234,
    });

    const result = buildSameAssetResponse(sameAssetBody, uploadFile);

    expect(result.status).toBe('success');
    expect(result.file.uuid).toBe('e176a9d7-71c9-5de9-bc6a-98fadf350000');
    expect(result.file.name).toBe('avatar1.jpg');
    expect(result.file.extension).toBe('jpg');
    expect(result.file.type).toBe('image/jpeg');
    expect(result.file.size).toBe(1234);
    // No URL is returned by the backend in this case.
    expect(result.file.url.cdn).toBe('');
  });

  it('preserves the original code and existing_file_uuid for consumers', () => {
    const result = buildSameAssetResponse(sameAssetBody, makeUploadFile({ id: 'f1' }));
    expect(result.code).toBe(SAME_ASSET_EXISTS_CODE);
    expect(result.existing_file_uuid).toBe('e176a9d7-71c9-5de9-bc6a-98fadf350000');
    expect(result.similar_file_path).toBe('');
    expect(isSameAssetExists(result)).toBe(true);
  });

  it('keeps an existing file object if the backend ever provides one', () => {
    const withFile = {
      ...sameAssetBody,
      file: {
        uuid: 'real-uuid',
        name: 'x.png',
        extension: 'png',
        type: 'image/png',
        size: 1,
        url: { public: 'p', cdn: 'c' },
        meta: {},
        tags: [],
        info: {},
        created_at: '',
        modified_at: '',
      },
    } as UploadResponse;

    const result = buildSameAssetResponse(withFile, makeUploadFile({ id: 'f1' }));
    expect(result.file.uuid).toBe('real-uuid');
  });
});

describe('fetchSameAssetResponse', () => {
  const apiBase = 'https://api.filerobot.com/mycontainer';
  const authHeaders = { 'X-Filerobot-Key': 'test-key' };

  beforeEach(() => {
    vi.stubGlobal('fetch', vi.fn());
  });

  afterEach(() => {
    vi.unstubAllGlobals();
  });

  it('returns a success response with the real file URLs when the UUID fetch succeeds', async () => {
    const fetchedFile = {
      uuid: 'e176a9d7-71c9-5de9-bc6a-98fadf350000',
      name: 'avatar1.jpg',
      extension: 'jpg',
      type: 'image/jpeg',
      size: 1234,
      url: { public: 'https://cdn.filerobot.com/avatar1.jpg', cdn: 'https://cdn.filerobot.com/avatar1.jpg' },
      meta: {},
      tags: [],
      info: {},
      created_at: '2024-01-01T00:00:00Z',
      modified_at: '2024-01-01T00:00:00Z',
    };

    vi.mocked(fetch).mockResolvedValue({
      ok: true,
      json: async () => ({ status: 'success', file: fetchedFile }),
    } as Response);

    const uploadFile = makeUploadFile({ id: 'f1', name: 'avatar1.jpg' });
    const result = await fetchSameAssetResponse(sameAssetBody, uploadFile, apiBase, authHeaders);

    expect(fetch).toHaveBeenCalledWith(
      `${apiBase}/v4/files/e176a9d7-71c9-5de9-bc6a-98fadf350000`,
      { headers: authHeaders },
    );
    expect(result.status).toBe('success');
    expect(result.file.url.cdn).toBe('https://cdn.filerobot.com/avatar1.jpg');
    expect(result.file.url.public).toBe('https://cdn.filerobot.com/avatar1.jpg');
    // Preserves original code/existing_file_uuid for consumers
    expect(result.code).toBe(SAME_ASSET_EXISTS_CODE);
    expect(result.existing_file_uuid).toBe('e176a9d7-71c9-5de9-bc6a-98fadf350000');
  });

  it('falls back to the synthesized empty-URL response when the fetch fails', async () => {
    vi.mocked(fetch).mockRejectedValue(new Error('Network error'));

    const uploadFile = makeUploadFile({ id: 'f1', name: 'avatar1.jpg', size: 1234, type: 'image/jpeg' });
    const result = await fetchSameAssetResponse(sameAssetBody, uploadFile, apiBase, authHeaders);

    expect(result.status).toBe('success');
    expect(result.file.url.cdn).toBe('');
    expect(result.file.uuid).toBe('e176a9d7-71c9-5de9-bc6a-98fadf350000');
  });

  it('falls back when the API returns a non-ok status', async () => {
    vi.mocked(fetch).mockResolvedValue({ ok: false, status: 404 } as Response);

    const uploadFile = makeUploadFile({ id: 'f1' });
    const result = await fetchSameAssetResponse(sameAssetBody, uploadFile, apiBase, authHeaders);

    expect(result.status).toBe('success');
    expect(result.file.url.cdn).toBe('');
  });

  it('falls back when there is no existing_file_uuid', async () => {
    const bodyWithoutUuid = { ...sameAssetBody, existing_file_uuid: undefined } as UploadResponse;
    const uploadFile = makeUploadFile({ id: 'f1' });
    const result = await fetchSameAssetResponse(bodyWithoutUuid, uploadFile, apiBase, authHeaders);

    expect(fetch).not.toHaveBeenCalled();
    expect(result.status).toBe('success');
    expect(result.file.url.cdn).toBe('');
  });
});
