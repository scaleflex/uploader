import { AuthHeaders } from '../../auth/auth.types';
import { TagOption } from '../schema/schema.types';
export declare function createTagsAutocomplete(apiBase: string, headers: AuthHeaders): {
    search(fieldCkey: string, query: string, callback: (results: TagOption[]) => void): void;
    cancel(): void;
};
//# sourceMappingURL=tags-autocomplete.d.ts.map