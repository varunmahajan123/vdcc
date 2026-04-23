import React from 'react';
import { Section } from '@/components/shared/Section';
import { Container } from '@/components/shared/Container';
import { Typography } from '@/components/shared/Typography';
import { ResultsGallery } from '@/components/results/ResultsGallery';
import { brand } from '@/config/brand';
import { Button } from '@/components/ui/Button';

export default function ResultsPage() {
    const waLink = `https://wa.me/91${brand.contact.primaryPhone.replace(/\D/g, "")}?text=${encodeURIComponent("Hello! I saw the amazing results and I am interested in enrolling my child for the upcoming batch.")}`;

    return (
        <main>
            {/* Results Hero */}
            <Section className="relative bg-bg-secondary pt-32 pb-16 border-b border-border overflow-hidden">
                {/* Subtle gold glow backdrop */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-[#d4af37]/5 rounded-[100%] blur-[120px] pointer-events-none" />
                
                <Container className="text-center max-w-4xl relative z-10">
                    <span className="inline-block px-4 py-1.5 rounded-full bg-accent-primary/10 border border-accent-primary/20 text-accent-primary font-bold tracking-widest uppercase text-xs sm:text-sm mb-6">
                        Verified Excellence
                    </span>
                    <Typography variant="h1" className="mb-6 font-extrabold text-white">
                        Where Action Speaks Louder Than Words
                    </Typography>
                    <Typography variant="body" className="text-lg md:text-xl text-text-secondary max-w-2xl mx-auto">
                        Year after year, VDCC students systematically outperform city standards. We don't promise success; we consistently map the path to it. 
                    </Typography>
                </Container>
            </Section>

            <ResultsGallery />

            {/* Custom Conversion CTA */}
            <Section className="py-24 relative overflow-hidden bg-bg-secondary border-t border-border/50">
                <Container className="relative z-10 max-w-3xl mx-auto text-center">
                    <div className="bg-bg-primary border border-[#d4af37]/20 rounded-3xl p-10 md:p-14 shadow-2xl flex flex-col items-center">
                        <div className="w-16 h-16 bg-[#d4af37]/10 rounded-full flex items-center justify-center text-[#d4af37] font-bold text-3xl mb-6 shadow-inner">
                            &#x2605;
                        </div>
                        
                        <Typography variant="h2" className="mb-4 text-3xl md:text-4xl text-white">
                            Your Child Could Be Here Next Year.
                        </Typography>
                        
                        <Typography variant="body" className="mb-10 text-text-secondary">
                            Don't leave their fundamental development to chance. Secure an enrollment slot with Amritsar's most trusted faculty today.
                        </Typography>
                        
                        <Button href={waLink} target="_blank" size="lg" variant="primary" className="w-full sm:w-auto px-10 bg-[#25D366] hover:bg-[#128C7E] shadow-[0_0_20px_rgba(37,211,102,0.3)] border-none text-base">
                            Message Us on WhatsApp
                        </Button>
                        <p className="mt-4 text-xs text-text-tertiary tracking-widest uppercase font-semibold">Immediate Response Guarantee</p>
                    </div>
                </Container>
            </Section>
        </main>
    );
}
