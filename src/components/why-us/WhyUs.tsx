import React from 'react';
import { Lightbulb, Users, UserCheck, Award, Trophy, Building } from 'lucide-react';

const features = [
    {
        icon: Lightbulb,
        title: "Concept-Based Learning",
        body: "We never let students memorize blindly. Every topic is broken down until the logic clicks.",
    },
    {
        icon: Users,
        title: "Small Batch Sizes",
        body: "Maximum 15 students per batch. Your child always gets the attention they deserve.",
    },
    {
        icon: UserCheck,
        title: "Personal Mentoring",
        body: "Individual progress tracking for every student. We know each child's strengths and gaps.",
    },
    {
        icon: Award,
        title: "Experienced Faculty",
        body: "Subject specialists with 10–20 years of teaching experience. Not just qualified — proven.",
    },
    {
        icon: Trophy,
        title: "Result-Oriented Preparation",
        body: "Consistent board exam toppers year after year. We map the path. Students walk it.",
    },
    {
        icon: Building,
        title: "Strong Foundation First",
        body: "From Playpen to Class 10 — every level builds on the last. No weak links, ever.",
    },
];

export const WhyUs = () => {
    return (
        <section className="bg-[#0a0a0a] py-14 md:py-20 px-4 border-t border-[#1f1f1f]">
            <div className="max-w-5xl mx-auto">
                {/* Header */}
                <div className="text-center mb-12">
                    <span className="inline-block text-[13px] font-bold tracking-[0.1em] uppercase text-[#2563EB] mb-4">
                        The VDCC Difference
                    </span>
                    <h2 className="text-2xl md:text-4xl font-black text-white tracking-tight">
                        Why Choose Us
                    </h2>
                    <div className="w-[40px] h-[3px] bg-[#2563EB] rounded-[2px] mx-auto mt-[10px] mb-3" />
                    <p className="text-[#9ca3af] text-[15px] max-w-lg mx-auto">
                        We build capable, confident learners ready to tackle any academic challenge.
                    </p>
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-2 lg:grid-cols-3 gap-[12px] lg:gap-[20px]">
                    {features.map((feature, index) => {
                        const Icon = feature.icon;
                        return (
                            <div
                                key={index}
                                className="bg-[#111111] border border-[#1f1f1f] border-t-2 border-t-[#2563EB] rounded-[14px] py-[18px] px-[14px] md:py-6 md:px-6"
                            >
                                <Icon size={26} className="text-[#2563EB] mb-3" strokeWidth={1.8} />
                                <h3 className="text-white font-bold text-[13px] md:text-[15px] mb-2">{feature.title}</h3>
                                <p className="text-[rgba(255,255,255,0.5)] text-[12px] md:text-[13px] leading-[1.6] m-0">{feature.body}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};
