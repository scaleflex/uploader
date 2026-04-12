import { UploadFile } from './store.types';
export declare const lastUploadStore: {
    /** Overwrite the stored batch. Pass only complete + failed files. */
    save(files: UploadFile[]): void;
    /** Returns the stored files (rehydrated back to UploadFile shape) or null.
     *  The `file` blob and `remoteUrl` are not serializable — they are set to
     *  null on restore. Downstream code must null-check `file.file` before use. */
    load(): UploadFile[] | null;
    /** Drop the stored batch entirely. */
    clear(): void;
};
//# sourceMappingURL=last-upload-store.d.ts.map