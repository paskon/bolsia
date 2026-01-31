"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { MapPin, Phone, Mail, Clock, Instagram, Facebook } from "lucide-react"
import { Button } from "@/components/ui/button"

const navLinks = [
  { href: "#about", label: "O mnie" },
  { href: "#academy", label: "Akademia" },
  { href: "#services", label: "Usługi" },
]

const contactInfo = [
  {
    icon: MapPin,
    title: "Adres",
    lines: ["Topolowa 33", "Kraków"],
    note: "W pobliżu Opery Krakowskiej i Ronda Mogilskiego",
  },
  {
    icon: Clock,
    title: "Godziny otwarcia",
    lines: ["Pon - Pt: 9:00 - 19:00", "Sob: 9:00 - 15:00"],
    note: "Po wcześniejszym umówieniu",
  },
]

export function Footer() {
  return (
    <footer id="contact" className="relative bg-foreground text-primary-foreground">
      {/* Main Footer Content */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-20 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-12">
          {/* Brand & Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-4"
          >
            <Link href="#home" className="block w-fit">
              <div className="relative h-[80px] w-64">
                <Image
                  src="/logos/logo-bolsia-horizontal.svg"
                  alt="Bolsia"
                  fill
                  className="object-contain object-left invert dark:invert-0"
                />
              </div>
            </Link>
            <p className="mt-6 text-primary-foreground/70 leading-relaxed">
              Premium Beauty Academy & Studio. Gdzie precyzja kosmetologii 
              spotyka estetykę high fashion.
            </p>

            {/* Social Links */}
            <div className="flex gap-4 mt-8">
              <Button
                variant="ghost"
                size="icon"
                className="text-primary-foreground/70 hover:text-primary-foreground hover:bg-primary-foreground/10"
                asChild
              >
                <a href="https://www.instagram.com/bolsia.brows/" target="_blank" rel="noopener noreferrer">
                  <Instagram className="w-5 h-5" />
                  <span className="sr-only">Instagram</span>
                </a>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="text-primary-foreground/70 hover:text-primary-foreground hover:bg-primary-foreground/10"
                asChild
              >
                <a href="https://www.facebook.com/bolsia.makeup/" target="_blank" rel="noopener noreferrer">
                  <Facebook className="w-5 h-5" />
                  <span className="sr-only">Facebook</span>
                </a>
              </Button>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-2"
          >
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-3"
          >
            <div className="space-y-6">
              {contactInfo.map((item) => (
                <div key={item.title} className="flex gap-3">
                  <item.icon className="w-5 h-5 text-primary-foreground/50 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium mb-1">{item.title}</p>
                    {item.lines.map((line, i) => (
                      <p key={i} className="text-sm text-primary-foreground/70">{line}</p>
                    ))}
                    {item.note && (
                      <p className="text-xs text-primary-foreground/50 mt-1">{item.note}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* CTA Box */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-3"
          >
            <div className="bg-primary-foreground/5 p-6 border border-primary-foreground/10 rounded-2xl">
              <p className="text-sm text-primary-foreground/70 mb-6 leading-relaxed">
                Skontaktuj się, aby umówić zabieg lub zapisać się na szkolenie.
              </p>
              <div className="space-y-3">
                <Button
                  className="w-full justify-center bg-primary-foreground text-foreground hover:bg-primary-foreground/90"
                  asChild
                >
                  <a href="https://booksy.com/pl-pl/122467_bolsia_brwi-i-rzesy_8820_krakow#ba_s=seo" target="_blank" rel="noopener noreferrer">
                    Umow wizyte
                  </a>
                </Button>
                <Button
                  variant="outline"
                  className="w-full justify-start bg-transparent border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10"
                  asChild
                >
                  <a href="tel:+48573000873">
                    <Phone className="w-4 h-4 mr-2" />
                    +48 573 000 873
                  </a>
                </Button>
                <Button
                  variant="outline"
                  className="w-full justify-start bg-transparent border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10"
                  asChild
                >
                  <a href="mailto:kontakt@bolsia.pl">
                    <Mail className="w-4 h-4 mr-2" />
                    kontakt@bolsia.pl
                  </a>
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-primary-foreground/50">
              © {new Date().getFullYear()} Bolsia. Wszelkie prawa zastrzeżone.
            </p>
            <div className="flex gap-6 text-xs text-primary-foreground/50">
              <Link
                href="/polityka-prywatnosci"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary-foreground transition-colors"
              >
                Polityka prywatności
              </Link>
              <Link
                href="/regulamin"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary-foreground transition-colors"
              >
                Regulamin
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Element */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-16 bg-gradient-to-b from-[#FFDCE8]/20 to-transparent" />
    </footer>
  )
}
