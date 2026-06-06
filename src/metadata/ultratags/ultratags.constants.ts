export const ULTRATAGS_SEARCH_DEBOUNCE_MS = 300;
export const ULTRATAGS_SEARCH_MIN_QUERY_LENGTH = 2;
export const ULTRATAGS_AUTOCOMPLETE_LIMIT = 50;

export const ULTRATAGS_LIST_FORMAT_REGVAR_API = 'regvar:api';

export const ULTRATAG_SID_PREFIX = '#ut';

export const ULTRATAGS_CREATE_MODES = {
  CREATE_ONLY: 'create_only',
  UPSERT: 'upsert',
} as const;

export const ULTRATAGS_SLUG_PATTERN = /^[a-z0-9_-]+$/;
