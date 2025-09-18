"use client"

import { useState } from "react"
import { MessageCircle, X, Phone, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function WhatsAppButton() {
  const [isExpanded, setIsExpanded] = useState(false)

  const handleWhatsAppClick = (customMessage?: string) => {
    const phoneNumber = "5511934251292"
    const defaultMessage = "Olá! Gostaria de saber mais sobre os serviços da T2 Casa do Site."
    const message = customMessage || defaultMessage
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
    setIsExpanded(false)
  }

  const quickMessages = [
    {
      title: "Solicitar Orçamento",
      message: "Olá! Gostaria de solicitar um orçamento para desenvolvimento do meu site profissional.",
    },
    {
      title: "Dúvidas sobre Preços",
      message: "Olá! Tenho algumas dúvidas sobre os preços e planos disponíveis.",
    },
    {
      title: "Suporte Técnico",
      message: "Olá! Preciso de suporte técnico para meu site.",
    },
    {
      title: "Informações Gerais",
      message: "Olá! Gostaria de saber mais sobre os serviços da T2 Casa do Site.",
    },
  ]

  return (
    <>
      {/* Expanded Card */}
      {isExpanded && (
        <div className="fixed bottom-24 right-6 z-40">
          <Card className="w-80 shadow-xl border-green-200">
            <CardHeader className="bg-green-500 text-white rounded-t-lg">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-300 rounded-full animate-pulse"></div>
                  <div>
                    <CardTitle className="text-lg">T2 Casa do Site</CardTitle>
                    <CardDescription className="text-green-100 text-sm">
                      Normalmente responde em poucos minutos
                    </CardDescription>
                  </div>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsExpanded(false)}
                  className="text-white hover:bg-green-600 p-1"
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
            </CardHeader>
            <CardContent className="p-4 space-y-3">
              <div className="flex items-center space-x-2 text-sm text-muted-foreground mb-3">
                <Clock className="h-4 w-4" />
                <span>Seg-Sex: 9h-18h | Sáb: 9h-12h</span>
              </div>

              <p className="text-sm text-muted-foreground mb-3">Escolha uma opção ou clique no botão para conversar:</p>

              <div className="space-y-2">
                {quickMessages.map((item, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    size="sm"
                    className="w-full justify-start text-left h-auto py-2 px-3 bg-transparent"
                    onClick={() => handleWhatsAppClick(item.message)}
                  >
                    <div>
                      <div className="font-medium text-sm">{item.title}</div>
                    </div>
                  </Button>
                ))}
              </div>

              <Button
                className="w-full bg-green-500 hover:bg-green-600 text-white mt-3"
                onClick={() => handleWhatsAppClick()}
              >
                <MessageCircle className="h-4 w-4 mr-2" />
                Iniciar Conversa
              </Button>

              <div className="flex items-center justify-center space-x-1 text-xs text-muted-foreground mt-2">
                <Phone className="h-3 w-3" />
                <span>(11) 93425-1292</span>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Main WhatsApp Button */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110 z-50 floating-animation group"
        aria-label="Falar no WhatsApp"
      >
        {isExpanded ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}

        {/* Notification Badge */}
        <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>

        {/* Tooltip */}
        <div className="absolute right-full mr-3 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white text-sm px-3 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
          Fale conosco no WhatsApp
          <div className="absolute left-full top-1/2 transform -translate-y-1/2 border-4 border-transparent border-l-gray-800"></div>
        </div>
      </button>

      {/* Overlay */}
      {isExpanded && <div className="fixed inset-0 bg-black/20 z-30" onClick={() => setIsExpanded(false)} />}
    </>
  )
}
