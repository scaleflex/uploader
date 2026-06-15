import { LitElement, TemplateResult } from 'lit';
/**
 * Shown in place of an editor for metadata field types the uploader can't
 * support before the asset exists (file attachments, integer-list).
 * Pure placeholder — no inputs, no events.
 * A function (not a const) so the translation resolves at render time,
 * after i18next has initialised.
 */
export declare const unsupportedFieldMessage: () => string;
/** Lock SVG — shared with the bulk op-bar notice. */
export declare const unsupportedLockIcon: TemplateResult;
export declare class SfxMetaUnsupportedField extends LitElement {
    /** Re-render when translations load / language changes (render uses the module-level t). */
    private readonly _i18nController;
    static styles: import('lit').CSSResult;
    render(): TemplateResult<1>;
}
//# sourceMappingURL=unsupported-field.d.ts.map