"use client";

import React from 'react';
import { Section } from '../shared/Section';
import { Container } from '../shared/Container';
import { Typography } from '../shared/Typography';
import { Instagram } from 'lucide-react';
import { brand } from '@/config/brand';

export const InstagramFeed = () => {
    return (
        <Section className="py-24 bg-bg-secondary border-t border-border/50">
            <Container className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-tr from-[#FFDC80] via-[#F56040] to-[#C13584] text-white mb-6 shadow-lg shadow-[#E1306C]/20">
                    <Instagram size={32} />
                </div>
                
                <Typography variant="h2" className="mb-4">Follow {brand.shortName} Live</Typography>
                <Typography variant="body" className="mb-12 max-w-2xl mx-auto">
                    Stay updated with daily classroom highlights, student achievements, and study tips directly on our official Instagram feed.
                </Typography>

                {/* 
                    This is the grid placeholder for integrating an actual Instagram API embedded feed later, 
                    OR using a lightweight static grid that links out.
                */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto opacity-70 hover:opacity-100 transition-opacity">
                    {[1, 2, 3, 4].map((item) => (
                        <a 
                            key={item} 
                            href={brand.social?.instagram || "#"}
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="aspect-square bg-bg-primary rounded-xl overflow-hidden border border-border group relative block shadow-sm"
                        >
                            <img 
                                src={`/images/gallery/gallery-${item}.png`} 
                                alt={`Instagram post ${item}`} 
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 blur-[2px] group-hover:blur-none grayscale group-hover:grayscale-0"
                                onError={(e) => {
                                    (e.target as HTMLImageElement).src = ''; 
                                    (e.target as HTMLImageElement).className = "w-full h-full bg-bg-tertiary";
                                }}
                            />
                            <div className="absolute inset-0 flex items-center justify-center bg-bg-primary/40 opacity-0 group-hover:opacity-100 transition-opacity">
                                <Instagram className="text-white drop-shadow-md" size={32} />
                            </div>
                        </a>
                    ))}
                </div>

                <div className="mt-10">
                    <a 
                        href={brand.social?.instagram || "#"}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 font-semibold text-text-primary hover:text-[#E1306C] transition-colors bg-bg-primary px-8 py-3 rounded-full border border-border shadow-sm"
                    >
                        <Instagram size={18} /> @vdcc__official
                    </a>
                </div>
            </Container>
        </Section>
    );
};
