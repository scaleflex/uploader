import { AuthHeaders } from '../../auth/auth.types';
import { Dependency } from './dependencies.types';
export interface DependenciesFetchConfig {
    hubApiBase?: string;
    hubHeaders?: AuthHeaders;
}
/**
 * Fetch the full list of metadata dependencies for the current project from
 * the Hub `/api/metadata/dependencies` endpoint. Results are cached per project
 * for the lifetime of the page (admin CRUD changes won't be picked up until
 * `clearDependenciesCache()` is called).
 */
export declare function fetchDependencies(projectUuid: string, fallbackHeaders: AuthHeaders, config?: DependenciesFetchConfig): Promise<Dependency[]>;
export declare function clearDependenciesCache(projectUuid?: string): void;
/** Test-only — seed the cache directly. */
export declare function _setCachedDependencies(projectUuid: string, deps: Dependency[]): void;
//# sourceMappingURL=dependencies-service.d.ts.map