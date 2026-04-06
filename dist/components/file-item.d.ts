import { LitElement, nothing } from 'lit';
import { UploadFile } from '../store/store.types';
export declare class SfxFileItem extends LitElement {
    static styles: import('lit').CSSResult;
    file: UploadFile;
    private _dims;
    updated(changed: Map<string, unknown>): void;
    private _emit;
    private _remove;
    private _retry;
    private _pause;
    private _resume;
    private _rename;
    private _preview;
    render(): typeof nothing | import('lit-html').TemplateResult<1>;
    private _formatDuration;
    private _renderTypeIcon;
}
//# sourceMappingURL=file-item.d.ts.map