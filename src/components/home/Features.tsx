import { features } from "@/data/features";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import styles from "./Home.module.css";
import * as LucideIcons from "lucide-react";

export function Features() {
    return (
        <Section bg="secondary">
            <h2 className="section-title text-center" style={{ marginBottom: '3rem' }}>Why Choose VDCC?</h2>
            <div className={styles.featuresGrid}>
                {features.map((feature) => {
                    // Dynamic icon rendering
                    const Icon = (LucideIcons as any)[feature.iconName] || LucideIcons.Star;

                    return (
                        <Card key={feature.id}>
                            <div className={styles.featureIcon}>
                                <Icon size={32} />
                            </div>
                            <h3 className={styles.featureTitle}>{feature.title}</h3>
                            <p className={styles.featureDesc}>{feature.description}</p>
                        </Card>
                    );
                })}
            </div>
        </Section>
    );
}
