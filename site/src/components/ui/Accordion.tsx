"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

export interface AccordionItem {
  q: string;
  a: string;
}

/** FAQ em acordeão. Abertura por grid-rows (0fr → 1fr), 250ms, uma pergunta aberta por vez. */
export default function Accordion({ items }: { items: AccordionItem[] }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="divide-y divide-line rounded-2xl border border-line bg-paper">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={item.q}>
            <button
              className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
              onClick={() => setOpen(isOpen ? null : i)}
              aria-expanded={isOpen}
            >
              <span className={`font-semibold transition-colors ${isOpen ? "text-status-red" : "text-ink"}`}>
                {item.q}
              </span>
              <ChevronDown
                size={18}
                className={`shrink-0 text-slate transition-transform duration-250 ${isOpen ? "rotate-180 text-status-red" : ""}`}
                aria-hidden
              />
            </button>
            <div
              className={`grid transition-all duration-250 ease-out ${
                isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                <p className="px-6 pb-5 text-slate text-[0.95rem] leading-relaxed max-w-[62ch]">
                  {item.a}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
