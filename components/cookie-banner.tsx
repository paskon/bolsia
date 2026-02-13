"use client"

import { useState, useEffect, useCallback } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Analytics } from "@vercel/analytics/next"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { cn } from "@/lib/utils"

const STORAGE_KEY = "bolsia-cookie-consent"

export type CookieConsent = "denied" | "all" | { necessary: boolean; analytics: boolean; marketing: boolean }

function getStoredConsent(): CookieConsent | null {
  if (typeof window === "undefined") return null
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return null
    if (raw === "denied" || raw === "all") return raw
    const parsed = JSON.parse(raw) as { necessary?: boolean; analytics?: boolean; marketing?: boolean }
    if (parsed && typeof parsed.necessary === "boolean") return parsed as CookieConsent
    return null
  } catch {
    return null
  }
}

function saveConsent(value: CookieConsent) {
  try {
    const toStore = typeof value === "string" ? value : JSON.stringify(value)
    localStorage.setItem(STORAGE_KEY, toStore)
  } catch {
    // ignore
  }
}

function hasAnalyticsConsent(consent: CookieConsent | null): boolean {
  if (!consent) return false
  if (consent === "denied") return false
  if (consent === "all") return true
  return consent.analytics === true
}

export function CookieBanner() {
  const pathname = usePathname()
  const [mounted, setMounted] = useState(false)
  const [visible, setVisible] = useState(false)
  const [showSettings, setShowSettings] = useState(false)
  const [consent, setConsent] = useState<CookieConsent | null>(null)
  const [settings, setSettings] = useState({ necessary: true, analytics: false, marketing: false })

  useEffect(() => {
    const stored = getStoredConsent()
    setConsent(stored)
    setVisible(!stored)
    if (stored && typeof stored === "object") setSettings(stored)
    setMounted(true)
  }, [])

  const hide = useCallback((newConsent: CookieConsent) => {
    saveConsent(newConsent)
    setConsent(newConsent)
    setVisible(false)
    setShowSettings(false)
  }, [])

  const handleDeny = () => hide("denied")
  const handleAcceptAll = () => hide("all")
  const handleSaveSettings = () => hide(settings)

  if (pathname === "/walentynka") {
    return null
  }

  if (!mounted || !visible) {
    return hasAnalyticsConsent(consent) ? <Analytics /> : null
  }

  return (
    <>
      <div
        className={cn(
          "fixed bottom-4 right-4 z-50 w-[min(calc(100vw-2rem),320px)]",
          "rounded-xl border border-white/10 bg-[#171717] dark:bg-[#0a0a0a] text-white",
          "p-3.5 shadow-lg"
        )}
      >
        <p className="text-xs text-white/90 mb-3 leading-snug">
          Ta strona korzysta z technologii śledzących. Możesz wyrazić zgodę lub wybrać kategorie w ustawieniach.
        </p>
        {!showSettings ? (
          <div className="flex flex-wrap gap-2">
            <Button
              type="button"
              variant="outline"
              size="sm"
              className="h-7 rounded-md border-white/30 bg-transparent px-2.5 text-xs text-white hover:bg-white/10 hover:text-white"
              onClick={handleDeny}
            >
              Odmów
            </Button>
            <Button
              type="button"
              variant="outline"
              size="sm"
              className="h-7 rounded-md border-white/30 bg-transparent px-2.5 text-xs text-white hover:bg-white/10 hover:text-white"
              onClick={handleAcceptAll}
            >
              Akceptuj
            </Button>
            <Button
              type="button"
              size="sm"
              className="h-7 rounded-md bg-white/90 px-2.5 text-xs text-[#171717] hover:bg-white"
              onClick={() => setShowSettings(true)}
            >
              Ustawienia
            </Button>
          </div>
        ) : (
          <div className="space-y-2.5 rounded-lg bg-white/5 p-2.5 border border-white/10">
            <div className="flex items-center justify-between gap-2">
              <span className="text-xs text-white/90">Niezbędne</span>
              <Switch checked disabled className="h-4 w-7 data-[state=checked]:opacity-70" />
            </div>
            <div className="flex items-center justify-between gap-2">
              <span className="text-xs text-white/90">Analityka</span>
              <Switch
                checked={settings.analytics}
                onCheckedChange={(v) => setSettings((s) => ({ ...s, analytics: v }))}
                className="h-4 w-7"
              />
            </div>
            <div className="flex items-center justify-between gap-2">
              <span className="text-xs text-white/90">Marketing</span>
              <Switch
                checked={settings.marketing}
                onCheckedChange={(v) => setSettings((s) => ({ ...s, marketing: v }))}
                className="h-4 w-7"
              />
            </div>
            <div className="flex gap-2 pt-1.5">
              <Button
                type="button"
                size="sm"
                className="h-7 flex-1 rounded-md bg-white/90 text-xs text-[#171717] hover:bg-white"
                onClick={handleSaveSettings}
              >
                Zapisz
              </Button>
              <Button
                type="button"
                variant="ghost"
                size="sm"
                className="h-7 rounded-md px-2.5 text-xs text-white/80 hover:bg-white/10 hover:text-white"
                onClick={() => setShowSettings(false)}
              >
                Anuluj
              </Button>
            </div>
          </div>
        )}
        <p className="mt-2 text-[10px] text-white/50">
          <Link
            href="/polityka-prywatnosci"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-white/70"
          >
            Polityka prywatności
          </Link>
        </p>
      </div>
      {hasAnalyticsConsent(consent) ? <Analytics /> : null}
    </>
  )
}
