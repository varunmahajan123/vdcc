import React from 'react';
import { cn } from '@/lib/utils';

export interface TypographyProps extends React.HTMLAttributes<HTMLElement> {
    children: React.ReactNode;
    variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'body' | 'caption';
    className?: string;
}

const variantStyles = {
    h1: "font-heading text-4xl md:text-5xl lg:text-7xl font-extrabold tracking-tight text-text-primary leading-[1.1]",
    h2: "font-heading text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-text-primary leading-[1.2]",
    h3: "font-heading text-2xl md:text-3xl font-bold tracking-tight text-text-primary leading-snug",
    h4: "font-heading text-xl md:text-2xl font-semibold tracking-tight text-text-primary",
    body: "text-base md:text-lg leading-relaxed text-text-secondary font-normal",
    caption: "text-sm text-text-tertiary font-medium tracking-wide",
};

export const Typography: React.FC<TypographyProps> = ({ children, variant = 'body', className, ...rest }) => {
    const Tag = variant === 'body' || variant === 'caption' ? 'p' : variant;

    return (
        <Tag className={cn(variantStyles[variant], className)} {...rest}>
            {children}
        </Tag>
    );
};
