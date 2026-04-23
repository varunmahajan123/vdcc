import React from 'react';
import { BookOpen, AlertCircle, CheckCircle } from 'lucide-react';

const mockAssignments = [
    { title: "Algebra Worksheet 04", dueDate: "Tomorrow, 8:00 AM", status: "Pending", subject: "Math" },
    { title: "Chemical Reactions Lab Notes", dueDate: "Friday, 5:00 PM", status: "Pending", subject: "Science" },
    { title: "English Literature Essay", dueDate: "Submitted", status: "Completed", subject: "English" },
    { title: "History Timeline Drawing", dueDate: "Graded: 9.5/10", status: "Graded", subject: "Social" },
];

export const AssignmentsTab = () => {
    return (
        <div className="space-y-4">
            {mockAssignments.map((assignment, i) => (
                <div key={i} className="bg-bg-secondary p-5 rounded-2xl border border-border relative overflow-hidden group">
                    <div className="flex justify-between items-start mb-3">
                        <span className="text-[10px] uppercase tracking-widest font-bold text-text-tertiary">
                            {assignment.subject}
                        </span>
                        
                        <span className={`text-[10px] px-2 py-1 rounded-full uppercase tracking-widest font-bold 
                            ${assignment.status === 'Pending' ? 'text-amber-500 bg-amber-500/10' : 
                              assignment.status === 'Completed' ? 'text-emerald-500 bg-emerald-500/10' : 
                              'text-blue-400 bg-blue-400/10'}`
                        }>
                            {assignment.status}
                        </span>
                    </div>

                    <h4 className="font-semibold text-text-primary text-base mb-1">{assignment.title}</h4>
                    
                    <div className={`flex items-center gap-1.5 text-xs font-medium mt-3 ${assignment.status === 'Pending' ? 'text-amber-500/80' : 'text-text-tertiary'}`}>
                        {assignment.status === 'Pending' ? <AlertCircle size={14} /> : <CheckCircle size={14} />}
                        Due: {assignment.dueDate}
                    </div>

                    {/* Action Context */}
                    {assignment.status === 'Pending' && (
                        <button className="mt-4 w-full py-2 bg-bg-primary text-sm font-medium text-text-primary border border-border rounded-lg hover:border-accent-primary transition-colors">
                            Upload Submission
                        </button>
                    )}
                </div>
            ))}
        </div>
    );
};
