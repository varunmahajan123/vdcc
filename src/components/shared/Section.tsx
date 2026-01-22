import React from 'react';
import styles from './Shared.module.css';

interface SectionProps {
    children: React.ReactNode;
    className?: string;
    id?: string;
}

export const Section: React.FC<SectionProps> = ({ children, className, id }) => {
    return (
        <section id={id} className={`${styles.section} ${className || ''}`}>
            {children}
        </section>
    );
};
