/**
 * Metadata dependencies — pre-upload FE evaluation.
 *
 * Two sets of types live here:
 *  - The **raw** shape returned by `GET /api/metadata/dependencies` (snake_case,
 *    nullable, scope sometimes `{}` and sometimes `[]`).
 *  - A **normalized** shape used internally by scope/trigger/action evaluators.
 *
 * Post-upload (asset details) the BE evaluates dependencies and returns a
 * pre-computed `FileDependencies` object — that shape lives in js-admin and is
 * NOT used here. See `docs/metadata-dependencies.md` for the why.
 */
export type DependencyScopeMimetype = 'image' | 'video' | 'audio' | 'document' | 'archive' | 'design_template';
export type DependencyTriggerCondition = 'is_true' | 'is_false' | 'is_empty' | 'is_not_empty' | 'is_in' | 'is_not_in' | 'is' | 'is_not';
export type DependencyTriggerFieldType = 'select-one' | 'multi-select' | 'boolean';
export type DependencyActionType = 'hide' | 'require' | 'allow_values' | 'set_values';
export interface RawDependencyAction {
    dep_action_type: DependencyActionType;
    dep_action_target_metadata_field_type_key: string;
    dep_action_target_metadata_or_group_sys_key: string;
    dep_action_target_field_allowed_values_sys_keys?: string[] | null;
    dep_action_target_field_set_values_sys_keys?: string[] | null;
    /** Legacy alias seen in some payloads — treated as a fallback for `set_values_sys_keys`. */
    dep_action_target_field_allowed_set_sys_keys?: string[] | null;
}
export interface RawDependency {
    dep_uuid: string;
    dep_name: string;
    dep_description: string | null;
    dep_active: boolean;
    /** Empty `{}` or `[]` means "all assets". */
    dep_scope: {
        format_mimetypes?: DependencyScopeMimetype[];
    } | [] | null;
    dep_metadata_trigger_sys_key: string;
    dep_metadata_trigger_field_type_key: DependencyTriggerFieldType;
    dep_metadata_trigger_condition_key: DependencyTriggerCondition;
    dep_metadata_trigger_values_sys_keys: string[] | null;
    dep_actions: RawDependencyAction[];
}
export interface RawDependenciesResponse {
    status: 'success' | string;
    dependencies: RawDependency[];
    api_info?: Record<string, unknown>;
}
export interface DependencyAction {
    type: DependencyActionType;
    /** ckey of the target field (or group, for `hide`). */
    targetCkey: string;
    targetFieldType: string;
    /** For `allow_values` — internal sys-key ids the field is restricted to. */
    allowedValues?: string[];
    /** For `set_values` — internal sys-key ids to preset. */
    setValues?: string[];
}
export interface Dependency {
    uuid: string;
    name: string;
    description: string | null;
    active: boolean;
    /** Empty array = applies to all assets. */
    formatMimetypes: DependencyScopeMimetype[];
    triggerCkey: string;
    triggerFieldType: DependencyTriggerFieldType;
    triggerCondition: DependencyTriggerCondition;
    /** Internal sys-key ids (`@itm_v1_…@`). Empty array for conditions that don’t need them. */
    triggerValues: string[];
    actions: DependencyAction[];
}
export interface ResolvedFieldState {
    hidden: boolean;
    required: boolean;
    /**
     * Intersection of all `allow_values` actions firing on this field.
     * `undefined` = no `allow_values` rule fired → field options unrestricted.
     * `[]` = all rules collectively allow nothing → flagged as unusable.
     */
    allowedValues?: string[];
    /** Pre-fill value from the first `set_values` rule that fired. */
    setValue?: string | string[];
    /** UUIDs of dependencies that contributed to this field's state — used for tooltips. */
    contributingDependencyUuids: string[];
}
export type ResolvedSchema = Map<string, ResolvedFieldState>;
export interface ConflictDetails {
    /** ckey of the field with the conflict. */
    ckey: string;
    kind: 'allow_values' | 'set_values';
    /** Current values that violate the rule (intersection-with-allow / mismatch-with-set). */
    conflictingValues: string[];
    /** Dependency UUIDs that produced the conflict. */
    dependencyUuids: string[];
}
//# sourceMappingURL=dependencies.types.d.ts.map