import React from 'react';
import styles from './Courses.module.css';
import { Section } from '../shared/Section';
import { Container } from '../shared/Container';
import { Typography } from '../shared/Typography';
import { CourseCard } from './CourseCard';

export const CoursesSnapshot = () => {
    return (
        <Section className={styles.courses}>
            <Container>
                <div className={styles.header}>
                    <Typography variant="h2">Our Courses</Typography>
                    <Typography variant="body">Comprehensive programs designed for every level</Typography>
                </div>

                <div className={styles.grid}>
                    <CourseCard
                        title="Primary Education"
                        description="Foundation building for young minds with interactive learning methods."
                        imageSrc="/images/courses/primary-classroom.jpeg"
                    />
                    <CourseCard
                        title="Middle School"
                        description="Focusing on core concepts and analytical thinking skills."
                        imageSrc="/images/courses/middle-classroom.jpeg"
                    />
                    <CourseCard
                        title="Secondary School"
                        description="Rigorous preparation for board exams and competitive foundations."
                        imageSrc="/images/courses/secondary-classroom.jpeg"
                    />
                </div>
            </Container>
        </Section>
    );
};
