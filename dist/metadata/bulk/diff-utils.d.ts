import { MetadataField, MetadataConfig } from '../schema/schema.types';
export interface ScalarDiff {
    kind: 'scalar';
    oldDisplay: string;
    newDisplay: string;
    oldEmpty: boolean;
    newEmpty: boolean;
}
export interface ArrayDiffItem {
    label: string;
    state: 'kept' | 'added' | 'removed';
}
export interface ArrayDiff {
    kind: 'array';
    items: ArrayDiffItem[];
}
export type FieldDiff = ScalarDiff | ArrayDiff;
export declare function computeFieldDiff(field: MetadataField, oldValue: unknown, newValue: unknown, config?: MetadataConfig | null): FieldDiff;
//# sourceMappingURL=diff-utils.d.ts.map