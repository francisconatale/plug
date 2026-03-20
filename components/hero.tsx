"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { TranslationDict } from "@/lib/i18n"
import siteConfig from "@/config/site.json"

interface HeroProps {
  heroT: TranslationDict['hero']
}

export function Hero({ heroT }: HeroProps) {
  const siteName = siteConfig.name.toUpperCase()

  return (
    <section className="relative min-h-screen px-6 md:px-12 lg:px-20 pt-28 pb-20 overflow-hidden bg-background">
      {/* ── Top editorial labels (Justify-Between) ── */}
      <div className="flex justify-between items-start text-[10px] md:text-xs tracking-[0.2em] text-primary/40 uppercase">
        <span>— {siteName} / 2026</span>
        <div className="text-center hidden md:block opacity-60">
          <p className="text-[9px] leading-tight italic normal-case max-w-[180px]">
            High-impact software development for modern business.
          </p>
        </div>
        <span>— DIGITAL STUDIO</span>
      </div>

      {/* ── Pill button (Centered) ── */}
      <div className="flex justify-center mt-6">
        <motion.div
          className="border border-primary/20 px-5 py-1.5 text-[9px] font-bold tracking-[0.3em] text-primary/80 uppercase cursor-pointer hover:border-primary hover:text-primary transition-all"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {heroT.ctaSecondary}
        </motion.div>
      </div>

      {/* ── Compact Visual Block ── */}
      <div className="relative mt-8 max-w-xl mx-auto z-10">
        {/* Simple Blue Box (Compact Ratio) */}
        <motion.div
          className="relative aspect-[2/1] overflow-hidden bg-primary shadow-sm"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Subtle gradient, no noise/texture */}
          <div
            className="absolute inset-0 opacity-20"
            style={{
              background: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(0,0,0,0.1) 100%)'
            }}
          />
        </motion.div>

        {/* SITE NAME — The single clear brand element */}
        <motion.div
          className="absolute -bottom-8 md:-bottom-12 left-0 right-0 text-center pointer-events-none select-none z-20"
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h1 className="font-[family-name:var(--font-display)] text-[18vw] md:text-[15vw] text-primary tracking-tighter leading-none m-0 p-0">
            {siteName}
          </h1>
        </motion.div>
      </div>

      {/* ── Core Messaging Zone ── */}
      <div className="relative mt-24 md:mt-32 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-end">
        {/* Left: Script sign + Main Heading + Description */}
        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, x: -15 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <span className="font-[family-name:var(--font-script)] text-3xl md:text-4xl text-primary/40 italic block lowercase">
            {heroT.headlineMain}
          </span>
          <h2 className="font-[family-name:var(--font-display)] text-4xl sm:text-5xl md:text-6xl text-primary tracking-tight leading-[0.9] uppercase max-w-lg">
            {heroT.headlineAccent}
          </h2>
          <p className="max-w-md text-sm text-muted-foreground leading-relaxed font-sans">
            {heroT.subheadline}
          </p>
        </motion.div>

        {/* Right: CTA & Decorative elements */}
        <motion.div
          className="flex flex-col items-start md:items-end gap-10"
          initial={{ opacity: 0, x: 15 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <div className="text-right hidden md:block opacity-40">
            <span className="text-[10px] tracking-widest text-muted-foreground uppercase opacity-50 block mb-1">Visual ID / V1.5</span>
            <div className="flex gap-1 justify-end text-primary text-xs">
              <span>✦</span><span>✦</span><span>✦</span>
            </div>
          </div>

          <Button
            size="lg"
            className="border border-primary bg-primary text-primary-foreground hover:bg-transparent hover:text-primary text-[10px] font-bold uppercase tracking-[0.2em] px-10 py-7 h-auto transition-all duration-300"
          >
            {heroT.ctaPrimary}
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </motion.div>
      </div>

      {/* Bottom bar */}
      <div className="absolute left-6 bottom-10 text-[9px] tracking-[0.2em] text-muted-foreground/40 uppercase pointer-events-none">
        All rights reserved — Digital Studio 2026
      </div>
    </section>
  )
}
