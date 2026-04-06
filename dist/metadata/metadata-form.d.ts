import { LitElement } from 'lit';
import { MetadataSchema, MetadataConfig } from './schema/schema.types';
export declare class SfxMetadataForm extends LitElement {
    static styles: import('lit').CSSResult;
    schema: MetadataSchema | null;
    meta: Record<string, unknown>;
    config: MetadataConfig | null;
    autocomplete: unknown;
    disabled: boolean;
    private _collapsed;
    private _toggleGroup;
    private _renderGroup;
    render(): import('lit-html').TemplateResult<1>;
}
//# sourceMappingURL=metadata-form.d.ts.map