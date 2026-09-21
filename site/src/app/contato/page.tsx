import type { Metadata } from "next";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import { Reveal } from "@/components/motion";
import { site, whatsappLink } from "@/data/services";

export const metadata: Metadata = {
  title: "Fale conosco",
  description:
    "Fale com a Status Contabilidade em Barão Geraldo, Campinas. WhatsApp, telefone, formulário e endereço. Respondemos no mesmo dia útil.",
};

export default function Contato() {
  return (
    <section className="pt-[72px] bg-mist">
      <div className="mx-auto max-w-[1200px] px-6 lg:px-12 py-16 lg:py-24">
        <Reveal>
          <h1 className="text-[clamp(2.25rem,4.5vw,3.5rem)] text-ink max-w-[18ch]">
            Vamos conversar sobre a <em className="italic text-status-red">sua empresa</em>?
          </h1>
          <p className="mt-5 text-xl text-slate max-w-[56ch]">
            Escolha o canal que for mais confortável. Respondemos no mesmo dia útil.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-12 lg:grid-cols-[1fr_1.2fr]">
          <Reveal>
            <div className="space-y-6">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary w-full justify-center"
              >
                Chamar no WhatsApp
              </a>

              <div className="rounded-2xl bg-paper border border-line p-7 space-y-5">
                <div className="flex gap-4">
                  <Phone size={20} className="text-status-red shrink-0 mt-1" aria-hidden />
                  <div>
                    <p className="font-semibold text-ink">Telefones</p>
                    <p className="text-slate">{site.phone1} · {site.phone2}</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <MapPin size={20} className="text-status-red shrink-0 mt-1" aria-hidden />
                  <div>
                    <p className="font-semibold text-ink">Endereço</p>
                    <p className="text-slate">
                      Rua Agostinho Páttaro, 180<br />
                      Barão Geraldo · Campinas/SP<br />
                      CEP {site.cep}
                    </p>
                    <a
                      href={site.mapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link-underline text-sm mt-1 inline-block"
                    >
                      Ver no Google Maps
                    </a>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Clock size={20} className="text-status-red shrink-0 mt-1" aria-hidden />
                  <div>
                    <p className="font-semibold text-ink">Horário</p>
                    <p className="text-slate">Segunda a sexta, das 8h às 18h</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Mail size={20} className="text-status-red shrink-0 mt-1" aria-hidden />
                  <div>
                    <p className="font-semibold text-ink">E-mail</p>
                    <p className="text-slate">{site.email}</p>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <ContactForm />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
