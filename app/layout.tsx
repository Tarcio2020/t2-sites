import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

export const metadata: Metadata = {
  title: "T2 Casa do Site - Desenvolvimento Web Profissional",
  description:
    "Soluções digitais práticas e personalizadas para profissionais liberais. Sites profissionais a partir de R$ 1399.",
  generator: "T2 Casa do Site",
  keywords: "desenvolvimento web, sites profissionais, advogados, médicos, engenheiros, contadores",
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
