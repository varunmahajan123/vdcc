"use client";

import React from 'react';
import { Section } from '../shared/Section';
import { Container } from '../shared/Container';
import { Typography } from '../shared/Typography';
import { motion } from 'framer-motion';

const milestones = [
    {
        year: "1999",
        title: "The Foundation",
        description: "Started with a vision to provide quality education and personal mentoring to local students."
    },
    {
        year: "2005",
        title: "Expanding Horizons",
        description: "Introduced specialized batches for secondary board exams, cementing our reputation for exceptional results."
    },
    {
        year: "2015",
        title: "Modern Infrastructure",
        description: "Upgraded our teaching facilities to include tech-enabled classrooms while maintaining our strict small-batch philosophy."
    },
    {
        year: "Present",
        title: "10,000+ Success Stories",
        description: "Celebrating over two decades of transformative education and continuing to guide the next generation of leaders."
    }
];

export const Timeline = () => {
    return (
        <Section className="bg-bg-primary overflow-hidden">
            <Container className="max-w-5xl">
                <div className="text-center mb-24">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-primary/10 border border-accent-primary/20 text-accent-primary text-[10px] uppercase tracking-widest font-bold mb-6">
                        Our History
                    </div>
                    <Typography variant="h2" className="tracking-tighter">A Legacy Built on Trust</Typography>
                </div>

                <div className="relative">
                    {/* The vertical tracking line */}
                    <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-[2px] bg-white/5 -translate-x-1/2 rounded-full overflow-hidden">
                        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-accent-primary via-accent-secondary to-transparent" />
                    </div>
                    
                    {milestones.map((milestone, index) => (
                        <div key={index} className="relative flex flex-col md:flex-row items-center justify-between mb-24 last:mb-0">
                            
                            {/* Left Side Content */}
                            <div className={`w-full md:w-[45%] pl-16 md:pl-0 ${index % 2 === 0 ? 'md:text-right md:pr-12' : 'md:order-3 md:text-left md:pl-12'}`}>
                                <motion.div 
                                    initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.8 }}
                                >
                                    <div className="mb-2 md:hidden">
                                        <span className="font-heading font-black text-2xl text-accent-primary opacity-40 tracking-tighter">
                                            {milestone.year}
                                        </span>
                                    </div>
                                    <h3 className="font-heading font-bold text-2xl text-text-primary mb-3 tracking-tight group-hover:text-accent-primary transition-colors">{milestone.title}</h3>
                                    <p className="text-text-secondary text-sm md:text-base leading-relaxed opacity-80">{milestone.description}</p>
                                </motion.div>
                            </div>
                            
                            {/* Center Dot */}
                            <div className="absolute left-6 md:left-1/2 top-0 md:top-1/2 -translate-x-1/2 md:-translate-y-1/2 w-12 h-12 rounded-full bg-bg-primary border border-white/10 z-10 flex items-center justify-center shadow-2xl">
                                <div className="w-3 h-3 bg-accent-primary rounded-full animate-pulse shadow-[0_0_15px_rgba(56,189,248,0.5)]" />
                            </div>

                            {/* Right Side Content (Year text on desktop) */}
                            <div className={`hidden md:block md:w-[45%] ${index % 2 === 0 ? 'md:order-3 md:text-left md:pl-12' : 'md:text-right md:pr-12'}`}>
                                <motion.div 
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.8, delay: 0.2 }}
                                >
                                    <span className="font-heading font-black text-5xl lg:text-7xl text-white opacity-[0.03] tracking-tighter hover:opacity-[0.08] transition-opacity">
                                        {milestone.year}
                                    </span>
                                </motion.div>
                            </div>
                            
                        </div>
                    ))}
                </div>
            </Container>
        </Section>
    );
};
