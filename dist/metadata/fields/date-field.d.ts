import { MetadataFieldBase } from './field-base';
export declare class SfxMetaDateField extends MetadataFieldBase {
    static styles: import('lit').CSSResult[];
    /** Convert value to "YYYY-MM-DD" string for the native date input. */
    private get _dateStr();
    private _onChange;
    private _onKeydown;
    render(): import('lit-html').TemplateResult<1>;
}
//# sourceMappingURL=date-field.d.ts.map