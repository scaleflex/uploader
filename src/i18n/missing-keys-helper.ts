import { I18N_GRID_UUID, I18N_PROD_URL, I18N_NAMESPACE } from './constants'

const LS_KEY = 'sfxUploaderTranslationsMissingKeysEnabled'

class UploaderMissingKeysHelper {
  private enabled = false
  private _missingKeys: Record<string, { value: string; ns: string }> = {}
  private _timer: ReturnType<typeof setTimeout> | null = null
  private readonly debounceDelay = 2000

  constructor() {
    this.enabled =
      typeof localStorage !== 'undefined' &&
      localStorage.getItem(LS_KEY) === 'true'

    if (this.enabled) {
      console.log(
        '%c[uploader] TranslationMissingKeysHelper enabled',
        'font-weight:600;',
      )
    }

    this._missingKeys = new Proxy(this._missingKeys, {
      set: (target, prop, value, receiver) => {
        if (this._timer) clearTimeout(this._timer)
        this._timer = setTimeout(() => this._renderCurl(), this.debounceDelay)
        return Reflect.set(target, prop, value, receiver)
      },
    })
  }

  handleMissingKey(key: string, value = '', ns = I18N_NAMESPACE) {
    if (!this.enabled) return
    const mapKey = `${ns}:${key}`
    this._missingKeys[mapKey] = { value, ns }
  }

  private _renderCurl() {
    console.group('[uploader] Missing translation keys')
    console.log('%cMissing keys:', 'font-weight:600;font-size:200%;')
    console.table({ ...this._missingKeys })
    console.log('%ccURL (check carefully data before send):', 'font-weight:600;font-size:150%;')
    console.log(`
curl '${I18N_PROD_URL}/api/import/request-translations' \\
  --data-raw '{"grid_uuid":"${I18N_GRID_UUID}","translations_requests":${JSON.stringify(
    Object.entries(this._missingKeys).map(([mapKey, { value, ns }]) => ({
      key: ns && mapKey.startsWith(`${ns}:`) ? mapKey.slice(ns.length + 1) : mapKey,
      lang: 'en',
      default: value,
    })),
  ).replaceAll("'", "'\\''")}}'
    `)
    console.groupEnd()
  }
}

export const missingKeysHelper = new UploaderMissingKeysHelper()
