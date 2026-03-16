import en from '../config/locales/en.json'
import es from '../config/locales/es.json'
import pt from '../config/locales/pt.json'

export type TranslationDict = typeof en
export type Locale = 'en' | 'es' | 'pt'

export const dictionaries: Record<Locale, TranslationDict> = {
    en,
    es,
    pt,
}

export const defaultLocale: Locale = 'es'

export function getTranslation(locale: Locale) {
    return dictionaries[locale]
}
