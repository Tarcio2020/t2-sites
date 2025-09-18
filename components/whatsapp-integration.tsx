"use client"

import { useState, useEffect } from "react"
import { MessageCircle, X, Users, Clock, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface WhatsAppIntegrationProps {
  pageContext?: string
  customMessage?: string
}

export default function WhatsAppIntegration({ pageContext, customMessage }: WhatsAppIntegrationProps) {
  const [showWelcome, setShowWelcome] = useState(false)

  useEffect(() => {
    // Show welcome message after 10 seconds on first visit
    const hasSeenWelcome = localStorage.getItem("t2-whatsapp-welcome")
    if (!hasSeenWelcome) {
      const timer = setTimeout(() => {
        setShowWelcome(true)
        localStorage.setItem("t2-whatsapp-welcome", "true")
      }, 10000)
      return () => clearTimeout(timer)
    }
  }, [])

  const handleWhatsAppClick = () => {
    const phoneNumber = "5511934251292"
    let message = "Olá! Gostaria de saber mais sobre os serviços da T2 Casa do Site."

    if (customMessage) {
      message = customMessage
    } else if (pageContext) {
      const contextMessages = {
        home: "Olá! Vi o site da T2 Casa do Site e gostaria de saber mais sobre os serviços.",
        portfolio: "Olá! Vi o portfólio da T2 Casa do Site e gostaria de um orçamento para meu projeto.",
        blog: "Olá! Li um artigo no blog da T2 Casa do Site e gostaria de mais informações.",
        sobre: "Olá! Conheci a história da T2 Casa do Site e gostaria de conversar sobre um projeto.",
        contato: "Olá! Estou na página de contato e prefiro falar pelo WhatsApp.",
      }
      message = contextMessages[pageContext as keyof typeof contextMessages] || message
    }

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
    setShowWelcome(false)
  }

  if (!showWelcome) return null

  return (
    <div className="fixed bottom-24 right-6 z-40 animate-in slide-in-from-bottom-4 duration-500">
      <Card className="w-80 shadow-xl border-green-200 bg-white">
        <CardHeader className="bg-gradient-to-r from-green-500 to-green-600 text-white rounded-t-lg relative">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setShowWelcome(false)}
            className="absolute top-2 right-2 text-white hover:bg-green-600 p-1"
          >
            <X className="h-4 w-4" />
          </Button>

          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
              <MessageCircle className="h-6 w-6" />
            </div>
            <div>
              <CardTitle className="text-lg">T2 Casa do Site</CardTitle>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-300 rounded-full animate-pulse"></div>
                <CardDescription className="text-green-100 text-sm">Online agora</CardDescription>
              </div>
            </div>
          </div>
        </CardHeader>

        <CardContent className="p-4">
          <div className="space-y-4">
            <div className="bg-gray-50 rounded-lg p-3">
              <p className="text-sm text-gray-700">👋 Olá! Precisa de ajuda com seu site profissional?</p>
              <p className="text-xs text-gray-500 mt-1">Estamos online e prontos para ajudar!</p>
            </div>

            <div className="flex items-center justify-between text-xs text-gray-500">
              <div className="flex items-center space-x-1">
                <Clock className="h-3 w-3" />
                <span>Resposta em poucos minutos</span>
              </div>
              <div className="flex items-center space-x-1">
                <Users className="h-3 w-3" />
                <span>500+ clientes atendidos</span>
              </div>
            </div>

            <div className="flex items-center space-x-2">
              <Badge variant="secondary" className="text-xs">
                <CheckCircle className="h-3 w-3 mr-1" />
                Orçamento Grátis
              </Badge>
              <Badge variant="outline" className="text-xs">
                Resposta Rápida
              </Badge>
            </div>

            <Button onClick={handleWhatsAppClick} className="w-full bg-green-500 hover:bg-green-600 text-white">
              <MessageCircle className="h-4 w-4 mr-2" />
              Iniciar Conversa
            </Button>

            <p className="text-xs text-center text-gray-400">Clique para abrir o WhatsApp</p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
