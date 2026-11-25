import React from "react";
import Link from "next/link";
import { posts } from "@/data/posts";
import SectionHeading from "./SectionHeading";
import { ArrowRight } from "lucide-react";

export default function InsightsSection() {
  return (
    <section id="insights" className="py-16 md:py-24 bg-[#0A0A0B] border-t border-border">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <SectionHeading
            eyebrow="INSIGHTS"
            title="Legal notes and procedural guides"
            subtitle="Concise commentary on criminal law, constitutional remedies, and courtroom procedure before the Allahabad High Court."
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {posts.map((post) => (
            <article
              key={post.slug}
              className="bg-[#060607] border border-border p-6 sm:p-8 rounded-[2px] flex flex-col justify-between hover:border-gold/60 transition-all duration-300 hover:-translate-y-1 group"
            >
              <div>
                {/* Date & Read time */}
                <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-gold mb-3 font-medium">
                  <span>{post.date}</span>
                  <span>·</span>
                  <span>{post.readTime}</span>
                </div>

                {/* Post Title */}
                <h3 className="text-xl font-serif text-white group-hover:text-gold transition-colors leading-snug mb-3">
                  <Link href={`/insights/${post.slug}`}>
                    {post.title}
                  </Link>
                </h3>

                {/* Excerpt */}
                <p className="text-body text-xs sm:text-sm font-sans leading-relaxed mb-6">
                  {post.excerpt}
                </p>
              </div>

              {/* Read Link */}
              <div className="pt-4 border-t border-border/50">
                <Link
                  href={`/insights/${post.slug}`}
                  className="text-xs uppercase tracking-widest text-gold hover:text-gold-hover font-semibold inline-flex items-center gap-2 group-hover:gap-3 transition-all"
                >
                  <span>Read Article</span>
                  <ArrowRight size={14} />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
