"use client";

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Container } from '@/components/shared/Container';
import { Section } from '@/components/shared/Section';
import { Typography } from '@/components/shared/Typography';
import { useAuthProtection } from '@/hooks/useAuthProtection';

interface ContactMessage {
    _id: string;
    name: string;
    email: string;
    phone?: string;
    message: string;
    createdAt: string;
}

export default function AdminPage() {
    const router = useRouter();
    const { isLoading: authLoading, isAuthenticated } = useAuthProtection();
    const [messages, setMessages] = useState<ContactMessage[]>([]);
    const [dataLoading, setDataLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        if (!isAuthenticated) return;

        const token = localStorage.getItem('token');
        const fetchMessages = async () => {
            try {
                const response = await fetch('/api/admin/contacts', {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                });

                if (response.status === 401 || response.status === 403) {
                    localStorage.removeItem('token');
                    router.push('/login');
                    return;
                }

                if (!response.ok) {
                    throw new Error('Failed to fetch messages');
                }

                const data = await response.json();
                setMessages(data.data);
            } catch (err) {
                setError('Failed to load dashboard data.');
                console.error(err);
            } finally {
                setDataLoading(false);
            }
        };

        fetchMessages();
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
                <p>Loading Dashboard...</p>
            </div>
        );
    }

    return (
        <main style={{ background: '#0f172a', minHeight: '100vh', color: 'white' }}>
            <Section>
                <Container>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
                        <Typography variant="h2">Admin Dashboard</Typography>
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
                        <Typography variant="h3" style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Contact Messages</Typography>

                        {error && <p style={{ color: '#ef4444' }}>{error}</p>}

                        {messages.length === 0 && !error ? (
                            <p style={{ color: '#94a3b8' }}>No messages found.</p>
                        ) : (
                            <div style={{ display: 'grid', gap: '1rem' }}>
                                {messages.map((msg) => (
                                    <div key={msg._id} style={{ background: '#1e293b', padding: '1.5rem', borderRadius: '8px', border: '1px solid #334155' }}>
                                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem', flexWrap: 'wrap', gap: '0.5rem' }}>
                                            <h4 style={{ fontWeight: 'bold', fontSize: '1.1rem' }}>{msg.name}</h4>
                                            <span style={{ color: '#94a3b8', fontSize: '0.9rem' }}>{new Date(msg.createdAt).toLocaleString()}</span>
                                        </div>
                                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem', marginBottom: '1rem', color: '#cbd5e1', fontSize: '0.95rem' }}>
                                            <span><strong>Email:</strong> {msg.email}</span>
                                            {msg.phone && <span><strong>Phone:</strong> {msg.phone}</span>}
                                        </div>
                                        <div style={{ background: '#0f172a', padding: '1rem', borderRadius: '6px', fontSize: '0.95rem', lineHeight: '1.6' }}>
                                            {msg.message}
                                        </div>
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
