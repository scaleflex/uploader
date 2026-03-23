import { Store } from './store';
import { UploaderState, UploadFile } from './store.types';
/**
 * Immutably update a single file in the store's files Map.
 * Always creates a new Map so that Store change detection works correctly.
 */
export declare function updateFile(store: Store<UploaderState>, fileId: string, patch: Partial<UploadFile>): void;
/**
 * Immutably add a file to the store's files Map.
 */
export declare function addFile(store: Store<UploaderState>, file: UploadFile): void;
/**
 * Immutably remove a file from the store's files Map.
 */
export declare function removeFile(store: Store<UploaderState>, fileId: string): void;
//# sourceMappingURL=helpers.d.ts.map