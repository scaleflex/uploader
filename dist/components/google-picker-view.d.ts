import { LitElement } from 'lit';
import { TFunction } from '../store/store.types';
export declare class SfxGooglePickerView extends LitElement {
    static styles: import('lit').CSSResult;
    t: TFunction;
    companionUrl: string;
    googlePickerConfig: {
        clientId: string;
        apiKey: string;
        appId: string;
    };
    multi: boolean;
    maxSelect: number | null;
    private _busy;
    private _error;
    private get _providerDef();
    private get _providerLabel();
    private _onClose;
    private _handleConnect;
    protected render(): import('lit').TemplateResult<1>;
    private _renderHeader;
}
//# sourceMappingURL=google-picker-view.d.ts.map