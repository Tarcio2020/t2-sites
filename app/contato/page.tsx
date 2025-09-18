"use client"

import type React from "react"

import { useState } from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import WhatsAppButton from "@/components/whatsapp-button"
import WhatsAppIntegration from "@/components/whatsapp-integration"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Badge } from "@/components/ui/badge"
import { Mail, Phone, MapPin, Clock, Send, CheckCircle, AlertCircle } from "lucide-react"
import emailjs from "@emailjs/browser"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    profession: "",
    company: "",
    website: "",
    budget: "",
    services: [] as string[],
    timeline: "",
    description: "",
    hasLogo: false,
    needsHosting: false,
    needsSEO: false,
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  const professions = [
    "Advogado(a)",
    "Médico(a)",
    "Engenheiro(a)",
    "Contador(a)",
    "Arquiteto(a)",
    "Dentista",
    "Psicólogo(a)",
    "Consultor(a)",
    "Outro",
  ]

  const budgetRanges = [
    "R$ 1.000 - R$ 2.000",
    "R$ 2.000 - R$ 5.000",
    "R$ 5.000 - R$ 10.000",
    "R$ 10.000+",
    "Preciso de orientação",
  ]

  const serviceOptions = [
    "Site Institucional",
    "E-commerce",
    "Blog/Portal",
    "Sistema de Agendamento",
    "Área do Cliente",
    "Integração com WhatsApp",
    "SEO",
    "Criação de Logo",
    "Cartões de Visita",
    "Banners Digitais",
  ]

  const timelineOptions = ["1-2 semanas", "3-4 semanas", "1-2 meses", "3+ meses", "Flexível"]

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }))
  }

  const handleServiceToggle = (service: string) => {
    setFormData((prev) => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter((s) => s !== service)
        : [...prev.services, service],
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus("idle")

    try {
      // EmailJS configuration from user requirements
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone,
        profession: formData.profession,
        company: formData.company,
        website: formData.website,
        budget: formData.budget,
        services: formData.services.join(", "),
        timeline: formData.timeline,
        description: formData.description,
        has_logo: formData.hasLogo ? "Sim" : "Não",
        needs_hosting: formData.needsHosting ? "Sim" : "Não",
        needs_seo: formData.needsSEO ? "Sim" : "Não",
        to_email: "tarcioapps7@gmail.com",
      }

      await emailjs.send(
        "service_ni3xo8c", // Service ID
        "template_qtb1icj", // Template ID
        templateParams,
        "HzYT9VYAJZM43ZXWG", // Public Key
      )

      setSubmitStatus("success")
      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        profession: "",
        company: "",
        website: "",
        budget: "",
        services: [],
        timeline: "",
        description: "",
        hasLogo: false,
        needsHosting: false,
        needsSEO: false,
      })
    } catch (error) {
      console.error("Error sending email:", error)
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Entre em <span className="gradient-text">Contato</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Pronto para transformar sua presença digital? Preencha o formulário abaixo e receba um orçamento
              personalizado em até 24 horas.
            </p>
            <Badge variant="secondary" className="text-sm font-medium">
              ⚡ Resposta Rápida Garantida
            </Badge>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Solicitar Orçamento</CardTitle>
                <CardDescription>
                  Preencha os dados abaixo para receber uma proposta personalizada para seu projeto
                </CardDescription>
              </CardHeader>
              <CardContent>
                {submitStatus === "success" && (
                  <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <p className="text-green-800">Mensagem enviada com sucesso! Entraremos em contato em breve.</p>
                  </div>
                )}

                {submitStatus === "error" && (
                  <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center space-x-2">
                    <AlertCircle className="h-5 w-5 text-red-600" />
                    <p className="text-red-800">
                      Erro ao enviar mensagem. Tente novamente ou entre em contato via WhatsApp.
                    </p>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Personal Information */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Informações Pessoais</h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name">Nome Completo *</Label>
                        <Input
                          id="name"
                          value={formData.name}
                          onChange={(e) => handleInputChange("name", e.target.value)}
                          required
                          placeholder="Seu nome completo"
                        />
                      </div>
                      <div>
                        <Label htmlFor="email">E-mail *</Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleInputChange("email", e.target.value)}
                          required
                          placeholder="seu@email.com"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="phone">Telefone/WhatsApp *</Label>
                        <Input
                          id="phone"
                          value={formData.phone}
                          onChange={(e) => handleInputChange("phone", e.target.value)}
                          required
                          placeholder="(11) 99999-9999"
                        />
                      </div>
                      <div>
                        <Label htmlFor="profession">Profissão *</Label>
                        <Select
                          value={formData.profession}
                          onValueChange={(value) => handleInputChange("profession", value)}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Selecione sua profissão" />
                          </SelectTrigger>
                          <SelectContent>
                            {professions.map((profession) => (
                              <SelectItem key={profession} value={profession}>
                                {profession}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="company">Nome da Empresa/Consultório</Label>
                        <Input
                          id="company"
                          value={formData.company}
                          onChange={(e) => handleInputChange("company", e.target.value)}
                          placeholder="Nome do seu negócio"
                        />
                      </div>
                      <div>
                        <Label htmlFor="website">Site Atual (se houver)</Label>
                        <Input
                          id="website"
                          value={formData.website}
                          onChange={(e) => handleInputChange("website", e.target.value)}
                          placeholder="https://seusite.com.br"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Project Details */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Detalhes do Projeto</h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="budget">Orçamento Estimado</Label>
                        <Select value={formData.budget} onValueChange={(value) => handleInputChange("budget", value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Selecione uma faixa" />
                          </SelectTrigger>
                          <SelectContent>
                            {budgetRanges.map((range) => (
                              <SelectItem key={range} value={range}>
                                {range}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label htmlFor="timeline">Prazo Desejado</Label>
                        <Select
                          value={formData.timeline}
                          onValueChange={(value) => handleInputChange("timeline", value)}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Quando precisa ficar pronto?" />
                          </SelectTrigger>
                          <SelectContent>
                            {timelineOptions.map((option) => (
                              <SelectItem key={option} value={option}>
                                {option}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div>
                      <Label>Serviços de Interesse</Label>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-2 mt-2">
                        {serviceOptions.map((service) => (
                          <div key={service} className="flex items-center space-x-2">
                            <Checkbox
                              id={service}
                              checked={formData.services.includes(service)}
                              onCheckedChange={() => handleServiceToggle(service)}
                            />
                            <Label htmlFor={service} className="text-sm">
                              {service}
                            </Label>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="description">Descrição do Projeto *</Label>
                      <Textarea
                        id="description"
                        value={formData.description}
                        onChange={(e) => handleInputChange("description", e.target.value)}
                        required
                        placeholder="Descreva seu projeto, objetivos, funcionalidades desejadas, referências, etc."
                        rows={4}
                      />
                    </div>

                    <div className="space-y-3">
                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="hasLogo"
                          checked={formData.hasLogo}
                          onCheckedChange={(checked) => handleInputChange("hasLogo", checked as boolean)}
                        />
                        <Label htmlFor="hasLogo">Já possuo logo/identidade visual</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="needsHosting"
                          checked={formData.needsHosting}
                          onCheckedChange={(checked) => handleInputChange("needsHosting", checked as boolean)}
                        />
                        <Label htmlFor="needsHosting">Preciso de hospedagem</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="needsSEO"
                          checked={formData.needsSEO}
                          onCheckedChange={(checked) => handleInputChange("needsSEO", checked as boolean)}
                        />
                        <Label htmlFor="needsSEO">Quero otimização para Google (SEO)</Label>
                      </div>
                    </div>
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-secondary hover:bg-secondary/90 text-lg py-3"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      "Enviando..."
                    ) : (
                      <>
                        <Send className="mr-2 h-5 w-5" />
                        Solicitar Orçamento Grátis
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            {/* Contact Details */}
            <Card>
              <CardHeader>
                <CardTitle>Informações de Contato</CardTitle>
                <CardDescription>Entre em contato conosco através dos canais abaixo</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="bg-secondary text-secondary-foreground p-2 rounded-lg">
                    <Phone className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="font-medium">(11) 93425-1292</p>
                    <p className="text-sm text-muted-foreground">WhatsApp e Ligações</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="bg-secondary text-secondary-foreground p-2 rounded-lg">
                    <Mail className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="font-medium">tarcioapps7@gmail.com</p>
                    <p className="text-sm text-muted-foreground">E-mail comercial</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="bg-secondary text-secondary-foreground p-2 rounded-lg">
                    <MapPin className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="font-medium">São Paulo, SP</p>
                    <p className="text-sm text-muted-foreground">Atendimento em todo Brasil</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="bg-secondary text-secondary-foreground p-2 rounded-lg">
                    <Clock className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="font-medium">Seg - Sex: 9h às 18h</p>
                    <p className="text-sm text-muted-foreground">Sáb: 9h às 12h</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Pricing Highlight */}
            <Card className="bg-gradient-to-br from-secondary/10 to-accent/10 border-secondary/20">
              <CardHeader>
                <CardTitle className="text-xl">Oferta Especial</CardTitle>
                <CardDescription>Aproveite nossos preços promocionais</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-secondary mb-2">R$ 1.399</div>
                  <div className="text-sm text-muted-foreground mb-4">ou 12x de R$ 116,58</div>
                  <Badge variant="secondary" className="mb-4">
                    Site Profissional Completo
                  </Badge>
                </div>

                <div className="border-t pt-4">
                  <p className="text-sm font-medium mb-2">Por apenas +R$ 300:</p>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Criação de Logo</li>
                    <li>• Cartões de Visita</li>
                    <li>• Banners Digitais</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* FAQ */}
            <Card>
              <CardHeader>
                <CardTitle>Perguntas Frequentes</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-medium mb-1">Quanto tempo leva para desenvolver?</h4>
                  <p className="text-sm text-muted-foreground">
                    Entre 1-4 semanas, dependendo da complexidade do projeto.
                  </p>
                </div>

                <div>
                  <h4 className="font-medium mb-1">O site será responsivo?</h4>
                  <p className="text-sm text-muted-foreground">
                    Sim, todos os nossos sites se adaptam a celulares, tablets e desktops.
                  </p>
                </div>

                <div>
                  <h4 className="font-medium mb-1">Vocês oferecem suporte?</h4>
                  <p className="text-sm text-muted-foreground">
                    Sim, incluímos 30 dias de suporte gratuito após a entrega.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
      <WhatsAppButton />
      <WhatsAppIntegration
        pageContext="contato"
        customMessage="Olá! Estou na página de contato e prefiro falar pelo WhatsApp sobre meu projeto."
      />
    </div>
  )
}
