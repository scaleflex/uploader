import { LitElement } from 'lit';
import { TFunction } from '../store/store.types';
/**
 * Modal dialog for capturing photos/video via webcam.
 *
 * Fires:
 *  - `camera-capture`  → { file: File }
 *  - `camera-cancel`   → void
 */
export declare class SfxCameraDialog extends LitElement {
    static styles: import('lit').CSSResult[];
    t: TFunction;
    private _stream;
    private _error;
    private _captured;
    private _previewUrl;
    private _onBackdropClick;
    private _focusTrap;
    private _onKeyDown;
    connectedCallback(): void;
    disconnectedCallback(): void;
    private _startCamera;
    private _stopStream;
    private _capture;
    private _retake;
    private _usePhoto;
    private _cancel;
    render(): import('lit').TemplateResult<1>;
}
//# sourceMappingURL=camera-dialog.d.ts.map