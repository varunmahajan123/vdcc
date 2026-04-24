"use client";

import React from 'react';
import { Section } from '../shared/Section';
import { Container } from '../shared/Container';
import { Typography } from '../shared/Typography';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

const courses = [
    {
        title: "Playpen & Pre-Primary",
        description: "A nurturing environment building foundational curiosity and motor skills.",
        imageSrc: "/images/courses/primary-classroom.jpeg"
    },
    {
        title: "Class 1 to 5",
        description: "Focusing on solidifying basics, confidence building, and core subjects.",
        imageSrc: "/images/courses/primary-classroom.jpeg"
    },
    {
        title: "Class 6 to 8",
        description: "Transitional academics with a strong focus on analytical thinking.",
        imageSrc: "/images/courses/middle-classroom.jpeg"
    },
    {
        title: "Class 9 & 10",
        description: "Rigorous, highly-focused preparation strictly aligned to board examinations.",
        imageSrc: "/images/courses/secondary-classroom.jpeg"
    }
];

export const CoursesSnapshot = () => {
    return (
        <Section className="bg-[#0a0f1e]">
            <Container>
                <div className="flex flex-col md:flex-row items-end justify-between mb-10 md:mb-20 gap-6 md:gap-10">
                    <div className="max-w-2xl text-center md:text-left mx-auto md:mx-0">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-primary/10 border border-accent-primary/20 text-accent-primary text-[10px] uppercase tracking-widest font-bold mb-6">
                            Educational Programs
                        </div>
                        <Typography variant="h2" className="tracking-tighter">Shaping Tomorrow's Leaders.</Typography>
                        <div className="w-[40px] h-[3px] bg-[#2563EB] rounded-[2px] mt-[10px] mb-4 md:ml-0 mx-auto" />
                        <Typography variant="body" className="m-0 opacity-80">
                            Comprehensive coaching designed carefully for every level of your child's academic journey.
                        </Typography>
                    </div>
                    <Link 
                        href="/courses" 
                        className="group flex items-center justify-center md:justify-start gap-3 text-white font-black uppercase tracking-[0.2em] text-[10px] hover:text-accent-primary transition-all duration-500 whitespace-nowrap mb-2 w-full md:w-auto"
                    >
                        Explore All Courses 
                        <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-accent-primary group-hover:text-slate-950 transition-all duration-500">
                            <ArrowRight size={14} />
                        </div>
                    </Link>
                </div>

                <div className="grid grid-cols-2 gap-[12px] lg:gap-[20px]">
                    {courses.map((course, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                            className="group relative overflow-hidden rounded-[16px] bg-[#0f1729] border border-[rgba(255,255,255,0.08)] flex flex-col hover:-translate-y-[2px] hover:border-[rgba(37,99,235,0.35)] transition-all duration-200"
                        >
                            <Link href="/courses" className="flex flex-col h-full">
                                <div className="h-[130px] lg:h-[160px] w-full relative overflow-hidden">
                                    <img
                                        src={course.imageSrc}
                                        alt={course.title}
                                        className="w-full h-full object-cover grayscale-[0.3] group-hover:grayscale-0 group-hover:scale-105 transition-transform duration-500"
                                    />
                                    <div 
                                        className="absolute bottom-0 left-0 right-0 h-[60px] z-10" 
                                        style={{ background: 'linear-gradient(to top, #0f1729 0%, transparent 100%)' }} 
                                    />
                                </div>
                                <div className="px-[14px] pt-[14px] pb-[18px] bg-[#0f1729] relative z-20 flex-1 flex flex-col">
                                    <span className="text-[10px] text-[#2563EB] font-bold tracking-[0.1em] uppercase mb-[6px]">
                                        {course.title.toUpperCase()}
                                    </span>
                                    <h3 className="text-[14px] lg:text-[16px] font-bold text-white leading-[1.3] mb-[6px]">
                                        {course.title}
                                    </h3>
                                    <p className="text-[12px] text-[rgba(255,255,255,0.45)] line-clamp-2 m-0 flex-1">
                                        {course.description}
                                    </p>
                                    <span className="text-[12px] font-semibold text-[#4ade80] mt-[10px] block">
                                        Enquire →
                                    </span>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </Container>
        </Section>
    );
};
