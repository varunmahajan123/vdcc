import React from 'react';
import { createPageMetadata } from '@/config/metadata';

export const metadata = createPageMetadata({
  title: "VDCC Campus Gallery | Classrooms, Events & More | Amritsar",
  description: "Explore VDCC's vibrant campus, classrooms, result celebrations, and academic culture. Amritsar's premier coaching institute since 1999.",
  path: "/gallery",
});

import { Section } from '@/components/shared/Section';
import { Container } from '@/components/shared/Container';
import { Typography } from '@/components/shared/Typography';
import { GallerySystem } from '@/components/gallery/GallerySystem';
import { InstagramFeed } from '@/components/gallery/InstagramFeed';
import { CallToAction } from '@/components/cta/CallToAction';

export default function GalleryPage() {
    return (
        <main>
            {/* Gallery Hero Component natively inline for cleaner DOM routing */}
            <Section className="relative bg-bg-primary pt-32 pb-16 overflow-hidden">
                {/* Background visual asset representing a glassmorphic lens */}
                <div className="absolute top-0 right-0 -mr-40 -mt-40 w-[600px] h-[600px] border border-white/5 rounded-full z-0" />
                <div className="absolute top-10 right-10 -mr-40 w-[500px] h-[500px] bg-accent-primary/5 rounded-full blur-[80px] pointer-events-none z-0" />
                
                <Container className="text-center md:text-left relative z-10 max-w-5xl">
                    <span className="inline-block px-4 py-1.5 rounded-full bg-accent-secondary/10 border border-accent-secondary/20 text-accent-secondary font-medium tracking-wide text-sm mb-6">
                        Inside Our Campus
                    </span>
                    <Typography variant="h1" className="mb-6 font-extrabold text-text-primary max-w-2xl">
                        A Culture of Academic Celebration
                    </Typography>
                    <Typography variant="body" className="text-lg md:text-xl text-text-secondary max-w-2xl">
                        Step inside the VDCC environment. Discover our modern infrastructure, immersive classrooms, and the vibrant life of our student community.
                    </Typography>
                </Container>
            </Section>

            <GallerySystem />
            <InstagramFeed />
            <CallToAction />
        </main>
    );
}
