export type { ConflictDetails, Dependency, DependencyAction, DependencyActionType, DependencyScopeMimetype, DependencyTriggerCondition, DependencyTriggerFieldType, RawDependenciesResponse, RawDependency, RawDependencyAction, ResolvedFieldState, ResolvedSchema, } from './dependencies.types';
export { normalizeDependencies, normalizeDependency } from './normalize';
export { categorizeMime, isInScope } from './scope';
export { evaluateTrigger } from './trigger';
export { applyAction, applyDependency } from './actions';
export { getFieldState, resolveForFile, resolveForFileWithSchema } from './evaluate';
export { coerceSetValueForField, isFieldHiddenByDeps, stripHiddenFieldsFromMeta, } from './coerce';
export { detectConflicts } from './conflicts';
export { aggregateResolvedAcrossFiles } from './bulk';
export type { BulkFileInput } from './bulk';
export { clearDependenciesCache, fetchDependencies, hasCachedDependencies, } from './dependencies-service';
export type { DependenciesFetchConfig } from './dependencies-service';
//# sourceMappingURL=index.d.ts.map