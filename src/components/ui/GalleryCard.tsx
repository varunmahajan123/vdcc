import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

export interface GalleryCardProps {
    imageSrc: string;
    altText: string;
    delay?: number;
    className?: string;
    aspectRatio?: 'square' | 'video';
}

export const GalleryCard: React.FC<GalleryCardProps> = ({ 
    imageSrc, 
    altText, 
    delay = 0,
    className,
    aspectRatio = 'square'
}) => {
    return (
        <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
            className={cn(
                "group relative overflow-hidden bg-bg-secondary border border-white/5 shadow-2xl",
                aspectRatio === 'square' ? "aspect-square" : "aspect-video",
                className
            )}
        >
            <img
                src={imageSrc}
                alt={altText}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 grayscale-[0.3] group-hover:grayscale-0"
                onError={(e) => {
                    (e.target as HTMLImageElement).src = ''; 
                    (e.target as HTMLImageElement).className = "w-full h-full bg-bg-tertiary";
                }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-bg-primary via-transparent to-transparent opacity-60" />
            <div className="absolute inset-0 bg-accent-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center backdrop-blur-[2px]">
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-slate-950 scale-0 group-hover:scale-100 transition-transform duration-500 delay-100">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                </div>
            </div>
        </motion.div>
    );
};
