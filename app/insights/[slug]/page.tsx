import React from "react";
import { notFound } from "next/navigation";
import { posts } from "@/data/posts";
import { siteConfig } from "@/data/site";
import InsightArticleContent from "@/components/InsightArticleContent";
import type { Metadata } from "next";

interface Props {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export function generateMetadata({ params }: Props): Metadata {
  const post = posts.find((p) => p.slug === params.slug);
  if (!post) {
    return { title: "Article Not Found | Advocate Naman Mishra" };
  }

  return {
    title: `${post.title} | Advocate ${siteConfig.name}`,
    description: post.excerpt,
    openGraph: {
      title: `${post.title} | Advocate ${siteConfig.name}`,
      description: post.excerpt,
      type: "article",
    },
  };
}

export default function InsightPost({ params }: Props) {
  const post = posts.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  return <InsightArticleContent post={post} />;
}
