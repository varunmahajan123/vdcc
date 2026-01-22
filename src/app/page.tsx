import React from 'react';
import { Hero } from '@/components/hero/Hero';
import { WhyUs } from '@/components/why-us/WhyUs';
import { CoursesSnapshot } from '@/components/courses/CoursesSnapshot';
import { Stats } from '@/components/stats/Stats';
import { Testimonials } from '@/components/testimonials/Testimonials';
import { CallToAction } from '@/components/cta/CallToAction';

export default function Home() {
  return (
    <main>
      <Hero />
      <WhyUs />
      <CoursesSnapshot />
      <Stats />
      <Testimonials />
      <CallToAction />
    </main>
  );
}
