import { generateFileId, formatFileSize, getFileCategory, getFileExtension, guessMimeType } from './file-utils';

describe('generateFileId', () => {
  it('returns unique IDs', () => {
    const a = generateFileId();
    const b = generateFileId();
    expect(a).not.toBe(b);
  });

  it('starts with "file-"', () => {
    expect(generateFileId()).toMatch(/^file-/);
  });
});

describe('formatFileSize', () => {
  it('formats 0 bytes', () => {
    expect(formatFileSize(0)).toBe('0 B');
  });

  it('formats bytes', () => {
    expect(formatFileSize(500)).toBe('500 B');
  });

  it('formats kilobytes', () => {
    expect(formatFileSize(1024)).toBe('1.0 KB');
  });

  it('formats megabytes', () => {
    expect(formatFileSize(1024 * 1024)).toBe('1.0 MB');
  });

  it('formats gigabytes', () => {
    expect(formatFileSize(1024 * 1024 * 1024)).toBe('1.0 GB');
  });

  it('formats fractional sizes', () => {
    expect(formatFileSize(1536)).toBe('1.5 KB');
  });
});

describe('getFileCategory', () => {
  it('returns "image" for image MIME types', () => {
    expect(getFileCategory({ name: 'photo.jpg', type: 'image/jpeg' })).toBe('image');
  });

  it('returns "vid" for video MIME types', () => {
    expect(getFileCategory({ name: 'clip.mp4', type: 'video/mp4' })).toBe('vid');
  });

  it('returns "vid" for video extensions with generic MIME', () => {
    expect(getFileCategory({ name: 'clip.mkv', type: 'application/octet-stream' })).toBe('vid');
  });

  it('returns "pdf" for PDF', () => {
    expect(getFileCategory({ name: 'doc.pdf', type: 'application/pdf' })).toBe('pdf');
  });

  it('returns "doc" for document extensions', () => {
    expect(getFileCategory({ name: 'report.docx', type: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document' })).toBe('doc');
  });

  it('returns "zip" for archive extensions', () => {
    expect(getFileCategory({ name: 'archive.tar', type: 'application/x-tar' })).toBe('zip');
  });

  it('returns "gen" for unknown types', () => {
    expect(getFileCategory({ name: 'data.bin', type: 'application/octet-stream' })).toBe('gen');
  });
});

describe('getFileExtension', () => {
  it('returns uppercase extension', () => {
    expect(getFileExtension('photo.jpg')).toBe('JPG');
  });

  it('returns empty string for no extension', () => {
    expect(getFileExtension('README')).toBe('');
  });

  it('returns last extension for double extensions', () => {
    expect(getFileExtension('archive.tar.gz')).toBe('GZ');
  });
});

describe('guessMimeType', () => {
  it('guesses image/jpeg for .jpg', () => {
    expect(guessMimeType('photo.jpg')).toBe('image/jpeg');
  });

  it('guesses image/png for .png', () => {
    expect(guessMimeType('icon.png')).toBe('image/png');
  });

  it('guesses video/mp4 for .mp4', () => {
    expect(guessMimeType('clip.mp4')).toBe('video/mp4');
  });

  it('returns empty string for unknown extension', () => {
    expect(guessMimeType('data.xyz')).toBe('');
  });

  it('is case-insensitive', () => {
    expect(guessMimeType('PHOTO.JPG')).toBe('image/jpeg');
  });
});
