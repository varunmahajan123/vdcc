"use client";

import React from 'react';
import { Section } from '../shared/Section';
import { Container } from '../shared/Container';
import { Typography } from '../shared/Typography';
import { Button } from '../ui/Button';
import { brand } from '@/config/brand';
import { motion } from 'framer-motion';
import { CheckCircle2, Clock, BookOpen, Presentation } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface CourseDetailBlockProps {
    title: string;
    overview: string;
    subjects: string[];
    keyBenefit: string;
    timing: string;
    imageSrc: string;
    reverse?: boolean;
}

export const CourseDetailBlock: React.FC<CourseDetailBlockProps> = ({
    title,
    overview,
    subjects,
    keyBenefit,
    timing,
    imageSrc,
    reverse = false
}) => {
    // Generate dynamic WhatsApp URL
    const formattedPhone = brand.contact.primaryPhone.replace(/\D/g, "");
    const waMessage = encodeURIComponent(`Hello VDCC, I am interested in inquiring about the ${title} batch.`);
    const waLink = `https://wa.me/91${formattedPhone}?text=${waMessage}`;

    return (
        <Section className="py-20 bg-bg-primary border-b border-border/40 last:border-0 overflow-hidden relative">
            <Container>
                <div className={cn("flex flex-col gap-12 lg:gap-16 items-center", reverse ? "lg:flex-row-reverse" : "lg:flex-row")}>
                    
                    {/* Visual Side */}
                    <motion.div 
                        initial={{ opacity: 0, x: reverse ? 30 : -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="w-full lg:w-1/2"
                    >
                        <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border border-border">
                            <img 
                                src={imageSrc} 
                                alt={`${title} at ${brand.shortName}`} 
                                className="w-full h-full object-cover"
                                onError={(e) => {
                                    (e.target as HTMLImageElement).src = ''; 
                                    (e.target as HTMLImageElement).className = "w-full h-full bg-gradient-to-br from-bg-tertiary to-bg-secondary";
                                }}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-bg-primary/60 to-transparent pointer-events-none" />
                        </div>
                    </motion.div>

                    {/* Content Side */}
                    <motion.div 
                        initial={{ opacity: 0, x: reverse ? -30 : 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="w-full lg:w-1/2 flex flex-col"
                    >
                        <Typography variant="h2" className="mb-4 text-3xl md:text-4xl text-text-primary">{title}</Typography>
                        <Typography variant="body" className="mb-8 text-text-secondary leading-relaxed">
                            {overview}
                        </Typography>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                            <div className="bg-bg-secondary p-5 rounded-2xl border border-border">
                                <BookOpen className="text-accent-primary mb-3" size={24} />
                                <h4 className="font-heading font-semibold text-sm mb-2 uppercase tracking-wider text-text-secondary">Core Focus</h4>
                                <ul className="space-y-1">
                                    {subjects.map((sub, i) => (
                                        <li key={i} className="text-text-primary font-medium flex items-center gap-2">
                                            <div className="w-1.5 h-1.5 bg-accent-primary rounded-full shrink-0" />
                                            {sub}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            
                            <div className="space-y-4">
                                <div className="bg-bg-secondary p-5 rounded-2xl border border-border">
                                    <Presentation className="text-accent-secondary mb-2" size={20} />
                                    <p className="text-sm text-text-primary font-medium">{keyBenefit}</p>
                                </div>
                                <div className="bg-bg-secondary p-5 rounded-2xl border border-border">
                                    <Clock className="text-text-secondary mb-2" size={20} />
                                    <p className="text-sm text-text-primary font-medium">{timing}</p>
                                </div>
                            </div>
                        </div>

                        <div className="flex items-center gap-4 mt-auto pt-4 border-t border-border/50">
                            <Button href={waLink} target="_blank" variant="primary" className="bg-[#25D366] hover:bg-[#128C7E] shadow-[#25D366]/20 border-0 flex items-center gap-2">
                                <CheckCircle2 size={18} /> Enquire via WhatsApp
                            </Button>
                        </div>
                    </motion.div>

                </div>
            </Container>
        </Section>
    );
};
