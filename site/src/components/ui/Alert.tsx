import { AlertTriangle, CheckCircle2, Info, X, XCircle } from "lucide-react";

type Variant = "success" | "warning" | "error" | "info";

const config: Record<
  Variant,
  { icon: React.ReactNode; box: string; iconColor: string }
> = {
  success: {
    icon: <CheckCircle2 size={20} aria-hidden />,
    box: "bg-success-50 border-success-100",
    iconColor: "text-success-700",
  },
  warning: {
    icon: <AlertTriangle size={20} aria-hidden />,
    box: "bg-warning-50 border-warning-100",
    iconColor: "text-warning-700",
  },
  error: {
    icon: <XCircle size={20} aria-hidden />,
    box: "bg-red-50 border-red-100",
    iconColor: "text-red-700",
  },
  info: {
    icon: <Info size={20} aria-hidden />,
    box: "bg-ocean-50 border-ocean-100",
    iconColor: "text-ocean",
  },
};

/** Alerta inline (feedback de formulário, avisos de prazo). Versão toast reusa os mesmos tokens. */
export default function Alert({
  variant = "info",
  title,
  children,
}: {
  variant?: Variant;
  title: string;
  children?: React.ReactNode;
}) {
  const c = config[variant];
  return (
    <div
      role={variant === "error" ? "alert" : "status"}
      className={`flex items-start gap-3 rounded-2xl border p-4 ${c.box}`}
    >
      <span className={`mt-0.5 shrink-0 ${c.iconColor}`}>{c.icon}</span>
      <div className="flex-1">
        <p className="font-semibold text-ink text-[0.95rem]">{title}</p>
        {children && <p className="mt-1 text-sm text-slate">{children}</p>}
      </div>
      <button
        className="shrink-0 rounded-full p-1 text-slate transition-colors hover:text-ink"
        aria-label="Fechar aviso"
      >
        <X size={16} aria-hidden />
      </button>
    </div>
  );
}
