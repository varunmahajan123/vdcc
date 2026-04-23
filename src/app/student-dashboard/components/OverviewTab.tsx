import React from 'react';
import { Typography } from '@/components/shared/Typography';
import { Clock, Calendar, CheckCircle2 } from 'lucide-react';

export const OverviewTab = () => {
    return (
        <div className="space-y-6">
            
            {/* Attendance & Stats Strip */}
            <div className="grid grid-cols-2 gap-4">
                <div className="bg-bg-secondary border border-border rounded-2xl p-5 flex flex-col items-center justify-center text-center shadow-sm">
                    {/* Visual Radial Progress Placeholder using raw CSS */}
                    <div className="relative w-20 h-20 mb-3 flex items-center justify-center rounded-full bg-bg-primary border-4 border-emerald-500/20">
                        <svg className="absolute inset-0 w-full h-full -rotate-90">
                            <circle cx="40" cy="40" r="36" fill="transparent" stroke="currentColor" strokeWidth="8" className="text-emerald-500 origin-center" strokeDasharray="226" strokeDashoffset="45" />
                        </svg>
                        <span className="font-heading font-bold text-xl text-text-primary relative z-10">85%</span>
                    </div>
                    <Typography variant="body" className="text-xs uppercase tracking-widest font-semibold text-text-tertiary">Attendance</Typography>
                </div>
                
                <div className="bg-bg-secondary border border-border rounded-2xl p-5 flex flex-col items-center justify-center text-center shadow-sm">
                    <div className="w-20 h-20 mb-3 rounded-full bg-accent-primary/10 border border-accent-primary/20 flex flex-col items-center justify-center text-accent-primary">
                        <span className="font-heading font-bold text-3xl leading-none">A-</span>
                    </div>
                    <Typography variant="body" className="text-xs uppercase tracking-widest font-semibold text-text-tertiary">Current Grade</Typography>
                </div>
            </div>

            {/* Today's Timetable */}
            <div className="bg-bg-secondary border border-border rounded-2xl p-6 shadow-sm">
                <div className="flex items-center gap-3 mb-6">
                    <Calendar className="text-accent-primary" size={20} />
                    <Typography variant="h4" className="text-lg">Today's Schedule</Typography>
                </div>

                <div className="space-y-4 relative">
                    {/* Activity tracking line */}
                    <div className="absolute left-2.5 top-2 bottom-2 w-px bg-border z-0" />
                    
                    {[
                        { time: "4:00 PM", subject: "Math - Quadratic Equations", room: "Lab 2", passed: true },
                        { time: "5:00 PM", subject: "Physics - Motion Dynamics", room: "Room 10", passed: false },
                        { time: "6:00 PM", subject: "Mock Test Review", room: "Main Hall", passed: false }
                    ].map((slot, i) => (
                        <div key={i} className="relative z-10 flex gap-4">
                            <div className={`w-5 h-5 rounded-full mt-0.5 shrink-0 flex items-center justify-center ${slot.passed ? 'bg-emerald-500' : 'bg-bg-primary border-2 border-accent-primary'}`}>
                                {slot.passed && <CheckCircle2 size={12} className="text-white" />}
                            </div>
                            <div className={`flex-1 bg-bg-primary border rounded-xl p-4 transition-colors ${slot.passed ? 'border-border/50 opacity-60' : 'border-border shadow-sm'}`}>
                                <div className="flex justify-between items-start mb-1">
                                    <h5 className={`font-semibold ${slot.passed ? 'text-text-secondary' : 'text-text-primary'}`}>{slot.subject}</h5>
                                    <span className="flex items-center gap-1 text-[10px] uppercase font-bold tracking-widest text-text-tertiary bg-bg-secondary px-2 py-1 rounded">
                                        <Clock size={12} /> {slot.time}
                                    </span>
                                </div>
                                <p className="text-xs text-text-tertiary">{slot.room}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            
        </div>
    );
};
