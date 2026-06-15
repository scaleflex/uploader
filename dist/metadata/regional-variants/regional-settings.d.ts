import { LitElement, nothing } from 'lit';
import { RegionalVariantsGroup, RegionalVariant } from '../schema/schema.types';
/**
 * Globe-button dropdown that lets the user switch the active variant for
 * every regional-variants group in the schema — LANGUAGES, CURRENCIES, and
 * CUSTOM alike. Mirrors admin v5's `RegionalFiltersDropdown`.
 *
 * Renders nothing when no group has more than one variant — at that point
 * the selector wouldn't change anything.
 *
 * Emits `regional-change` with `{ groupUuid, value }` on selection.
 *
 * Keyboard nav inside the open dropdown:
 *   ArrowDown / ArrowUp — move active option
 *   Enter             — select active option
 *   Escape            — close
 */
export declare class SfxRegionalSettings extends LitElement {
    /** Re-render when translations load / language changes (render uses the module-level t). */
    private readonly _i18nController;
    static styles: import('lit').CSSResult[];
    groups: RegionalVariantsGroup[];
    /** Active variant value per group, keyed by group UUID. */
    selectedFilters: Record<string, string>;
    private _open;
    private _activeIndex;
    private _boundOutsideClick;
    /**
     * Groups that actually have something to switch between — single-variant
     * groups are noise. Mirrors admin v5's `variants.length > 1` gate.
     */
    private get _filteredGroups();
    /** Flat option list for keyboard nav, in render order. */
    private get _options();
    disconnectedCallback(): void;
    private _toggle;
    private _openDropdown;
    private _close;
    private _onOutsideClick;
    private _onSelect;
    private _scrollActive;
    private _onKeydown;
    /**
     * Tooltip / aria-label summarising the active picks: with one group, shows
     * just the active variant label (e.g. "English"); with multiple, lists
     * "Languages: English, Currencies: USD".
     */
    private _triggerSummary;
    render(): import('lit-html').TemplateResult<1> | typeof nothing;
    private _renderOption;
}
export type { RegionalVariant };
//# sourceMappingURL=regional-settings.d.ts.map