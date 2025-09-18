import Header from "@/components/header"
import Footer from "@/components/footer"
import WhatsAppButton from "@/components/whatsapp-button"
import WhatsAppIntegration from "@/components/whatsapp-integration"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code, Smartphone, Zap, Shield, CheckCircle, Star, ArrowRight, Palette, Headphones } from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  const services = [
    {
      icon: <Code className="h-8 w-8" />,
      title: "Desenvolvimento Web",
      description: "Sites profissionais e responsivos desenvolvidos com as mais modernas tecnologias.",
    },
    {
      icon: <Smartphone className="h-8 w-8" />,
      title: "Design Responsivo",
      description: "Layouts que se adaptam perfeitamente a todos os dispositivos e tamanhos de tela.",
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Performance Otimizada",
      description: "Sites rápidos e otimizados para mecanismos de busca e experiência do usuário.",
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Segurança Garantida",
      description: "Implementação de protocolos de segurança para proteger seus dados e de seus clientes.",
    },
    {
      icon: <Palette className="h-8 w-8" />,
      title: "Identidade Visual",
      description: "Criação de logos, cartões e banners para fortalecer sua marca profissional.",
    },
    {
      icon: <Headphones className="h-8 w-8" />,
      title: "Suporte Contínuo",
      description: "Acompanhamento e suporte técnico para manter seu site sempre funcionando.",
    },
  ]

  const professionals = [
    "Advogados",
    "Médicos",
    "Engenheiros",
    "Contadores",
    "Arquitetos",
    "Dentistas",
    "Psicólogos",
    "Consultores",
  ]

  const testimonials = [
    {
      name: "Dr. Carlos Silva",
      profession: "Médico Cardiologista",
      content:
        "O site desenvolvido pela T2 Casa do Site aumentou significativamente o número de pacientes em minha clínica. Profissionalismo excepcional!",
      rating: 5,
    },
    {
      name: "Dra. Ana Santos",
      profession: "Advogada",
      content:
        "Excelente trabalho! O site ficou moderno e profissional, exatamente como eu imaginava. Recomendo a todos os colegas.",
      rating: 5,
    },
    {
      name: "Eng. Roberto Lima",
      profession: "Engenheiro Civil",
      content: "A equipe da T2 entendeu perfeitamente minhas necessidades. O resultado superou minhas expectativas!",
      rating: 5,
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-20 pb-16 overflow-hidden tech-pattern">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge variant="secondary" className="text-sm font-medium">
                  🚀 Líder em Desenvolvimento Web
                </Badge>
                <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                  Transforme sua
                  <span className="gradient-text"> presença digital</span>
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Soluções digitais práticas e personalizadas para profissionais liberais. Ganhe tempo, atraia mais
                  clientes e fortaleça sua autoridade online.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-lg px-8">
                  Solicitar Orçamento
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button variant="outline" size="lg" className="text-lg px-8 bg-transparent">
                  Ver Portfólio
                </Button>
              </div>

              <div className="flex items-center space-x-8 pt-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-secondary">500+</div>
                  <div className="text-sm text-muted-foreground">Sites Criados</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-secondary">98%</div>
                  <div className="text-sm text-muted-foreground">Satisfação</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-secondary">5+</div>
                  <div className="text-sm text-muted-foreground">Anos Experiência</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="floating-animation">
                <img
                  src="/image (4).png"
                  alt="Desenvolvimento Web Moderno"
                  className="w-full h-auto rounded-2xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Preços que Cabem no seu Bolso</h2>
            <p className="text-xl text-muted-foreground">
              Investimento acessível para profissionais que querem crescer
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="relative border-2 border-secondary">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-secondary text-secondary-foreground px-4 py-1">MAIS POPULAR</Badge>
              </div>
              <CardHeader className="text-center pb-8">
                <CardTitle className="text-2xl">Site Profissional</CardTitle>
                <div className="space-y-2">
                  <div className="text-4xl font-bold text-secondary">R$ 1.399</div>
                  <div className="text-muted-foreground">ou 12x de R$ 116,58</div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-3">
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span>Design Responsivo</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span>Até 5 Páginas</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span>Formulário de Contato</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span>Otimização SEO</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span>Suporte 30 dias</span>
                  </li>
                </ul>
                <Button className="w-full bg-secondary hover:bg-secondary/90 mt-6">Escolher Plano</Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="text-center pb-8">
                <CardTitle className="text-2xl">Pacote Completo</CardTitle>
                <div className="space-y-2">
                  <div className="text-4xl font-bold text-accent">R$ 1.699</div>
                  <div className="text-muted-foreground">ou 12x de R$ 141,58</div>
                  <div className="text-sm text-green-600 font-medium">Economia de R$ 300!</div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-3">
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span>Tudo do Plano Anterior</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span>Criação de Logo</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span>Cartões de Visita</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span>Banners Digitais</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span>Suporte 60 dias</span>
                  </li>
                </ul>
                <Button variant="outline" className="w-full mt-6 bg-transparent">
                  Escolher Plano
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Nossos Serviços</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Oferecemos soluções completas para sua presença digital
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="text-secondary mb-4">{service.icon}</div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">{service.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Professionals Section */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Especialistas em Sites para Profissionais Liberais</h2>
            <p className="text-xl text-muted-foreground">
              Atendemos diversas áreas profissionais com soluções personalizadas
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {professionals.map((professional, index) => (
              <div
                key={index}
                className="text-center p-4 bg-card rounded-lg hover:bg-accent hover:text-accent-foreground transition-colors duration-300"
              >
                <span className="font-medium">{professional}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">O que Nossos Clientes Dizem</h2>
            <p className="text-xl text-muted-foreground">Depoimentos reais de profissionais satisfeitos</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-center space-x-1 mb-2">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                  <CardDescription>{testimonial.profession}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground italic">"{testimonial.content}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Pronto para Transformar sua Presença Digital?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Entre em contato conosco e descubra como podemos ajudar você a atrair mais clientes e fortalecer sua
            autoridade online.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8">
              <Link href="/contato">Solicitar Orçamento Grátis</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
            >
              <Link href="/portfolio">Ver Nosso Portfólio</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
      <WhatsAppIntegration pageContext="home" />
    </div>
  )
}
