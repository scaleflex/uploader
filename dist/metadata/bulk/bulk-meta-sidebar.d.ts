import { LitElement, nothing } from 'lit';
import { MetadataSchema, MetadataConfig } from '../schema/schema.types';
/**
 * Sidebar field navigator for the bulk metadata modal.
 * Shows fields in collapsible groups (all open by default).
 * Active field highlighted blue. Green dot on filled fields.
 */
export declare class SfxBulkMetaSidebar extends LitElement {
    static styles: import('lit').CSSResult[];
    schema: MetadataSchema;
    activeFieldKey: string;
    filledFields: Set<string>;
    config: MetadataConfig | null;
    private _collapsed;
    private _isRequired;
    private _toggleGroup;
    private _onFieldClick;
    render(): typeof nothing | import('lit-html').TemplateResult<1>;
}
//# sourceMappingURL=bulk-meta-sidebar.d.ts.map