"use client"

import { useCallback, useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { HeartConfetti } from "./heart-confetti"
import { SuccessOverlay } from "./success-overlay"

const BUTTON_WIDTH = 120
const BUTTON_HEIGHT = 40

function randomInRange(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

export function WalentynkaButtons() {
  const placeholderRef = useRef<HTMLDivElement>(null)
  const takButtonRef = useRef<HTMLSpanElement>(null)
  const [position, setPosition] = useState<{ left: number; top: number } | null>(
    null
  )
  const [takScale, setTakScale] = useState(1)
  const [showSuccess, setShowSuccess] = useState(false)
  const [confettiOrigin, setConfettiOrigin] = useState<{
    x: number
    y: number
  } | null>(null)

  useEffect(() => {
    const el = placeholderRef.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    setPosition({ left: rect.left, top: rect.top })
  }, [])

  const handleTakClick = useCallback(() => {
    const el = takButtonRef.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const x = rect.left + rect.width / 2
    const y = rect.top + rect.height / 2
    setConfettiOrigin({ x, y })
    window.setTimeout(() => setShowSuccess(true), 2000)
  }, [])

  const runAway = useCallback(() => {
    if (typeof window === "undefined") return
    const maxLeft = window.innerWidth - BUTTON_WIDTH
    const maxTop = window.innerHeight - BUTTON_HEIGHT
    setPosition({
      left: randomInRange(0, Math.max(0, maxLeft)),
      top: randomInRange(0, Math.max(0, maxTop)),
    })
    setTakScale((prev) => {
      const next = prev * 2
      const scaleToCoverViewport = Math.max(
        window.innerWidth / BUTTON_WIDTH,
        window.innerHeight / BUTTON_HEIGHT
      )
      return Math.min(next, scaleToCoverViewport * 1.1)
    })
  }, [])

  return (
    <>
      <div className="flex flex-wrap gap-4 justify-center items-center">
        <div
          ref={placeholderRef}
          className="invisible min-w-[120px] h-10 shrink-0"
          aria-hidden
        />
        {position && (
          <Button
            variant="secondary"
            size="lg"
            className="fixed z-0 bg-muted text-muted-foreground hover:bg-muted/80 min-w-[120px] transition-all duration-200 ease-out select-none"
            style={{
              left: position.left,
              top: position.top,
            }}
            onMouseEnter={runAway}
            onTouchStart={(e) => {
              e.preventDefault()
              runAway()
            }}
          >
            Nie
          </Button>
        )}
        <span
          ref={takButtonRef}
          className="relative inline-block origin-center z-[9999]"
          style={{
            transform: `scale(${takScale})`,
            transition: "transform 0.3s ease-out",
          }}
        >
          <Button
            size="lg"
            className="bg-[var(--bolsia-blush-dark)] text-primary hover:bg-[var(--accent)] min-w-[120px] border-0"
            onClick={handleTakClick}
          >
            Tak
          </Button>
        </span>
      </div>
      {confettiOrigin && (
        <HeartConfetti
          originX={confettiOrigin.x}
          originY={confettiOrigin.y}
          onComplete={() => setConfettiOrigin(null)}
        />
      )}
      {showSuccess && <SuccessOverlay />}
    </>
  )
}
