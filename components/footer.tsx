import Link from "next/link"
import { Code, Mail, Phone, MapPin, Facebook, Instagram, Linkedin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <div className="bg-secondary text-secondary-foreground p-2 rounded-lg">
                <Code className="h-6 w-6" />
              </div>
              <div>
                <span className="text-xl font-bold">T2</span>
                <span className="text-sm ml-1">Casa do Site</span>
              </div>
            </Link>
            <p className="text-primary-foreground/80 mb-4 max-w-md">
              Soluções digitais práticas, acessíveis e personalizadas que ajudam profissionais liberais a ganhar tempo,
              atrair mais clientes e fortalecer sua autoridade online.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-5 w-5 hover:text-secondary cursor-pointer transition-colors" />
              <Instagram className="h-5 w-5 hover:text-secondary cursor-pointer transition-colors" />
              <Linkedin className="h-5 w-5 hover:text-secondary cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-primary-foreground/80 hover:text-secondary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="text-primary-foreground/80 hover:text-secondary transition-colors">
                  Portfólio
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-primary-foreground/80 hover:text-secondary transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/sobre" className="text-primary-foreground/80 hover:text-secondary transition-colors">
                  Sobre Nós
                </Link>
              </li>
              <li>
                <Link href="/contato" className="text-primary-foreground/80 hover:text-secondary transition-colors">
                  Contato
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-4">Contato</h3>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span className="text-primary-foreground/80">(11) 93425-1292</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span className="text-primary-foreground/80">tarcioapps7@gmail.com</span>
              </li>
              <li className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span className="text-primary-foreground/80">São Paulo, SP</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-primary-foreground/60">© 2024 T2 Casa do Site. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
