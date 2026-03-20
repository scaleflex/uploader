/**
 * Canva Design Button SDK integration.
 *
 * Loads the Canva SDK from their CDN and provides methods to
 * open the design editor. On publish, the exported image URL is
 * fetched and returned as a File object.
 *
 * Docs: https://www.canva.com/developers/docs/design-button/
 */

const SDK_URL = 'https://sdk.canva.com/designbutton/v2/api.js';

interface CanvaDesignButtonApi {
  createDesign(opts: {
    design?: { type?: string };
    onDesignPublish: (result: { exportUrl: string; designId: string; designTitle: string }) => void;
    onDesignClose?: () => void;
  }): void;

  editDesign(opts: {
    designId: string;
    onDesignPublish: (result: { exportUrl: string; designId: string; designTitle: string }) => void;
    onDesignClose?: () => void;
  }): void;
}

declare global {
  interface Window {
    Canva?: {
      DesignButton: {
        initialize(opts: { apiKey: string }): Promise<CanvaDesignButtonApi>;
      };
    };
  }
}

let _sdkPromise: Promise<void> | null = null;
let _apiInstance: CanvaDesignButtonApi | null = null;
let _initApiKey: string | null = null;

/** Load the Canva SDK script if not already loaded. */
function loadSdk(): Promise<void> {
  if (_sdkPromise) return _sdkPromise;

  _sdkPromise = new Promise<void>((resolve, reject) => {
    if (window.Canva?.DesignButton) {
      resolve();
      return;
    }

    const script = document.createElement('script');
    script.src = SDK_URL;
    script.async = true;
    script.onload = () => resolve();
    script.onerror = () => {
      _sdkPromise = null;
      reject(new Error('Failed to load Canva SDK'));
    };
    document.head.appendChild(script);
  });

  return _sdkPromise;
}

/** Initialize the Canva Design Button API. Caches the instance per API key. */
async function getApi(apiKey: string): Promise<CanvaDesignButtonApi> {
  if (_apiInstance && _initApiKey === apiKey) return _apiInstance;

  await loadSdk();

  if (!window.Canva?.DesignButton) {
    throw new Error('Canva SDK loaded but Canva.DesignButton is not available');
  }

  _apiInstance = await window.Canva.DesignButton.initialize({ apiKey });
  _initApiKey = apiKey;
  return _apiInstance;
}

export interface CanvaDesignResult {
  file: File;
  designId: string;
  designTitle: string;
}

/**
 * Open the Canva Design editor. Returns a promise that resolves with the
 * exported File when the user publishes, or rejects if they close without publishing.
 */
export async function openCanvaDesigner(
  apiKey: string,
  designType?: string,
): Promise<CanvaDesignResult> {
  const api = await getApi(apiKey);

  return new Promise((resolve, reject) => {
    api.createDesign({
      design: designType ? { type: designType } : undefined,
      onDesignPublish: async (result) => {
        try {
          const file = await fetchExportedFile(result.exportUrl, result.designTitle);
          resolve({
            file,
            designId: result.designId,
            designTitle: result.designTitle,
          });
        } catch (err) {
          reject(err);
        }
      },
      onDesignClose: () => {
        reject(new CanvaClosedError());
      },
    });
  });
}

/** Fetch the exported image URL and convert it to a File object. */
async function fetchExportedFile(exportUrl: string, title: string): Promise<File> {
  const res = await fetch(exportUrl);
  if (!res.ok) throw new Error(`Failed to fetch Canva export (HTTP ${res.status})`);

  const blob = await res.blob();
  const ext = blob.type === 'image/png' ? '.png' : blob.type === 'image/jpeg' ? '.jpg' : '.png';
  const name = `${title || 'canva-design'}${ext}`;
  return new File([blob], name, { type: blob.type || 'image/png' });
}

/** Thrown when the user closes the Canva editor without publishing. */
export class CanvaClosedError extends Error {
  constructor() {
    super('Canva editor closed without publishing');
    this.name = 'CanvaClosedError';
  }
}
