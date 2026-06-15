import { LitElement, nothing } from 'lit';
import { MetadataSchema, MetadataConfig } from '../schema/schema.types';
import { ResolvedSchema } from '../dependencies/dependencies.types';
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
    /** Required fields with at least one modifiable file missing a value.
        Drives the stronger-red `.unmet` styling on the asterisk. */
    missingRequiredKeys: Set<string>;
    config: MetadataConfig | null;
    /**
     * Aggregated resolved schema for the current selection. Drives:
     *  - hiding fields/groups where every selected file would hide them
     *  - dep-driven required asterisks (in addition to schema-required)
     */
    bulkResolvedSchema: ResolvedSchema | null;
    private _collapsed;
    /** Tracks the mobile breakpoint so collapsed groups don't hide fields
        on narrow viewports where the group-label toggle button is itself
        hidden (display: none). Without this a user who collapses a group
        on desktop and resizes to mobile ends up with fields unreachable. */
    private _isNarrow;
    private _resizeTimer;
    connectedCallback(): void;
    disconnectedCallback(): void;
    private _onResize;
    private _updateNarrow;
    private _isRequired;
    private _toggleGroup;
    private _onFieldClick;
    updated(changed: Map<string, unknown>): void;
    render(): import('lit-html').TemplateResult<1> | typeof nothing;
}
//# sourceMappingURL=bulk-meta-sidebar.d.ts.map