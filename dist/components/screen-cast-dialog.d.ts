import { LitElement } from 'lit';
import { TFunction } from '../store/store.types';
/**
 * Modal dialog for screen capture/recording.
 *
 * Fires:
 *  - `screencast-capture` → { file: File }
 *  - `screencast-cancel`  → void
 */
export declare class SfxScreenCastDialog extends LitElement {
    static styles: import('lit').CSSResult[];
    t: TFunction;
    private _stream;
    private _recording;
    private _error;
    private _recordedBlob;
    private _previewUrl;
    private _recorder;
    private _chunks;
    private _onBackdropClick;
    private _focusTrap;
    private _onKeyDown;
    disconnectedCallback(): void;
    private _stopAll;
    private _startRecording;
    private _stopRecording;
    private _useRecording;
    private _discard;
    private _cancel;
    render(): import('lit-html').TemplateResult<1>;
}
//# sourceMappingURL=screen-cast-dialog.d.ts.map