import { 
  Code, 
  Palette, 
  PenTool, 
  Megaphone, 
  Camera, 
  Music, 
  BarChart, 
  Smartphone 
} from "lucide-react";

const categories = [
  {
    name: "Desenvolvimento Web",
    icon: Code,
    description: "Sites e aplicações web personalizados",
    projects: "12.847"
  },
  {
    name: "Design Gráfico",
    icon: Palette,
    description: "Logos, branding e design gráfico",
    projects: "8.952"
  },
  {
    name: "Redação e Conteúdo",
    icon: PenTool,
    description: "Artigos, blogs e copywriting",
    projects: "6.234"
  },
  {
    name: "Marketing Digital",
    icon: Megaphone,
    description: "SEO, mídias sociais e publicidade",
    projects: "4.567"
  },
  {
    name: "Fotografia",
    icon: Camera,
    description: "Fotos de produtos, retratos e eventos",
    projects: "3.829"
  },
  {
    name: "Música e Áudio",
    icon: Music,
    description: "Locução, mixagem e composição",
    projects: "2.156"
  },
  {
    name: "Análise de Dados",
    icon: BarChart,
    description: "Ciência de dados e visualização",
    projects: "1.943"
  },
  {
    name: "Apps Mobile",
    icon: Smartphone,
    description: "Desenvolvimento iOS e Android",
    projects: "2.847"
  }
];

export function PopularCategories() {
  return (
    <section className="py-16 md:py-24">
      <div className="container max-w-screen-xl px-4 md:px-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Categorias Populares
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Explore as habilidades e serviços mais procurados
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((category) => {
            const IconComponent = category.icon;
            return (
              <div
                key={category.name}
                className="group relative overflow-hidden rounded-lg border border-border bg-card p-6 transition-all duration-200 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/10"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <IconComponent className="h-6 w-6" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-card-foreground">{category.name}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{category.description}</p>
                    <p className="mt-2 text-xs text-primary">{category.projects} projetos</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}