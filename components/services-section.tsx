"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const services = [
  {
    id: "permanent",
    category: "Makijaż Permanentny",
    title: "Permanent Makeup",
    description: "Profesjonalny makijaż permanentny brwi, ust i oczu. Precyzyjne techniki dla naturalnego efektu, który podkreśli Twoje piękno na co dzień.",
    treatments: ["Brwi pudrowe", "Brwi ombre"],
  },
  {
    id: "henna",
    category: "Stylizacja Brwi",
    title: "Henna Pudrowa",
    description: "Naturalna metoda podkreślenia brwi z efektem głębi i cieniowania. Idealna alternatywa dla makijażu permanentnego.",
    treatments: ["Henna pudrowa", "Regulacja brwi", "Stylizacja kształtu"],
  },
  {
    id: "lamination",
    category: "Laminacja",
    title: "Lami Lashes & Brows",
    description: "Profesjonalna laminacja rzęs i brwi dla spektakularnego efektu uniesienia i ułożenia. Naturalny look na co dzień.",
    treatments: ["Laminacja rzęs", "Laminacja brwi", "Botox rzęs", "Farbowanie"],
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="relative py-24 lg:py-32 bg-white dark:bg-card">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-16 lg:mb-20"
        >
          <div className="grid lg:grid-cols-2 gap-8 items-end">
            <div>
              <h2 className="font-serif text-4xl lg:text-5xl xl:text-6xl font-medium leading-tight">
                Zabiegi kosmetyczne
              </h2>
            </div>
            <div className="lg:text-right">
              <p className="text-base text-muted-foreground leading-relaxed max-w-lg lg:ml-auto">
                Oferuję szeroki zakres profesjonalnych zabiegów upiększających, 
                wykonywanych z dbałością o każdy detal i komfort klientki.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Services Grid */}
        <div className="grid gap-px bg-border">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white dark:bg-card"
            >
              <div className="grid lg:grid-cols-12 gap-8 py-12 lg:py-16">
                {/* Number & Category */}
                <div className="lg:col-span-2">
                  <span className="font-serif text-6xl lg:text-7xl font-medium text-muted-foreground/20">
                    0{index + 1}
                  </span>
                </div>

                {/* Title & Description */}
                <div className="lg:col-span-5">
                  <p className="text-xs tracking-[0.3em] text-muted-foreground uppercase mb-2">
                    {service.category}
                  </p>
                  <h3 className="font-serif text-3xl lg:text-4xl font-medium mb-4">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Treatments List */}
                <div className="lg:col-span-3">
                  <p className="text-xs tracking-[0.2em] text-muted-foreground uppercase mb-4">
                    Zabiegi
                  </p>
                  <ul className="space-y-2">
                    {service.treatments.map((treatment, i) => (
                      <li 
                        key={i}
                        className="flex items-center gap-2 text-sm"
                      >
                        <span className="w-4 h-px bg-foreground/30" />
                        {treatment}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA */}
                <div className="lg:col-span-2 flex items-end">
                  <Button 
                    variant="ghost" 
                    className="group p-0 h-auto text-sm tracking-wide hover:bg-transparent hover:text-foreground"
                    asChild
                  >
                    <Link href="https://booksy.com/pl-pl/122467_bolsia_brwi-i-rzesy_8820_krakow#ba_s=seo" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                      Umów się
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <p className="text-muted-foreground mb-6">
            Masz pytania dotyczące zabiegów? Chętnie doradzę najlepsze rozwiązanie dla Ciebie.
          </p>
          <Button 
            size="lg" 
            className="tracking-wide"
            asChild
          >
            <Link href="https://booksy.com/pl-pl/122467_bolsia_brwi-i-rzesy_8820_krakow#ba_s=seo" target="_blank" rel="noopener noreferrer">
              Skontaktuj się ze mną
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
