import React from 'react';
import { Typography } from '@/components/shared/Typography';
import { Target } from 'lucide-react';

const testResults = [
    { title: "Weekly Math Mock", date: "Oct 15", score: 45, total: 50, average: 38 },
    { title: "Science Chapter 4 Test", date: "Oct 10", score: 28, total: 30, average: 22 },
    { title: "English Grammar Core", date: "Oct 05", score: 18, total: 20, average: 15 },
];

export const ResultsTab = () => {
    return (
        <div className="space-y-6">
            <div className="bg-bg-secondary p-5 rounded-2xl border border-border shadow-sm flex items-center justify-between">
                <div>
                    <Typography variant="body" className="text-sm font-medium text-text-secondary mb-1">Overall Class Rank</Typography>
                    <Typography variant="h3" className="text-2xl text-accent-primary">Top 5%</Typography>
                </div>
                <div className="w-12 h-12 rounded-full bg-accent-primary/10 flex items-center justify-center text-accent-primary">
                    <Target size={24} />
                </div>
            </div>

            <Typography variant="h4" className="text-base px-2">Recent Test Performance</Typography>
            
            <div className="space-y-4">
                {testResults.map((test, i) => {
                    const percentage = (test.score / test.total) * 100;
                    const avgPercentage = (test.average / test.total) * 100;
                    
                    return (
                        <div key={i} className="bg-bg-secondary p-5 rounded-2xl border border-border">
                            <div className="flex justify-between items-start mb-4">
                                <div>
                                    <h4 className="font-semibold text-text-primary text-sm">{test.title}</h4>
                                    <p className="text-xs text-text-tertiary mt-1">{test.date}</p>
                                </div>
                                <div className="text-right">
                                    <span className="font-heading font-bold text-lg text-text-primary">{test.score}</span>
                                    <span className="text-xs text-text-tertiary"> / {test.total}</span>
                                </div>
                            </div>
                            
                            {/* Visual Progress Bar System */}
                            <div className="space-y-2">
                                {/* Student Score */}
                                <div>
                                    <div className="flex justify-between text-[10px] uppercase tracking-wider font-semibold text-accent-primary mb-1">
                                        <span>Your Score</span>
                                        <span>{percentage.toFixed(0)}%</span>
                                    </div>
                                    <div className="w-full h-2 bg-bg-primary rounded-full overflow-hidden">
                                        <div 
                                            className="h-full bg-accent-primary rounded-full transition-all duration-1000" 
                                            style={{ width: `${percentage}%` }} 
                                        />
                                    </div>
                                </div>
                                
                                {/* Class Average */}
                                <div>
                                    <div className="flex justify-between text-[10px] uppercase tracking-wider font-medium text-text-tertiary mb-1 mt-2">
                                        <span>Class Average</span>
                                    </div>
                                    <div className="w-full h-1.5 bg-bg-primary rounded-full overflow-hidden">
                                        <div 
                                            className="h-full bg-text-tertiary/40 rounded-full" 
                                            style={{ width: `${avgPercentage}%` }} 
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};
