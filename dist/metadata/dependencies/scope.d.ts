import { Dependency, DependencyScopeMimetype } from './dependencies.types';
/**
 * Map a raw MIME type to the dependency-scope category buckets used by the
 * Filerobot dependency model. A given MIME can match multiple buckets — e.g.
 * `application/zip` matches both `archive` and `document`.
 */
export declare function categorizeMime(mime: string): Set<DependencyScopeMimetype>;
/** Returns true when a dependency's scope applies to a file with the given MIME. */
export declare function isInScope(dependency: Dependency, mime: string): boolean;
//# sourceMappingURL=scope.d.ts.map