"use client";

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Container } from '@/components/shared/Container';
import { Section } from '@/components/shared/Section';
import { Typography } from '@/components/shared/Typography';
import { useAuthProtection } from '@/hooks/useAuthProtection';

interface Resource {
    _id: string;
    title: string;
    classLevel: string;
    subject: string;
    fileUrl: string;
    createdAt: string;
}

export default function ResourcesPage() {
    const router = useRouter();
    const { isLoading: authLoading, isAuthenticated } = useAuthProtection();
    const [resources, setResources] = useState<Resource[]>([]);
    const [dataLoading, setDataLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        if (!isAuthenticated) return;

        const token = localStorage.getItem('token');
        const fetchResources = async () => {
            try {
                const response = await fetch('/api/resources', {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                });

                if (response.status === 401) {
                    localStorage.removeItem('token');
                    router.push('/login');
                    return;
                }

                if (!response.ok) {
                    throw new Error('Failed to fetch resources');
                }

                const data = await response.json();
                setResources(data.data);
            } catch (err) {
                setError('Failed to load study resources.');
                console.error(err);
            } finally {
                setDataLoading(false);
            }
        };

        fetchResources();
    }, [isAuthenticated, router]);

    const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        router.push('/login');
    };

    if (authLoading || !isAuthenticated) {
        return (
            <div style={{ minHeight: '100vh', background: '#0f172a', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white' }}>
                <p>Loading...</p>
            </div>
        );
    }

    if (dataLoading) {
        return (
            <div style={{ minHeight: '100vh', background: '#0f172a', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white' }}>
                <p>Loading Resources...</p>
            </div>
        );
    }

    return (
        <main style={{ background: '#0f172a', minHeight: '100vh', color: 'white' }}>
            <Section>
                <Container>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
                        <Typography variant="h2">Student Resources</Typography>
                        <button
                            onClick={handleLogout}
                            style={{
                                background: '#ef4444',
                                color: 'white',
                                border: 'none',
                                padding: '0.5rem 1rem',
                                borderRadius: '6px',
                                cursor: 'pointer',
                                fontWeight: 'bold'
                            }}
                        >
                            Logout
                        </button>
                    </div>

                    <div style={{ marginBottom: '2rem' }}>
                        {error && <p style={{ color: '#ef4444' }}>{error}</p>}

                        {resources.length === 0 && !error ? (
                            <div style={{ textAlign: 'center', padding: '3rem', color: '#94a3b8' }}>
                                <p>No study resources available yet.</p>
                                <p style={{ fontSize: '0.9rem', marginTop: '0.5rem' }}>Check back later!</p>
                            </div>
                        ) : (
                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1.5rem' }}>
                                {resources.map((res) => (
                                    <div key={res._id} style={{ background: '#1e293b', padding: '1.5rem', borderRadius: '12px', border: '1px solid #334155', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                        <div>
                                            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                                                <span style={{ background: '#0ea5e9', color: 'white', fontSize: '0.75rem', padding: '0.25rem 0.5rem', borderRadius: '4px', fontWeight: 'bold' }}>{res.classLevel}</span>
                                                <span style={{ color: '#94a3b8', fontSize: '0.8rem' }}>{new Date(res.createdAt).toLocaleDateString()}</span>
                                            </div>
                                            <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: 'white', marginBottom: '0.25rem' }}>{res.title}</h3>
                                            <p style={{ color: '#cbd5e1', fontSize: '0.9rem' }}>{res.subject}</p>
                                        </div>

                                        <a
                                            href={res.fileUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            style={{
                                                display: 'block',
                                                textAlign: 'center',
                                                background: '#0f172a',
                                                color: '#38bdf8',
                                                padding: '0.75rem',
                                                borderRadius: '6px',
                                                textDecoration: 'none',
                                                fontWeight: '500',
                                                border: '1px solid #334155',
                                                marginTop: 'auto'
                                            }}
                                        >
                                            Download File
                                        </a>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </Container>
            </Section>
        </main>
    );
}
