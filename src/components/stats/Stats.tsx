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
            {/* Subtle radial background glow behind the entire stats section */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(56,189,248,0.08)_0%,transparent_60%)] pointer-events-none -z-10" />
            
            <Container className="max-w-4xl relative">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 lg:gap-5">
                    {statsData.map((stat, index) => {
                        return (
                            <motion.div 
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                                className="group relative flex flex-col items-center justify-center text-center aspect-square p-4 sm:p-6 rounded-[2rem] bg-[#0a1122]/40 backdrop-blur-xl border border-white/5 shadow-[0_8px_30px_rgba(0,0,0,0.4),inset_0_1px_1px_rgba(255,255,255,0.1)] hover:-translate-y-1.5 hover:shadow-[0_20px_40px_rgba(56,189,248,0.15),inset_0_1px_1px_rgba(255,255,255,0.2)] hover:border-white/10 active:scale-95 transition-all duration-300 cursor-default overflow-hidden"
                            >
                                {/* Inner soft gradient overlay for depth */}
                                <div className="absolute inset-0 bg-gradient-to-b from-white/[0.04] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                                
                                <span 
                                    className="relative z-10 font-heading font-black text-3xl sm:text-4xl lg:text-5xl leading-tight mb-1.5 sm:mb-2 tracking-tighter bg-clip-text text-transparent bg-gradient-to-br from-[#4FC3F7] to-[#E6EDF5] drop-shadow-[0_2px_10px_rgba(79,195,247,0.2)]"
                                >
                                    {stat.value}
                                </span>
                                
                                <span className="relative z-10 text-[8px] sm:text-[9px] text-[#8FA3B8] uppercase tracking-[0.3em] font-bold leading-snug">
                                    {stat.label}
                                </span>
                            </motion.div>
                        );
                    })}
                </div>
            </Container>
        </section>
    );
};
