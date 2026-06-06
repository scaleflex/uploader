import { AuthHeaders } from '../../auth/auth.types';
import { Taxonomy, TaxonomyAutocompleteTag, TaxonomyNodesResponse } from './taxonomies.types';
export interface TaxonomyService {
    /**
     * Catalogue of all taxonomies in the project. Used to resolve a field's
     * `taxonomy_suid` into the `uuid` the `/nodes` endpoint expects. Cached
     * per-service-instance after the first call.
     */
    fetchTaxonomies(): Promise<Taxonomy[]>;
    fetchNodes(taxonomyUuid: string, baseLtree?: string, limit?: number): Promise<TaxonomyNodesResponse>;
    autocomplete(fieldCkey: string, query: string, callback: (results: TaxonomyAutocompleteTag[]) => void): void;
    cancel(): void;
}
export declare function createTaxonomyService(apiBase: string, headers: AuthHeaders): TaxonomyService;
//# sourceMappingURL=taxonomies-service.d.ts.map