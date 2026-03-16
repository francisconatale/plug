import { cookies } from 'next/headers'
import { Locale, defaultLocale } from './i18n'

export async function getServerLocale(): Promise<Locale> {
    const cookieStore = await cookies()
    const locale = cookieStore.get('locale')?.value as Locale

    if (locale && (locale === 'en' || locale === 'es' || locale === 'pt')) {
        return locale
    }

    return defaultLocale
}
