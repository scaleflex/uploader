import type { ProviderId } from './connector.types';

const PREFIX = 'sfx-uploader-token:';

export function getToken(provider: ProviderId): string | null {
  try {
    return localStorage.getItem(`${PREFIX}${provider}`);
  } catch {
    return null;
  }
}

export function setToken(provider: ProviderId, token: string): void {
  try {
    localStorage.setItem(`${PREFIX}${provider}`, token);
  } catch {
    // storage full or blocked — token will be lost on reload
  }
}

export function removeToken(provider: ProviderId): void {
  try {
    localStorage.removeItem(`${PREFIX}${provider}`);
  } catch {
    // ignore
  }
}

/**
 * Listen for the OAuth token sent from the Companion popup via postMessage.
 * Validates the message comes from the popup we opened (via `e.source`) rather
 * than checking `e.origin`, because the Companion may redirect through
 * intermediate domains during the OAuth flow.
 * Returns a cleanup function to remove the listener.
 */
export function listenForAuthToken(
  authWindow: Window | null,
  onToken: (token: string) => void,
): () => void {
  const handler = (e: MessageEvent) => {
    // Only accept messages from the popup we opened
    if (authWindow && e.source !== authWindow) return;

    const data = typeof e.data === 'string' ? tryParseJSON(e.data) : e.data;
    if (data?.token) {
      onToken(data.token);
    }
  };

  window.addEventListener('message', handler);
  return () => window.removeEventListener('message', handler);
}

function tryParseJSON(str: string): Record<string, unknown> | null {
  try {
    return JSON.parse(str);
  } catch {
    return null;
  }
}
