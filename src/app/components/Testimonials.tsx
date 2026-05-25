import { Star, Quote } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const testimonials = [
  {
    id: 1,
    name: "Jessica Miller",
    role: "Fundadora de Startup",
    company: "TechFlow",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    content: "O DevFreela me ajudou a encontrar um desenvolvedor incrível que construiu nosso MVP em apenas 6 semanas. A qualidade foi excelente e a comunicação foi perfeita durante todo o projeto."
  },
  {
    id: 2,
    name: "Robert Chen",
    role: "Diretor de Marketing",
    company: "GrowthCorp",
    avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    content: "Como cliente, já contratei mais de 20 freelancers através desta plataforma. A qualidade dos talentos é consistentemente alta e as ferramentas de gerenciamento de projetos tornam a colaboração muito fácil."
  },
  {
    id: 3,
    name: "Maria Rodriguez",
    role: "Designer Freelancer",
    company: "Independente",
    avatar: "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    content: "Trabalho como freelancer há 5 anos e esta plataforma transformou o meu negócio. Conectei-me com clientes incríveis e construí relacionamentos de longo prazo que me mantêm com a agenda cheia."
  },
  {
    id: 4,
    name: "Alex Thompson",
    role: "Dono de E-commerce",
    company: "ShopSmart",
    avatar: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    content: "Os freelancers com quem trabalhei foram profissionais, qualificados e entregaram exatamente o que precisávamos. O redesign do nosso site aumentou as conversões em 40%."
  }
];

export function Testimonials() {
  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="w-full mx-auto max-w-screen-xl px-4 md:px-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            O Que Nossa Comunidade Diz
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Com a confiança de milhares de clientes e freelancers em todo o mundo
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="relative rounded-lg border border-border bg-card p-8 shadow-sm"
            >
              {/* Ícone de Citação */}
              <Quote className="absolute top-4 right-4 h-8 w-8 text-primary/20" />
              
              {/* Avaliação */}
              <div className="flex space-x-1">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Conteúdo */}
              <p className="mt-4 text-card-foreground leading-relaxed">
                "{testimonial.content}"
              </p>

              {/* Autor */}
              <div className="mt-6 flex items-center space-x-4">
                <ImageWithFallback
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="h-12 w-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold text-card-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role} na {testimonial.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}