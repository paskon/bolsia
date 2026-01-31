"use client"

import { useMemo } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

const HEART_COUNT = 55

function useHearts() {
  return useMemo(() => {
    return Array.from({ length: HEART_COUNT }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      size: 10 + Math.random() * 14,
      duration: 10 + Math.random() * 14,
      delay: Math.random() * 12,
      drift: (Math.random() - 0.5) * 80,
    }))
  }, [])
}

export function HeroSection() {
  const hearts = useHearts()

  return (
    <section id="home" className="relative min-h-[98vh] max-h-[1200px] overflow-visible bg-[#F7E6E0] dark:bg-background">
      {/* Spadające serduszka – tylko w hero; na mobile start 20px powyżej viewport */}
      <div className="pointer-events-none absolute inset-0 z-[1] overflow-hidden max-lg:top-[-20px] max-lg:h-[calc(100%+20px)]" aria-hidden>
        {hearts.map((heart) => (
          <span
            key={heart.id}
            className="absolute text-white/40 dark:text-white/5"
            style={{
              left: `${heart.left}%`,
              top: "-2%",
              fontSize: `${heart.size}px`,
              animation: `snow-fall ${heart.duration}s linear ${heart.delay}s infinite`,
              ["--snow-drift" as string]: `${heart.drift}px`,
            }}
          >
            ♥
          </span>
        ))}
      </div>
      {/* Logo: 32px od górnej krawędzi strony, animacja na wejście */}
      <motion.div
        className="absolute top-4 left-0 right-0 z-10 lg:top-8"
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="relative h-12 w-full max-w-md lg:h-[100px]">
            <Image
              src="/logos/logo-bolsia-horizontal.svg"
              alt="Bolsia"
              fill
              className="object-contain object-left dark:invert"
            />
          </div>
        </div>
      </motion.div>

      <div className="mx-auto grid min-h-[98vh] max-w-7xl gap-8 px-6 pt-8 pb-8 items-end lg:grid-cols-2 lg:h-[98vh] lg:px-8">
        {/* Text Content */}
        <motion.div 
          className="flex flex-col justify-end order-2 lg:order-1"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.h1 
            className="font-serif text-4xl font-medium leading-[1.1] tracking-tight md:text-5xl lg:text-6xl xl:text-7xl [font-feature-settings:'liga'_1,'clig'_1]"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <span className="block text-foreground">
              Ułożenie, które zmienia spojrzenie.
            </span>
          </motion.h1>
          
          <motion.p 
            className="mt-8 max-w-lg text-base leading-relaxed text-muted-foreground"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            Ekskluzywne szkolenia i zabiegi kosmetyczne w sercu Krakowa. 
            Doświadczenie, precyzja i indywidualne podejście do każdego klienta.
          </motion.p>
          
          <motion.div 
            className="mt-10 flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
          >
            <Button 
              size="lg" 
              className="group tracking-wide"
              asChild
            >
              <Link href="#academy">
                Poznaj Akademię
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="tracking-wide border-foreground/20 hover:bg-foreground hover:text-primary-foreground"
              asChild
            >
              <Link href="#about">O mnie</Link>
            </Button>
          </motion.div>
        </motion.div>

        {/* Hero Image - 100px taller, extends below section on desktop */}
        <div className="relative order-1 lg:order-2 lg:h-full lg:overflow-visible">
          <motion.div 
            className="relative z-10 aspect-[3/4] w-full overflow-hidden lg:absolute lg:bottom-0 lg:left-0 lg:right-0 lg:aspect-auto lg:h-[calc(85vh+100px)] lg:max-h-[1100px] lg:translate-y-[116px]"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <div className="absolute left-0 right-0 bottom-0 top-20 bg-gradient-to-t from-[#F7E6E0]/50 dark:from-background/70 to-transparent z-10 lg:hidden" />
            <div className="absolute inset-0 max-lg:translate-y-12 lg:translate-y-0">
              <Image
                src="/images/hero-fashion.png"
                alt="Bolsia Beauty Academy - profesjonalne szkolenia kosmetyczne"
                fill
                className="object-cover"
                priority
              />
            </div>
            {/* Decorative frame */}
            <div className="absolute inset-4 border border-white/30 pointer-events-none hidden lg:block" />
          </motion.div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/4 left-0 w-px h-32 bg-gradient-to-b from-transparent via-foreground/10 to-transparent hidden xl:block" />
      <div className="absolute top-1/3 right-0 w-px h-48 bg-gradient-to-b from-transparent via-foreground/10 to-transparent hidden xl:block" />
    </section>
  )
}
