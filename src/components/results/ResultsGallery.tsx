"use client";

import React, { useState, useMemo } from 'react';
import { Section } from '../shared/Section';
import { Container } from '../shared/Container';
import { Typography } from '../shared/Typography';
import { ResultCard } from '../ui/ResultCard';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Filter } from 'lucide-react';

/* 
======================================================
  ADMIN DATA MODEL (MongoDB / Firebase Schema Target)
======================================================
*/
export type StudentResult = {
    id: string;
    name: string;
    imageSrc: string;
    score: string; // e.g. '98.5%'
    classGroup: "Class 10" | "Class 9" | "Foundation";
    year: "2024" | "2025" | "2026";
    isTopper: boolean;
};

// Placeholder Mock Data Array (Safe to replace dynamically later)
const mockResults: StudentResult[] = [
    { id: "1", name: "Rahat", imageSrc: "/images/results/placeholder.jpg", score: "97%", classGroup: "Class 10", year: "2025", isTopper: true },
    { id: "2", name: "Ridhi", imageSrc: "/images/results/placeholder.jpg", score: "95%", classGroup: "Class 10", year: "2025", isTopper: true },
    { id: "3", name: "Mehreet", imageSrc: "/images/results/placeholder.jpg", score: "94%", classGroup: "Class 10", year: "2025", isTopper: false },
    { id: "4", name: "Aryan", imageSrc: "/images/results/placeholder.jpg", score: "93%", classGroup: "Class 10", year: "2025", isTopper: false },
    { id: "5", name: "Vanya", imageSrc: "/images/results/placeholder.jpg", score: "96%", classGroup: "Class 9", year: "2025", isTopper: true },
    { id: "6", name: "Pranjal", imageSrc: "/images/results/placeholder.jpg", score: "92%", classGroup: "Class 9", year: "2025", isTopper: false },
    { id: "7", name: "Kabir", imageSrc: "/images/results/placeholder.jpg", score: "98%", classGroup: "Class 10", year: "2024", isTopper: true },
    { id: "8", name: "Sanya", imageSrc: "/images/results/placeholder.jpg", score: "95%", classGroup: "Class 10", year: "2024", isTopper: false },
    { id: "9", name: "Aarav", imageSrc: "/images/results/placeholder.jpg", score: "94%", classGroup: "Foundation", year: "2024", isTopper: false }
];

const availableYears = ["All", "2026", "2025", "2024"];

export const ResultsGallery = () => {
    const [selectedYear, setSelectedYear] = useState<string>("All");

    // Memoize the filtered arrays for high-performance React redrawing
    const class10Results = useMemo(() => {
        return mockResults
            .filter(r => r.classGroup === "Class 10" && (selectedYear === "All" || r.year === selectedYear))
            .sort((a, b) => parseFloat(b.score) - parseFloat(a.score));
    }, [selectedYear]);

    const otherResults = useMemo(() => {
        return mockResults
            .filter(r => r.classGroup !== "Class 10" && (selectedYear === "All" || r.year === selectedYear))
            .sort((a, b) => parseFloat(b.score) - parseFloat(a.score));
    }, [selectedYear]);

    return (
        <Section className="py-24 bg-bg-primary relative min-h-screen">
            {/* Top faded gradient for gold accent feel */}
            <div className="absolute top-0 inset-x-0 h-[300px] bg-gradient-to-b from-[#d4af37]/5 to-transparent pointer-events-none" />

            <Container className="relative z-10">
                {/* Filter Strip */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-16 pb-8 border-b border-border/50">
                    <div className="flex items-center gap-3 text-text-secondary">
                        <Filter size={20} className="text-accent-secondary" />
                        <span className="font-medium tracking-wide">Filter by academic year:</span>
                    </div>

                    <div className="flex flex-wrap items-center justify-center gap-2">
                        {availableYears.map((year) => (
                            <button
                                key={year}
                                onClick={() => setSelectedYear(year)}
                                className={cn(
                                    "px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 border",
                                    selectedYear === year
                                        ? "bg-accent-primary/20 border-accent-primary text-accent-primary shadow-[0_0_15px_rgba(212,175,55,0.2)]"
                                        : "bg-bg-secondary border-border text-text-secondary hover:border-text-tertiary"
                                )}
                            >
                                {year}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Main Class 10 Topper Grid */}
                <div className="mb-24">
                    <div className="text-center mb-12">
                        <Typography variant="h2" className="text-3xl md:text-4xl text-transparent bg-clip-text bg-gradient-to-br from-white to-[#d4af37] mb-2">
                            Class 10 Board Excellence
                        </Typography>
                        <p className="text-text-secondary">The highest tier of academic achievement at VDCC.</p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12">
                        <AnimatePresence mode="popLayout">
                            {class10Results.length > 0 ? class10Results.map((student, idx) => (
                                <motion.div
                                    key={student.id}
                                    layout
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    transition={{ duration: 0.4, delay: idx * 0.05 }}
                                >
                                    <ResultCard
                                        studentName={student.name}
                                        score={student.score}
                                        gradeDetails={`${student.classGroup} Board Topper`}
                                        imageSrc={student.imageSrc}
                                        className={cn(
                                            "h-full transition-transform hover:-translate-y-2",
                                            student.isTopper && "border-[#d4af37]/30 shadow-[0_10px_30px_rgba(212,175,55,0.1)] relative"
                                        )}
                                    />
                                    {/* Gold Star indicator for absolute toppers */}
                                    {student.isTopper && (
                                        <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-[#d4af37] text-bg-primary flex items-center justify-center font-bold text-lg shadow-lg z-10 border-2 border-bg-primary">
                                            &#x2605;
                                        </div>
                                    )}
                                </motion.div>
                            )) : (
                                <div className="col-span-full py-16 text-center text-text-tertiary italic">
                                    No records found for the selected filter.
                                </div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>

                {/* Class 9 & Foundation Achievements */}
                <div>
                    <div className="text-center mb-12">
                        <Typography variant="h3" className="text-2xl md:text-3xl text-text-primary mb-2">
                            Class 9 & Foundation Stars
                        </Typography>
                        <div className="h-0.5 w-16 bg-accent-secondary mx-auto rounded-full" />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12">
                        <AnimatePresence mode="popLayout">
                            {otherResults.length > 0 ? otherResults.map((student, idx) => (
                                <motion.div
                                    key={student.id}
                                    layout
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    transition={{ duration: 0.4, delay: idx * 0.05 }}
                                >
                                    <ResultCard
                                        studentName={student.name}
                                        score={student.score}
                                        gradeDetails={`${student.classGroup} Star`}
                                        imageSrc={student.imageSrc}
                                        className="h-full bg-bg-secondary hover:-translate-y-1 transition-transform"
                                    />
                                </motion.div>
                            )) : (
                                <div className="col-span-full py-12 text-center text-text-tertiary italic">
                                    No secondary records for the selected filter.
                                </div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>

            </Container>
        </Section>
    );
};
