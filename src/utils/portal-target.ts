/**
 * Find the best DOM node to append portal dropdowns to.
 *
 * When the uploader is rendered inside a `<dialog>` opened with `showModal()`,
 * the dialog is promoted to the browser's top layer. Any element appended to
 * `document.body` would render *behind* the dialog regardless of z-index.
 *
 * This helper walks up the composed tree from the given element and returns
 * the nearest open `<dialog>` if one exists, otherwise `document.body`.
 */
export function getPortalTarget(from: Element): HTMLElement {
  let node: Node | null = from;

  while (node) {
    if (node instanceof HTMLDialogElement && node.open) {
      return node;
    }
    // Cross shadow DOM boundaries via host
    if (node instanceof ShadowRoot) {
      node = node.host;
    } else {
      node = node.parentNode;
    }
  }

  return document.body;
}
