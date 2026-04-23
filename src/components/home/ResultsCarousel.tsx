"use client";

import React from 'react';
import { Section } from '../shared/Section';
import { Container } from '../shared/Container';
import { Typography } from '../shared/Typography';
import { ResultCard } from '../ui/ResultCard';
import { Button } from '../ui/Button';

const resultsData = [
    { studentName: "Rahat", score: "97%", gradeDetails: "Class 10 Topper", imageSrc: "/images/results/rahat-poster.jpg" },
    { studentName: "Mehakdeep", score: "96%", gradeDetails: "Class 10 Topper", imageSrc: "/images/results/mehakdeep-poster.png" },
    { studentName: "Ridhi", score: "95%", gradeDetails: "Class 9 Topper", imageSrc: "/images/results/ridhi-poster.jpg" },
    { studentName: "Mehul", score: "92%", gradeDetails: "Class 10 Topper", imageSrc: "/images/results/mehul-poster.jpg" },
    { studentName: "Suhasini", score: "90%", gradeDetails: "Class 10 Topper", imageSrc: "/images/results/suhasini-poster.jpg" },
    { studentName: "Arjun", score: "90%", gradeDetails: "Class 10 Topper", imageSrc: "/images/results/arjun-poster.png" },
];

export const ResultsCarousel = () => {
    return (
        <Section className="bg-bg-primary overflow-hidden py-16">
            <Container>
                {/* Header Section */}
                <div className="flex flex-col md:flex-row items-center md:items-end justify-between mb-10 lg:mb-16 gap-6 text-center md:text-left">
                    <div className="max-w-2xl">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-primary/10 border border-accent-primary/20 text-accent-primary text-[10px] uppercase tracking-widest font-bold mb-4 shadow-sm">
                            Academic Achievements
                        </div>
                        <Typography variant="h2" className="tracking-tighter mb-3">Our Star Performers.</Typography>
                        <Typography variant="body" className="m-0 opacity-80 max-w-lg mx-auto md:mx-0">
                            Consistent board exam toppers proving the effectiveness of our specialized mentoring approach.
                        </Typography>
                    </div>
                    
                    <div className="hidden md:block">
                        <Button href="/results" variant="outline" size="md" className="rounded-xl border-white/20 hover:bg-white/10">
                            View All Results
                        </Button>
                    </div>
                </div>

                {/* Mobile Snap Scroller / Desktop Grid */}
                <div className="flex overflow-x-auto snap-x snap-mandatory md:grid md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8 pb-8 md:pb-0 scrollbar-hide -mx-4 px-4 md:mx-0 md:px-0">
                    {resultsData.map((result, index) => (
                        <div key={index} className="snap-center shrink-0 w-[280px] sm:w-[320px] md:w-auto h-full">
                            <ResultCard
                                studentName={result.studentName}
                                score={result.score}
                                gradeDetails={result.gradeDetails}
                                imageSrc={result.imageSrc}
                                delay={index * 0.1}
                            />
                        </div>
                    ))}
                </div>

                {/* Mobile CTA */}
                <div className="mt-8 flex justify-center md:hidden">
                    <Button href="/results" variant="outline" className="w-full sm:w-[280px] rounded-xl border-white/20">
                        View All Results
                    </Button>
                </div>
            </Container>

            <style jsx global>{`
                .scrollbar-hide::-webkit-scrollbar {
                    display: none;
                }
                .scrollbar-hide {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }
            `}</style>
        </Section>
    );
};
