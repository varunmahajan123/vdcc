"use client";

import React from 'react';
import { useAuthProtection } from '@/hooks/useAuthProtection';
import { AdminSidebar } from '@/components/admin/AdminSidebar';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
    // Crucial explicitly targeted security requirement
    // Only Firestore documents strictly matching 'admin' can load this DOM.
    const { authorized, loading } = useAuthProtection(["admin"]);

    if (loading) {
        return (
            <div className="min-h-screen bg-bg-primary flex flex-col items-center justify-center">
                <div className="w-12 h-12 border-4 border-accent-primary/30 border-t-accent-primary rounded-full animate-spin mb-4" />
                <p className="text-text-secondary text-sm tracking-widest uppercase font-medium">Verifying Credentials...</p>
            </div>
        );
    }

    if (!authorized) {
        return null; // The hook will automatically route them away visually
    }

    return (
        <div className="min-h-screen bg-bg-primary flex">
            <AdminSidebar />
            
            {/* The main content area shifts dynamically over out of the way of the static Sidebar on Desktop */}
            <main className="flex-1 lg:pl-64 flex flex-col min-h-screen mt-16 lg:mt-0 transition-all duration-300">
                <div className="flex-1 p-4 md:p-8 overflow-x-hidden">
                    {children}
                </div>
            </main>
        </div>
    );
}
