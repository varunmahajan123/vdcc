import React from 'react';
import { Typography } from '../shared/Typography';
import { Card } from './Card';
import { Star } from 'lucide-react';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

export interface ResultCardProps {
    studentName: string;
    score: string;
    gradeDetails: string;
    imageSrc?: string;
    className?: string;
    delay?: number;
}

export const ResultCard: React.FC<ResultCardProps> = ({ 
    studentName, 
    score, 
    gradeDetails, 
    imageSrc, 
    className,
    delay = 0 
}) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
            className={cn("h-full", className)}
        >
            <div className="group relative flex flex-col h-full bg-bg-secondary rounded-[1.5rem] border border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.4)] hover:shadow-[0_15px_40px_rgba(56,189,248,0.15)] hover:border-white/20 transition-all duration-500 overflow-hidden cursor-pointer">
                
                {/* Vertical Poster Container */}
                <div className="relative w-full aspect-[4/5] bg-bg-tertiary overflow-hidden">
                    {imageSrc ? (
                        <img 
                            src={imageSrc} 
                            alt={`${studentName} - ${score}`} 
                            className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                            onError={(e) => {
                                (e.target as HTMLImageElement).src = 'https://placehold.co/800x1000/0f172a/38bdf8?text=Result+Poster'; 
                            }}
                        />
                    ) : (
                        <div className="w-full h-full flex flex-col items-center justify-center text-accent-primary/50 bg-gradient-to-br from-bg-primary to-bg-secondary">
                            <Star size={40} className="mb-4 opacity-50" />
                            <span className="text-xs uppercase tracking-widest font-bold">Poster Placeholder</span>
                        </div>
                    )}
                    
                    {/* Inner shadow/gradient for premium feel */}
                    <div className="absolute inset-0 border border-white/5 rounded-t-[1.5rem] pointer-events-none" />
                    <div className="absolute inset-0 bg-gradient-to-t from-bg-secondary via-transparent to-transparent opacity-80" />
                </div>
                
                {/* Minimal Metadata Section */}
                <div className="p-5 sm:p-6 flex flex-col flex-grow justify-end relative z-10 -mt-8">
                    <div className="flex justify-between items-end gap-2">
                        <div className="flex flex-col">
                            <Typography variant="h4" className="text-white font-black tracking-tight text-lg sm:text-xl leading-none mb-1 group-hover:text-accent-primary transition-colors">
                                {studentName}
                            </Typography>
                            <span className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.15em] text-text-tertiary">
                                {gradeDetails}
                            </span>
                        </div>
                        <div className="bg-accent-primary/10 border border-accent-primary/20 px-3 py-1.5 rounded-lg flex items-center justify-center">
                            <span className="font-heading font-black text-accent-primary text-base sm:text-lg leading-none">
                                {score}
                            </span>
                        </div>
                    </div>
                </div>

            </div>
        </motion.div>
    );
};
