import { Dependency, RawDependency, RawDependenciesResponse } from './dependencies.types';
export declare function normalizeDependency(raw: RawDependency): Dependency;
export declare function normalizeDependencies(payload: RawDependenciesResponse | RawDependency[] | null | undefined): Dependency[];
//# sourceMappingURL=normalize.d.ts.map