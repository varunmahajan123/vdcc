"use client";

import React from 'react';
import { Section } from '../shared/Section';
import { Container } from '../shared/Container';
import { motion } from 'framer-motion';

export const AboutHero = () => {
    return (
        <Section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden pt-32 pb-20 bg-bg-primary">
            {/* Background cinematic effects */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-accent-primary/5 rounded-full blur-[140px] opacity-70" />
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-accent-secondary/5 rounded-full blur-[120px] opacity-40" />
                <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '60px 60px' }}></div>
            </div>

            <Container className="relative z-10 w-full">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="max-w-5xl mx-auto text-center"
                >
                    <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-accent-primary font-bold tracking-[0.2em] uppercase text-[10px] sm:text-xs mb-10 shadow-2xl backdrop-blur-md">
                        <span className="w-2 h-2 rounded-full bg-accent-primary animate-pulse" />
                        Excellence in Education Since 1999
                    </div>
                    
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-black text-text-primary leading-[1] tracking-tighter mb-10">
                        Nurturing Minds.<br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-primary via-white to-accent-secondary">
                            Building Futures.
                        </span>
                    </h1>

                    <p className="text-xl md:text-2xl text-text-secondary leading-relaxed max-w-3xl mx-auto font-medium opacity-80">
                        Amritsar's premier coaching institution dedicated to unlocking the academic potential of every student through rigorous mentorship and modern methodology.
                    </p>
                </motion.div>
            </Container>
        </Section>
    );
};
