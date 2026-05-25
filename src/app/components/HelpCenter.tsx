import { Search, BookOpen, CreditCard, MessageCircle, FileText, ChevronRight } from "lucide-react";

const faqCategories = [
  { icon: BookOpen, title: "Primeiros Passos", desc: "Como configurar seu perfil e começar." },
  { icon: CreditCard, title: "Pagamentos", desc: "Como funcionam as taxas e os saques." },
  { icon: FileText, title: "Projetos", desc: "Gestão de propostas e contratos." },
  { icon: MessageCircle, title: "Suporte", desc: "Entre em contato com nossa equipe." },
];

export function HelpCenter() {
  return (
    <div className="bg-background min-h-screen">
      {/* Header da Ajuda */}
      <section className="py-20 border-b border-border bg-card">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Como podemos te ajudar?
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Explore nossa base de conhecimento ou procure por uma dúvida específica.
          </p>
          
          <div className="mt-8 relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <input 
              type="text" 
              placeholder="Digite sua dúvida..."
              className="w-full pl-12 pr-4 py-4 rounded-lg border border-border bg-background focus:ring-2 focus:ring-primary/20 outline-none transition-all shadow-sm"
            />
          </div>
        </div>
      </section>

      {/* Categorias */}
      <section className="max-w-screen-xl mx-auto px-4 py-16">
        <h2 className="text-2xl font-bold mb-8">Categorias Populares</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {faqCategories.map((cat, i) => (
            <div key={i} className="group p-6 rounded-lg border border-border bg-card hover:border-primary transition-all cursor-pointer hover:shadow-lg hover:shadow-primary/5">
              <div className="h-12 w-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <cat.icon className="h-6 w-6" />
              </div>
              <h3 className="font-semibold text-lg">{cat.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{cat.desc}</p>
              <div className="mt-4 flex items-center text-sm font-medium text-primary">
                Ver artigos <ChevronRight className="h-4 w-4 ml-1" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ Rápido */}
      <section className="max-w-screen-xl mx-auto px-4 pb-20">
        <div className="bg-primary/5 rounded-2xl p-8 md:p-12 border border-primary/10">
          <h2 className="text-2xl font-bold mb-6">Dúvidas Frequentes</h2>
          <div className="space-y-4">
            {["Como recebo meu pagamento?", "Como garantir segurança na contratação?", "Qual a comissão do site?"].map((q, i) => (
              <div key={i} className="bg-background p-4 rounded-lg border border-border flex justify-between items-center hover:bg-accent transition-colors cursor-pointer">
                <span className="font-medium text-foreground">{q}</span>
                <ChevronRight className="h-5 w-5 text-muted-foreground" />
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Seção de Contato com Atendente */}
      <section className="max-w-screen-xl mx-auto px-4 pb-20">
        <div className="flex flex-col md:flex-row items-center justify-between p-8 rounded-2xl bg-card border border-border shadow-sm">
          <div>
            <h3 className="text-xl font-bold">Ainda precisa falar com um atendente?</h3>
            <p className="mt-1 text-muted-foreground">
              Nossa equipe de suporte está disponível de segunda a sexta, das 09h às 18h.
            </p>
          </div>
          <div className="mt-6 md:mt-0 flex gap-4">
            <button className="flex items-center px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity">
              <MessageCircle className="h-4 w-4 mr-2" />
              Chat ao vivo
            </button>
            <button className="flex items-center px-6 py-3 rounded-lg border border-border bg-background font-medium hover:bg-accent transition-colors">
              Enviar e-mail
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}