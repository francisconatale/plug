"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { TranslationDict } from "@/lib/i18n"

interface ScrollCanvasProps {
  scrollT: TranslationDict['scrollCanvas']
}

export function ScrollCanvas({ scrollT }: ScrollCanvasProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  })

  // Transforms for the rotating ring
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 360])
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.5, 1, 1.2])
  const ringOpacity = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [0, 1, 1, 0.4])
  const arcDash = useTransform(scrollYProgress, [0, 1], ["0% 100%", "100% 0%"])

  // Three section words fade in/out based on progress
  const word1Opacity = useTransform(scrollYProgress, [0, 0.15, 0.28, 0.4], [0, 1, 1, 0])
  const word2Opacity = useTransform(scrollYProgress, [0.3, 0.45, 0.58, 0.7], [0, 1, 1, 0])
  const word3Opacity = useTransform(scrollYProgress, [0.6, 0.75, 0.95, 1], [0, 1, 1, 0.6])

  const word1Y = useTransform(scrollYProgress, [0, 0.15], [30, 0])
  const word2Y = useTransform(scrollYProgress, [0.3, 0.45], [30, 0])
  const word3Y = useTransform(scrollYProgress, [0.6, 0.75], [30, 0])

  return (
    <section ref={containerRef} className="relative h-[200vh] border-t border-border">
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden bg-background">

        {/* Decorative rotating ring */}
        <motion.div
          className="absolute"
          style={{ rotate, scale: scale, opacity: ringOpacity }}
        >
          <svg width="340" height="340" viewBox="0 0 340 340" fill="none">
            <circle
              cx="170" cy="170" r="155"
              stroke="oklch(0.45 0.2 250)"
              strokeWidth="1"
              strokeOpacity="0.15"
            />
            <circle
              cx="170" cy="170" r="120"
              stroke="oklch(0.45 0.2 250)"
              strokeWidth="1.5"
              strokeOpacity="0.4"
              strokeDasharray="8 6"
            />
            <circle cx="170" cy="170" r="5" fill="oklch(0.45 0.2 250)" fillOpacity="0.7" />
          </svg>
        </motion.div>

        {/* Section label */}
        <div className="absolute top-8 left-1/2 -translate-x-1/2 text-[10px] tracking-[0.3em] text-primary/60 uppercase">
          {scrollT.badge}
        </div>

        {/* Word 1 */}
        <motion.h2
          className="absolute font-[family-name:var(--font-display)] text-6xl sm:text-8xl md:text-9xl text-primary tracking-tighter leading-none text-center"
          style={{ opacity: word1Opacity, y: word1Y }}
        >
          {scrollT.build}
        </motion.h2>

        {/* Word 2 */}
        <motion.h2
          className="absolute font-[family-name:var(--font-display)] text-6xl sm:text-8xl md:text-9xl text-primary tracking-tighter leading-none text-center"
          style={{ opacity: word2Opacity, y: word2Y }}
        >
          {scrollT.scale}
        </motion.h2>

        {/* Word 3 */}
        <motion.h2
          className="absolute font-[family-name:var(--font-display)] text-6xl sm:text-8xl md:text-9xl text-primary tracking-tighter leading-none text-center"
          style={{ opacity: word3Opacity, y: word3Y }}
        >
          {scrollT.launch}
        </motion.h2>

        {/* Scroll hint (fades out immediately) */}
        <motion.p
          className="absolute bottom-12 text-[10px] tracking-[0.25em] text-muted-foreground/60 uppercase"
          style={{ opacity: useTransform(scrollYProgress, [0, 0.08], [1, 0]) }}
        >
          {scrollT.scroll}
        </motion.p>

        {/* Progress bar */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 h-px bg-primary origin-left"
          style={{
            width: "80px",
            scaleX: scrollYProgress,
          }}
        />
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 h-px bg-border w-[80px]" />
      </div>
    </section>
  )
}
