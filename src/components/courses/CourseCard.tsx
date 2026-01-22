import React from 'react';
import styles from './Courses.module.css';
import { Typography } from '../shared/Typography';

interface CourseCardProps {
    imageSrc: string;
    title: string;
    description: string;
}

export const CourseCard: React.FC<CourseCardProps> = ({ imageSrc, title, description }) => {
    return (
        <div className={styles.card}>
            <div className={styles.imageWrapper}>
                <img
                    src={imageSrc}
                    alt={title}
                    className={styles.image}
                />
            </div>
            <div className={styles.content}>
                <Typography variant="h4">{title}</Typography>
                <Typography variant="body" className={styles.description}>
                    {description}
                </Typography>
                <button className={styles.button}>View Details</button>
            </div>
        </div>
    );
};
