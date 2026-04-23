"use client";

import React from 'react';
import { Section } from '../shared/Section';
import { Container } from '../shared/Container';
import { Typography } from '../shared/Typography';
import { GalleryCard } from '../ui/GalleryCard';
import { Button } from '../ui/Button';

const galleryImages = [
    { src: '/images/gallery/gallery-1.png', alt: 'Classroom teaching' },
    { src: '/images/gallery/gallery-2.png', alt: 'Front office' },
    { src: '/images/gallery/gallery-3.png', alt: 'Student celebration' },
    { src: '/images/gallery/gallery-4.png', alt: 'Mentoring session' } // Assuming a 4th might exist or fallback
];

export const GalleryPreview = () => {
    return (
        <Section className="bg-bg-primary">
            <Container>
                <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-20">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-primary/10 border border-accent-primary/20 text-accent-primary text-[10px] uppercase tracking-widest font-bold mb-6">
                        Campus Culture
                    </div>
                    <Typography variant="h2" className="mb-6 tracking-tighter">Inside VDCC</Typography>
                    <Typography variant="body" className="mb-10 opacity-80">
                        Vibrant classrooms, peaceful study zones, and a culture of academic celebration.
                    </Typography>
                    <Button href="/gallery" variant="outline" size="sm">
                        View Full Gallery
                    </Button>
                </div>

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                    {/* Hero large image spanning 2 cols/2 rows on md */}
                    <div className="col-span-2 row-span-2">
                        <GalleryCard 
                            imageSrc={galleryImages[0].src} 
                            altText={galleryImages[0].alt}
                            aspectRatio="square"
                            className="h-full rounded-[3rem]"
                        />
                    </div>
                    
                    {/* Standard images */}
                    <div className="col-span-2">
                        <GalleryCard 
                            imageSrc={galleryImages[1].src} 
                            altText={galleryImages[1].alt}
                            aspectRatio="video"
                            className="rounded-[3rem]"
                        />
                    </div>
                    
                    <div className="col-span-1">
                        <GalleryCard 
                            imageSrc={galleryImages[2].src} 
                            altText={galleryImages[2].alt}
                            aspectRatio="square"
                            delay={0.1}
                            className="rounded-[3rem]"
                        />
                    </div>
                    
                    <div className="col-span-1">
                        <GalleryCard 
                            imageSrc={galleryImages[3].src} 
                            altText={galleryImages[3].alt}
                            aspectRatio="square"
                            delay={0.2}
                            className="rounded-[3rem]"
                        />
                    </div>
                </div>
            </Container>
        </Section>
    );
};
