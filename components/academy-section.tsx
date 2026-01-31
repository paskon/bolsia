"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Clock, Users, Camera, BookOpen, Award } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import Link from "next/link"

const trainings = [
  {
    id: "henna",
    title: "Henna Pudrowa",
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

export function AcademySection() {
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
          {features.map((feature, index) => (
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
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {trainings.map((training, index) => (
            <motion.div
              key={training.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <Card className="h-full bg-white dark:bg-card border-0 shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden">
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between mb-2">
                    <span className="text-xs tracking-[0.2em] text-muted-foreground uppercase rounded-full bg-[#FFDCE8] dark:bg-accent/20 px-3 py-1">
                      {training.edition}
                    </span>
                  </div>
                  <CardTitle className="font-serif text-2xl lg:text-3xl font-medium">
                    {training.title}
                  </CardTitle>
                  <CardDescription className="text-sm">
                    {training.subtitle}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  {/* Price */}
                  <div className="flex items-baseline gap-1">
                    <span className="font-serif text-4xl font-medium">{training.price}</span>
                    <span className="text-lg text-muted-foreground">{training.currency}</span>
                  </div>

                  {/* Quick Info */}
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

                  {/* Accordion Details */}
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="includes" className="border-t">
                      <AccordionTrigger className="text-sm font-medium py-3 hover:no-underline">
                        Co zawiera szkolenie?
                      </AccordionTrigger>
                      <AccordionContent>
                        <ul className="space-y-2">
                          {training.includes.map((item, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                              <span className="w-1.5 h-1.5 bg-foreground/30 rounded-full mt-2 flex-shrink-0" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

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
            className="tracking-wide"
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
