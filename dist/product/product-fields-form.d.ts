import { LitElement } from 'lit';
import { TFunction } from '../store/store.types';
import { Product } from './product.types';
/**
 * Hardcoded "Product" section with two fields: ref + position.
 * Styled to match `<sfx-metadata-form>` collapsible groups.
 *
 * Emits `product-blur` with `{ key: 'ref' | 'position', value }` on blur
 * when validation passes. Empty values are emitted as `undefined` so the host
 * can clear a previously-set field. Invalid values are NOT emitted — the form
 * surfaces the error inline until the user corrects it.
 */
export declare class SfxProductFieldsForm extends LitElement {
    static styles: import('lit').CSSResult[];
    product: Product;
    disabled: boolean;
    t: TFunction;
    private _collapsed;
    private _errors;
    willUpdate(changed: Map<string, unknown>): void;
    private _toggle;
    private _emit;
    private _clearError;
    private _onRefInput;
    private _onRefBlur;
    private _onPositionInput;
    private _onPositionBlur;
    private _onKeydown;
    private _renderRow;
    render(): import('lit-html').TemplateResult<1>;
}
//# sourceMappingURL=product-fields-form.d.ts.map