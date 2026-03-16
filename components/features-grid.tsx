import { Zap, Shield, Globe, BarChart3 } from "lucide-react"
import { TranslationDict } from "@/lib/i18n"

interface FeaturesGridProps {
  featuresT: TranslationDict['features']
}

export function FeaturesGrid({ featuresT }: FeaturesGridProps) {

  const features = [
    {
      icon: Zap,
      title: featuresT.items.fast.title,
      description: featuresT.items.fast.description,
    },
    {
      icon: Shield,
      title: featuresT.items.security.title,
      description: featuresT.items.security.description,
    },
    {
      icon: Globe,
      title: featuresT.items.global.title,
      description: featuresT.items.global.description,
    },
    {
      icon: BarChart3,
      title: featuresT.items.analytics.title,
      description: featuresT.items.analytics.description,
    },
  ]

  return (
    <section id="features" className="bg-card py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mb-10 sm:mb-12 lg:mb-16 text-center">
          <p className="mb-2 text-xs sm:text-sm font-medium uppercase tracking-widest text-primary">
            {featuresT.badge}
          </p>
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl lg:text-4xl">
            {featuresT.headline}
          </h2>
        </div>

        <div className="grid gap-4 sm:gap-6 lg:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group rounded-lg border border-border bg-background p-4 sm:p-6 transition-all hover:border-primary/50"
            >
              <div className="mb-3 sm:mb-4 inline-flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <feature.icon className="h-4 w-4 sm:h-5 sm:w-5" />
              </div>
              <h3 className="mb-1.5 sm:mb-2 text-sm sm:text-base font-semibold">{feature.title}</h3>
              <p className="text-xs sm:text-sm text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
