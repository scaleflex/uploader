import { ULTRATAGS_CREATE_MODES } from './ultratags.constants';
export interface UltratagEntry {
    uuid: string;
    sid?: string;
    slug: string;
    meta_ckey?: string;
    i18n?: Record<string, string>;
    attr?: Record<string, unknown> | null;
    approx_count?: number;
    created_at?: string | null;
    updated_at?: string | null;
}
export interface UltratagsValueItem {
    slug?: string;
    sid?: string;
    uuid?: string;
    i18n?: Record<string, string>;
}
export type UltratagsValue = Array<string | UltratagsValueItem>;
export type UltratagsSort = 'slug' | 'updated_at' | 'created_at' | '-slug' | '-updated_at' | '-created_at';
export interface UltratagsListParams {
    meta?: string;
    q?: string;
    sort?: UltratagsSort;
    limit?: number;
    after?: string;
    format?: string;
    lang?: string;
}
export interface UltratagsBySidsParams {
    sids: string[];
    format?: string;
    lang?: string;
}
export interface UltratagsListStats {
    count: number;
    total_count: number;
}
export interface UltratagsListResponse {
    items: UltratagEntry[];
    stats?: UltratagsListStats;
    input?: Record<string, unknown>;
}
/**
 * An item in a create payload may be:
 *   - a plain string slug (server fills `i18n` with `{"~XX": <slug>}`),
 *   - a flat i18n map like `{ en: "rose", fr: "rose" }`,
 *   - a structured object with `i18n` / `slug` / `attr`.
 */
export type UltratagsCreateItem = string | Record<string, string> | {
    slug?: string;
    i18n?: Record<string, string>;
    attr?: Record<string, unknown>;
};
export type UltratagsCreateMode = (typeof ULTRATAGS_CREATE_MODES)[keyof typeof ULTRATAGS_CREATE_MODES];
export interface UltratagsCreateRequest {
    meta: string;
    mode?: UltratagsCreateMode;
    items: UltratagsCreateItem[];
}
export interface UltratagsCreateOutputItem {
    status: 'created' | 'existing';
    uuid: string;
    slug: string;
    sid: string;
    i18n: Record<string, string>;
    matched_by?: 'slug' | 'i18n';
}
export interface UltratagsCreateResponse {
    msg?: string;
    output: UltratagsCreateOutputItem[];
}
/** Public surface of the ultratags service, used as a Lit property type. */
export interface UltratagsServiceLike {
    list(params: UltratagsListParams): Promise<UltratagsListResponse>;
    getBySids(params: UltratagsBySidsParams): Promise<UltratagsListResponse>;
    create(req: UltratagsCreateRequest): Promise<UltratagsCreateResponse>;
    cancel(): void;
}
//# sourceMappingURL=ultratags.types.d.ts.map