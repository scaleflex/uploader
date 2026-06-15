import { TFunction } from '../store/store.types';
export { fallbackT } from './fallback-t';
/**
 * Module-level translate for components that sit too deep to receive the
 * store's `t` as a property (metadata fields, shared leaf components).
 * Resolves against the shared i18next singleton when it's ready and falls
 * back to the inline defaults otherwise.
 *
 * The `isInitialized` check matters: initI18n() assigns the singleton
 * synchronously before `await init()` resolves, and t() on a
 * created-but-uninitialised instance returns undefined — which would turn
 * every default string (including validation error messages) into undefined
 * during the translation-fetch window.
 *
 * Components calling this from render() should attach an I18nController
 * (./i18n-controller) so they re-render when translations load or the
 * language changes.
 */
export declare const t: TFunction;
//# sourceMappingURL=translate.d.ts.map