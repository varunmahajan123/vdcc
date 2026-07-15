import React from 'react';
import Script from 'next/script';
import { createPageMetadata } from '@/config/metadata';
import { ExcellenceHub } from '@/components/why-vdcc/ExcellenceHub';
import { faqItems } from '@/data/faq';

export const metadata = createPageMetadata({
    title: "Why VDCC | Concept-Based Coaching in Amritsar — Playpen to Class 10",
    description: "Discover how VDCC's concept-based learning, small batches, and personal mentoring help students from Playpen to Class 10 build real academic confidence. Amritsar's trusted coaching institute since 1999.",
    path: "/why-vdcc",
});

/* ─────────────────────────────────────────────
   FAQPage JSON-LD — matches Google's schema spec
   ───────────────────────────────────────────── */
function FaqSchema() {
    const faqJsonLd = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqItems.map((item) => ({
            "@type": "Question",
            "name": item.question,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": item.answer,
            },
        })),
    };

    return (
        <Script
            id="faq-schema"
            type="application/ld+json"
            strategy="beforeInteractive"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
    );
}

export default function WhyVdccPage() {
    return (
        <>
            <FaqSchema />
            <main>
                {/* Page Hero — lightweight, text-focused header */}
                <section className="bg-[#0a0a0a] pt-32 pb-14 md:pt-36 md:pb-16 px-4 relative overflow-hidden">
                    {/* Background glow */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-[#2563EB]/8 rounded-full blur-[120px] pointer-events-none" />

                    <div className="max-w-4xl mx-auto text-center relative z-10">
                        <h1 className="font-heading text-3xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1] mb-5">
                            The VDCC<br />
                            <span className="bg-gradient-to-r from-[#2563EB] via-[#06b6d4] to-[#38bdf8] bg-clip-text text-transparent">
                                Excellence Hub
                            </span>
                        </h1>
                        <p className="text-[#9ca3af] text-[16px] md:text-[18px] leading-relaxed max-w-2xl mx-auto">
                            A closer look at how we teach, why families trust us, and what makes concept-based coaching at VDCC different from anything else in Amritsar.
                        </p>
                    </div>
                </section>

                <ExcellenceHub />
            </main>
        </>
    );
}
