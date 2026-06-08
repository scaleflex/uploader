import { LitElement, nothing } from 'lit';
import { MetadataField, MetadataConfig, RegionalVariantsGroup } from './schema/schema.types';
import { ConflictDetails, ResolvedFieldState } from './dependencies/dependencies.types';
import { TaxonodeEntry } from './taxonomies/taxonomies.types';
import { UltratagsValueItem } from './ultratags/ultratags.types';
export declare class SfxMetadataFieldEl extends LitElement {
    static styles: import('lit').CSSResult[];
    field: MetadataField;
    value: unknown;
    config: MetadataConfig | null;
    autocomplete: unknown;
    taxonomyService: unknown;
    taxonomyEntry: TaxonodeEntry | null;
    ultratags: unknown;
    defaultLanguage?: string;
    ultratagsRestrictToItems: UltratagsValueItem[] | null;
    /**
     * Schema's regional-variants groups, used to render the per-field hint
     * label ("Languages: English"). Optional — when omitted, no hint is shown.
     */
    regionalVariantsGroups: RegionalVariantsGroup[];
    /**
     * Per-field dependency resolution from the form. `null` = no firing rule on
     * this field; treat like schema defaults.
     */
    resolvedState: ResolvedFieldState | null;
    /**
     * Conflict between the field's current value and a firing `allow_values` /
     * `set_values` rule. Surfaces a ⚠️ icon next to the label with the allowed
     * options listed in the tooltip. `null` = no conflict.
     */
    conflict: ConflictDetails | null;
    /**
     * UUID → name map for the contributing dependencies. Empty map = no source
     * info available; the tooltip falls back to value-only text. Provided by the
     * form so the field doesn't need the full `Dependency[]` array.
     */
    dependencyNames: Map<string, string>;
    disabled: boolean;
    private _error;
    /** Flag to prevent re-entry when we re-dispatch field-blur. */
    private _dispatching;
    private get _isRequired();
    /**
     * Build a human-readable tooltip for a dep conflict. Resolves internal
     * sys-key ids (`@itm_v1_…@`) to user-facing labels via `possible_values`,
     * and resolves contributing dep UUIDs to their human-readable names when
     * a `dependencyNames` map is provided.
     */
    private _conflictTooltip;
    private _onFieldBlur;
    connectedCallback(): void;
    disconnectedCallback(): void;
    private _handleChildBlur;
    /** Render the correct field editor based on field.type. */
    private _renderField;
    render(): typeof nothing | import('lit-html').TemplateResult<1>;
}
//# sourceMappingURL=metadata-field.d.ts.map