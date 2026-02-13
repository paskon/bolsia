"use client"

import { useTheme } from "next-themes"
import { useEffect } from "react"

export function ForceLightTheme() {
  const { setTheme } = useTheme()

  useEffect(() => {
    setTheme("light")
    return () => {
      setTheme("system")
    }
  }, [setTheme])

  return null
}
