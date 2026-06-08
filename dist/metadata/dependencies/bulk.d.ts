import { MetadataSchema } from '../schema/schema.types';
import { Dependency, ResolvedSchema } from './dependencies.types';
export interface BulkFileInput {
    id: string;
    mime: string;
    /**
     * Meta keyed by user-facing `field.key` (the api_value), same shape as
     * `UploadFile.meta` on the store. The aggregator forwards to
     * `resolveForFileWithSchema`, which bridges the keys to internal ckeys
     * before evaluating triggers.
     */
    meta: Record<string, unknown>;
}
/**
 * Aggregate resolved dependency state across a set of selected files for the
 * bulk-edit modal. Each rule is evaluated per-file via `resolveForFileWithSchema`
 * (so scope and trigger see each file's own MIME + meta), then merged with
 * bulk-friendly semantics:
 *
 *  - `hidden`        — true only when **every** selected file would hide the
 *                      field. Mixed selections keep the field visible so the
 *                      user can still edit non-hidden files.
 *  - `required`      — true if **any** selected file requires the field
 *                      (mirrors the schema-required gate). The bulk row shows
 *                      the asterisk; per-file resolution decides whether the
 *                      value is actually missing for that file.
 *  - `allowedValues` — intersection of per-file allowed sets, **only** when
 *                      every selected file has an `allow_values` rule firing
 *                      on this field. If any file is unrestricted, the bulk
 *                      row is unrestricted too — matches the spec's "values
 *                      vary across selection → ignore dep" fallback.
 *  - `setValue`      — surfaced only when **every** selected file has the
 *                      same `setValue` (string equality / set equality for
 *                      arrays). Diverging defaults can't be applied in bulk.
 *
 * Returns an empty map when no rules fire across the selection.
 */
export declare function aggregateResolvedAcrossFiles(files: BulkFileInput[], schema: MetadataSchema, dependencies: Dependency[]): ResolvedSchema;
//# sourceMappingURL=bulk.d.ts.map