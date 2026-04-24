"use client";

import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

/* ============================================
   STUDENT RESULT DATA — Real uploaded posters
   ============================================ */
type StudentResult = {
    id: string;
    name: string;
    imageSrc: string;
    score: string;
    classGroup: "Class 10" | "Class 9" | "Foundation";
    year: "2025" | "2026";
    isTopper: boolean;
};

const resultsData: StudentResult[] = [
    // 2026 Batch — Class 10
    { id: "r1", name: "Rahat", imageSrc: "/images/results/rahat-poster.jpg", score: "97%", classGroup: "Class 10", year: "2026", isTopper: true },
    { id: "r2", name: "Daivik", imageSrc: "/images/results/2AB84090-B90B-40A9-B7AB-E46FF10CF1EA.PNG", score: "96%", classGroup: "Class 10", year: "2026", isTopper: true },
    { id: "r3", name: "Mehakdeep", imageSrc: "/images/results/mehakdeep-poster.png", score: "96%", classGroup: "Class 10", year: "2026", isTopper: true },
    { id: "r4", name: "Ritika", imageSrc: "/images/results/A79CD0D9-31CD-47AA-8E45-15E3F85C55EE.PNG", score: "96%", classGroup: "Class 10", year: "2026", isTopper: true },
    { id: "r5", name: "Mehreet", imageSrc: "/images/results/35B3AE5E-0297-4E34-A063-B96750B9708F.PNG", score: "94%", classGroup: "Class 10", year: "2026", isTopper: true },
    { id: "r6", name: "Ebadat", imageSrc: "/images/results/63B10820-DCEE-4C05-B8FC-F658C24A7764.PNG", score: "94%", classGroup: "Class 10", year: "2026", isTopper: true },
    { id: "r7", name: "Mehul", imageSrc: "/images/results/mehul-poster.jpg", score: "92%", classGroup: "Class 10", year: "2026", isTopper: false },
    { id: "r8", name: "Sanchi", imageSrc: "/images/results/1CAAEC9F-0588-4FEA-B33F-DE7CD04C9CD9.PNG", score: "90%", classGroup: "Class 10", year: "2026", isTopper: false },
    { id: "r9", name: "Paarth", imageSrc: "/images/results/3CE317D5-20D2-4F17-B820-796DB0AAAEED.PNG", score: "90%", classGroup: "Class 10", year: "2026", isTopper: false },
    { id: "r10", name: "Amaan", imageSrc: "/images/results/C311026E-C44C-41F3-9671-1F9E8161512E.PNG", score: "90%", classGroup: "Class 10", year: "2026", isTopper: false },
    // 2026 Batch — Class 9
    { id: "r11", name: "Ridhi Babbar", imageSrc: "/images/results/ridhi-poster.jpg", score: "95%", classGroup: "Class 9", year: "2026", isTopper: true },
    { id: "r12", name: "Suhasini", imageSrc: "/images/results/suhasini-poster.jpg", score: "93%", classGroup: "Class 9", year: "2026", isTopper: true },
    { id: "r13", name: "Arjun", imageSrc: "/images/results/arjun-poster.png", score: "91%", classGroup: "Class 9", year: "2026", isTopper: false },
];

const availableYears = ["All", "2026", "2025"];

/* ============================================
   RESULT CARD COMPONENT
   ============================================ */
const ResultCard = ({ student, index }: { student: StudentResult; index: number }) => (
    <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.4, delay: index * 0.04 }}
        className="relative group"
    >
        <div className="bg-[#111111] border border-[#1f1f1f] rounded-lg overflow-hidden hover:border-[#2563EB] transition-colors duration-300">
            {/* Poster Image — full width, aspect ratio preserved */}
            <div className="relative w-full aspect-[4/5] bg-[#0a0a0a] overflow-hidden">
                <Image
                    src={student.imageSrc}
                    alt={`${student.name} — ${student.score} ${student.classGroup}`}
                    fill
                    className="object-cover object-top group-hover:scale-[1.02] transition-transform duration-500"
                    sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                />
            </div>

            {/* Info Strip */}
            <div className="p-4">
                <div className="flex items-center justify-between mb-1">
                    <h3 className="text-white font-bold text-lg leading-tight">{student.name}</h3>
                    <span className="text-[#D4AF37] font-extrabold text-[22px] leading-none">{student.score}</span>
                </div>
                <p className="text-[#9ca3af] text-[13px] font-medium">{student.classGroup} Board · {student.year}</p>
            </div>
        </div>

        {/* Gold Star Badge for Top Performers */}
        {student.isTopper && (
            <div className="absolute top-2 right-2 w-7 h-7 rounded-full bg-[#D4AF37] text-black flex items-center justify-center text-sm font-bold shadow-md z-10">
                ★
            </div>
        )}
    </motion.div>
);

/* ============================================
   SECTION HEADING WITH GOLD LEFT BORDER
   ============================================ */
const SectionHeading = ({ title }: { title: string }) => (
    <div className="flex items-center gap-4 mb-8 mt-4">
        <div className="w-1 h-8 bg-[#D4AF37] rounded-full" />
        <h2 className="text-white font-bold text-2xl md:text-3xl tracking-tight">{title}</h2>
    </div>
);

/* ============================================
   RESULTS GALLERY (MAIN EXPORT)
   ============================================ */
export const ResultsGallery = () => {
    const [selectedYear, setSelectedYear] = useState<string>("All");

    const class10Results = useMemo(() =>
        resultsData
            .filter(r => r.classGroup === "Class 10" && (selectedYear === "All" || r.year === selectedYear))
            .sort((a, b) => parseFloat(b.score) - parseFloat(a.score)),
        [selectedYear]
    );

    const otherResults = useMemo(() =>
        resultsData
            .filter(r => r.classGroup !== "Class 10" && (selectedYear === "All" || r.year === selectedYear))
            .sort((a, b) => parseFloat(b.score) - parseFloat(a.score)),
        [selectedYear]
    );

    return (
        <section className="bg-[#0a0a0a] py-16 md:py-24 px-4">
            <div className="max-w-6xl mx-auto">

                {/* Year Filter */}
                <div className="flex items-center gap-3 mb-12 pb-6 border-b border-[#1f1f1f]">
                    <span className="text-[#9ca3af] text-sm font-medium mr-2">Year:</span>
                    {availableYears.map((year) => (
                        <button
                            key={year}
                            onClick={() => setSelectedYear(year)}
                            className={`px-5 py-1.5 rounded-md text-sm font-semibold transition-all duration-200 ${
                                selectedYear === year
                                    ? "bg-[#2563EB] text-white"
                                    : "bg-[#111111] text-[#9ca3af] border border-[#1f1f1f] hover:border-[#333]"
                            }`}
                        >
                            {year}
                        </button>
                    ))}
                </div>

                {/* Class 10 Section */}
                <SectionHeading title="Class 10 Board Excellence" />
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 mb-16">
                    <AnimatePresence mode="popLayout">
                        {class10Results.length > 0 ? class10Results.map((student, idx) => (
                            <ResultCard key={student.id} student={student} index={idx} />
                        )) : (
                            <p className="col-span-full text-center text-[#9ca3af] py-12 italic">No results found for this year.</p>
                        )}
                    </AnimatePresence>
                </div>

                {/* Class 9 & Foundation Section */}
                {otherResults.length > 0 && (
                    <>
                        <SectionHeading title="Class 9 & Foundation Stars" />
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
                            <AnimatePresence mode="popLayout">
                                {otherResults.map((student, idx) => (
                                    <ResultCard key={student.id} student={student} index={idx} />
                                ))}
                            </AnimatePresence>
                        </div>
                    </>
                )}
            </div>
        </section>
    );
};
