import React from "react";
import Image from "next/image";
import { siteConfig } from "@/data/site";
import Monogram from "./Monogram";
import { ArrowDown, MessageCircle, ShieldCheck } from "lucide-react";

export default function Hero() {
  const urgentBailUrl = `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(
    "Urgent Assistance Required: Anticipatory / Regular Bail Matter before the High Court."
  )}`;

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden bg-[#0A0A0B]">
      {/* Background Advocate Portrait & Gradient Overlays */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero.jpg"
          alt={`${siteConfig.name} - Advocate, High Court of Judicature at Allahabad`}
          fill
          priority
          sizes="100vw"
          className="object-cover object-top opacity-15 filter grayscale contrast-125"
        />
        {/* Dark Vignette & Gradient Overlays for contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0B] via-[#0A0A0B]/95 to-[#0A0A0B]/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0B] via-transparent to-[#0A0A0B]/90" />
      </div>

      <div className="relative z-10 max-w-[1200px] w-full mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Text & CTAs */}
          <div className="lg:col-span-7">
            {/* Small Top Court Strip */}
            <div className="inline-flex flex-wrap items-center gap-2 px-3 py-1.5 bg-[#111114]/90 border border-border text-gold text-[10px] sm:text-xs font-medium tracking-wide mb-6 uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse flex-shrink-0" />
              <span>{siteConfig.bench}</span>
              <span className="text-body hidden xs:inline">·</span>
              <span>{siteConfig.court}</span>
            </div>

            {/* Logo Monogram */}
            <div className="mb-6">
              <Monogram size={56} />
            </div>

            {/* Eyebrow */}
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-[2px] bg-gold inline-block flex-shrink-0" />
              <span className="text-xs sm:text-sm uppercase tracking-eyebrow font-medium text-gold break-words">
                ADVOCATE, HIGH COURT · {siteConfig.city.toUpperCase()}
              </span>
            </div>

            {/* H1 Heading */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif text-white tracking-tight leading-[1.15] mb-6 break-words">
              Strong, reliable representation{" "}
              <span className="text-gold italic font-normal">
                when it matters most
              </span>
            </h1>

            {/* Subtitle / Practice Summary */}
            <p className="text-base sm:text-lg lg:text-xl text-body font-sans leading-relaxed mb-10 max-w-2xl">
              Criminal defence, civil and property disputes, family matters, writs and appeals
              before the {siteConfig.bench} of the {siteConfig.court}. Every case researched before it is argued.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              {/* CTA 1: Solid Gold */}
              <a
                href="#contact"
                className="px-8 py-4 bg-gold hover:bg-gold-hover text-black text-xs font-bold uppercase tracking-widest text-center transition-all duration-200 rounded-[2px] shadow-lg hover:shadow-gold/20 flex items-center justify-center"
              >
                Book a Consultation
              </a>

              {/* CTA 2: Outline */}
              <a
                href={urgentBailUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 border border-border hover:border-gold text-white hover:text-gold text-xs font-semibold uppercase tracking-widest text-center transition-all duration-200 rounded-[2px] flex items-center justify-center gap-2 group"
              >
                <MessageCircle size={16} className="text-gold group-hover:scale-110 transition-transform" />
                <span>WhatsApp · Urgent Bail</span>
              </a>
            </div>

            {/* Enrolment badge info */}
            <div className="mt-10 pt-6 border-t border-border/60 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-body">
              <div>
                <span className="text-white font-medium">Bar Enrolment:</span> {siteConfig.enrolmentNumber}
              </div>
              <div className="hidden sm:inline text-border">|</div>
              <div>
                <span className="text-white font-medium">Statutory Body:</span> {siteConfig.barCouncil}
              </div>
              <div className="hidden sm:inline text-border">|</div>
              <div>
                <span className="text-white font-medium">Seat:</span> Prayagraj
              </div>
            </div>
          </div>

          {/* Right Column: Prominent Portrait Card */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end mt-8 lg:mt-0">
            <div className="relative max-w-[290px] xs:max-w-[320px] sm:max-w-sm w-full p-2.5 border border-gold/30 bg-[#060607]/90 rounded-[2px] shadow-2xl shadow-black">
              {/* Inner thin frame */}
              <div className="relative border border-gold/60 p-2 overflow-hidden group">
                <div className="relative w-full aspect-[4/5] overflow-hidden rounded-[1px] bg-[#111114]">
                  <Image
                    src="/hero.jpg"
                    alt={`Advocate ${siteConfig.name} - Allahabad High Court`}
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, 400px"
                    className="object-cover object-top filter contrast-105 group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />
                </div>

                {/* Advocate Credential Strip on Card */}
                <div className="mt-3 pt-3 border-t border-border/80 flex items-center justify-between text-left">
                  <div>
                    <h2 className="font-serif text-white font-semibold text-base sm:text-lg">
                      {siteConfig.name}
                    </h2>
                    <p className="text-[11px] text-gold uppercase tracking-wider font-medium">
                      Advocate · Allahabad High Court
                    </p>
                  </div>
                  <div className="flex items-center gap-1.5 px-2.5 py-1 bg-[#111114] border border-border text-[10px] text-body uppercase tracking-wider rounded-[2px]">
                    <ShieldCheck size={13} className="text-gold" />
                    <span>UP25047/26</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Subtle Scroll Down Indicator */}
      <a
        href="#stats"
        aria-label="Scroll to stats"
        className="absolute bottom-4 left-1/2 -translate-x-1/2 text-body hover:text-gold transition-colors hidden md:block"
      >
        <ArrowDown size={20} className="animate-bounce" />
      </a>
    </section>
  );
}
