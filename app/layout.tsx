import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

// Altere esta URL para o caminho da sua imagem logo
const SITE_URL = "https://www.t2casadosite.com.br"
const LOGO_IMAGE = `${SITE_URL}/T2_Social_Media_Banner1200x630.jpg` 

export const metadata: Metadata = {
  title: "T2 Casa do Site - Desenvolvimento Web Profissional",
  description: "Soluções digitais práticas e personalizadas para profissionais liberais. Sites profissionais a partir de R$ 1399.",
  generator: "T2 Casa do Site",
  keywords: "desenvolvimento web, sites profissionais, advogados, médicos, engenheiros, contadores",
  
  openGraph: {
    type: "website",
    url: SITE_URL,
    title: "T2 Casa do Site - Desenvolvimento Web Profissional",
    description: "Soluções digitais práticas e personalizadas para profissionais liberais. Sites profissionais a partir de R$ 1399.",
    siteName: "T2 Casa do Site",
    images: [
      {
        url: LOGO_IMAGE,
        width: 1200,
        height: 630,
        alt: "T2 Casa do Site - Desenvolvimento Web Profissional",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    site: "@t2casadosite", // Altere para seu @ do Twitter
    title: "T2 Casa do Site - Desenvolvimento Web Profissional",
    description: "Soluções digitais práticas e personalizadas para profissionais liberais",
    images: [LOGO_IMAGE],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`font-sans ${GeistSans.variable} ${GeistMono.variable} antialiased min-h-screen bg-background text-foreground`}
      >
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}