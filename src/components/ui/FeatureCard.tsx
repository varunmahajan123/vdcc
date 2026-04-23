import React from 'react';
import { Typography } from '../shared/Typography';
import { LucideIcon } from 'lucide-react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

export interface FeatureCardProps {
    title: string;
    description: string;
    icon: LucideIcon;
    delay?: number;
    className?: string;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({ 
    title, 
    description, 
    icon: Icon, 
    delay = 0,
    className 
}) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
            className={cn(
                "bg-bg-primary p-4 md:p-5 rounded-2xl border border-white/5 hover:border-accent-primary/20 transition-all duration-300 group relative overflow-hidden flex flex-col justify-center", 
                className
            )}
        >
            <div className="absolute inset-0 bg-gradient-to-br from-accent-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            
            <div className="relative z-10 flex flex-col items-start h-full">
                <div className="w-8 h-8 bg-white/5 rounded-lg flex items-center justify-center mb-3 text-accent-primary group-hover:scale-105 group-hover:bg-accent-primary group-hover:text-slate-950 transition-all duration-300 shrink-0">
                    <Icon size={16} />
                </div>
                <h4 className="font-heading font-bold text-white text-sm md:text-base leading-tight mb-1 group-hover:text-accent-primary transition-colors tracking-tight">
                    {title}
                </h4>
                <p className="text-text-secondary text-[10px] md:text-xs leading-snug opacity-80 group-hover:opacity-100 transition-opacity m-0">
                    {description}
                </p>
            </div>
        </motion.div>
    );
};
