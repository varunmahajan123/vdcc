"use client";

import React from 'react';
import { Container } from '../shared/Container';
import { motion } from 'framer-motion';

const statsData = [
    { label: "Successful Students", value: "10k+" },
    { label: "Expert Faculty", value: "15+" },
    { label: "Years Legacy", value: "25+" },
    { label: "Classes Offered", value: "Playpen to 10th" },
];

export const Stats = () => {
    return (
        <section className="relative -mt-10 mb-8 z-30 px-4">
            <Container className="max-w-4xl">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 lg:gap-5">
                    {statsData.map((stat, index) => (
                        <motion.div 
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                            className="bg-gradient-to-b from-white/10 to-white/5 backdrop-blur-lg rounded-[2rem] p-4 sm:p-6 flex flex-col items-center justify-center text-center aspect-square border border-white/10 shadow-[0_8px_30px_rgba(0,0,0,0.2)] hover:shadow-[0_8px_30px_rgba(56,189,248,0.15)] hover:border-white/20 transition-all duration-300"
                        >
                            <span className="font-heading font-black text-3xl sm:text-4xl lg:text-5xl text-white leading-tight mb-1 sm:mb-2 tracking-tighter">
                                {stat.value}
                            </span>
                            <span className="text-[9px] sm:text-[10px] text-text-tertiary uppercase tracking-[0.15em] sm:tracking-[0.2em] font-bold leading-snug">
                                {stat.label}
                            </span>
                        </motion.div>
                    ))}
                </div>
            </Container>
        </section>
    );
};
