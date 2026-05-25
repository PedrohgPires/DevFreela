import { useState } from 'react';
import { Search, Filter, MapPin, Star, Heart, MessageCircle, ArrowLeft, DollarSign, Clock } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Badge } from './ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Card, CardContent, CardHeader } from './ui/card';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useRouter } from './Router';

const freelancers = [
  {
    id: 1,
    name: "Sarah Chen",
    title: "Desenvolvedora Full-Stack",
    location: "San Francisco, CA",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
    rating: 4.9,
    reviews: 127,
    hourlyRate: 85,
    skills: ["React", "Node.js", "Python", "AWS", "MongoDB"],
    description: "Desenvolvedora full-stack experiente com mais de 6 anos construindo aplicações web escaláveis. Especializada em React, Node.js e arquitetura em nuvem.",
    completedJobs: 89,
    responseTime: "1 hora",
    successRate: "98%",
    featured: true,
    online: true,
    portfolio: [
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=300&h=200&fit=crop",
      "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=300&h=200&fit=crop"
    ]
  },
  {
    id: 2,
    name: "Marcus Rodriguez",
    title: "Designer UI/UX",
    location: "Nova York, NY",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    rating: 4.8,
    reviews: 203,
    hourlyRate: 75,
    skills: ["Figma", "Adobe XD", "Prototipagem", "Pesquisa de Usuário", "Sistemas de Design"],
    description: "Designer criativo especializado em design centrado no usuário e identidade de marca. Histórico comprovado de melhoria no engajamento do usuário.",
    completedJobs: 156,
    responseTime: "2 horas",
    successRate: "95%",
    featured: true,
    online: false,
    portfolio: [
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=300&h=200&fit=crop",
      "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=300&h=200&fit=crop"
    ]
  },
  {
    id: 3,
    name: "Emily Watson",
    title: "Redatora e Especialista em SEO",
    location: "Londres, Reino Unido",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    rating: 5.0,
    reviews: 94,
    hourlyRate: 45,
    skills: ["Escrita SEO", "Copywriting", "Estratégia de Conteúdo", "WordPress", "Google Analytics"],
    description: "Redatora profissional criando conteúdo envolvente que gera resultados. Especializada em otimização SEO e copywriting de conversão.",
    completedJobs: 78,
    responseTime: "30 min",
    successRate: "100%",
    featured: false,
    online: true,
    portfolio: [
      "https://images.unsplash.com/photo-1486312338219-ce68e2c6f44d?w=300&h=200&fit=crop"
    ]
  },
  {
    id: 4,
    name: "David Kim",
    title: "Especialista em Marketing Digital",
    location: "Toronto, Canadá",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    rating: 4.7,
    reviews: 156,
    hourlyRate: 65,
    skills: ["Google Ads", "Facebook Ads", "Analytics", "Email Marketing", "Otimização de Conversão"],
    description: "Profissional de marketing focado em crescimento com histórico comprovado de aumento de ROI. Especialista em publicidade paga e marketing de performance.",
    completedJobs: 112,
    responseTime: "1 hora",
    successRate: "92%",
    featured: false,
    online: true,
    portfolio: [
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=300&h=200&fit=crop"
    ]
  },
  {
    id: 5,
    name: "Ana Silva",
    title: "Cientista de Dados",
    location: "São Paulo, Brasil",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face",
    rating: 4.9,
    reviews: 67,
    hourlyRate: 55,
    skills: ["Python", "Machine Learning", "Visualização de Dados", "SQL", "TensorFlow"],
    description: "Cientista de dados com experiência em aprendizado de máquina e análise preditiva. Transformando dados complexos em insights acionáveis.",
    completedJobs: 43,
    responseTime: "3 horas",
    successRate: "96%",
    featured: false,
    online: false,
    portfolio: [
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=300&h=200&fit=crop"
    ]
  },
  {
    id: 6,
    name: "James Thompson",
    title: "Desenvolvedor de Apps Móveis",
    location: "Melbourne, Austrália",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
    rating: 4.6,
    reviews: 89,
    hourlyRate: 70,
    skills: ["React Native", "Flutter", "iOS", "Android", "Firebase"],
    description: "Desenvolvedor de aplicativos móveis especializado em soluções multiplataforma. Criou mais de 50 aplicativos com milhões de downloads.",
    completedJobs: 67,
    responseTime: "4 horas",
    successRate: "94%",
    featured: false,
    online: true,
    portfolio: [
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=300&h=200&fit=crop"
    ]
  }
];

const categories = [
  "Todas as Habilidades",
  "Desenvolvimento Web",
  "Desenvolvimento Mobile",
  "Design & Criativo", 
  "Redação & Conteúdo",
  "Marketing Digital",
  "Ciência de Dados",
  "DevOps & Nuvem"
];

export function FindFreelancersPage() {
  const { navigate } = useRouter();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Todas as Habilidades');
  const [budgetRange, setBudgetRange] = useState('Todos os Orçamentos');
  const [savedFreelancers, setSavedFreelancers] = useState<number[]>([]);

  const toggleSaveFreelancer = (freelancerId: number) => {
    setSavedFreelancers(prev => 
      prev.includes(freelancerId) 
        ? prev.filter(id => id !== freelancerId)
        : [...prev, freelancerId]
    );
  };

  const filteredFreelancers = freelancers.filter(freelancer => {
    const matchesSearch = freelancer.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         freelancer.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         freelancer.skills.some(skill => skill.toLowerCase().includes(searchQuery.toLowerCase()));
    
    const matchesCategory = selectedCategory === 'Todas as Habilidades' || 
                           freelancer.skills.some(skill => {
                             switch(selectedCategory) {
                               case 'Desenvolvimento Web': return ['React', 'Node.js', 'Python', 'AWS'].includes(skill);
                               case 'Design & Criativo': return ['Figma', 'Adobe XD', 'Prototipagem'].includes(skill);
                               case 'Redação & Conteúdo': return ['Escrita SEO', 'Copywriting', 'Estratégia de Conteúdo'].includes(skill);
                               case 'Marketing Digital': return ['Google Ads', 'Facebook Ads', 'Analytics'].includes(skill);
                               case 'Ciência de Dados': return ['Python', 'Machine Learning', 'Visualização de Dados'].includes(skill);
                               case 'Desenvolvimento Mobile': return ['React Native', 'Flutter', 'iOS', 'Android'].includes(skill);
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
            <span className="text-sm">Voltar para a Home</span>
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
          <h1 className="text-3xl font-bold text-foreground mb-2">Encontrar Freelancers</h1>
          <p className="text-muted-foreground">Descubra profissionais talentosos para o seu próximo projeto</p>
        </div>

        <div className="mb-8 space-y-4">
          <div className="flex flex-col gap-4 md:flex-row md:items-center">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Buscar freelancers, habilidades ou serviços..."
                className="pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <Button variant="outline" className="md:w-auto">
              <Filter className="mr-2 h-4 w-4" />
              Filtros Avançados
            </Button>
          </div>

          <div className="flex flex-wrap gap-4">
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger className="w-[200px]">
                <SelectValue placeholder="Categoria de Habilidade" />
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
                <SelectValue placeholder="Tarifa por Hora" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Todos os Orçamentos">Todas as Tarifas</SelectItem>
                <SelectItem value="Abaixo de $25">Abaixo de $25/hr</SelectItem>
                <SelectItem value="$25-$50">$25 - $50/hr</SelectItem>
                <SelectItem value="$50-$100">$50 - $100/hr</SelectItem>
                <SelectItem value="Acima de $100">Acima de $100/hr</SelectItem>
              </SelectContent>
            </Select>

            <Select defaultValue="all">
              <SelectTrigger className="w-[150px]">
                <SelectValue placeholder="Disponibilidade" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Todos</SelectItem>
                <SelectItem value="online">Online Agora</SelectItem>
                <SelectItem value="available">Disponível</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="mb-6 flex items-center justify-between">
          <p className="text-muted-foreground">
            {filteredFreelancers.length} freelancer{filteredFreelancers.length !== 1 ? 's' : ''} encontrado{filteredFreelancers.length !== 1 ? 's' : ''}
          </p>
          <Select defaultValue="rating">
            <SelectTrigger className="w-[180px]">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="rating">Melhor Avaliados</SelectItem>
              <SelectItem value="rate-low">Menor Tarifa</SelectItem>
              <SelectItem value="rate-high">Maior Tarifa</SelectItem>
              <SelectItem value="newest">Mais Recentes</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {filteredFreelancers.map((freelancer) => (
            <Card key={freelancer.id} className="hover:shadow-md transition-shadow">
              <CardHeader className="pb-4">
                <div className="flex items-start gap-4">
                  <div className="relative">
                    <ImageWithFallback
                      src={freelancer.avatar}
                      alt={freelancer.name}
                      className="h-16 w-16 rounded-full object-cover"
                    />
                    {freelancer.online && (
                      <div className="absolute bottom-1 right-1 h-3 w-3 rounded-full bg-green-500 border-2 border-background"></div>
                    )}
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="font-semibold text-card-foreground hover:text-primary cursor-pointer">
                          {freelancer.name}
                        </h3>
                        <p className="text-sm text-muted-foreground">{freelancer.title}</p>
                        <div className="flex items-center gap-1 mt-1">
                          <MapPin className="h-3 w-3 text-muted-foreground" />
                          <span className="text-xs text-muted-foreground">{freelancer.location}</span>
                        </div>
                      </div>
                      
                      <div className="flex gap-1">
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => toggleSaveFreelancer(freelancer.id)}
                        >
                          <Heart 
                            className={`h-4 w-4 ${savedFreelancers.includes(freelancer.id) ? 'fill-current text-red-500' : ''}`} 
                          />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="pt-0 space-y-4">
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="font-medium">{freelancer.rating}</span>
                    <span className="text-muted-foreground">({freelancer.reviews} avaliações)</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <DollarSign className="h-4 w-4 text-primary" />
                    <span className="font-medium">${freelancer.hourlyRate}/hr</span>
                  </div>
                </div>

                <p className="text-sm text-muted-foreground line-clamp-2">
                  {freelancer.description}
                </p>

                <div className="flex flex-wrap gap-1">
                  {freelancer.skills.slice(0, 4).map((skill) => (
                    <Badge key={skill} variant="secondary" className="text-xs">
                      {skill}
                    </Badge>
                  ))}
                  {freelancer.skills.length > 4 && (
                    <Badge variant="outline" className="text-xs">
                      +{freelancer.skills.length - 4} mais
                    </Badge>
                  )}
                </div>

                {freelancer.portfolio.length > 0 && (
                  <div className="flex gap-2">
                    {freelancer.portfolio.slice(0, 2).map((image, index) => (
                      <ImageWithFallback
                        key={index}
                        src={image}
                        alt={`Portfólio ${index + 1}`}
                        className="h-16 w-24 rounded object-cover"
                      />
                    ))}
                  </div>
                )}

                <div className="grid grid-cols-3 gap-4 text-xs text-center">
                  <div>
                    <p className="font-medium text-card-foreground">{freelancer.completedJobs}</p>
                    <p className="text-muted-foreground">Projetos</p>
                  </div>
                  <div>
                    <p className="font-medium text-card-foreground">{freelancer.successRate}</p>
                    <p className="text-muted-foreground">Sucesso</p>
                  </div>
                  <div className="flex items-center justify-center gap-1">
                    <Clock className="h-3 w-3 text-muted-foreground" />
                    <span className="text-muted-foreground">{freelancer.responseTime}</span>
                  </div>
                </div>

                <div className="flex gap-2 pt-2">
                  <Button size="sm" className="flex-1">
                    <MessageCircle className="mr-1 h-3 w-3" />
                    Contatar
                  </Button>
                  <Button variant="outline" size="sm" className="flex-1">
                    Ver Perfil
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Button variant="outline" size="lg">
            Carregar Mais Freelancers
          </Button>
        </div>
      </div>
    </div>
  );
}