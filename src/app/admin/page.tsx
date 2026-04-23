import React from 'react';
import { Typography } from '@/components/shared/Typography';
import { Users, BookOpen, MessageSquare, CheckCircle2 } from 'lucide-react';

const MetricCard = ({ title, value, icon, trend }: { title: string, value: string, icon: React.ReactNode, trend?: string }) => (
    <div className="bg-bg-secondary border border-border p-6 rounded-2xl shadow-sm">
        <div className="flex items-start justify-between mb-4">
            <div className="p-3 bg-bg-primary rounded-xl text-accent-primary border border-border/50">
                {icon}
            </div>
            {trend && <span className="text-xs font-semibold text-emerald-500 bg-emerald-500/10 px-2 py-1 rounded-full">{trend}</span>}
        </div>
        <Typography variant="h3" className="text-3xl mb-1">{value}</Typography>
        <Typography variant="body" className="text-text-tertiary text-sm font-medium uppercase tracking-wider">{title}</Typography>
    </div>
);

export default function AdminOverview() {
    return (
        <div className="max-w-7xl mx-auto">
            {/* Header Area */}
            <div className="mb-10">
                <Typography variant="h2" className="mb-2 text-2xl md:text-3xl">System Overview</Typography>
                <Typography variant="body" className="text-text-secondary">
                    Welcome back. Here is your platform's operational status.
                </Typography>
            </div>

            {/* Top Stat Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
                <MetricCard title="New Leads / Enquiries" value="24" icon={<MessageSquare size={24} />} trend="+12% this week" />
                <MetricCard title="Total Students" value="842" icon={<Users size={24} />} />
                <MetricCard title="Active Courses" value="4" icon={<BookOpen size={24} />} />
                <MetricCard title="Tasks Pending" value="3" icon={<CheckCircle2 size={24} />} trend="Action Required" />
            </div>

            {/* Dual Column Bottom */}
            <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
                
                {/* Recent Leads Module */}
                <div className="xl:col-span-2 bg-bg-secondary border border-border rounded-2xl p-6 shadow-sm">
                    <div className="flex items-center justify-between mb-6">
                        <Typography variant="h4" className="text-lg">Recent WhatsApp Inquiries</Typography>
                        <a href="/admin/leads" className="text-sm text-accent-primary hover:text-white transition-colors">View All</a>
                    </div>
                    {/* Mock simple list using Tailwind completely avoiding heavy React Table logic */}
                    <div className="space-y-4">
                        {[
                            { name: "Suresh Kumar", class: "Class 10", status: "New", time: "2 hrs ago" },
                            { name: "Priya Sharma", class: "Class 6-8", status: "Contacted", time: "5 hrs ago" },
                            { name: "Amit Singh", class: "Foundation", status: "New", time: "1 day ago" }
                        ].map((lead, i) => (
                            <div key={i} className="flex items-center justify-between p-4 bg-bg-primary rounded-xl border border-border/50 hover:border-accent-primary/30 transition-colors">
                                <div>
                                    <p className="font-semibold text-text-primary text-sm">{lead.name}</p>
                                    <p className="text-xs text-text-tertiary">{lead.class}</p>
                                </div>
                                <div className="text-right flex items-center gap-4">
                                    <span className={`text-[10px] px-2 py-1 rounded-full uppercase tracking-widest font-bold ${lead.status === 'New' ? 'text-emerald-500 bg-emerald-500/10' : 'text-blue-400 bg-blue-400/10'}`}>
                                        {lead.status}
                                    </span>
                                    <span className="text-xs text-text-secondary hidden sm:inline-block w-20">{lead.time}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Quick Actions Strip */}
                <div className="bg-bg-secondary border border-border rounded-2xl p-6 shadow-sm">
                    <Typography variant="h4" className="text-lg mb-6">Quick Actions</Typography>
                    <div className="space-y-3">
                        <button className="w-full py-3 px-4 bg-bg-primary border border-border rounded-xl text-left text-sm font-medium text-text-secondary hover:text-white hover:border-accent-primary/50 transition-all flex justify-between items-center group">
                            Upload Result Target
                            <span className="text-accent-primary group-hover:translate-x-1 transition-transform">&rarr;</span>
                        </button>
                        <button className="w-full py-3 px-4 bg-bg-primary border border-border rounded-xl text-left text-sm font-medium text-text-secondary hover:text-white hover:border-accent-primary/50 transition-all flex justify-between items-center group">
                            Post Announcement App Push
                            <span className="text-accent-primary group-hover:translate-x-1 transition-transform">&rarr;</span>
                        </button>
                        <button className="w-full py-3 px-4 bg-bg-primary border border-border rounded-xl text-left text-sm font-medium text-text-secondary hover:text-white hover:border-accent-primary/50 transition-all flex justify-between items-center group">
                            Add Gallery Image
                            <span className="text-accent-primary group-hover:translate-x-1 transition-transform">&rarr;</span>
                        </button>
                    </div>
                </div>

            </div>
        </div>
    );
}
