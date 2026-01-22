import React from 'react';
import styles from './Hero.module.css';
import { Section } from '../shared/Section';
import { Container } from '../shared/Container';
import { Typography } from '../shared/Typography';

export const Hero = () => {
    return (
        <Section className={styles.hero}>
            <Container>
                <div className={styles.content}>
                    <Typography variant="h1" className={styles.heroTitle}>
                        Varun Dev Coaching Center
                    </Typography>
                    <Typography variant="body" className={styles.description}>
                        Empowering students to achieve their academic goals through personalized coaching and expert guidance.
                    </Typography>
                </div>
            </Container>
        </Section>
    );
};
