"use client";

import React from 'react';
import Link from 'next/link';
import { brand } from '@/config/brand';
import { ChevronRight, Trophy } from 'lucide-react';

export const Hero = () => {
    const waLink = `https://wa.me/91${brand.contact.primaryPhone.replace(/\D/g, "")}`;

    return (
        <section className="hero-section">
            <style dangerouslySetInnerHTML={{ __html: `
                .hero-section {
                    position: relative;
                    min-height: 100vh;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    padding-top: 80px;
                    padding-bottom: 80px;
                    padding-left: 24px;
                    padding-right: 24px;
                    overflow: hidden;
                    background: linear-gradient(135deg, #020818 0%, #0a0f2e 40%, #0d1b4b 70%, #071225 100%);
                }
                @media (min-width: 768px) {
                    .hero-section {
                        padding-left: 48px;
                        padding-right: 48px;
                        padding-bottom: 60px;
                    }
                }
                @media (min-width: 1024px) {
                    .hero-section {
                        padding-left: 80px;
                        padding-right: 80px;
                    }
                }

                .hero-glow-center {
                    position: absolute; top: 0; left: 0; right: 0; bottom: 0;
                    pointer-events: none;
                    background: radial-gradient(ellipse 80% 60% at 50% 40%, rgba(37, 99, 235, 0.15) 0%, transparent 70%);
                }
                .hero-glow-tl {
                    position: absolute; top: 0; left: 0; right: 0; bottom: 0;
                    pointer-events: none;
                    background: radial-gradient(ellipse 40% 30% at 15% 20%, rgba(6, 182, 212, 0.08) 0%, transparent 60%);
                }
                .hero-grid {
                    position: absolute; top: 0; left: 0; right: 0; bottom: 0;
                    pointer-events: none;
                    background-image: radial-gradient(rgba(255,255,255,0.04) 1px, transparent 1px);
                    background-size: 32px 32px;
                }
                .hero-bottom-fade {
                    position: absolute; bottom: 0; left: 0; right: 0; height: 100px;
                    pointer-events: none;
                    background: linear-gradient(to bottom, transparent, #0a0f1e);
                }

                @keyframes pulse-dot {
                    0%, 100% { opacity: 1; transform: scale(1); }
                    50% { opacity: 0.5; transform: scale(1.3); }
                }
                .dot-pulse {
                    animation: pulse-dot 2s ease-in-out infinite;
                }

                @keyframes fadeUp {
                    from { opacity: 0; transform: translateY(20px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                .anim-badge { animation: fadeUp 0.5s ease-out 0.1s both; }
                .anim-headline { animation: fadeUp 0.6s ease-out 0.2s both; }
                .anim-subtext { animation: fadeUp 0.6s ease-out 0.35s both; }
                .anim-stats { animation: fadeUp 0.6s ease-out 0.45s both; }
                .anim-buttons { animation: fadeUp 0.5s ease-out 0.55s both; }

                .gradient-text {
                    background: linear-gradient(90deg, #2563EB 0%, #06b6d4 50%, #38bdf8 100%);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                    background-clip: text;
                }

                .btn-primary {
                    background: linear-gradient(135deg, #2563EB 0%, #1d4ed8 100%);
                    box-shadow: 0 0 0 0 rgba(37, 99, 235, 0.4);
                    transition: all 0.2s ease;
                }
                .btn-primary:hover {
                    background: linear-gradient(135deg, #1d4ed8 0%, #1e40af 100%);
                    box-shadow: 0 0 24px rgba(37, 99, 235, 0.5), 0 4px 16px rgba(37, 99, 235, 0.3);
                    transform: translateY(-1px);
                }

                .btn-secondary {
                    background: rgba(37, 206, 109, 0.1);
                    border: 1.5px solid rgba(37, 206, 109, 0.5);
                    transition: all 0.2s ease;
                }
                .btn-secondary:hover {
                    background: rgba(37, 206, 109, 0.2);
                    border-color: rgba(37, 206, 109, 0.8);
                    box-shadow: 0 0 20px rgba(37, 206, 109, 0.2);
                    transform: translateY(-1px);
                }

                .hero-content {
                    position: relative;
                    z-index: 10;
                    width: 100%;
                    max-width: 100%;
                    text-align: center;
                    margin: 0 auto;
                }
                @media (min-width: 1024px) {
                    .hero-content {
                        max-width: 600px;
                    }
                }

                .glass-card-wrapper {
                    display: none;
                }
                @media (min-width: 1024px) {
                    .glass-card-wrapper {
                        display: block;
                        position: absolute;
                        right: 8%;
                        top: 50%;
                        animation: cardEnter 0.8s ease-out 0.7s both;
                        z-index: 20;
                    }
                    .glass-card {
                        width: 220px;
                        background: rgba(255, 255, 255, 0.04);
                        backdrop-filter: blur(12px);
                        border: 1px solid rgba(255, 255, 255, 0.1);
                        border-radius: 20px;
                        padding: 24px 20px;
                        box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255,255,255,0.1);
                        animation: float-card 6s ease-in-out infinite;
                    }
                }

                @keyframes cardEnter {
                    from { opacity: 0; transform: translateY(-50%) translateX(30px); }
                    to { opacity: 1; transform: translateY(-50%) translateX(0); }
                }
                @keyframes float-card {
                    0%, 100% { transform: translateY(0px); }
                    50% { transform: translateY(-10px); }
                }

                .stats-wrapper {
                    display: grid;
                    grid-template-columns: repeat(2, 1fr);
                    gap: 20px 16px;
                    background: rgba(255, 255, 255, 0.03);
                    border: 1px solid rgba(255, 255, 255, 0.08);
                    border-radius: 16px;
                    padding: 20px 16px;
                    margin-top: 24px;
                    margin-bottom: 8px;
                    box-shadow: 0 4px 24px rgba(0, 0, 0, 0.2);
                    backdrop-filter: blur(8px);
                    width: 100%;
                }
                @media (min-width: 768px) {
                    .stats-wrapper {
                        display: inline-grid;
                        grid-template-columns: repeat(4, 1fr);
                        gap: 0;
                        padding: 20px 0;
                        width: auto;
                    }
                    .stat-item {
                        padding: 0 28px;
                        border-right: 1px solid rgba(255, 255, 255, 0.1);
                    }
                    .stat-item:last-child {
                        border-right: none;
                    }
                }
            `}} />

            {/* Background Layers */}
            <div className="hero-glow-center" />
            <div className="hero-glow-tl" />
            <div className="hero-grid" />
            <div className="hero-bottom-fade" />

            <div className="hero-content">
                {/* Admissions Badge */}
                <div className="anim-badge inline-flex items-center justify-center gap-2 rounded-full border border-[rgba(37,99,235,0.5)] bg-[rgba(37,99,235,0.12)] px-[14px] py-[5px] md:px-[16px] md:py-[6px] mb-6 mx-auto">
                    <div className="w-[8px] h-[8px] rounded-full bg-[#22c55e] dot-pulse shrink-0" />
                    <span className="text-[#93c5fd] font-medium text-[11px] md:text-[13px] tracking-[0.05em]">
                        Admissions Open 2026–27
                    </span>
                </div>

                {/* Main Headline */}
                <h1 className="anim-headline font-extrabold text-[2.4rem] md:text-[3.5rem] lg:text-[4.5rem] leading-[1.1] tracking-[-0.02em] text-white mb-4 md:mb-5">
                    Securing Futures<br />
                    <span className="gradient-text">Through Excellence.</span>
                </h1>

                {/* Subtext */}
                <p className="anim-subtext text-[15px] md:text-[18px] text-[rgba(255,255,255,0.55)] font-normal leading-[1.6] max-w-[420px] w-full mx-auto text-center">
                    Amritsar's most trusted coaching institute.<br />
                    From Playpen to Class 10.
                </p>

                {/* Trust Stats Row (Now 4 items, 2x2 grid on mobile) */}
                <div className="anim-stats stats-wrapper mx-auto">
                    <div className="stat-item flex flex-col items-center">
                        <span className="text-white text-[20px] md:text-[22px] font-extrabold">10K+</span>
                        <span className="text-[rgba(255,255,255,0.45)] text-[10px] md:text-[11px] font-medium uppercase tracking-[0.08em] mt-1 text-center">Successful Students</span>
                    </div>
                    <div className="stat-item flex flex-col items-center">
                        <span className="text-white text-[20px] md:text-[22px] font-extrabold">15+</span>
                        <span className="text-[rgba(255,255,255,0.45)] text-[10px] md:text-[11px] font-medium uppercase tracking-[0.08em] mt-1 text-center">Expert Faculty</span>
                    </div>
                    <div className="stat-item flex flex-col items-center">
                        <span className="text-white text-[20px] md:text-[22px] font-extrabold">25+</span>
                        <span className="text-[rgba(255,255,255,0.45)] text-[10px] md:text-[11px] font-medium uppercase tracking-[0.08em] mt-1 text-center">Years of Experience</span>
                    </div>
                    <div className="stat-item flex flex-col items-center">
                        <span className="text-white text-[16px] md:text-[18px] font-extrabold mt-0.5 md:mt-1">Playpen to Class 10</span>
                        <span className="text-[rgba(255,255,255,0.45)] text-[10px] md:text-[11px] font-medium uppercase tracking-[0.08em] mt-1 md:mt-1.5 text-center">Classes Offered</span>
                    </div>
                </div>

                {/* CTA Buttons */}
                <div className="anim-buttons flex flex-col md:flex-row items-center justify-center gap-[12px] md:gap-[16px] w-full max-w-[360px] md:max-w-none mx-auto mt-[28px]">
                    <a
                        href="/courses"
                        className="btn-primary w-full md:w-auto flex items-center justify-center gap-2 rounded-[50px] px-[36px] py-[16px] text-white text-[16px] font-bold"
                    >
                        Enroll Now
                        <ChevronRight size={18} />
                    </a>
                    <a
                        href={waLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-secondary w-full md:w-auto flex items-center justify-center gap-2 rounded-[50px] px-[36px] py-[16px] text-[#4ade80] text-[16px] font-semibold"
                    >
                        <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                        </svg>
                        WhatsApp Us
                    </a>
                </div>
            </div>

            {/* Desktop Glass Card */}
            <div className="glass-card-wrapper">
                <div className="glass-card">
                    <div className="flex items-center gap-2">
                        <Trophy size={20} color="#f59e0b" />
                        <span className="text-[#f59e0b] text-[11px] font-bold tracking-[0.12em]">TOP RESULTS</span>
                    </div>
                    
                    <div className="w-full h-[1px] bg-[rgba(255,255,255,0.08)] my-[12px]" />
                    
                    <div className="flex flex-col gap-[8px]">
                        <div className="flex justify-between items-center">
                            <span className="text-[rgba(255,255,255,0.8)] text-[13px]">Rahat</span>
                            <span className="text-[#60a5fa] text-[13px] font-bold">97%</span>
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="text-[rgba(255,255,255,0.8)] text-[13px]">Mehakdeep</span>
                            <span className="text-[#60a5fa] text-[13px] font-bold">96%</span>
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="text-[rgba(255,255,255,0.8)] text-[13px]">Ridhi</span>
                            <span className="text-[#60a5fa] text-[13px] font-bold">95%</span>
                        </div>
                    </div>
                    
                    <div className="mt-[12px] text-[rgba(255,255,255,0.35)] text-[11px]">
                        Class 10 Board 2025
                    </div>
                    
                    <div className="mt-[8px]">
                        <Link href="/results" className="text-[#60a5fa] text-[12px] font-semibold hover:text-[#93c5fd] transition-colors">
                            View All Results →
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};
