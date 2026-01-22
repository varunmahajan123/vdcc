import React from 'react';
import { Section } from '@/components/shared/Section';
import { Container } from '@/components/shared/Container';
import { Typography } from '@/components/shared/Typography';

export default function AboutPage() {
    return (
        <main>
            <Section className="py-12">
                <Container>
                    <Typography variant="h1" className="mb-8 text-center md:text-left">About Us</Typography>
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                        gap: '3rem',
                        alignItems: 'center'
                    }}>
                        <div style={{ borderRadius: '12px', overflow: 'hidden', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}>
                            <img
                                src="/images/about/about-classroom.png"
                                alt="About VDCC"
                                style={{ width: '100%', height: 'auto', display: 'block' }}
                            />
                        </div>

                        <div className="about-content">
                            <Typography variant="h3" className="mb-4">Our Mission</Typography>
                            <Typography variant="body">
                                At Varun Dev Coaching Center (VDCC), we are committed to providing high-quality education that empowers students to achieve their full potential. Our holistic approach ensures that every student receives personalized attention and expert guidance.
                            </Typography>
                            <Typography variant="body">
                                With years of experience and a track record of success, our faculty is dedicated to nurturing young minds and building a strong foundation for their future academic and professional endeavors.
                            </Typography>
                        </div>
                    </div>
                </Container>
            </Section>
        </main>
    );
}
