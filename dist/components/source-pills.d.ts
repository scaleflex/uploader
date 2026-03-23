import { LitElement } from 'lit';
import { SourceDef } from '../types/source.types';
export type { SourceDef, UploaderHandle } from '../types/source.types';
export declare const CORE_SOURCES: SourceDef[];
export declare class SfxSourcePills extends LitElement {
    static styles: import('lit').CSSResult;
    sources: SourceDef[];
    private _handleClick;
    render(): import('lit-html').TemplateResult<1>;
}
//# sourceMappingURL=source-pills.d.ts.map