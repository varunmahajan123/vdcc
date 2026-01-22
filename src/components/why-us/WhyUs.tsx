import React from 'react';
import styles from './WhyUs.module.css';
import { Section } from '../shared/Section';
import { Container } from '../shared/Container';
import { Typography } from '../shared/Typography';
import { WhyUsCard } from './WhyUsCard';

import { GraduationCap, Users, Trophy } from 'lucide-react';

export const WhyUs = () => {
    return (
        <Section className={styles.whyUs}>
            <Container>
                <Typography variant="h2" className={styles.title}>Why Choose Us</Typography>
                <div className={styles.grid}>
                    <WhyUsCard
                        title="Expert Faculty"
                        description="Learn from regular experts with years of experience."
                        icon={GraduationCap}
                    />
                    <WhyUsCard
                        title="Personalized Attention"
                        description="Small batch sizes ensuring individual focus."
                        icon={Users}
                    />
                    <WhyUsCard
                        title="Proven Results"
                        description="Consistent track record of academic excellence."
                        icon={Trophy}
                    />
                </div>
            </Container>
        </Section>
    );
};
