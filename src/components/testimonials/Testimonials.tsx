"use client";

import React from 'react';
import { Section } from '../shared/Section';
import { Container } from '../shared/Container';
import { Typography } from '../shared/Typography';
import { motion } from 'framer-motion';
import { Star, ExternalLink, Users, GraduationCap, Award } from 'lucide-react';
import Link from 'next/link';

export const Testimonials = () => {
    return (
        <Section className="bg-bg-primary">
            <Container>
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-secondary/10 border border-accent-secondary/20 text-accent-secondary text-[10px] uppercase tracking-widest font-bold mb-6">
                        Community Trust
                    </div>
                    <Typography variant="h2" className="tracking-tighter mb-0">Trusted by 10,000+ Families in Amritsar.</Typography>
                    <div className="w-[40px] h-[3px] bg-[#2563EB] rounded-[2px] mx-auto mt-[10px] mb-6" />
                    <Typography variant="body" className="opacity-80">
                        We let our results do the talking. Check our verified Google reviews to hear directly from parents who've trusted VDCC with their child's education.
                    </Typography>
                </div>
                
                <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    className="text-center py-20 px-8 md:px-12 border border-white/5 rounded-[3rem] bg-bg-secondary relative overflow-hidden flex flex-col items-center justify-center max-w-4xl mx-auto shadow-2xl"
                >
                    <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '30px 30px' }}></div>
                    
                    <div className="flex gap-1 mb-8 text-[#FFD700] z-10">
                        {[...Array(5)].map((_, i) => (
                            <Star key={i} size={40} fill="currentColor" />
                        ))}
                    </div>
                    
                    <Typography variant="h3" className="mb-8 tracking-tight text-white font-black text-3xl md:text-4xl z-10">
                        Discover What Parents Are Saying
                    </Typography>
                    
                    <Link 
                        href="https://google.com/search?q=VDCC+Amritsar" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white text-black font-bold hover:bg-white/90 transition-colors duration-300 shadow-[0_0_40px_rgba(255,255,255,0.15)] z-10 mb-16"
                    >
                        Read Our Google Reviews
                        <ExternalLink size={18} />
                    </Link>

                </motion.div>
            </Container>
        </Section>
    );
};
