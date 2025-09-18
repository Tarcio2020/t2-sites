import Header from "@/components/header"
import Footer from "@/components/footer"
import WhatsAppButton from "@/components/whatsapp-button"
import WhatsAppIntegration from "@/components/whatsapp-integration"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Calendar, Clock, User, Search, TrendingUp, Eye, MessageCircle, ArrowRight } from "lucide-react"

export default function BlogPage() {
  const featuredPost = {
    id: 1,
    title: "Como um Site Profissional Pode Aumentar sua Clientela em 300%",
    excerpt:
      "Descubra as estratégias comprovadas que profissionais liberais estão usando para atrair mais clientes através de seus sites profissionais.",
    content: "Um site profissional bem estruturado é uma das ferramentas mais poderosas para profissionais liberais...",
    author: "Equipe T2",
    date: "2024-01-15",
    readTime: "8 min",
    category: "Marketing Digital",
    image: "/placeholder.svg?key=blog1",
    views: 2847,
    comments: 23,
    featured: true,
  }

  const blogPosts = [
    {
      id: 2,
      title: "SEO para Profissionais Liberais: Guia Completo 2024",
      excerpt:
        "Aprenda as melhores práticas de SEO específicas para advogados, médicos, engenheiros e outros profissionais.",
      author: "Dr. Carlos Tech",
      date: "2024-01-12",
      readTime: "12 min",
      category: "SEO",
      image: "/placeholder.svg?key=blog2",
      views: 1923,
      comments: 18,
    },
    {
      id: 3,
      title: "5 Elementos Essenciais em um Site de Advocacia",
      excerpt:
        "Conheça os componentes fundamentais que todo site de escritório de advocacia deve ter para converter visitantes em clientes.",
      author: "Ana Silva",
      date: "2024-01-10",
      readTime: "6 min",
      category: "Design",
      image: "/placeholder.svg?key=blog3",
      views: 1654,
      comments: 12,
    },
    {
      id: 4,
      title: "Telemedicina: Como Adaptar seu Site para Consultas Online",
      excerpt: "Guia prático para médicos implementarem funcionalidades de telemedicina em seus sites profissionais.",
      author: "Dr. Roberto Med",
      date: "2024-01-08",
      readTime: "10 min",
      category: "Tecnologia",
      image: "/placeholder.svg?key=blog4",
      views: 2156,
      comments: 31,
    },
    {
      id: 5,
      title: "LGPD para Sites Profissionais: O que Você Precisa Saber",
      excerpt: "Entenda como adequar seu site às normas da Lei Geral de Proteção de Dados e proteger seus clientes.",
      author: "Equipe T2",
      date: "2024-01-05",
      readTime: "7 min",
      category: "Legislação",
      image: "/placeholder.svg?key=blog5",
      views: 1432,
      comments: 9,
    },
    {
      id: 6,
      title: "Calculadoras Online: Ferramenta Poderosa para Engenheiros",
      excerpt: "Como implementar calculadoras personalizadas em seu site para atrair e engajar clientes da engenharia.",
      author: "Eng. Paulo Tech",
      date: "2024-01-03",
      readTime: "5 min",
      category: "Ferramentas",
      image: "/placeholder.svg?key=blog6",
      views: 987,
      comments: 7,
    },
    {
      id: 7,
      title: "Psicologia Online: Criando um Ambiente Digital Acolhedor",
      excerpt:
        "Dicas de design e funcionalidades para psicólogos criarem sites que transmitam confiança e acolhimento.",
      author: "Dra. Maria Psi",
      date: "2024-01-01",
      readTime: "9 min",
      category: "Design",
      image: "/placeholder.svg?key=blog7",
      views: 1765,
      comments: 15,
    },
  ]

  const categories = ["Todos", "Marketing Digital", "SEO", "Design", "Tecnologia", "Legislação", "Ferramentas"]

  const popularPosts = [
    { title: "10 Erros Comuns em Sites de Profissionais Liberais", views: 3421 },
    { title: "Como Escolher o Domínio Perfeito para seu Consultório", views: 2987 },
    { title: "Integrações Essenciais para Sites Médicos", views: 2654 },
    { title: "Otimização de Velocidade: Sites que Convertem Mais", views: 2341 },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Blog <span className="gradient-text">T2 Casa do Site</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Dicas, tutoriais e insights sobre desenvolvimento web, marketing digital e tecnologia para profissionais
              liberais que querem se destacar online.
            </p>

            {/* Search Bar */}
            <div className="max-w-md mx-auto relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input placeholder="Pesquisar artigos..." className="pl-10 pr-4 py-3 text-base" />
            </div>
          </div>
        </div>
      </section>

      {/* Categories Filter */}
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

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            {/* Featured Post */}
            <article className="group">
              <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="relative">
                  <img
                    src={featuredPost.image || "/placeholder.svg"}
                    alt={featuredPost.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <Badge className="absolute top-4 left-4 bg-secondary">Destaque</Badge>
                  <Badge className="absolute top-4 right-4 bg-accent">{featuredPost.category}</Badge>
                </div>

                <CardHeader className="space-y-4">
                  <CardTitle className="text-2xl md:text-3xl leading-tight hover:text-secondary transition-colors cursor-pointer">
                    {featuredPost.title}
                  </CardTitle>

                  <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                    <div className="flex items-center space-x-1">
                      <User className="h-4 w-4" />
                      <span>{featuredPost.author}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-4 w-4" />
                      <span>{new Date(featuredPost.date).toLocaleDateString("pt-BR")}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="h-4 w-4" />
                      <span>{featuredPost.readTime}</span>
                    </div>
                  </div>

                  <CardDescription className="text-base leading-relaxed">{featuredPost.excerpt}</CardDescription>
                </CardHeader>

                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                      <div className="flex items-center space-x-1">
                        <Eye className="h-4 w-4" />
                        <span>{featuredPost.views.toLocaleString()}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <MessageCircle className="h-4 w-4" />
                        <span>{featuredPost.comments}</span>
                      </div>
                    </div>

                    <Button className="bg-secondary hover:bg-secondary/90">
                      Ler Artigo
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </article>

            {/* Blog Posts Grid */}
            <div className="space-y-8">
              <h2 className="text-2xl font-bold">Artigos Recentes</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {blogPosts.map((post) => (
                  <Card key={post.id} className="group hover:shadow-lg transition-shadow duration-300">
                    <div className="relative overflow-hidden">
                      <img
                        src={post.image || "/placeholder.svg"}
                        alt={post.title}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <Badge className="absolute top-3 left-3 bg-accent text-xs">{post.category}</Badge>
                    </div>

                    <CardHeader>
                      <CardTitle className="text-lg leading-tight hover:text-secondary transition-colors cursor-pointer line-clamp-2">
                        {post.title}
                      </CardTitle>

                      <div className="flex items-center space-x-3 text-xs text-muted-foreground">
                        <div className="flex items-center space-x-1">
                          <User className="h-3 w-3" />
                          <span>{post.author}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Calendar className="h-3 w-3" />
                          <span>{new Date(post.date).toLocaleDateString("pt-BR")}</span>
                        </div>
                      </div>

                      <CardDescription className="text-sm leading-relaxed line-clamp-3">{post.excerpt}</CardDescription>
                    </CardHeader>

                    <CardContent>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3 text-xs text-muted-foreground">
                          <div className="flex items-center space-x-1">
                            <Clock className="h-3 w-3" />
                            <span>{post.readTime}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Eye className="h-3 w-3" />
                            <span>{post.views}</span>
                          </div>
                        </div>

                        <Button variant="ghost" size="sm" className="text-secondary hover:text-secondary/80">
                          Ler mais
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Load More Button */}
            <div className="text-center">
              <Button variant="outline" size="lg">
                Carregar Mais Artigos
              </Button>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Newsletter Signup */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Newsletter T2</CardTitle>
                <CardDescription>Receba dicas semanais sobre desenvolvimento web e marketing digital</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Input placeholder="Seu melhor e-mail" />
                <Button className="w-full bg-secondary hover:bg-secondary/90">Inscrever-se</Button>
                <p className="text-xs text-muted-foreground">Sem spam. Cancele quando quiser.</p>
              </CardContent>
            </Card>

            {/* Popular Posts */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl flex items-center space-x-2">
                  <TrendingUp className="h-5 w-5 text-secondary" />
                  <span>Mais Populares</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {popularPosts.map((post, index) => (
                  <div key={index} className="flex items-start space-x-3 group cursor-pointer">
                    <div className="bg-secondary text-secondary-foreground rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold">
                      {index + 1}
                    </div>
                    <div className="flex-1">
                      <h4 className="text-sm font-medium group-hover:text-secondary transition-colors line-clamp-2">
                        {post.title}
                      </h4>
                      <div className="flex items-center space-x-1 mt-1 text-xs text-muted-foreground">
                        <Eye className="h-3 w-3" />
                        <span>{post.views.toLocaleString()} visualizações</span>
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Categories */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Categorias</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {categories.slice(1).map((category) => (
                    <div
                      key={category}
                      className="flex items-center justify-between py-2 border-b border-border last:border-0"
                    >
                      <span className="text-sm hover:text-secondary cursor-pointer transition-colors">{category}</span>
                      <Badge variant="outline" className="text-xs">
                        {Math.floor(Math.random() * 20) + 5}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* CTA Card */}
            <Card className="bg-gradient-to-br from-secondary/10 to-accent/10 border-secondary/20">
              <CardHeader>
                <CardTitle className="text-xl">Precisa de um Site?</CardTitle>
                <CardDescription>Transforme sua presença digital com a T2 Casa do Site</CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full bg-secondary hover:bg-secondary/90">Solicitar Orçamento</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
      <WhatsAppButton />
      <WhatsAppIntegration pageContext="blog" />
    </div>
  )
}
