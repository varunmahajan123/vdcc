import React from 'react';
import { Hero } from '@/components/hero/Hero';
import { Stats } from '@/components/stats/Stats';
import { FounderSection } from '@/components/home/FounderSection';
import { WhyUs } from '@/components/why-us/WhyUs';
import { ResultsCarousel } from '@/components/home/ResultsCarousel';
import { CoursesSnapshot } from '@/components/courses/CoursesSnapshot';
import { Testimonials } from '@/components/testimonials/Testimonials';
import { GalleryPreview } from '@/components/home/GalleryPreview';
import { CallToAction } from '@/components/cta/CallToAction';

export default function Home() {
  return (
    <main>
      <Hero />
      <Stats />
      <FounderSection />
      <WhyUs />
      <ResultsCarousel />
      <CoursesSnapshot />
      <Testimonials />
      <GalleryPreview />
      <CallToAction />
    </main>
  );
}
