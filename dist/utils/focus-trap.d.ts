/**
 * Trap focus within a container element.
 * Returns a keydown handler that should be added to the container.
 * Call with the ShadowRoot so it can query inside Shadow DOM.
 */
export declare function createFocusTrap(getRoot: () => ShadowRoot | null, containerSelector: string): (e: KeyboardEvent) => void;
//# sourceMappingURL=focus-trap.d.ts.map