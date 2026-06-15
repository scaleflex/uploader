import { AuthHeaders } from '../../auth/auth.types';
import { MetadataConfig, MetadataSchema } from './schema.types';
/** Whether a schema for this project is already cached (no network needed). */
export declare function hasCachedSchema(projectUuid: string): boolean;
export declare function fetchMetadataSchema(apiBase: string, headers: AuthHeaders, projectUuid: string, config?: MetadataConfig): Promise<MetadataSchema>;
export declare function clearSchemaCache(projectUuid?: string): void;
//# sourceMappingURL=schema-service.d.ts.map