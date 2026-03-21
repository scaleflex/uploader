import type { UploadRestrictions, UploadFile } from '../store/store.types';

/** Validate a File against restrictions. Returns error message or null. */
export function validateFile(
  file: File,
  restrictions: UploadRestrictions,
  existingFiles: Map<string, UploadFile>,
): string | null {
  // Max file size
  if (restrictions.maxFileSize != null && file.size > restrictions.maxFileSize) {
    const limit = (restrictions.maxFileSize / (1024 * 1024)).toFixed(1);
    return `File exceeds ${limit} MB limit`;
  }

  // Max total files size (exclude rejected/cancelled files)
  if (restrictions.maxTotalFilesSize != null) {
    let totalSize = file.size;
    for (const f of existingFiles.values()) {
      if (f.status !== 'rejected' && f.status !== 'cancelled') totalSize += f.size;
    }
    if (totalSize > restrictions.maxTotalFilesSize) {
      return 'Total file size limit exceeded';
    }
  }

  // Max number of files (exclude rejected/cancelled files from count)
  if (restrictions.maxNumberOfFiles != null) {
    let activeCount = 0;
    for (const f of existingFiles.values()) {
      if (f.status !== 'rejected' && f.status !== 'cancelled') activeCount++;
    }
    if (activeCount >= restrictions.maxNumberOfFiles) {
      return `Maximum ${restrictions.maxNumberOfFiles} files allowed`;
    }
  }

  // Allowed file types
  if (restrictions.allowedFileTypes != null) {
    const allowed = restrictions.allowedFileTypes;
    const ext = '.' + (file.name.split('.').pop()?.toLowerCase() ?? '');
    const match = allowed.some((pattern) => {
      if (pattern.startsWith('.')) return ext === pattern.toLowerCase();
      if (pattern.endsWith('/*')) return file.type.startsWith(pattern.slice(0, -1));
      return file.type === pattern;
    });
    if (!match) return `File type not allowed`;
  }

  // Blocked file types
  if (restrictions.blockedFileTypes != null) {
    const blocked = restrictions.blockedFileTypes;
    const ext = '.' + (file.name.split('.').pop()?.toLowerCase() ?? '');
    const match = blocked.some((pattern) => {
      if (pattern.startsWith('.')) return ext === pattern.toLowerCase();
      return file.type === pattern;
    });
    if (match) return `File type is blocked`;
  }

  return null;
}

/** Build accept string for file input from restrictions. */
export function buildAcceptString(restrictions: UploadRestrictions): string {
  if (!restrictions.allowedFileTypes) return '';
  return restrictions.allowedFileTypes.join(',');
}
