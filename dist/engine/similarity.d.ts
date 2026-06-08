import { UploadFile } from '../store/store.types';
import { SimilarAsset } from '../sfx-uploader';
export declare const DEFAULT_SIMILARITY_ENDPOINT = "https://ai.scaleflex.com";
export type SimilarityConfidence = 'low' | 'mid' | 'high';
export declare function confidenceToThreshold(c?: SimilarityConfidence): number;
export interface SimilarityRequestOptions {
    container: string;
    sassKey: string;
    threshold: number;
    endpoint?: string;
    signal?: AbortSignal;
}
/** Resize to TARGET_WIDTH preserving aspect ratio (no upscale), encode as JPEG.
 *  Sub-target images are still re-encoded so the BE always receives JPEG. */
export declare function resizeForEmbedding(source: Blob): Promise<Blob>;
/** Single similarity check: resize the file to 300px, POST to the embedding
 *  endpoint, return the matched assets as SimilarAsset[]. Times out after
 *  REQUEST_TIMEOUT_MS; the caller's signal (when provided) is forwarded so a
 *  user cancel still aborts both the prep phase (remote fetch / decode) and
 *  the in-flight POST. */
export declare function checkSimilarity(file: UploadFile, opts: SimilarityRequestOptions): Promise<SimilarAsset[]>;
//# sourceMappingURL=similarity.d.ts.map