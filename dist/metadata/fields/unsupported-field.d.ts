import { LitElement, TemplateResult } from 'lit';
/**
 * Shown in place of an editor for metadata field types the uploader can't
 * support before the asset exists (file attachments, integer-list).
 * Pure placeholder — no inputs, no events.
 */
export declare const UNSUPPORTED_FIELD_MESSAGE = "This field is not supported during upload. You can edit it later in the asset library.";
/** Lock SVG — shared with the bulk op-bar notice. */
export declare const unsupportedLockIcon: TemplateResult;
export declare class SfxMetaUnsupportedField extends LitElement {
    static styles: import('lit').CSSResult;
    render(): TemplateResult<1>;
}
//# sourceMappingURL=unsupported-field.d.ts.map