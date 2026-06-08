import { MetadataField, MetadataSchema } from '../schema/schema.types';
import { ResolvedSchema } from './dependencies.types';
/**
 * Coerce a raw `set_values` payload (always an array of sys-key strings from
 * the BE) into the runtime shape the matching field component expects.
 *
 * Mirrors `js-admin-react-filerobot-v5`'s auto-save behavior:
 *  - boolean        → `true` / `false` / `null`
 *  - select-one     → first value, or `null` when empty
 *  - multi-select   → array, or `null` when empty
 *  - other          → first value, or the array as-is when multi-valued
 *
 * Without this step the form would write `'true'` (string) into a boolean
 * field, leaving the toggle in an indeterminate state.
 */
export declare function coerceSetValueForField(field: MetadataField, setValue: string | string[]): unknown;
/**
 * A field is effectively hidden for a file when either it (by `field.ckey`)
 * or its enclosing group (by `group.ckey`) has a firing `hide` dependency.
 *
 * Groups without a ckey can never be the target of a dep, so they short-
 * circuit. Field ckey wins when both are set — same result regardless of order.
 */
export declare function isFieldHiddenByDeps(field: MetadataField, group: {
    ckey?: string;
} | undefined, resolved: ResolvedSchema): boolean;
/**
 * Return a new meta object with values for dep-hidden fields removed.
 * The spec requires that hidden fields' data isn't shipped to the BE since the
 * user couldn't see (or intentionally edit) them.
 *
 * Pure helper — does not mutate its input. Returns the same reference if no
 * stripping was needed, so callers can cheaply detect no-op outcomes.
 */
export declare function stripHiddenFieldsFromMeta(meta: Record<string, unknown>, schema: MetadataSchema, resolved: ResolvedSchema): Record<string, unknown>;
//# sourceMappingURL=coerce.d.ts.map