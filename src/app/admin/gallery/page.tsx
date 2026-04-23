import React from 'react';
import { Typography } from '@/components/shared/Typography';
import { Button } from '@/components/ui/Button';
import { UploadCloud, Image as ImageIcon } from 'lucide-react';

export default function GalleryManager() {
    return (
        <div className="max-w-5xl mx-auto">
            <div className="mb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                    <Typography variant="h2" className="text-2xl md:text-3xl mb-1">Gallery Master</Typography>
                    <Typography variant="body" className="text-text-secondary text-sm">Upload and categorize institutional visual proof.</Typography>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                
                {/* Upload Form Area */}
                <div className="lg:col-span-1 space-y-6">
                    <div className="bg-bg-secondary border border-border rounded-2xl shadow-sm p-6">
                        <Typography variant="h4" className="mb-6 text-lg">New Upload</Typography>
                        
                        <div className="space-y-5">
                            {/* Drag and Drop Zone Placeholder */}
                            <div className="border-2 border-dashed border-border/60 hover:border-accent-primary/50 rounded-xl p-8 flex flex-col items-center justify-center text-center cursor-pointer transition-colors bg-bg-primary">
                                <UploadCloud className="text-text-tertiary mb-3 hover:text-accent-primary transition-colors" size={32} />
                                <p className="text-sm font-medium text-text-secondary mb-1">Click or drag image file</p>
                                <p className="text-xs text-text-tertiary">PNG, JPG up to 5MB</p>
                            </div>

                            <div>
                                <label className="block text-xs font-medium text-text-secondary mb-2 uppercase tracking-wide">Category</label>
                                <select className="w-full px-4 py-3 bg-bg-primary border border-border rounded-xl text-sm focus:outline-none focus:border-accent-primary">
                                    <option>Classrooms</option>
                                    <option>Office & Reception</option>
                                    <option>Celebrations</option>
                                    <option>Events</option>
                                </select>
                            </div>

                            <div>
                                <label className="block text-xs font-medium text-text-secondary mb-2 uppercase tracking-wide">Alt Text (For SEO)</label>
                                <input type="text" placeholder="e.g. Modern Physics Lab" className="w-full px-4 py-3 bg-bg-primary border border-border rounded-xl text-sm focus:outline-none focus:border-accent-primary" />
                            </div>

                            <div>
                                <label className="block text-xs font-medium text-text-secondary mb-2 uppercase tracking-wide">Masonry Aspect Ratio</label>
                                <div className="grid grid-cols-3 gap-2">
                                    <button className="py-2 text-xs border border-accent-primary bg-accent-primary/10 text-accent-primary rounded-lg font-medium">Landscape</button>
                                    <button className="py-2 text-xs border border-border bg-bg-primary text-text-secondary hover:border-text-secondary rounded-lg">Portrait</button>
                                    <button className="py-2 text-xs border border-border bg-bg-primary text-text-secondary hover:border-text-secondary rounded-lg">Square</button>
                                </div>
                            </div>

                            <Button className="w-full mt-4" variant="primary">Process & Upload to Cloud</Button>
                        </div>
                    </div>
                </div>

                {/* Recent Uploads Grid */}
                <div className="lg:col-span-2 bg-bg-secondary border border-border rounded-2xl shadow-sm p-6 h-[calc(100vh-12rem)] flex flex-col">
                    <Typography variant="h4" className="mb-6 text-lg">System Repository</Typography>
                    
                    <div className="flex-1 overflow-y-auto pr-2 grid grid-cols-2 sm:grid-cols-3 gap-4">
                        {[1, 2, 3, 4, 5, 6].map((i) => (
                            <div key={i} className="group relative aspect-square bg-bg-primary rounded-xl border border-border overflow-hidden">
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <ImageIcon className="text-text-tertiary/30" size={32} />
                                </div>
                                {/* Actions Overlay */}
                                <div className="absolute inset-0 bg-bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                                    <button className="text-xs bg-red-500/20 text-red-400 border border-red-500/50 px-3 py-1.5 rounded-full font-medium hover:bg-red-500 hover:text-white transition-colors">Delete</button>
                                </div>
                                <div className="absolute bottom-0 inset-x-0 p-2 bg-gradient-to-t from-black/80 to-transparent">
                                    <p className="text-[10px] text-white font-medium truncate">gallery_asset_{i}.jpg</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    );
}
