import React from "react";

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
}

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "left",
}: SectionHeadingProps) {
  const isCenter = align === "center";

  return (
    <div className={`mb-12 md:mb-16 ${isCenter ? "text-center mx-auto max-w-3xl" : "max-w-2xl"}`}>
      {/* Eyebrow with gold preceding line */}
      <div className={`flex items-center gap-3 mb-3 ${isCenter ? "justify-center" : ""}`}>
        <span className="w-8 h-[2px] bg-gold inline-block" />
        <span className="text-xs uppercase tracking-eyebrow font-medium text-gold">
          {eyebrow}
        </span>
      </div>

      {/* Heading in Marcellus font */}
      <h2 className="text-2xl sm:text-4xl lg:text-5xl font-serif text-white tracking-tight leading-tight break-words">
        {title}
      </h2>

      {/* Subtitle */}
      {subtitle && (
        <p className="mt-4 text-base sm:text-lg text-body leading-relaxed font-sans">
          {subtitle}
        </p>
      )}
    </div>
  );
}
