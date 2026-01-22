"use client";

import React, { useState } from 'react';

export default function LoginPage() {
    const [role, setRole] = useState('Student');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        alert('This is a demonstration only. Backend authentication is not implemented.');
    };

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
                backgroundColor: '#1e293b', // Card background matching Contact form
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

                <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                    {/* Role Selector */}
                    <div>
                        <label style={{ display: 'block', color: '#cbd5e1', marginBottom: '0.5rem', fontSize: '0.875rem', fontWeight: '500' }}>Select Role</label>
                        <div style={{ position: 'relative' }}>
                            <select
                                value={role}
                                onChange={(e) => setRole(e.target.value)}
                                style={{
                                    width: '100%',
                                    padding: '0.75rem',
                                    backgroundColor: '#0f172a', // Input dark bg
                                    border: '1px solid #334155',
                                    borderRadius: '6px',
                                    color: 'white',
                                    outline: 'none',
                                    appearance: 'none',
                                    cursor: 'pointer'
                                }}
                            >
                                <option>Student</option>
                                <option>Teacher / Admin</option>
                            </select>
                            <div style={{ position: 'absolute', right: '1rem', top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none', color: '#94a3b8', fontSize: '0.75rem' }}>▼</div>
                        </div>
                    </div>

                    {/* Username Input */}
                    <div>
                        <label style={{ display: 'block', color: '#cbd5e1', marginBottom: '0.5rem', fontSize: '0.875rem', fontWeight: '500' }}>Username / ID</label>
                        <input
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            placeholder="Enter your ID"
                            style={{
                                width: '100%',
                                padding: '0.75rem',
                                backgroundColor: '#0f172a',
                                border: '1px solid #334155',
                                borderRadius: '6px',
                                color: 'white',
                                outline: 'none'
                            }}
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
                            style={{
                                width: '100%',
                                padding: '0.75rem',
                                backgroundColor: '#0f172a',
                                border: '1px solid #334155',
                                borderRadius: '6px',
                                color: 'white',
                                outline: 'none'
                            }}
                        />
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        style={{
                            backgroundColor: '#0ea5e9', // Blue accent
                            color: 'white',
                            padding: '0.75rem',
                            borderRadius: '6px',
                            fontWeight: 'bold',
                            border: 'none',
                            cursor: 'pointer',
                            marginTop: '0.5rem',
                            fontSize: '1rem',
                            transition: 'background-color 0.2s'
                        }}
                    >
                        Sign In
                    </button>
                </form>

                <div style={{ textAlign: 'center', marginTop: '0.5rem' }}>
                    <p style={{ color: '#64748b', fontSize: '0.75rem' }}>
                        Demonstration only. No real authentication.
                    </p>
                </div>
            </div>
        </div>
    );
}
