import { Button } from "./ui/button";
import { Menu } from "lucide-react";
import { useRouter } from "./Router";

export function Header() {
  const { navigate } = useRouter();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="w-full mx-auto flex h-16 max-w-screen-xl items-center justify-between px-4 md:px-6">
        {/* Logo */}
        <button 
          onClick={() => navigate('home')}
          className="flex items-center space-x-2 hover:opacity-80 transition-opacity"
        >
          <div className="flex h-8 w-8 items-center justify-center rounded-md bg-primary">
            <span className="text-primary-foreground font-bold">F</span>
          </div>
          <span className="text-xl font-bold text-foreground">DevFreela</span>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <button 
            onClick={() => navigate('find-work')}
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Encontrar Trabalho
          </button>
          <button 
            onClick={() => navigate('find-freelancers')}
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Encontrar Freelancers
          </button>
          <a href="#" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            Categorias
          </a>
          <a href="#" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            Como Funciona
          </a>
        </nav>

        {/* Desktop Auth & CTA */}
        <div className="hidden md:flex items-center space-x-4">
          <Button 
            variant="ghost" 
            size="sm"
            onClick={() => navigate('login')}
          >
            Entrar
          </Button>
          <Button 
            variant="outline" 
            size="sm"
            onClick={() => navigate('signup')}
          >
            Cadastrar
          </Button>
          <Button size="sm" className="bg-primary hover:bg-primary/90">
            Publicar Projeto
          </Button>
        </div>

        {/* Mobile Menu */}
        <Button variant="ghost" size="sm" className="md:hidden">
          <Menu className="h-5 w-5" />
        </Button>
      </div>
    </header>
  );
}