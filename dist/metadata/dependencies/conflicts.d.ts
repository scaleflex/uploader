import { ConflictDetails, ResolvedSchema } from './dependencies.types';
/**
 * Detect conflicts between the current metadata values and the resolved
 * schema's `allow_values` / `set_values` constraints.
 *
 * - `allow_values`: any current value that isn't in the allowed list is a conflict.
 * - `set_values`: a non-empty current value that differs from the `setValue` is a conflict.
 *
 * Hidden fields never produce conflicts (their values will be stripped before submit).
 */
export declare function detectConflicts(meta: Record<string, unknown>, resolved: ResolvedSchema): ConflictDetails[];
//# sourceMappingURL=conflicts.d.ts.map