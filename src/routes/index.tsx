import { createFileRoute } from "@tanstack/react-router";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  CalendarCheck,
  Car,
  Instagram,
  MapPin,
  MessageCircle,
  Music4,
  Phone,
  Quote,
  Sparkles,
  Star,
  Users,
  Utensils,
} from "lucide-react";
import heroSalao from "@/assets/hero-salao.jpg";
import galeria1 from "@/assets/galeria-1.jpg";
import galeria2 from "@/assets/galeria-2.jpg";
import galeria3 from "@/assets/galeria-3.jpg";
import galeria4 from "@/assets/galeria-4.jpg";

const WHATSAPP =
  "https://wa.me/5561993598935?text=Ol%C3%A1!%20Quero%20consultar%20a%20disponibilidade%20de%20data%20no%20Espa%C3%A7o%20Veneza.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Espaço Veneza | Salão de Festas em Águas Lindas de Goiás" },
      {
        name: "description",
        content:
          "Salão de festas e eventos em Águas Lindas de Goiás. Estrutura completa para casamentos, aniversários e formaturas. Consulte sua data pelo WhatsApp.",
      },
      {
        property: "og:title",
        content: "Espaço Veneza | Salão de Festas em Águas Lindas de Goiás",
      },
      {
        property: "og:description",
        content:
          "Salão de festas e eventos em Águas Lindas de Goiás. Estrutura completa para casamentos, aniversários e formaturas. Consulte sua data pelo WhatsApp.",
      },
    ],
  }),
  component: Index,
});

const beneficios = [
  {
    icon: Users,
    titulo: "Espaço amplo e climatizado",
    texto:
      "Salão confortável para receber famílias inteiras com liberdade para dançar, circular e celebrar sem aperto.",
  },
  {
    icon: Utensils,
    titulo: "Cozinha e área de apoio",
    texto:
      "Estrutura pronta para seu buffet trabalhar: cozinha equipada, área de serviço e banheiros organizados.",
  },
  {
    icon: Music4,
    titulo: "Som, luz e pista liberados",
    texto:
      "Ambiente preparado para DJ, banda e iluminação decorativa. A festa vai até o fim sem incomodar vizinhos.",
  },
  {
    icon: Car,
    titulo: "Estacionamento e segurança",
    texto:
      "Seus convidados chegam tranquilos, com espaço para carros e acesso fácil dentro de Águas Lindas de Goiás.",
  },
];

const depoimentos = [
  {
    nome: "Larissa M.",
    evento: "Casamento",
    texto:
      "Casei no Espaço Veneza e foi exatamente como eu imaginei. O salão é bonito por si só, gastei muito menos com decoração e todos os convidados elogiaram o conforto.",
  },
  {
    nome: "Rodrigo e Ana",
    evento: "Aniversário de 15 anos",
    texto:
      "Atendimento humano de verdade. Tiraram todas as minhas dúvidas pelo WhatsApp, deixaram tudo limpo e organizado no dia e a festa fluiu sem nenhum problema.",
  },
  {
    nome: "Cleiton S.",
    evento: "Formatura",
    texto:
      "Custo-benefício imbatível na região. Espaço grande, cozinha completa para o buffet e estacionamento tranquilo para os convidados. Já reservei a próxima data.",
  },
];

const faq = [
  {
    q: "Qual a capacidade do salão e o que está incluso na locação?",
    a: "O Espaço Veneza atende desde festas íntimas até grandes celebrações. A locação inclui o uso do salão, cozinha de apoio, banheiros e área externa. Mesas, cadeiras e itens adicionais são combinados na hora do orçamento, de acordo com o seu número de convidados.",
  },
  {
    q: "Posso levar meu próprio buffet, bebidas e decoração?",
    a: "Sim. Você tem total liberdade para contratar o buffet, o DJ e a decoradora de sua preferência, ou usar nossos parceiros indicados. Nossa estrutura foi pensada para facilitar o trabalho de qualquer equipe.",
  },
  {
    q: "Como funciona a reserva da data e o pagamento?",
    a: "A data só é bloqueada após a reserva confirmada. É simples: você fala com a gente no WhatsApp, conferimos a disponibilidade, enviamos os valores e condições e formalizamos o contrato com um sinal. O restante é combinado antes do evento.",
  },
];

const galeria = [
  { src: galeria1, alt: "Salão decorado com mesas postas para recepção de casamento" },
  { src: galeria2, alt: "Festa infantil decorada com balões e mesa de bolo no salão" },
  { src: galeria3, alt: "Área externa do Espaço Veneza com piscina ao anoitecer" },
  { src: galeria4, alt: "Convidados brindando durante festa de formatura no salão" },
];

function CtaWhats({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <a
      href={WHATSAPP}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-2 rounded-sm bg-primary px-7 py-4 font-sans text-sm font-bold tracking-widest text-primary-foreground uppercase transition hover:brightness-110 ${className}`}
    >
      <MessageCircle className="h-4 w-4 shrink-0" />
      {children}
    </a>
  );
}

function SectionTitle({ kicker, title }: { kicker: string; title: string }) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <p className="font-sans text-xs tracking-[0.35em] text-primary uppercase">
        {kicker}
      </p>
      <h2 className="mt-4 font-display text-3xl leading-tight text-balance-tight sm:text-4xl md:text-5xl">
        {title}
      </h2>
      <div className="mx-auto mt-6 h-px w-24 bg-primary/50" />
    </div>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      {/* HERO */}
      <header className="relative isolate overflow-hidden">
        <img
          src={heroSalao}
          alt="Salão de festas Espaço Veneza decorado com luzes douradas e mesas postas"
          width={1920}
          height={1088}
          className="absolute inset-0 -z-10 h-full w-full object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background/85 via-background/70 to-background" />

        <div className="mx-auto flex min-h-[92vh] max-w-4xl flex-col items-center justify-center px-5 py-20 text-center">
          <p className="font-sans text-[0.65rem] tracking-[0.4em] text-primary uppercase sm:text-xs">
            Espaço Veneza · Águas Lindas de Goiás
          </p>
          <h1 className="mt-6 font-display text-4xl leading-[1.1] text-balance-tight sm:text-5xl md:text-6xl">
            Realize o evento dos seus sonhos em um espaço que une beleza,
            conforto e estrutura completa
          </h1>
          <p className="mt-6 max-w-xl font-sans text-base leading-relaxed text-muted-foreground sm:text-lg">
            Cada detalhe do Espaço Veneza foi pensado para transformar momentos
            em memórias inesquecíveis — casamentos, aniversários, formaturas e
            confraternizações.
          </p>
          <CtaWhats className="mt-9">Consultar data disponível</CtaWhats>
          <p className="mt-4 font-sans text-xs text-muted-foreground">
            Resposta rápida no WhatsApp · (61) 99359-8935
          </p>
        </div>
      </header>

      {/* BENEFÍCIOS */}
      <section id="estrutura" className="mx-auto max-w-6xl px-5 py-20 md:py-28">
        <SectionTitle
          kicker="Estrutura"
          title="Tudo pronto para a sua festa acontecer sem preocupação"
        />
        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {beneficios.map((b) => (
            <article
              key={b.titulo}
              className="border border-border bg-card p-7 transition hover:border-primary/60"
            >
              <b.icon className="h-7 w-7 shrink-0 text-primary" />
              <h3 className="mt-5 font-display text-2xl">{b.titulo}</h3>
              <p className="mt-3 font-sans text-sm leading-relaxed text-muted-foreground">
                {b.texto}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* GALERIA */}
      <section id="galeria" className="bg-secondary/40 py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-5">
          <SectionTitle
            kicker="Galeria"
            title="Veja o espaço que vai receber seus convidados"
          />
          <div className="mt-14 grid gap-4 sm:grid-cols-2">
            {galeria.map((g) => (
              <figure key={g.alt} className="overflow-hidden border border-border">
                <img
                  src={g.src}
                  alt={g.alt}
                  width={1024}
                  height={1024}
                  loading="lazy"
                  className="h-72 w-full object-cover transition duration-700 hover:scale-105 sm:h-80"
                />
              </figure>
            ))}
          </div>
          <p className="mt-8 text-center font-sans text-sm text-muted-foreground">
            Quer ver o salão por dentro? Agende uma visita sem compromisso.
          </p>
          <div className="mt-6 text-center">
            <CtaWhats>Agendar visita ao espaço</CtaWhats>
          </div>
        </div>
      </section>

      {/* DEPOIMENTOS */}
      <section className="mx-auto max-w-6xl px-5 py-20 md:py-28">
        <SectionTitle
          kicker="Quem já celebrou aqui"
          title="Famílias de Águas Lindas confiam no Espaço Veneza"
        />
        <div className="mt-8 flex items-center justify-center gap-2">
          {[0, 1, 2, 3, 4].map((i) => (
            <Star key={i} className="h-4 w-4 fill-primary text-primary" />
          ))}
          <span className="ml-2 font-sans text-sm text-muted-foreground">
            Avaliações reais de clientes
          </span>
        </div>
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {depoimentos.map((d) => (
            <blockquote
              key={d.nome}
              className="flex h-full flex-col border border-border bg-card p-7"
            >
              <Quote className="h-6 w-6 shrink-0 text-primary" />
              <p className="mt-5 flex-1 font-display text-lg leading-relaxed italic">
                “{d.texto}”
              </p>
              <footer className="mt-6 border-t border-border pt-4 font-sans text-sm">
                <span className="font-bold">{d.nome}</span>
                <span className="text-muted-foreground"> · {d.evento}</span>
              </footer>
            </blockquote>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-secondary/40 py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-5">
          <SectionTitle kicker="Dúvidas frequentes" title="Antes de reservar sua data" />
          <Accordion type="single" collapsible className="mt-12">
            {faq.map((f) => (
              <AccordionItem key={f.q} value={f.q} className="border-border">
                <AccordionTrigger className="text-left font-display text-xl hover:no-underline">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="font-sans text-sm leading-relaxed text-muted-foreground">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="mx-auto max-w-3xl px-5 py-20 text-center md:py-28">
        <Sparkles className="mx-auto h-8 w-8 shrink-0 text-primary" />
        <h2 className="mt-6 font-display text-3xl leading-tight text-balance-tight sm:text-4xl md:text-5xl">
          As melhores datas são as primeiras a sair. A sua ainda pode ser sua.
        </h2>
        <p className="mt-5 font-sans text-base text-muted-foreground">
          Fale agora com nossa equipe, confira a disponibilidade e receba os
          valores da locação sem compromisso.
        </p>
        <CtaWhats className="mt-9">Quero reservar minha data</CtaWhats>
        <p className="mt-4 font-sans text-xs text-muted-foreground">
          <CalendarCheck className="mr-1 inline h-3.5 w-3.5" />
          Atendimento todos os dias, das 8h às 20h
        </p>
      </section>

      {/* RODAPÉ */}
      <footer className="border-t border-border bg-card">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-3">
          <div>
            <p className="font-display text-2xl">Espaço Veneza</p>
            <p className="mt-3 font-sans text-sm leading-relaxed text-muted-foreground">
              Salão de festas e eventos em Águas Lindas de Goiás. Casamentos,
              aniversários, formaturas e confraternizações.
            </p>
          </div>
          <div className="font-sans text-sm">
            <h3 className="font-display text-lg">Endereço</h3>
            <p className="mt-3 flex gap-2 text-muted-foreground">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
              Quadra 42, Lote 993, Queda do Descoberto — Águas Lindas de Goiás,
              GO
            </p>
            <a
              href="https://www.google.com/maps/search/?api=1&query=Quadra+42+Lote+993+Queda+do+Descoberto+Águas+Lindas+de+Goiás+GO"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-block text-primary underline-offset-4 hover:underline"
            >
              Ver rota no Google Maps
            </a>
          </div>
          <div className="font-sans text-sm">
            <h3 className="font-display text-lg">Contato e horários</h3>
            <a
              href="tel:+5561993598935"
              className="mt-3 flex items-center gap-2 text-muted-foreground hover:text-primary"
            >
              <Phone className="h-4 w-4 shrink-0 text-primary" />
              (61) 99359-8935
            </a>
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 flex items-center gap-2 text-muted-foreground hover:text-primary"
            >
              <MessageCircle className="h-4 w-4 shrink-0 text-primary" />
              WhatsApp
            </a>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 flex items-center gap-2 text-muted-foreground hover:text-primary"
            >
              <Instagram className="h-4 w-4 shrink-0 text-primary" />
              Instagram
            </a>
            <p className="mt-4 text-muted-foreground">
              Visitas e atendimento: todos os dias, 8h às 20h
            </p>
          </div>
        </div>
        <div className="border-t border-border py-6 text-center font-sans text-xs text-muted-foreground">
          © {new Date().getFullYear()} Espaço Veneza · Salão de Festas e Eventos
        </div>
      </footer>

      {/* WhatsApp flutuante */}
      <a
        href={WHATSAPP}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar no WhatsApp"
        className="fixed right-5 bottom-5 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg transition hover:brightness-110"
      >
        <MessageCircle className="h-6 w-6 shrink-0" />
      </a>
    </div>
  );
}
