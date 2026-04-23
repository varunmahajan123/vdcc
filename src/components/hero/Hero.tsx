"use client";

import React from 'react';
import { Section } from '../shared/Section';
import { Container } from '../shared/Container';
import { Typography } from '../shared/Typography';
import { Button } from '../ui/Button';
import { brand } from '@/config/brand';
import { motion } from 'framer-motion';

export const Hero = () => {
    const waLink = `https://wa.me/91${brand.contact.primaryPhone.replace(/\D/g, "")}`;
    const callLink = `tel:+91${brand.contact.primaryPhone.replace(/\D/g, "")}`;

    return (
        <Section className="relative min-h-[100vh] flex items-center justify-center overflow-hidden py-24 bg-bg-primary">
            {/* Background elements */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent-primary/10 rounded-full blur-[150px] opacity-60" />
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-accent-secondary/5 rounded-full blur-[120px] opacity-40" />
                <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
            </div>

            <Container className="relative z-20 w-full">
                <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        className="flex flex-col items-center"
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-accent-primary font-bold tracking-[0.2em] uppercase text-[8px] sm:text-[9px] mb-5 shadow-xl backdrop-blur-sm">
                            <span className="w-1.5 h-1.5 rounded-full bg-accent-primary animate-pulse" />
                            {brand.tagline}
                        </div>
                        <h1 className="text-[2.75rem] leading-[1] sm:text-5xl md:text-7xl lg:text-[5.5rem] font-heading font-black text-white tracking-tighter mb-4">
                            Securing Futures<br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-primary via-white to-accent-secondary">
                                Through Excellence.
                            </span>
                        </h1>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <p className="text-sm md:text-base text-text-secondary leading-snug font-medium opacity-80 mb-8 max-w-lg mx-auto px-4">
                            Amritsar's most trusted institute for rigorous mentoring and elite concept learning.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-3 w-full sm:w-auto px-4 sm:px-0"
                    >
                        <Button href={callLink} className="w-full sm:w-[180px] h-12 text-xs shadow-[0_5px_20px_rgba(56,189,248,0.2)] hover:shadow-[0_8px_25px_rgba(56,189,248,0.3)] hover:-translate-y-0.5 transition-all duration-300 rounded-xl">
                            Enroll Now
                        </Button>
                        <Button target="_blank" href={waLink} variant="outline" className="w-full sm:w-[180px] h-12 text-xs backdrop-blur-md hover:-translate-y-0.5 transition-all duration-300 rounded-xl">
                            WhatsApp Us
                        </Button>
                    </motion.div>
                </div>
            </Container>
        </Section>
    );
};
