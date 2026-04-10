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

const MIME_MAP: Record<string, string> = {
  jpg: 'image/jpeg', jpeg: 'image/jpeg', png: 'image/png', gif: 'image/gif',
  webp: 'image/webp', svg: 'image/svg+xml', bmp: 'image/bmp', ico: 'image/x-icon',
  mp4: 'video/mp4', mov: 'video/quicktime', avi: 'video/x-msvideo', webm: 'video/webm',
  pdf: 'application/pdf', zip: 'application/zip',
  doc: 'application/msword', docx: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
};

/** Guess MIME type from a filename. */
export function guessMimeType(name: string): string {
  const ext = name.split('.').pop()?.toLowerCase() ?? '';
  return MIME_MAP[ext] || '';
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
