let counter = 0;

/** Generate a unique file ID. */
export function generateFileId(): string {
  return `file-${Date.now()}-${++counter}`;
}

/** Format bytes into human-readable string. */
export function formatFileSize(bytes: number): string {
  if (bytes <= 0) return '0 B';
  const units = ['B', 'KB', 'MB', 'GB'];
  const i = Math.min(Math.floor(Math.log(bytes) / Math.log(1024)), units.length - 1);
  const value = bytes / Math.pow(1024, i);
  return `${i === 0 ? value : value.toFixed(1)} ${units[i]}`;
}

/** Format seconds into a human-readable ETA string. */
export function formatEta(seconds: number): string {
  if (!isFinite(seconds) || seconds <= 0) return '0s';
  const total = Math.round(seconds);
  if (total < 60) return `${total}s`;
  const m = Math.floor(total / 60);
  // Roll up to hours once minutes would otherwise exceed two digits.
  if (m > 99) {
    const h = Math.floor(m / 60);
    const mm = m % 60;
    return mm > 0 ? `${h}h ${mm}m` : `${h}h`;
  }
  const s = total % 60;
  return s > 0 ? `${m}m ${s}s` : `${m}m`;
}

/** Detect file type category for icon/color styling. */
export function getFileCategory(file: { name: string; type: string }): string {
  const ext = file.name.split('.').pop()?.toLowerCase() ?? '';
  if (file.type.startsWith('image/')) return 'image';
  if (file.type.startsWith('video/') || ['mp4', 'mov', 'avi', 'webm', 'mkv', 'flv', 'wmv'].includes(ext)) return 'vid';
  if (file.type.startsWith('audio/') || ['mp3', 'wav', 'ogg', 'flac', 'aac', 'm4a', 'wma'].includes(ext)) return 'audio';
  if (file.type === 'application/pdf' || ext === 'pdf') return 'pdf';
  if (['xls', 'xlsx', 'csv', 'tsv', 'ods'].includes(ext)) return 'sheet';
  if (['doc', 'docx', 'txt', 'rtf', 'odt', 'pages'].includes(ext)) return 'doc';
  if (['ppt', 'pptx', 'key', 'odp'].includes(ext)) return 'slide';
  if (['zip', 'rar', '7z', 'tar', 'gz', 'bz2', 'xz', 'zst'].includes(ext)) return 'zip';
  if (['js', 'ts', 'jsx', 'tsx', 'py', 'rb', 'go', 'rs', 'java', 'c', 'cpp', 'h', 'cs', 'php', 'swift', 'kt', 'sh', 'bash'].includes(ext)) return 'code';
  if (['html', 'css', 'scss', 'xml', 'svg', 'json', 'yaml', 'yml', 'toml', 'md', 'mdx', 'ini', 'env', 'log'].includes(ext)) return 'markup';
  if (['ttf', 'otf', 'woff', 'woff2', 'eot'].includes(ext)) return 'font';
  if (['ai', 'psd', 'sketch', 'fig', 'xd', 'indd', 'eps'].includes(ext)) return 'design';
  if (['exe', 'dmg', 'app', 'msi', 'deb', 'rpm', 'apk', 'ipa'].includes(ext)) return 'binary';
  if (['sql', 'db', 'sqlite', 'mdb'].includes(ext)) return 'data';
  return 'gen';
}

/** Get file extension for display. */
export function getFileExtension(name: string): string {
  const dot = name.lastIndexOf('.');
  return dot >= 0 ? name.slice(dot + 1).toUpperCase() : '';
}

// --- File type icon utilities (v3 SVG icons) ---

const FILE_TYPES_ICON_BASE = 'https://scaleflex.cloudimg.io/v7/assets/file-types/v3/';

const FILE_TYPE_HASHES: Record<string, string> = {
  _default: '9a518a',
  // Images
  png: '96cd9a', jpg: '06e819', jpg2: 'f0eb7f', jpeg: '6a65e9', gif: 'c3c2c3',
  bmp: 'd2243a', webp: 'fedd74', svg: 'a15e46', tiff: '1f30c3', tif: 'b383c9',
  heic: '84adfe', avif: '536b30', ico: '79063d', psd: 'be6140', psb: '678646',
  ai: '84b254', dwg: '971fb3',
  // Video
  mp4: '42f175', webm: '26a84a', avi: 'd22ba8', mpeg: 'ba93bb', ogv: '74d453',
  '3gp': 'f0d388', '3g2': '04c652', swf: '3955e2', fla: 'daf585', m3u8: '7d5e62',
  // Audio
  mp3: '66bbef', wav: 'd7a7d5', aac: '07f3f9', oga: 'a5c622', opus: '9548b1',
  weba: '4dcf70', mid: '3f0e29', midi: '9fedec', cda: '85b83b',
  // Documents
  pdf: '18c5f7', doc: 'd1b47c', docx: '1eb6b0', txt: '307979', rtf: '978c5f',
  xls: '13b5f7', xlsx: '79d64a', ppt: '4ee29b', pptx: '8b1568', csv: '4add78',
  odt: '940781', ods: '9fbe9a', odp: 'bf892d', dbf: '457bd4', vsd: '8a9ccb',
  abw: '313dc7', epub: '15263d', azw: 'a018b1', ics: '909f63', ogx: 'f694d2',
  // Archives
  zip: '84f98b', rar: '1d6423', '7z': 'e007e5', tar: '603aed', gz: 'de13f7',
  bz: '0374ff', bz2: 'e14294', arc: '942fad', jar: '149796', mpkg: 'dea655',
  // Fonts
  ttf: 'd2e2c1', otf: 'c904fd', woff: '4b8177', woff2: 'b532d3', eot: 'a54980',
  // Code / Scripts
  js: '524691', mjs: 'd57921', ts: '9af3ae', css: '287863', html: 'fa7a87',
  htm: '21323d', xhtml: 'e6d6a9', xul: '6c9c71', json: '104c9e', jsonld: 'f30c0f',
  xml: '7f7194', php: '503e36', sh: '3b820e', csh: '08c0cc',
  // Executables / Disk images
  exe: 'ccca53', iso: '064b8f', bin: '1e9618',
};

function buildIconUrl(key: string): string {
  const name = key === '_default' ? 'GENERIC' : key.toUpperCase();
  return `${FILE_TYPES_ICON_BASE}${name}.svg?vh=${FILE_TYPE_HASHES[key]}`;
}

/** Get the CDN-hosted file type icon URL for a given extension. */
export function getFileTypeIconUrl(extension: string): string {
  const ext = extension?.toLowerCase().replaceAll('.', '') || '';
  return ext in FILE_TYPE_HASHES ? buildIconUrl(ext) : buildIconUrl('_default');
}

/** Get the default/generic file type icon URL. */
export function getDefaultFileTypeIconUrl(): string {
  return buildIconUrl('_default');
}

const MIME_MAP: Record<string, string> = {
  jpg: 'image/jpeg', jpeg: 'image/jpeg', png: 'image/png', gif: 'image/gif',
  webp: 'image/webp', svg: 'image/svg+xml', bmp: 'image/bmp', ico: 'image/x-icon',
  heic: 'image/heic', heif: 'image/heif',
  mp4: 'video/mp4', mov: 'video/quicktime', avi: 'video/x-msvideo', webm: 'video/webm',
  pdf: 'application/pdf', zip: 'application/zip',
  doc: 'application/msword', docx: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
};

/** Guess MIME type from a filename. */
export function guessMimeType(name: string): string {
  const ext = name.split('.').pop()?.toLowerCase() ?? '';
  return MIME_MAP[ext] || '';
}

/** Returns true for image MIME types that browsers cannot render natively as <img>. */
export function isBrowserUnrenderableImage(mimeType: string): boolean {
  return mimeType === 'image/heic' || mimeType === 'image/heif';
}

/** Generate a thumbnail from the first frame of a video file. Returns a blob URL or null. */
export function generateVideoThumbnail(file: File): Promise<string | null> {
  return new Promise((resolve) => {
    const video = document.createElement('video');
    video.preload = 'metadata';
    video.muted = true;
    video.playsInline = true;

    const url = URL.createObjectURL(file);
    let resolved = false;

    const cleanup = () => {
      if (!resolved) {
        resolved = true;
        resolve(null);
      }
      video.removeAttribute('src');
      video.load();
      URL.revokeObjectURL(url);
    };

    video.addEventListener('seeked', () => {
      try {
        const canvas = document.createElement('canvas');
        canvas.width = video.videoWidth || 320;
        canvas.height = video.videoHeight || 240;
        const ctx = canvas.getContext('2d');
        if (ctx) {
          ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
          canvas.toBlob((blob) => {
            if (resolved) return; // timeout already fired — avoid leaking a blob URL
            resolved = true;
            resolve(blob ? URL.createObjectURL(blob) : null);
            video.removeAttribute('src');
            video.load();
            URL.revokeObjectURL(url);
          }, 'image/jpeg', 0.7);
          return;
        }
      } catch { /* canvas tainted or other error */ }
      cleanup();
    }, { once: true });

    video.addEventListener('error', () => cleanup(), { once: true });

    // Timeout fallback in case video never loads
    setTimeout(() => cleanup(), 5000);

    video.src = url;
    video.addEventListener('loadeddata', () => {
      // Seek to 0.1s to get a meaningful frame (some videos have black first frame)
      video.currentTime = 0.1;
    }, { once: true });
  });
}
