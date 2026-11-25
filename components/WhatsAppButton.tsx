import React from "react";
import { siteConfig } from "@/data/site";
import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  const whatsappUrl = `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(
    siteConfig.whatsappPrefill
  )}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Direct WhatsApp Consultation with Advocate Naman Mishra"
      className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-50 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#25D366] group"
    >
      <MessageCircle size={26} className="fill-white/20 sm:w-7 sm:h-7" />
      <span className="sr-only">Chat on WhatsApp</span>

      {/* Subtle Tooltip on Desktop hover */}
      <span className="hidden md:group-hover:block absolute right-16 bg-[#0A0A0B] text-white text-xs font-sans px-3 py-1.5 rounded-[2px] border border-border whitespace-nowrap shadow-xl">
        Consult on WhatsApp
      </span>
    </a>
  );
}
