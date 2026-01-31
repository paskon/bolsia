import React from "react"
import type { Metadata } from 'next'
import { Inter, Cormorant_Garamond } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { ThemeProvider } from '@/components/theme-provider'
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
  title: 'Bolsia | Premium Beauty Academy & Studio',
  description: 'Bolsia - Gdzie precyzja kosmetologii spotyka estetykę high fashion. Profesjonalne szkolenia i zabiegi kosmetyczne w Krakowie. Akademia prowadzona przez mgr Klaudię Paszkiewicz.',
  keywords: ['kosmetologia', 'szkolenia', 'henna pudrowa', 'lami lashes', 'lami brows', 'makijaż permanentny', 'Kraków', 'akademia kosmetyczna'],
  authors: [{ name: 'Klaudia Paszkiewicz' }],
  openGraph: {
    title: 'Bolsia | Premium Beauty Academy & Studio',
    description: 'Gdzie precyzja kosmetologii spotyka estetykę high fashion',
    type: 'website',
    locale: 'pl_PL',
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
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
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
