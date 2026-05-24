import { Star, MapPin, Clock } from "lucide-react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const freelancers = [
  {
    id: 1,
    name: "Sarah Chen",
    title: "Desenvolvedora Full-Stack",
    location: "San Francisco, CA",
    rating: 4.9,
    reviews: 127,
    hourlyRate: 85,
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
    skills: ["React", "Node.js", "Python"],
    description: "Desenvolvedora experiente com mais de 6 anos criando aplicações web escaláveis.",
    completedJobs: 89,
    responseTime: "1 hora"
  },
  {
    id: 2,
    name: "Marcus Rodriguez",
    title: "Designer UI/UX",
    location: "New York, NY",
    rating: 4.8,
    reviews: 203,
    hourlyRate: 75,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    skills: ["Figma", "Adobe XD", "Prototipagem"],
    description: "Designer criativo especializado em design centrado no usuário e identidade de marca.",
    completedJobs: 156,
    responseTime: "2 horas"
  },
  {
    id: 3,
    name: "Emily Watson",
    title: "Redatora de Conteúdo",
    location: "Londres, Reino Unido",
    rating: 5.0,
    reviews: 94,
    hourlyRate: 45,
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    skills: ["Redação SEO", "Copywriting", "Pesquisa"],
    description: "Redatora profissional criando conteúdo envolvente que gera resultados.",
    completedJobs: 78,
    responseTime: "30 min"
  },
  {
    id: 4,
    name: "David Kim",
    title: "Especialista em Marketing Digital",
    location: "Toronto, Canadá",
    rating: 4.7,
    reviews: 156,
    hourlyRate: 65,
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    skills: ["Google Ads", "Facebook Ads", "Analytics"],
    description: "Profissional de marketing focado em crescimento com histórico comprovado de aumento de ROI.",
    completedJobs: 112,
    responseTime: "1 hora"
  }
];

export function FeaturedFreelancers() {
  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="w-full mx-auto max-w-screen-xl px-4 md:px-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Freelancers em Destaque
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Trabalhe com profissionais de alto nível de todo o mundo
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {freelancers.map((freelancer) => (
            <div
              key={freelancer.id}
              className="group relative overflow-hidden rounded-lg border border-border bg-card p-6 transition-all duration-200 hover:-translate-y-1 hover:shadow-lg"
            >
              {/* Avatar and Basic Info */}
              <div className="text-center">
                <ImageWithFallback
                  src={freelancer.avatar}
                  alt={freelancer.name}
                  className="mx-auto h-16 w-16 rounded-full object-cover"
                />
                <h3 className="mt-4 font-semibold text-card-foreground">{freelancer.name}</h3>
                <p className="text-sm text-muted-foreground">{freelancer.title}</p>
                
                {/* Location */}
                <div className="mt-2 flex items-center justify-center text-xs text-muted-foreground">
                  <MapPin className="mr-1 h-3 w-3" />
                  {freelancer.location}
                </div>

                {/* Rating */}
                <div className="mt-2 flex items-center justify-center space-x-1">
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <span className="text-sm font-medium">{freelancer.rating}</span>
                  <span className="text-xs text-muted-foreground">({freelancer.reviews} avaliações)</span>
                </div>
              </div>

              {/* Skills */}
              <div className="mt-4 flex flex-wrap gap-1">
                {freelancer.skills.map((skill) => (
                  <Badge key={skill} variant="secondary" className="text-xs">
                    {skill}
                  </Badge>
                ))}
              </div>

              {/* Description */}
              <p className="mt-3 text-xs text-muted-foreground line-clamp-2">
                {freelancer.description}
              </p>

              {/* Stats */}
              <div className="mt-4 grid grid-cols-2 gap-4 text-center text-xs">
                <div>
                  <p className="font-medium text-card-foreground">{freelancer.completedJobs}</p>
                  <p className="text-muted-foreground">Projetos</p>
                </div>
                <div className="flex items-center justify-center">
                  <Clock className="mr-1 h-3 w-3 text-muted-foreground" />
                  <span className="text-muted-foreground">{freelancer.responseTime}</span>
                </div>
              </div>

              {/* Hourly Rate and CTA */}
              <div className="mt-4 space-y-3">
                <div className="text-center">
                  <span className="text-lg font-bold text-primary">${freelancer.hourlyRate}</span>
                  <span className="text-sm text-muted-foreground">/hora</span>
                </div>
                <Button className="w-full bg-primary hover:bg-primary/90" size="sm">
                  Ver Perfil
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Button variant="outline" size="lg">
            Ver Todos os Freelancers
          </Button>
        </div>
      </div>
    </section>
  );
}