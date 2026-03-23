import { LitElement } from 'lit';
/**
 * Modal dialog for importing a file via URL.
 *
 * Fires:
 *  - `url-submit`  → { url: string, name: string }
 *  - `url-cancel`  → void
 */
export declare class SfxUrlDialog extends LitElement {
    static styles: import('lit').CSSResult[];
    private _url;
    private _name;
    private _error;
    private _onBackdropClick;
    private _onUrlInput;
    private _onNameInput;
    private _autoName;
    private _focusTrap;
    private _onKeyDown;
    private _cancel;
    private _submit;
    connectedCallback(): void;
    render(): import('lit-html').TemplateResult<1>;
}
//# sourceMappingURL=url-dialog.d.ts.map