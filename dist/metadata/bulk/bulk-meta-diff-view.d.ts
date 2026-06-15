import { LitElement } from 'lit';
import { MetadataField, MetadataConfig } from '../schema/schema.types';
import { TaxonodeEntry } from '../taxonomies/taxonomies.types';
/**
 * Read-only diff view showing what a bulk operation would change.
 * Renders color-coded chips for array fields, "old → new" for scalars.
 */
export declare class SfxBulkMetaDiffView extends LitElement {
    /** Re-render when translations load / language changes (render uses the module-level t). */
    private readonly _i18nController;
    static styles: import('lit').CSSResult[];
    field: MetadataField;
    oldValue: unknown;
    newValue: unknown;
    oldTaxonomyEntry: TaxonodeEntry | null;
    newTaxonomyEntry: TaxonodeEntry | null;
    config: MetadataConfig | null;
    private _renderArrayDiff;
    private _renderScalarDiff;
    private _renderTaxonomyScalar;
    render(): unknown;
}
//# sourceMappingURL=bulk-meta-diff-view.d.ts.map