import type { Metadata } from "next";
import { site } from "@/data/services";

export const metadata: Metadata = {
  title: "Política de privacidade",
  description: "Como a Status Contabilidade coleta, usa e protege os seus dados.",
};

export default function Privacidade() {
  return (
    <section className="pt-[72px] bg-paper">
      <div className="mx-auto max-w-[760px] px-6 py-16 lg:py-24">
        <h1 className="text-[clamp(2rem,4vw,3rem)] text-ink">Política de privacidade</h1>
        <p className="mt-4 text-slate">Última atualização: setembro de 2026</p>

        <div className="mt-10 space-y-8 text-ink leading-relaxed">
          <div>
            <h2 className="text-xl text-ink">O que coletamos</h2>
            <p className="mt-3 text-slate">
              Quando você entra em contato pelo formulário ou pelo WhatsApp, coletamos
              as informações que você nos envia: nome, e-mail, telefone e o conteúdo da
              mensagem. Também registramos dados de navegação anônimos por meio do
              Google Analytics, para entender como o site é usado e melhorar o conteúdo.
            </p>
          </div>
          <div>
            <h2 className="text-xl text-ink">Como usamos</h2>
            <p className="mt-3 text-slate">
              Usamos seus dados para responder ao seu contato e prestar o serviço que
              você pediu. Não vendemos, não compartilhamos e não usamos seus dados para
              enviar publicidade sem o seu consentimento.
            </p>
          </div>
          <div>
            <h2 className="text-xl text-ink">Cookies</h2>
            <p className="mt-3 text-slate">
              Utilizamos cookies de análise (Google Analytics) para medir visitas e
              origem do tráfego. Você pode desativar os cookies no seu navegador a
              qualquer momento; o site continua funcionando normalmente.
            </p>
          </div>
          <div>
            <h2 className="text-xl text-ink">Seus direitos</h2>
            <p className="mt-3 text-slate">
              Pela LGPD (Lei 13.709/2018), você pode pedir acesso, correção ou exclusão
              dos seus dados a qualquer momento. Basta escrever para {site.email} ou
              ligar para {site.phone1}.
            </p>
          </div>
          <div>
            <h2 className="text-xl text-ink">Responsável pelos dados</h2>
            <p className="mt-3 text-slate">
              <span className="text-status-red font-semibold">Status</span> Contabilidade, {site.address}, CEP {site.cep}. E-mail: {site.email}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
