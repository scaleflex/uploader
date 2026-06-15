import { i18n } from 'i18next';
/** Subscribe to i18n readiness/language changes. Returns an unsubscribe fn. */
export declare function onI18nChange(cb: () => void): () => void;
export declare function initI18n(locale?: string): Promise<{
    i18n: i18n;
    isNew: boolean;
}>;
export declare function getI18nInstance(): i18n | null;
//# sourceMappingURL=i18n.d.ts.map