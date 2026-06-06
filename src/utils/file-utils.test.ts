import { generateFileId, formatFileSize, formatEta, getFileCategory, getFileExtension, guessMimeType, isSystemFile } from './file-utils';

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

  it('falls back to "0 B" for non-finite / missing input', () => {
    expect(formatFileSize(NaN)).toBe('0 B');
    expect(formatFileSize(Infinity)).toBe('0 B');
    expect(formatFileSize(-1)).toBe('0 B');
    expect(formatFileSize(undefined as unknown as number)).toBe('0 B');
    expect(formatFileSize(null as unknown as number)).toBe('0 B');
  });
});

describe('formatEta', () => {
  it('returns "0s" for non-positive or non-finite input', () => {
    expect(formatEta(0)).toBe('0s');
    expect(formatEta(-5)).toBe('0s');
    expect(formatEta(NaN)).toBe('0s');
    expect(formatEta(Infinity)).toBe('0s');
  });

  it('formats seconds only when under a minute', () => {
    expect(formatEta(45)).toBe('45s');
    expect(formatEta(59)).toBe('59s');
  });

  it('formats minutes and seconds for sub-hour values', () => {
    expect(formatEta(60)).toBe('1m');
    expect(formatEta(90)).toBe('1m 30s');
    expect(formatEta(99 * 60)).toBe('99m');
  });

  it('rolls up to hours once minutes exceed 99', () => {
    expect(formatEta(100 * 60)).toBe('1h 40m');
    expect(formatEta(336 * 60)).toBe('5h 36m');
    expect(formatEta(6 * 3600)).toBe('6h');
  });

  it('drops seconds at hour scale', () => {
    // 100m + 30s — seconds are intentionally dropped at hour scale
    expect(formatEta(100 * 60 + 30)).toBe('1h 40m');
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

describe('isSystemFile', () => {
  it('matches .DS_Store', () => {
    expect(isSystemFile('.DS_Store')).toBe(true);
  });

  it('matches Thumbs.db', () => {
    expect(isSystemFile('Thumbs.db')).toBe(true);
  });

  it('matches desktop.ini', () => {
    expect(isSystemFile('desktop.ini')).toBe(true);
  });

  it('is case-insensitive', () => {
    expect(isSystemFile('.ds_store')).toBe(true);
    expect(isSystemFile('THUMBS.DB')).toBe(true);
  });

  it('matches when the file has a directory path prefix', () => {
    expect(isSystemFile('folder/.DS_Store')).toBe(true);
    expect(isSystemFile('a\\b\\Thumbs.db')).toBe(true);
  });

  it('does not match regular files', () => {
    expect(isSystemFile('photo.jpg')).toBe(false);
    expect(isSystemFile('document.pdf')).toBe(false);
    expect(isSystemFile('my-thumbs.db.txt')).toBe(false);
  });
});
