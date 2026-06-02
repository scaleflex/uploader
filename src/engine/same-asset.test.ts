import { describe, it, expect } from 'vitest';
import {
  SAME_ASSET_EXISTS_CODE,
  isSameAssetExists,
  buildSameAssetResponse,
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
