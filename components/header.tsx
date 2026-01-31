"use client"

import { useState, useEffect } from "react"
import { createPortal } from "react-dom"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { motion, AnimatePresence } from "framer-motion"

const navItems = [
  { href: "#about", label: "O mnie" },
  { href: "#academy", label: "Akademia" },
  { href: "#services", label: "Usługi" },
  { href: "#contact", label: "Kontakt" },
]

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [showLogo, setShowLogo] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY
      setIsScrolled(y >= 1)
      setShowLogo(y > 0)
    }
    handleScroll()
    window.addEventListener("scroll", handleScroll)
    window.addEventListener("resize", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("resize", handleScroll)
    }
  }, [])

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? "bg-white/40 dark:bg-black/40 backdrop-blur-xl backdrop-saturate-150 shadow-[0_1px_0_0_rgba(0,0,0,0.03)] dark:shadow-[0_1px_0_0_rgba(255,255,255,0.03)] border-b border-white/10 dark:border-white/5" 
          : ""
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:pl-8 lg:pr-6">
        {/* Left: logo (when scrolled) */}
        <div className="flex min-w-0 flex-1 items-center">
          <AnimatePresence mode="wait">
            {showLogo && (
              <motion.div
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -12 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="relative mr-6 md:mr-8 h-12 w-12 shrink-0"
              >
                <Link href="#home" className="block h-full w-full">
                  <Image
                    src="/logos/logo-sygnet.svg"
                    alt="Bolsia"
                    fill
                    className="object-contain dark:invert"
                  />
                </Link>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Right: nav + mobile menu + CTA + theme */}
        <div className="flex min-w-0 flex-1 flex-nowrap items-center justify-end gap-6">
        <nav className="hidden shrink-0 items-center gap-10 md:flex transition-all duration-300">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm tracking-wide text-foreground transition-colors hover:opacity-80 relative group"
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-foreground transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </nav>
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden h-10 w-10 hover:bg-foreground hover:text-primary-foreground transition-all duration-300"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          <span className="sr-only">Menu</span>
        </Button>
        <div className="hidden shrink-0 md:flex items-center gap-2">
          <Button 
            variant="outline" 
            size="sm" 
            className="tracking-wide border-foreground/20 hover:bg-foreground hover:text-primary-foreground transition-all duration-300"
            asChild
          >
            <Link href="https://booksy.com/pl-pl/122467_bolsia_brwi-i-rzesy_8820_krakow#ba_s=seo" target="_blank" rel="noopener noreferrer">Umów wizytę</Link>
          </Button>
          <ThemeToggle />
        </div>
        </div>

      </div>

      {/* Mobile Menu – renderowany w body przez Portal, żeby backdrop-blur działał (bez transform w rodzicu) */}
      {typeof document !== "undefined" &&
        createPortal(
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="fixed left-0 right-0 top-20 z-50 overflow-hidden border-b border-white/10 dark:border-white/5 bg-white/40 dark:bg-black/40 backdrop-blur-xl backdrop-saturate-150 shadow-[0_1px_0_0_rgba(0,0,0,0.03)] dark:shadow-[0_1px_0_0_rgba(255,255,255,0.03)] p-6 md:hidden"
                style={{ WebkitBackdropFilter: "blur(24px) saturate(150%)" }}
              >
                <nav className="flex flex-col gap-3">
                  <div className="grid grid-cols-2 gap-3">
                    {navItems.map((item, index) => (
                      <motion.div
                        key={item.href}
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.05 }}
                      >
                        <Link
                          href={item.href}
                          className="flex h-12 items-center justify-center rounded-2xl bg-white/70 dark:bg-white/10 text-sm font-medium tracking-wide text-foreground transition-colors hover:bg-white/90 dark:hover:bg-white/20"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {item.label}
                        </Link>
                      </motion.div>
                    ))}
                  </div>
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: navItems.length * 0.05 }}
                  >
                    <Button
                      variant="default"
                      size="lg"
                      className="w-full h-14 rounded-2xl tracking-wide text-base"
                      asChild
                    >
                      <Link
                        href="https://booksy.com/pl-pl/122467_bolsia_brwi-i-rzesy_8820_krakow#ba_s=seo"
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        Umów wizytę
                      </Link>
                    </Button>
                  </motion.div>
                </nav>
              </motion.div>
            )}
          </AnimatePresence>,
          document.body
        )}
    </motion.header>
  )
}
