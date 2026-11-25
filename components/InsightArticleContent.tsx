"use client";

import React from "react";
import Link from "next/link";
import { BlogPost } from "@/data/posts";
import { siteConfig } from "@/data/site";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { ArrowLeft, Calendar, Clock, MessageSquare, PhoneCall } from "lucide-react";

interface Props {
  post: BlogPost;
}

export default function InsightArticleContent({ post }: Props) {
  const whatsappUrl = `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(
    `Hello Advocate Naman Mishra, I read your article "${post.title}" and would like to consult on a related matter.`
  )}`;

  return (
    <div className="min-h-screen bg-[#0A0A0B] text-body flex flex-col justify-between">
      <Navbar />

      <main className="pt-28 pb-20 max-w-4xl mx-auto px-4 sm:px-6 w-full">
        {/* Back Link */}
        <div className="mb-8">
          <Link
            href="/#insights"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-gold hover:text-gold-hover font-semibold transition-colors"
          >
            <ArrowLeft size={16} />
            <span>Back to All Insights</span>
          </Link>
        </div>

        {/* Article Header */}
        <header className="mb-10 pb-8 border-b border-border">
          <div className="flex items-center gap-4 text-xs uppercase tracking-wider text-gold mb-4 font-medium">
            <span className="inline-flex items-center gap-1.5">
              <Calendar size={13} />
              {post.date}
            </span>
            <span>·</span>
            <span className="inline-flex items-center gap-1.5">
              <Clock size={13} />
              {post.readTime}
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-white tracking-tight leading-tight mb-6">
            {post.title}
          </h1>

          <p className="text-lg sm:text-xl text-body font-sans leading-relaxed border-l-2 border-gold pl-4 italic">
            {post.excerpt}
          </p>
        </header>

        {/* Article Body */}
        <article className="prose prose-invert max-w-none space-y-6 text-[#D1CCC5] text-base sm:text-lg font-sans leading-relaxed">
          {post.body.map((paragraph, idx) => (
            <p key={idx} className="leading-relaxed">
              {paragraph}
            </p>
          ))}
        </article>

        {/* Legal Disclaimer Box */}
        <div className="mt-12 p-6 bg-[#111114] border border-border rounded-[2px] text-xs text-body/80 space-y-2">
          <p className="font-semibold text-gold uppercase tracking-wider">
            General Legal Information Notice
          </p>
          <p>
            The contents of this note are for informational and academic purposes only, formulated
            in accordance with Bar Council of India guidelines. Nothing contained herein constitutes
            formal legal advice or establishes an attorney–client relationship. Court rulings and
            statutory interpretations vary based on the specific facts of individual cases.
          </p>
        </div>

        {/* Author / Consultation Callout */}
        <div className="mt-12 p-8 bg-[#060607] border border-gold/40 rounded-[2px] flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <span className="text-xs uppercase tracking-eyebrow text-gold font-medium block mb-1">
              CHAMBERS OF
            </span>
            <h2 className="text-2xl font-serif text-white">
              {siteConfig.name}, Advocate
            </h2>
            <p className="text-xs text-body mt-1">
              {siteConfig.bench} · {siteConfig.court}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
            <a
              href={`tel:${siteConfig.phone}`}
              className="w-full sm:w-auto px-6 py-3 border border-border hover:border-gold text-white text-xs uppercase tracking-wider font-semibold rounded-[2px] flex items-center justify-center gap-2 transition-colors"
            >
              <PhoneCall size={14} className="text-gold" />
              <span>Call Chamber</span>
            </a>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-6 py-3 bg-gold hover:bg-gold-hover text-black text-xs uppercase tracking-wider font-bold rounded-[2px] flex items-center justify-center gap-2 transition-colors shadow-lg"
            >
              <MessageSquare size={14} />
              <span>Discuss Matter</span>
            </a>
          </div>
        </div>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
