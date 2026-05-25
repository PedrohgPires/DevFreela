import { FileText, Users, CheckCircle } from "lucide-react";

const steps = [
  {
    number: 1,
    icon: FileText,
    title: "Publique um Projeto",
    description: "Descreva seu projeto e receba propostas de freelancers qualificados em poucos minutos."
  },
  {
    number: 2,
    icon: Users,
    title: "Contrate Talentos",
    description: "Analise perfis, portfólios e propostas. Entreviste e contrate o melhor freelancer para o seu projeto."
  },
  {
    number: 3,
    icon: CheckCircle,
    title: "Realize o Trabalho",
    description: "Colabore, acompanhe o progresso e receba um trabalho de alta qualidade dentro do prazo e orçamento."
  }
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-16 md:py-24">
    <section className="py-16 md:py-24">
      <div className="w-full mx-auto max-w-screen-xl px-4 md:px-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Como Funciona
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Conclua seu projeto em três passos simples
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-12 md:grid-cols-3">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <div key={step.number} className="relative text-center">
                {/* Connection Line */}
                {index < steps.length - 1 && (
                  <div className="absolute left-1/2 top-16 hidden h-0.5 w-full bg-gradient-to-r from-primary to-primary/30 md:block" />
                )}
                
                {/* Step Icon */}
                <div className="relative mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <IconComponent className="h-8 w-8" />
                  <div className="absolute -bottom-2 -right-2 flex h-6 w-6 items-center justify-center rounded-full bg-primary-foreground text-xs font-bold text-primary">
                    {step.number}
                  </div>
                </div>

                {/* Step Content */}
                <div className="mt-6">
                  <h3 className="text-xl font-semibold text-foreground">{step.title}</h3>
                  <p className="mt-3 text-muted-foreground">{step.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
    </section>
  );
}