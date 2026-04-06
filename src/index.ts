export { SfxUploader, type UploaderConfig, type UploaderCallbacks, type InlineHeaderConfig } from './sfx-uploader';
export { createStore, Store } from './store';
export { UploadEngine, type UploadEngineConfig, type TusConfig } from './engine';
export { PublicEvents } from './events/public-events';
export type {
  UploaderState,
  UploadFile,
  FileStatus,
  UploadResponse,
  QueueConfig,
  RetryConfig,
  UploadRestrictions,
} from './store';

// Auth
export type {
  AuthConfig,
  SecurityTemplateAuth,
  SassKeyAuth,
  AuthHeaders,
} from './auth';
export { resolveAuth, exchangeSassKey, getApiBase, buildAuthHeaders } from './auth';

// Connectors
export type { ProviderId, ConnectorConfig, RemoteFileInfo } from './connectors';
export { getProviderSources } from './connectors';

// Components
export { SfxDropZone } from './components/drop-zone';
export { SfxImportDivider } from './components/import-divider';
export { SfxSourcePills, CORE_SOURCES, type SourceDef, type UploaderHandle } from './components/source-pills';
export { SfxFileList } from './components/file-list';
export { SfxFileItem } from './components/file-item';
export { SfxSuccessCard } from './components/success-card';
export { SfxActionsBar, type UploadButtonState } from './components/actions-bar';

// Metadata (types only — actual code is lazy-loaded)
export type { MetadataConfig, MetadataSchema, MetadataField, MetadataGroup } from './metadata/schema/schema.types';
