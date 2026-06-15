import { ReactiveController, ReactiveControllerHost } from 'lit';
/**
 * Re-renders the host when translations become available or the language
 * changes. Required by any component whose render() calls the module-level
 * t() from ./translate — those components otherwise render once with the
 * inline English defaults and never pick up the asynchronously loaded
 * translations (the store-provided `t` property re-renders via setState;
 * module-level t() has no such hook).
 *
 * Usage: `private _i18n = new I18nController(this);`
 */
export declare class I18nController implements ReactiveController {
    private _host;
    private _unsubscribe;
    constructor(host: ReactiveControllerHost);
    hostConnected(): void;
    hostDisconnected(): void;
}
//# sourceMappingURL=i18n-controller.d.ts.map