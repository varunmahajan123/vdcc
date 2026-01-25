'use client';

import React, { useState } from 'react';

type FormStatus = 'idle' | 'loading' | 'success' | 'error';

export default function ContactForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });
    const [status, setStatus] = useState<FormStatus>('idle');
    const [errorMessage, setErrorMessage] = useState('');

    // Common input style
    const inputStyle = {
        width: '100%',
        padding: '1rem', // Larger touch target
        background: '#0f172a',
        border: '1px solid #334155',
        borderRadius: '8px',
        color: 'white',
        fontSize: '16px' // Prevent zoom on iPhone
    };


    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('loading');
        setErrorMessage('');

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message || data.error || 'Failed to send message');
            }

            setStatus('success');
            setFormData({ name: '', email: '', message: '' });

            // Reset success message after 5 seconds
            setTimeout(() => setStatus('idle'), 5000);
        } catch (error) {
            setStatus('error');
            setErrorMessage(error instanceof Error ? error.message : 'Something went wrong');
        }
    };

    return (
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div>
                <label htmlFor="name" style={{ display: 'block', color: '#cbd5e1', marginBottom: '0.5rem', fontWeight: '500' }}>Name</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    disabled={status === 'loading'}
                    style={inputStyle}
                    placeholder="Your Name"
                />
            </div>
            <div>
                <label htmlFor="email" style={{ display: 'block', color: '#cbd5e1', marginBottom: '0.5rem', fontWeight: '500' }}>Email</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    disabled={status === 'loading'}
                    style={inputStyle}
                    placeholder="your@email.com"
                />
            </div>
            <div>
                <label htmlFor="message" style={{ display: 'block', color: '#cbd5e1', marginBottom: '0.5rem', fontWeight: '500' }}>Message</label>
                <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    disabled={status === 'loading'}
                    style={inputStyle}
                    placeholder="How can we help?"
                />
            </div>

            {status === 'error' && (
                <div style={{ color: '#ef4444', fontSize: '0.875rem', padding: '0.5rem', background: 'rgba(239, 68, 68, 0.1)', borderRadius: '4px' }}>
                    {errorMessage}
                </div>
            )}

            {status === 'success' && (
                <div style={{ color: '#22c55e', fontSize: '0.875rem', padding: '0.5rem', background: 'rgba(34, 197, 94, 0.1)', borderRadius: '4px' }}>
                    Message sent successfully!
                </div>
            )}

            <button
                type="submit"
                disabled={status === 'loading'}
                style={{
                    background: status === 'loading' ? '#94a3b8' : '#0ea5e9',
                    color: 'white',
                    padding: '1rem',
                    borderRadius: '8px',
                    fontWeight: 'bold',
                    marginTop: '1rem',
                    cursor: status === 'loading' ? 'not-allowed' : 'pointer',
                    border: 'none',
                    transition: 'background 0.2s'
                }}
            >
                {status === 'loading' ? 'Sending...' : 'Send Message'}
            </button>
        </form>
    );
}
