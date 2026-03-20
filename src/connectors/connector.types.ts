export type ProviderId =
  | 'google-drive'
  | 'dropbox'
  | 'onedrive'
  | 'box'
  | 'instagram'
  | 'facebook'
  | 'unsplash'
  | 'canva';

import type { SourceDef } from '../types/source.types';

/** Connector configuration passed via UploaderConfig. */
export interface ConnectorConfig {
  companionUrl: string; // e.g. 'https://eu-on-24001.connector.filerobot.com'
  providers: ProviderId[];
  customSources?: SourceDef[];  // external integrations (e.g. Canva via its own SDK)
  /** Canva Design Button API key. Required when 'canva' is in providers. */
  canvaApiKey?: string;
}

/** A file or folder item returned by Companion's list endpoint. */
export interface CompanionItem {
  id: string;
  name: string;
  mimeType: string;
  isFolder: boolean;
  thumbnail: string | null;
  size: number;
  requestPath: string;
}

/** Response from GET /{provider}/list/{directory}. */
export interface CompanionListResponse {
  items: CompanionItem[];
  nextPagePath: string | null;
  username: string | null;
}

/** A search result item (e.g. Unsplash). */
export interface CompanionSearchItem {
  id: string;
  name: string;
  mimeType: string;
  thumbnail: string | null;
  size: number;
  requestPath: string;
  author?: { name?: string; url?: string };
}

/** Response from GET /search/{provider}/list?q={query}. */
export interface CompanionSearchResponse {
  items: CompanionSearchItem[];
  searchedFor: string;
  nextPageQuery: string | null;
}

/** Metadata for a remote file selected from a connector, used for Companion proxy upload. */
export interface RemoteFileInfo {
  companionUrl: string;
  provider: ProviderId;
  token: string;
  requestPath: string;
  fileId: string;
  name: string;
  mimeType: string;
  size: number;
  thumbnail: string | null;
}
