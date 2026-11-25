import React from "react";
import { siteConfig } from "@/data/site";
import SectionHeading from "./SectionHeading";
import Monogram from "./Monogram";

export default function Approach() {
  return (
    <section id="approach" className="py-16 md:py-24 bg-[#111114] border-t border-border relative">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <SectionHeading
          eyebrow="ABOUT THE CHAMBER"
          title="Courtroom advocacy, explained in plain language"
        />

        {/* Narrative Paragraph */}
        <div className="max-w-3xl mb-16 text-body text-base sm:text-lg font-sans leading-relaxed space-y-4">
          <p>
            Advocate Naman Mishra actively appears before the{" "}
            <strong className="text-white font-medium">{siteConfig.court}</strong> (Principal
            Seat at {siteConfig.city}) and subordinate trial courts across Uttar Pradesh.
            Every matter taken up by the chamber undergoes rigorous statutory scrutiny and precedent
            analysis before arguments are framed.
          </p>
          <p>
            Litigation in the High Court demands an acute grasp of constitutional thresholds, criminal
            procedural safeguards, and civil appellate nuances. We dismantle convoluted legal jargon
            into clear, decisive choices so you always maintain complete command over your legal
            affairs.
          </p>
        </div>

        {/* Three Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {siteConfig.pillars.map((pillar, idx) => (
            <div
              key={idx}
              className="pl-6 border-l-2 border-gold bg-[#060607]/40 p-6 rounded-[2px] border-y border-r border-border/40 hover:border-gold/50 transition-colors"
            >
              <h3 className="text-lg sm:text-xl font-serif text-white mb-2">
                {pillar.title}
              </h3>
              <p className="text-body text-sm font-sans leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>

        {/* Double-bordered Quote Card */}
        <div className="max-w-3xl mx-auto p-2 border border-gold/30 bg-[#060607]/80 rounded-[2px]">
          <div className="border border-gold/60 p-8 sm:p-12 text-center relative">
            <div className="flex justify-center mb-6">
              <Monogram size={48} />
            </div>
            <blockquote className="font-serif text-lg sm:text-2xl text-white italic leading-relaxed mb-6 max-w-2xl mx-auto">
              "{siteConfig.quote.text}"
            </blockquote>
            <cite className="not-italic text-xs uppercase tracking-eyebrow text-gold font-medium block">
              — {siteConfig.quote.author}
            </cite>
          </div>
        </div>
      </div>
    </section>
  );
}
