import React from 'react';
import { Typography } from '@/components/shared/Typography';
import { FileText, Download, Lock } from 'lucide-react';

const mockResources = [
    { title: "Quadratic Equations Master PDF", type: "PDF", size: "2.4 MB", subject: "Math", status: "Available" },
    { title: "Motion Dynamics Formula Sheet", type: "Document", size: "1.1 MB", subject: "Physics", status: "Available" },
    { title: "Biology Diagram Book Ch 1-3", type: "PDF", size: "8.5 MB", subject: "Science", status: "Available" },
    { title: "Upcoming Board Pre-Mock Paper", type: "Archive", size: "--", subject: "All Subjects", status: "Locked" },
];

export const ResourcesTab = () => {
    return (
        <div className="space-y-4">
            <div className="flex items-center justify-between px-2 mb-2">
                <Typography variant="body" className="text-sm font-medium text-text-secondary">Class 10 Directory</Typography>
                <span className="text-xs font-semibold px-2 py-1 bg-accent-primary/10 text-accent-primary rounded-md">Updated Today</span>
            </div>

            {mockResources.map((res, i) => (
                <div key={i} className={`p-4 rounded-2xl border transition-all ${res.status === 'Locked' ? 'bg-bg-primary/50 border-border/50 opacity-60' : 'bg-bg-secondary border-border hover:border-accent-primary/50 shadow-sm'}`}>
                    <div className="flex items-center gap-4">
                        <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${res.status === 'Locked' ? 'bg-bg-tertiary text-text-tertiary' : 'bg-accent-secondary/10 text-accent-secondary'}`}>
                            {res.status === 'Locked' ? <Lock size={20} /> : <FileText size={20} />}
                        </div>
                        
                        <div className="flex-1 min-w-0">
                            <h4 className="font-semibold text-text-primary text-sm truncate">{res.title}</h4>
                            <div className="flex items-center gap-2 mt-1 text-xs text-text-tertiary font-medium">
                                <span>{res.subject}</span>
                                <span>&bull;</span>
                                <span>{res.type}</span>
                                {res.size !== "--" && (
                                    <>
                                        <span>&bull;</span>
                                        <span>{res.size}</span>
                                    </>
                                )}
                            </div>
                        </div>

                        {res.status === 'Available' && (
                            <button className="w-10 h-10 rounded-full bg-bg-primary border border-border flex items-center justify-center text-text-secondary hover:text-accent-primary hover:border-accent-primary transition-colors shrink-0">
                                <Download size={18} />
                            </button>
                        )}
                    </div>
                </div>
            ))}
        </div>
    );
};
