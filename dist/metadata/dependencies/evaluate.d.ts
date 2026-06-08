import { MetadataSchema } from '../schema/schema.types';
import { Dependency, ResolvedFieldState, ResolvedSchema } from './dependencies.types';
export interface ResolveTarget {
    mime: string;
    /** Meta keyed by `field.ckey` (the internal sys-key dependencies reference). */
    meta: Record<string, unknown>;
}
/**
 * Resolve the effective per-field state for a single file by evaluating every
 * dependency against the file's MIME type and current metadata values.
 *
 * Returns a sparse map: only fields actually touched by a firing dependency
 * appear in the result. Fields not in the map should be treated with their
 * schema defaults (visible, schema-required, unrestricted options).
 */
export declare function resolveForFile(file: ResolveTarget, dependencies: Dependency[]): ResolvedSchema;
/**
 * Convenience: read a field's resolved state, returning sane defaults when the
 * field has no firing dependencies.
 */
export declare function getFieldState(resolved: ResolvedSchema, ckey: string): ResolvedFieldState;
/**
 * Schema-aware resolver. The widget stores `file.meta` keyed by user-facing
 * `field.key` (the api_value), but dependencies are wired by internal
 * `field.ckey` (sys-key). This helper bridges the two: it rekeys the meta to
 * ckeys for trigger evaluation and returns the resolved map keyed by ckey.
 *
 * Also drops dependencies whose trigger field is no longer in the schema
 * (deleted in admin, BE drift, etc.) — otherwise an `is_empty` rule would
 * fire spuriously when the field simply doesn't exist.
 *
 * Fields hidden by the schema (`field.hide`) are excluded by the parser before
 * we ever see them, so we only need to translate keys here.
 */
export declare function resolveForFileWithSchema(file: {
    mime: string;
    meta: Record<string, unknown>;
}, schema: MetadataSchema, dependencies: Dependency[]): ResolvedSchema;
//# sourceMappingURL=evaluate.d.ts.map