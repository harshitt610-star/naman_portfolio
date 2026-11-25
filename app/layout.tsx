import type { Metadata, Viewport } from "next";
import { Marcellus, Inter } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/data/site";

const marcellus = Marcellus({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-marcellus",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#0A0A0B",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://advocatenamanmishra.in"),
  title: `${siteConfig.name} | Advocate, High Court of Judicature at Allahabad`,
  description: `Official chamber website of Advocate ${siteConfig.name}. Practice before the Allahabad High Court (Principal Seat at Prayagraj). Specializing in Criminal Defence, Bail, FIR Quashing, Civil Writs, and Property Disputes.`,
  keywords: [
    "Naman Mishra Advocate",
    "Allahabad High Court Advocate",
    "Advocate Prayagraj",
    "High Court Criminal Lawyer Allahabad",
    "Bail Advocate Allahabad High Court",
    "Writ Petition Advocate UP",
    "Bar Council of Uttar Pradesh UP25047/26",
    "Ayodhya Advocate High Court",
  ],
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  openGraph: {
    title: `${siteConfig.name} | Advocate, Allahabad High Court`,
    description: `Criminal defence, writs, appeals, and property disputes before the High Court of Judicature at Allahabad. Rigorous research and steadfast advocacy.`,
    url: "https://advocatenamanmishra.in",
    siteName: `${siteConfig.name} Chambers`,
    images: [
      {
        url: "/hero.jpg",
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} - Advocate, Allahabad High Court`,
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | Advocate, Allahabad High Court`,
    description: `Courtroom advocacy before the High Court of Judicature at Allahabad, Prayagraj Bench.`,
    images: ["/hero.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.svg",
    apple: "/favicon.svg",
  },
  manifest: "/manifest.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": ["LegalService", "Attorney"],
    name: `${siteConfig.name}, Advocate`,
    description: `Advocate practicing before the High Court of Judicature at Allahabad (Principal Seat at Prayagraj). Core practice areas include Criminal Defence, Anticipatory Bail, Quashing of FIRs, Writs, Civil & Property Disputes.`,
    image: "https://advocatenamanmishra.in/hero.jpg",
    url: "https://advocatenamanmishra.in",
    telephone: siteConfig.phone,
    email: siteConfig.email,
    sameAs: [siteConfig.linkedin],
    priceRange: "₹₹",
    openingHours: "Mo,Tu,We,Th,Fr,Sa 10:00-19:00",
    address: {
      "@type": "PostalAddress",
      streetAddress: `${siteConfig.chamberAddress.line1}, ${siteConfig.chamberAddress.line2}`,
      addressLocality: siteConfig.chamberAddress.city,
      postalCode: siteConfig.chamberAddress.pincode,
      addressRegion: siteConfig.chamberAddress.state,
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "25.4526",
      longitude: "81.8260",
    },
    hasCredential: {
      "@type": "EducationalOccupationalCredential",
      name: "Advocate Enrolment Certificate",
      credentialCategory: "Bar Enrolment",
      recognizedBy: {
        "@type": "Organization",
        name: siteConfig.barCouncil,
      },
    },
    knowsAbout: [
      "Criminal Defence Law",
      "Anticipatory and Regular Bail",
      "Writ Petitions under Article 226",
      "Civil and Property Litigation",
      "Commercial Arbitration",
    ],
    areaServed: [
      {
        "@type": "AdministrativeArea",
        name: "Uttar Pradesh",
      },
      {
        "@type": "City",
        name: "Prayagraj",
      },
      {
        "@type": "City",
        name: "Ayodhya",
      },
    ],
  };

  return (
    <html lang="en" className="dark">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${marcellus.variable} ${inter.variable} antialiased bg-[#0A0A0B] text-body selection:bg-gold selection:text-black min-h-screen flex flex-col`}>
        {children}
      </body>
    </html>
  );
}
