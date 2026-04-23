"use client";

import React from 'react';
import { Container } from '../shared/Container';
import { Button } from '../ui/Button';
import { brand } from '@/config/brand';
import { motion } from 'framer-motion';

export const Hero = () => {
    const waLink = `https://wa.me/91${brand.contact.primaryPhone.replace(/\D/g, "")}`;

    return (
        <section className="relative min-h-[100vh] flex items-center justify-center overflow-hidden bg-bg-primary">
            {/* Minimal dot pattern */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '32px 32px' }} />

            <Container className="relative z-20 w-full">
                <div className="flex flex-col items-center text-center max-w-3xl mx-auto px-4">
                    {/* Admissions Label */}
                    <motion.span
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                        className="inline-block text-[13px] font-bold tracking-[0.1em] uppercase text-[#2563EB] mb-5"
                    >
                        Admissions Open 2026–27
                    </motion.span>

                    {/* H1 */}
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
                        className="text-[2rem] sm:text-[2.75rem] md:text-[3.5rem] font-heading font-black text-white tracking-tight leading-[1.1] mb-5"
                    >
                        Securing Futures<br />Through Excellence.
                    </motion.h1>

                    {/* Subtitle */}
                    <motion.p
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                        className="text-[15px] md:text-base text-[#9ca3af] leading-relaxed font-medium mb-8 max-w-md mx-auto"
                    >
                        Amritsar's most trusted coaching institute.<br className="sm:hidden" /> From Playpen to Class 10.
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
                        className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto"
                    >
                        <a
                            href={waLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full sm:w-auto inline-flex items-center justify-center bg-[#2563EB] text-white font-bold text-sm rounded-md px-7 py-3.5 hover:bg-[#1d4ed8] active:scale-[0.98] transition-all duration-200"
                        >
                            Enroll Now
                        </a>
                        <a
                            href={waLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full sm:w-auto inline-flex items-center justify-center border-2 border-white text-white font-bold text-sm rounded-md px-7 py-3.5 hover:bg-white hover:text-black active:scale-[0.98] transition-all duration-200"
                        >
                            WhatsApp Us
                        </a>
                    </motion.div>
                </div>
            </Container>
        </section>
    );
};
