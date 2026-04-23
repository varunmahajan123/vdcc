"use client";

import React from 'react';
import { Section } from '../shared/Section';
import { Container } from '../shared/Container';
import { Typography } from '../shared/Typography';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

export const FounderSection = () => {
    return (
        <Section className="bg-bg-primary overflow-hidden relative py-10 md:py-12">
            {/* Background cinematic effects */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none opacity-[0.02]" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
            
            <Container className="relative z-10 max-w-4xl">
                <div className="flex flex-col items-center justify-center text-center">
                    
                    {/* Founder Image (Circular & Glowing, Increased Size) */}
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        className="relative mb-4 sm:mb-5"
                    >
                        <div className="absolute inset-0 bg-accent-primary/20 rounded-full blur-2xl scale-110" />
                        <div className="relative w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 rounded-full overflow-hidden border-[3px] border-accent-primary/30 shadow-[0_0_50px_rgba(56,189,248,0.3)] ring-1 ring-white/10">
                            <img 
                                src="/images/about/founder.jpg" 
                                alt="Mrs. Bharti Mahajan - Founder VDCC" 
                                className="w-full h-full object-cover object-top grayscale-[0.1] hover:grayscale-0 transition-all duration-700"
                                onError={(e) => {
                                    (e.target as HTMLImageElement).src = ''; 
                                    (e.target as HTMLImageElement).className = "w-full h-full bg-bg-tertiary";
                                }}
                            />
                        </div>
                    </motion.div>

                    {/* Content (Tightened Spacing) */}
                    <motion.div 
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                        className="flex flex-col items-center max-w-2xl mx-auto"
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-primary/10 border border-accent-primary/20 text-accent-primary text-[10px] uppercase tracking-widest font-bold mb-3 shadow-sm">
                            From the Founder’s Desk
                        </div>
                        
                        <Quote className="text-accent-primary opacity-20 w-6 h-6 mb-3" />
                        
                        <Typography variant="h4" className="text-white font-medium leading-relaxed mb-4 tracking-tight italic opacity-90">
                            "Education is not just about scoring marks; it is about building a foundation so strong that no challenge seems insurmountable."
                        </Typography>
                        
                        <div className="flex flex-col items-center">
                            <Typography variant="h4" className="mb-0.5 text-white font-black tracking-tight text-lg sm:text-xl">Mrs. Bharti Mahajan</Typography>
                            <div className="text-accent-primary font-bold uppercase tracking-[0.2em] text-[9px] sm:text-[10px]">Founder & Chief Mentor</div>
                        </div>
                    </motion.div>

                </div>
            </Container>
        </Section>
    );
};
