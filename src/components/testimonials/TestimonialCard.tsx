import React from 'react';
import styles from './Testimonials.module.css';
import { Typography } from '../shared/Typography';

interface TestimonialCardProps {
    name: string;
    role: string;
    quote: string;
}

export const TestimonialCard: React.FC<TestimonialCardProps> = ({ name, role, quote }) => {
    return (
        <div className={styles.card}>

            <div className={styles.content}>
                <Typography variant="body" className={styles.quote}>"{quote}"</Typography>
                <div className={styles.author}>
                    <Typography variant="h4" className={styles.name}>{name}</Typography>
                    <Typography variant="caption" className={styles.role}>{role}</Typography>
                </div>
            </div>
        </div>
    );
};
