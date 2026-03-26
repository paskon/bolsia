"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { AnimatePresence, motion } from "framer-motion"
import { Plus, Clock, Users, Camera, BookOpen, Award, X } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const trainings = [
  {
    id: "henna",
    title: "Henna Pudrowa",
    cover: "/images/training-cover-henna-pudrowa.png",
    subtitle: "Szkolenie indywidualne",
    duration: "9h",
    models: "3 modelki",
    edition: "Wydanie 2026",
    description: "Kompleksowe szkolenie z zakresu aplikacji henny pudrowej. Poznaj techniki tworzenia naturalnych, długotrwałych efektów podkreślających brwi.",
    includes: [
      "Teoria barwy i kształtu brwi",
      "Techniki mapowania i symetrii",
      "Praktyka na 3 modelkach",
      "Certyfikat ukończenia",
      "Profesjonalna sesja zdjęciowa prac",
      "Materiały szkoleniowe",
      "Wsparcie poszkoleniowe",
    ],
  },
  {
    id: "lashes",
    title: "Lami Lashes",
    cover: "/images/training-cover-lami-lashes.png",
    subtitle: "Szkolenie indywidualne",
    duration: "9h",
    models: "3 modelki",
    edition: "Wydanie 2026",
    description: "Naucz się profesjonalnej laminacji rzęs metodą Lami. Technika dająca spektakularny efekt uniesienia i pogrubienia naturalnych rzęs.",
    includes: [
      "Teoria budowy rzęsy",
      "Dobór odpowiedniego liftingu",
      "Techniki aplikacji krok po kroku",
      "Praktyka na 3 modelkach",
      "Certyfikat ukończenia",
      "Profesjonalna sesja zdjęciowa prac",
      "Materiały szkoleniowe",
      "Wsparcie poszkoleniowe",
    ],
  },
  {
    id: "brows",
    title: "Lami Brows",
    cover: "/images/training-cover-lami-brows.png",
    subtitle: "Szkolenie indywidualne",
    duration: "9h",
    models: "3 modelki",
    edition: "Wydanie 2026",
    description: "Opanuj sztukę laminacji brwi. Stwórz idealnie ułożone, pełne brwi o naturalnym wyglądzie, który utrzymuje się przez tygodnie.",
    includes: [
      "Analiza typów włosa i skóry",
      "Techniki układania brwi",
      "Korekta kształtu i zagęszczanie",
      "Praktyka na 3 modelkach",
      "Certyfikat ukończenia",
      "Profesjonalna sesja zdjęciowa prac",
      "Materiały szkoleniowe",
      "Wsparcie poszkoleniowe",
    ],
  },
  {
    id: "lash-brows",
    title: "Lami Lash & Brows",
    cover: "/images/training-cover-lami-lashes.png",
    secondaryCover: "/images/training-cover-lami-brows.png",
    subtitle: "Szkolenie indywidualne",
    duration: "2 dni",
    models: "6 modelek",
    edition: "Wydanie 2026",
    description:
      "Intensywne szkolenie łączone z laminacji rzęs i brwi, stworzone dla osób, które chcą kompleksowo opanować obie usługi w jednym programie. Pracujemy krok po kroku nad diagnostyką włosa, doborem produktów, bezpieczeństwem zabiegu oraz techniką wykonania, aby uzyskać trwały i estetyczny efekt. To praktyczny kurs, który pozwala od razu wdrożyć wiedzę do codziennej pracy z klientkami.",
    includes: [
      "Kompletny protokół laminacji rzęs i brwi",
      "Dobór techniki do typu włosa i efektu",
      "Praktyka na modelkach",
      "Certyfikat ukończenia",
      "Profesjonalna sesja zdjęciowa prac",
      "Materiały szkoleniowe",
      "Wsparcie poszkoleniowe",
    ],
    fullWidth: true,
  },
]

const features = [
  {
    icon: Users,
    title: "Tryb indywidualny",
    description: "Szkolenie 1:1 dla pełnej koncentracji",
  },
  {
    icon: Camera,
    title: "Sesja zdjęciowa",
    description: "Profesjonalne portfolio Twoich prac",
  },
  {
    icon: Award,
    title: "Certyfikat",
    description: "Potwierdzenie zdobytych umiejętności",
  },
  {
    icon: BookOpen,
    title: "Materiały",
    description: "Komplet materiałów szkoleniowych",
  },
]

const COVER_ASPECT_CLASS = "aspect-[801/1091]"
const AMBASSADOR_LOGOS = [
  { src: "/images/zola-logo.svg", alt: "Zola", href: "https://zola.ua/en" },
]

export function AcademySection() {
  const [activeTrainingId, setActiveTrainingId] = useState<string | null>(null)
  const activeTraining = trainings.find((training) => training.id === activeTrainingId) ?? null
  const ambassadorTrackRef = useRef<HTMLDivElement | null>(null)
  const isAmbassadorHoveredRef = useRef(false)

  useEffect(() => {
    if (!activeTraining) return

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveTrainingId(null)
      }
    }

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = "hidden"
    window.addEventListener("keydown", onKeyDown)

    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener("keydown", onKeyDown)
    }
  }, [activeTraining])

  useEffect(() => {
    const track = ambassadorTrackRef.current
    if (!track) return

    let rafId = 0
    let lastTime = performance.now()
    let x = 0

    const tick = (time: number) => {
      const dt = (time - lastTime) / 1000
      lastTime = time
      const speedPxPerSec = isAmbassadorHoveredRef.current ? 36 : 56
      const loopWidth = track.scrollWidth / 2

      x -= speedPxPerSec * dt
      if (-x >= loopWidth) {
        x += loopWidth
      }

      track.style.transform = `translateX(${x}px)`
      rafId = requestAnimationFrame(tick)
    }

    rafId = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(rafId)
  }, [])

  return (
    <section id="academy" className="relative pt-16 pb-0 lg:pt-[148px] lg:pb-0 bg-[#FFDCE8] dark:bg-[var(--bolsia-blush-night)]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="flex justify-center mb-6">
            <div className="relative w-[120px] h-[144px] shrink-0">
              <Image
                src="/logos/logo-bolsiaacademy-vertical.svg"
                alt="Akademia Bolsia"
                fill
                className="object-contain dark:invert"
              />
            </div>
          </div>
          <h2 className="font-serif text-4xl lg:text-5xl xl:text-6xl font-medium leading-tight mb-6">
            Szkolenia profesjonalne
          </h2>
          <p className="max-w-2xl mx-auto text-base text-muted-foreground leading-relaxed">
            Indywidualne szkolenia prowadzone z pasją i precyzją. 
            Każdy kurs to kompleksowe przygotowanie do pracy zawodowej, 
            zakończone profesjonalną sesją zdjęciową i certyfikatem.
          </p>
          <div className="mt-8 flex justify-center">
            <Button
              size="lg"
              className="h-14 w-full text-base tracking-wide hover:bg-[#A44E70] hover:text-white dark:hover:bg-[#A44E70] dark:hover:text-white sm:h-11 sm:w-auto sm:text-sm"
              asChild
            >
              <Link href="https://www.instagram.com/bolsia.brows/" target="_blank" rel="noopener noreferrer">
                Zapisz się na szkolenie
              </Link>
            </Button>
          </div>
        </motion.div>

        {/* Features Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {features.map((feature) => (
            <div key={feature.title} className="text-center">
              <div className="w-12 h-12 rounded-full mx-auto mb-3 bg-white/80 dark:bg-white/10 flex items-center justify-center">
                <feature.icon className="w-5 h-5 text-foreground" />
              </div>
              <p className="font-medium text-sm">{feature.title}</p>
              <p className="text-xs text-muted-foreground mt-1">{feature.description}</p>
            </div>
          ))}
        </motion.div>

        {/* Training Cards */}
        <div className="mb-0 grid gap-8 md:grid-cols-2 lg:mb-0 lg:grid-cols-3 lg:auto-rows-fr">
          {trainings.map((training) => (
            <motion.div
              key={training.id}
              className={training.fullWidth ? "h-full md:col-span-2 lg:col-span-3" : "h-full"}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6 }}
            >
              {activeTrainingId === training.id ? (
                <div className="h-full rounded-3xl bg-transparent" aria-hidden />
              ) : (
                <motion.button
                  type="button"
                  className="group h-full w-full cursor-pointer text-left"
                  onClick={() => setActiveTrainingId(training.id)}
                  whileTap={{ scale: 0.995 }}
                >
                  <motion.div
                    layoutId={`training-card-${training.id}`}
                    className="h-full"
                    whileHover={{ scale: 1.02 }}
                    transition={{
                      duration: 0.14,
                      ease: "easeOut",
                      layout: { type: "spring", stiffness: 380, damping: 38, mass: 0.6, bounce: 0 },
                    }}
                  >
                    <Card className={`flex ${training.secondaryCover ? "h-auto lg:h-[330px]" : "h-auto lg:h-[376px]"} flex-col bg-white dark:bg-card border-0 shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden`}>
                      <CardHeader className="relative pb-4">
                        <div className={training.secondaryCover ? "pr-[8.25rem] lg:pr-[18rem]" : "pr-[9.75rem]"}>
                          <div className="min-w-0">
                            <motion.span
                              layoutId={`training-edition-${training.id}`}
                              className="mb-3 inline-flex text-xs tracking-[0.2em] text-muted-foreground uppercase rounded-full bg-[#FFDCE8] dark:bg-accent/20 px-3 py-1"
                            >
                              {training.edition}
                            </motion.span>
                            <motion.div layoutId={`training-title-${training.id}`}>
                              <CardTitle className="font-serif text-2xl lg:text-3xl font-medium">
                                {training.id === "lashes" ? (
                                  <>
                                    <span className="block">Lami</span>
                                    <span className="block">Lashes</span>
                                  </>
                                ) : training.id === "brows" ? (
                                  <>
                                    <span className="block">Lami</span>
                                    <span className="block">Brows</span>
                                  </>
                                ) : (
                                  training.title
                                )}
                              </CardTitle>
                            </motion.div>
                            <motion.div layoutId={`training-subtitle-${training.id}`}>
                              <CardDescription className="mt-1 text-sm">
                                {training.subtitle}
                              </CardDescription>
                            </motion.div>
                          </div>
                          <div className="absolute top-0 right-4 flex shrink-0 flex-col items-end gap-2 lg:right-6">
                            <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-foreground/10 bg-background/60 text-muted-foreground transition-all duration-300 group-hover:scale-125 group-hover:bg-[#A44E70] group-hover:text-white">
                              <Plus className="h-4 w-4" />
                            </span>
                            <motion.div
                              layoutId={`training-cover-${training.id}`}
                              className={training.secondaryCover ? "relative mt-2 hidden w-[6.8rem] shrink-0 sm:block lg:mr-10 lg:w-[10.7rem]" : "relative mt-2 hidden w-[8.2rem] shrink-0 sm:block"}
                            >
                              {training.secondaryCover ? (
                                <div className="relative h-[8.8rem] w-full lg:h-[14.3rem]">
                                  <div className={`absolute left-0 -top-4 w-[86%] ${COVER_ASPECT_CLASS} overflow-hidden rounded-xl border border-foreground/10 bg-muted/20 shadow-sm transition-transform duration-300 group-hover:scale-[1.08] group-hover:rotate-2 lg:-top-12`}>
                                    <Image
                                      src={training.cover}
                                      alt={`Okładka szkolenia ${training.title}`}
                                      fill
                                      className="object-cover"
                                    />
                                  </div>
                                  <div className={`absolute left-8 top-3 w-[86%] ${COVER_ASPECT_CLASS} overflow-hidden rounded-xl border border-foreground/10 bg-muted/20 shadow-sm transition-transform duration-300 group-hover:scale-[1.08] group-hover:-rotate-2 lg:left-16 lg:top-6`}>
                                    <Image
                                      src={training.secondaryCover}
                                      alt={`Druga okładka szkolenia ${training.title}`}
                                      fill
                                      className="object-cover"
                                    />
                                  </div>
                                </div>
                              ) : (
                                <div className={`relative ${COVER_ASPECT_CLASS} w-full overflow-hidden rounded-xl border border-foreground/10 bg-muted/20 shadow-sm transition-transform duration-300 group-hover:scale-[1.08] group-hover:rotate-2`}>
                                  <Image
                                    src={training.cover}
                                    alt={`Okładka szkolenia ${training.title}`}
                                    fill
                                    className="object-cover"
                                  />
                                </div>
                              )}
                            </motion.div>
                          </div>
                        </div>
                      </CardHeader>

                      <CardContent className={`mt-auto space-y-5 pt-0 ${training.secondaryCover ? "pr-[8.25rem] lg:pr-[18rem]" : ""}`}>
                        <div className="flex gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1.5">
                            <Clock className="w-4 h-4" />
                            <span>{training.duration}</span>
                          </div>
                          <div className="flex items-center gap-1.5">
                            <Users className="w-4 h-4" />
                            <span>{training.models}</span>
                          </div>
                        </div>

                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {training.description}
                        </p>
                      </CardContent>

                    </Card>
                  </motion.div>
                </motion.button>
              )}
            </motion.div>
          ))}

        </div>

        <AnimatePresence>
          {activeTraining && (
            <motion.div
              className="fixed inset-0 z-[120] p-4 lg:p-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
              onClick={() => setActiveTrainingId(null)}
            >
              <div className="absolute inset-0 bg-black/45 backdrop-blur-sm" />
              <motion.div
                layoutId={`training-card-${activeTraining.id}`}
                className="relative mx-auto max-w-4xl"
                initial={{ opacity: 0.98, scale: 0.985 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0.98, scale: 0.985 }}
                transition={{
                  duration: 0.18,
                  ease: [0.22, 1, 0.36, 1],
                  layout: { type: "spring", stiffness: 380, damping: 38, mass: 0.6, bounce: 0 },
                }}
                onClick={(event) => event.stopPropagation()}
              >
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute right-6 top-4 z-30 h-9 w-9 rounded-full bg-background/70 backdrop-blur-sm hover:bg-[var(--bolsia-blush-dark)] hover:text-foreground dark:bg-card/70 dark:hover:bg-[#A44E70] dark:hover:text-white"
                  onClick={() => setActiveTrainingId(null)}
                >
                  <X className="h-4 w-4" />
                  <span className="sr-only">Zamknij</span>
                </Button>
                <Card className="max-h-[90vh] overflow-y-auto bg-white dark:bg-card border-0 shadow-2xl rounded-3xl">
                  <CardHeader className="relative p-12">
                    <div className="mb-2">
                      <motion.span
                        layoutId={`training-edition-${activeTraining.id}`}
                        className="text-xs tracking-[0.2em] text-muted-foreground uppercase rounded-full bg-[#FFDCE8] dark:bg-accent/20 px-3 py-1"
                      >
                        {activeTraining.edition}
                      </motion.span>
                    </div>
                    <div className="lg:pr-[20rem]">
                      <motion.div layoutId={`training-title-${activeTraining.id}`}>
                        <CardTitle className="font-serif text-3xl lg:text-5xl font-medium">
                          {activeTraining.title}
                        </CardTitle>
                      </motion.div>
                      <motion.div layoutId={`training-subtitle-${activeTraining.id}`}>
                        <CardDescription className="text-base mt-2">
                          {activeTraining.subtitle}
                        </CardDescription>
                      </motion.div>
                    </div>

                    <motion.div
                      layoutId={`training-cover-${activeTraining.id}`}
                      className="mt-6 w-full lg:absolute lg:right-6 lg:top-[4.25rem] lg:mt-0 lg:w-[227px] lg:-translate-x-4"
                    >
                      {activeTraining.secondaryCover ? (
                        <div className="relative h-[22rem] w-full lg:h-[16rem]">
                          <div className={`absolute bottom-0 left-0 w-[82%] ${COVER_ASPECT_CLASS} overflow-hidden rounded-2xl border border-foreground/10 bg-muted/20 lg:w-[88%] lg:-translate-x-10`}>
                            <Image
                              src={activeTraining.cover}
                              alt={`Okładka szkolenia ${activeTraining.title}`}
                              fill
                              className="object-cover"
                            />
                          </div>
                          <div className={`absolute bottom-0 right-0 translate-y-24 w-[82%] ${COVER_ASPECT_CLASS} overflow-hidden rounded-2xl border border-foreground/10 bg-muted/20 lg:w-[88%] lg:translate-y-40`}>
                            <Image
                              src={activeTraining.secondaryCover}
                              alt={`Druga okładka szkolenia ${activeTraining.title}`}
                              fill
                              className="object-cover"
                            />
                          </div>
                        </div>
                      ) : (
                        <div className={`relative ${COVER_ASPECT_CLASS} w-full overflow-hidden rounded-2xl border border-foreground/10 bg-muted/20`}>
                          <Image
                            src={activeTraining.cover}
                            alt={`Okładka szkolenia ${activeTraining.title}`}
                            fill
                            className="object-cover"
                          />
                        </div>
                      )}
                    </motion.div>
                  </CardHeader>

                  <CardContent className="space-y-8 px-12 pb-12">
                    <div className="space-y-8 lg:pr-[20rem]">
                      <div className="flex flex-wrap gap-6 text-base text-muted-foreground">
                        <div className="flex items-center gap-2">
                          <Clock className="w-5 h-5" />
                          <span>{activeTraining.duration}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Users className="w-5 h-5" />
                          <span>{activeTraining.models}</span>
                        </div>
                      </div>

                      <p className="text-base text-muted-foreground leading-relaxed">
                        {activeTraining.description}
                      </p>
                    </div>

                    <div className="border-t border-border pt-6">
                      <h3 className="text-sm font-medium uppercase tracking-[0.14em] text-muted-foreground mb-4">
                        Co zawiera szkolenie
                      </h3>
                      <ul className="grid gap-3 sm:grid-cols-2">
                        {activeTraining.includes.map((item, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm lg:text-base text-muted-foreground">
                            <span className="mt-2 h-1.5 w-1.5 rounded-full bg-foreground/40 flex-shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-2">
                      <Button
                        size="lg"
                        className="h-14 w-full text-base tracking-wide hover:bg-[#A44E70] hover:text-white dark:hover:bg-[#A44E70] dark:hover:text-white sm:h-11 sm:w-auto sm:text-sm"
                        asChild
                      >
                        <Link href="https://www.instagram.com/bolsia.brows/" target="_blank" rel="noopener noreferrer">
                          Zapisz się na szkolenie
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Bottom Note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center text-sm text-muted-foreground mt-8 lg:mt-0"
        >
          Wszystkie szkolenia obejmują profesjonalną sesję zdjęciową oraz certyfikat ukończenia.
          <br />
          Skontaktuj się, aby poznać szczegóły.
        </motion.p>
      </div>

      {/* Full-width Ambassador Stripe */}
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.45 }}
        className="group/ambassador relative left-1/2 right-1/2 mt-12 w-screen -translate-x-1/2 bg-white/35 py-8 dark:bg-white/5"
        onMouseEnter={() => {
          isAmbassadorHoveredRef.current = true
        }}
        onMouseLeave={() => {
          isAmbassadorHoveredRef.current = false
        }}
      >
        <p className="text-center text-sm font-bold tracking-[0.18em] uppercase">
          Oficjalna ambasadorka
        </p>
        <div className="mt-10 overflow-hidden">
          <div ref={ambassadorTrackRef} className="flex w-max items-center gap-12 px-6">
            {[
              ...AMBASSADOR_LOGOS,
              ...AMBASSADOR_LOGOS,
              ...AMBASSADOR_LOGOS,
              ...AMBASSADOR_LOGOS,
              ...AMBASSADOR_LOGOS,
              ...AMBASSADOR_LOGOS,
              ...AMBASSADOR_LOGOS,
              ...AMBASSADOR_LOGOS,
            ].map((logo, i) => (
              <a
                key={`${logo.alt}-${i}`}
                href={logo.href}
                target="_blank"
                rel="noopener noreferrer"
                className="relative h-11 w-32 shrink-0 transition-opacity duration-200 hover:opacity-80"
                aria-label={`${logo.alt} - oficjalna strona`}
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  fill
                  className="object-contain brightness-0 saturate-0 dark:invert"
                />
              </a>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  )
}
