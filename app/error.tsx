"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import Monogram from "@/components/Monogram";
import { ArrowLeft, RefreshCw } from "lucide-react";

export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log error to an error reporting service if configured
    console.error("Runtime error caught by boundary:", error);
  }, [error]);

  return (
    <div className="min-h-screen bg-[#0A0A0B] text-body flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center border border-border bg-[#060607] p-8 sm:p-12 rounded-[2px] shadow-2xl">
        <div className="flex justify-center mb-6">
          <Monogram size={56} />
        </div>
        <div className="text-xs uppercase tracking-eyebrow text-gold font-medium mb-2">
          NOTICE · SYSTEM EXCEPTION
        </div>
        <h1 className="text-2xl sm:text-3xl font-serif text-white mb-4">
          Unable to Load Chamber Record
        </h1>
        <p className="text-xs sm:text-sm text-body leading-relaxed mb-8">
          A temporary technical irregularity occurred while processing this request.
          Please refresh the view or return to the main chamber portal.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <button
            onClick={() => reset()}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-gold hover:bg-gold-hover text-black text-xs uppercase tracking-wider font-bold rounded-[2px] transition-colors"
          >
            <RefreshCw size={14} />
            <span>Try Again</span>
          </button>
          <Link
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 border border-border hover:border-gold text-white text-xs uppercase tracking-wider font-semibold rounded-[2px] transition-colors"
          >
            <ArrowLeft size={14} />
            <span>Return Home</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
