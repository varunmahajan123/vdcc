"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const topResults = [
    { name: "Rahat", score: "97%", classGroup: "Class 10", imageSrc: "/images/results/rahat-poster.jpg" },
    { name: "Daivik", score: "96%", classGroup: "Class 10", imageSrc: "/images/results/2AB84090-B90B-40A9-B7AB-E46FF10CF1EA.PNG" },
    { name: "Mehakdeep", score: "96%", classGroup: "Class 10", imageSrc: "/images/results/mehakdeep-poster.png" },
    { name: "Ridhi Babbar", score: "95%", classGroup: "Class 9", imageSrc: "/images/results/ridhi-poster.jpg" },
    { name: "Mehreet", score: "94%", classGroup: "Class 10", imageSrc: "/images/results/35B3AE5E-0297-4E34-A063-B96750B9708F.PNG" },
    { name: "Ebadat", score: "94%", classGroup: "Class 10", imageSrc: "/images/results/63B10820-DCEE-4C05-B8FC-F658C24A7764.PNG" },
];

export const ResultsCarousel = () => {
    return (
        <section className="bg-[#0a0a0a] py-14 md:py-20 px-4 border-t border-[#1f1f1f]">
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-10 gap-4">
                    <div>
                        <span className="inline-block text-[13px] font-bold tracking-[0.1em] uppercase text-[#2563EB] mb-3">
                            Academic Achievements
                        </span>
                        <h2 className="text-2xl md:text-4xl font-black text-white tracking-tight">Our Star Performers.</h2>
                        <div className="w-[40px] h-[3px] bg-[#2563EB] rounded-[2px] mt-[10px] mb-3 md:mb-0" />
                        <p className="text-[#9ca3af] text-[15px] mt-2 max-w-lg">
                            Consistent board exam toppers proving the effectiveness of our specialized mentoring.
                        </p>
                    </div>
                    <Link
                        href="/results"
                        className="hidden md:inline-flex items-center justify-center border-2 border-white text-white font-bold text-sm rounded-full px-6 py-2.5 hover:bg-[#2563EB] hover:text-white hover:border-[#2563EB] transition-all duration-200"
                    >
                        View All Results
                    </Link>
                </div>

                {/* Horizontal Scroll on Mobile / Grid on Desktop */}
                <div className="flex overflow-x-auto snap-x snap-mandatory md:grid md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 pb-6 md:pb-0 -mx-4 px-4 md:mx-0 md:px-0 scrollbar-hide">
                    {topResults.map((student, index) => (
                        <div key={index} className="snap-start shrink-0 w-[240px] sm:w-[260px] md:w-auto">
                            <div className="relative bg-[#111111] border border-[#1f1f1f] rounded-lg overflow-hidden hover:border-[#2563EB] transition-colors duration-300 group">
                                <div className="relative w-full aspect-[4/5] bg-[#0a0a0a] overflow-hidden">
                                    <Image
                                        src={student.imageSrc}
                                        alt={`${student.name} — ${student.score}`}
                                        fill
                                        className="object-cover object-top group-hover:scale-[1.02] transition-transform duration-500"
                                        sizes="(max-width: 768px) 240px, 25vw"
                                    />
                                </div>
                                <div className="p-3">
                                    <div className="flex items-center justify-between">
                                        <h3 className="text-white font-bold text-[15px] leading-tight">{student.name}</h3>
                                        <span className="text-[#D4AF37] font-extrabold text-lg">{student.score}</span>
                                    </div>
                                    <p className="text-[#9ca3af] text-[12px] mt-0.5">{student.classGroup} Board</p>
                                </div>
                                {/* Gold star */}
                                <div className="absolute top-2 right-2 w-6 h-6 rounded-full bg-[#D4AF37] text-black flex items-center justify-center text-xs font-bold shadow-md">★</div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Mobile CTA */}
                <div className="mt-6 flex justify-center md:hidden">
                    <Link
                        href="/results"
                        className="w-full text-center border-2 border-white text-white font-bold text-sm rounded-full px-6 py-3 hover:bg-[#2563EB] hover:text-white hover:border-[#2563EB] transition-all duration-200"
                    >
                        View All Results
                    </Link>
                </div>
            </div>

            <style jsx global>{`
                .scrollbar-hide::-webkit-scrollbar { display: none; }
                .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
            `}</style>
        </section>
    );
};
