export type { ConflictDetails, Dependency, DependencyAction, DependencyActionType, DependencyScopeMimetype, DependencyTriggerCondition, DependencyTriggerFieldType, RawDependenciesResponse, RawDependency, RawDependencyAction, ResolvedFieldState, ResolvedSchema, } from './dependencies.types';
export { normalizeDependencies, normalizeDependency } from './normalize';
export { categorizeMime, isInScope } from './scope';
export { evaluateTrigger } from './trigger';
export { applyAction, applyDependency } from './actions';
export { getFieldState, resolveForFile, resolveForFileWithSchema } from './evaluate';
export { detectConflicts } from './conflicts';
export { clearDependenciesCache, fetchDependencies, _setCachedDependencies, } from './dependencies-service';
export type { DependenciesFetchConfig } from './dependencies-service';
//# sourceMappingURL=index.d.ts.map