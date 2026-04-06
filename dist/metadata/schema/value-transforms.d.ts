import { MetadataField } from './schema.types';
import { UploadFile } from '../../store/store.types';
export declare function mapValueFromBackend(field: MetadataField, rawValue: unknown, language?: string): unknown;
export declare function mapValueToBackend(field: MetadataField, value: unknown, file?: UploadFile, language?: string): unknown;
//# sourceMappingURL=value-transforms.d.ts.map