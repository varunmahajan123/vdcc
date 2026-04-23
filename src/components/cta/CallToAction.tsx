"use client";

import React from 'react';
import { Section } from '../shared/Section';
import { Container } from '../shared/Container';
import { Typography } from '../shared/Typography';
import { Button } from '../ui/Button';
import { brand } from '@/config/brand';
import { motion } from 'framer-motion';

export const CallToAction = () => {
    const waLink = `https://wa.me/91${brand.contact.primaryPhone.replace(/\D/g, "")}`;
    const callLink1 = `tel:+91${brand.contact.primaryPhone.replace(/\D/g, "")}`;
    const callLink2 = `tel:+91${brand.contact.secondaryPhone.replace(/\D/g, "")}`;

    return (
        <Section className="bg-bg-primary overflow-hidden relative">
            {/* Dark gradient backdrop */}
            <div className="absolute inset-0 bg-bg-primary z-0" />
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-accent-primary/5 rounded-full blur-[140px] opacity-40 z-0" />
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-accent-secondary/5 rounded-full blur-[120px] opacity-30 z-0" />
            
            <Container className="relative z-10 max-w-5xl mx-auto">
                <motion.div 
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    className="bg-bg-secondary/40 backdrop-blur-3xl border border-white/5 rounded-[4rem] p-12 md:p-20 shadow-[0_40px_120px_rgba(0,0,0,0.6)] flex flex-col items-center text-center relative overflow-hidden"
                >
                    <div className="absolute inset-0 opacity-[0.02] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
                    
                    <div className="inline-flex items-center gap-3 px-5 py-2 mb-10 rounded-full bg-accent-primary/10 border border-accent-primary/20 text-accent-primary font-black tracking-[0.2em] uppercase text-[10px] sm:text-xs shadow-2xl">
                        <span className="w-2 h-2 rounded-full bg-accent-primary animate-pulse" />
                        Admissions Open 2026–27
                    </div>

                    <Typography variant="h2" className="mb-8 text-4xl md:text-6xl tracking-tighter leading-[0.95]">
                        Secure Your Child's<br />
                        <span className="text-white opacity-40">Academic Future Today.</span>
                    </Typography>
                    
                    <Typography variant="body" className="mb-12 max-w-2xl mx-auto text-lg md:text-xl text-text-secondary leading-relaxed opacity-80">
                        Limited seats available per batch. Contact us directly to schedule a counseling session or secure an enrollment slot immediately.
                    </Typography>
                    
                    <div className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto items-center justify-center">
                        <Button href={waLink} target="_blank" size="lg" className="w-full sm:w-auto px-12 h-16 text-base shadow-[0_15px_40px_rgba(56,189,248,0.2)]">
                            WhatsApp Us
                        </Button>
                        <Button href={callLink1} size="lg" variant="outline" className="w-full sm:w-auto px-12 h-16 text-base backdrop-blur-md">
                            Call Primary
                        </Button>
                    </div>

                    <div className="mt-12 flex items-center gap-6 text-[10px] font-black uppercase tracking-[0.2em] text-text-tertiary">
                        <div className="flex items-center gap-2">
                            <div className="w-1 h-1 rounded-full bg-accent-primary" />
                            Expert Mentoring
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-1 h-1 rounded-full bg-accent-primary" />
                            Limited Seats
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-1 h-1 rounded-full bg-accent-primary" />
                            Proven Results
                        </div>
                    </div>
                </motion.div>
            </Container>
        </Section>
    );
};
