import React from "react"
import type { Metadata } from 'next'
import { Inter, Cormorant_Garamond } from 'next/font/google'
import { ThemeProvider } from '@/components/theme-provider'
import { CookieBanner } from '@/components/cookie-banner'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter',
  display: 'swap',
})

const cormorant = Cormorant_Garamond({ 
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: '--font-cormorant',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Bolsia',
  description: 'Bolsia - Gdzie precyzja kosmetologii spotyka estetykę high fashion. Profesjonalne szkolenia i zabiegi kosmetyczne w Krakowie. Akademia prowadzona przez mgr Klaudię Paszkiewicz.',
  keywords: ['kosmetologia', 'szkolenia', 'henna pudrowa', 'lami lashes', 'lami brows', 'makijaż permanentny', 'Kraków', 'akademia kosmetyczna'],
  authors: [{ name: 'Klaudia Paszkiewicz' }],
  openGraph: {
    title: 'Bolsia',
    description: 'Gdzie precyzja kosmetologii spotyka estetykę high fashion',
    type: 'website',
    locale: 'pl_PL',
  },
  icons: {
    icon: '/icon.svg',
    apple: '/apple-icon.png',
  },
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#FFDCE8' },
    { media: '(prefers-color-scheme: dark)', color: 'oklch(0.12 0.01 30)' },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pl" className={`${inter.variable} ${cormorant.variable}`} suppressHydrationWarning>
      <body className="font-sans antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <CookieBanner />
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
