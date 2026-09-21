import { MessageCircle } from "lucide-react";
import { whatsappLink } from "@/data/services";

export default function WhatsAppFab() {
  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-fab"
      aria-label="Conversar com a Status Contabilidade no WhatsApp"
    >
      <MessageCircle size={26} strokeWidth={1.8} aria-hidden />
    </a>
  );
}
