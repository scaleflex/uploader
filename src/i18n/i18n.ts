import i18next, { type i18n } from 'i18next'
import HttpBackend from 'i18next-http-backend'
import { I18N_GRID_UUID, I18N_CDN_URL, I18N_NAMESPACE } from './constants'

let instance: i18n | null = null

// NOTE: module-level singleton — all <sfx-uploader> elements on the same page
// share one i18next instance. If two uploaders use different locales, the last one
// to initialise wins. This is an acceptable trade-off for the current use case.
export async function initI18n(locale = 'en'): Promise<{ i18n: i18n; isNew: boolean }> {
  if (instance) {
    if (instance.language !== locale) await instance.changeLanguage(locale)
    return { i18n: instance, isNew: false }
  }

  instance = i18next.createInstance()
  await instance.use(HttpBackend).init({
    lng: locale,
    fallbackLng: 'en',
    ns: [I18N_NAMESPACE],
    defaultNS: I18N_NAMESPACE,
    saveMissing: true, // enables missingKey event; no auto-send because no missingKeyHandler backend is wired
    missingKeyNoValueFallbackToKey: false,
    backend: {
      // The grid has no namespace in Wordplex; the CDN response format is:
      // { lng: { __without_namespace: { key: value, ... } } }
      loadPath: `${I18N_CDN_URL}/api/export/grid/f2/${I18N_GRID_UUID}?langs={{lng}}&separator=+&response_format=i18next_multi`,
      parse(data: string, languages?: string | string[]) {
        const json = JSON.parse(data) as Record<string, Record<string, Record<string, string>>>
        const lng = Array.isArray(languages) ? languages[0] : languages
        if (lng && json[lng]?.__without_namespace) {
          return json[lng].__without_namespace
        }
        return json
      },
    },
  })

  return { i18n: instance, isNew: true }
}

export function getI18nInstance(): i18n | null {
  return instance
}
