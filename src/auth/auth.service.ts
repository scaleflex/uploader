// Auth service — handles SASS key exchange and header generation (spec §8)
import type { AuthConfig, AuthHeaders } from './auth.types';

interface SassKeyResponse {
  status: 'success' | 'error';
  key: string;
  msg?: string;
}

/**
 * Derive the Scaleflex API base URL from a container name.
 * Returns e.g. "https://api.filerobot.com/my-container"
 */
export function getApiBase(container: string): string {
  return `https://api.filerobot.com/${container}`;
}

/**
 * Exchange a security template ID for a SASS key.
 * Mirrors asset-picker's `exchangeSassKey()` pattern.
 */
export async function exchangeSassKey(
  container: string,
  securityTemplateId: string,
): Promise<string> {
  const url = `${getApiBase(container)}/key/${encodeURIComponent(securityTemplateId)}`;

  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 30_000);

  try {
    const response = await fetch(url, { signal: controller.signal });
    clearTimeout(timeoutId);

    if (!response.ok) {
      throw new Error(`SASS key exchange failed (HTTP ${response.status})`);
    }

    const data: SassKeyResponse = await response.json();
    if (data.status === 'error') {
      throw new Error(`SASS key exchange failed: ${data.msg || 'Unknown error'}`);
    }

    return data.key;
  } catch (err) {
    clearTimeout(timeoutId);
    if (err instanceof DOMException && err.name === 'AbortError') {
      throw new Error('SASS key exchange timed out');
    }
    throw err;
  }
}

/**
 * Build auth headers from a resolved SASS key or session tokens.
 */
export function buildAuthHeaders(auth: AuthConfig, resolvedSassKey?: string): AuthHeaders {
  const headers: AuthHeaders = {};

  switch (auth.mode) {
    case 'security-template':
      // After exchange, use the resolved SASS key; fallback to template ID
      headers['X-Filerobot-Key'] = resolvedSassKey ?? auth.securityTemplateId;
      break;

    case 'sass-key':
      headers['X-Filerobot-Key'] = auth.sassKey;
      break;

    case 'session':
      headers['X-Filerobot-Session'] = auth.sessionToken;
      if (auth.companyToken) headers['X-Company-Token'] = auth.companyToken;
      if (auth.projectToken) headers['X-Project-Token'] = auth.projectToken;
      break;
  }

  if (auth.airboxPuid) {
    headers['X-Filerobot-Airbox-Puid'] = auth.airboxPuid;
  }

  return headers;
}

/**
 * Resolve auth config into a ready-to-use API base + headers.
 * For security-template mode, performs the SASS key exchange.
 */
export async function resolveAuth(
  auth: AuthConfig,
): Promise<{ apiBase: string; headers: AuthHeaders; sassKey?: string }> {
  const apiBase = getApiBase(auth.container);

  if (auth.mode === 'security-template') {
    const sassKey = await exchangeSassKey(auth.container, auth.securityTemplateId);
    return { apiBase, headers: buildAuthHeaders(auth, sassKey), sassKey };
  }

  return { apiBase, headers: buildAuthHeaders(auth) };
}
