import React from 'react';
import { cn } from '@/lib/utils';

export interface SectionProps extends React.HTMLAttributes<HTMLElement> {
    children: React.ReactNode;
    className?: string;
}

export const Section: React.FC<SectionProps> = ({ children, className, ...props }) => {
    return (
        <section className={cn("section", className)} {...props}>
            {children}
        </section>
    );
};
