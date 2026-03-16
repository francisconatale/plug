"use client"

import React, { createContext, useContext, useState, useEffect } from 'react'
import { Locale, TranslationDict, dictionaries, defaultLocale } from '@/lib/i18n'

type LanguageContextType = {
    locale: Locale
    setLocale: (locale: Locale) => void
    t: <K extends keyof TranslationDict>(key: K) => TranslationDict[K]
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
    const [locale, setLocaleState] = useState<Locale>(defaultLocale)

    // Load locale from localStorage on mount
    useEffect(() => {
        const savedLocale = localStorage.getItem('locale') as Locale
        if (savedLocale && (savedLocale === 'en' || savedLocale === 'es' || savedLocale === 'pt')) {
            setLocaleState(savedLocale)
        }
    }, [])

    const setLocale = (newLocale: Locale) => {
        setLocaleState(newLocale)
        localStorage.setItem('locale', newLocale)
        // Update HTML lang attribute
        document.documentElement.lang = newLocale
    }

    const t = <K extends keyof TranslationDict>(key: K): TranslationDict[K] => {
        return dictionaries[locale][key]
    }

    return (
        <LanguageContext.Provider value={{ locale, setLocale, t }}>
            {children}
        </LanguageContext.Provider>
    )
}

export function useTranslation() {
    const context = useContext(LanguageContext)
    if (context === undefined) {
        throw new Error('useTranslation must be used within a LanguageProvider')
    }
    return context
}
