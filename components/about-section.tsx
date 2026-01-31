"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Award, Calendar, GraduationCap, Heart, Instagram, Facebook } from "lucide-react"
import { Button } from "@/components/ui/button"

const highlights = [
  {
    icon: GraduationCap,
    title: "Wykształcenie",
    description: "Magister Kosmetologii",
  },
  {
    icon: Calendar,
    title: "Doświadczenie",
    description: "W branży od 2019 roku",
  },
  {
    icon: Award,
    title: "Specjalizacja",
    description: "Makijaż permanentny & Stylizacja",
  },
  {
    icon: Heart,
    title: "Podejście",
    description: "Indywidualne & Profesjonalne",
  },
]

export function AboutSection() {
  return (
    <section id="about" className="relative overflow-visible pt-0 pb-4 lg:pb-12 bg-white dark:bg-card">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 pt-8 lg:pt-0">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-24 lg:items-stretch items-center">
          {/* Image - 50px taller on desktop, anchored to bottom, can overlap hero */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative lg:h-full overflow-visible pt-0"
          >
            {/* Mobile */}
            <div className="relative aspect-[4/5] overflow-hidden bg-[#F7E6E0] dark:bg-muted lg:hidden">
              <Image
                src="/images/klaudia-paszkiewicz.png"
                alt="mgr Klaudia Paszkiewicz - Kosmetolog"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
            {/* Desktop: ta sama wysokość co hero image, pozycja od góry sekcji (nie zmienia się przy powiększaniu treści po prawej) */}
            <div className="relative z-10 hidden w-full overflow-hidden lg:block lg:absolute lg:top-[86px] lg:bottom-auto lg:left-0 lg:right-0 lg:aspect-auto lg:h-[770px]">
              <div className="relative h-full w-full overflow-hidden bg-[#F7E6E0] dark:bg-muted">
                <Image
                  src="/images/klaudia-paszkiewicz.png"
                  alt="mgr Klaudia Paszkiewicz - Kosmetolog"
                  fill
                  className="object-cover object-top"
                />
                <div className="absolute top-2 right-0 bottom-0 left-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-0 lg:mt-20 max-lg:-translate-y-20"
          >
            {/* Spacer: zachowana wysokość po usunięciu etykiety "O mnie" */}
            <div className="h-8 shrink-0 hidden lg:block" aria-hidden />
            <h2 className="font-serif text-4xl lg:text-5xl font-medium leading-tight mb-0 min-h-[7.5rem] whitespace-nowrap mt-20">
              O mnie
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-4 -mt-10">
              Nazywam się Klaudia i od 7 lat z pasją zajmuję się profesjonalną stylizacją brwi i rzęs, prowadząc własny salon w centrum Krakowa.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Moje doświadczenie i nieustanne doskonalenie umiejętności pozwoliły mi opracować skuteczne techniki, które podkreślają naturalne piękno i dodają spojrzeniu wyjątkowej wyrazistości.
            </p>

            {/* Highlights Grid */}
            <div className="grid grid-cols-2 gap-x-6 gap-y-10">
              {highlights.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#F7E6E0] dark:bg-muted flex items-center justify-center">
                    <item.icon className="w-5 h-5 text-foreground" />
                  </div>
                  <div>
                    <p className="font-medium text-sm">{item.title}</p>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Social: Instagram, Facebook */}
            <div className="flex items-center gap-3 mt-[72px] max-lg:-translate-y-10">
              <span className="text-lg text-muted-foreground leading-relaxed">Zaobserwuj mnie:</span>
              <Button
                variant="outline"
                size="icon"
                className="h-10 w-10 border-foreground/20 hover:bg-foreground hover:text-primary-foreground transition-all duration-300"
                asChild
              >
                <a href="https://www.instagram.com/bolsia.brows/" target="_blank" rel="noopener noreferrer">
                  <Instagram className="w-5 h-5" />
                  <span className="sr-only">Instagram</span>
                </a>
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="h-10 w-10 border-foreground/20 hover:bg-foreground hover:text-primary-foreground transition-all duration-300"
                asChild
              >
                <a href="https://www.facebook.com/bolsia.makeup/" target="_blank" rel="noopener noreferrer">
                  <Facebook className="w-5 h-5" />
                  <span className="sr-only">Facebook</span>
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative line */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-border to-transparent" />
    </section>
  )
}
