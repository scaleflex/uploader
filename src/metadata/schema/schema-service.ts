import type { AuthHeaders } from '../../auth/auth.types';
import type { MetadataConfig, MetadataSchema } from './schema.types';
import { parseMetadataSchema } from './schema-parser';

const DEFAULT_HUB_API_BASE = 'https://hub.scaleflex.com/api';

// Per-project cache
const _cache = new Map<string, MetadataSchema>();
const _fetchPromises = new Map<string, Promise<MetadataSchema>>();

export async function fetchMetadataSchema(
  apiBase: string,
  headers: AuthHeaders,
  projectUuid: string,
  config?: MetadataConfig,
): Promise<MetadataSchema> {
  // Return cached if available for this project
  const cached = _cache.get(projectUuid);
  if (cached) return cached;

  // Deduplicate concurrent calls for the same project
  const pending = _fetchPromises.get(projectUuid);
  if (pending) return pending;

  // If raw metadata was provided (e.g. from airbox/sharebox API), skip the fetch
  if (config?.rawMetadata) {
    const schema = parseMetadataSchema(
      config.rawMetadata,
      config,
      config.productsEnabled === true,
    );
    _cache.set(projectUuid, schema);
    return schema;
  }

  const promise = _doFetch(headers, projectUuid, config);
  _fetchPromises.set(projectUuid, promise);

  try {
    const schema = await promise;
    _cache.set(projectUuid, schema);
    return schema;
  } finally {
    _fetchPromises.delete(projectUuid);
  }
}

async function _doFetch(
  filerobotHeaders: AuthHeaders,
  projectUuid: string,
  config?: MetadataConfig,
): Promise<MetadataSchema> {
  const hubBase = config?.hubApiBase ?? DEFAULT_HUB_API_BASE;
  const url = `${hubBase}/project/${encodeURIComponent(projectUuid)}`;

  // Hub API uses session-based auth. If hubHeaders are provided, use them.
  // Otherwise fall back to the Filerobot SASS key headers (may not work with Hub).
  const headers = config?.hubHeaders ?? filerobotHeaders;

  const response = await fetch(url, { headers });

  if (!response.ok) {
    throw new Error(
      `Failed to fetch metadata schema (HTTP ${response.status})`,
    );
  }

  const json = await response.json();

  // Handle both possible response shapes defensively:
  // Shape A: { status, data: { project: { data: { metadata } } } }
  // Shape B: { status, project: { data: { metadata } } }
  const projectData =
    json.data?.project?.data ?? json.project?.data;

  if (!projectData?.metadata) {
    throw new Error('No metadata in project response');
  }

  // Auto-detect product fields support from the Hub project config.
  // Explicit `config.productsEnabled` overrides the Hub flag.
  const productsEnabled =
    config?.productsEnabled ??
    projectData?.airstore?.ui?.products_enabled === true;

  return parseMetadataSchema(projectData.metadata, config, productsEnabled);
}

export function clearSchemaCache(projectUuid?: string): void {
  if (projectUuid) {
    _cache.delete(projectUuid);
    _fetchPromises.get(projectUuid)?.catch(() => {});
    _fetchPromises.delete(projectUuid);
  } else {
    _cache.clear();
    _fetchPromises.clear();
  }
}
