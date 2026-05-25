import { useState } from 'react';
import { DashboardHeader } from './DashboardHeader';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Progress } from './ui/progress';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Sidebar, SidebarContent, SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarProvider } from './ui/sidebar';
import { 
  Home, 
  Briefcase, 
  Users, 
  MessageSquare, 
  DollarSign, 
  FileText, 
  BarChart3, 
  Plus,
  Star,
  Clock,
  TrendingUp,
  Calendar
} from 'lucide-react';

const sidebarItems = [
  { title: "Painel", icon: Home, id: "overview" },
  { title: "Projetos Ativos", icon: Briefcase, id: "projects" },
  { title: "Vagas Publicadas", icon: FileText, id: "jobs" },
  { title: "Freelancers", icon: Users, id: "freelancers" },
  { title: "Mensagens", icon: MessageSquare, id: "messages", badge: "3" },
  { title: "Pagamentos", icon: DollarSign, id: "payments" },
];

const mockData = {
  stats: {
    totalSpent: 45780,
    activeProjects: 6,
    hiredFreelancers: 23,
    avgProjectRating: 4.7,
    completedProjects: 42,
    ongoingJobs: 8
  },
  activeProjects: [
    {
      id: 1,
      title: "Desenvolvimento de App Mobile",
      freelancer: "Sarah Chen",
      budget: 8000,
      spent: 6000,
      progress: 75,
      deadline: "20-02-2024",
      status: "Em Andamento",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=40&h=40&fit=crop&crop=face",
      rating: 4.9
    },
    {
      id: 2,
      title: "Redesign de Website",
      freelancer: "Marcus Rodriguez",
      budget: 5000,
      spent: 2500,
      progress: 50,
      deadline: "25-02-2024",
      status: "Em Andamento",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face",
      rating: 4.8
    },
    {
      id: 3,
      title: "Redação de Conteúdo",
      freelancer: "Emily Watson",
      budget: 1500,
      spent: 300,
      progress: 20,
      deadline: "01-03-2024",
      status: "Iniciando",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop&crop=face",
      rating: 5.0
    }
  ],
  postedJobs: [
    {
      id: 1,
      title: "Desenvolvedor React para Painel",
      posted: "3 dias atrás",
      budget: "$3000-$5000",
      proposals: 15,
      status: "Ativo",
      deadline: "15-02-2024"
    },
    {
      id: 2,
      title: "Design de Logo para Startup",
      posted: "1 semana atrás",
      budget: "$500-$1000",
      proposals: 28,
      status: "Entrevistando",
      deadline: "10-02-2024"
    },
    {
      id: 3,
      title: "Redator de Conteúdo SEO",
      posted: "2 semanas atrás",
      budget: "$25-$45/hr",
      proposals: 43,
      status: "Contratado",
      deadline: "Em curso"
    }
  ],
  hiredFreelancers: [
    {
      id: 1,
      name: "Sarah Chen",
      title: "Desenvolvedora Full-Stack",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=40&h=40&fit=crop&crop=face",
      rating: 4.9,
      projectsCompleted: 8,
      totalPaid: 18500,
      status: "Ativo"
    },
    {
      id: 2,
      name: "Marcus Rodriguez",
      title: "Designer UI/UX",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face",
      rating: 4.8,
      projectsCompleted: 5,
      totalPaid: 12300,
      status: "Ativo"
    },
    {
      id: 3,
      name: "Emily Watson",
      title: "Redatora de Conteúdo",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop&crop=face",
      rating: 5.0,
      projectsCompleted: 12,
      totalPaid: 8900,
      status: "Disponível"
    }
  ],
  messages: [
    {
      id: 1,
      from: "Sarah Chen",
      subject: "Marco do Projeto Concluído",
      preview: "Olá! Concluí o módulo de autenticação e está pronto para revisão...",
      time: "1 hora atrás",
      unread: true,
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=40&h=40&fit=crop&crop=face"
    },
    {
      id: 2,
      from: "Marcus Rodriguez",
      subject: "Solicitação de Revisão de Design",
      preview: "Fiz as alterações solicitadas no design da página inicial...",
      time: "3 horas atrás",
      unread: true,
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face"
    },
    {
      id: 3,
      from: "David Kim",
      subject: "Nova Proposta Enviada",
      preview: "Obrigado por considerar minha proposta para seu projeto de marketing...",
      time: "1 dia atrás",
      unread: false,
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face"
    }
  ],
  payments: {
    thisMonth: 4200,
    lastMonth: 3800,
    totalSpent: 45780,
    pendingPayments: 2100,
    recentPayments: [
      { project: "Desenvolvimento de App Mobile", freelancer: "Sarah Chen", amount: 2000, date: "28 Jan, 2024", status: "Concluído" },
      { project: "Design de Logo", freelancer: "Marcus Rodriguez", amount: 800, date: "25 Jan, 2024", status: "Concluído" },
      { project: "Redação de Conteúdo", freelancer: "Emily Watson", amount: 450, date: "22 Jan, 2024", status: "Pendente" }
    ]
  }
};

export function ClientDashboard() {
  const [activeSection, setActiveSection] = useState("overview");

  const renderContent = () => {
    switch (activeSection) {
      case "overview":
        return <OverviewContent />;
      case "projects":
        return <ProjectsContent />;
      case "jobs":
        return <JobsContent />;
      case "freelancers":
        return <FreelancersContent />;
      case "messages":
        return <MessagesContent />;
      case "payments":
        return <PaymentsContent />;
      default:
        return <OverviewContent />;
    }
  };

  return (
    <SidebarProvider>
      <div className="min-h-screen bg-background">
        <DashboardHeader />
        
        <div className="flex">
          <Sidebar className="border-r">
            <SidebarContent>
              <SidebarGroup>
                <SidebarGroupLabel>Navegação</SidebarGroupLabel>
                <SidebarGroupContent>
                  <SidebarMenu>
                    {sidebarItems.map((item) => (
                      <SidebarMenuItem key={item.id}>
                        <SidebarMenuButton 
                          onClick={() => setActiveSection(item.id)}
                          isActive={activeSection === item.id}
                          className="flex items-center justify-between"
                        >
                          <div className="flex items-center gap-2">
                            <item.icon className="h-4 w-4" />
                            <span>{item.title}</span>
                          </div>
                          {item.badge && (
                            <Badge variant="secondary" className="ml-auto">
                              {item.badge}
                            </Badge>
                          )}
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    ))}
                  </SidebarMenu>
                </SidebarGroupContent>
              </SidebarGroup>
            </SidebarContent>
          </Sidebar>

          <main className="flex-1 p-6">
            {renderContent()}
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
}

function OverviewContent() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Painel</h1>
          <p className="text-muted-foreground">Gerencie seus projetos e freelancers</p>
        </div>
        <Button className="flex items-center gap-2">
          <Plus className="h-4 w-4" />
          Publicar Nova Vaga
        </Button>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Gasto</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">${mockData.stats.totalSpent.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground">
              +12% em relação ao mês passado
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Projetos Ativos</CardTitle>
            <Briefcase className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{mockData.stats.activeProjects}</div>
            <p className="text-xs text-muted-foreground">
              {mockData.stats.completedProjects} concluídos no total
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Freelancers Contratados</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{mockData.stats.hiredFreelancers}</div>
            <p className="text-xs text-muted-foreground">
              Avaliação média: {mockData.stats.avgProjectRating}/5.0
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Vagas Publicadas</CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{mockData.stats.ongoingJobs}</div>
            <p className="text-xs text-muted-foreground">
              Atualmente ativas
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Active Projects and Messages */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Projetos Ativos</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {mockData.activeProjects.slice(0, 3).map((project) => (
              <div key={project.id} className="flex items-center space-x-4">
                <Avatar className="h-10 w-10">
                  <AvatarImage src={project.avatar} />
                  <AvatarFallback>{project.freelancer.charAt(0)}</AvatarFallback>
                </Avatar>
                <div className="flex-1 space-y-1">
                  <p className="text-sm font-medium leading-none">{project.title}</p>
                  <p className="text-sm text-muted-foreground">{project.freelancer}</p>
                  <Progress value={project.progress} className="h-2" />
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium">${project.spent}/${project.budget}</p>
                  <p className="text-xs text-muted-foreground">{project.progress}% concluído</p>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Mensagens Recentes</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {mockData.messages.slice(0, 3).map((message) => (
              <div key={message.id} className="flex items-start space-x-4">
                <Avatar className="h-8 w-8">
                  <AvatarImage src={message.avatar} />
                  <AvatarFallback>{message.from.charAt(0)}</AvatarFallback>
                </Avatar>
                <div className="flex-1 space-y-1">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-medium">{message.from}</p>
                    <p className="text-xs text-muted-foreground">{message.time}</p>
                  </div>
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {message.preview}
                  </p>
                </div>
                {message.unread && (
                  <div className="h-2 w-2 rounded-full bg-primary"></div>
                )}
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

function ProjectsContent() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Projetos Ativos</h1>
          <p className="text-muted-foreground">Monitore seus projetos em andamento</p>
        </div>
        <Button>Ver Todos os Projetos</Button>
      </div>

      <div className="space-y-4">
        {mockData.activeProjects.map((project) => (
          <Card key={project.id}>
            <CardContent className="p-6">
              <div className="flex items-start justify-between">
                <div className="space-y-4 flex-1">
                  <div className="flex items-center space-x-4">
                    <Avatar>
                      <AvatarImage src={project.avatar} />
                      <AvatarFallback>{project.freelancer.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="font-semibold">{project.title}</h3>
                      <p className="text-sm text-muted-foreground">por {project.freelancer}</p>
                      <div className="flex items-center space-x-1 mt-1">
                        <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                        <span className="text-xs">{project.rating}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Progresso</span>
                      <span>{project.progress}%</span>
                    </div>
                    <Progress value={project.progress} />
                  </div>

                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-1">
                        <DollarSign className="h-4 w-4" />
                        <span>${project.spent}/${project.budget}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-4 w-4" />
                        <span>{project.deadline}</span>
                      </div>
                    </div>
                    <Badge variant={project.status === 'Em Andamento' ? 'default' : 'secondary'}>
                      {project.status}
                    </Badge>
                  </div>

                  <div className="flex space-x-2">
                    <Button size="sm">Enviar Mensagem</Button>
                    <Button size="sm" variant="outline">Ver Detalhes</Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

function JobsContent() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Vagas Publicadas</h1>
          <p className="text-muted-foreground">Gerencie suas vagas abertas</p>
        </div>
        <Button className="flex items-center gap-2">
          <Plus className="h-4 w-4" />
          Publicar Nova Vaga
        </Button>
      </div>

      <div className="space-y-4">
        {mockData.postedJobs.map((job) => (
          <Card key={job.id}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div className="space-y-2">
                  <h3 className="font-semibold">{job.title}</h3>
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                    <span>Publicada {job.posted}</span>
                    <span>Orçamento: {job.budget}</span>
                    <span>{job.proposals} propostas</span>
                    <span>Prazo: {job.deadline}</span>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Badge 
                    variant={
                      job.status === 'Ativo' ? 'default' :
                      job.status === 'Entrevistando' ? 'secondary' :
                      'outline'
                    }
                  >
                    {job.status}
                  </Badge>
                  <Button size="sm" variant="outline">Ver Propostas</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

function FreelancersContent() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Freelancers Contratados</h1>
          <p className="text-muted-foreground">Sua rede de freelancers de confiança</p>
        </div>
        <Button>Encontrar Novos Freelancers</Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mockData.hiredFreelancers.map((freelancer) => (
          <Card key={freelancer.id}>
            <CardContent className="p-6">
              <div className="flex items-center space-x-4 mb-4">
                <Avatar>
                  <AvatarImage src={freelancer.avatar} />
                  <AvatarFallback>{freelancer.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="font-semibold">{freelancer.name}</h3>
                  <p className="text-sm text-muted-foreground">{freelancer.title}</p>
                  <div className="flex items-center space-x-1 mt-1">
                    <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                    <span className="text-xs">{freelancer.rating}</span>
                  </div>
                </div>
              </div>

              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Projetos Concluídos</span>
                  <span>{freelancer.projectsCompleted}</span>
                </div>
                <div className="flex justify-between">
                  <span>Total Pago</span>
                  <span>${freelancer.totalPaid.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span>Status</span>
                  <Badge variant={freelancer.status === 'Ativo' ? 'default' : 'secondary'}>
                    {freelancer.status}
                  </Badge>
                </div>
              </div>

              <div className="flex space-x-2 mt-4">
                <Button size="sm" className="flex-1">Enviar Mensagem</Button>
                <Button size="sm" variant="outline" className="flex-1">Contratar Novamente</Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

function MessagesContent() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Mensagens</h1>
        <p className="text-muted-foreground">Comunique-se com seus freelancers</p>
      </div>

      <div className="space-y-4">
        {mockData.messages.map((message) => (
          <Card key={message.id} className={message.unread ? 'bg-muted/50' : ''}>
            <CardContent className="p-6">
              <div className="flex items-start space-x-4">
                <Avatar>
                  <AvatarImage src={message.avatar} />
                  <AvatarFallback>{message.from.charAt(0)}</AvatarFallback>
                </Avatar>
                <div className="flex-1 space-y-2">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold">{message.from}</h3>
                    <span className="text-sm text-muted-foreground">{message.time}</span>
                  </div>
                  <h4 className="text-sm font-medium">{message.subject}</h4>
                  <p className="text-sm text-muted-foreground">{message.preview}</p>
                  <Button size="sm" variant="outline">Responder</Button>
                </div>
                {message.unread && (
                  <div className="h-3 w-3 rounded-full bg-primary"></div>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

function PaymentsContent() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Pagamentos</h1>
        <p className="text-muted-foreground">Acompanhe seus gastos e pagamentos</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Este Mês</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">${mockData.payments.thisMonth.toLocaleString()}</div>
            <p className="text-sm text-blue-600">+11% em relação ao mês passado</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Total Gasto</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">${mockData.payments.totalSpent.toLocaleString()}</div>
            <p className="text-sm text-blue-600">Em todos os projetos</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Pendente</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">${mockData.payments.pendingPayments.toLocaleString()}</div>
            <p className="text-sm text-muted-foreground">Aguardando aprovação</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Pagamentos Recentes</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {mockData.payments.recentPayments.map((payment, index) => (
              <div key={index} className="flex items-center justify-between py-2 border-b last:border-0">
                <div>
                  <p className="font-medium">{payment.project}</p>
                  <p className="text-sm text-muted-foreground">para {payment.freelancer} • {payment.date}</p>
                </div>
                <div className="text-right">
                  <p className="font-medium">${payment.amount}</p>
                  <Badge variant={payment.status === 'Concluído' ? 'outline' : 'secondary'}>
                    {payment.status}
                  </Badge>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}