import React from "react";
import { siteConfig } from "@/data/site";
import { Phone, Mail, MapPin, MessageSquare, ExternalLink, Linkedin } from "lucide-react";

export default function Contact() {
  const whatsappUrl = `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(
    siteConfig.whatsappPrefill
  )}`;

  return (
    <section id="contact" className="bg-gold text-[#0A0A0B] py-16 md:py-24 relative overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <div className="max-w-3xl mb-12">
          {/* Eyebrow */}
          <div className="flex items-center gap-3 mb-3">
            <span className="w-8 h-[2px] bg-black inline-block" />
            <span className="text-xs uppercase tracking-eyebrow font-bold text-black">
              DIRECT LEGAL COUNSEL
            </span>
          </div>

          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-black font-normal tracking-tight leading-tight mb-4">
            Speak with the chamber about your matter
          </h2>

          {/* Instructions */}
          <p className="text-base sm:text-lg text-black/85 font-sans leading-relaxed font-normal">
            Consultations are by appointment, in person at the High Court Chambers or by telephone.
            Send copies of any FIR, notice, order or agreement in advance so the first meeting counts.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Big Call CTA + Direct Action */}
          <div className="lg:col-span-6 space-y-6">
            <a
              href={`tel:${siteConfig.phone}`}
              className="w-full py-5 px-8 bg-[#0A0A0B] hover:bg-black text-white hover:text-gold text-base sm:text-lg font-serif font-bold uppercase tracking-widest text-center transition-all duration-200 rounded-[2px] shadow-2xl flex items-center justify-center gap-3 group"
            >
              <Phone size={20} className="text-gold group-hover:scale-110 transition-transform" />
              <span>CALL {siteConfig.phoneFormatted}</span>
            </a>

            <div className="p-6 bg-black/10 border border-black/20 rounded-[2px]">
              <h3 className="font-serif text-lg font-bold text-black mb-2">
                Urgent High Court Listings & Bail Motions
              </h3>
              <p className="text-sm text-black/80 mb-4 leading-relaxed">
                For urgent anticipatory bail, stay against arrest, or vacation bench listings,
                reach out directly via WhatsApp with the crime number and police station details.
              </p>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs uppercase font-bold tracking-widest text-black underline hover:text-black/70"
              >
                <MessageSquare size={14} />
                <span>Open Instant WhatsApp Channel</span>
              </a>
            </div>
          </div>

          {/* Right Column: Labeled Information Rows */}
          <div className="lg:col-span-6 space-y-4">
            {/* WhatsApp row */}
            <div className="p-5 bg-white/15 border-l-4 border-black backdrop-blur-sm rounded-[1px]">
              <div className="text-[11px] uppercase font-bold tracking-widest text-black/70 mb-1 flex items-center gap-1.5">
                <MessageSquare size={13} />
                <span>WhatsApp Messaging</span>
              </div>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-base sm:text-lg font-semibold text-black hover:underline block"
              >
                {siteConfig.phoneFormatted}
              </a>
            </div>

            {/* Email row */}
            <div className="p-5 bg-white/15 border-l-4 border-black backdrop-blur-sm rounded-[1px]">
              <div className="text-[11px] uppercase font-bold tracking-widest text-black/70 mb-1 flex items-center gap-1.5">
                <Mail size={13} />
                <span>Chamber Email</span>
              </div>
              <a
                href={`mailto:${siteConfig.email}`}
                className="text-base sm:text-lg font-semibold text-black hover:underline block break-all"
              >
                {siteConfig.email}
              </a>
            </div>

            {/* LinkedIn row */}
            <div className="p-5 bg-white/15 border-l-4 border-black backdrop-blur-sm rounded-[1px]">
              <div className="text-[11px] uppercase font-bold tracking-widest text-black/70 mb-1 flex items-center gap-1.5">
                <Linkedin size={13} />
                <span>Professional Profile</span>
              </div>
              <a
                href={siteConfig.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-base sm:text-lg font-semibold text-black hover:underline inline-flex items-center gap-1.5"
              >
                <span>linkedin.com/in/naman-mishra</span>
                <ExternalLink size={14} />
              </a>
            </div>

            {/* Chamber address row */}
            <div className="p-5 bg-white/15 border-l-4 border-black backdrop-blur-sm rounded-[1px]">
              <div className="text-[11px] uppercase font-bold tracking-widest text-black/70 mb-1 flex items-center gap-1.5">
                <MapPin size={13} />
                <span>Chambers Location</span>
              </div>
              <address className="not-italic text-sm sm:text-base text-black font-medium leading-relaxed mb-3">
                {siteConfig.chamberAddress.line1},<br />
                {siteConfig.chamberAddress.line2},<br />
                {siteConfig.chamberAddress.city} – {siteConfig.chamberAddress.pincode}, {siteConfig.chamberAddress.state}
              </address>
              <a
                href={siteConfig.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 bg-black text-white text-xs font-bold uppercase tracking-wider hover:bg-black/80 transition-colors rounded-[2px]"
              >
                <span>Open in Google Maps</span>
                <ExternalLink size={12} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
