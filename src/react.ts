import {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useLayoutEffect,
  useRef,
  createElement,
  type CSSProperties,
} from 'react';
import type { SfxUploader as SfxUploaderElement, UploaderConfig } from './sfx-uploader';
import type { UploadFile, UploadResponse } from './store/store.types';

// Conditionally import define for SSR safety
if (typeof customElements !== 'undefined') {
  import('./define');
}

export interface UploaderRef {
  element: SfxUploaderElement | null;
  open(): void;
  close(): void;
  upload(): void;
  addFiles(files: File[]): void;
  resumeUpload(files?: UploadFile[]): void;
  cancelUpload(): void;
}

export interface UploaderProps {
  config: UploaderConfig;
  open?: boolean;

  // Event callbacks (spec §13.1)
  onFileAdded?: (file: UploadFile) => void;
  onFileRemoved?: (file: UploadFile) => void;
  onFileRejected?: (file: UploadFile, reason: string) => void;
  onUploadStarted?: (files: UploadFile[]) => void;
  onUploadProgress?: (file: UploadFile, progress: number, speed: number) => void;
  onUploadComplete?: (file: UploadFile, response: UploadResponse) => void;
  onUploadError?: (file: UploadFile, error: Error) => void;
  onUploadRetry?: (file: UploadFile, attempt: number) => void;
  onAllComplete?: (successful: UploadFile[], failed: UploadFile[]) => void;
  onTotalProgress?: (percentage: number, speed: number, eta: number) => void;
  onOpen?: () => void;
  onClose?: () => void;
  onCancel?: () => void;

  className?: string;
  style?: CSSProperties;
}

export const Uploader = forwardRef<UploaderRef, UploaderProps>(
  function Uploader(
    {
      config,
      open,
      onFileAdded,
      onFileRemoved,
      onFileRejected,
      onUploadStarted,
      onUploadProgress,
      onUploadComplete,
      onUploadError,
      onUploadRetry,
      onAllComplete,
      onTotalProgress,
      onOpen,
      onClose,
      onCancel,
      className,
      style,
    },
    ref,
  ) {
    const elRef = useRef<SfxUploaderElement>(null);

    // Callback refs to avoid stale closures (mirrors asset-picker pattern)
    const onFileAddedRef = useRef(onFileAdded);
    const onFileRemovedRef = useRef(onFileRemoved);
    const onFileRejectedRef = useRef(onFileRejected);
    const onUploadStartedRef = useRef(onUploadStarted);
    const onUploadProgressRef = useRef(onUploadProgress);
    const onUploadCompleteRef = useRef(onUploadComplete);
    const onUploadErrorRef = useRef(onUploadError);
    const onUploadRetryRef = useRef(onUploadRetry);
    const onAllCompleteRef = useRef(onAllComplete);
    const onTotalProgressRef = useRef(onTotalProgress);
    const onOpenRef = useRef(onOpen);
    const onCloseRef = useRef(onClose);
    const onCancelRef = useRef(onCancel);

    // Keep callback refs current
    useLayoutEffect(() => {
      onFileAddedRef.current = onFileAdded;
      onFileRemovedRef.current = onFileRemoved;
      onFileRejectedRef.current = onFileRejected;
      onUploadStartedRef.current = onUploadStarted;
      onUploadProgressRef.current = onUploadProgress;
      onUploadCompleteRef.current = onUploadComplete;
      onUploadErrorRef.current = onUploadError;
      onUploadRetryRef.current = onUploadRetry;
      onAllCompleteRef.current = onAllComplete;
      onTotalProgressRef.current = onTotalProgress;
      onOpenRef.current = onOpen;
      onCloseRef.current = onClose;
      onCancelRef.current = onCancel;
    });

    useImperativeHandle(ref, () => ({
      get element() { return elRef.current; },
      open() { elRef.current?.open(); },
      close() { elRef.current?.close(); },
      upload() { elRef.current?.upload(); },
      addFiles(files: File[]) { elRef.current?.addFiles(files); },
      resumeUpload(files?: UploadFile[]) { elRef.current?.resumeUpload(files); },
      cancelUpload() { elRef.current?.cancelUpload(); },
    }));

    // Sync config property
    useLayoutEffect(() => {
      const el = elRef.current;
      if (!el) return;
      el.config = config;
    }, [config]);

    // Sync open state — only act on explicit boolean values
    useEffect(() => {
      const el = elRef.current;
      if (!el) return;
      if (open === true) {
        el.open();
      } else if (open === false) {
        el.close();
      }
    }, [open]);

    // Stable event listeners using refs (mirrors asset-picker pattern)
    useEffect(() => {
      const el = elRef.current;
      if (!el) return;

      const handleFileAdded = (e: Event) => {
        const { file } = (e as CustomEvent).detail;
        onFileAddedRef.current?.(file);
      };

      const handleFileRemoved = (e: Event) => {
        const { file } = (e as CustomEvent).detail;
        onFileRemovedRef.current?.(file);
      };

      const handleFileRejected = (e: Event) => {
        const { file, reason } = (e as CustomEvent).detail;
        onFileRejectedRef.current?.(file, reason);
      };

      const handleUploadStarted = (e: Event) => {
        const { files } = (e as CustomEvent).detail;
        onUploadStartedRef.current?.(files);
      };

      const handleUploadProgress = (e: Event) => {
        const { file, progress, speed } = (e as CustomEvent).detail;
        onUploadProgressRef.current?.(file, progress, speed);
      };

      const handleUploadComplete = (e: Event) => {
        const { file, response } = (e as CustomEvent).detail;
        onUploadCompleteRef.current?.(file, response);
      };

      const handleUploadError = (e: Event) => {
        const { file, error } = (e as CustomEvent).detail;
        onUploadErrorRef.current?.(file, error);
      };

      const handleAllComplete = (e: Event) => {
        const { successful, failed } = (e as CustomEvent).detail;
        onAllCompleteRef.current?.(successful, failed);
      };

      const handleUploadRetry = (e: Event) => {
        const { file, attempt } = (e as CustomEvent).detail;
        onUploadRetryRef.current?.(file, attempt);
      };

      const handleTotalProgress = (e: Event) => {
        const { percentage, speed, eta } = (e as CustomEvent).detail;
        onTotalProgressRef.current?.(percentage, speed, eta);
      };

      const handleOpen = () => {
        onOpenRef.current?.();
      };

      const handleClose = () => {
        onCloseRef.current?.();
      };

      const handleCancel = () => {
        onCancelRef.current?.();
      };

      el.addEventListener('sfx-file-added', handleFileAdded);
      el.addEventListener('sfx-file-removed', handleFileRemoved);
      el.addEventListener('sfx-file-rejected', handleFileRejected);
      el.addEventListener('sfx-upload-started', handleUploadStarted);
      el.addEventListener('sfx-upload-progress', handleUploadProgress);
      el.addEventListener('sfx-upload-complete', handleUploadComplete);
      el.addEventListener('sfx-upload-error', handleUploadError);
      el.addEventListener('sfx-upload-retry', handleUploadRetry);
      el.addEventListener('sfx-all-complete', handleAllComplete);
      el.addEventListener('sfx-total-progress', handleTotalProgress);
      el.addEventListener('sfx-open', handleOpen);
      el.addEventListener('sfx-close', handleClose);
      el.addEventListener('sfx-cancel', handleCancel);

      return () => {
        el.removeEventListener('sfx-file-added', handleFileAdded);
        el.removeEventListener('sfx-file-removed', handleFileRemoved);
        el.removeEventListener('sfx-file-rejected', handleFileRejected);
        el.removeEventListener('sfx-upload-started', handleUploadStarted);
        el.removeEventListener('sfx-upload-progress', handleUploadProgress);
        el.removeEventListener('sfx-upload-complete', handleUploadComplete);
        el.removeEventListener('sfx-upload-error', handleUploadError);
        el.removeEventListener('sfx-upload-retry', handleUploadRetry);
        el.removeEventListener('sfx-all-complete', handleAllComplete);
        el.removeEventListener('sfx-total-progress', handleTotalProgress);
        el.removeEventListener('sfx-open', handleOpen);
        el.removeEventListener('sfx-close', handleClose);
        el.removeEventListener('sfx-cancel', handleCancel);
      };
    }, []);

    return createElement('sfx-uploader', {
      ref: elRef,
      className,
      style,
    });
  },
);
