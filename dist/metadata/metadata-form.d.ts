import { LitElement, PropertyValues } from 'lit';
import { MetadataSchema, MetadataConfig } from './schema/schema.types';
import { TaxonodeEntry } from './taxonomies/taxonomies.types';
import { Dependency, ResolvedSchema } from './dependencies/dependencies.types';
export declare class SfxMetadataForm extends LitElement {
    static styles: import('lit').CSSResult;
    schema: MetadataSchema | null;
    meta: Record<string, unknown>;
    config: MetadataConfig | null;
    autocomplete: unknown;
    taxonomyService: unknown;
    ultratags: unknown;
    defaultLanguage?: string;
    taxonodes: Record<string, TaxonodeEntry | null> | null;
    /**
     * Per-file resolved dependency state, keyed by field ckey. Null/empty disables
     * dependency-driven behavior. The panel computes this from the current file +
     * the project dependencies; in bulk mode it stays null until cross-file
     * aggregation lands (Phase 3).
     */
    resolvedSchema: ResolvedSchema | null;
    /**
     * Optional list of project dependencies. Only used to resolve dep UUIDs in
     * conflict tooltips back to human-readable names ("Controlled by X
     * dependency"). The actual evaluation is upstream — the form just needs
     * names for display.
     */
    dependencies: Dependency[];
    disabled: boolean;
    /**
     * Hide the built-in search + collapse-all toolbar. Default `false` so the
     * toolbar is visible wherever the form mounts.
     */
    hideFilter: boolean;
    private _collapsed;
    private _filterQuery;
    /** Schema swap (new project) invalidates filter + collapsed UUIDs. */
    willUpdate(changed: PropertyValues<this>): void;
    private _toggleGroup;
    private _onFilterInput;
    private _onFilterClear;
    /** Escape clears the query without leaving the input. */
    private _onFilterKeyDown;
    /**
     * True when every (dep-visible) group is in `_collapsed`. Dep-hidden groups
     * are excluded so the toolbar reflects what the user actually sees.
     */
    private _isAllCollapsed;
    private _onToggleCollapseAll;
    /**
     * Build a lookup of conflicts keyed by field ckey. Computed once per render
     * inside `render()` and passed to each child for the ⚠️ icon.
     */
    private _buildConflictsByCkey;
    /**
     * Build a `uuid → name` map for the conflict tooltip's "Controlled by X"
     * line. Computed once per render — cheap (small map, small array).
     */
    private _buildDependencyNames;
    /**
     * Compute the visible fields for a group, applying dep-hide and the active
     * text filter. Returns `[]` for groups that should be dropped entirely
     * (dep-hidden or no matching fields) so the caller can `continue` on
     * either signal with a single check.
     */
    private _visibleFieldsFor;
    private _renderFilter;
    private _renderGroup;
    render(): import('lit-html').TemplateResult<1>;
}
//# sourceMappingURL=metadata-form.d.ts.map