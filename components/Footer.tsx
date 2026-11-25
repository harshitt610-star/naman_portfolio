import React from "react";
import { siteConfig } from "@/data/site";
import Monogram from "./Monogram";
import { Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0A0A0B] border-t border-border py-16 text-center text-body relative">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        {/* Centered Gold Monogram Logo */}
        <div className="flex justify-center mb-6">
          <Monogram size={52} />
        </div>

        {/* Advocate Name & Designation */}
        <div className="mb-6">
          <h3 className="font-serif text-xl sm:text-2xl text-white tracking-wide uppercase">
            {siteConfig.name}
          </h3>
          <p className="text-xs uppercase tracking-widest text-gold mt-1">
            Advocate · High Court of Judicature at Allahabad
          </p>
          <p className="text-[11px] text-body/80 mt-1">
            Enrolment No: {siteConfig.enrolmentNumber} · {siteConfig.barCouncil}
          </p>
        </div>

        {/* Thin Divider */}
        <div className="max-w-md mx-auto h-[1px] bg-border my-6" />

        {/* Social / Professional links */}
        <div className="flex items-center justify-center gap-4 mb-8">
          <a
            href={siteConfig.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 border border-border hover:border-gold text-xs uppercase tracking-wider text-body hover:text-gold transition-colors rounded-[2px]"
          >
            <Linkedin size={14} className="text-gold" />
            <span>Connect on LinkedIn</span>
          </a>
        </div>

        {/* BCI Mandatory Regulatory Disclaimer */}
        <div className="max-w-3xl mx-auto mb-8 px-4">
          <p className="text-[11px] sm:text-xs text-body/70 leading-relaxed font-sans">
            <strong className="text-white/80 font-medium">Bar Council of India Disclaimer:</strong>{" "}
            This website provides general information about the advocate and his areas of practice
            as permitted by the rules of the Bar Council of India. It is not intended to be, nor should
            it be construed as, legal advice, advertisement, or solicitation. No advocate–client
            relationship is created by accessing or browsing this website.
          </p>
        </div>

        {/* Copyright */}
        <div className="text-xs text-body/60 font-sans tracking-wide">
          © {new Date().getFullYear()} {siteConfig.name}, Advocate. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
