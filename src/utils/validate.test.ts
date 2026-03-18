import { validateFile, buildAcceptString } from './validate';
import { makeUploadFile, makeRestrictions } from '../test-utils';
import type { UploadFile } from '../store/store.types';

function makeFile(name: string, size: number, type: string): File {
  const content = new Uint8Array(size);
  return new File([content], name, { type });
}

describe('validateFile', () => {
  const noFiles = new Map<string, UploadFile>();

  it('returns null when no restrictions are set', () => {
    const file = makeFile('test.png', 1000, 'image/png');
    expect(validateFile(file, makeRestrictions(), noFiles)).toBeNull();
  });

  describe('maxFileSize', () => {
    it('rejects files exceeding max size', () => {
      const file = makeFile('big.png', 6_000_000, 'image/png');
      const restrictions = makeRestrictions({ maxFileSize: 5_000_000 });
      expect(validateFile(file, restrictions, noFiles)).toContain('MB limit');
    });

    it('accepts files within max size', () => {
      const file = makeFile('small.png', 1000, 'image/png');
      const restrictions = makeRestrictions({ maxFileSize: 5_000_000 });
      expect(validateFile(file, restrictions, noFiles)).toBeNull();
    });
  });

  describe('maxTotalFilesSize', () => {
    it('rejects when total size exceeds limit', () => {
      const existing = new Map<string, UploadFile>();
      existing.set('f1', makeUploadFile({ id: 'f1', size: 4_000_000 }));
      const file = makeFile('new.png', 2_000_000, 'image/png');
      const restrictions = makeRestrictions({ maxTotalFilesSize: 5_000_000 });
      expect(validateFile(file, restrictions, existing)).toContain('Total file size');
    });

    it('accepts when total is within limit', () => {
      const existing = new Map<string, UploadFile>();
      existing.set('f1', makeUploadFile({ id: 'f1', size: 1_000_000 }));
      const file = makeFile('new.png', 1_000_000, 'image/png');
      const restrictions = makeRestrictions({ maxTotalFilesSize: 5_000_000 });
      expect(validateFile(file, restrictions, existing)).toBeNull();
    });
  });

  describe('maxNumberOfFiles', () => {
    it('rejects when at max file count', () => {
      const existing = new Map<string, UploadFile>();
      existing.set('f1', makeUploadFile({ id: 'f1' }));
      existing.set('f2', makeUploadFile({ id: 'f2' }));
      const file = makeFile('new.png', 100, 'image/png');
      const restrictions = makeRestrictions({ maxNumberOfFiles: 2 });
      expect(validateFile(file, restrictions, existing)).toContain('Maximum 2');
    });

    it('accepts when under max file count', () => {
      const existing = new Map<string, UploadFile>();
      existing.set('f1', makeUploadFile({ id: 'f1' }));
      const file = makeFile('new.png', 100, 'image/png');
      const restrictions = makeRestrictions({ maxNumberOfFiles: 5 });
      expect(validateFile(file, restrictions, existing)).toBeNull();
    });
  });

  describe('allowedFileTypes', () => {
    it('allows wildcard MIME match (image/*)', () => {
      const file = makeFile('photo.jpg', 100, 'image/jpeg');
      const restrictions = makeRestrictions({ allowedFileTypes: ['image/*'] });
      expect(validateFile(file, restrictions, noFiles)).toBeNull();
    });

    it('rejects non-matching wildcard', () => {
      const file = makeFile('video.mp4', 100, 'video/mp4');
      const restrictions = makeRestrictions({ allowedFileTypes: ['image/*'] });
      expect(validateFile(file, restrictions, noFiles)).toContain('not allowed');
    });

    it('allows exact MIME match', () => {
      const file = makeFile('photo.png', 100, 'image/png');
      const restrictions = makeRestrictions({ allowedFileTypes: ['image/png'] });
      expect(validateFile(file, restrictions, noFiles)).toBeNull();
    });

    it('allows extension match', () => {
      const file = makeFile('photo.jpg', 100, 'image/jpeg');
      const restrictions = makeRestrictions({ allowedFileTypes: ['.jpg'] });
      expect(validateFile(file, restrictions, noFiles)).toBeNull();
    });

    it('rejects non-matching extension', () => {
      const file = makeFile('photo.png', 100, 'image/png');
      const restrictions = makeRestrictions({ allowedFileTypes: ['.jpg'] });
      expect(validateFile(file, restrictions, noFiles)).toContain('not allowed');
    });
  });

  describe('blockedFileTypes', () => {
    it('blocks matching extension', () => {
      const file = makeFile('script.exe', 100, 'application/x-msdownload');
      const restrictions = makeRestrictions({ blockedFileTypes: ['.exe'] });
      expect(validateFile(file, restrictions, noFiles)).toContain('blocked');
    });

    it('blocks matching MIME type', () => {
      const file = makeFile('script.exe', 100, 'application/x-msdownload');
      const restrictions = makeRestrictions({ blockedFileTypes: ['application/x-msdownload'] });
      expect(validateFile(file, restrictions, noFiles)).toContain('blocked');
    });

    it('allows non-blocked types', () => {
      const file = makeFile('photo.png', 100, 'image/png');
      const restrictions = makeRestrictions({ blockedFileTypes: ['.exe'] });
      expect(validateFile(file, restrictions, noFiles)).toBeNull();
    });
  });
});

describe('buildAcceptString', () => {
  it('returns empty string when no allowedFileTypes', () => {
    expect(buildAcceptString(makeRestrictions())).toBe('');
  });

  it('joins allowed types with commas', () => {
    const restrictions = makeRestrictions({ allowedFileTypes: ['image/*', '.pdf'] });
    expect(buildAcceptString(restrictions)).toBe('image/*,.pdf');
  });
});
