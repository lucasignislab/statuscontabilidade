"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { services, site } from "@/data/services";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 border-b transition-all duration-300 ${
        scrolled
          ? "bg-paper/90 backdrop-blur-md border-line shadow-sm"
          : "bg-paper border-transparent"
      }`}
    >
      <div className="mx-auto max-w-[1200px] px-6 lg:px-12 h-[72px] flex items-center justify-between">
        <Link href="/" className="flex items-baseline gap-1" aria-label="Status Contabilidade, página inicial">
          <span
            className="text-status-red text-2xl font-semibold italic"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Status
          </span>
          <span className="text-ink text-sm font-semibold tracking-wide uppercase">
            Contabilidade
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-8" aria-label="Navegação principal">
          <Link href="/quem-somos" className="text-ink font-semibold text-[0.95rem] hover:text-status-red transition-colors">
            Quem somos
          </Link>
          <div className="relative group">
            <button
              className="text-ink font-semibold text-[0.95rem] hover:text-status-red transition-colors"
              aria-haspopup="true"
            >
              Serviços
            </button>
            <div className="absolute left-0 top-full pt-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
              <div className="bg-paper border border-line rounded-2xl shadow-lg p-3 w-72">
                {services.map((s) => (
                  <Link
                    key={s.slug}
                    href={`/servicos/${s.slug}`}
                    className="block px-4 py-2.5 rounded-xl text-[0.95rem] text-ink hover:bg-red-50 hover:text-status-red transition-colors"
                  >
                    {s.title}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <Link href="/blog" className="text-ink font-semibold text-[0.95rem] hover:text-status-red transition-colors">
            Blog
          </Link>
          <Link href="/contato" className="text-ink font-semibold text-[0.95rem] hover:text-status-red transition-colors">
            Contato
          </Link>
          <Link href="/design-system" className="text-ink font-semibold text-[0.95rem] hover:text-status-red transition-colors">
            Design System
          </Link>
          <Link href="/contato" className="btn-secondary !py-2.5 !px-6 text-sm">
            Fale conosco
          </Link>
        </nav>

        <button
          className="lg:hidden p-2 text-ink"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {open && (
        <nav className="lg:hidden bg-paper border-t border-line px-6 py-4" aria-label="Menu móvel">
          <Link href="/quem-somos" onClick={() => setOpen(false)} className="block py-3 font-semibold text-ink">
            Quem somos
          </Link>
          <p className="pt-3 pb-1 text-xs font-bold uppercase tracking-widest text-slate">Serviços</p>
          {services.map((s) => (
            <Link
              key={s.slug}
              href={`/servicos/${s.slug}`}
              onClick={() => setOpen(false)}
              className="block py-2.5 text-ink"
            >
              {s.title}
            </Link>
          ))}
          <Link href="/blog" onClick={() => setOpen(false)} className="block py-3 font-semibold text-ink">
            Blog
          </Link>
          <Link href="/contato" onClick={() => setOpen(false)} className="block py-3 font-semibold text-ink">
            Contato
          </Link>
          <Link href="/design-system" onClick={() => setOpen(false)} className="block py-3 font-semibold text-ink">
            Design System
          </Link>
          <Link href="/contato" onClick={() => setOpen(false)} className="btn-primary mt-3 w-full justify-center">
            Fale conosco
          </Link>
          <p className="pt-4 text-sm text-slate">{site.phone1} · {site.phone2}</p>
        </nav>
      )}
    </header>
  );
}
