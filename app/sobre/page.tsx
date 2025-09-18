import Header from "@/components/header"
import Footer from "@/components/footer"
import WhatsAppButton from "@/components/whatsapp-button"
import WhatsAppIntegration from "@/components/whatsapp-integration"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Target, Eye, Heart, Users, Shield, ArrowRight, TrendingUp } from "lucide-react"

export default function AboutPage() {
  const values = [
    {
      icon: <Users className="h-8 w-8" />,
      title: "Compromisso com o Cliente",
      description:
        "Colocamos nossos clientes no centro de tudo que fazemos, garantindo soluções personalizadas e suporte dedicado.",
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Ética Profissional",
      description:
        "Mantemos os mais altos padrões éticos em todos os nossos projetos, com transparência e honestidade.",
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: "Resultados Mensuráveis",
      description:
        "Focamos em entregar resultados concretos que impactem positivamente o crescimento dos nossos clientes.",
    },
  ]

  const team = [
    {
      name: "Tarcio Silva",
      role: "CEO & Desenvolvedor Full-Stack",
      description:
        "Especialista em desenvolvimento web com mais de 5 anos de experiência criando soluções digitais para profissionais liberais.",
      image: "/placeholder.svg?key=team1",
      skills: ["React", "Next.js", "Node.js", "UX/UI Design"],
    },
    {
      name: "Ana Costa",
      role: "Designer UX/UI",
      description: "Focada em criar experiências digitais intuitivas e atrativas que convertem visitantes em clientes.",
      image: "/placeholder.svg?key=team2",
      skills: ["Figma", "Adobe Creative", "Prototipagem", "Design System"],
    },
    {
      name: "Carlos Tech",
      role: "Especialista em SEO",
      description: "Responsável por otimizar sites para mecanismos de busca, garantindo maior visibilidade online.",
      image: "/placeholder.svg?key=team3",
      skills: ["SEO", "Google Analytics", "Marketing Digital", "Análise de Dados"],
    },
  ]

  const achievements = [
    { number: "500+", label: "Sites Desenvolvidos" },
    { number: "98%", label: "Clientes Satisfeitos" },
    { number: "5+", label: "Anos de Experiência" },
    { number: "15+", label: "Áreas Profissionais" },
  ]

  const timeline = [
    {
      year: "2019",
      title: "Fundação da T2 Casa do Site",
      description: "Início da jornada com foco em sites para profissionais liberais",
    },
    {
      year: "2020",
      title: "Expansão dos Serviços",
      description: "Adição de serviços de SEO e marketing digital",
    },
    {
      year: "2021",
      title: "100 Sites Desenvolvidos",
      description: "Marco importante com centenas de profissionais atendidos",
    },
    {
      year: "2022",
      title: "Especialização em UX/UI",
      description: "Investimento em design e experiência do usuário",
    },
    {
      year: "2023",
      title: "Certificações e Parcerias",
      description: "Parcerias estratégicas e certificações em tecnologias modernas",
    },
    {
      year: "2024",
      title: "Líder no Segmento",
      description: "Reconhecimento como referência em sites para profissionais liberais",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <Badge variant="secondary" className="mb-4">
              Conheça Nossa História
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Sobre a <span className="gradient-text">T2 Casa do Site</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Somos uma empresa especializada em desenvolvimento web para profissionais liberais, comprometida em
              transformar a presença digital de médicos, advogados, engenheiros e outros profissionais.
            </p>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Mission */}
            <Card className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="mx-auto bg-secondary text-secondary-foreground p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                  <Target className="h-8 w-8" />
                </div>
                <CardTitle className="text-2xl text-secondary">Missão</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  Oferecer soluções digitais práticas, acessíveis e personalizadas que ajudem profissionais liberais a
                  ganhar tempo, atrair mais clientes e fortalecer sua autoridade online.
                </p>
              </CardContent>
            </Card>

            {/* Vision */}
            <Card className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="mx-auto bg-accent text-accent-foreground p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                  <Eye className="h-8 w-8" />
                </div>
                <CardTitle className="text-2xl text-accent">Visão</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  Ser reconhecida como a parceira digital nº 1 de médicos, advogados, engenheiros e outros profissionais
                  autônomos no Brasil até 2030.
                </p>
              </CardContent>
            </Card>

            {/* Values Preview */}
            <Card className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="mx-auto bg-primary text-primary-foreground p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                  <Heart className="h-8 w-8" />
                </div>
                <CardTitle className="text-2xl">Valores</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  Compromisso com o cliente, ética profissional e resultados mensuráveis guiam todas as nossas decisões
                  e ações.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Detailed Values */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Nossos Valores em Ação</h2>
            <p className="text-xl text-muted-foreground">Os princípios que norteiam nosso trabalho diário</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="text-secondary mb-4">{value.icon}</div>
                  <CardTitle className="text-xl">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">{value.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Nossa Equipe</h2>
            <p className="text-xl text-muted-foreground">Profissionais especializados e apaixonados por tecnologia</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="mx-auto mb-4">
                    <img
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      className="w-24 h-24 rounded-full object-cover mx-auto"
                    />
                  </div>
                  <CardTitle className="text-xl">{member.name}</CardTitle>
                  <CardDescription className="text-secondary font-medium">{member.role}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground text-sm leading-relaxed">{member.description}</p>
                  <div className="flex flex-wrap gap-1 justify-center">
                    {member.skills.map((skill) => (
                      <Badge key={skill} variant="outline" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Nossos Números</h2>
            <p className="text-xl opacity-90">Resultados que comprovam nossa excelência</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold mb-2 text-secondary">{achievement.number}</div>
                <div className="text-primary-foreground/80">{achievement.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Nossa Jornada</h2>
            <p className="text-xl text-muted-foreground">A evolução da T2 Casa do Site ao longo dos anos</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-border"></div>

              {timeline.map((item, index) => (
                <div
                  key={index}
                  className={`relative flex items-center mb-8 ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-secondary rounded-full border-4 border-background z-10"></div>

                  {/* Content */}
                  <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? "md:pr-8" : "md:pl-8"}`}>
                    <Card className="hover:shadow-lg transition-shadow duration-300">
                      <CardHeader>
                        <div className="flex items-center space-x-2 mb-2">
                          <Badge variant="secondary">{item.year}</Badge>
                        </div>
                        <CardTitle className="text-lg">{item.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground text-sm">{item.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-secondary/10 to-accent/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Pronto para Fazer Parte da Nossa História?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Junte-se aos centenas de profissionais que já transformaram sua presença digital conosco. Vamos criar algo
            incrível juntos!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-lg px-8">
              Solicitar Orçamento
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 bg-transparent">
              Ver Nosso Portfólio
            </Button>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
      <WhatsAppIntegration pageContext="sobre" />
    </div>
  )
}
