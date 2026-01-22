import React from 'react';
import styles from './Shared.module.css';

interface TypographyProps extends React.HTMLAttributes<HTMLElement> {
    children: React.ReactNode;
    variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'body' | 'caption';
    className?: string;
}

export const Typography: React.FC<TypographyProps> = ({ children, variant = 'body', className, ...rest }) => {
    const Tag = variant === 'body' || variant === 'caption' ? 'p' : variant;

    return (
        <Tag className={`${styles[variant]} ${className || ''}`} {...rest}>
            {children}
        </Tag>
    );
};
