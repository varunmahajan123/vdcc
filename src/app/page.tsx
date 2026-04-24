import React from 'react';
import { createPageMetadata } from '@/config/metadata';

export const metadata = createPageMetadata({
  title: "Best Coaching Centre in Amritsar | VDCC — Varun Dev Coaching Centre",
  description: "Amritsar's most trusted coaching institute for Class 1 to 10. Concept-based learning, small batches, experienced faculty. 10,000+ students. Enroll at VDCC today.",
  path: "/",
});

import { Hero } from '@/components/hero/Hero';
import { WhyUs } from '@/components/why-us/WhyUs';
import { ResultsCarousel } from '@/components/home/ResultsCarousel';
import { CoursesSnapshot } from '@/components/courses/CoursesSnapshot';
import { FounderSection } from '@/components/home/FounderSection';
import { Testimonials } from '@/components/testimonials/Testimonials';
import { GalleryPreview } from '@/components/home/GalleryPreview';
import { CallToAction } from '@/components/cta/CallToAction';

export default function Home() {
  return (
    <main>
      <Hero />
      <WhyUs />
      <ResultsCarousel />
      <CoursesSnapshot />
      <FounderSection />
      <Testimonials />
      <GalleryPreview />
      <CallToAction />
    </main>
  );
}
