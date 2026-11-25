import React from "react";
import { siteConfig } from "@/data/site";

export default function Stats() {
  return (
    <section id="stats" className="border-y border-border bg-[#111114]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-border">
          {siteConfig.stats.map((stat, index) => (
            <div
              key={index}
              className="py-8 sm:py-10 px-6 flex flex-col justify-center transition-colors hover:bg-[#060607]/50"
            >
              <div className="text-4xl sm:text-5xl font-serif text-gold font-normal mb-2 tracking-tight">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm text-body uppercase tracking-wider font-sans leading-snug">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
