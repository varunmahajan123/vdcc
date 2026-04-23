"use client";

import React from 'react';
import { Section } from '../shared/Section';
import { Container } from '../shared/Container';
import { Typography } from '../shared/Typography';
import { motion } from 'framer-motion';

const facultyMembers = [
    { name: "John Doe", subject: "Mathematics", experience: "15+ Years" },
    { name: "Jane Smith", subject: "Science / Biology", experience: "12+ Years" },
    { name: "Robert Kumar", subject: "Physics", experience: "10+ Years" },
    { name: "Priya Sharma", subject: "English & Social Studies", experience: "8+ Years" }
];

export const FacultyGrid = () => {
    return (
        <Section className="bg-bg-primary">
            <Container>
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-primary/10 border border-accent-primary/20 text-accent-primary text-[10px] uppercase tracking-widest font-bold mb-6">
                        Subject Specialists
                    </div>
                    <Typography variant="h2" className="mb-6 tracking-tighter">Academic Mentorship at its Best.</Typography>
                    <Typography variant="body" className="opacity-80">
                        Our faculty comprises dedicated subject experts committed to simplifying complex concepts and nurturing individual student growth.
                    </Typography>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {facultyMembers.map((faculty, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: index * 0.1 }}
                            className="group relative"
                        >
                            <div className="bg-bg-secondary rounded-[2.5rem] p-8 border border-white/5 flex flex-col items-center text-center transition-all duration-500 hover:-translate-y-2 hover:border-accent-primary/20 hover:shadow-2xl hover:shadow-accent-primary/5">
                                <div className="w-28 h-28 rounded-full overflow-hidden mb-8 p-1 bg-gradient-to-tr from-accent-primary to-accent-secondary">
                                    <div className="w-full h-full rounded-full bg-bg-secondary p-1">
                                        <img 
                                            src="/images/about/faculty-placeholder.jpg" 
                                            alt={faculty.name} 
                                            className="w-full h-full object-cover rounded-full grayscale group-hover:grayscale-0 transition-all duration-500"
                                            onError={(e) => {
                                                (e.target as HTMLImageElement).src = ''; 
                                                (e.target as HTMLImageElement).className = "w-full h-full bg-bg-tertiary rounded-full";
                                            }}
                                        />
                                    </div>
                                </div>
                                <Typography variant="h4" className="mb-2 text-text-primary group-hover:text-accent-primary transition-colors">{faculty.name}</Typography>
                                <Typography variant="body" className="text-accent-primary font-bold text-xs uppercase tracking-widest mb-6">{faculty.subject}</Typography>
                                <div className="mt-auto px-4 py-1.5 rounded-full bg-white/5 border border-white/5 text-[10px] text-text-tertiary uppercase tracking-widest font-bold">
                                    {faculty.experience} EXP
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </Container>
        </Section>
    );
};
