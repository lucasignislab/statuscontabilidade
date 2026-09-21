type Variant = "success" | "warning" | "error" | "info" | "neutral";

const styles: Record<Variant, string> = {
  success: "bg-success-50 text-success-700",
  warning: "bg-warning-50 text-warning-700",
  error: "bg-red-50 text-red-700",
  info: "bg-ocean-50 text-ocean",
  neutral: "bg-mist text-ink-700",
};

const dots: Record<Variant, string> = {
  success: "bg-success-700",
  warning: "bg-warning-700",
  error: "bg-red-700",
  info: "bg-ocean",
  neutral: "bg-ink-700",
};

/** Selo semântico de status: prazos, obrigações e estados de processo. */
export default function StatusBadge({
  variant = "neutral",
  children,
}: {
  variant?: Variant;
  children: React.ReactNode;
}) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-bold ${styles[variant]}`}
    >
      <span className={`h-1.5 w-1.5 rounded-full ${dots[variant]}`} aria-hidden />
      {children}
    </span>
  );
}
