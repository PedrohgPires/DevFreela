import { useState } from 'react';
import { Search, Filter, MapPin, Clock, DollarSign, Star, Bookmark, ArrowLeft } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Badge } from './ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Card, CardContent, CardHeader } from './ui/card';
import { useRouter } from './Router';

const jobs = [
  {
    id: 1,
    title: "Desenvolvedor React para Plataforma de E-commerce",
    description: "Procurando um desenvolvedor React experiente para construir uma plataforma de e-commerce moderna com Redux, TypeScript e integração com gateways de pagamento.",
    budget: { type: "fixed", amount: 5000 },
    duration: "2-3 meses",
    skills: ["React", "TypeScript", "Redux", "Integração de Pagamentos"],
    client: {
      name: "TechCorp Solutions",
      rating: 4.8,
      reviews: 47,
      location: "San Francisco, CA"
    },
    postedAt: "há 2 horas",
    proposals: 12,
    verified: true
  },
  {
    id: 2,
    title: "Design de UI/UX para App Móvel",
    description: "Preciso de um designer talentoso para criar interfaces modernas e fáceis de usar para nosso aplicativo de fitness. Experiência com apps de saúde/fitness é preferencial.",
    budget: { type: "hourly", min: 40, max: 80 },
    duration: "1-2 meses",
    skills: ["Design UI/UX", "Figma", "Design Móvel", "Prototipagem"],
    client: {
      name: "FitLife Startup",
      rating: 4.9,
      reviews: 23,
      location: "Nova York, NY"
    },
    postedAt: "há 4 horas",
    proposals: 8,
    verified: true
  },
  {
    id: 3,
    title: "Redator de Conteúdo para Blog de Tecnologia",
    description: "Buscando um redator de conteúdo qualificado para criar artigos envolventes sobre tecnologias emergentes, IA e tendências de desenvolvimento de software.",
    budget: { type: "hourly", min: 25, max: 45 },
    duration: "Contínuo",
    skills: ["Redação", "Redação Técnica", "SEO", "Pesquisa"],
    client: {
      name: "Digital Insights",
      rating: 4.7,
      reviews: 156,
      location: "Remoto"
    },
    postedAt: "há 1 dia",
    proposals: 23,
    verified: false
  },
  {
    id: 4,
    title: "Análise e Visualização de Dados em Python",
    description: "Preciso de um cientista de dados para analisar dados de comportamento do cliente e criar dashboards interativos usando Python, Pandas e bibliotecas de visualização.",
    budget: { type: "fixed", amount: 3500 },
    duration: "1 mês",
    skills: ["Python", "Análise de Dados", "Pandas", "Matplotlib", "Tableau"],
    client: {
      name: "RetailMetrics Co",
      rating: 4.6,
      reviews: 34,
      location: "Chicago, IL"
    },
    postedAt: "há 2 dias",
    proposals: 15,
    verified: true
  },
  {
    id: 5,
    title: "Desenvolvimento de Site WordPress",
    description: "Procurando um desenvolvedor WordPress para criar um site comercial personalizado com funcionalidade de agendamento e integração de pagamentos.",
    budget: { type: "fixed", amount: 2000 },
    duration: "3-4 semanas",
    skills: ["WordPress", "PHP", "Temas Personalizados", "WooCommerce"],
    client: {
      name: "Local Services Hub",
      rating: 4.5,
      reviews: 89,
      location: "Austin, TX"
    },
    postedAt: "há 3 dias",
    proposals: 31,
    verified: true
  },
  {
    id: 6,
    title: "Gestão de Campanha de Marketing Digital",
    description: "Profissional de marketing digital experiente necessário para gerenciar Google Ads, campanhas no Facebook e estratégia de SEO para empresa SaaS em crescimento.",
    budget: { type: "hourly", min: 50, max: 100 },
    duration: "3-6 meses",
    skills: ["Google Ads", "Facebook Ads", "SEO", "Analytics", "Marketing SaaS"],
    client: {
      name: "CloudTech Solutions",
      rating: 4.9,
      reviews: 67,
      location: "Seattle, WA"
    },
    postedAt: "há 1 semana",
    proposals: 19,
    verified: true
  }
];

const categories = [
  "Todas as Categorias",
  "Desenvolvimento Web",
  "Desenvolvimento Mobile", 
  "Design & Criativo",
  "Redação & Conteúdo",
  "Marketing Digital",
  "Ciência de Dados",
  "DevOps & Nuvem"
];

export function FindWorkPage() {
  const { navigate } = useRouter();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Todas as Categorias');
  const [budgetRange, setBudgetRange] = useState('Todos os Orçamentos');
  const [savedJobs, setSavedJobs] = useState<number[]>([]);

  const toggleSaveJob = (jobId: number) => {
    setSavedJobs(prev => 
      prev.includes(jobId) 
        ? prev.filter(id => id !== jobId)
        : [...prev, jobId]
    );
  };

  const filteredJobs = jobs.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         job.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         job.skills.some(skill => skill.toLowerCase().includes(searchQuery.toLowerCase()));
    
    const matchesCategory = selectedCategory === 'Todas as Categorias' || 
                           job.skills.some(skill => {
                             switch(selectedCategory) {
                               case 'Desenvolvimento Web': return ['React', 'WordPress', 'PHP', 'TypeScript'].includes(skill);
                               case 'Design & Criativo': return ['Design UI/UX', 'Figma', 'Design Móvel'].includes(skill);
                               case 'Redação & Conteúdo': return ['Redação', 'Redação Técnica', 'SEO'].includes(skill);
                               case 'Marketing Digital': return ['Google Ads', 'Facebook Ads', 'SEO', 'Analytics'].includes(skill);
                               case 'Ciência de Dados': return ['Python', 'Análise de Dados', 'Pandas', 'Matplotlib'].includes(skill);
                               default: return true;
                             }
                           });
    
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-background/95 backdrop-blur">
        <div className="w-full mx-auto flex h-16 max-w-screen-xl items-center justify-between px-4 md:px-6">
          <button 
            onClick={() => navigate('home')}
            className="flex items-center space-x-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            <span className="text-sm">Voltar para Home</span>
          </button>
          
          <div className="flex items-center space-x-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-md bg-primary">
              <span className="text-primary-foreground font-bold">F</span>
            </div>
            <span className="text-xl font-bold text-foreground">DevFreela</span>
          </div>
        </div>
      </header>

      <div className="w-full mx-auto max-w-screen-xl px-4 py-8 md:px-6">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Encontrar Trabalho</h1>
          <p className="text-muted-foreground">Descubra projetos que correspondam às suas habilidades e interesses</p>
        </div>

        <div className="mb-8 space-y-4">
          <div className="flex flex-col gap-4 md:flex-row md:items-center">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Buscar por projetos, habilidades ou palavras-chave..."
                className="pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <Button variant="outline" className="md:w-auto">
              <Filter className="mr-2 h-4 w-4" />
              Filtros
            </Button>
          </div>

          <div className="flex flex-wrap gap-4">
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger className="w-[200px]">
                <SelectValue placeholder="Categoria" />
              </SelectTrigger>
              <SelectContent>
                {categories.map((category) => (
                  <SelectItem key={category} value={category}>
                    {category}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={budgetRange} onValueChange={setBudgetRange}>
              <SelectTrigger className="w-[200px]">
                <SelectValue placeholder="Faixa de Orçamento" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Todos os Orçamentos">Todos os Orçamentos</SelectItem>
                <SelectItem value="Abaixo de R$1000">Abaixo de R$1.000</SelectItem>
                <SelectItem value="R$1000-R$5000">R$1.000 - R$5.000</SelectItem>
                <SelectItem value="R$5000-R$10000">R$5.000 - R$10.000</SelectItem>
                <SelectItem value="Acima de R$10000">Acima de R$10.000</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="mb-6 flex items-center justify-between">
          <p className="text-muted-foreground">
            {filteredJobs.length} projeto{filteredJobs.length !== 1 ? 's' : ''} encontrado{filteredJobs.length !== 1 ? 's' : ''}
          </p>
          <Select defaultValue="newest">
            <SelectTrigger className="w-[180px]">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="newest">Mais Recentes Primeiro</SelectItem>
              <SelectItem value="budget-high">Maior Orçamento</SelectItem>
              <SelectItem value="budget-low">Menor Orçamento</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-6">
          {filteredJobs.map((job) => (
            <Card key={job.id} className="hover:shadow-md transition-shadow">
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between">
                  <div className="space-y-2 flex-1">
                    <div className="flex items-center gap-2">
                      <h3 className="text-lg font-semibold text-card-foreground hover:text-primary cursor-pointer">
                        {job.title}
                      </h3>
                      {job.verified && (
                        <Badge variant="secondary" className="text-xs">
                          Cliente Verificado
                        </Badge>
                      )}
                    </div>
                    <p className="text-muted-foreground text-sm line-clamp-2">
                      {job.description}
                    </p>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => toggleSaveJob(job.id)}
                    className="ml-4"
                  >
                    <Bookmark 
                      className={`h-4 w-4 ${savedJobs.includes(job.id) ? 'fill-current text-primary' : ''}`} 
                    />
                  </Button>
                </div>
              </CardHeader>

              <CardContent className="pt-0">
                <div className="space-y-4">
                  <div className="flex flex-wrap items-center gap-6 text-sm">
                    <div className="flex items-center gap-1">
                      <DollarSign className="h-4 w-4 text-primary" />
                      <span className="font-medium">
                        {job.budget.type === 'fixed' 
                          ? `R$${(job.budget as any).amount?.toLocaleString()} fixo`
                          : `R$${(job.budget as any).min}-R$${(job.budget as any).max}/hr`
                        }
                      </span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4 text-muted-foreground" />
                      <span>{job.duration}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="h-4 w-4 text-muted-foreground" />
                      <span>{job.client.location}</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {job.skills.map((skill) => (
                      <Badge key={skill} variant="outline" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-2 border-t border-border">
                    <div className="flex items-center gap-4">
                      <div>
                        <p className="font-medium text-sm">{job.client.name}</p>
                        <div className="flex items-center gap-1">
                          <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                          <span className="text-xs text-muted-foreground">
                            {job.client.rating} ({job.client.reviews} avaliações)
                          </span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-4 text-xs text-muted-foreground">
                      <span>{job.proposals} propostas</span>
                      <span>{job.postedAt}</span>
                    </div>
                  </div>

                  <div className="flex gap-3 pt-2">
                    <Button size="sm" className="flex-1 md:flex-none">
                      Candidatar-se
                    </Button>
                    <Button variant="outline" size="sm">
                      Ver Detalhes
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Button variant="outline" size="lg">
            Carregar Mais Projetos
          </Button>
        </div>
      </div>
    </div>
  );
}