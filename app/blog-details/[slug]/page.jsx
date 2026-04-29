'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, User, Tag } from 'lucide-react';
import Link from 'next/link';
import { useParams } from 'next/navigation';

const CMS_URL = "https://cms.mstblockchain.com";

function SectionFade({ children, className = '' }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.22 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function DynamicBlogDetailsPage() {
  const params = useParams();
  const slug = params.slug;
  
  const [blogData, setBlogData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlogDetails = async () => {
      try {
        // Fetch blog by slug with cache disabled to prevent stale Next.js cache
        const response = await fetch(`${CMS_URL}/api/blogs?filters[slug][$eq]=${slug}&populate=*`, { cache: 'no-store' });
        const result = await response.json();

        if (result.data && result.data.length > 0) {
          setBlogData(result.data[0]);
        } else {
          // Fallback, try by ID if slug match fails (in case the ID was passed instead)
          const idResponse = await fetch(`${CMS_URL}/api/blogs/${slug}?populate=*`, { cache: 'no-store' });
          if (idResponse.ok) {
              const idResult = await idResponse.json();
              if (idResult.data) {
                  setBlogData(idResult.data);
              } else {
                  setError("Blog post not found.");
              }
          } else {
              setError("Blog post not found.");
          }
        }
      } catch (err) {
        console.error("Failed to fetch blog details:", err);
        setError("An error occurred while fetching the blog.");
      } finally {
        setLoading(false);
      }
    };

    if (slug) {
      fetchBlogDetails();
    }
  }, [slug]);

  if (loading) {
    return (
      <main className="bg-white min-h-screen flex items-center justify-center">
        <div className="w-16 h-16 border-4 border-red-500 border-t-transparent rounded-full animate-spin"></div>
      </main>
    );
  }

  if (error || !blogData) {
    return (
      <main className="bg-white text-black min-h-screen flex flex-col items-center justify-center p-6">
        <h1 className="text-3xl font-bold mb-4">Oops!</h1>
        <p className="text-xl text-gray-600 mb-8">{error || "Blog post not found."}</p>
        <Link href="/BlogsPage" className="px-6 py-3 bg-red-500 text-white rounded-full font-bold uppercase tracking-wider hover:bg-black transition-colors">
          Back to Blogs
        </Link>
      </main>
    );
  }

  // Format Data safely handling potential CMS object/array types
  const headingStr = typeof blogData.heading === 'object' ? JSON.stringify(blogData.heading) : (blogData.heading || '');
  const categoryStr = typeof blogData.category === 'object' ? (blogData.category?.name || 'Updates') : (blogData.category || 'Updates');
  const createdAtStr = blogData.createdAt ? new Date(blogData.createdAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }) : 'Unknown Date';
  const description = blogData.description;
  const metaKeywords = blogData.metaKeywords;

  const imageUrl = blogData.cardImage?.url ? `${CMS_URL}${blogData.cardImage.url}` : '/voting/Decentralized Voting.jpg';
  
  // Parse keywords for tags robustly
  let tags = [];
  if (Array.isArray(metaKeywords)) {
    tags = metaKeywords;
  } else if (typeof metaKeywords === 'string') {
    tags = metaKeywords.split(/[\n,]+/).filter(tag => tag.trim() !== '');
  }

  // Determine if this is a custom HTML embed (contains style tags)
  const isCustomHtml = typeof description === 'string' && description.includes('<style>');

  // Process the HTML to prevent CSS bleeding and remove redundant navs
  const processHtml = (html) => {
    if (!html) return "";
    let processed = typeof html === 'string' ? html : JSON.stringify(html);
    
    if (isCustomHtml) {
      // Remove any custom navbars embedded in the raw HTML to prevent double navbars
      processed = processed.replace(/<nav\b[^>]*>[\s\S]*?<\/nav>/gi, '');
      
      // Scope the global CSS to .custom-blog-wrapper so it doesn't break the Next.js footer or layout
      processed = processed
        .replace(/:root/g, '.custom-blog-wrapper')
        .replace(/body\s*\{/g, '.custom-blog-wrapper {')
        .replace(/html\s*\{/g, '.custom-blog-wrapper {')
        .replace(/\*,\s*\*\:\:before,\s*\*\:\:after\s*\{[^}]+\}/g, '');
    }
    
    return processed;
  };

  const finalHtml = processHtml(description);

  return (
    <main className="bg-white text-black min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden px-6 pt-40 pb-16 md:px-16 md:pt-56 md:pb-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,45,45,0.10),transparent_35%),radial-gradient(circle_at_top_right,rgba(0,0,0,0.05),transparent_30%)]" />
        <SectionFade className="relative mx-auto max-w-[90rem] space-y-6">

          {/* Title */}
          <h1 className="bungee-regular text-3xl sm:text-4xl md:text-5xl leading-tight tracking-tight text-black font-extrabold uppercase mb-5">
            {headingStr}
          </h1>

          {/* Author + Meta */}
          <div className="flex flex-wrap items-center gap-4 text-sm text-black/60 mb-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center text-xs">
                <User size={14} className="text-white" />
              </div>
              <span className="text-black font-semibold">
                Masterstroke Technosoft
              </span>
            </div>

            <span className="text-black/30">|</span>

            <div className="flex items-center gap-2">
              <Calendar size={16} className="text-[#ff2d2d]" />
              <span>{createdAtStr}</span>
            </div>

            <span className="text-black/30">|</span>

            <span className="bg-[#ff2d2d]/10 text-[#ff2d2d] px-3 py-1 rounded-full text-xs font-semibold uppercase">
              {categoryStr}
            </span>
          </div>
        </SectionFade>
      </section>

      {/* Blog Image */}
      <section className="mx-auto w-full max-w-4xl px-6 pb-12 md:px-16">
        <SectionFade>
          <div className="relative w-full aspect-[16/9] md:aspect-[21/9] max-h-[450px] overflow-hidden rounded-2xl bg-gray-100 border border-black/5 shadow-sm">
            <Image
              src={imageUrl}
              alt={headingStr || "Blog Image"}
              fill
              sizes="(max-width: 900px) 100vw, 100rem"
              className="object-cover object-center"
              unoptimized={imageUrl.startsWith('http')}
            />
          </div>
        </SectionFade>
      </section>

      {/* Content */}
      <section className={`mx-auto pb-20 ${isCustomHtml ? 'w-full' : 'max-w-4xl px-6 md:px-16'}`}>
        <SectionFade>
          {/* Tags (Only show for standard blogs to avoid layout clash on custom pages) */}
          {tags.length > 0 && !isCustomHtml && (
            <div className="text-black/50 mb-8 flex flex-wrap gap-2 items-center">
              <Tag size={14} className="text-[#ff2d2d]" />
              {tags.map((tag, idx) => (
                <span key={idx} className="bg-gray-100 px-3 py-1 rounded-md text-xs font-medium text-gray-700">
                  {tag}
                </span>
              ))}
            </div>
          )}

          {/* Dynamic HTML Content */}
          <div 
            className={isCustomHtml 
              ? "custom-blog-wrapper w-full" 
              : "blog-content-wrapper prose prose-lg max-w-none prose-headings:bungee-regular prose-headings:font-bold prose-headings:uppercase prose-h1:text-3xl prose-h2:text-2xl prose-h3:text-xl prose-h4:text-lg prose-p:text-gray-700 prose-p:leading-[1.8] prose-p:mb-6 prose-li:mb-2 prose-p:text-justify prose-a:text-red-500 prose-img:rounded-xl space-y-6"
            }
            dangerouslySetInnerHTML={{ __html: finalHtml }}
          />

          {/* Navigation */}
          <div className="mt-16 pt-8 border-t border-black/10">
            <Link href="/BlogsPage">
              <button className="flex items-center gap-2 px-8 py-4 rounded-full bg-[#ff2d2d] text-white font-bold uppercase tracking-wider transition-all duration-300 transform hover:scale-105 hover:bg-black shadow-lg hover:shadow-xl">
                <ArrowLeft size={18} />
                Back to Blogs
              </button>
            </Link>
          </div>
        </SectionFade>
      </section>
    </main>
  );
}
