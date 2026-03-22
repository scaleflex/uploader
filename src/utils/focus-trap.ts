/** Selectors for elements that can receive focus. */
const FOCUSABLE = 'button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])';

/**
 * Trap focus within a container element.
 * Returns a keydown handler that should be added to the container.
 * Call with the ShadowRoot so it can query inside Shadow DOM.
 */
export function createFocusTrap(getRoot: () => ShadowRoot | null, containerSelector: string) {
  return (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    const root = getRoot();
    if (!root) return;

    const container = root.querySelector(containerSelector);
    if (!container) return;

    const focusable = Array.from(container.querySelectorAll<HTMLElement>(FOCUSABLE));
    if (focusable.length === 0) return;

    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    const active = root.activeElement;

    if (e.shiftKey) {
      // Shift+Tab: wrap to last when on first element or focus is outside container
      if (active === first || !container.contains(active)) {
        e.preventDefault();
        last.focus();
      }
    } else {
      // Tab: wrap to first when on last element or focus is outside container
      if (active === last || !container.contains(active)) {
        e.preventDefault();
        first.focus();
      }
    }
  };
}
