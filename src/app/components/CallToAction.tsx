import { Button } from "./ui/button";

export function CallToAction() {
  return (
    <section className="py-16 md:py-24">
      <div className="container max-w-screen-xl px-4 md:px-6">
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary to-primary/80 px-8 py-16 text-center md:px-16 md:py-24">
          {/* Background Pattern */}
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJtMzYgMzQgdjItaDIgdjJoLTIgdjJoMiB2Mmgtdi0yaDIgdi0yaC0ydi0yaDJ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-20"></div>
          
          <div className="relative z-10">
            <h2 className="text-3xl font-bold text-primary-foreground md:text-5xl">
              Pronto para Começar sua Jornada como Freelancer?
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-primary-foreground/90 md:text-xl">
              Junte-se a milhões de profissionais que confiam no DevFreela para construir suas carreiras e expandir seus negócios.
            </p>

            <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
              <Button 
                size="lg" 
                variant="secondary"
                className="bg-background text-foreground hover:bg-background/90"
              >
                Cadastrar como Freelancer
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10"
              >
                Contratar Agora
              </Button>
            </div>

            {/* Stats */}
            <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-3">
              <div>
                <p className="text-3xl font-bold text-primary-foreground">2M+</p>
                <p className="text-sm text-primary-foreground/80">Freelancers Ativos</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-primary-foreground">500K+</p>
                <p className="text-sm text-primary-foreground/80">Projetos Concluídos</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-primary-foreground">R$ 500M+</p>
                <p className="text-sm text-primary-foreground/80">Pagos aos Freelancers</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}