import React from 'react';
import { Typography } from '@/components/shared/Typography';
import { Button } from '@/components/ui/Button';
import { UploadCloud, Star, Award } from 'lucide-react';

export default function ResultsManager() {
    return (
        <div className="max-w-5xl mx-auto">
            <div className="mb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                    <Typography variant="h2" className="text-2xl md:text-3xl mb-1">Wall of Success CRM</Typography>
                    <Typography variant="body" className="text-text-secondary text-sm">Add or modify top performing students.</Typography>
                </div>
            </div>

            <div className="bg-bg-secondary border border-border rounded-2xl shadow-sm overflow-hidden mb-8">
                <div className="grid grid-cols-1 md:grid-cols-2">
                    {/* Add Result Form */}
                    <div className="p-6 md:p-8 border-b md:border-b-0 md:border-r border-border">
                        <div className="flex items-center gap-3 mb-6">
                            <Award className="text-accent-primary" />
                            <Typography variant="h4" className="text-lg">Publish New Result</Typography>
                        </div>

                        <div className="space-y-5">
                            {/* Photo Upload Zone */}
                            <div className="w-full aspect-[4/3] relative rounded-xl border-2 border-dashed border-border flex flex-col items-center justify-center bg-bg-primary hover:border-accent-primary transition-colors cursor-pointer group overflow-hidden">
                                <UploadCloud className="text-text-tertiary mb-3 group-hover:text-accent-primary transition-colors" size={28} />
                                <span className="text-sm text-text-secondary font-medium">Upload Student Photo</span>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-xs font-medium text-text-secondary mb-2 uppercase tracking-wide">Student Name</label>
                                    <input type="text" placeholder="e.g. Rahat" className="w-full px-4 py-3 bg-bg-primary border border-border rounded-xl text-sm focus:outline-none focus:border-accent-primary" />
                                </div>
                                <div>
                                    <label className="block text-xs font-medium text-text-secondary mb-2 uppercase tracking-wide">Score / CGPA</label>
                                    <input type="text" placeholder="e.g. 98.5%" className="w-full px-4 py-3 bg-bg-primary border border-border rounded-xl text-sm focus:outline-none focus:border-accent-primary" />
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-xs font-medium text-text-secondary mb-2 uppercase tracking-wide">Class Batch</label>
                                    <select className="w-full px-4 py-3 bg-bg-primary border border-border rounded-xl text-sm focus:outline-none focus:border-accent-primary">
                                        <option>Class 10</option>
                                        <option>Class 9</option>
                                        <option>Foundation</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-xs font-medium text-text-secondary mb-2 uppercase tracking-wide">Exam Year</label>
                                    <select className="w-full px-4 py-3 bg-bg-primary border border-border rounded-xl text-sm focus:outline-none focus:border-accent-primary">
                                        <option>2026</option>
                                        <option>2025</option>
                                        <option>2024</option>
                                    </select>
                                </div>
                            </div>

                            {/* Topper Flag */}
                            <label className="flex items-center gap-3 p-4 border border-[#d4af37]/30 bg-[#d4af37]/5 rounded-xl cursor-pointer hover:bg-[#d4af37]/10 transition-colors">
                                <input type="checkbox" className="w-5 h-5 accent-[#d4af37]" />
                                <div className="flex flex-col">
                                    <span className="text-sm font-semibold text-white flex items-center gap-2">
                                        Mark as Board Topper <Star size={16} className="text-[#d4af37] fill-[#d4af37]" />
                                    </span>
                                    <span className="text-xs text-text-tertiary">Activates gold highlighting on the frontend cards.</span>
                                </div>
                            </label>

                            <Button className="w-full" variant="primary">Save & Publish to Wall</Button>
                        </div>
                    </div>

                    {/* Preview / Rules Area */}
                    <div className="p-6 md:p-8 bg-bg-primary">
                        <Typography variant="h4" className="text-lg mb-6">Format Guidelines</Typography>
                        <div className="space-y-4 text-sm text-text-secondary leading-relaxed">
                            <p>1. Images should be cropped to the chest up prior to processing for visual consistency.</p>
                            <p>2. The frontend automatically partitions `Class 10` students visually above the `Class 9 / Foundation` students. You do not need to order them manually.</p>
                            <p>3. Do not mark more than 3 students per year as "Board Topper" to maintain the premium scarcity of the visual status.</p>
                        </div>

                        <div className="mt-8 p-4 border border-border bg-bg-secondary rounded-xl">
                            <p className="text-xs font-medium text-text-tertiary mb-3 uppercase tracking-wider">Preview Generated Front-End Object</p>
                            <pre className="text-xs text-green-400 bg-black/50 p-4 rounded-lg overflow-x-auto border border-black/50">
                                {JSON.stringify({
                                    name: "Rahat",
                                    score: "98.5%",
                                    classGroup: "Class 10",
                                    year: "2026",
                                    isTopper: true
                                }, null, 2)}
                            </pre>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
