import Link from "next/link";
import { MapPin, Phone } from "lucide-react";
import { services, site } from "@/data/services";

export default function Footer() {
  return (
    <footer className="bg-ink text-mist">
      <div className="mx-auto max-w-[1200px] px-6 lg:px-12 py-16 lg:py-20">
        <div className="grid gap-12 md:grid-cols-3">
          <div>
            <p className="text-2xl italic text-status-300" style={{ fontFamily: "var(--font-display)" }}>
              Status <span className="not-italic text-sm font-sans font-semibold uppercase tracking-wide text-mist/70">Contabilidade</span>
            </p>
            <p className="mt-4 text-sm text-mist/70 leading-relaxed max-w-xs">
              Há {site.years} anos cuidando da contabilidade de empresas de Campinas e região.
            </p>
            <Link href="/privacidade" className="mt-3 inline-block text-xs text-mist/50 hover:text-mist transition-colors">
              Política de privacidade
            </Link>
          </div>

          <nav aria-label="Serviços no rodapé">
            <p className="text-xs font-bold uppercase tracking-widest text-mist/50 mb-4">Serviços</p>
            <ul className="space-y-2.5 text-sm">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link href={`/servicos/${s.slug}`} className="text-mist/80 hover:text-white transition-colors">
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-mist/50 mb-4">Contato</p>
            <ul className="space-y-3 text-sm text-mist/80">
              <li className="flex gap-3">
                <MapPin size={18} className="shrink-0 mt-0.5 text-status-300" aria-hidden />
                <span>{site.address}<br />CEP {site.cep}</span>
              </li>
              <li className="flex gap-3">
                <Phone size={18} className="shrink-0 mt-0.5 text-status-300" aria-hidden />
                <span>{site.phone1} · {site.phone2}</span>
              </li>
            </ul>
            <Link href="/contato" className="btn-primary mt-6 text-sm !py-3 !px-6">
              Fale com um contador
            </Link>
          </div>
        </div>

        <hr className="my-10 border-white/10" />
        <div className="flex flex-col sm:flex-row justify-between gap-3 text-xs text-mist/50">
          <p>© {new Date().getFullYear()} <span className="text-status-300 font-semibold">Status</span> Contabilidade. Todos os direitos reservados.</p>
          <a href="https://lucascoelhoux.site" target="_blank" rel="noopener noreferrer" className="hover:text-mist transition-colors">
            Designed by <span className="text-status-300 font-semibold">Lucas Coelho</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
