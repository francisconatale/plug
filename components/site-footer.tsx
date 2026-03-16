import Link from "next/link"
import siteConfig from '@/config/site.json'
import { TranslationDict } from "@/lib/i18n"

interface SiteFooterProps {
  commonT: TranslationDict['common']
}

export function SiteFooter({ commonT }: SiteFooterProps) {

  return (
    <footer className="border-t border-border bg-card py-8 sm:py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex flex-col items-center justify-between gap-4 sm:gap-6 md:flex-row">
          <Link href="/" className="text-lg sm:text-xl font-bold tracking-tight">
            {siteConfig.name.toUpperCase()}<span className="text-primary">.</span>
          </Link>

          <div className="flex items-center gap-4 sm:gap-6">
            <Link
              href="#"
              className="text-xs sm:text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {commonT.privacy}
            </Link>
            <Link
              href="#"
              className="text-xs sm:text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {commonT.terms}
            </Link>
            <Link
              href="#"
              className="text-xs sm:text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {commonT.contact}
            </Link>
            <Link
              href={`tel:${siteConfig.phone}`}
              className="text-xs sm:text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {siteConfig.phone}
            </Link>
          </div>

          <p className="text-xs sm:text-sm text-muted-foreground">
            © 2026 {siteConfig.name}. {commonT.allRightsReserved}
          </p>
        </div>
      </div>
    </footer>
  )
}
