import React from 'react';
import { Typography } from '@/components/shared/Typography';
import { Search, Filter, MoreHorizontal } from 'lucide-react';

const leadsData = [
    { id: "L-001", name: "Suresh Kumar", phone: "99152XXXXX", target: "Class 10", status: "New", date: "Today, 10:30 AM" },
    { id: "L-002", name: "Priya Sharma", phone: "98144XXXXX", target: "Class 6-8", status: "Contacted", date: "Today, 09:15 AM" },
    { id: "L-003", name: "Amit Singh", phone: "98765XXXXX", target: "Foundation", status: "New", date: "Yesterday" },
    { id: "L-004", name: "Neha Verma", phone: "99887XXXXX", target: "Class 9", status: "Enrolled", date: "Oct 12, 2024" },
    { id: "L-005", name: "Rahul Das", phone: "88776XXXXX", target: "Playpen", status: "Dead", date: "Oct 10, 2024" },
];

export default function LeadsInbox() {
    return (
        <div className="max-w-7xl mx-auto h-[calc(100vh-8rem)] flex flex-col">
            <div className="mb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4 shrink-0">
                <div>
                    <Typography variant="h2" className="text-2xl md:text-3xl mb-1">Leads Inbox</Typography>
                    <Typography variant="body" className="text-text-secondary text-sm">Manage incoming parent inquiries.</Typography>
                </div>
                
                <div className="flex items-center gap-3">
                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-text-tertiary" size={18} />
                        <input 
                            type="text" 
                            placeholder="Search leads..." 
                            className="bg-bg-secondary border border-border pl-10 pr-4 py-2 rounded-lg text-sm focus:outline-none focus:border-accent-primary w-full sm:w-64"
                        />
                    </div>
                    <button className="flex items-center gap-2 px-4 py-2 bg-bg-secondary border border-border rounded-lg text-sm hover:text-white hover:border-text-secondary transition-colors">
                        <Filter size={18} /> Filter
                    </button>
                </div>
            </div>

            {/* Native Tailwind Table - Fast, no dependencies */}
            <div className="flex-1 bg-bg-secondary border border-border rounded-2xl shadow-sm overflow-hidden flex flex-col">
                <div className="overflow-x-auto">
                    <table className="w-full text-left text-sm text-text-secondary">
                        <thead className="text-xs text-text-tertiary uppercase bg-bg-primary/50 border-b border-border">
                            <tr>
                                <th className="px-6 py-4 font-semibold">Lead Info</th>
                                <th className="px-6 py-4 font-semibold">Contact</th>
                                <th className="px-6 py-4 font-semibold">Target Batch</th>
                                <th className="px-6 py-4 font-semibold">Status</th>
                                <th className="px-6 py-4 font-semibold">Received</th>
                                <th className="px-6 py-4 text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-border/50">
                            {leadsData.map((lead) => (
                                <tr key={lead.id} className="hover:bg-bg-primary/30 transition-colors">
                                    <td className="px-6 py-4">
                                        <div className="font-semibold text-text-primary">{lead.name}</div>
                                        <div className="text-xs text-text-tertiary mt-1">{lead.id}</div>
                                    </td>
                                    <td className="px-6 py-4 font-medium">{lead.phone}</td>
                                    <td className="px-6 py-4">
                                        <span className="bg-bg-primary border border-border px-3 py-1 rounded-full text-xs font-medium">
                                            {lead.target}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4">
                                        <span className={`text-[10px] px-2.5 py-1 rounded-full uppercase tracking-widest font-bold 
                                            ${lead.status === 'New' ? 'text-emerald-500 bg-emerald-500/10' : 
                                              lead.status === 'Enrolled' ? 'text-accent-primary bg-accent-primary/10' : 
                                              lead.status === 'Dead' ? 'text-red-400 bg-red-400/10' : 
                                              'text-blue-400 bg-blue-400/10'}`
                                        }>
                                            {lead.status}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4">{lead.date}</td>
                                    <td className="px-6 py-4 text-right">
                                        <button className="text-text-tertiary hover:text-white p-2">
                                            <MoreHorizontal size={18} />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                
                {/* Pagination Placeholder */}
                <div className="mt-auto p-4 border-t border-border flex items-center justify-between text-xs text-text-tertiary bg-bg-primary/50">
                    <span>Showing 1 to 5 of 24 records</span>
                    <div className="flex gap-2">
                        <button className="px-3 py-1 rounded border border-border hover:text-white hover:border-text-secondary disabled:opacity-50" disabled>Prev</button>
                        <button className="px-3 py-1 rounded border border-border hover:text-white hover:border-text-secondary">Next</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
