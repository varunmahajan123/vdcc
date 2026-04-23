"use client";

import React from 'react';
import { Section } from '../shared/Section';
import { Container } from '../shared/Container';
import { Typography } from '../shared/Typography';
import { FeatureCard } from '../ui/FeatureCard';
import { BrainCircuit, Users, Target, GraduationCap, TrendingUp, BookOpen } from 'lucide-react';

const features = [
    {
        title: "Concept-Based Learning",
        description: "Strong fundamentals.",
        icon: BrainCircuit
    },
    {
        title: "Small Batch Sizes",
        description: "More attention.",
        icon: Users
    },
    {
        title: "Personal Mentoring",
        description: "Individual growth tracking.",
        icon: Target
    },
    {
        title: "Experienced Faculty",
        description: "Subject mastery experts.",
        icon: GraduationCap
    },
    {
        title: "Result-Oriented",
        description: "Board exam excellence.",
        icon: TrendingUp
    },
    {
        title: "Strong Foundation",
        description: "Unshakeable basics.",
        icon: BookOpen
    }
];

export const WhyUs = () => {
    return (
        <Section className="bg-bg-secondary relative overflow-hidden py-16">
            <Container className="relative z-10 max-w-5xl">
                <div className="text-center max-w-3xl mx-auto mb-10">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-secondary/10 border border-accent-secondary/20 text-accent-secondary text-[10px] uppercase tracking-widest font-bold mb-4">
                        The VDCC Difference
                    </div>
                    <Typography variant="h2" className="mb-4 tracking-tighter">Why Choose Us</Typography>
                    <Typography variant="body" className="opacity-80 m-0">
                        We build capable, confident learners ready to tackle any academic challenge.
                    </Typography>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-6">
                    {features.map((feature, index) => (
                        <FeatureCard
                            key={index}
                            title={feature.title}
                            description={feature.description}
                            icon={feature.icon}
                            delay={index * 0.1}
                        />
                    ))}
                </div>
            </Container>
        </Section>
    );
};
