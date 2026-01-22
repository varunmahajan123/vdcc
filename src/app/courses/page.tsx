import React from 'react';
import { Section } from '@/components/shared/Section';
import { Container } from '@/components/shared/Container';
import { Typography } from '@/components/shared/Typography';

export default function CoursesPage() {
    return (
        <main>
            <Section>
                <Container>
                    <Typography variant="h1" style={{ marginBottom: '2rem' }}>Our Courses</Typography>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                        {/* Reusing the card structure but inline for simplicity in this page view */}
                        <div style={{ background: '#1e293b', borderRadius: '12px', overflow: 'hidden', border: '1px solid #334155' }}>
                            <div style={{ height: '200px', background: '#cbd5e0' }}>
                                <img src="/images/courses/primary-classroom.jpeg" alt="Primary" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                            </div>
                            <div style={{ padding: '1.5rem' }}>
                                <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '0.5rem', color: '#f8fafc' }}>Primary Wing</h3>
                                <p style={{ color: '#cbd5e1', marginBottom: '1rem' }}>Foundational learning for Class 1st to 8th. Focus on concept building.</p>
                                <button style={{ background: '#0ea5e9', color: 'white', padding: '0.5rem 1rem', borderRadius: '4px', fontWeight: '600' }}>View Details</button>
                            </div>
                        </div>
                        <div style={{ background: '#1e293b', borderRadius: '12px', overflow: 'hidden', border: '1px solid #334155' }}>
                            <div style={{ height: '200px', background: '#cbd5e0' }}>
                                <img src="/images/courses/middle-classroom.jpeg" alt="Secondary" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                            </div>
                            <div style={{ padding: '1.5rem' }}>
                                <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '0.5rem', color: '#f8fafc' }}>Secondary Wing</h3>
                                <p style={{ color: '#cbd5e1', marginBottom: '1rem' }}>Advanced preparation for Class 9th & 10th. Board exam focus.</p>
                                <button style={{ background: '#0ea5e9', color: 'white', padding: '0.5rem 1rem', borderRadius: '4px', fontWeight: '600' }}>View Details</button>
                            </div>
                        </div>
                        <div style={{ background: '#1e293b', borderRadius: '12px', overflow: 'hidden', border: '1px solid #334155' }}>
                            <div style={{ height: '200px', background: '#cbd5e0' }}>
                                <img src="/images/courses/secondary-classroom.jpeg" alt="Senior" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                            </div>
                            <div style={{ padding: '1.5rem' }}>
                                <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '0.5rem', color: '#f8fafc' }}>Senior Wing</h3>
                                <p style={{ color: '#cbd5e1', marginBottom: '1rem' }}>Expert coaching for Class 11th & 12th + JEE/NEET Prep.</p>
                                <button style={{ background: '#0ea5e9', color: 'white', padding: '0.5rem 1rem', borderRadius: '4px', fontWeight: '600' }}>View Details</button>
                            </div>
                        </div>
                    </div>
                </Container>
            </Section>
        </main>
    );
}
