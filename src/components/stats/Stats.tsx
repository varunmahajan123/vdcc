"use client";

import React from 'react';
import { Container } from '../shared/Container';
import { motion } from 'framer-motion';

const statsData = [
    { label: "Successful Students", value: "10K+" },
    { label: "Expert Faculty", value: "15+" },
    { label: "Years Legacy", value: "25+" },
    { label: "Classes Offered", value: "Playpen to 10th" },
];

export const Stats = () => {
    return (
        <section className="relative z-30 border-t border-[#1f1f1f]">
            <Container className="max-w-4xl">
                <div className="grid grid-cols-2 md:grid-cols-4">
                    {statsData.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 12 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
                            className="flex flex-col items-center justify-center text-center py-5 px-4"
                        >
                            <span className="font-heading font-black text-2xl sm:text-3xl md:text-4xl text-white leading-tight mb-1 tracking-tight">
                                {stat.value}
                            </span>
                            <span className="text-[13px] text-[#9ca3af] font-medium leading-snug">
                                {stat.label}
                            </span>
                        </motion.div>
                    ))}
                </div>
            </Container>
        </section>
    );
};
