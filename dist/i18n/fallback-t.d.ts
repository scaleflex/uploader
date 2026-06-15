import { TFunction } from '../store/store.types';
/**
 * Pass-through TFunction used before i18next has initialised (or when init
 * failed): returns the inline default with {{placeholder}} interpolation and
 * count-based plural selection, mirroring the i18next call shape.
 *
 * Lives in its own module (no i18next import) so consumers that only need
 * the fallback — the store seed, component property defaults — don't pull
 * i18next into their module graph.
 */
export declare const fallbackT: TFunction;
//# sourceMappingURL=fallback-t.d.ts.map