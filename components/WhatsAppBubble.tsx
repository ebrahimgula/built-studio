import { waLink } from "@/content/site";
import { WhatsApp } from "./Icons";

export function WhatsAppBubble() {
  return (
    <a
      href={waLink("default")}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-5 right-5 md:bottom-7 md:right-7 z-50 inline-flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-lg hover:scale-105 transition-transform animate-pulse-soft"
    >
      <WhatsApp size={26} />
    </a>
  );
}
