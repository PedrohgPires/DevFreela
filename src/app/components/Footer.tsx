import { Facebook, Twitter, Instagram, Linkedin, Github } from "lucide-react";

const footerLinks = {
  "Para Clientes": [
    "Como Contratar",
    "Marketplace de Talentos",
    "Catálogo de Projetos",
    "Empresarial",
    "Qualquer Contratação",
  ],
  "Para Freelancers": [
    "Como Encontrar Trabalho",
    "Contratos Diretos",
    "Encontrar Vagas",
    "Comunidade",
    "Histórias de Sucesso",
  ],
  "Recursos": [
    "Ajuda e Suporte",
    "Confiança e Segurança",
    "Vender no DevFreela",
    "Comprar no DevFreela",
    "Notas de Lançamento",
  ],
  "Empresa": [
    "Sobre Nós",
    "Liderança",
    "Relações com Investidores",
    "Carreiras",
    "Imprensa",
  ],
};

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Github, href: "#", label: "GitHub" },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="container max-w-screen-xl px-4 py-16 md:px-6">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-6">
          {/* Logo and Description */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-md bg-primary">
                <span className="text-primary-foreground font-bold">F</span>
              </div>
              <span className="text-xl font-bold text-foreground">DevFreela</span>
            </div>
            <p className="mt-4 text-sm text-muted-foreground max-w-md">
              O maior marketplace de freelancing do mundo. Conecte-se com os melhores talentos ou mostre suas habilidades para conquistar projetos incríveis.
            </p>
            
            {/* Social Links */}
            <div className="mt-6 flex space-x-4">
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    className="flex h-9 w-9 items-center justify-center rounded-md bg-muted text-muted-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
                    aria-label={social.label}
                  >
                    <IconComponent className="h-4 w-4" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-semibold text-foreground">{category}</h3>
              <ul className="mt-4 space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Footer */}
        <div className="mt-12 flex flex-col items-center justify-between border-t border-border pt-8 md:flex-row">
          <p className="text-sm text-muted-foreground">
            © 2025 DevFreela Inc. Todos os direitos reservados.
          </p>
          <div className="mt-4 flex space-x-6 md:mt-0">
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground">
              Política de Privacidade
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground">
              Termos de Serviço
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground">
              Política de Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}