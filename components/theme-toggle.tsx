"use client"

import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import { Moon, Sun, Monitor } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip"

const themes = ["light", "dark", "system"] as const

export function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <Button variant="ghost" size="icon" className="opacity-0">
        <Sun className="h-4 w-4" />
      </Button>
    )
  }

  const cycleTheme = () => {
    const currentIndex = themes.indexOf(theme as typeof themes[number])
    const nextIndex = (currentIndex + 1) % themes.length
    setTheme(themes[nextIndex])
  }

  const getTooltipText = () => {
    const nextIndex = (themes.indexOf(theme as typeof themes[number]) + 1) % themes.length
    const nextTheme = themes[nextIndex]
    switch (nextTheme) {
      case "light": return "Tryb jasny"
      case "dark": return "Tryb ciemny"
      case "system": return "Tryb systemowy"
    }
  }

  const isDark = resolvedTheme === "dark"

  return (
    <Tooltip delayDuration={500}>
      <TooltipTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          onClick={cycleTheme}
          className="relative h-8 w-8 hover:bg-foreground hover:text-primary-foreground transition-all duration-300"
        >
          {theme === "system" ? (
            <Monitor className="h-4 w-4" />
          ) : (
            <>
              <Sun className={`h-4 w-4 transition-all ${isDark ? "scale-0 rotate-90" : "scale-100 rotate-0"}`} />
              <Moon className={`absolute h-4 w-4 transition-all ${isDark ? "scale-100 rotate-0" : "scale-0 -rotate-90"}`} />
            </>
          )}
          <span className="sr-only">Zmień motyw</span>
        </Button>
      </TooltipTrigger>
      <TooltipContent side="bottom" sideOffset={8}>
        {getTooltipText()}
      </TooltipContent>
    </Tooltip>
  )
}
