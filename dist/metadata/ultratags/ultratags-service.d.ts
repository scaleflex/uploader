import { AuthHeaders } from '../../auth/auth.types';
import { UltratagsServiceLike } from './ultratags.types';
/**
 * Build a service against the Filerobot georeplicated API for ultratags.
 * Uses the same `apiBase` + auth headers wired for `/v5/metadata/autocomplete`.
 *
 * - `list` debounces 300ms and aborts any prior in-flight request so the input
 *   never races; the returned Promise resolves with the latest valid response
 *   or rejects with the AbortError when cancelled by a subsequent call.
 * - `getBySids` and `create` fire immediately (no debounce).
 */
export declare function createUltratagsService(apiBase: string, headers: AuthHeaders): UltratagsServiceLike;
//# sourceMappingURL=ultratags-service.d.ts.map