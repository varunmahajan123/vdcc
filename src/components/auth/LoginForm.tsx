"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function LoginForm() {
    const router = useRouter();
    const [role, setRole] = useState('Student'); // Kept for UI consistency, though backend validates
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
    const [errorMessage, setErrorMessage] = useState('');

    // Common input style
    const inputStyle = {
        width: '100%',
        padding: '1rem',
        backgroundColor: '#0f172a',
        border: '1px solid #334155',
        borderRadius: '8px',
        color: 'white',
        outline: 'none',
        fontSize: '16px'
    };

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('loading');
        setErrorMessage('');

        try {
            const response = await fetch('/api/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message || 'Login failed');
            }

            // Success
            setStatus('success');
            localStorage.setItem('token', data.token);
            if (data.user) {
                localStorage.setItem('user', JSON.stringify(data.user));
            }

            // Redirect to home
            router.push('/');

        } catch (error) {
            setStatus('error');
            setErrorMessage(error instanceof Error ? error.message : 'Something went wrong');
        }
    };

    return (
        <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            {/* Role Selector - Visual Only for now */}
            <div>
                <label style={{ display: 'block', color: '#cbd5e1', marginBottom: '0.5rem', fontSize: '0.875rem', fontWeight: '500' }}>Select Role</label>
                <div style={{ position: 'relative' }}>
                    <select
                        value={role}
                        onChange={(e) => setRole(e.target.value)}
                        disabled={status === 'loading'}
                        style={{
                            width: '100%',
                            padding: '0.75rem',
                            backgroundColor: '#0f172a',
                            border: '1px solid #334155',
                            borderRadius: '6px',
                            color: 'white',
                            outline: 'none',
                            appearance: 'none',
                            cursor: status === 'loading' ? 'not-allowed' : 'pointer'
                        }}
                    >
                        <option>Student</option>
                        <option>Teacher / Admin</option>
                    </select>
                    <div style={{ position: 'absolute', right: '1rem', top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none', color: '#94a3b8', fontSize: '0.75rem' }}>▼</div>
                </div>
            </div>

            {/* Email Input */}
            <div>
                <label style={{ display: 'block', color: '#cbd5e1', marginBottom: '0.5rem', fontSize: '0.875rem', fontWeight: '500' }}>Email Address</label>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    required
                    disabled={status === 'loading'}
                    style={inputStyle}
                />
            </div>

            {/* Password Input */}
            <div>
                <label style={{ display: 'block', color: '#cbd5e1', marginBottom: '0.5rem', fontSize: '0.875rem', fontWeight: '500' }}>Password</label>
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter your password"
                    required
                    disabled={status === 'loading'}
                    style={inputStyle}
                />
            </div>

            {/* Error Message */}
            {status === 'error' && (
                <div style={{ color: '#ef4444', fontSize: '0.875rem', textAlign: 'center' }}>
                    {errorMessage}
                </div>
            )}

            {/* Submit Button */}
            <button
                type="submit"
                disabled={status === 'loading'}
                style={{
                    backgroundColor: status === 'loading' ? '#94a3b8' : '#0ea5e9',
                    color: 'white',
                    padding: '1rem',
                    borderRadius: '8px',
                    fontWeight: 'bold',
                    border: 'none',
                    cursor: status === 'loading' ? 'not-allowed' : 'pointer',
                    marginTop: '0.5rem',
                    fontSize: '1rem',
                    transition: 'background-color 0.2s'
                }}
            >
                {status === 'loading' ? 'Logging in...' : 'Sign In'}
            </button>
        </form>
    );
}
