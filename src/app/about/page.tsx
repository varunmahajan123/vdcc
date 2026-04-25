import React from 'react';
import { createPageMetadata } from '@/config/metadata';

export const metadata = {
  title: 'About VDCC | 25 Years of Academic Excellence in Amritsar',
  description: 'Founded by Mrs. Bharti Mahajan in 1999, VDCC has guided 10,000+ students. Learn about our concept-based teaching philosophy and experienced faculty.',
};

import { AboutHero } from '@/components/about/AboutHero';
import { StorySection } from '@/components/about/StorySection';
import { FounderSection } from '@/components/home/FounderSection';
import { FacultyGrid } from '@/components/about/FacultyGrid';
import { Timeline } from '@/components/about/Timeline';
import { WhyUs } from '@/components/why-us/WhyUs';
import { GalleryPreview } from '@/components/home/GalleryPreview';
import { CallToAction } from '@/components/cta/CallToAction';

export default function AboutPage() {
    return (
        <main>
            <AboutHero />
            <StorySection />
            <FounderSection />
            
            {/* The Mission & Values utilizing the Homepage WhyUs framework which maps perfectly */}
            <div className="relative">
                <div className="absolute top-10 left-0 right-0 text-center z-20 pointer-events-none hidden lg:block">
                    {/* A visual marker to bridge sections */}
                    <div className="inline-block px-6 py-2 rounded-full bg-accent-primary text-white font-bold tracking-widest text-sm shadow-xl shadow-accent-primary/30">
                        OUR CORE METHODOLOGY
                    </div>
                </div>
                <WhyUs />
            </div>

            <FacultyGrid />
            <Timeline />
            <GalleryPreview />
            <CallToAction />
        </main>
    );
}
