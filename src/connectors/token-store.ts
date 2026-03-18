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
 * Returns a cleanup function to remove the listener.
 */
export function listenForAuthToken(
  expectedOrigin: string,
  onToken: (token: string) => void,
): () => void {
  const handler = (e: MessageEvent) => {
    // Validate origin matches the Companion URL
    if (e.origin !== new URL(expectedOrigin).origin) return;

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
