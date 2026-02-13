"use client"

const IMAGE_PATH = "/images/walentynka-kocham.png"

export function SuccessOverlay() {
  return (
    <div
      className="fixed inset-0 z-[10000] flex flex-col items-center justify-center bg-black/40"
      role="dialog"
      aria-label="Kocham"
    >
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${IMAGE_PATH})` }}
      />
      <div className="absolute inset-0 bg-black/30" />
      <span
        className="relative z-10 text-6xl font-semibold tracking-wide text-white drop-shadow-[0_2px_20px_rgba(0,0,0,0.8)] sm:text-7xl md:text-8xl lg:text-9xl [font-family:var(--font-cormorant)]"
        style={{ textShadow: "0 0 40px rgba(0,0,0,0.5)" }}
      >
        Kocham
      </span>
    </div>
  )
}
