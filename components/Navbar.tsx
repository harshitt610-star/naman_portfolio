"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { siteConfig } from "@/data/site";
import Monogram from "./Monogram";
import { Menu, X, PhoneCall, Linkedin } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Practice", href: "#practice" },
    { label: "Approach", href: "#approach" },
    { label: "Process", href: "#process" },
    { label: "Feedback", href: "#feedback" },
    { label: "Insights", href: "#insights" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0A0A0B]/95 backdrop-blur-md border-b border-border py-3 shadow-2xl"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Brand Monogram + Name */}
        <Link
          href="/"
          className="flex items-center gap-3 group focus:outline-none focus:ring-1 focus:ring-gold"
          aria-label={`${siteConfig.name} - Homepage`}
        >
          <Monogram size={40} className="group-hover:rotate-6 transition-transform duration-300" />
          <div className="flex flex-col">
            <span className="font-serif text-base sm:text-lg text-white font-semibold tracking-wide uppercase group-hover:text-gold transition-colors">
              {siteConfig.name}
            </span>
            <span className="text-[10px] tracking-widest text-[#A8A29A] uppercase">
              Advocate · High Court
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-xs uppercase tracking-widest text-[#A8A29A] hover:text-white transition-colors duration-200 relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-gold hover:after:w-full after:transition-all after:duration-300"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Desktop CTA Button */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href={siteConfig.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Advocate Naman Mishra on LinkedIn"
            className="p-2 border border-border hover:border-gold text-body hover:text-gold transition-colors rounded-[2px]"
          >
            <Linkedin size={16} />
          </a>
          <a
            href="#contact"
            className="px-5 py-2.5 bg-gold hover:bg-gold-hover text-black text-xs font-semibold uppercase tracking-wider transition-all duration-200 rounded-[2px] shadow-sm hover:shadow-gold/20 hover:shadow-md flex items-center gap-2"
          >
            <span>Book Consultation</span>
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 text-white hover:text-gold focus:outline-none focus:ring-1 focus:ring-gold"
          aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-[#0A0A0B]/98 backdrop-blur-xl border-b border-border p-6 shadow-2xl animate-in slide-in-from-top-2 max-h-[85vh] overflow-y-auto">
          <div className="flex flex-col gap-4">
            <div className="text-[11px] text-gold tracking-eyebrow uppercase font-medium pb-2 border-b border-border">
              {siteConfig.court} · {siteConfig.bench}
            </div>
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-medium uppercase tracking-widest text-white hover:text-gold py-2 border-b border-border/40 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-2 flex flex-col gap-3">
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center py-3 bg-gold text-black text-xs font-bold uppercase tracking-widest hover:bg-gold-hover transition-colors rounded-[2px]"
              >
                Book Consultation
              </a>
              <a
                href={`tel:${siteConfig.phone}`}
                className="w-full text-center py-3 border border-border text-white text-xs font-bold uppercase tracking-widest hover:border-gold transition-colors flex items-center justify-center gap-2 rounded-[2px]"
              >
                <PhoneCall size={14} className="text-gold" />
                <span>Call {siteConfig.phoneFormatted}</span>
              </a>
              <a
                href={siteConfig.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-center py-2.5 border border-border/60 text-body hover:text-gold text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-2 rounded-[2px]"
              >
                <Linkedin size={14} className="text-gold" />
                <span>LinkedIn Profile</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
