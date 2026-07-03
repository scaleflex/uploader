/* Ambient type declarations for dynamically loaded Google APIs. */

declare namespace google.picker {
  enum Action {
    CANCEL = 'cancel',
    PICKED = 'picked',
  }

  enum Feature {
    MULTISELECT_ENABLED = 'multiselectEnabled',
  }

  interface Document {
    id: string;
    name: string;
    mimeType: string;
    sizeBytes?: number;
  }

  interface ResponseObject {
    action: string;
    docs?: Document[];
  }

  class DocsView {
    constructor();
    setIncludeFolders(include: boolean): this;
    setSelectFolderEnabled(enabled: boolean): this;
  }

  class PickerBuilder {
    constructor();
    addView(view: DocsView): this;
    setOAuthToken(token: string): this;
    setDeveloperKey(key: string): this;
    setAppId(appId: string): this;
    setCallback(callback: (data: ResponseObject) => void): this;
    enableFeature(feature: Feature): this;
    setMaxItems(max: number): this;
    build(): Picker;
  }

  class Picker {
    setVisible(visible: boolean): void;
  }
}

declare namespace google.accounts.oauth2 {
  interface TokenClient {
    requestAccessToken(overrides?: { prompt?: string }): void;
  }

  interface TokenClientConfig {
    client_id: string;
    scope: string;
    callback: (response: TokenResponse) => void;
    error_callback?: (error: { type: string; message: string }) => void;
  }

  interface TokenResponse {
    access_token: string;
    expires_in: number;
    error?: string;
    error_description?: string;
  }

  function initTokenClient(config: TokenClientConfig): TokenClient;
}

interface GapiLoadConfig {
  callback: () => void;
  onerror?: () => void;
  timeout?: number;
  ontimeout?: () => void;
}

interface Gapi {
  load(api: string, callbackOrConfig: (() => void) | GapiLoadConfig): void;
}

interface Window {
  gapi?: Gapi;
  google?: typeof google;
}
