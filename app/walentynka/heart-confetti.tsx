"use client"

import { useEffect, useState } from "react"

const HEART_COUNT = 50
const COLORS = ["#e11d48", "#fb7185", "#f43f5e", "#ec4899", "#f472b6"]

function HeartParticle({
  originX,
  originY,
  angle,
  distance,
  size,
  delay,
  color,
}: {
  originX: number
  originY: number
  angle: number
  distance: number
  size: number
  delay: number
  color: string
}) {
  const rad = (angle * Math.PI) / 180
  const dx = Math.cos(rad) * distance
  const dy = Math.sin(rad) * distance

  return (
    <div
      className="heart-confetti-particle pointer-events-none absolute"
      style={{
        left: originX,
        top: originY,
        width: size,
        height: size,
        "--dx": `${dx}px`,
        "--dy": `${dy}px`,
        "--delay": `${delay}ms`,
        color,
      } as React.CSSProperties}
    >
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        className="size-full drop-shadow-sm"
      >
        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
      </svg>
    </div>
  )
}

export function HeartConfetti({
  originX,
  originY,
  onComplete,
}: {
  originX: number
  originY: number
  onComplete?: () => void
}) {
  const [particles] = useState(() =>
    Array.from({ length: HEART_COUNT }, (_, i) => ({
      id: i,
      angle: Math.random() * 360,
      distance: 150 + Math.random() * 250,
      size: 14 + Math.random() * 18,
      delay: Math.random() * 150,
      color: COLORS[Math.floor(Math.random() * COLORS.length)]!,
    }))
  )

  useEffect(() => {
    const t = setTimeout(() => onComplete?.(), 2500)
    return () => clearTimeout(t)
  }, [onComplete])

  return (
    <div className="fixed inset-0 z-[10001] pointer-events-none">
      {particles.map((p) => (
        <HeartParticle
          key={p.id}
          originX={originX}
          originY={originY}
          angle={p.angle}
          distance={p.distance}
          size={p.size}
          delay={p.delay}
          color={p.color}
        />
      ))}
    </div>
  )
}
