"use client";

import React, { useState } from 'react';
import { Section } from '../shared/Section';
import { Container } from '../shared/Container';
import { Typography } from '../shared/Typography';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import { cn } from '@/lib/utils';

const faqs = [
    {
        question: "What makes VDCC different from other institutes?",
        answer: "We strictly limit our batch sizes to ensure personalized attention. Unlike overcrowded setups, we focus on conceptual clarity and one-on-one mentoring, ensuring your child actually understands the core of the subject."
    },
    {
        question: "Do you offer transportation facilities?",
        answer: "Please contact our administration via WhatsApp to check the current availability of transport connectivity from your specific locality in Amritsar."
    },
    {
        question: "How frequent are Parent-Teacher Meetings (PTMs)?",
        answer: "We believe in total transparency. PTMs are held monthly, but parents are highly encouraged to request updates on their child's daily testing performance through our central channel."
    },
    {
        question: "Do you provide trial classes?",
        answer: "Yes! We encourage parents and students to sit through a demo session to experience our unique non-rote teaching methodology first-hand before committing."
    }
];

export const FAQSection = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <Section className="py-24 bg-bg-primary">
            <Container className="max-w-3xl">
                <div className="text-center mb-16">
                    <Typography variant="h2" className="mb-4">Common Questions</Typography>
                    <Typography variant="body">
                        Direct answers to questions parents frequently ask before enrolling.
                    </Typography>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => {
                        const isOpen = openIndex === index;
                        
                        return (
                            <div 
                                key={index} 
                                className={cn(
                                    "border rounded-2xl overflow-hidden transition-colors duration-300", 
                                    isOpen ? "bg-bg-secondary border-accent-primary/30" : "bg-bg-primary border-border hover:border-text-tertiary"
                                )}
                            >
                                <button
                                    onClick={() => setOpenIndex(isOpen ? null : index)}
                                    className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                                >
                                    <h4 className={cn("font-medium text-lg pr-8 transition-colors", isOpen ? "text-accent-primary" : "text-text-primary")}>
                                        {faq.question}
                                    </h4>
                                    <div className={cn("shrink-0 p-1 rounded-full transition-colors", isOpen ? "bg-accent-primary/10 text-accent-primary" : "bg-bg-tertiary text-text-secondary")}>
                                        {isOpen ? <Minus size={18} /> : <Plus size={18} />}
                                    </div>
                                </button>
                                
                                <AnimatePresence>
                                    {isOpen && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: 'auto', opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3, ease: "easeInOut" }}
                                        >
                                            <div className="p-6 pt-0 text-text-secondary leading-relaxed border-t border-border/50 mt-2 text-[15px]">
                                                {faq.answer}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        );
                    })}
                </div>
            </Container>
        </Section>
    );
};
