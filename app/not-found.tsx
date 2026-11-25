import React from "react";
import Link from "next/link";
import Monogram from "@/components/Monogram";
import { siteConfig } from "@/data/site";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#0A0A0B] text-body flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center border border-border bg-[#060607] p-8 sm:p-12 rounded-[2px]">
        <div className="flex justify-center mb-6">
          <Monogram size={56} />
        </div>
        <div className="text-xs uppercase tracking-eyebrow text-gold font-medium mb-2">
          404 · PAGE NOT FOUND
        </div>
        <h1 className="text-3xl font-serif text-white mb-4">
          Record Not Located
        </h1>
        <p className="text-sm text-body leading-relaxed mb-8">
          The requested page or record could not be found. Please navigate back to the main portal of Advocate {siteConfig.name}.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3 bg-gold hover:bg-gold-hover text-black text-xs uppercase tracking-widest font-bold rounded-[2px] transition-colors"
        >
          <ArrowLeft size={14} />
          <span>Return to Chamber</span>
        </Link>
      </div>
    </div>
  );
}
