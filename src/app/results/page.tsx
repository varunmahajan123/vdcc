import React from 'react';
import { createPageMetadata } from '@/config/metadata';

export const metadata = {
  title: 'Student Results 2025-26 | VDCC — Varun Dev Coaching Centre Amritsar',
  description: 'VDCC Class 10 Board Results 2025: Rahat 97%, Daivik 96%, Ritika 96%, Mehakdeep 96% and 20+ toppers. Real students, verified results. Admissions open for 2026-27.',
  openGraph: {
    title: 'VDCC Results — Amritsar Class 10 Toppers 2025',
    description: 'See our verified Class 10 board results. Top scorers trained at Varun Dev Coaching Centre, Amritsar.',
  }
};

import { ResultsGallery } from '@/components/results/ResultsGallery';
import { brand } from '@/config/brand';

export default function ResultsPage() {
    const waLink = `https://wa.me/91${brand.contact.primaryPhone.replace(/\D/g, "")}?text=${encodeURIComponent("Hello! I saw the amazing results and I am interested in enrolling my child for the upcoming batch.")}`;

    return (
        <main className="bg-[#0a0a0a]">
            {/* Page Hero */}
            <section className="pt-32 pb-16 px-4">
                <div className="max-w-4xl mx-auto text-center">
                    <span className="inline-block text-[13px] font-bold tracking-[0.1em] uppercase text-[#2563EB] mb-5">
                        VDCC Result Hall of Fame
                    </span>
                    <h1 className="text-3xl md:text-5xl font-black text-white tracking-tight leading-tight mb-4">
                        Where Action Speaks<br />Louder Than Words
                    </h1>
                    <p className="text-[15px] md:text-base text-[#9ca3af] font-medium max-w-lg mx-auto">
                        Consistent toppers. Real results. Zero fabrication.
                    </p>
                </div>
            </section>

            {/* Results Gallery */}
            <ResultsGallery />

            {/* Bottom CTA */}
            <section className="py-20 px-4 border-t border-[#1f1f1f]">
                <div className="max-w-2xl mx-auto text-center">
                    <h2 className="text-2xl md:text-4xl font-black text-white tracking-tight mb-4">
                        Your Child Could Be Here Next Year.
                    </h2>
                    <p className="text-[#9ca3af] text-[15px] mb-8">
                        Don't leave their development to chance. Secure an enrollment slot with Amritsar's most trusted faculty today.
                    </p>
                    <a
                        href={waLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center w-full sm:w-auto bg-[#25D366] text-white font-bold text-sm rounded-md px-8 py-3.5 hover:bg-[#128C7E] active:scale-[0.98] transition-all duration-200"
                    >
                        Message Us on WhatsApp
                    </a>
                    <p className="mt-4 text-[12px] text-[#6b7280] tracking-widest uppercase font-semibold">
                        Immediate Response Guarantee
                    </p>
                </div>
            </section>
        </main>
    );
}
