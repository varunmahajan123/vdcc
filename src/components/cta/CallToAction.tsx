import React from 'react';
import styles from './CTA.module.css';
import { Section } from '../shared/Section';
import { Container } from '../shared/Container';
import { Typography } from '../shared/Typography';

export const CallToAction = () => {
    return (
        <Section className={styles.cta}>
            <Container>
                <div className={styles.content}>
                    <Typography variant="h2" className={styles.title}>Ready to Start Learning?</Typography>
                    <Typography variant="body" className={styles.description}>Join us today and take the first step towards your academic success.</Typography>
                    <button className={styles.button}>Contact Us Now</button>
                </div>
            </Container>
        </Section>
    );
};
