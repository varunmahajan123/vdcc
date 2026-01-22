import React from 'react';
import styles from './Stats.module.css';
import { Section } from '../shared/Section';
import { Container } from '../shared/Container';
import { Typography } from '../shared/Typography';

export const Stats = () => {
    return (
        <Section className={styles.stats}>
            <Container>
                <div className={styles.grid}>
                    <div className={styles.item}>
                        <Typography variant="h2" className={styles.number}>10,000+</Typography>
                        <Typography variant="body">Students Enrolled</Typography>
                    </div>
                    <div className={styles.item}>
                        <Typography variant="h2" className={styles.number}>15+</Typography>
                        <Typography variant="body">Expert Instructors</Typography>
                    </div>
                    <div className={styles.item}>
                        <Typography variant="h2" className={styles.number}>100%</Typography>
                        <Typography variant="body">Success Rate</Typography>
                    </div>
                    <div className={styles.item}>
                        <Typography variant="h2" className={styles.number}>25+</Typography>
                        <Typography variant="body">Years Experience</Typography>
                    </div>
                </div>
            </Container>
        </Section>
    );
};
