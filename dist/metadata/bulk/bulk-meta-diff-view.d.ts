import { LitElement, nothing } from 'lit';
import { MetadataField, MetadataConfig } from '../schema/schema.types';
/**
 * Read-only diff view showing what a bulk operation would change.
 * Renders color-coded chips for array fields, "old → new" for scalars.
 */
export declare class SfxBulkMetaDiffView extends LitElement {
    static styles: import('lit').CSSResult[];
    field: MetadataField;
    oldValue: unknown;
    newValue: unknown;
    config: MetadataConfig | null;
    private _renderArrayDiff;
    private _renderScalarDiff;
    render(): typeof nothing | import('lit-html').TemplateResult<1>;
}
//# sourceMappingURL=bulk-meta-diff-view.d.ts.map