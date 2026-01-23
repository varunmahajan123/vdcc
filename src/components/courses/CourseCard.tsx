import React from 'react';
import Link from 'next/link';
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
                <Link href="/contact" className={styles.button}>Enroll Now</Link>
            </div>
        </div>
    );
};
