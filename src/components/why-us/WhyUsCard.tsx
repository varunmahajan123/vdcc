import React from 'react';
import styles from './WhyUs.module.css';
import { Typography } from '../shared/Typography';

import { LucideIcon } from 'lucide-react';

interface WhyUsCardProps {
    title: string;
    description: string;
    icon: LucideIcon;
}

export const WhyUsCard: React.FC<WhyUsCardProps> = ({ title, description, icon: Icon }) => {
    return (
        <div className={styles.card}>
            <div className={styles.iconWrapper}>
                <Icon className={styles.icon} />
            </div>
            <Typography variant="h3" className={styles.cardTitle}>{title}</Typography>
            <Typography variant="body">{description}</Typography>
        </div>
    );
};
