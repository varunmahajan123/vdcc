"use client";

import React from 'react';
import { Section } from '../shared/Section';
import { Container } from '../shared/Container';
import { Button } from '../ui/Button';
import { brand } from '@/config/brand';
import { motion } from 'framer-motion';
import { Phone, MapPin, ChevronDown } from 'lucide-react';
import { faqItems } from '@/data/faq';

/* ─────────────────────────────────────────────
   Animation Variants (matching existing codebase patterns)
   ───────────────────────────────────────────── */
const fadeUp = {
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
};

/* ─────────────────────────────────────────────
   Main Component
   ───────────────────────────────────────────── */
export const ExcellenceHub = () => {
    const waLink = `https://wa.me/91${brand.contact.primaryPhone.replace(/\D/g, "")}`;
    const callLink = `tel:+91${brand.contact.primaryPhone.replace(/\D/g, "")}`;

    return (
        <>
            {/* ──────── SECTION 1: Our Approach to Learning ──────── */}
            <Section className="bg-[#0a0a0a] border-t border-[#1f1f1f] overflow-hidden relative">
                <Container className="max-w-4xl">
                    <motion.div {...fadeUp}>
                        {/* Section header — matches WhyUs / FounderSection pattern */}
                        <div className="text-center mb-10 md:mb-14">
                            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-primary/10 border border-accent-primary/20 text-accent-primary text-[10px] uppercase tracking-widest font-bold mb-4">
                                Our Approach
                            </span>
                            <h2 className="font-heading text-2xl md:text-4xl font-black text-white tracking-tight">
                                How Learning Actually Works at VDCC
                            </h2>
                            <div className="w-[40px] h-[3px] bg-[#2563EB] rounded-[2px] mx-auto mt-[10px] mb-3" />
                        </div>

                        {/* Long-form paragraphs — the SEO content body */}
                        <article className="space-y-6 text-[#9ca3af] text-[15px] md:text-[17px] leading-[1.8]">
                            <p>
                                A child joining VDCC at the Playpen level doesn&apos;t sit in a chair and copy from a board. They learn through structured play — sorting shapes, counting objects in groups, recognising patterns — activities designed by our early-learning specialists to build the cognitive habits that formal academics will later demand. By the time they reach Class 1, they already know how to observe, categorise, and ask &quot;why.&quot; That&apos;s the starting advantage most coaching centres in Amritsar never think about, because they only begin at Class 6 or 8.
                            </p>
                            <p>
                                As students move into Primary and Middle School, each subject session at VDCC follows a deliberate rhythm. The teacher introduces a concept — say, how fractions relate to division — not by writing a formula on the board, but by walking students through a real scenario: splitting a recipe, dividing pocket money fairly, measuring cloth. Students discuss, make mistakes, correct each other. Only after that does the teacher formalise the rule. This is what concept-based learning looks like in practice at our tuition classes for school students — it&apos;s slower on day one, but by exam week, these students solve problems they&apos;ve never seen before, because they understand the logic underneath.
                            </p>
                            <p>
                                By Classes 9 and 10, the stakes are higher and our mentoring becomes more targeted. Each student has a progress card that their assigned mentor reviews weekly — not just marks, but patterns. Is a student consistently losing marks on graph-based questions? Struggling with Hindi grammar but strong in comprehension? We catch these patterns early and adjust. Parents receive honest updates, not vague reassurances. This level of academic support in Amritsar is what turns anxious students into confident exam-takers: they walk into the board exam knowing exactly what they know, and knowing they&apos;ve practiced their weak spots until those spots aren&apos;t weak anymore.
                            </p>
                            <p>
                                The thread connecting Playpen through Class 10 is continuity. A student who has been with VDCC for several years has never faced a jarring transition — each year&apos;s curriculum builds on the last, taught by faculty who communicate with each other about every child&apos;s trajectory. There are no gaps, no sudden jumps in difficulty, and no child left wondering why the new topic doesn&apos;t make sense. That continuity is the quiet advantage families discover only after they&apos;ve been part of our coaching institute in Amritsar for a year or two.
                            </p>
                        </article>
                    </motion.div>
                </Container>
            </Section>

            {/* ──────── SECTION 2: Local Context ──────── */}
            <Section className="bg-bg-primary overflow-hidden relative">
                <Container className="max-w-4xl">
                    <motion.div {...fadeUp}>
                        <div className="text-center mb-10 md:mb-14">
                            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-secondary/10 border border-accent-secondary/20 text-accent-secondary text-[10px] uppercase tracking-widest font-bold mb-4">
                                Rooted in Amritsar
                            </span>
                            <h2 className="font-heading text-2xl md:text-4xl font-black text-white tracking-tight">
                                A Part of Amritsar&apos;s Learning Community
                            </h2>
                            <div className="w-[40px] h-[3px] bg-[#2563EB] rounded-[2px] mx-auto mt-[10px] mb-3" />
                        </div>

                        <div className="bg-[#111111] border border-[#1f1f1f] rounded-[14px] p-6 md:p-10">
                            <p className="text-[#9ca3af] text-[15px] md:text-[17px] leading-[1.8] mb-5">
                                VDCC sits in the heart of West Kashmir Avenue — a neighbourhood where many of our families live within walking distance. Over two decades, the relationship between the centre and the community around it has grown into something unusual for a coaching institute: parents stop by to chat with teachers after drop-off, older alumni recommend us to neighbours, and it&apos;s common for siblings — sometimes three from the same family — to study here across different class levels.
                            </p>
                            <p className="text-[#9ca3af] text-[15px] md:text-[17px] leading-[1.8]">
                                That local trust isn&apos;t built by advertising — it&apos;s built by results that families in the area can verify firsthand. When a parent in Amritsar asks a neighbour, &quot;Where does your child go for tuition?,&quot; and the answer is VDCC, it carries weight because they can see the difference in that child&apos;s confidence and marks. For families across Amritsar looking for dependable, long-term academic support, VDCC has become the name that keeps coming up in conversations — at school gates, at neighbourhood gatherings, and in parent WhatsApp groups.
                            </p>
                        </div>
                    </motion.div>
                </Container>
            </Section>

            {/* ──────── SECTION 3: FAQ Accordion ──────── */}
            <Section className="bg-[#0a0a0a] border-t border-[#1f1f1f] overflow-hidden relative">
                <Container className="max-w-4xl">
                    <motion.div {...fadeUp}>
                        <div className="text-center mb-10 md:mb-14">
                            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-primary/10 border border-accent-primary/20 text-accent-primary text-[10px] uppercase tracking-widest font-bold mb-4">
                                Common Questions
                            </span>
                            <h2 className="font-heading text-2xl md:text-4xl font-black text-white tracking-tight">
                                Frequently Asked Questions
                            </h2>
                            <div className="w-[40px] h-[3px] bg-[#2563EB] rounded-[2px] mx-auto mt-[10px] mb-3" />
                            <p className="text-[#9ca3af] text-[15px] max-w-lg mx-auto">
                                Everything parents ask before enrolling — answered honestly.
                            </p>
                        </div>

                        <div className="space-y-3">
                            {faqItems.map((item, index) => (
                                <details
                                    key={index}
                                    className="group bg-[#111111] border border-[#1f1f1f] rounded-[14px] overflow-hidden transition-colors duration-300 hover:border-[#2563EB]/30"
                                >
                                    <summary className="flex items-center justify-between gap-4 px-5 py-4 md:px-6 md:py-5 cursor-pointer list-none [&::-webkit-details-marker]:hidden select-none">
                                        <h3 className="text-white font-bold text-[14px] md:text-[16px] leading-snug pr-2">
                                            {item.question}
                                        </h3>
                                        <ChevronDown
                                            size={20}
                                            className="text-[#9ca3af] shrink-0 transition-transform duration-300 group-open:rotate-180"
                                        />
                                    </summary>
                                    <div className="px-5 pb-5 md:px-6 md:pb-6 pt-0">
                                        <div className="w-full h-[1px] bg-[#1f1f1f] mb-4" />
                                        <p className="text-[#9ca3af] text-[14px] md:text-[15px] leading-[1.7]">
                                            {item.answer}
                                        </p>
                                    </div>
                                </details>
                            ))}
                        </div>
                    </motion.div>
                </Container>
            </Section>

            {/* ──────── SECTION 4: Closing CTA ──────── */}
            <Section className="bg-bg-primary overflow-hidden relative">
                {/* Background effects — matching CallToAction.tsx pattern */}
                <div className="absolute inset-0 bg-bg-primary z-0" />
                <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-accent-primary/5 rounded-full blur-[140px] opacity-40 z-0" />
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-accent-secondary/5 rounded-full blur-[120px] opacity-30 z-0" />

                <Container className="relative z-10 max-w-4xl">
                    <motion.div
                        {...fadeUp}
                        className="bg-bg-secondary/40 backdrop-blur-3xl border border-white/5 rounded-[2rem] md:rounded-[3rem] p-8 md:p-16 shadow-[0_40px_120px_rgba(0,0,0,0.6)] flex flex-col items-center text-center relative overflow-hidden"
                    >
                        {/* Dot grid texture */}
                        <div className="absolute inset-0 opacity-[0.02] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />

                        <div className="inline-flex items-center gap-3 px-5 py-2 mb-8 rounded-full bg-accent-primary/10 border border-accent-primary/20 text-accent-primary font-black tracking-[0.2em] uppercase text-[10px] sm:text-xs shadow-2xl">
                            <span className="w-2 h-2 rounded-full bg-accent-primary animate-pulse" />
                            Start Your Child&apos;s Journey
                        </div>

                        <h2 className="font-heading text-3xl md:text-5xl font-bold tracking-tighter text-white leading-[1.1] mb-6">
                            Ready to See the<br />
                            <span className="text-white opacity-40">VDCC Difference?</span>
                        </h2>

                        <p className="text-text-secondary text-base md:text-lg leading-relaxed opacity-80 max-w-xl mx-auto mb-10">
                            Visit us at A1 West Kashmir Avenue, Amritsar, or reach out directly. We&apos;ll schedule a counseling session and walk you through how VDCC can help your child.
                        </p>

                        {/* CTA Buttons — reusing existing Button component */}
                        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto items-center justify-center mb-10">
                            <Button href={waLink} target="_blank" size="lg" className="w-full sm:w-auto px-10 h-14 text-base shadow-[0_15px_40px_rgba(56,189,248,0.2)]">
                                WhatsApp Us
                            </Button>
                            <Button href={callLink} size="lg" variant="outline" className="w-full sm:w-auto px-10 h-14 text-base backdrop-blur-md">
                                Call Now
                            </Button>
                        </div>

                        {/* Contact details */}
                        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8 text-text-tertiary text-sm">
                            <a href={callLink} className="flex items-center gap-2 hover:text-white transition-colors">
                                <Phone size={16} className="text-accent-primary" />
                                <span>{brand.contact.primaryPhone}</span>
                            </a>
                            <div className="hidden sm:block w-[1px] h-4 bg-white/10" />
                            <span className="flex items-center gap-2">
                                <MapPin size={16} className="text-accent-primary" />
                                <span>A1 West Kashmir Avenue, Amritsar</span>
                            </span>
                        </div>
                    </motion.div>
                </Container>
            </Section>
        </>
    );
};
