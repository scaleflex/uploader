export declare const initI18n: (locale?: string) => Promise<{
    i18n: import('i18next').i18n;
    isNew: boolean;
}>;
export declare const getI18nInstance: () => import('i18next').i18n | null;
export declare const onI18nChange: (cb: () => void) => () => void;
export declare const t: import('@scaleflex/dam-ui').TFunction;
export declare const I18nController: new (host: import('lit').ReactiveControllerHost) => import('lit').ReactiveController;
//# sourceMappingURL=i18n.d.ts.map