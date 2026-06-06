/** Catalogue entry from `/v5/taxonomies` — used to resolve a field's
 *  `taxonomy_suid` (the human code stored on the field) into the canonical
 *  `uuid` the `/v5/taxonomy/{uuid}/nodes` endpoint expects. */
export interface Taxonomy {
  uuid: string;
  suid: string;
  name: string;
}

/**
 * Raw tree node returned by the Hub taxonomy endpoint.
 *
 * `ltree` is the dot-notation path from the taxonomy root used as the `base`
 * query param when drilling deeper. `children.nodes` is preloaded up to the
 * response `limit` so we can render grandchildren as a placeholder while a
 * deeper fetch confirms the full list.
 */
export interface TaxonomyNode {
  uuid: string;
  name: string;
  ltree: string;
  slug: string;
  attr?: Record<string, unknown> | null;
  children: {
    count_direct: number;
    nodes: TaxonomyNode[];
  };
}

export interface TaxonomyNodesResponse {
  base_node: { uuid: string; name: string; slug: string; ltree: string } | null;
  nodes: TaxonomyNode[];
}

/** Autocomplete row from `/v5/metadata/autocomplete` for a taxonomy field. */
export interface TaxonomyAutocompleteTag {
  tag: string;
  path: string;
  suid: string;
  uuid: string;
  approx_count?: number;
}

/**
 * Display-side shadow record for a picked taxonomy node. Kept on the upload
 * file alongside the scalar `meta[key]` so the trigger button and read-only
 * cell can render the human breadcrumb without re-fetching.
 *
 * The backend only needs the scalar id (uuid for tree picks, suid for
 * autocomplete picks) — this struct never travels in the upload payload.
 */
export interface TaxonodeEntry {
  uuid: string;
  suid?: string;
  name: string;
  path: string;
  lineage: string;
  slug?: string;
  attributes?: Record<string, unknown> | null;
}
