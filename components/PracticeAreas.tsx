import React from "react";
import { siteConfig } from "@/data/site";
import SectionHeading from "./SectionHeading";

export default function PracticeAreas() {
  return (
    <section id="practice" className="py-16 md:py-24 bg-[#0A0A0B] relative">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <SectionHeading
          eyebrow="PRACTICE AREAS"
          title="Complete representation across six areas of law"
          subtitle={`Argued before the High Court and, where required, in the district and sessions courts of ${siteConfig.city} and Ayodhya.`}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {siteConfig.practiceAreas.map((area) => (
            <div
              key={area.id}
              className="bg-[#060607] border border-border p-6 sm:p-8 rounded-[2px] transition-all duration-300 hover:border-gold/60 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/60 flex flex-col justify-between group"
            >
              <div>
                {/* Title */}
                <h3 className="text-xl sm:text-2xl font-serif text-white group-hover:text-gold transition-colors duration-200 mb-3">
                  {area.title}
                </h3>

                {/* Description */}
                <p className="text-body text-sm font-sans leading-relaxed mb-6">
                  {area.description}
                </p>

                {/* Gold Square Bullets List */}
                <ul className="space-y-3 mb-6">
                  {area.points.map((point, idx) => (
                    <li key={idx} className="flex items-start text-xs sm:text-sm text-[#D1CCC5]">
                      <span className="w-1.5 h-1.5 bg-gold flex-shrink-0 mt-1.5 mr-3 inline-block" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Link */}
              <div className="pt-4 border-t border-border/50">
                <a
                  href="#contact"
                  className="text-xs uppercase tracking-widest text-gold hover:text-gold-hover font-semibold inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform"
                >
                  <span>Consult on this area</span>
                  <span>→</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
