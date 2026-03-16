import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import { LanguageProvider } from '@/components/language-provider'
import { dictionaries, defaultLocale } from '@/lib/i18n'

const inter = Inter({
  subsets: ["latin"],
  variable: '--font-sans'
});

export const metadata: Metadata = {
  title: `Plug | ${dictionaries[defaultLocale].layout.titleSuffix}`,
  description: dictionaries[defaultLocale].layout.description,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang={defaultLocale} className="dark">
      <body className={`${inter.variable} bg-background text-foreground antialiased selection:bg-primary/20 selection:text-primary`}>
        <LanguageProvider>
          {children}
        </LanguageProvider>
        <Analytics />
      </body>
    </html>
  )
}
