import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Reveal } from "@/components/motion";
import { whatsappLink } from "@/data/services";

export const metadata: Metadata = {
  title: "Simples Nacional ou Lucro Presumido: qual é melhor para a sua empresa?",
  description:
    "Entenda a diferença entre Simples Nacional e Lucro Presumido, quando cada um vale a pena e os sinais de que sua empresa precisa revisar o enquadramento.",
};

export default function Artigo() {
  return (
    <article className="pt-[72px]">
      <header className="bg-mist">
        <div className="mx-auto max-w-[760px] px-6 py-16 lg:py-24">
          <Reveal>
            <Link
              href="/blog"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-ocean hover:text-ocean-600 transition-colors"
            >
              <ArrowLeft size={15} aria-hidden />
              Blog
            </Link>
            <p className="mt-8 text-xs font-bold uppercase tracking-widest text-status-red">
              Impostos
            </p>
            <h1 className="mt-3 text-[clamp(2rem,4vw,3rem)] text-ink leading-tight">
              Simples Nacional ou Lucro Presumido: qual é melhor para a sua empresa?
            </h1>
            <p className="mt-5 text-lg text-slate leading-relaxed">
              Publicado pela equipe da Status Contabilidade · Setembro de 2026
            </p>
          </Reveal>
        </div>
      </header>

      <div className="mx-auto max-w-[760px] px-6 py-14 lg:py-20 space-y-8 text-ink leading-relaxed text-[1.05rem]">
        <Reveal>
          <p>
            Essa é provavelmente a pergunta que mais ouvimos de quem está abrindo uma
            empresa em Campinas. E faz sentido: o regime tributário define quanto do
            seu faturamento vai para o governo todo mês. Escolher errado pode custar
            caro por anos.
          </p>
          <p>
            Vamos direto ao que interessa.
          </p>
        </Reveal>

        <Reveal>
          <h2 className="text-2xl text-ink pt-4">O que é o Simples Nacional</h2>
          <p>
            O Simples reúne oito impostos em uma única guia mensal, com alíquota que
            cresce conforme o faturamento. Ele existe para simplificar a vida de
            micro e pequenas empresas: menos burocracia, menos declarações, menos
            chance de erro.
          </p>
          <p>
            Para a maioria dos negócios que estão começando, é o ponto de partida
            natural. Mas atenção a dois detalhes: nem toda atividade pode entrar no
            Simples, e algumas atividades pagam alíquotas altas dependendo do anexo
            em que se encaixam.
          </p>
        </Reveal>

        <Reveal>
          <h2 className="text-2xl text-ink pt-4">O que é o Lucro Presumido</h2>
          <p>
            No Lucro Presumido, o governo presume um percentual de lucro sobre o seu
            faturamento e tributa essa base. Os impostos são calculados em guias
            separadas e há mais obrigações acessórias a entregar.
          </p>
          <p>
            Para empresas de serviço com margem alta e folha pequena, o Presumido
            costuma significar menos imposto no fim do mês. É o caso de muitas clínicas,
            consultorias e agências.
          </p>
        </Reveal>

        <Reveal>
          <h2 className="text-2xl text-ink pt-4">Como decidir</h2>
          <p>
            Não existe resposta universal. A conta certa cruza quatro variáveis:
            atividade da empresa, faturamento previsto, folha de pagamento e margem
            de lucro. Mudou uma delas, a resposta pode mudar junto.
          </p>
          <p>
            Por isso desconfie de quem responde sem olhar os seus números. A escolha
            certa nasce de uma simulação com os dados da sua empresa, não de uma
            regra de bolso.
          </p>
        </Reveal>

        <Reveal>
          <h2 className="text-2xl text-ink pt-4">Sinais de que está na hora de revisar</h2>
          <p>
            Sua empresa cresceu e o faturamento subiu? Você contratou mais gente?
            Mudou de atividade ou abriu um novo serviço? Qualquer um desses momentos
            pede uma revisão do enquadramento. A revisão é feita uma vez por ano, no
            início do ano-calendário, e quem perde a janela espera até a próxima.
          </p>
        </Reveal>

        <Reveal>
          <div className="mt-10 rounded-2xl bg-red-50 border border-red-100 p-8">
            <h3 className="text-xl font-semibold text-ink">
              Quer a simulação para a sua empresa?
            </h3>
            <p className="mt-3 text-slate">
              A gente faz a conta com os seus números e mostra, em reais, quanto cada
              regime custaria para você. Sem compromisso.
            </p>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary mt-6 text-sm"
            >
              Pedir minha simulação
              <ArrowRight size={16} aria-hidden />
            </a>
          </div>
        </Reveal>
      </div>
    </article>
  );
}
