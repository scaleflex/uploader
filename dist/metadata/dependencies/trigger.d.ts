import { Dependency } from './dependencies.types';
/**
 * Evaluate a dependency's trigger against a file's current metadata.
 * Caller is responsible for the scope check (see `isInScope`).
 *
 * Returns `true` when the dependency should fire.
 */
export declare function evaluateTrigger(dependency: Dependency, meta: Record<string, unknown>): boolean;
//# sourceMappingURL=trigger.d.ts.map