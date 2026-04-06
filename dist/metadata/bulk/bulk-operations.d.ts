import { MetadataFieldType } from '../schema/schema.types';
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
export declare function getAvailableOperations(fieldType: MetadataFieldType): BulkOperationDef[];
export declare function applyBulkOperation(operation: BulkOperation, currentValue: unknown, operationValue: unknown, fieldType: MetadataFieldType): unknown;
//# sourceMappingURL=bulk-operations.d.ts.map