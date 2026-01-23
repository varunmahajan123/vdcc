import React from 'react';
import { Section } from '@/components/shared/Section';
import { Container } from '@/components/shared/Container';
import { Typography } from '@/components/shared/Typography';
import ContactForm from '@/components/contact/ContactForm';


export default function ContactPage() {
    return (
        <main>
            <Section>
                <Container>
                    <Typography variant="h1" style={{ marginBottom: '2rem' }}>Contact Us</Typography>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem' }}>
                        <div>
                            <Typography variant="h3" style={{ marginBottom: '1rem' }}>Get in Touch</Typography>
                            <div style={{ marginBottom: '1.5rem' }}>
                                <Typography variant="h4" style={{ fontSize: '1.1rem', color: '#94a3b8' }}>Address</Typography>
                                <Typography variant="body">A1 West Kashmir Avenue, Amritsar, Punjab</Typography>
                            </div>
                            <div style={{ marginBottom: '1.5rem' }}>
                                <Typography variant="h4" style={{ fontSize: '1.1rem', color: '#94a3b8' }}>Phone</Typography>
                                <Typography variant="body">9915255710</Typography>
                            </div>
                            <div style={{ marginBottom: '1.5rem' }}>
                                <Typography variant="h4" style={{ fontSize: '1.1rem', color: '#94a3b8' }}>Email</Typography>
                                <Typography variant="body">varundev26081982@gmail.com</Typography>
                            </div>
                        </div>

                        <div style={{ background: '#1e293b', padding: '2rem', borderRadius: '12px', border: '1px solid #334155' }}>
                            <ContactForm />
                        </div>
                    </div>
                </Container>
            </Section>
        </main>
    );
}
