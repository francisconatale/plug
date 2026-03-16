"use client"

import { useEffect, useRef, useState } from "react"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { TranslationDict } from "@/lib/i18n"

interface FinalCTAProps {
  finalT: TranslationDict['finalCta']
}

export function FinalCTA({ finalT }: FinalCTAProps) {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative flex min-h-[80vh] sm:min-h-screen flex-col items-center justify-center px-4 sm:px-6 py-16 sm:py-24"
    >
      {/* Subtle glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-1/2 h-[250px] w-[250px] sm:h-[400px] sm:w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/5 blur-3xl" />
      </div>

      <div
        className={`relative z-10 flex max-w-3xl flex-col items-center text-center transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
      >
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl text-balance">
          {finalT.headline}
        </h2>
        <p className="mt-4 sm:mt-6 max-w-xl text-base sm:text-lg text-muted-foreground leading-relaxed">
          {finalT.subheadline}
        </p>
        <Button
          size="lg"
          className="mt-8 sm:mt-10 group h-12 sm:h-14 px-6 sm:px-10 text-sm sm:text-base font-medium transition-transform hover:scale-[1.03] w-full sm:w-auto"
        >
          {finalT.cta}
          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Button>
        <p className="mt-4 sm:mt-6 text-xs sm:text-sm text-muted-foreground">
          {finalT.noCreditCard}
        </p>
      </div>
    </section>
  )
}
