
/*
  // Adicione isso para melhorar o SEO
  verification: {
    // Adicione aqui quando tiver Google Search Console
    // google: "seu-codigo-verificacao-google",
  },
}

*/



/*__________________*/ 

import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import Script from "next/script"
import "./globals.css"

const SITE_URL = "https://www.t2casadosite.com.br"
const LOGO_IMAGE = `${SITE_URL}/T2_Casa_do_Site_Logo_1200x630.png`

export const metadata: Metadata = {
  title: "T2 Casa do Site - Desenvolvimento Web Profissional",
  description:
    "Soluções digitais práticas e personalizadas para profissionais liberais. Sites profissionais a partir de R$ 1399.",
  metadataBase: new URL(SITE_URL),

  openGraph: {
    type: "website",
    url: SITE_URL,
    title: "T2 Casa do Site - Desenvolvimento Web Profissional",
    description:
      "Soluções digitais práticas e personalizadas para profissionais liberais. Sites profissionais a partir de R$ 1399.",
    siteName: "T2 Casa do Site",
    locale: "pt_BR",
    images: [
      {
        url: LOGO_IMAGE,
        width: 1200,
        height: 630,
        alt: "T2 Casa do Site - Desenvolvimento Web Profissional",
        type: "image/png",
      },
    ],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <head>
        {/* JSON-LD Schema.org para Organization */}
        <Script
          id="organization-schema"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "T2 Casa do Site",
              url: SITE_URL,
              logo: LOGO_IMAGE,
            }),
          }}
        />
      </head>
      <body
        className={`font-sans ${GeistSans.variable} ${GeistMono.variable} antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  )
}
