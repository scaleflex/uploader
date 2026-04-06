import { LitElement } from 'lit';
export type ToastType = 'error' | 'warning' | 'info';
/**
 * Lightweight toast notification container.
 * Renders stacked toasts in the bottom-right corner.
 * Auto-dismisses after a configurable duration.
 */
export declare class SfxToast extends LitElement {
    static styles: import('lit').CSSResult;
    duration: number;
    private _toasts;
    private _nextId;
    show(message: string, type?: ToastType): void;
    private _dismiss;
    private _iconForType;
    render(): import('lit-html').TemplateResult<1>;
}
//# sourceMappingURL=toast.d.ts.map