import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import PracticeAreas from "@/components/PracticeAreas";
import Approach from "@/components/Approach";
import Clients from "@/components/Clients";
import Process from "@/components/Process";
import Feedback from "@/components/Feedback";
import InsightsSection from "@/components/InsightsSection";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0A0A0B] text-body relative">
      {/* 1. NAVBAR */}
      <Navbar />

      {/* 2. HERO */}
      <Hero />

      {/* 3. STATS STRIP */}
      <Stats />

      {/* 4. PRACTICE AREAS */}
      <PracticeAreas />

      {/* 5. APPROACH */}
      <Approach />

      {/* 6. CLIENTS */}
      <Clients />

      {/* 7. PROCESS */}
      <Process />

      {/* 8. CLIENT FEEDBACK */}
      <Feedback />

      {/* 9. INSIGHTS */}
      <InsightsSection />

      {/* 10. CONTACT (Full-width gold background, black text) */}
      <Contact />

      {/* 11. FOOTER */}
      <Footer />

      {/* Floating WhatsApp Action Button */}
      <WhatsAppButton />
    </main>
  );
}
