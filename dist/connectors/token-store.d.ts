import { ProviderId } from './connector.types';
export declare function getToken(provider: ProviderId): string | null;
export declare function setToken(provider: ProviderId, token: string): void;
export declare function removeToken(provider: ProviderId): void;
/**
 * Listen for the OAuth token sent from the Companion popup via postMessage.
 * Returns a cleanup function to remove the listener.
 */
export declare function listenForAuthToken(expectedOrigin: string, onToken: (token: string) => void): () => void;
//# sourceMappingURL=token-store.d.ts.map