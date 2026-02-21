"use client"

import { useEffect, useState } from "react"
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
    price: "1600",
    currency: "zł",
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
    price: "1600",
    currency: "zł",
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
    price: "1600",
    currency: "zł",
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

export function AcademySection() {
  const [activeTrainingId, setActiveTrainingId] = useState<string | null>(null)
  const activeTraining = trainings.find((training) => training.id === activeTrainingId) ?? null

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

  return (
    <section id="academy" className="relative pt-16 pb-4 lg:pt-[148px] lg:pb-12 bg-[#FFDCE8] dark:bg-background">
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
        <div className="mb-24 grid gap-8 md:grid-cols-2 lg:mb-28 lg:grid-cols-3 lg:auto-rows-fr">
          {trainings.map((training) => (
            <motion.div
              key={training.id}
              className="h-full"
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
                  className="group h-full w-full text-left"
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
                    <Card className="flex h-full flex-col bg-white dark:bg-card border-0 shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden">
                      <CardHeader className="relative pb-4">
                        <div className="pr-[9.75rem]">
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
                          </div>
                          <div className="absolute top-0 right-6 flex shrink-0 flex-col items-end gap-2">
                            <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-foreground/10 bg-background/60 text-muted-foreground transition-all duration-300 group-hover:scale-125 group-hover:bg-[#A44E70] group-hover:text-white">
                              <Plus className="h-4 w-4" />
                            </span>
                            <motion.div
                              layoutId={`training-cover-${training.id}`}
                              className="relative mt-2 w-[9.1rem] shrink-0"
                            >
                              <div className={`relative ${COVER_ASPECT_CLASS} w-full overflow-hidden rounded-xl border border-foreground/10 bg-muted/20 shadow-sm`}>
                                <Image
                                  src={training.cover}
                                  alt={`Okładka szkolenia ${training.title}`}
                                  fill
                                  className="object-cover"
                                />
                              </div>
                            </motion.div>
                          </div>
                        </div>
                      </CardHeader>

                      <CardContent className="mt-auto space-y-5 pt-0">
                        <motion.div layoutId={`training-subtitle-${training.id}`}>
                          <CardDescription className="text-sm">
                            {training.subtitle}
                          </CardDescription>
                        </motion.div>

                        <motion.div layoutId={`training-price-${training.id}`} className="flex items-baseline gap-1">
                          <span className="font-serif text-4xl font-medium">{training.price}</span>
                          <span className="text-lg text-muted-foreground">{training.currency}</span>
                        </motion.div>

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
                    <Button
                      variant="ghost"
                      size="icon"
                      className="absolute top-0 right-6 h-9 w-9 rounded-full hover:bg-[var(--bolsia-blush-dark)] hover:text-foreground dark:hover:bg-[#A44E70] dark:hover:text-white"
                      onClick={() => setActiveTrainingId(null)}
                    >
                      <X className="h-4 w-4" />
                      <span className="sr-only">Zamknij</span>
                    </Button>
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
                      className="mt-6 w-[179px] lg:absolute lg:right-6 lg:top-[4.25rem] lg:mt-0 lg:w-[284px] lg:-translate-x-4"
                    >
                      <div className={`relative ${COVER_ASPECT_CLASS} w-full overflow-hidden rounded-2xl border border-foreground/10 bg-muted/20`}>
                        <Image
                          src={activeTraining.cover}
                          alt={`Okładka szkolenia ${activeTraining.title}`}
                          fill
                          className="object-cover"
                        />
                      </div>
                    </motion.div>
                  </CardHeader>

                  <CardContent className="space-y-8 px-12 pb-12">
                    <div className="space-y-8 lg:pr-[20rem]">
                      <motion.div layoutId={`training-price-${activeTraining.id}`} className="flex items-baseline gap-2">
                        <span className="font-serif text-5xl lg:text-6xl font-medium">{activeTraining.price}</span>
                        <span className="text-2xl text-muted-foreground">{activeTraining.currency}</span>
                      </motion.div>

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
                        className="tracking-wide hover:bg-[#A44E70] hover:text-white dark:hover:bg-[#A44E70] dark:hover:text-white"
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

        {/* CTA – jeden przycisk poniżej kolumn */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex justify-center mt-10"
        >
          <Button
            size="lg"
            className="tracking-wide hover:bg-[#A44E70] hover:text-white dark:hover:bg-[#A44E70] dark:hover:text-white"
            asChild
          >
            <Link href="https://www.instagram.com/bolsia.brows/" target="_blank" rel="noopener noreferrer">
              Zapisz się na szkolenie
            </Link>
          </Button>
        </motion.div>

        {/* Bottom Note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center text-sm text-muted-foreground mt-12"
        >
          Wszystkie szkolenia obejmują profesjonalną sesję zdjęciową oraz certyfikat ukończenia.
          <br />
          Możliwość płatności ratalnej. Skontaktuj się, aby poznać szczegóły.
        </motion.p>
      </div>
    </section>
  )
}
