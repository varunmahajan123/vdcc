"use client";

import React from 'react';
import { Section } from '../shared/Section';
import { Container } from '../shared/Container';
import { Typography } from '../shared/Typography';
import { brand } from '@/config/brand';
import { motion } from 'framer-motion';
import { LibraryBig } from 'lucide-react';

export const StorySection = () => {
    return (
        <Section className="bg-bg-secondary relative overflow-hidden">
            <Container className="max-w-5xl">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <motion.div 
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-primary/10 border border-accent-primary/20 text-accent-primary text-[10px] uppercase tracking-widest font-bold mb-6">
                            Academic Heritage
                        </div>
                        <Typography variant="h2" className="mb-8 tracking-tighter">Two Decades of<br />Educational Trust.</Typography>
                        
                        <div className="space-y-6 text-text-secondary text-base md:text-lg leading-relaxed">
                            <p>
                                The journey of {brand.name} began over two decades ago with a deeply rooted belief in local excellence. Located in the heart of Amritsar, we recognized a growing disconnect between rote memorization and genuine conceptual understanding.
                            </p>
                            <p>
                                What started as a small, fiercely dedicated tutoring initiative rapidly evolved into {brand.shortName}—a sanctuary for ambitious students who required more than just answers. They required a foundation.
                            </p>
                            <p className="font-semibold text-text-primary border-l-2 border-accent-primary pl-6 py-2">
                                Our commitment remains identical to day one: delivering uncompromised, hyper-personalized academic mentorship.
                            </p>
                        </div>
                    </motion.div>

                    <motion.div 
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        <div className="aspect-[4/5] rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl relative z-10">
                            <img src="/images/gallery/gallery-2.png" alt="Classroom setting" className="w-full h-full object-cover" />
                            <div className="absolute inset-0 bg-gradient-to-t from-bg-primary via-transparent to-transparent opacity-60" />
                        </div>
                        {/* Decorative Elements */}
                        <div className="absolute -top-10 -right-10 w-40 h-40 bg-accent-primary/20 rounded-full blur-3xl -z-0" />
                        <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-accent-secondary/20 rounded-full blur-3xl -z-0" />
                    </motion.div>
                </div>
            </Container>
        </Section>
    );
};
