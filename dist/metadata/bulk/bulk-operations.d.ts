import { MetadataField, MetadataFieldType } from '../schema/schema.types';
export type BulkOperation = 'SET' | 'ADD' | 'DELETE';
export interface BulkOperationDef {
    key: BulkOperation;
    label: string;
}
/** Pending bulk operation — value the user has entered in the op-bar but not yet applied. */
export interface PendingOp {
    operation: BulkOperation;
    value: unknown;
}
/** Multi-value field types — bulk ops merge/dedup arrays. */
export declare const ARRAY_TYPES: ReadonlySet<MetadataFieldType>;
/** Text-like field types — bulk ops concatenate / substring-remove strings. */
export declare const TEXT_TYPES: ReadonlySet<MetadataFieldType>;
/** Operation labels are context-aware: the same key (SET / ADD / DELETE)
 *  reads differently depending on the field type so the UX matches the
 *  actual semantics. Scalars only expose Set + Clear because Append
 *  has no meaningful behaviour for a single value. */
export declare function getAvailableOperations(fieldType: MetadataFieldType): BulkOperationDef[];
/** Whether a non-empty value is needed for the operation to be meaningful.
 *  Scalar DELETE ("Clear") needs no value — it always nulls the field. */
export declare function isValueRequiredForPreview(operation: BulkOperation, fieldType: MetadataFieldType): boolean;
export declare function applyBulkOperation(operation: BulkOperation, currentValue: unknown, operationValue: unknown, fieldType: MetadataFieldType): unknown;
export declare function computeBulkResult(field: MetadataField, currentBackendValue: unknown, frontendOpValue: unknown, operation: BulkOperation, language?: string): unknown;
//# sourceMappingURL=bulk-operations.d.ts.map