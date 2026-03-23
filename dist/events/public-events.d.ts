export declare const PublicEvents: {
    readonly FILE_ADDED: "sfx-file-added";
    readonly FILE_REMOVED: "sfx-file-removed";
    readonly FILE_REJECTED: "sfx-file-rejected";
    readonly UPLOAD_STARTED: "sfx-upload-started";
    readonly UPLOAD_PROGRESS: "sfx-upload-progress";
    readonly UPLOAD_COMPLETE: "sfx-upload-complete";
    readonly UPLOAD_ERROR: "sfx-upload-error";
    readonly UPLOAD_RETRY: "sfx-upload-retry";
    readonly ALL_COMPLETE: "sfx-all-complete";
    readonly TOTAL_PROGRESS: "sfx-total-progress";
    readonly BEFORE_UPLOAD: "sfx-before-upload";
    readonly OPEN: "sfx-open";
    readonly CLOSE: "sfx-close";
    readonly CANCEL: "sfx-cancel";
    readonly COMPLETE_ACTION: "sfx-complete-action";
    readonly FILE_PREVIEW: "sfx-file-preview";
    readonly FILL_METADATA: "sfx-fill-metadata";
};
export type PublicEventName = typeof PublicEvents[keyof typeof PublicEvents];
//# sourceMappingURL=public-events.d.ts.map