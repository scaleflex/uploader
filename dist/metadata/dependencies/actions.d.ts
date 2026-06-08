import { Dependency, DependencyAction, ResolvedSchema } from './dependencies.types';
/**
 * Apply a single action from a firing dependency onto the resolved schema.
 * Combine rules across multiple firing rules on the same target:
 *
 *  - `hide`: any firing `hide` wins → hidden = true.
 *  - `require`: union (OR) — required if any rule says so.
 *  - `allow_values`: intersection of all allowed sets.
 *  - `set_values`: first one wins (BE constraint prevents conflicts).
 */
export declare function applyAction(resolved: ResolvedSchema, dependency: Dependency, action: DependencyAction): void;
/**
 * Apply all actions of a firing dependency onto the resolved schema.
 */
export declare function applyDependency(resolved: ResolvedSchema, dependency: Dependency): void;
//# sourceMappingURL=actions.d.ts.map