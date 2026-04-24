import React from 'react';

const stats = [
    "15+ Expert Instructors",
    "Avg. 12 Years Experience",
    "100% Subject Specialists",
];

export const FacultyGrid = () => {
    return (
        <section className="bg-[#0a0a0a] py-16 md:py-24 px-4 border-t border-[#1f1f1f]">
            <div className="max-w-3xl mx-auto text-center">
                <span className="inline-block text-[13px] font-bold tracking-[0.1em] uppercase text-[#2563EB] mb-4">
                    Our Faculty
                </span>
                <h2 className="text-2xl md:text-4xl font-black text-white tracking-tight mb-4">
                    15+ Dedicated Subject Experts
                </h2>
                <p className="text-[#9ca3af] text-[15px] leading-[1.7] max-w-xl mx-auto mb-10">
                    Our teaching team comprises experienced subject specialists handpicked for their ability to simplify complex concepts. Each faculty member brings between 8 and 20 years of focused teaching experience.
                </p>

                {/* Stat Chips */}
                <div className="flex flex-wrap items-center justify-center gap-3">
                    {stats.map((stat, index) => (
                        <div
                            key={index}
                            className="bg-[#111111] border border-[#2563EB]/30 rounded-md px-5 py-2.5 text-white text-[13px] font-semibold"
                        >
                            {stat}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
