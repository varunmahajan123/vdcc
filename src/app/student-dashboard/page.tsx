"use client";

import React, { useState } from 'react';
import { useAuthProtection } from '@/hooks/useAuthProtection';
import { Typography } from '@/components/shared/Typography';
import { Container } from '@/components/shared/Container';
import { motion, AnimatePresence } from 'framer-motion';
import { BookOpen, FileText, BarChart2, CheckSquare, Sparkles } from 'lucide-react';

import { OverviewTab } from './components/OverviewTab';
import { ResourcesTab } from './components/ResourcesTab';
import { AssignmentsTab } from './components/AssignmentsTab';
import { ResultsTab } from './components/ResultsTab';
import { AITutorTab } from './components/AITutorTab';

const tabs = [
    { id: 'overview', label: 'Overview', icon: <BookOpen size={16} /> },
    { id: 'assignments', label: 'Homework', icon: <CheckSquare size={16} /> },
    { id: 'resources', label: 'Notes', icon: <FileText size={16} /> },
    { id: 'results', label: 'Results', icon: <BarChart2 size={16} /> },
    { id: 'ai', label: 'AI Tutor', icon: <Sparkles size={16} className="text-accent-secondary" /> },
];

export default function StudentDashboard() {
    // Fierce client-side protection requiring 'student' specific profile loading
    const { vdccUser, authorized, loading } = useAuthProtection(["student"]);
    const [activeTab, setActiveTab] = useState('overview');

    if (loading || !authorized) {
        return (
            <div className="min-h-screen bg-bg-primary pt-32 pb-16 flex justify-center">
                <div className="w-12 h-12 border-4 border-accent-primary/30 border-t-accent-primary rounded-full animate-spin" />
            </div>
        );
    }

    return (
        <main className="min-h-screen bg-bg-primary relative overflow-hidden">
            {/* Background Glows */}
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-accent-primary/5 rounded-full blur-[100px] pointer-events-none z-0" />
            
            <Container className="pt-24 pb-8 relative z-10 max-w-2xl px-4 sm:px-6"> 
                {/* Mobile-optimized Header */}
                <div className="mb-6 flex items-center justify-between">
                    <div>
                        <Typography variant="body" className="text-sm text-text-tertiary mb-1 uppercase tracking-wider font-semibold">Student Portal</Typography>
                        <h1 className="text-2xl font-bold text-text-primary">
                            Hi, {vdccUser?.name?.split(' ')[0] || "Student"}
                        </h1>
                    </div>
                    <div className="w-12 h-12 rounded-full bg-bg-secondary border border-border flex items-center justify-center font-bold text-lg text-accent-primary shadow-sm bg-[url('/images/results/placeholder.jpg')] bg-cover bg-center" />
                </div>

                {/* Unified Horizontal Scroll Navigation */}
                <div className="mb-6 -mx-4 px-4 sm:mx-0 sm:px-0">
                    <div className="flex overflow-x-auto scrollbar-hide gap-2 pb-2">
                        {tabs.map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`flex items-center gap-2 whitespace-nowrap px-4 py-2.5 rounded-xl text-sm font-medium transition-all shrink-0 ${
                                    activeTab === tab.id
                                        ? "bg-bg-secondary text-text-primary border border-border shadow-sm"
                                        : "bg-transparent text-text-tertiary hover:text-text-secondary"
                                }`}
                            >
                                <span className={activeTab === tab.id ? "opacity-100" : "opacity-60"}>{tab.icon}</span>
                                {tab.label}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Animated State View Handler */}
                <div className="relative min-h-[500px]">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeTab}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                        >
                            {activeTab === 'overview' && <OverviewTab />}
                            {activeTab === 'resources' && <ResourcesTab />}
                            {activeTab === 'assignments' && <AssignmentsTab />}
                            {activeTab === 'results' && <ResultsTab />}
                            {activeTab === 'ai' && <AITutorTab />}
                        </motion.div>
                    </AnimatePresence>
                </div>
            </Container>

            {/* Custom scrollbar hiding specifically for this page */}
            <style jsx global>{`
                .scrollbar-hide::-webkit-scrollbar {
                    display: none;
                }
                .scrollbar-hide {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                    -webkit-overflow-scrolling: touch;
                }
            `}</style>
        </main>
    );
}
