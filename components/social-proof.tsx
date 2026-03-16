"use client"
import { useEffect, useRef, useState } from "react"
import { TranslationDict } from "@/lib/i18n"

interface SocialProofProps {
  socialT: TranslationDict['socialProof']
}

export function SocialProof({ socialT }: SocialProofProps) {

  const metrics = [
    { value: "10M+", label: socialT.metrics.requests },
    { value: "99.99%", label: socialT.metrics.uptime },
    { value: "150ms", label: socialT.metrics.response },
    { value: "50K+", label: socialT.metrics.developers },
  ]

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
    <section ref={sectionRef} className="border-y border-border bg-secondary/30 py-10 sm:py-12 lg:py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid grid-cols-2 gap-6 sm:gap-8 md:grid-cols-4">
          {metrics.map((metric, i) => (
            <div
              key={metric.label}
              className={`text-center transition-all duration-700 ${isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
                }`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <p className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl lg:text-4xl">
                {metric.value}
              </p>
              <p className="mt-1 sm:mt-2 text-xs sm:text-sm text-muted-foreground">
                {metric.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
