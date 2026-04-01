/**
 * Find the best DOM node to append portal dropdowns to.
 *
 * When the uploader is rendered inside a `<dialog>` opened with `showModal()`,
 * the dialog is promoted to the browser's top layer. Any element appended to
 * `document.body` would render *behind* the dialog regardless of z-index.
 *
 * This helper walks up the composed ancestor chain. At each element, if it has
 * a shadow root, we check that shadow root for an open `<dialog>`. This covers
 * the case where the component is slotted into a host whose shadow DOM contains
 * the dialog (e.g. `<ap-modal>` slots content next to its `<dialog>`).
 */
export function getPortalTarget(from: Element): HTMLElement {
  let node: Node | null = from;

  while (node) {
    if (node instanceof ShadowRoot) {
      node = node.host;
      continue;
    }

    // Check if this node itself is an open dialog
    if (node instanceof HTMLDialogElement && node.open) {
      return node;
    }

    // If this element has a shadow root, check it for an open dialog
    if (node instanceof Element && node.shadowRoot) {
      const dialog = node.shadowRoot.querySelector('dialog[open]');
      if (dialog instanceof HTMLDialogElement) {
        return dialog;
      }
    }

    node = node.parentNode;
  }

  return document.body;
}
