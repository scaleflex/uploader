import { LitElement } from 'lit';
import { TFunction } from '../store/store.types';
import { SourceDef } from '../types/source.types';
export type { SourceDef, UploaderHandle } from '../types/source.types';
export declare const CORE_SOURCES: SourceDef[];
export declare class SfxSourcePills extends LitElement {
    static styles: import('lit').CSSResult;
    t: TFunction;
    sources: SourceDef[];
    private _handleClick;
    render(): import('lit').TemplateResult<1>;
}
//# sourceMappingURL=source-pills.d.ts.map