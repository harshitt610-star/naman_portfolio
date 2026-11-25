import React from "react";
import { siteConfig } from "@/data/site";
import SectionHeading from "./SectionHeading";

export default function Feedback() {
  /* REPLACE WITH REAL, CONSENTED TESTIMONIALS ONLY */
  return (
    <section id="feedback" className="py-16 md:py-24 bg-[#111114] border-t border-border">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <SectionHeading
          eyebrow="CLIENT FEEDBACK"
          title="What clients say about the chamber"
          subtitle="Reflections from litigants on courtroom conduct, strategic counsel, and chamber service."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {siteConfig.testimonials.map((item, idx) => (
            <div
              key={idx}
              className="bg-[#060607] border border-border p-6 sm:p-8 rounded-[2px] flex flex-col justify-between hover:border-gold/40 transition-colors"
            >
              <div>
                {/* Large gold quote mark */}
                <div className="font-serif text-5xl text-gold leading-none mb-4 select-none opacity-80">
                  “
                </div>

                {/* Quote text */}
                <p className="text-body text-sm font-sans leading-relaxed mb-6 italic">
                  "{item.quote}"
                </p>
              </div>

              {/* Divider & Client Initials */}
              <div>
                <div className="w-12 h-[1px] bg-border mb-4" />
                <div className="flex items-center justify-between">
                  <span className="font-serif text-white font-semibold text-base tracking-wider">
                    {item.author}
                  </span>
                  <span className="text-xs text-[#A8A29A]/80 italic">
                    {item.matter} · {item.city}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Professional Note regarding compliance */}
        <div className="mt-8 text-center">
          <p className="text-[11px] text-body/60 uppercase tracking-wider">
            Client confidentiality strictly guarded · Testimonials shown for illustrative chamber reference
          </p>
        </div>
      </div>
    </section>
  );
}
