"use client";

import { useState } from "react";
import { Send } from "lucide-react";
import { whatsappLink } from "@/data/services";

type Status = "idle" | "sending" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    if (!data.nome || !data.email || !data.mensagem) {
      setError("Preencha nome, e-mail e mensagem para enviarmos certinho.");
      setStatus("error");
      return;
    }

    setStatus("sending");
    setError("");
    try {
      const res = await fetch("https://formspree.io/f/SEU_ID_AQUI", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error();
      setStatus("success");
      form.reset();
    } catch {
      setError(
        "Não conseguimos enviar agora. Tente novamente ou fale com nossa equipe pelo WhatsApp."
      );
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-2xl bg-paper border border-line p-10 text-center">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-red-50 text-status-red">
          <Send size={22} aria-hidden />
        </div>
        <h2 className="mt-5 text-2xl text-ink">Mensagem enviada</h2>
        <p className="mt-3 text-slate">
          Recebemos o seu contato e respondemos no mesmo dia útil. Se for urgente,
          chame no WhatsApp.
        </p>
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-secondary mt-6 text-sm"
        >
          Abrir WhatsApp
        </a>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className="rounded-2xl bg-paper border border-line p-8 lg:p-10"
      noValidate={false}
    >
      <h2 className="text-2xl text-ink">Envie uma mensagem</h2>
      <p className="mt-2 text-slate text-[0.95rem]">
        Conte em duas linhas o que você precisa. Nossa equipe cuida do resto.
      </p>

      <div className="mt-7 grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="nome" className="label-field">Nome</label>
          <input id="nome" name="nome" type="text" className="input-field" placeholder="Seu nome" required />
        </div>
        <div>
          <label htmlFor="telefone" className="label-field">Telefone</label>
          <input id="telefone" name="telefone" type="tel" className="input-field" placeholder="(19) 9 9999-9999" />
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="email" className="label-field">E-mail</label>
          <input id="email" name="email" type="email" className="input-field" placeholder="voce@empresa.com.br" required />
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="mensagem" className="label-field">Mensagem</label>
          <textarea
            id="mensagem"
            name="mensagem"
            rows={5}
            className="input-field resize-y"
            placeholder="Ex.: quero abrir uma empresa de consultoria e não sei por onde começar"
            required
          />
        </div>
      </div>

      {status === "error" && (
        <p role="alert" className="mt-4 text-sm text-red-700">
          {error}
        </p>
      )}

      <button type="submit" disabled={status === "sending"} className="btn-primary mt-7 disabled:opacity-60 disabled:pointer-events-none">
        {status === "sending" ? "Enviando..." : "Enviar mensagem"}
        <Send size={16} aria-hidden />
      </button>

      <p className="mt-4 text-xs text-slate">
        Seus dados são usados apenas para responder ao seu contato. Leia nossa{" "}
        <a href="/privacidade" className="link-underline">política de privacidade</a>.
      </p>
    </form>
  );
}
