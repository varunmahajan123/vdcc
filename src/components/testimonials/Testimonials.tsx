"use client";

import React from 'react';
import { Section } from '../shared/Section';
import { Container } from '../shared/Container';
import { Typography } from '../shared/Typography';
import { motion } from 'framer-motion';
import { MessageSquareQuote } from 'lucide-react';

export const Testimonials = () => {
    return (
        <Section className="bg-bg-primary">
            <Container>
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-secondary/10 border border-accent-secondary/20 text-accent-secondary text-[10px] uppercase tracking-widest font-bold mb-6">
                        Community Trust
                    </div>
                    <Typography variant="h2" className="tracking-tighter mb-6">Voices of Excellence.</Typography>
                    <Typography variant="body" className="opacity-80">
                        Honest feedback and success stories directly from our parents and students.
                    </Typography>
                </div>
                
                <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    className="text-center py-24 px-10 border border-white/5 rounded-[3rem] bg-bg-secondary relative overflow-hidden flex flex-col items-center justify-center max-w-4xl mx-auto shadow-2xl"
                >
                    <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '30px 30px' }}></div>
                    
                    <div className="w-24 h-24 bg-accent-primary/10 rounded-full flex items-center justify-center mb-10 text-accent-primary shadow-[0_0_50px_rgba(56,189,248,0.1)]">
                        <MessageSquareQuote size={48} />
                    </div>
                    <Typography variant="h3" className="mb-6 tracking-tight text-white font-black">Authentic Feedback Coming Soon.</Typography>
                    <Typography variant="body" className="max-w-md mx-auto text-text-secondary leading-relaxed opacity-70">
                        We are currently collecting verified feedback from our community. We strictly prohibit the use of fabricated quotes to maintain 100% authenticity.
                    </Typography>
                </motion.div>
            </Container>
        </Section>
    );
};
