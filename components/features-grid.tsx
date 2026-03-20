"use client"

import { motion } from "framer-motion"
import { Zap, Shield, Globe, BarChart3 } from "lucide-react"
import { TranslationDict } from "@/lib/i18n"
import siteConfig from "@/config/site.json"

interface FeaturesGridProps {
  featuresT: TranslationDict['features']
}

export function FeaturesGrid({ featuresT }: FeaturesGridProps) {
  const siteName = siteConfig.name.toUpperCase()

  const features = [
    {
      icon: Zap,
      title: featuresT.items.fast.title,
      description: featuresT.items.fast.description,
      num: "01"
    },
    {
      icon: Shield,
      title: featuresT.items.security.title,
      description: featuresT.items.security.description,
      num: "02"
    },
    {
      icon: Globe,
      title: featuresT.items.global.title,
      description: featuresT.items.global.description,
      num: "03"
    },
    {
      icon: BarChart3,
      title: featuresT.items.analytics.title,
      description: featuresT.items.analytics.description,
      num: "04"
    },
  ]

  return (
    <section id="features" className="relative px-6 md:px-12 lg:px-20 py-16 sm:py-20 lg:py-24 overflow-hidden border-t border-border">
      {/* Background large text watermark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden select-none">
        <span className="font-[family-name:var(--font-display)] text-[22vw] text-primary/5 tracking-tighter whitespace-nowrap uppercase">
          {siteName}
        </span>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section label */}
        <div className="flex items-center gap-4 mb-12">
          <span className="text-[10px] md:text-xs tracking-widest text-primary uppercase">{featuresT.badge}</span>
          <div className="w-24 h-px bg-primary/20" />
        </div>

        <motion.h2
          className="font-[family-name:var(--font-display)] text-4xl sm:text-5xl md:text-6xl text-primary tracking-tight leading-none mb-12 lg:mb-16 max-w-4xl"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {featuresT.headline}
        </motion.h2>

        <div className="grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className="group border border-border bg-card/10 backdrop-blur-[2px] p-6 lg:p-8 transition-all hover:bg-card/20 hover:border-primary/30"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <span className="font-[family-name:var(--font-display)] text-5xl text-primary/10 block mb-4 group-hover:text-primary/20 transition-colors">{feature.num}</span>
              <div className="mb-6 inline-flex h-12 w-12 items-center justify-center border border-primary/10 text-primary">
                <feature.icon className="h-5 w-5" />
              </div>
              <h3 className="font-[family-name:var(--font-display)] text-2xl tracking-wide text-primary mb-3">{feature.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Decorative corners */}
      <div className="absolute bottom-0 left-0 w-24 h-24 border-l border-b border-primary/20" />
      <div className="absolute top-0 right-0 w-24 h-24 border-r border-t border-primary/20" />
    </section>
  )
}
