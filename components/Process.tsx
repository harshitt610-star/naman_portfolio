import React from "react";
import { siteConfig } from "@/data/site";
import SectionHeading from "./SectionHeading";

export default function Process() {
  return (
    <section id="process" className="py-16 md:py-24 bg-[#0A0A0B] border-t border-border relative">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <SectionHeading
          eyebrow="HOW A MATTER PROCEEDS"
          title="From first call to final order"
          subtitle="Every step in the judicial lifecycle is marked by disciplined preparation, transparency, and timely reporting."
        />

        {/* Process Steps */}
        <div className="relative mt-12">
          {/* Desktop Connecting Line */}
          <div className="hidden lg:block absolute top-7 left-[8%] right-[8%] h-[1px] bg-border z-0" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {siteConfig.process.map((step) => (
              <div
                key={step.step}
                className="bg-[#060607] border border-border p-6 sm:p-8 rounded-[2px] flex flex-col items-start hover:border-gold/50 transition-colors group"
              >
                {/* Numbered Gold Circle Badge */}
                <div className="w-14 h-14 rounded-full border-2 border-gold bg-[#0A0A0B] flex items-center justify-center mb-6 group-hover:scale-105 transition-transform flex-shrink-0 shadow-lg shadow-black">
                  <span className="font-serif text-gold text-xl font-bold">
                    0{step.step}
                  </span>
                </div>

                {/* Step Title */}
                <h3 className="text-xl font-serif text-white mb-3 group-hover:text-gold transition-colors">
                  {step.title}
                </h3>

                {/* Step Description */}
                <p className="text-body text-xs sm:text-sm font-sans leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
