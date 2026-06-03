declare class UploaderMissingKeysHelper {
    private enabled;
    private _missingKeys;
    private _timer;
    private readonly debounceDelay;
    constructor();
    handleMissingKey(key: string, value?: string, ns?: string): void;
    private _renderCurl;
}
export declare const missingKeysHelper: UploaderMissingKeysHelper;
export {};
//# sourceMappingURL=missing-keys-helper.d.ts.map