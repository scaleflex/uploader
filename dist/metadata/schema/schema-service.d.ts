import { AuthHeaders } from '../../auth/auth.types';
import { MetadataConfig, MetadataSchema } from './schema.types';
export declare function fetchMetadataSchema(apiBase: string, headers: AuthHeaders, projectUuid: string, config?: MetadataConfig): Promise<MetadataSchema>;
export declare function clearSchemaCache(projectUuid?: string): void;
//# sourceMappingURL=schema-service.d.ts.map