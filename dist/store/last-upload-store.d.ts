import { UploadFile } from './store.types';
export declare const lastUploadStore: {
    /** Overwrite the stored batch. Pass only complete + failed files. */
    save(id: string, files: UploadFile[]): void;
    /** Returns the stored files (rehydrated back to UploadFile shape) or null.
     *  The `file` blob and `remoteUrl` are not serializable — they are set to
     *  null on restore. Downstream code must null-check `file.file` before use. */
    load(id: string): UploadFile[] | null;
    /** Check whether a stored batch exists without deserializing it. */
    exists(id: string): boolean;
    /** Drop the stored batch entirely. */
    clear(id: string): void;
};
//# sourceMappingURL=last-upload-store.d.ts.map