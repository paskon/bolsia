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
      size: 8 + Math.random() * 22,
      duration: 10 + Math.random() * 14,
      delay: Math.random() * 12,
      drift: (Math.random() - 0.5) * 80,
      rotate: (Math.random() - 0.5) * 20,
    }))
  }, [])
}

export function HeroSection() {
  const hearts = useHearts()

  return (
    <section id="home" className="relative min-h-[98vh] max-h-[1200px] lg:min-h-0 lg:h-[900px] lg:max-h-[900px] overflow-visible bg-[#FFDCE8] dark:bg-[var(--bolsia-blush-night)]">
      {/* Spadające serduszka – tylko w hero; na mobile start 20px powyżej viewport */}
      <div className="pointer-events-none absolute inset-0 z-[1] overflow-hidden max-lg:top-[-20px] max-lg:h-[calc(100%+20px)]" aria-hidden>
        {hearts.map((heart) => (
          <span
            key={heart.id}
            className="absolute text-[#EB6846]/35 dark:text-[#EB6846]/20"
            style={{
              left: `${heart.left}%`,
              top: "-40px",
              animation: `snow-fall ${heart.duration}s linear ${heart.delay}s infinite`,
              opacity: 0,
              animationFillMode: "both",
              ["--snow-drift" as string]: `${heart.drift}px`,
              ["--heart-rotate" as string]: `${heart.rotate}deg`,
            }}
          >
            <svg
              width={heart.size}
              height={heart.size}
              viewBox="0 0 24 24"
              aria-hidden
            >
              <path
                fill="currentColor"
                d="M12 21.35c-.42 0-.83-.15-1.16-.45C7.01 17.52 2 12.98 2 8.5 2 5.42 4.42 3 7.5 3c1.9 0 3.63.92 4.5 2.35C12.87 3.92 14.6 3 16.5 3 19.58 3 22 5.42 22 8.5c0 4.48-5.01 9.02-8.84 12.4-.33.3-.74.45-1.16.45z"
              />
            </svg>
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

      <div className="mx-auto grid min-h-[98vh] max-h-[1200px] max-w-7xl gap-8 px-6 pt-8 pb-8 items-end lg:min-h-0 lg:h-full lg:max-h-full lg:grid-cols-2 lg:px-8">
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
            className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
          >
            <Button 
              size="lg" 
              className="group h-14 w-full text-base tracking-wide hover:bg-[#A44E70] hover:text-white dark:hover:bg-[#A44E70] dark:hover:text-white sm:h-11 sm:w-auto sm:text-sm"
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
              className="h-14 w-full text-base tracking-wide border-foreground/20 hover:bg-[var(--bolsia-blush-dark)] hover:text-foreground dark:hover:bg-[#A44E70] dark:hover:text-white sm:h-11 sm:w-auto sm:text-sm"
              asChild
            >
              <Link href="#about">O mnie</Link>
            </Button>
          </motion.div>
        </motion.div>

        {/* Hero Image - 100px taller, extends below section on desktop */}
        <div className="relative order-1 lg:order-2 lg:h-full lg:overflow-visible">
          <motion.div 
            className="relative z-10 aspect-[3/4] w-full overflow-hidden lg:absolute lg:top-[3.5rem] lg:left-0 lg:right-0 lg:aspect-auto lg:h-[calc(100%-3.5rem+116px)] lg:max-h-[880px]"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <div className="absolute left-0 right-0 bottom-0 top-20 bg-gradient-to-t from-[#FFDCE8]/50 dark:from-[var(--bolsia-blush-night-soft)]/70 to-transparent z-10 lg:hidden" />
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
