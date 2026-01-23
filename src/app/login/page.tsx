import React from 'react';
import LoginForm from '@/components/auth/LoginForm';

export default function LoginPage() {
    return (
        <div style={{
            minHeight: '100vh',
            backgroundColor: '#0f172a', // Global dark background
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '1rem'
        }}>
            <div style={{
                backgroundColor: '#1e293b', // Card background
                padding: '2.5rem',
                borderRadius: '12px',
                border: '1px solid #334155', // Card border
                boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
                width: '100%',
                maxWidth: '420px',
                display: 'flex',
                flexDirection: 'column',
                gap: '1.5rem'
            }}>
                <div style={{ textAlign: 'center', marginBottom: '0.5rem' }}>
                    <h1 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'white', marginBottom: '0.5rem' }}>Login to VDCC Portal</h1>
                    <p style={{ color: '#94a3b8', fontSize: '0.875rem' }}>Access your dashboard to continue learning</p>
                </div>

                <LoginForm />

                <div style={{ textAlign: 'center', marginTop: '0.5rem' }}>
                    <p style={{ color: '#64748b', fontSize: '0.75rem' }}>
                        Restricted access. Authorized personnel only.
                    </p>
                </div>
            </div>
        </div>
    );
}
