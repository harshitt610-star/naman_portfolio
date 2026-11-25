import React from "react";

interface MonogramProps {
  className?: string;
  size?: number;
  color?: string;
}

export default function Monogram({
  className = "",
  size = 48,
  color = "#E8A850",
}: MonogramProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`transition-transform duration-300 ${className}`}
      aria-label="Advocate Naman Mishra Monogram"
    >
      {/* Outer elegant diamond / seal accent */}
      <rect
        x="6"
        y="6"
        width="88"
        height="88"
        stroke={color}
        strokeWidth="1.2"
        strokeOpacity="0.4"
        transform="rotate(45 50 50)"
      />
      
      {/* Scales of Justice Top Fulcrum & Beam */}
      <circle cx="50" cy="22" r="3" fill={color} />
      <path
        d="M26 26 C 36 24, 64 24, 74 26"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
      />
      {/* Central pillar / sword of justice line */}
      <line
        x1="50"
        y1="22"
        x2="50"
        y2="78"
        stroke={color}
        strokeWidth="1.8"
      />
      {/* Base of the central pillar */}
      <line
        x1="40"
        y1="78"
        x2="60"
        y2="78"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
      />

      {/* Left scale pan */}
      <path
        d="M26 26 L20 42 M26 26 L32 42"
        stroke={color}
        strokeWidth="1.2"
        strokeOpacity="0.8"
      />
      <path
        d="M18 42 Q 26 47 34 42 Z"
        fill={color}
        fillOpacity="0.25"
        stroke={color}
        strokeWidth="1.4"
      />

      {/* Right scale pan */}
      <path
        d="M74 26 L68 42 M74 26 L80 42"
        stroke={color}
        strokeWidth="1.2"
        strokeOpacity="0.8"
      />
      <path
        d="M66 42 Q 74 47 82 42 Z"
        fill={color}
        fillOpacity="0.25"
        stroke={color}
        strokeWidth="1.4"
      />

      {/* Monogram Initials "N" and "M" intertwined subtly in serif elegance */}
      <text
        x="36"
        y="68"
        fill={color}
        fontFamily="var(--font-marcellus), serif"
        fontSize="21"
        fontWeight="bold"
        textAnchor="middle"
        letterSpacing="0.05em"
      >
        N
      </text>
      <text
        x="64"
        y="68"
        fill={color}
        fontFamily="var(--font-marcellus), serif"
        fontSize="21"
        fontWeight="bold"
        textAnchor="middle"
        letterSpacing="0.05em"
      >
        M
      </text>
    </svg>
  );
}
