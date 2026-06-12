import { UploadFile, UploadRestrictions, UploaderState } from './store/store.types';
import { MetadataField, MetadataSchema } from './metadata/schema/schema.types';
/**
 * Build a parsed MetadataSchema for tests: one root group holding `fields`,
 * empty regional groups, English, no products. Pass `overrides.groups` for a
 * multi-group / custom-group shape (the flat `fields` / `fieldsByKey` are then
 * derived from those groups). `forceFillingOnUpload` defaults to undefined —
 * the "API didn't send the toggle" state; set it explicitly when the test
 * exercises the project-level enforcement toggle.
 */
export declare function makeMetadataSchema(fields: MetadataField[], overrides?: Partial<MetadataSchema>): MetadataSchema;
export declare function makeUploadFile(overrides?: Partial<UploadFile>): UploadFile;
export declare function makeRestrictions(overrides?: Partial<UploadRestrictions>): UploadRestrictions;
export declare function makeDefaultState(overrides?: Partial<UploaderState>): UploaderState;
//# sourceMappingURL=test-utils.d.ts.map