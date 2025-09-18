import Header from "@/components/header"
import Footer from "@/components/footer"
import WhatsAppButton from "@/components/whatsapp-button"
import WhatsAppIntegration from "@/components/whatsapp-integration"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  ExternalLink,
  Eye,
  Stethoscope,
  Gavel,
  Calculator,
  HardHat,
  FlaskConical,
  Wrench,
  GraduationCap,
  Heart,
  Building,
} from "lucide-react"

export default function PortfolioPage() {
  const portfolioItems = [
    {
      id: 1,
      title: "Dr. Silva - Cardiologista",
      category: "Médicos",
      description: "Site moderno para clínica cardiológica com agendamento online e informações sobre procedimentos.",
      image: "/placeholder-4amop.png",
      icon: <Stethoscope className="h-5 w-5" />,
      technologies: ["React", "Next.js", "Tailwind CSS"],
      features: ["Agendamento Online", "Portal do Paciente", "Blog Médico", "Certificações"],
    },
    {
      id: 2,
      title: "Advocacia Santos & Associados",
      category: "Advogados",
      description: "Portal jurídico completo com área de especialidades e blog de artigos jurídicos.",
      image: "/placeholder-pjxp5.png",
      icon: <Gavel className="h-5 w-5" />,
      technologies: ["WordPress", "PHP", "MySQL"],
      features: ["Área de Especialidades", "Blog Jurídico", "Contato Seguro", "Certificados OAB"],
    },
    {
      id: 3,
      title: "Eng. Roberto Lima - Civil",
      category: "Engenheiros",
      description: "Site profissional para engenheiro civil com portfólio de projetos e serviços.",
      image: "/placeholder-9oc1g.png",
      icon: <HardHat className="h-5 w-5" />,
      technologies: ["HTML5", "CSS3", "JavaScript"],
      features: ["Portfólio de Projetos", "Calculadoras", "Certificações", "Orçamentos Online"],
    },
    {
      id: 4,
      title: "Contabilidade Precisa",
      category: "Contadores",
      description: "Sistema web para escritório contábil com área do cliente e serviços digitais.",
      image: "/placeholder-lcgcm.png",
      icon: <Calculator className="h-5 w-5" />,
      technologies: ["Vue.js", "Node.js", "MongoDB"],
      features: ["Área do Cliente", "Upload de Documentos", "Relatórios", "Chat Online"],
    },
    {
      id: 5,
      title: "Construtora Alicerce",
      category: "Construção",
      description: "Site institucional para construtora com galeria de obras e empreendimentos.",
      image: "/placeholder-t44xm.png",
      icon: <Building className="h-5 w-5" />,
      technologies: ["React", "Gatsby", "GraphQL"],
      features: ["Galeria de Obras", "Empreendimentos", "Financiamento", "Tour Virtual"],
    },
    {
      id: 6,
      title: "Lab. Química Avançada",
      category: "Químicos",
      description: "Portal para laboratório químico com serviços de análise e certificações.",
      image: "/placeholder-poicm.png",
      icon: <FlaskConical className="h-5 w-5" />,
      technologies: ["Angular", "TypeScript", "Firebase"],
      features: ["Serviços de Análise", "Certificações", "Laudos Online", "Agendamento"],
    },
    {
      id: 7,
      title: "Oficina do João - Mecânica",
      category: "Mecânicos",
      description: "Site para oficina mecânica com agendamento de serviços e orçamentos online.",
      image: "/placeholder-9uyd6.png",
      icon: <Wrench className="h-5 w-5" />,
      technologies: ["WordPress", "WooCommerce", "PHP"],
      features: ["Agendamento", "Orçamentos", "Peças Online", "Histórico Veicular"],
    },
    {
      id: 8,
      title: "Centro Educacional Futuro",
      category: "Educação",
      description: "Plataforma educacional com cursos online e área do aluno integrada.",
      image: "/placeholder-yfscl.png",
      icon: <GraduationCap className="h-5 w-5" />,
      technologies: ["Moodle", "PHP", "MySQL"],
      features: ["Cursos Online", "Área do Aluno", "Certificados", "Biblioteca Virtual"],
    },
    {
      id: 9,
      title: "Dra. Ana - Psicóloga",
      category: "Psicólogos",
      description: "Site terapêutico com informações sobre tratamentos e agendamento confidencial.",
      image: "/placeholder-ie6rd.png",
      icon: <Heart className="h-5 w-5" />,
      technologies: ["React", "Next.js", "Supabase"],
      features: ["Agendamento Confidencial", "Terapias Online", "Blog", "Recursos Terapêuticos"],
    },
  ]

  const categories = [
    "Todos",
    "Médicos",
    "Advogados",
    "Engenheiros",
    "Contadores",
    "Construção",
    "Químicos",
    "Mecânicos",
    "Educação",
    "Psicólogos",
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Nosso <span className="gradient-text">Portfólio</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Conheça alguns dos projetos que desenvolvemos para profissionais liberais de diversas áreas. Cada site é
              único e personalizado para atender às necessidades específicas de cada cliente.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-secondary hover:bg-secondary/90">
                Solicitar Orçamento
              </Button>
              <Button variant="outline" size="lg">
                Ver Todos os Projetos
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 border-b">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <Button key={category} variant={category === "Todos" ? "default" : "outline"} size="sm" className="mb-2">
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioItems.map((item) => (
              <Card key={item.id} className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
                <div className="relative overflow-hidden">
                  <img
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                    <Button size="sm" variant="secondary">
                      <Eye className="h-4 w-4 mr-2" />
                      Visualizar
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="text-white border-white hover:bg-white hover:text-black bg-transparent"
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Visitar
                    </Button>
                  </div>
                  <Badge className="absolute top-4 left-4 bg-secondary">{item.category}</Badge>
                </div>

                <CardHeader>
                  <div className="flex items-center space-x-2 mb-2">
                    <div className="text-secondary">{item.icon}</div>
                    <CardTitle className="text-lg">{item.title}</CardTitle>
                  </div>
                  <CardDescription className="text-base leading-relaxed">{item.description}</CardDescription>
                </CardHeader>

                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2 text-sm">Tecnologias:</h4>
                    <div className="flex flex-wrap gap-1">
                      {item.technologies.map((tech) => (
                        <Badge key={tech} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2 text-sm">Funcionalidades:</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      {item.features.map((feature, index) => (
                        <li key={index} className="flex items-center space-x-2">
                          <div className="w-1 h-1 bg-secondary rounded-full"></div>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Números que Impressionam</h2>
            <p className="text-xl text-muted-foreground">Resultados comprovados em diversos projetos</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-secondary mb-2">500+</div>
              <div className="text-muted-foreground">Sites Desenvolvidos</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-secondary mb-2">15+</div>
              <div className="text-muted-foreground">Áreas Profissionais</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-secondary mb-2">98%</div>
              <div className="text-muted-foreground">Clientes Satisfeitos</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-secondary mb-2">5+</div>
              <div className="text-muted-foreground">Anos de Experiência</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Gostou do que Viu?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Cada projeto é único e desenvolvido especialmente para atender às necessidades do seu negócio. Entre em
            contato e vamos criar algo incrível juntos!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8">
              Solicitar Meu Orçamento
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
            >
              Falar no WhatsApp
            </Button>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
      <WhatsAppIntegration
        pageContext="portfolio"
        customMessage="Olá! Vi o portfólio da T2 Casa do Site e gostaria de um orçamento para meu projeto similar."
      />
    </div>
  )
}
