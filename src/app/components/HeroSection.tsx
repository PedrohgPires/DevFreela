import { Search } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-background to-muted/20 py-20 md:py-32">
      <div className="container relative z-10 max-w-screen-xl px-4 md:px-6">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-foreground md:text-6xl lg:text-7xl">
            Contrate Especialistas ou Seja Contratado por suas Habilidades
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground md:text-xl">
            Conecte-se com os melhores freelancers do mundo ou mostre suas habilidades para conquistar seus projetos dos sonhos.
            Junte-se a milhões de profissionais construindo suas carreiras no DevFreela.
          </p>

          {/* Search Bar */}
          <div className="mx-auto mt-10 max-w-2xl">
            <div className="flex flex-col gap-4 md:flex-row">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Qual serviço você está procurando?"
                  className="h-12 pl-10 pr-4 text-base"
                />
              </div>
              <Button size="lg" className="h-12 px-8 bg-primary hover:bg-primary/90">
                Buscar
              </Button>
            </div>
          </div>

          {/* Popular Searches */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
            <span className="text-sm text-muted-foreground">Popular:</span>
            {["Design de Logo", "WordPress", "Desenvolvimento React", "Redação de Conteúdo"].map((term) => (
              <Button key={term} variant="outline" size="sm" className="h-8 text-xs">
                {term}
              </Button>
            ))}
          </div>
        </div>
      </div>

      {/* Background Illustration */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute right-0 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-primary/5 blur-3xl"></div>
        <div className="absolute left-0 top-1/4 h-64 w-64 rounded-full bg-primary/10 blur-2xl"></div>
      </div>
    </section>
  );
}