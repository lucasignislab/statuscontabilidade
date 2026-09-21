"use client";

import { useState } from "react";

export interface Tab {
  label: string;
  content: React.ReactNode;
}

/** Navegação por abas: indicador de 2px em status-red sob o item ativo, transição de 150ms. */
export default function Tabs({ tabs }: { tabs: Tab[] }) {
  const [active, setActive] = useState(0);

  return (
    <div>
      <div
        role="tablist"
        className="flex gap-2 overflow-x-auto border-b border-line"
      >
        {tabs.map((tab, i) => {
          const isActive = active === i;
          return (
            <button
              key={tab.label}
              role="tab"
              aria-selected={isActive}
              onClick={() => setActive(i)}
              className={`relative whitespace-nowrap px-4 py-3 text-sm font-semibold transition-colors duration-150 ${
                isActive ? "text-status-red" : "text-slate hover:text-ink"
              }`}
            >
              {tab.label}
              <span
                className={`absolute inset-x-0 -bottom-px h-0.5 bg-status-red transition-transform duration-150 ${
                  isActive ? "scale-x-100" : "scale-x-0"
                }`}
                aria-hidden
              />
            </button>
          );
        })}
      </div>
      <div role="tabpanel" className="pt-6 text-slate leading-relaxed max-w-[68ch]">
        {tabs[active].content}
      </div>
    </div>
  );
}
