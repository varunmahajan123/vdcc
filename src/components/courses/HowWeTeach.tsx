"use client";

import React from 'react';
import { Section } from '../shared/Section';
import { Container } from '../shared/Container';
import { Typography } from '../shared/Typography';
import { motion } from 'framer-motion';
import { Search, PenTool, BarChart3 } from 'lucide-react';

export const HowWeTeach = () => {
    return (
        <Section className="py-24 bg-bg-secondary">
            <Container>
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <span className="inline-block px-4 py-1.5 rounded-full bg-accent-secondary/10 border border-accent-secondary/20 text-accent-secondary font-medium text-sm mb-4">
                        Pedagogical Approach
                    </span>
                    <Typography variant="h2" className="mb-4">How We Teach</Typography>
                    <Typography variant="body">
                        Our three-pillar blueprint ensures students don't just consume information, but fully comprehend and retain it.
                    </Typography>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Step 1 */}
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="bg-bg-primary rounded-3xl p-8 border border-border text-center relative shadow-sm"
                    >
                        <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-bg-secondary border-4 border-bg-primary flex items-center justify-center font-heading font-bold text-accent-primary shadow-sm">
                            1
                        </div>
                        <div className="w-16 h-16 mx-auto bg-accent-primary/10 rounded-2xl flex items-center justify-center text-accent-primary mb-6 mt-4">
                            <Search size={32} />
                        </div>
                        <Typography variant="h4" className="mb-3">Conceptual Introduction</Typography>
                        <Typography variant="body" className="text-sm">
                            We break down complex topics into intuitive stories and real-world examples before ever touching the textbook.
                        </Typography>
                    </motion.div>

                    {/* Step 2 */}
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="bg-bg-primary rounded-3xl p-8 border border-border text-center relative shadow-sm"
                    >
                        <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-bg-secondary border-4 border-bg-primary flex items-center justify-center font-heading font-bold text-accent-primary shadow-sm">
                            2
                        </div>
                        <div className="w-16 h-16 mx-auto bg-accent-secondary/10 rounded-2xl flex items-center justify-center text-accent-secondary mb-6 mt-4">
                            <PenTool size={32} />
                        </div>
                        <Typography variant="h4" className="mb-3">Guided Practice</Typography>
                        <Typography variant="body" className="text-sm">
                            Intensive, doubt-clearing practice sessions within small batch sizes so nobody falls behind.
                        </Typography>
                    </motion.div>

                    {/* Step 3 */}
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="bg-bg-primary rounded-3xl p-8 border border-border text-center relative shadow-sm"
                    >
                        <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-bg-secondary border-4 border-bg-primary flex items-center justify-center font-heading font-bold text-accent-primary shadow-sm">
                            3
                        </div>
                        <div className="w-16 h-16 mx-auto bg-emerald-500/10 rounded-2xl flex items-center justify-center text-emerald-500 mb-6 mt-4">
                            <BarChart3 size={32} />
                        </div>
                        <Typography variant="h4" className="mb-3">Simulated Testing</Typography>
                        <Typography variant="body" className="text-sm">
                            Regular, rigorous mock testing to build examination temperament and pinpoint exact weaknesses.
                        </Typography>
                    </motion.div>
                </div>
            </Container>
        </Section>
    );
};
