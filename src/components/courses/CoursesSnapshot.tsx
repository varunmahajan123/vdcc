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
        <Section className="bg-bg-secondary">
            <Container>
                <div className="flex flex-col md:flex-row items-end justify-between mb-20 gap-10">
                    <div className="max-w-2xl text-center md:text-left">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-primary/10 border border-accent-primary/20 text-accent-primary text-[10px] uppercase tracking-widest font-bold mb-6">
                            Educational Programs
                        </div>
                        <Typography variant="h2" className="tracking-tighter mb-4">Shaping Tomorrow's Leaders.</Typography>
                        <Typography variant="body" className="m-0 opacity-80">
                            Comprehensive coaching designed carefully for every level of your child's academic journey.
                        </Typography>
                    </div>
                    <Link 
                        href="/courses" 
                        className="group flex items-center gap-3 text-white font-black uppercase tracking-[0.2em] text-[10px] hover:text-accent-primary transition-all duration-500 whitespace-nowrap mb-2"
                    >
                        Explore All Courses 
                        <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-accent-primary group-hover:text-slate-950 transition-all duration-500">
                            <ArrowRight size={14} />
                        </div>
                    </Link>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {courses.map((course, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                            className="group relative overflow-hidden rounded-[2.5rem] bg-bg-primary border border-white/5 shadow-2xl flex flex-col hover:-translate-y-2 transition-all duration-500"
                        >
                            <div className="h-56 overflow-hidden relative">
                                <div className="absolute inset-0 bg-gradient-to-t from-bg-primary via-bg-primary/20 to-transparent z-10" />
                                <img
                                    src={course.imageSrc}
                                    alt={course.title}
                                    className="w-full h-full object-cover grayscale-[0.3] group-hover:grayscale-0 group-hover:scale-110 transition-transform duration-1000"
                                />
                            </div>
                            <div className="p-8 pt-0 relative z-20 flex-1 flex flex-col -mt-12">
                                <Typography variant="h4" className="mb-3 tracking-tight group-hover:text-accent-primary transition-colors">{course.title}</Typography>
                                <Typography variant="body" className="text-text-secondary text-sm flex-1 leading-relaxed opacity-80">
                                    {course.description}
                                </Typography>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </Container>
        </Section>
    );
};
