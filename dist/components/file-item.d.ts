import { LitElement, nothing } from 'lit';
import { UploadFile } from '../store/store.types';
export declare class SfxFileItem extends LitElement {
    static styles: import('lit').CSSResult;
    file: UploadFile;
    private _remove;
    private _retry;
    private _preview;
    render(): typeof nothing | import('lit-html').TemplateResult<1>;
    private _renderTypeIcon;
}
//# sourceMappingURL=file-item.d.ts.map