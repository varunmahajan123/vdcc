import React from 'react';
import styles from './Testimonials.module.css';
import { Section } from '../shared/Section';
import { Container } from '../shared/Container';
import { Typography } from '../shared/Typography';
import { TestimonialCard } from './TestimonialCard';

export const Testimonials = () => {
    return (
        <Section className={styles.testimonials}>
            <Container>
                <Typography variant="h2" className={styles.title}>What Students Say</Typography>
                <div className={styles.grid}>
                    <TestimonialCard
                        name="Aarav Sharma"
                        role="Student, Class 9"
                        quote="The teachers explain concepts very clearly and always encourage us to ask questions. My confidence in mathematics has improved a lot after joining VDCC."
                    />
                    <TestimonialCard
                        name="Riya Kapoor"
                        role="Student, Class 10"
                        quote="The regular practice tests and doubt-solving sessions helped me stay confident during exams. The guidance from teachers is excellent."
                    />
                    <TestimonialCard
                        name="Mr. Rohit Mehta"
                        role="Parent of Class 10 Student"
                        quote="The faculty is dedicated and approachable. Regular feedback and guidance helped my child stay focused throughout the academic year."
                    />
                </div>
            </Container>
        </Section>
    );
};
