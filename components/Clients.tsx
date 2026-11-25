import React from "react";
import { siteConfig } from "@/data/site";

export default function Clients() {
  if (!siteConfig.clients || siteConfig.clients.length === 0) {
    return null;
  }

  return (
    <section className="py-12 bg-[#0A0A0B] border-t border-border">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-2">
            <span className="w-6 h-[1px] bg-gold" />
            <span className="text-[10px] sm:text-xs uppercase tracking-eyebrow text-gold font-medium">
              CLIENTS THE CHAMBER HAS WORKED WITH
            </span>
            <span className="w-6 h-[1px] bg-gold" />
          </div>
          <p className="text-xs text-body">
            Representation across Allahabad High Court, District Judiciaries, & Tribunals
          </p>
        </div>

        {/* Badges / Monochromatic strip */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6">
          {siteConfig.clients.map((client, idx) => (
            <div
              key={idx}
              className="px-5 py-3 border border-border bg-[#111114] text-[#A8A29A] text-xs sm:text-sm uppercase tracking-wider font-medium hover:text-gold hover:border-gold/40 transition-colors rounded-[2px]"
            >
              {client}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
